// Turns a deck exported from Claude Design (`*.dc.html`) into one self-contained HTML file in public/resources/.
// The export needs the design tool's runtime (support.js, React from a CDN) and a `../shared/` folder; the slides
// themselves are plain HTML with inline styles, so this keeps them and adds a small viewer instead.
// Usage: npx tsx scripts/deck-html.ts "<source>.dc.html" public/resources/<name>.deck.html [--hold 26-30,41]
// --hold replaces the listed slides with a "shown in the room" slide: the answers to an exercise, published after the session.
import { readFileSync, writeFileSync } from 'node:fs';

const [src, out, flag, holdList] = process.argv.slice(2);
if (!src || !out) throw new Error('Usage: tsx scripts/deck-html.ts <source.dc.html> <output.html> [--hold 26-30,41]');
const held = new Set<number>();
if (flag === '--hold') {
  for (const part of (holdList ?? '').split(',')) {
    const [a, b = a] = part.split('-').map(Number);
    for (let n = a; n <= b; n++) held.add(n);
  }
}
const html = readFileSync(src, 'utf8');

const title = /<title>([\s\S]*?)<\/title>/.exec(html)?.[1] ?? 'Slides';
// The tool's own CSS, minus the @font-face rules that point to ../shared/fonts (Google Fonts serves the same families).
const style = (/<helmet>[\s\S]*?<style>([\s\S]*?)<\/style>/.exec(html)?.[1] ?? '').replace(/@font-face\{[^}]*\}\s*/g, '');
const found = html.match(/<section[\s\S]*?<\/section>/g) ?? [];
if (found.length === 0) throw new Error(`No slides found in ${src}`);
const heldSlide = (n: number) => `<section data-label="${n} Held back" style="background:#0D0D0D;color:#FDFDFD;font-family:Inter,'Helvetica Neue',sans-serif;padding:72px 120px;display:flex;flex-direction:column;justify-content:center;gap:32px"><div style="font-family:Archivo,Inter,sans-serif;font-weight:300;text-transform:uppercase;letter-spacing:0.16em;font-size:24px;color:#888A8C">Slide ${n}</div><div style="font-family:'Fjalla One',sans-serif;text-transform:uppercase;font-size:88px;line-height:1;max-width:1500px">Shown in the room, after the exercise</div><div style="font-size:32px;line-height:1.4;color:#C6C9CC;max-width:1400px">This slide gives the answer to an exercise. It is added here after the session.</div></section>`;
const sections = found.map((s, k) => (held.has(k + 1) ? heldSlide(k + 1) : s));

// Logo: the site's official file. Photos: /resources/img/, where they go once supplied (a missing one is hidden).
const slides = sections.join('\n')
  .replaceAll('../shared/logos/OSS-logo-greyscale.svg', '/logos/oss-ventures-on-dark.svg')
  .replaceAll('../shared/img/', '/resources/img/');
