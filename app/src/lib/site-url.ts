// Server-safe site URL resolution for SEO canonical/OG tags.
//
// Set SITE_URL in wrangler.jsonc "vars" (or the Cloudflare dashboard) to your
// custom domain, e.g.:  "vars": { "SITE_URL": "https://nicelyicey.com" }
//
// This runs during SSR (inside the route head() function), where the Cloudflare
// Worker env is available. The default fallback is the workers.dev subdomain
// Wrangler auto-generates from the Worker name ("nicely-icey").

import { env } from "cloudflare:workers";

const DEFAULT_SITE_URL = "https://nicely-icey.workers.dev";

export function siteUrl(): string {
  const bindings = env as unknown as { SITE_URL?: string };
  const url = bindings.SITE_URL;
  if (url && typeof url === "string") return url.replace(/\/$/, "");
  return DEFAULT_SITE_URL;
}

