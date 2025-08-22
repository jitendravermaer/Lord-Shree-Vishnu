(function () {
  const marker = "/Lord Vishnu/";
  const path = decodeURI(location.pathname);
  const idx = path.indexOf(marker);
  const root = idx >= 0 ? path.substring(0, idx + marker.length) : (document.baseURI || "/");
  function byId(id) { return document.getElementById(id); }

  // Inject nav and footer
  function inject(selector, file) {
    fetch(root + file).then(r => r.text()).then(html => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("div");
        el.id = selector.replace("#", "");
        (document.body.firstElementChild || document.body).before(el);
      }
      el.innerHTML = html;
      afterIncludes();
    }).catch(() => { });
  }

  // Load manifest for navigation order
  let manifest = null;
  fetch(root + "manifest.json").then(r => r.json()).then(j => { manifest = j; }).catch(() => { });

  // Floating action buttons
  function buildFAB() {
    const fab = document.createElement("div");
    fab.className = "lv-fab";
    fab.innerHTML = `
      <a href="#" id="lv-home" aria-label="Home" title="Home">🏠</a><span class="hint">Home</span>
      <button id="lv-up" aria-label="Up" title="Scroll to top">↑</button><span class="hint">Up</span>
    `;
    document.body.appendChild(fab);

    byId("lv-home").addEventListener("click", (e) => { e.preventDefault(); location.href = root + "index.html"; });
    byId("lv-up").addEventListener("click", (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
    byId("lv-prev").addEventListener("click", (e) => { e.preventDefault(); goRelative(-1); });
    byId("lv-next").addEventListener("click", (e) => { e.preventDefault(); goRelative(1); });
  }

  function normalize(rel) {
    return rel.replace(/\\/g, "/");
  }

  function currentRelative() {
    // Returns path relative to root
    const p = decodeURI(location.pathname);
    const start = p.indexOf(marker);
    return start >= 0 ? p.substring(start + marker.length) : p;
  }

  function goRelative(delta) {
    if (!manifest || !manifest.pages) { return; }
    const list = manifest.pages.map(normalize);
    const cur = normalize(currentRelative().replace(/^\/+/, ""));
    let idx = list.indexOf(cur);
    if (idx === -1) {
      // Try to match by file name only
      const file = cur.split("/").pop();
      idx = list.findIndex(x => x.split("/").pop() === file);
    }
    if (idx === -1) return;
    let next = (idx + delta) % list.length;
    if (next < 0) next = list.length - 1;
    location.href = root + list[next];
  }

  function ensureViewport() {
    if (!document.querySelector('meta[name="viewport"]')) {
      const m = document.createElement("meta");
      m.name = "viewport";
      m.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(m);
    }
  }

  function injectAssets() {
    // Add common.css if not present
    const hasCommon = !!Array.from(document.styleSheets || []).find(s => (s.href || "").includes("common.css"));
    if (!hasCommon) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = root + "common.css";
      document.head.appendChild(link);
    }
  }

  function themeInit() {
    const key = "lv-theme";
    function apply(t) {
      document.documentElement.dataset.theme = t;
      if (t === "dark") { document.documentElement.classList.add("dark-mode"); }
      else { document.documentElement.classList.remove("dark-mode"); }
    }
    const saved = localStorage.getItem(key) || "auto";
    apply(saved);
    document.addEventListener("click", (e) => {
      if (e.target && e.target.id === "toggle-dark") {
        e.preventDefault();
        const curr = localStorage.getItem(key) || "auto";
        const next = curr === "dark" ? "light" : (curr === "light" ? "auto" : "dark");
        localStorage.setItem(key, next);
        apply(next);
        e.target.setAttribute("aria-pressed", next === "dark");
      }
      if (e.target && e.target.id === "jump-up") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  function afterIncludes() {
    // Adjust href for Home in nav include to use root
    const home = document.querySelector('[data-home]');
    if (home) home.setAttribute("href", root + "index.html");
  }


  // Boot
  ensureViewport();
  injectAssets();
  inject("#global-nav", "nav.html");
  inject("#global-footer", "footer.html");
  buildFAB();
  themeInit();
  ensureSkipLink();
})();
