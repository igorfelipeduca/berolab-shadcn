type ComponentShowcaseProps = {
  name: string;
  children: React.ReactNode;
  variants: string[];
};

export default function ComponentShowcase({
  name,
  children,
  variants,
}: ComponentShowcaseProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm shadow-lg shadow-black/5 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-foreground tracking-tight">
              {name}
            </h2>

            <span className="text-zinc-400 text-sm font-medium mt-8">
              Variantes
            </span>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {variants.map((variant) => (
                <span
                  key={variant}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground border border-border/30 transition-colors hover:bg-muted/70"
                >
                  {variant}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-lg pointer-events-none" />
          <div className="relative p-6 rounded-lg border border-border/30 bg-background/50 backdrop-blur-sm">
            <div className="flex flex-wrap items-center gap-3">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
