import { Link, useLocation } from "@tanstack/react-router";

const tabs = [
  { to: "/", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/portfolio", label: "Portfolio" },
] as const;

export function PageNav() {
  const { pathname } = useLocation();

  return (
    <nav className="surface-card mb-6 flex items-center justify-end overflow-x-auto px-2 py-2 lg:absolute lg:right-0 lg:top-0 lg:mb-0 lg:rounded-bl-none lg:rounded-tr-none">
      <ul className="flex items-center gap-1">
        {tabs.map((tab) => {
          const active = pathname === tab.to;
          return (
            <li key={tab.to}>
              <Link
                to={tab.to}
                className={`relative inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition lg:px-5 ${
                  active
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
