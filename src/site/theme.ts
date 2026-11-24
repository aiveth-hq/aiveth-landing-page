import { makeTheme } from "@/theme/theme";

/** The site's colours (Gooclaim's design system, Aiveth's blue as the brand). */
const theme = makeTheme("av", {
  bg: ["#FAFAF9", "#07090F"],
  surface: ["#FFFFFF", "#0F131C"],
  surface2: ["#F2F1EF", "#151A25"],
  border: ["#E7E5E4", "#232A38"],
  text: ["#0C0A09", "#F5F5F4"],
  text2: ["#57534E", "#A8A29E"],
  text3: ["#78716C", "#8C8783"],
  btnBg: ["#0C0A09", "#F5F5F4"],
  btnText: ["#FAFAF9", "#0C0A09"],
  brand: ["#1D4ED8", "#60A5FA"],
  brandSoft: ["#E8EEFE", "rgba(96,165,250,.14)"],
  brandLine: ["#C7D7FE", "rgba(96,165,250,.35)"],
  green: ["#047857", "#6EE7B7"],
  greenSoft: ["#ECFDF5", "rgba(16,185,129,.14)"],
  violet: ["#6D28D9", "#C4B5FD"],
  violetSoft: ["#F5F3FF", "rgba(139,92,246,.16)"],
  amber: ["#B45309", "#FCD34D"],
  amberSoft: ["#FFFBEB", "rgba(245,158,11,.14)"],
  grad: ["linear-gradient(90deg, #1D4ED8 0%, #0E7FBF 55%, #0891B2 100%)", "linear-gradient(90deg, #7AA5FF 0%, #38BDF8 55%, #22D3EE 100%)"],
  dot: ["rgba(87,83,78,.18)", "rgba(148,163,184,.16)"],
  glass: ["rgba(255,255,255,.86)", "rgba(15,19,28,.78)"],
  cardShadow: ["0 1px 2px rgba(12,10,9,.04), 0 30px 80px rgba(30,58,138,.16)", "0 0 0 1px rgba(255,255,255,.02), 0 30px 80px rgba(0,0,0,.55)"],
  softShadow: ["0 1px 2px rgba(12,10,9,.03), 0 12px 32px rgba(30,58,138,.06)", "none"],
  code: ["#0F131C", "#0B0F17"],
  codeText: ["#E5E7EB", "#E5E7EB"],
  codeDim: ["#9CA3AF", "#8C8783"],
  codeKey: ["#93C5FD", "#93C5FD"],
  meshA: ["radial-gradient(circle, rgba(147,197,253,.70) 0%, rgba(147,197,253,0) 65%)", "radial-gradient(circle, rgba(59,130,246,.42) 0%, rgba(59,130,246,0) 65%)"],
  meshB: ["radial-gradient(circle, rgba(165,243,252,.60) 0%, rgba(165,243,252,0) 65%)", "radial-gradient(circle, rgba(34,211,238,.24) 0%, rgba(34,211,238,0) 65%)"],
});

export const t = theme.t;
export const mono = "'JetBrains Mono', monospace";

export const siteCss =
  theme.css +
  `.av a{color:inherit;text-decoration:none}` +
  `.av a:hover{opacity:.8}` +
  `.av button{font:inherit;cursor:pointer}` +
  `@media (max-width:860px){.av .av-hide-sm{display:none!important}}` +
  // Cards lift a little under the pointer; nothing moves for anyone who asked for less motion.
  `.av .av-card{transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s,border-color .25s}` +
  `@media (hover:hover) and (prefers-reduced-motion:no-preference){.av .av-card:hover{transform:translateY(-3px);border-color:${theme.t.brandLine}}}` +
  `.av a[data-btn]{transition:transform .2s cubic-bezier(.16,1,.3,1),opacity .2s}` +
  `@media (hover:hover) and (prefers-reduced-motion:no-preference){.av a[data-btn]:hover{opacity:1;transform:translateY(-1px)}}`;
