import fs from "node:fs";
import path from "node:path";

function walk(dir, found = []) {
  for (const name of fs.readdirSync(dir)) {
    const fp = path.join(dir, name);
    const st = fs.statSync(fp);
    if (st.isDirectory()) {
      if (name.startsWith("_") || name.startsWith("[") || name === "api" || name === "admin") continue;
      walk(fp, found);
    } else if (name === "page.tsx") {
      const c = fs.readFileSync(fp, "utf8");
      if (!c.includes("</main>") && !c.includes("CategoryNextStepCta")) {
        const m = c.match(/import\s+(\w+)\s+from\s+"[^"]*components\/articles\/([^"]+)"/);
        found.push({ path: fp.replaceAll("\\", "/"), wrapper: m ? m[2] : "(none)" });
      }
    }
  }
  return found;
}

const all = walk("src/app");
const wrapperCounts = {};
for (const f of all) {
  wrapperCounts[f.wrapper] = (wrapperCounts[f.wrapper] || 0) + 1;
}
console.log("Total pages without </main>:", all.length);
console.log("Wrapper distribution:", wrapperCounts);
if (all.length <= 60) {
  for (const f of all) console.log(`  ${f.wrapper}  ←  ${f.path}`);
}
