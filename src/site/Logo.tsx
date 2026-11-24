/** Aiveth's mark (design C "Seal"): byte for byte the product's `aiveth.svg`, drawn inline. */
export default function Logo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" style={{ display: "block", flex: "none" }}>
      <circle cx="32" cy="32" r="30" fill="#1D4ED8" />
      <path d="M19 45L32 17L45 45" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="42" r="4.5" fill="#FFFFFF" />
    </svg>
  );
}
