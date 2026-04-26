"use client";

import { ReactNode } from "react";

type DownloadLinkProps = {
  href: string;
  format: string;
  category?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Anchor tag that fires a `download_completed` GA4 event on click.
 * Used by the /downloads page to track which file/format was selected.
 */
export default function DownloadLink({
  href,
  format,
  category,
  className,
  children,
}: DownloadLinkProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "download_completed", {
        event_category: category ?? "downloads",
        event_label: href,
        file_format: format,
      });
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
