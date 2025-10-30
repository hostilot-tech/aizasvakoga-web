# AI za svakoga - Landing Stranica

Landing stranica za AI edukaciju i consulting usluge. Izgrađena s Next.js 14, TypeScript i Tailwind CSS, optimizirana za Vercel deployment.

## 🚀 Brzi start

### 1. Instalacija dependencies

```bash
npm install
```

### 2. Konfiguracija environment varijabli

Kopirajte `.env.example` u `.env` i popunite potrebne vrijednosti:

```bash
cp .env.example .env
```

**Obavezne varijable:**
- `RESEND_API_KEY` - API ključ za Resend email servis ([resend.com](https://resend.com))
- `EMAIL_TO` - Email adresa na koju se šalju leadovi (default: info@edupoligon.com)
- `EMAIL_FROM` - From email adresa (mora biti verificirana u Resend-u)

**Opcionalne varijable:**
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics 4 Measurement ID
- `GCAL_CALENDAR_ID` - Google Calendar ID za booking integraciju
- `GCAL_CLIENT_EMAIL` - Google Service Account email
- `GCAL_PRIVATE_KEY` - Google Service Account private key

### 3. Pokretanje development servera

```bash
npm run dev
```

Stranica će biti dostupna na [http://localhost:3001](http://localhost:3001)

## 📦 Build i deployment

### Build za produkciju

```bash
npm run build
npm start
```

### Deployment na Vercel

#### Automatski deployment (preporučeno)

1. Push kod na GitHub/GitLab/Bitbucket
2. Povežite repository s Vercel računom
3. Dodajte environment varijable u Vercel dashboard
4. Vercel će automatski deployati na svaki push

#### Ručni deployment

```bash
npm install -g vercel
vercel
```

## 🔧 Tehnički stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Resend
- **Validation**: Zod
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel

## 📊 GA4 Eventi

Aplikacija trackira sljedeće GA4 evente:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `view_form` | Korisnik otvori formu | `form_location` |
| `cta_click` | Klik na CTA gumb | `cta_location`, `cta_text` |
| `submit_form` | Submit forme | `form_location`, `form_type` |
| `submit_success` | Uspješan submit | `form_location` |
| `scroll_75` | Scroll 75% stranice | - |
| `outbound_link_click` | Klik na vanjski link | `link_url`, `link_text` |

## 🎨 Dizajn sustav

Dizajn je inspiriran Hostilot demo stranicom s fokusom na:
- Minimalistički, čist UI
- Visok kontrast za accessibility (AAA standard)
- Responzivan dizajn (mobile-first)
- Brze animacije i transitions
- Optimizirani Core Web Vitals

### Boje

- **Primary**: `#0ea5e9` (sky-500)
- **Neutral**: Grayscale od 50 do 900
- **Accent**: Primary varijacije

### Tipografija

- **Font**: Inter (Google Fonts)
- **Scale**: Display (4.5rem) → Body SM (0.875rem)

## 📝 Struktura projekta

```
aizasvakoga-web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   └── submit-lead/    # API route za forme
│   │   ├── privatnost/         # Politika privatnosti
│   │   ├── uvjeti/             # Uvjeti korištenja
│   │   ├── kontakt/            # Kontakt stranica
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── analytics/          # GA4 komponente
│   │   ├── sections/           # Sekcije stranice
│   │   └── ui/                 # Reusable UI komponente
│   └── lib/
│       └── constants.ts        # Konstante i data
├── public/                     # Statički assets
├── .env.example                # Environment template
├── tailwind.config.ts          # Tailwind konfiguracija
├── next.config.mjs             # Next.js konfiguracija
└── package.json
```

## 🔒 Sigurnost

- HTTPS only (enforced via Vercel)
- Security headers (HSTS, CSP, X-Frame-Options)
- Rate limiting na API routes (5 req / 15 min)
- Input validation (Zod schema)
- Honeypot za bot protection
- GDPR compliant (consent checkbox)

## 🧪 Testiranje

### Type checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Lighthouse audit

Pokrenite Lighthouse u Chrome DevTools:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## 📧 Email konfiguracija (Resend)

1. Registrirajte se na [resend.com](https://resend.com)
2. Verificirajte domenu ili koristite test domenu
3. Kreirajte API ključ
4. Dodajte `RESEND_API_KEY` u `.env`

**Napomena**: Za produkciju morate verificirati vlastitu domenu.

## 📅 Google Calendar integracija (buduća)

Trenutno je implementiran placeholder za Google Calendar embed. Za punu integraciju:

1. Kreirajte Google Cloud projekt
2. Omogućite Google Calendar API
3. Kreirajte Service Account
4. Dodajte credentials u `.env`
5. Implementirajte API calls u `/api/calendar/` route

## 🐛 Troubleshooting

### Lint greške prije `npm install`

TypeScript i CSS lint greške su normalne prije instalacije dependencies. Pokrenite `npm install` i greške će nestati.

### Email se ne šalje

- Provjerite je li `RESEND_API_KEY` valjan
- Provjerite je li `EMAIL_FROM` verificiran u Resend-u
- Provjerite logs u Vercel dashboardu

### GA4 ne trackira

- Provjerite je li `NEXT_PUBLIC_GA_MEASUREMENT_ID` postavljen
- Otvorite Network tab i provjerite `/gtag/js` request
- Provjerite GA4 Real-Time report

## 📄 Licenca

© 2024 ADRIATECH OÜ. Sva prava pridržana.

## 🤝 Kontakt

Za pitanja i podršku, koristite kontakt formu na stranici.
