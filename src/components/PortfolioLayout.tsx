import { ProfileSidebar } from "./ProfileSidebar";
import { PageNav } from "./PageNav";

export function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background py-6 lg:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 lg:flex-row lg:gap-8 lg:px-8">
        <ProfileSidebar />
        <main className="relative flex-1">
          <div className="lg:pt-0">
            <div className="lg:hidden">
              <PageNav />
            </div>
            <article className="surface-card relative px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
              <div className="hidden lg:block">
                <PageNav />
              </div>
              <div className="lg:pt-4">{children}</div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
