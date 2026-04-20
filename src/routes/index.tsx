import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, PenTool } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "About — Usman Baig" },
      {
        name: "description",
        content:
          "Software developer specializing in cross-platform mobile and web apps, REST APIs, and clean UI/UX.",
      },
      { property: "og:title", content: "About — Usman Baig" },
      {
        property: "og:description",
        content:
          "Software developer specializing in cross-platform mobile and web apps, REST APIs, and clean UI/UX.",
      },
    ],
  }),
  component: AboutPage,
});

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Crafting performant cross-platform applications for iOS and Android.",
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    desc: "Thoughtful interfaces that feel intuitive and look refined.",
  },
];

const skills = ["Flutter", "Dart", "C#", "Hive", "MongoDB", "SQL", "Figma"];

function AboutPage() {
  return (
    <PortfolioLayout>
      <SectionHeading>About Me</SectionHeading>

      <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          I'm a software developer focused on building polished, cross-platform experiences. My
          work spans mobile and web — from architecting REST APIs and integrating third-party
          services to shipping interfaces that feel fast and considered.
        </p>
        <p>
          I care about details: clean state management, reliable performance, and UI that respects
          the user's time. If you're looking for a partner to bring your idea to life with
          craft and pace, let's talk.
        </p>
      </div>

      <div className="mt-14">
        <h3 className="mb-8 text-2xl font-bold text-foreground">What I'm Doing</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-primary/40"
            >
              <span className="icon-tile flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <s.icon className="h-6 w-6" />
              </span>
              <div>
                <h4 className="text-base font-semibold text-foreground">{s.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h3 className="mb-8 text-2xl font-bold text-foreground">Skills</h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </PortfolioLayout>
  );
}
