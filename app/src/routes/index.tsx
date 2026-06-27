import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
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
  {
    name: "Santos Full Ice",
    brand: "Cartier",
    metal: "Silver / Full Ice",
    video: "/videos/watch-6.mp4",
    poster: "/images/santos-all-silver.png",
    description: "All-silver Santos with every surface paved in brilliant diamonds. Dark Roman numerals, date at 6, blue cabochon crown.",
    reelUrl: "https://www.instagram.com/reel/CviWX_OgXRE/",
  },
];

function Index() {
  return (
    <div className="min-h-dvh bg-[#0a0a0b] text-neutral-200 antialiased">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0b]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="text-lg font-semibold tracking-[0.02em] text-white">
            NICELY<span className="text-neutral-500"> ICEY</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#collection" className="text-sm text-neutral-400 transition-colors hover:text-white">Collection</a>
            <a href="#about" className="text-sm text-neutral-400 transition-colors hover:text-white">About</a>
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
            alt="Iced-out diamond watches by Nicely Icey"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-[#0a0a0b]/60" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-6 pb-20 pt-24">
          <div className="max-w-xl">
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
              Get Iced.
              <br />
              <span className="text-neutral-400">Stay Frosty.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-300">
              VVS quality iced-out watches. Cartier, Rolex, AP. Box and papers included. Same-day shipping with next-day arrival.
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
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">The Collection</h2>
          <p className="mt-3 max-w-lg text-neutral-400">
            Each piece is fully iced out with VVS quality stones and comes complete with box and papers. Prices vary by model and configuration.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {watches.map((watch) => (
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#111113] transition-colors hover:border-white/15">
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
              Built on Quality.
              <br />
              Priced for the Culture.
            </h2>
            <div className="mt-6 space-y-4 text-neutral-400">
              <p>
                Nicely Icey is a Los Angeles-based jewelry house specializing in fully iced-out luxury timepieces. Every watch we sell is set with VVS quality stones that pass all diamond testers and comes complete with box and papers.
              </p>
              <p>
                We carry iced-out Cartier Santos, Rolex Datejust, and Audemars Piguet Royal Oak in silver, two-tone, and full gold configurations. Whether you want to shine on a budget or go all out, we have a piece for you.
              </p>
              <p>
                Same-day shipping with next-day arrival is available nationwide. Private appointments and local pickup in Los Angeles. DM for all inquiries.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/5">
              <img
                src="/images/santos-silver-gold.png"
                alt="Iced-out Cartier Santos with gold accents"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Ready to Get Iced?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-neutral-400">
            DM for all inquiries and private appointments. Same-day shipping available.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/nicelyicey/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[0.97] active:translate-y-px"
            >
              DM on Instagram
            </a>
            <a
              href="https://www.instagram.com/nicelyicey/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              @nicelyicey
            </a>
          </div>
          <p className="mt-8 text-sm text-neutral-600">
            Based in Los Angeles. Shipping available nationwide.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a0a0b]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-neutral-600">
            Nicely Icey. Los Angeles, CA.
          </p>
          <a
            href="https://www.instagram.com/nicelyicey/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            @nicelyicey
          </a>
        </div>
      </footer>
    </div>
  );
}



