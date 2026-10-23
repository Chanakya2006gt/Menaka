# Security Policy, Data Hygiene & Compliance — Menaka Jewellers

## 1. Threat Model & Scope
This is a static, frontend-only catalog application without user authentication, database connections, or server-side execution. The security focus is on:
1. Client-Side Content Security Policy (CSP) & HTTP headers.
2. Safe URI handling (avoiding `javascript:` injections or unescaped query strings in WhatsApp links).
3. Zero secrets leakage (no API keys, tokens, or credentials).
4. Truthful content hygiene (zero fake awards or invented pricing).

## 2. Content Security Policy (CSP) & Security Headers
When deployed or previewed, the application enforces the following security headers:
- `Content-Security-Policy`: `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none';`
- `X-Content-Type-Options`: `nosniff`
- `X-Frame-Options`: `DENY`
- `Referrer-Policy`: `strict-origin-when-cross-origin`
- `Permissions-Policy`: `camera=(), microphone=(), geolocation=()`

## 3. WhatsApp Link Escaping & Sanitization
All dynamically generated links to external endpoints (specifically WhatsApp `wa.me`) must use standard `encodeURIComponent` for query parameters and strict schema validation (`https://wa.me/...`) to avoid open redirect and injection vulnerabilities.

## 4. Privacy & Zero-Telemetry Invariant
- No tracking cookies, third-party analytics pixels, or session recording scripts.
- No user PII is collected or stored in the browser (no localStorage bloat).
- All customer communication occurs directly peer-to-peer on WhatsApp between the customer and Menaka Jewellers.

## 5. Secrets Hygiene
- No `.env` files with credentials will ever be created or committed.
- Git configuration automatically ignores any local system artifacts, `.env*`, and cache folders.
