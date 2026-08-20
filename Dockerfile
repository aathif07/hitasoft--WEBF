# syntax=docker/dockerfile:1.7
# Build:  docker build -t hitasoft-landing .
# Run:    docker run --rm -p 3000:3000 hitasoft-landing

FROM node:22-alpine AS dependencies

ENV NPM_CONFIG_FUND=false \
    NPM_CONFIG_AUDIT=false \
    NPM_CONFIG_UPDATE_NOTIFIER=false

WORKDIR /app

# Dependencies are their own layer so source edits never re-resolve the tree.
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci


FROM dependencies AS builder

COPY . .
RUN npm run build


FROM node:22-alpine AS runner

LABEL org.opencontainers.image.title="Hitasoft landing page" \
      org.opencontainers.image.description="Static-rendered Next.js landing page served by the vinext standalone server" \
      org.opencontainers.image.source="https://github.com/hitasoft/landing-page"

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

WORKDIR /app

# tini reaps zombies and forwards SIGTERM, so container stops are clean.
RUN apk add --no-cache tini \
  && addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 --ingroup nodejs vinext

# The standalone bundle already carries its own node_modules and /public.
COPY --from=builder --chown=vinext:nodejs /app/dist/standalone ./dist/standalone

USER vinext

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider "http://127.0.0.1:${PORT}/" || exit 1

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "dist/standalone/server.js"]
