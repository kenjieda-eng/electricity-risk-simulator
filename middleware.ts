import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const BASIC_AUTH_USER = "kenji";
const BASIC_AUTH_PASSWORD = "edaedaeda";
const AUTH_REALM = 'Basic realm="Admin Area"';

function unauthorizedResponse() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": AUTH_REALM,
    },
  });
}

function isAuthorized(request: NextRequest): boolean {
  const authorization = request.headers.get("authorization");
  if (!authorization || !authorization.startsWith("Basic ")) {
    return false;
  }

  const encoded = authorization.slice("Basic ".length).trim();
  if (!encoded) {
    return false;
  }

  let decoded = "";
  try {
    decoded = atob(encoded);
  } catch {
    return false;
  }

  const separatorIndex = decoded.indexOf(":");
  if (separatorIndex < 0) {
    return false;
  }

  const user = decoded.slice(0, separatorIndex);
  const password = decoded.slice(separatorIndex + 1);
  return user === BASIC_AUTH_USER && password === BASIC_AUTH_PASSWORD;
}

export function middleware(request: NextRequest) {
  if (isAuthorized(request)) {
    return NextResponse.next();
  }
  return unauthorizedResponse();
}

export const config = {
  matcher: ["/admin/:path*"],
};
