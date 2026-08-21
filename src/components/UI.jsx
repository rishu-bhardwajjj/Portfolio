export function Eyebrow({ n, children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono text-xs tracking-[0.25em] text-teal">{n}</span>
      <span className="h-px w-10 bg-hair"></span>
      <span className="font-mono text-xs tracking-[0.3em] text-muted uppercase">{children}</span>
    </div>
  );
}

export function Tag({ children }) {
  return (
    <span className="font-mono text-[11px] tracking-wide text-muted/90 border border-hair rounded-full px-2.5 py-1 bg-white/[0.02]">
      {children}
    </span>
  );
}
