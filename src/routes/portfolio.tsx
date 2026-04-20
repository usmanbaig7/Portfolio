import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Usman Baig" },
      { name: "description", content: "Selected projects across mobile, web, and design." },
      { property: "og:title", content: "Portfolio — Usman Baig" },
      { property: "og:description", content: "Selected projects across mobile, web, and design." },
    ],
  }),
  component: PortfolioPage,
});

const categories = ["All", "Applications", "UI/UX"] as const;
type Category = (typeof categories)[number];

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  gradient: string;
  initials: string;
};

const projects: Project[] = [
  { title: "Lincsell POS", category: "Applications", gradient: "from-amber-500 to-rose-500", initials: "LW" },
  { title: "Lincsell POS Lite", category: "Applications", gradient: "from-sky-500 to-indigo-600", initials: "NM" },
  { title: "Family Thrift Center", category: "Applications", gradient: "from-orange-500 to-red-600", initials: "BR" },
  { title: "Managers App", category: "Applications", gradient: "from-emerald-500 to-teal-600", initials: "PF" },
  // { title: "Marqa Dashboard", category: "Web", gradient: "from-violet-500 to-fuchsia-600", initials: "MD" },
  // { title: "Kavi Blog", category: "Web", gradient: "from-pink-500 to-rose-600", initials: "KB" },
  // { title: "Orbit CMS", category: "Web", gradient: "from-cyan-500 to-blue-600", initials: "OC" },
  // { title: "Halcyon Banking", category: "UI/UX", gradient: "from-yellow-500 to-orange-600", initials: "HB" },
  // { title: "Nimbus Travel", category: "UI/UX", gradient: "from-indigo-500 to-purple-600", initials: "NT" },
];

function PortfolioPage() {
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
          <a
            key={p.title}
            href="#"
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
          </a>
        ))}
      </div>
    </PortfolioLayout>
  );
}
