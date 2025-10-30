# 🚀 Deployment upute za Vercel

## Brzi pregled

**Tehnički stack:**
- Next.js 14.2.15 (App Router)
- TypeScript 5.6.3
- Tailwind CSS 3.4.14
- Resend 4.0.1 (email)
- Zod 3.23.8 (validation)

**Build status:** ✅ Uspješan (sve stranice statički generirane)

---

## 📋 Preduvjeti

### 1. Resend Account (za email funkcionalnost)

1. Registrirajte se na [resend.com](https://resend.com)
2. Verificirajte domenu `aizasvakoga.com` ili koristite test domenu
3. Kreirajte API ključ u Resend dashboardu
4. Spremite API ključ - trebat će vam za ENV varijable

### 2. Google Analytics 4 (opcionalno)

1. Kreirajte GA4 property na [analytics.google.com](https://analytics.google.com)
2. Kopirajte Measurement ID (format: `G-XXXXXXXXXX`)

### 3. Vercel Account

1. Registrirajte se na [vercel.com](https://vercel.com)
2. Povežite GitHub/GitLab/Bitbucket račun

---

## 🔧 Environment varijable

Postavite sljedeće ENV varijable u Vercel dashboardu:

### Obavezne varijable

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_TO=info@edupoligon.com
EMAIL_FROM=noreply@aizasvakoga.com
```

**Napomena**: `EMAIL_FROM` mora biti verificirana domena u Resend-u.

### Opcionalne varijable

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Calendar (za buduću integraciju)
GCAL_CALENDAR_ID=your-calendar-id@group.calendar.google.com
GCAL_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GCAL_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Timezone
TZ=Europe/Zagreb
```

---

## 🌐 Deployment na Vercel

### Metoda 1: Automatski deployment (preporučeno)

1. **Push kod na Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AI za svakoga landing"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Povežite s Vercelom**
   - Idite na [vercel.com/new](https://vercel.com/new)
   - Odaberite vaš repository
   - Kliknite "Import"

3. **Konfigurirajte projekt**
   - **Framework Preset**: Next.js (automatski detektirano)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

4. **Dodajte Environment varijable**
   - U "Environment Variables" sekciji dodajte sve varijable iz gornje liste
   - Odaberite "Production", "Preview" i "Development" za sve varijable

5. **Deploy**
   - Kliknite "Deploy"
   - Čekajte 2-3 minute
   - Vaša stranica će biti live na `<project-name>.vercel.app`

### Metoda 2: Vercel CLI

```bash
# Instalirajte Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Za produkciju
vercel --prod
```

---

## 🔗 Custom domena

### Dodavanje aizasvakoga.com

1. U Vercel dashboardu idite na **Settings → Domains**
2. Dodajte `aizasvakoga.com` i `www.aizasvakoga.com`
3. Vercel će vam dati DNS zapise
4. Dodajte zapise u vašem DNS provideru:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. Čekajte propagaciju (može trajati do 48h, obično 1-2h)

---

## ✅ Post-deployment checklist

### 1. Testirajte formu

- [ ] Otvorite stranicu
- [ ] Ispunite hero formu
- [ ] Provjerite je li email stigao na `info@edupoligon.com`
- [ ] Testirajte sekundarnu CTA formu

### 2. Provjerite GA4

- [ ] Otvorite GA4 Real-Time report
- [ ] Posjetite stranicu
- [ ] Provjerite vide li se eventi u Real-Time

### 3. Lighthouse audit

- [ ] Otvorite Chrome DevTools
- [ ] Pokrenite Lighthouse audit
- [ ] Ciljevi: Performance 90+, Accessibility 90+, Best Practices 90+, SEO 90+

### 4. Testirajte na mobilnim uređajima

- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Provjerite responsiveness

### 5. Provjerite pravne stranice

- [ ] `/privatnost` - Politika privatnosti
- [ ] `/uvjeti` - Uvjeti korištenja
- [ ] `/kontakt` - Kontakt stranica

---

## 📊 GA4 eventi - referenca

| Event | Trigger | Lokacija |
|-------|---------|----------|
| `view_form` | Korisnik otvori formu | Hero, Secondary CTA |
| `cta_click` | Klik na CTA gumb | Hero |
| `submit_form` | Submit forme | Hero, Secondary CTA |
| `submit_success` | Uspješan submit | Hero, Secondary CTA |
| `outbound_link_click` | Klik na vanjski link | WhyNow (research links) |

---

## 🐛 Troubleshooting

### Email se ne šalje

**Problem**: Forma se submitta ali email ne stiže

**Rješenje**:
1. Provjerite Vercel logs: `vercel logs <deployment-url>`
2. Provjerite je li `RESEND_API_KEY` postavljen
3. Provjerite je li `EMAIL_FROM` verificiran u Resend-u
4. Provjerite Resend dashboard za greške

### GA4 ne trackira

**Problem**: Eventi se ne prikazuju u GA4

**Rješenje**:
1. Provjerite je li `NEXT_PUBLIC_GA_MEASUREMENT_ID` postavljen
2. Otvorite Network tab i provjerite `/gtag/js` request
3. Provjerite GA4 DebugView (omogućite debug mode)

### Build greška

**Problem**: Build faila na Vercelu

**Rješenje**:
1. Provjerite build logs u Vercel dashboardu
2. Lokalno pokrenite `npm run build` i provjerite greške
3. Provjerite TypeScript greške: `npm run type-check`

### Slow page load

**Problem**: Stranica se sporo učitava

**Rješenje**:
1. Pokrenite Lighthouse audit
2. Provjerite Network tab za velike resurse
3. Optimizirajte slike (koristite next/image)
4. Provjerite je li Vercel Edge Network aktivan

---

## 📞 Support

Za tehničku podršku:
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Resend**: [resend.com/docs](https://resend.com/docs)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

---

## 🔄 Buduće nadogradnje

### Google Calendar API integracija

Trenutno je implementiran placeholder. Za punu integraciju:

1. Kreirajte Google Cloud projekt
2. Omogućite Google Calendar API
3. Kreirajte Service Account
4. Dodajte credentials u ENV
5. Implementirajte `/api/calendar/availability` i `/api/calendar/book` routes

### LinkedIn/Meta Pixels

Dodajte u `.env`:
```bash
NEXT_PUBLIC_LINKEDIN_PIXEL_ID=your_pixel_id
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id
```

Implementirajte u `GoogleAnalytics.tsx` komponentu.

---

**Deployment datum**: {current_date}  
**Verzija**: 1.0.0  
**Status**: ✅ Production Ready
