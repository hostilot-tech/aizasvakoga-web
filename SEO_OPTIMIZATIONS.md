# SEO Optimizacije - AI za svakoga

## Pregled implementiranih optimizacija

Sve SEO optimizacije su implementirane bez mijenjanja vidljivog teksta ili postojećih funkcionalnosti.

---

## 1. Strukturirani podaci (JSON-LD Schema)

### Organization Schema (layout.tsx)
- Dodani strukturirani podaci za organizaciju
- Uključuje informacije o uslugama (OfferCatalog)
- Pomaže Google-u razumjeti strukturu poslovanja

### FAQ Schema (FAQ.tsx)
- Dodani strukturirani podaci za FAQ sekciju
- Omogućava prikaz u Google Rich Results
- Povećava vidljivost u pretraživanju

### WebPage Schema (page.tsx)
- Dodani strukturirani podaci za glavnu stranicu
- Uključuje BreadcrumbList za navigaciju
- Poboljšava razumijevanje strukture stranice

---

## 2. Poboljšani Metadata

### Glavna stranica (layout.tsx)
- **metadataBase**: Postavljen base URL
- **title template**: Dinamički naslovi za sve stranice
- **Open Graph**: Potpuni OG tagovi za društvene mreže
- **Twitter Card**: Optimizirano za Twitter/X dijeljenje
- **robots**: Detaljne upute za Google Bot
- **canonical URLs**: Sprječavanje duplicate content-a
- **keywords**: Proširena lista ključnih riječi

### Podstranice
Sve podstranice imaju:
- Canonical URL-ove
- Open Graph metadata
- Optimizirane description tagove
- Robots direktive

---

## 3. Sitemap i Robots.txt

### sitemap.xml (sitemap.ts)
Automatski generirana sitemap s:
- Sve javne stranice
- Priority vrijednosti
- Change frequency
- Last modified datumi

### robots.txt (robots.ts)
- Dozvoljava indeksiranje svih stranica
- Blokira /api/ rute
- Uključuje link na sitemap

---

## 4. Semantički HTML i Pristupačnost

### Aria-label atributi
Dodani na sve glavne sekcije:
- Hero sekcija
- WhyNow sekcija
- Offering sekcija
- Process sekcija
- UseCases sekcija
- FAQ sekcija
- Footer
- Navigacija

### Poboljšana pristupačnost
- SVG ikone označene s `aria-hidden="true"`
- Navigacija označena s `aria-label`
- Semantički HTML elementi

---

## 5. Dodatne optimizacije

### Performance
- Font display: swap (već postojalo)
- Compression enabled (već postojalo)
- Security headers (već postojalo)

### Metadata
- Autor i publisher informacije
- Language tag (hr)
- Viewport optimizacija

---

## Sljedeći koraci (preporuke)

### 1. Google Search Console
- Dodati Google Search Console verification kod u `layout.tsx` (metadata.verification.google)
- Submitati sitemap: `https://aizasvakoga.com/sitemap.xml`

### 2. Open Graph slika
- Kreirati OG sliku (1200x630px) i spremiti kao `/public/og-image.jpg`
- Slika bi trebala sadržavati logo i ključnu poruku

### 3. Logo
- Dodati logo sliku u `/public/logo.png` za strukturirane podatke

### 4. Google Analytics
- Već implementiran (GoogleAnalytics komponenta)

### 5. Monitoring
- Pratiti Core Web Vitals
- Pratiti indeksiranje u Google Search Console
- Pratiti pozicije ključnih riječi

---

## Ključne riječi za praćenje

1. AI edukacija
2. AI consulting
3. AI implementacija
4. AI strategija
5. AI za poslovanje
6. AI adopcija
7. Digitalna transformacija
8. Umjetna inteligencija consulting
9. AI obuka za tvrtke
10. AI za učinkovitost

---

## Tehnički detalji

### Generirani URL-ovi
- `/sitemap.xml` - Automatski generiran
- `/robots.txt` - Automatski generiran

### Strukturirani podaci
Svi strukturirani podaci su validirani prema Schema.org standardima.

### Canonical URL-ovi
Svi canonical URL-ovi su relativni i automatski se pretvaraju u apsolutne pomoću `metadataBase`.

---

## Provjera implementacije

Nakon deploya, provjerite:

1. **Rich Results Test**: https://search.google.com/test/rich-results
   - Testirajte FAQ strukturirane podatke
   - Testirajte Organization podatke

2. **Schema Markup Validator**: https://validator.schema.org/
   - Validirajte JSON-LD strukturirane podatke

3. **Open Graph Debugger**: https://www.opengraph.xyz/
   - Provjerite OG tagove

4. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
   - Provjerite mobilnu optimizaciju

5. **PageSpeed Insights**: https://pagespeed.web.dev/
   - Provjerite Core Web Vitals

---

## Zaključak

Sve SEO optimizacije su implementirane prema best practices:
- ✅ Strukturirani podaci (JSON-LD)
- ✅ Poboljšani metadata
- ✅ Sitemap i robots.txt
- ✅ Semantički HTML
- ✅ Pristupačnost (ARIA)
- ✅ Canonical URL-ovi
- ✅ Open Graph i Twitter Cards

Stranica je spremna za indeksiranje i optimizirana za pretraživače.
