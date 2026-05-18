import Link from "next/link";
import { Logo } from "@/components/Logo";
import { NewsletterForm } from "@/components/NewsletterForm";

const LINKEDIN_URL =
  "https://www.linkedin.com/company/reporadar/?viewAsMember=true";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <HowItWorks />
        <Vision />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-navy-100/60 bg-cream-50/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="RepoRadar home" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-navy-600 md:flex">
          <a href="#how-it-works" className="transition hover:text-navy-800">
            How it works
          </a>
          <a href="#vision" className="transition hover:text-navy-800">
            Vision
          </a>
          <a href="#newsletter" className="transition hover:text-navy-800">
            Newsletter
          </a>
        </nav>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-semibold text-navy-800 shadow-sm transition hover:border-navy-300 hover:bg-navy-50"
        >
          <LinkedInIcon className="h-4 w-4" />
          <span>LinkedIn</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-radar-grid opacity-70"
      />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16 lg:pb-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-coral-200 bg-coral-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-coral-700">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="radar-ping inline-flex h-full w-full rounded-full bg-coral-400" />
            </span>
            Daily discovery
          </span>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-navy-800 sm:text-6xl lg:text-[64px]">
            Find tomorrow&apos;s open source,{" "}
            <span className="text-coral-500">today.</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-navy-600">
            RepoRadar scans GitHub and hackathon launches every day, evaluates
            them with a language model, and turns the signal into ready-to-share
            content for builders, founders, and investors.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#newsletter"
              className="inline-flex h-12 items-center justify-center rounded-full bg-navy-800 px-7 text-sm font-semibold tracking-wide text-cream-50 shadow-soft transition hover:bg-navy-700"
            >
              Join the newsletter
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-6 text-sm font-semibold text-navy-800 transition hover:border-navy-300"
            >
              <LinkedInIcon className="h-4 w-4" />
              Follow on LinkedIn
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-navy-100 pt-8">
            <Stat label="Sources" value="GitHub + Devpost" />
            <Stat label="Cadence" value="Daily" />
            <Stat label="Channels" value="IG · LinkedIn" />
          </dl>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <RadarVisual />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-400">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-navy-800">{value}</dd>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Discover",
      body:
        "We crawl the GitHub Search API and Devpost hackathon launches every morning, pulling in fresh repos before they hit the timeline.",
    },
    {
      title: "Evaluate",
      body:
        "Each candidate is scored by a language model across novelty, momentum, and quality — the noisy long tail gets filtered out automatically.",
    },
    {
      title: "Ship",
      body:
        "Winners get per-channel captions and posters generated in your house style, packaged and ready for Instagram, LinkedIn, and beyond.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="border-y border-navy-100 bg-white py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-600">
            How it works
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-navy-800 sm:text-4xl">
            One pipeline from raw GitHub firehose to publish-ready content.
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-navy-600">
            RepoRadar collapses what used to be three jobs — discovery,
            evaluation, and content — into a single daily workflow.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="group relative flex flex-col rounded-2xl border border-navy-100 bg-cream-50 p-7 transition hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-soft"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                Step 0{i + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-navy-800">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">
                {step.body}
              </p>
              <span
                aria-hidden
                className="mt-6 inline-flex h-1.5 w-10 rounded-full bg-coral-300 transition group-hover:w-16 group-hover:bg-coral-400"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" className="bg-cream-50 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.4fr,0.6fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-600">
              Our vision
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-navy-800 sm:text-4xl">
              Great software shouldn&apos;t have to fight for attention.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-navy-700">
            <p>
              The most consequential projects of the next decade are being
              committed right now — buried under a million stars-per-day,
              hidden in a hackathon submission, lost in a release feed nobody
              reads.
            </p>
            <p>
              RepoRadar exists to make discovery automatic. Builders should be
              free to build, and the rest of us should stop missing the work
              shaping the future.
            </p>
            <p className="text-navy-800">
              We&apos;re building the radar for open source — calm, consistent,
              and tuned for signal over hype.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="bg-white py-24 sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-cream-50 px-8 py-12 shadow-soft sm:px-12 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-coral-200/50 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-navy-100/70 blur-3xl"
          />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-600">
              Newsletter
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-navy-800 sm:text-4xl">
              Get the radar in your inbox.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-navy-600">
              A weekly digest of the most promising repos and hackathon
              projects we&apos;ve found — hand-picked from the daily scan. No
              fluff, unsubscribe anytime.
            </p>

            <div className="mt-8">
              <NewsletterForm variant="inline" />
            </div>

            <p className="mt-4 text-xs text-navy-400">
              We&apos;ll only use your email to send the RepoRadar newsletter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-cream-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-navy-500">
            Automatic discovery for the projects shaping the future.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-navy-600">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-navy-800"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a href="#newsletter" className="transition hover:text-navy-800">
            Newsletter
          </a>
          <span className="text-navy-400">
            © {new Date().getFullYear()} RepoRadar
          </span>
        </div>
      </div>
    </footer>
  );
}

function RadarVisual() {
  return (
    <div className="relative h-[420px] w-[420px]">
      <svg
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
        aria-hidden
      >
        <defs>
          <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF9B7A" stopOpacity="0.18" />
            <stop offset="65%" stopColor="#FF9B7A" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sweep" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF9B7A" stopOpacity="0" />
            <stop offset="100%" stopColor="#FF9B7A" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        <circle cx="210" cy="210" r="200" fill="url(#radarFill)" />
        {[60, 110, 160, 200].map((r) => (
          <circle
            key={r}
            cx="210"
            cy="210"
            r={r}
            stroke="#0F2143"
            strokeOpacity="0.12"
            strokeWidth="1"
            fill="none"
          />
        ))}
        <line
          x1="10"
          y1="210"
          x2="410"
          y2="210"
          stroke="#0F2143"
          strokeOpacity="0.1"
          strokeWidth="1"
        />
        <line
          x1="210"
          y1="10"
          x2="210"
          y2="410"
          stroke="#0F2143"
          strokeOpacity="0.1"
          strokeWidth="1"
        />

        <g className="radar-sweep">
          <path
            d="M210 210 L410 210 A200 200 0 0 0 350 70 Z"
            fill="url(#sweep)"
          />
        </g>

        <circle cx="210" cy="210" r="6" fill="#0F2143" />

        <g>
          <circle cx="330" cy="120" r="6" fill="#FF9B7A" />
          <circle
            cx="330"
            cy="120"
            r="6"
            fill="#FF9B7A"
            opacity="0.35"
            className="radar-blip"
          />
        </g>
        <circle cx="120" cy="260" r="4" fill="#FF9B7A" opacity="0.7" />
        <circle cx="250" cy="320" r="3" fill="#FF9B7A" opacity="0.55" />
      </svg>
    </div>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M20.451 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.355V9h3.414v1.561h.046c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.555V9h3.559v11.452z" />
    </svg>
  );
}
