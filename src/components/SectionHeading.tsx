export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="accent-underline mb-10 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
      {children}
    </h2>
  );
}
