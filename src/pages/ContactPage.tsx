import { useState } from "react";
import { Send } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PortfolioLayout>
      <SectionHeading>Contact</SectionHeading>

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
