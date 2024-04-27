# Sumz (Artikelsummeringsapp)
Länk: https://662cf8bbb91121d5a757cfec--incredible-sawine-0cdbe7.netlify.app/

## Översikt
Detta är en webbapplikation byggd för att summera artiklar från URL:er. Den tillåter användare att ange en URL till en artikel och ger en sammanfattad version av artikelns innehåll. Appen använder en tredjeparts API för extraktion och summering av artiklar.

### Funktioner
- Inmatningsfält för att ange URL:en till artikeln
- Knapp för att skicka in URL:en och hämta sammanfattat innehåll
- Visningsområde för att visa det sammanfattade innehållet
- Historiksektion för att visa tidigare summerade artiklar
- 
### Lösning (frontend)
- React: Frontend JavaScript-bibliotek för att bygga användargränssnitt
- Redux Toolkit: Statshanteringbibliotek för att hantera applikationsstaten
- Tailwind CSS: Verktygsförst CSS-ramverk för att styla appen
- RapidAPI: Tredjeparts API som används för extraktion och summering av artiklar

### Installationsinstruktioner
- Klona repositoryt till din lokala maskin.
- Installera beroenden med npm install.
- Skaffa en API-nyckel från RapidAPI för att komma åt API:et för artikelsummering.
- Skapa en .env fil i rotkatalogen och spara din API-nyckel som VITE_RAPID_API_KEY=din_api_nyckel_här.
- Starta utvecklingsservern med npm start.
- Öppna appen i din webbläsare på http://localhost:3000.

### Användning
1. Ange URL:en till artikeln du vill summera i inmatningsfältet.
2. Klicka på skicka-knappen för att hämta och visa det sammanfattade innehållet.
3. Visa det sammanfattade innehållet i visningsområdet.
4. Utforska valfritt historiksektionen för att visa tidigare summerade artiklar.

### Visuell översikt:
![sumz](https://github.com/hihassan1998/ai_summarizer/assets/150392365/b08455d8-7fe1-4c15-8bd4-dc125ca384b2)

### Licens
Detta projekt är licensierat under MIT-licensen. Se LICENSE-filen för detaljer.
