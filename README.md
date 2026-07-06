# ADB Intranet Portal

An Angular-based intranet portal for ADB (Asian Development Bank), secured with Microsoft Entra ID (Azure AD) authentication via MSAL.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 21.2 (standalone components) |
| Auth | MSAL Angular 5.3 + MSAL Browser 5.16 (Entra ID / Azure AD) |
| Icons | Tabler Icons for Angular 3.44 |
| State | Angular Signals + RxJS 7.8 |
| Styling | SCSS with shared design tokens |
| Testing | Vitest / Karma + Jasmine |
| Linting | ESLint + angular-eslint 21.4 + Prettier |

---

## Prerequisites

- Node.js 20+
- Angular CLI 21: `npm install -g @angular/cli`

---

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app auto-reloads on file changes.

> **Note:** Authentication uses Microsoft Entra ID. On first load you will be redirected to the Microsoft login page. A dev role override is available via `localStorage.setItem('wbct:devRole', 'Admin')` for local development.

---

## Environment Builds

The project supports five environments, each with its own Angular environment file:

| Environment | Command | API Base |
|---|---|---|
| Local | `npm run build:local` | `http://localhost:4200/api` |
| Dev | `npm run build:dev` | `https://dev-api.adbintranet.com/api` |
| QA | `npm run build:qa` | — |
| UAT | `npm run build:uat` | — |
| Production | `npm run build:prod` | — |

---

## Authentication

- **Provider:** Microsoft Entra ID (formerly Azure AD) via MSAL
- **Flow:** Redirect-based (`InteractionType.Redirect`)
- **Token cache:** `BrowserCacheLocation.LocalStorage`
- **Roles:** `Admin` and `User` — sourced from the `roles` claim in the Entra ID token (App Roles)
- **Token injection:** MSAL interceptor automatically attaches Bearer tokens to all `/api/*` requests
- **App initializer:** `msalService.initialize()` completes before any route guard activates, preventing race conditions

---

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── auth/          # AuthService (Signals-based), MSAL config
│   └── features/
│       └── home/          # Home page (guarded by MsalGuard)
├── environments/          # Environment configs (local, dev, qa, uat, production)
├── styles/                # Shared SCSS design tokens, mixins, variables
└── index.html
```

### Using Shared Styles

```scss
// In any component .scss
@use '../styles' as *;

.card-title {
  @include type-h3;
  color: $text-default;
}

.card {
  @include shadow-card-1;
  background: $bg-white;
  border: 1px solid $border-light;
}
```

---

## Available Scripts

| Command | Description |
|---|---|
| `ng serve` | Start dev server at `localhost:4200` |
| `ng build` | Production build to `dist/` |
| `ng test` | Run unit tests |
| `ng e2e` | Run end-to-end tests |
| `ng generate component <name>` | Scaffold a new component |

---

## Additional Resources

- [Angular CLI Reference](https://angular.dev/tools/cli)
- [MSAL Angular Documentation](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-angular)
- [Tabler Icons](https://tabler.io/icons)
# ADB-Intranet-Reimage
