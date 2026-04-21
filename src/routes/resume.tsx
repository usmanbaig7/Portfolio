import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Briefcase, Download } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Usman Baig" },
      { name: "description", content: "Education and professional experience of Usman Baig." },
      { property: "og:title", content: "Resume — Usman Baig" },
      { property: "og:description", content: "Education and professional experience of Usman Baig." },
    ],
  }),
  component: ResumePage,
});

const education = [
  {
    title: "BS in Software Engineering",
    place: "University of Kotli, Azad Kashmir, Pakistan",
    period: "2015 — 2019",
  },
  // {
  //   title: "Pre-Engineering, Intermediate",
  //   place: "DJ Sindh Government Science College",
  //   period: "2016 — 2018",
  // },
];

const experience = [
  {
    title: "Graphics Designer",
    place: "Heaven Technologies, Islamabad, Pakistan",
    period: "Feb 2020 — Sep 2020",
    bullets: [
      "Lead development of cross-platform mobile applications used by 100k+ users.",
      "Architected scalable API integrations and design-system primitives.",
      "Mentor junior developers through code reviews and pairing sessions.",
    ],
  },
  {
    title: "Mobile App Developer",
    place: "Zilon International, Lahore, Pakistan",
    period: "Nov 2021 — Present",
    bullets: [
      "Built customer-facing features across iOS and Android in Flutter and React Native.",
      "Integrated payment gateways and secure authentication flows.",
      "Collaborated with backend and design to ship monthly releases.",
    ],
  },
];

function ResumePage() {
  return (
    <PortfolioLayout>
      <SectionHeading>Resume</SectionHeading>

      <Section icon={<GraduationCap className="h-5 w-5" />} title="Education">
        <Timeline items={education} />
      </Section>

      <Section icon={<Briefcase className="h-5 w-5" />} title="Experience">
        <Timeline items={experience} />
      </Section>

      <a
        href="https://drive.google.com/file/d/1EbQgJv8QWIUJjnY7litxn4E9i4ei-3ap/view?usp=sharing"
        download
        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
      >
        <Download className="h-4 w-4" />
        Download CV
      </a>
    </PortfolioLayout>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="mb-6 flex items-center gap-3">
        <span className="icon-tile flex h-10 w-10 items-center justify-center rounded-xl">
          {icon}
        </span>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      {children}
    </section>
  );
}

type Item = { title: string; place: string; period: string; bullets?: string[] };

function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative ml-4 border-l border-border pl-6">
      {items.map((item, i) => (
        <li key={i} className="mb-8 last:mb-0">
          <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
          <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
          <p className="mt-1 text-sm font-medium text-primary">{item.place}</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
            {item.period}
          </p>
          {item.bullets && (
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
