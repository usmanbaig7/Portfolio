import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { projects } from "@/data/projects";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <PortfolioLayout>
      <div className="mb-6">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        {/* Hero banner */}
        <div
          className={`relative flex aspect-video items-center justify-center bg-gradient-to-br ${project.gradient}`}
        >
          <span className="text-7xl font-bold tracking-tight text-white/95 drop-shadow-md">
            {project.initials}
          </span>
        </div>

        <div className="p-8">
          {/* Category badge */}
          <div className="mb-4">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
            {project.title}
          </h1>

          {/* Full description */}
          {project.fullDescription && (
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          )}

          {/* Key Development Strategies & Technologies */}
          {project.keyPoints && project.keyPoints.length > 0 && (
            <div className="mt-8">
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Key Development Strategies &amp; Technologies
              </h2>
              <ul className="space-y-3">
                {project.keyPoints.map((kp) => (
                  <li key={kp.label} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">{kp.label}:</span>{" "}
                      {kp.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Fallback description for projects without details */}
          {!project.fullDescription && (
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description ||
                "Detailed information about this project is coming soon. Stay tuned for an in-depth case study showcasing our process, challenges, and the final solution."}
            </p>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-8">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Video */}
          {project.videoUrl && (
            <div className="mt-8">
              <h2 className="mb-4 text-lg font-semibold text-foreground">Project Video</h2>
              <div className="overflow-hidden rounded-xl border border-border">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={project.videoUrl}
                    title={`${project.title} demo video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PortfolioLayout>
  );
}
