# PAR—LE

Static, bilingual website for PAR—LE, a cultural and artistic communications agency. European Portuguese is the default; English pages live under `/en/`.

## Local development

Use Node.js 26.13.0 LTS. The version is pinned in `.node-version`.

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

Open the local address printed by Astro. No database, secrets or external APIs are required.

```sh
pnpm run check
pnpm run build
pnpm run preview
```

## Structure

- `src/data/site.ts`: typed Portuguese and English copy, route map and contact details.
- `src/pages/[...path].astro`: generates the five pages in each language.
- `src/layouts/Layout.astro`: shared document, metadata and language alternatives.
- `src/components/`: page sections, navigation and footer.
- `src/styles/global.css`: brand variables, layout, typography and responsive rules.
- `public/`: optimized images, social preview, favicon and Cloudflare response headers.

The site uses Astro and ordinary CSS. Its only browser scripts handle mobile navigation and service deep links. Content and navigation remain usable without JavaScript. The language switch links to the equivalent page in the other language. Fonts are self-hosted. Navigation stays available while scrolling, with a translucent header and solid alternatives for reduced transparency or higher contrast. Controls provide immediate press feedback, and reduced-motion preferences remove movement. Text sizes use rem units and fluid sizing so layouts can adapt to enlarged text.

## Cloudflare Pages

Deploy this directory as a Cloudflare Pages project. It can be its own Git repository; if kept within a larger repository, set the Pages root directory to its relative path.

| Setting | Value |
| --- | --- |
| Framework | Astro |
| Build command | `pnpm run build` |
| Output directory | `dist` |
| `NODE_VERSION` | `26.13.0` |
| `SITE_URL` | The actual production URL, such as `https://your-project.pages.dev` |

Set `SITE_URL` in Pages before the production build. It controls canonical links, language alternatives, social image URLs and the sitemap. Do not publish with the example hostname. For a local metadata check, provide the variable to the build command: `SITE_URL=https://your-real-hostname pnpm run build`. `.env.example` documents the deployment variable; the Astro configuration reads it from the process environment.

Alternatively, build locally and upload the contents of `dist` using Pages Direct Upload. `public/_headers` is copied into the build for Cloudflare to apply. No Worker or paid hosting feature is needed.

When adding a custom domain later, connect it in Pages, change `SITE_URL`, rebuild, and redirect the old hostname. If moving an existing domain's DNS, preserve its email records.

## GitHub Actions deployment

`.github/workflows/cloudflare-pages.yml` validates and builds pull requests to `main`. Pushes to `main` deploy the checked build to the Cloudflare Pages project `par-le`. The workflow can also be started from the Actions tab on `main`. Other branches never deploy to production.

### One-time configuration

1. In Cloudflare, make sure the Pages project `par-le` exists in the intended account and uses `main` as its production branch. For a new project, choose Direct Upload. If the existing project has native Git builds enabled, disable automatic builds to avoid duplicate deployments from the same push; keep the project and its domains.
2. Create a Cloudflare API token with **Account → Cloudflare Pages → Edit**, limited to the account containing `par-le`.
3. Open [repository Actions secrets](https://github.com/Dareeben13/par-le/settings/secrets/actions) and add:
   - `CLOUDFLARE_API_TOKEN`: the API token.
   - `CLOUDFLARE_ACCOUNT_ID`: the account ID from Cloudflare.
4. The workflow builds with `https://par-le.pages.dev` as the canonical site URL. If the project uses another production hostname, add a repository **variable** named `SITE_URL` under [Actions variables](https://github.com/Dareeben13/par-le/settings/variables/actions).
5. Push the workflow to `main`, or select **Actions → Cloudflare Pages → Run workflow** after adding the secrets. Check the run's deployment output and open the returned URL.

Cloudflare dashboard build variables are not inherited by GitHub Actions. `SITE_URL` must be set in GitHub when overriding the default. Credentials stay in GitHub secrets and are passed only to the production deployment steps. Pull requests build without Cloudflare credentials.

The workflow uses pnpm 10.33.0, reads Node from `.node-version`, installs with the frozen lockfile, and pins GitHub Actions to verified commit SHAs and Wrangler to 4.158.0. Refresh those pins deliberately when updating deployment tooling. Production runs are serialized so a newer deployment does not get overtaken by an older run.

To roll back, choose a previous successful production deployment in the Cloudflare Pages dashboard and roll back to it. Reverting the corresponding Git commit keeps the next push consistent with the rollback.

References: [Cloudflare CI deployment](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/), [Wrangler Action](https://github.com/cloudflare/wrangler-action).

## Content and design

- Supplied logos and imagery were extracted from the owner's image files and PDFs. Gallery images illustrate the agency's cultural context; they are not presented as client work.
- Founder roles and biographies come from the supplied presentation. Other copy is adapted from it and should receive the founders' editorial review.
- Mint `#D7E5D8`, off-white `#F3F1EC` and dark `#111111` follow the brand guide. Purple `#A354FF` follows the visible swatch because its printed hex label is inconsistent.
- League Spartan is the supplied display typeface. DM Sans is the body substitute for Open Sauce, whose licensed font files were not supplied. Both included font packages contain their licenses.
- Contact links open the visitor's email application. The email address is visible for copying. There is no form submission service, application cookie storage or fabricated submission confirmation. Cloudflare Web Analytics is enabled through the hosting dashboard; the security policy permits its script from `static.cloudflareinsights.com` and reports to `cloudflareinsights.com` or the same-origin `/cdn-cgi/rum` endpoint.
- No portfolio projects, client logos or testimonials have been invented. Add selected work when approved projects and images are available.

Before the public launch, have the founders approve the copy, images, contact details and any company disclosures applicable to their business. Keep the source, hosting and future domain accounts under company ownership.

## Dependencies

Commit `pnpm-lock.yaml` and use `pnpm install --frozen-lockfile` for reproducible installation. Astro 6.4.8 is pinned; review dependency updates before applying them. No framework for client-side rendering, component kit, animation library or CSS utility framework is included.
