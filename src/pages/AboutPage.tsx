import { Smartphone, PenTool } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { SectionHeading } from "@/components/SectionHeading";

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

const skills = ["Flutter", "Dart", "C#", "Hive","Java","Swift",,"REST","GraphQL","Webhooks","Provider","Bloc","GetIt","Firebase","Supabase","CosmosDB", "SQL", "Figma", "Git", "CI/CD", "Adobe Illustrator", "Adobe Photoshop", "Adobe XD"];

export default function AboutPage() {
  return (
    <PortfolioLayout>
      <SectionHeading>About Me</SectionHeading>

      <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          I'm a Flutter developer with a Bachelors degree in Software Engineering and having 4+ years of experience building high-quality mobile
          applications for both Android and iOS. I specialize in creating smooth, responsive, and
          scalable apps that deliver a seamless user experience across devices.
        </p>
        <p>
          My work goes beyond just UI. I focus on clean architecture, efficient state management,
          and performance optimization to ensure apps feel fast and reliable in real-world use.
          From integrating APIs and third-party services to crafting polished interfaces, I aim to
          build products that are both functional and thoughtfully designed.
        </p>
        <p>
          I value attention to detail, maintainable code, and delivering solutions that not only
          work — but work well. If you're looking to turn an idea into a solid, production-ready
          app, I'd be glad to collaborate.
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
