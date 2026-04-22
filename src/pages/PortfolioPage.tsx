import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, type Category, projects } from "@/data/projects";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <PortfolioLayout>
      <SectionHeading>Portfolio</SectionHeading>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === c
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <Link
            key={p.id}
            to={`/portfolio/${p.id}`}
            className="group block overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-primary/40"
          >
            <div
              className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${p.gradient}`}
            >
              <span className="text-5xl font-bold tracking-tight text-white/95 drop-shadow-md">
                {p.initials}
              </span>
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/40 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="px-4 py-4">
              <h4 className="text-base font-semibold text-foreground">{p.title}</h4>
              <p className="mt-0.5 text-xs text-muted-foreground">{p.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </PortfolioLayout>
  );
}
