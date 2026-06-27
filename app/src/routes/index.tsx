import { createFileRoute } from "@tanstack/react-router";
import { StructuredData } from "../components/StructuredData";
import { siteUrl } from "../lib/site-url";

const OG_IMAGE =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3CDPptWtTaWWgv68PkxzHYjSoyM/hf_20260626_234826_17c51933-854f-4051-8a20-974c0435763b.png";

export const Route = createFileRoute("/")({
  head: () => {
    const url = siteUrl();
    return {
      meta: [
        { title: "Nicely Icey — Iced-Out Luxury Watches | Los Angeles, CA" },
        {
          name: "description",
          content:
            "Nicely Icey sells custom iced-out luxury watches in Los Angeles — Cartier Santos, AP Royal Oak, Rolex Datejust with diamond-set bezels. Shine on a budget.",
        },
        { property: "og:title", content: "Nicely Icey — Iced-Out Luxury Watches | Los Angeles, CA" },
        {
          property: "og:description",
          content:
            "Custom iced-out luxury watches in Los Angeles. Cartier Santos, AP Royal Oak, Rolex Datejust with diamond-set bezels. DM @nicelyicey to order.",
        },
        { property: "og:url", content: url },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:title", content: "Nicely Icey — Iced-Out Luxury Watches | Los Angeles, CA" },
        {
          name: "twitter:description",
          content:
            "Custom iced-out luxury watches in Los Angeles. Cartier Santos, AP Royal Oak, Rolex Datejust with diamond-set bezels. DM @nicelyicey to order.",
        },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: Index,
});

type Watch = {
  name: string;
  brand: string;
  metal: string;
  video: string;
  poster: string;
  description: string;
  reelUrl: string;
};

const watches: Watch[] = [
  {
    name: "Santos Skeleton",
    brand: "Cartier",
    metal: "Silver / Full Ice",
    video: "/videos/watch-1.mp4",
    poster: "/images/santos-skeleton-silver.png",
    description: "Santos Dumont skeleton with diamond-paved case, bracelet, and movement bridges. Blued sword hands, blue cabochon crown.",
    reelUrl: "https://www.instagram.com/reel/CzZSUurPSZR/",
  },
  {
    name: "Santos Two-Tone",
    brand: "Cartier",
    metal: "Rose Gold / Silver",
    video: "/videos/watch-2.mp4",
    poster: "/images/santos-rose-gold-twotone.png",
    description: "Rose gold bezel and center links with silver case. Fully paved dial, Roman numerals, date window at 6 o'clock.",
    reelUrl: "https://www.instagram.com/reel/C30u32vyUVS/",
  },
  {
    name: "Santos Gold Accent",
    brand: "Cartier",
    metal: "Silver / Yellow Gold",
    video: "/videos/watch-3.mp4",
    poster: "/images/santos-silver-gold.png",
    description: "Silver case and bracelet with yellow gold dial accents. Paved with VVS diamonds throughout. AUTOMATIC plate and date window.",
    reelUrl: "https://www.instagram.com/reel/C1AYoO_vGSv/",
  },
  {
    name: "Royal Oak Two-Tone",
    brand: "Audemars Piguet",
    metal: "Yellow Gold / Silver",
    video: "/videos/watch-4.mp4",
    poster: "/images/ap-royal-oak-twotone.png",
    description: "Octagonal gold bezel with exposed screws. Gold paved dial with stick markers. Two-tone bracelet fully set with diamonds.",
    reelUrl: "https://www.instagram.com/reel/Cu7TfzVAsqS/",
  },
  {
    name: "Datejust Full Ice",
    brand: "Rolex",
    metal: "Silver / Full Ice",
    video: "/videos/watch-5.mp4",
    poster: "/images/rolex-datejust-silver.png",
    description: "Oyster bracelet, flat bezel, and case completely paved. Diamond dial with Roman numerals and cyclops date at 3 o'clock.",
    reelUrl: "https://www.instagram.com/reel/C0fZurQvDQW/",
  },
];

const ABOUT_DESCRIPTION =
  "Nicely Icey is a Los Angeles-based jeweler specializing in custom iced-out luxury watches, including Cartier Santos, Audemars Piguet Royal Oak, and Rolex Datejust models, customized with diamond and gem-set bezels.";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is an iced-out watch?",
    a: "An iced-out watch is a luxury timepiece custom-set with diamonds or VVS-quality stones across the case, bezel, dial, and bracelet, giving the watch a fully paved, brilliant appearance. Nicely Icey ices out Cartier Santos, Audemars Piguet Royal Oak, and Rolex Datejust models.",
  },
  {
    q: "How much do iced-out watches cost at Nicely Icey?",
    a: "Nicely Icey offers iced-out luxury watches at affordable prices so you can shine on a budget. Exact pricing varies by watch model, metal configuration, and stone coverage. DM @nicelyicey on Instagram for a quote on any piece in the collection.",
  },
  {
    q: "What watch brands does Nicely Icey customize?",
    a: "Nicely Icey customizes Cartier Santos, Audemars Piguet Royal Oak, and Rolex Datejust watches. Each model is available in silver, two-tone, and full gold configurations with diamond-set bezels and paved dials.",
  },
  {
    q: "Where is Nicely Icey located?",
    a: "Nicely Icey is based in Los Angeles, CA. Private appointments and local pickup are available in Los Angeles, and same-day shipping with next-day arrival is offered nationwide.",
  },
  {
    q: "How do I order a custom iced-out watch?",
    a: "To order a custom iced-out watch, DM @nicelyicey on Instagram at https://instagram.com/nicelyicey. Send a message with the model you want and Nicely Icey will respond with pricing and availability.",
  },
  {
    q: "Do iced-out watches use real diamonds?",
    a: "Yes. Nicely Icey uses VVS quality stones that pass all diamond testers on every iced-out watch. Each piece comes complete with box and papers.",
  },
];

function buildSchema(siteUrl: string): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#org`,
        name: "Nicely Icey",
        url: siteUrl,
        logo: `${siteUrl}/images/nicely-icey-logo.png`,
        description: ABOUT_DESCRIPTION,
        foundingDate: "2023",
        areaServed: "United States",
        sameAs: ["https://instagram.com/nicelyicey"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Nicely Icey",
        url: siteUrl,
        publisher: { "@id": `${siteUrl}/#org` },
      },
      {
        "@type": "Store",
        "@id": `${siteUrl}/#store`,
        name: "Nicely Icey",
        url: siteUrl,
        description: ABOUT_DESCRIPTION,
        areaServed: "Los Angeles, CA",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Los Angeles",
          addressRegion: "CA",
          addressCountry: "US",
        },
        sameAs: ["https://instagram.com/nicelyicey"],
        parentOrganization: { "@id": `${siteUrl}/#org` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  });
}

