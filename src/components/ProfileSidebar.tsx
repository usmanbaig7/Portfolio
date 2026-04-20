import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import avatar from "@/assets/avatar.png";

export function ProfileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="surface-card w-full lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:w-[340px] lg:shrink-0 lg:overflow-y-auto">
      <div className="p-6 lg:p-8">
        {/* Avatar */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-3xl bg-secondary lg:h-36 lg:w-36">
              <img
                src={avatar}
                alt="Usman Baig"
                width={512}
                height={512}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-card bg-emerald-500">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-300" />
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Usman Baig</h1>
            <span className="mt-3 inline-block rounded-md bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              Software Developer
            </span>
          </div>
        </div>

        {/* Mobile expand toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-xs font-medium text-muted-foreground lg:hidden"
        >
          Show contacts
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        <div className={`${open ? "block" : "hidden"} lg:block`}>
          <div className="my-6 h-px bg-border" />

          {/* Contact info */}
          <ul className="space-y-5">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="usman.baig@example.com" />
            <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+92 300 1234567" />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value="Karachi, Pakistan" />
            <ContactRow icon={<Globe className="h-4 w-4" />} label="Website" value="usmanbaig.dev" />
          </ul>

          <div className="my-6 h-px bg-border" />

          {/* Socials */}
          <div className="flex items-center justify-center gap-2">
            <SocialLink href="#" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialLink>
            <SocialLink href="#" label="GitHub"><Github className="h-4 w-4" /></SocialLink>
            <SocialLink href="#" label="Twitter"><Twitter className="h-4 w-4" /></SocialLink>
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center gap-3">
      <span className="icon-tile flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="truncate text-sm text-foreground">{value}</p>
      </div>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}
