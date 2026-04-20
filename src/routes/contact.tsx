import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Usman Baig" },
      { name: "description", content: "Get in touch with Usman Baig for collaboration." },
      { property: "og:title", content: "Contact — Usman Baig" },
      { property: "og:description", content: "Get in touch with Usman Baig for collaboration." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PortfolioLayout>
      <SectionHeading>Contact</SectionHeading>

      <div className="mb-10 overflow-hidden rounded-2xl border border-border">
        <iframe
          title="Karachi map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=66.9%2C24.78%2C67.2%2C25.0&layer=mapnik"
          className="h-64 w-full"
          loading="lazy"
        />
      </div>

      <h3 className="mb-6 text-2xl font-bold text-foreground">Contact Form</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          setTimeout(() => setSent(false), 3000);
        }}
        className="space-y-5"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Input name="name" placeholder="Full name" required />
          <Input name="email" type="email" placeholder="Email address" required />
        </div>
        <Input name="subject" placeholder="Subject" />
        <textarea
          name="message"
          required
          placeholder="Your message..."
          rows={6}
          className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          disabled={sent}
        >
          <Send className="h-4 w-4" />
          {sent ? "Message sent!" : "Send Message"}
        </button>
      </form>
    </PortfolioLayout>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
    />
  );
}