function Index() {
  const schema = buildSchema(siteUrl());
  return (
    <div className="min-h-dvh bg-[#0a0a0b] text-neutral-200 antialiased">
      <StructuredData json={schema} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0b]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src="/images/nicely-icey-favicon.png"
              alt="Nicely Icey diamond logo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold tracking-[0.02em] text-white">
              NICELY<span className="text-neutral-500"> ICEY</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#collection" className="text-sm text-neutral-400 transition-colors hover:text-white">Collection</a>
            <a href="#about" className="text-sm text-neutral-400 transition-colors hover:text-white">About</a>
            <a href="#faq" className="text-sm text-neutral-400 transition-colors hover:text-white">FAQ</a>
            <a href="#contact" className="text-sm text-neutral-400 transition-colors hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-[0.97] active:translate-y-px"
          >
            DM to Order
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative min-h-[100dvh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="Iced-out diamond watches by Nicely Icey in Los Angeles"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-[#0a0a0b]/60" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-6 pb-20 pt-24">
          <div className="max-w-xl">
            <img
              src="/images/nicely-icey-logo.png"
              alt="Nicely Icey logo — Shine on a Budget"
              width={180}
              className="mb-8 w-44 rounded-2xl md:w-48"
            />
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              Iced-Out Luxury Watches
              <br />
              <span className="text-neutral-400">in Los Angeles</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-300">
              Nicely Icey is a Los Angeles-based jeweler specializing in custom iced-out luxury watches. Cartier Santos, Audemars Piguet Royal Oak, and Rolex Datejust models with diamond-set bezels. Shine on a budget.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#collection"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-[0.97] active:translate-y-px"
              >
                View Collection
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Private Appointment
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Strip */}
      <section className="border-y border-white/5 bg-[#0e0e10]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-8 text-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-neutral-300">VVS Quality</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-neutral-300">Pass All Diamond Testers</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-neutral-300">Box and Papers</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-neutral-300">Same-Day Shipping</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-neutral-300">Los Angeles Based</span>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Iced-Out Watch Collection</h2>
          <p className="mt-3 max-w-lg text-neutral-400">
            Each piece is fully iced out with VVS quality stones and comes complete with box and papers. Prices vary by model and configuration. DM @nicelyicey on Instagram to order.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {watches.map((watch) => (
            <div key={watch.name} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#111113] transition-colors hover:border-white/15">
              <div className="relative aspect-square overflow-hidden">
                <video
                  src={watch.video}
                  poster={watch.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-medium text-white">{watch.name}</h3>
                  <span className="text-xs uppercase tracking-wider text-neutral-500">{watch.brand}</span>
                </div>
                <p className="mt-1 text-sm text-neutral-500">{watch.metal}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{watch.description}</p>
                <a
                  href={watch.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 transition-colors hover:text-white"
                >
                  Watch on Instagram
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 bg-[#0e0e10]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              About Nicely Icey
            </h2>
            <div className="mt-6 space-y-4 text-neutral-400">
              <p>
                Nicely Icey is a Los Angeles-based jeweler specializing in custom iced-out luxury watches, including Cartier Santos, Audemars Piguet Royal Oak, and Rolex Datejust models, customized with diamond and gem-set bezels.
              </p>
              <p>
                Every watch Nicely Icey sells is set with VVS quality stones that pass all diamond testers and comes complete with box and papers. The collection includes iced-out Cartier Santos, Rolex Datejust, and Audemars Piguet Royal Oak in silver, two-tone, and full gold configurations.
              </p>
              <p>
                Whether you want to shine on a budget or go all out, Nicely Icey has an iced-out watch for you. Same-day shipping with next-day arrival is available nationwide. Private appointments and local pickup are available in Los Angeles, CA. DM @nicelyicey on Instagram for all inquiries.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/5">
              <img
                src="/images/santos-silver-gold.png"
                alt="Iced-out Cartier Santos with gold accents and diamond-set bezel"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Frequently Asked Questions About Iced-Out Watches
        </h2>
        <p className="mt-3 text-neutral-400">
          Answers to common questions about Nicely Icey's custom iced-out luxury watches.
        </p>
        <div className="mt-10 space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-white/5 bg-[#111113] px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-white">
                {item.q}
                <svg
                  className="h-4 w-4 shrink-0 text-neutral-500 transition-transform group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Order a Custom Iced-Out Watch
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-neutral-400">
            DM @nicelyicey on Instagram for all inquiries and private appointments. Same-day shipping available nationwide from Los Angeles, CA.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://instagram.com/nicelyicey"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[0.97] active:translate-y-px"
            >
              DM on Instagram
            </a>
            <a
              href="https://instagram.com/nicelyicey"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              @nicelyicey
            </a>
          </div>
          <p className="mt-8 text-sm text-neutral-600">
            Nicely Icey — Los Angeles, CA. Shipping available nationwide.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a0a0b]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/images/nicely-icey-favicon.png"
              alt="Nicely Icey diamond logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.02em] text-white">
                Nicely Icey
              </span>
              <span className="text-xs text-neutral-500">Shine on a budget</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <a
              href="https://instagram.com/nicelyicey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              @nicelyicey on Instagram
            </a>
            <p className="text-xs text-neutral-600">
              Los Angeles, CA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}





