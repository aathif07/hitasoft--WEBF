# vinext-starter

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## Landing Page Structure

The marketing page is one server component plus one motion runtime.

- `app/page.tsx` — the whole page. Section content lives in the arrays at the
  top of the file.
- `app/globals.css` — all styling, grouped into 16 numbered blocks in DOM order
  with its own media queries co-located. Add to the block a rule belongs to;
  do not append override layers at the end of the file.
- `app/SiteMotion.tsx` — the single motion runtime. It owns every observer and
  scroll listener on the page and exposes behaviour through data attributes:
  - `data-reveal` — fade/rise in on first intersection (`data-reveal="scale"`
    for the larger feature cards). Siblings stagger automatically.
  - `data-card` — pointer-tracked highlight, corner brackets, hover lift.
  - `data-count` — count the numeric prefix up when the element scrolls in.
  - `data-marquee` — pause the contained track while off-screen.
  - `data-progress` — expose scroll progress through the element as
    `--progress` (drives the core-lift capsule).
- `app/ScrollRevealHeading.tsx` — the word-by-word impact headline.

Motion rules: reveals animate `translate`/`scale`, hovers animate `transform`,
so the two compose instead of overriding each other. Durations and easings come
from the `--dur-*` / `--ease-*` tokens. Everything decorative is disabled under
`prefers-reduced-motion: reduce`, and content renders visible without JS —
motion only engages once `SiteMotion` sets `html[data-motion="on"]`.

## Included Shape

- edit site code under `app/`
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- Use `chatGPTSignInPath(returnTo)` and `chatGPTSignOutPath(returnTo)` for
  browser links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Docker

Build and run the production container locally:

```bash
docker build -t hitasoft-web .
docker run --rm -p 3000:3000 hitasoft-web
```

The container listens on `0.0.0.0` and uses the `PORT` environment variable,
which defaults to `3000`.

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