if (slides.includes('../shared/')) throw new Error(`Unmapped ../shared/ reference left in ${src}`);

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@100..900&family=Fjalla+One&family=Geist+Mono:wght@100..900&family=Inter:wght@100..900&display=swap">
<style>
${style}
html,body{height:100%;overflow:hidden}
#stage{position:absolute;top:0;left:0;width:1920px;height:1080px;transform-origin:0 0}
#stage>section{position:absolute;top:0;left:0;width:1920px;height:1080px;box-sizing:border-box;visibility:hidden}
#stage>section::after{content:"";position:absolute;inset:0;z-index:50;opacity:.5;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='760' height='440'><text x='380' y='220' text-anchor='middle' dominant-baseline='middle' transform='rotate(-30 380 220)' font-family='Inter,Arial,sans-serif' font-size='34' font-weight='600' fill='%230D0D0D' fill-opacity='0.1'>%C2%A9 OSS Ventures · FDE School</text></svg>");pointer-events:none;background-repeat:repeat;-webkit-print-color-adjust:exact;print-color-adjust:exact}@media print{#stage>section::after{opacity:.85}}
#stage>section.on{visibility:visible}
#bar{position:fixed;bottom:0;left:0;right:0;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:8px 16px;font:13px/1.2 Inter,sans-serif;color:#C6C9CC;background:rgba(13,13,13,.85);opacity:0;transition:opacity .2s}
body:hover #bar,#bar:focus-within{opacity:1}
#bar button{font:inherit;color:inherit;background:none;border:1px solid #555;padding:4px 10px;cursor:pointer}
#bar button:hover{border-color:#FD594F;color:#FD594F}
@media print{html,body{height:auto;overflow:visible}#bar{display:none}#stage{position:static;transform:none!important}
#stage>section{position:relative;visibility:visible;break-after:page}@page{size:1920px 1080px;margin:0}}
</style>
</head>
<body>
<div id="stage">
${slides}
</div>
<div id="bar"><span>Arrows, space or click to move. F for full screen.</span><span><button id="prev" aria-label="Previous slide">&larr;</button> <span id="count"></span> <button id="next" aria-label="Next slide">&rarr;</button> <button id="full">Full screen</button></span></div>
<script>
(() => {
  const stage = document.getElementById('stage');
  const slides = [...stage.children];
  const count = document.getElementById('count');
  let i = 0;
  const fromHash = () => Math.min(slides.length, Math.max(1, parseInt(location.hash.slice(1), 10) || 1)) - 1;
  function show(n) {
    i = Math.min(slides.length - 1, Math.max(0, n));
    slides.forEach((s, k) => s.classList.toggle('on', k === i));
    count.textContent = (i + 1) + ' / ' + slides.length;
    history.replaceState(null, '', '#' + (i + 1));
  }
  // The slides are drawn at 1920x1080 and scaled to fit the window, centred.
  function fit() {
    const k = Math.min(innerWidth / 1920, innerHeight / 1080);
    stage.style.transform = 'translate(' + (innerWidth - 1920 * k) / 2 + 'px,' + (innerHeight - 1080 * k) / 2 + 'px) scale(' + k + ')';
  }
  // From the design tool: shrink a text box's font (down to 80% of its base) until it fits its slot.
  function fitText() {
    document.querySelectorAll('[data-fit]').forEach((box) => {
      const inner = box.firstElementChild;
      if (!inner) return;
      const base = parseFloat(inner.getAttribute('data-base') || '30');
      const min = Math.max(Math.ceil(24 / 0.9), Math.round(base * 0.8));
      let size = base;
      inner.style.fontSize = size + 'px';
      for (let n = 0; n < 20 && inner.offsetHeight > box.clientHeight + 1 && size > min; n++) inner.style.fontSize = (size = Math.max(min, size - 1)) + 'px';
    });
  }
  document.querySelectorAll('img').forEach((img) => {
    const hide = () => { img.style.display = 'none'; };
    if (img.complete && !img.naturalWidth) hide(); else img.addEventListener('error', hide);
  });
  const full = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.());
  addEventListener('keydown', (e) => {
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) show(i + 1);
    else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) show(i - 1);
    else if (e.key === 'Home') show(0);
    else if (e.key === 'End') show(slides.length - 1);
    else if (e.key === 'f' || e.key === 'F') full();
    else return;
    e.preventDefault();
  });
  stage.addEventListener('click', (e) => { if (!e.target.closest('a')) show(e.clientX < innerWidth / 3 ? i - 1 : i + 1); });
  let x0 = null;
  addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  addEventListener('touchend', (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(dx < 0 ? i + 1 : i - 1); x0 = null; });
  document.getElementById('prev').onclick = () => show(i - 1);
  document.getElementById('next').onclick = () => show(i + 1);
  document.getElementById('full').onclick = full;
  addEventListener('resize', fit);
  addEventListener('hashchange', () => show(fromHash()));
  fit();
  show(fromHash());
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => { fitText(); setTimeout(fitText, 700); });
})();
</script>
</body>
</html>
`;
writeFileSync(out, page);
console.log(`${out}: ${sections.length} slides`);
