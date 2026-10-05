# WHAT IF? — Complete SaaS starter

## Included
- Responsive landing page
- Flexible scenario simulator
- Scenario comparison
- Assumptions / risks / timeline / recommendation
- Local simulation fallback
- Free usage counter (5 simulations)
- Pro and Power pricing UI
- Local recent-history UI
- AI backend endpoint contract
- Environment-variable example
- No secret keys in the browser

## To make it a real paid SaaS
1. Deploy the static site.
2. Deploy `api/simulate.js` as a server/serverless function.
3. Connect an AI provider using a server-side secret.
4. Connect a payment provider for Pro/Power.
5. Replace the local usage counter with authenticated server-side usage limits.
6. Add a database for accounts, saved scenarios, billing status and history.

## Security
Never put AI or payment secret keys in `index.html`, client-side JS, GitHub Pages, or a public repository.
