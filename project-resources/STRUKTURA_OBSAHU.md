# Jak připravit maturitní práci v Google Docs

## Redakční a obsahová struktura webové publikace GASOŠ

**Pracovní název publikace:** Jak připravit maturitní práci v Google Docs  
**Primární cílová skupina:** studenti Gymnázia a SOŠ Rokycany  
**Sekundární cílová skupina:** vedoucí maturitních, ročníkových a seminárních prací  
**Zdrojový formát:** Markdown  
**Publikační technologie:** MkDocs, přednostně MkDocs Material  
**Nasazení:** GitHub + Cloudflare Pages  
**Primární metodický zdroj:** `gasos-manual-jak_napsat_MP-240221.pdf`, verze 240221  

---

## 1. Účel publikace

Publikace má studenty krok za krokem provést:

1. vytvořením a správným nastavením dokumentu v Google Docs;
2. používáním stylů místo ručního formátování;
3. strukturou různých typů odborných prací;
4. automatizací číslování, popisků, obsahu a seznamů;
5. správou zdrojů a citováním pomocí Zotera;
6. závěrečnou kontrolou a exportem práce do PDF nebo PDF/A.

Publikace má sloužit dvěma způsoby:

- **výuková cesta** – učitel podle ní vede studenty při společné hodině;
- **referenční příručka** – student si později dohledá konkrétní postup nebo řešení problému.

---

## 2. Redakční zásady

### 2.1 Rozlišení závaznosti

Každé pravidlo musí být označeno jednou z následujících kategorií:

- **Požadavek GASOŠ** – přímo vychází ze školního manuálu nebo závazné šablony;
- **Doporučený postup** – praktické doporučení pro Google Docs, Zotero nebo organizaci práce;
- **Technická poznámka** – omezení nebo vlastnost konkrétního nástroje;
- **Ověřte s vedoucím práce** – pravidlo závisí na oboru, citační normě nebo konkrétním zadání.

### 2.2 Jednotná skladba výukové kapitoly

Každá praktická kapitola má pokud možno obsahovat:

1. **Cíl** – co bude po dokončení fungovat;
2. **Proč to nastavujeme** – stručné vysvětlení významu;
3. **Postup krok za krokem** – přesné názvy nabídek a ovládacích prvků;
4. **Jak má výsledek vypadat** – obrázek nebo krátký popis;
5. **Kontrolní bod** – jednoduchá kontrola pro společnou výuku;
6. **Časté chyby** – co nedělat a jak chybu napravit;
7. **Související kapitoly** – odkazy na další části webu.

### 2.3 Styl psaní

- Psát česky, srozumitelně a přímo ke studentovi.
- Jeden krok má popisovat jednu konkrétní činnost.
- Názvy příkazů Google Docs a Zotera zvýrazňovat tučně.
- Nepředpokládat předchozí znalost typografie ani citačních manažerů.
- Nevkládat dlouhé doslovné pasáže školního manuálu; pravidla stručně parafrázovat.
- U snímků obrazovky používat popisné alternativní texty.
- U časově proměnlivých funkcí uvádět datum ověření.

---

## 3. Závazné formální požadavky, které musí publikace pokrýt

Podle manuálu GASOŠ musí být v publikaci srozumitelně vysvětleny zejména následující požadavky:

### Dokument a stránka

- odevzdání v PDF, pokud možno PDF/A;
- formát A4;
- všechny okraje 2,5 cm;
- strany se počítají od titulní strany, ale číslo se zobrazuje až od první strany za obsahem.

### Nadpisy

- nejvýše tři úrovně nadpisů;
- bezpatkové tučné písmo;
- velikost nejvýše 16 bodů;
- nadpis musí být udržen s následujícím odstavcem;
- číslování musí být konzistentní a automatizované.

### Běžný text

- patkové písmo o velikosti 12 bodů;
- zarovnání do bloku;
- řádkování 1,5;
- mezera za odstavcem 6 bodů;
- bez odsazení prvního řádku;
- mezi slovy právě jedna mezera;
- k odsazení se nepoužívají opakované mezery.

### Obrazové prvky

- tabulka má označení `Tab. xx` a samovysvětlující popisek nad tabulkou;
- obrázek nebo graf má označení `Obr. xx` a samovysvětlující popisek pod prvkem;
- grafy a ostatní obrazové prvky používají společnou číselnou řadu `Obr.`;
- tabulky mají vlastní číselnou řadu;
- popisek a příslušný prvek mají zůstat pohromadě;
- převzaté obrazové prvky musí mít uvedený zdroj.

### Struktura práce

- musí být zřetelný typ práce;
- obecné rozdělení pouze na „teoretickou část“ a „praktickou část“ není přípustné;
- obsah má být generován automaticky;
- seznam použité literatury má být generován citačním nástrojem;
- seznamy obrázků, grafů a tabulek mají být generovány automaticky, pokud jsou potřeba.

---

## 4. Navržená struktura repozitáře

```text
gasos-maturitni-prace/
├── README.md
├── mkdocs.yml
├── requirements.txt
├── .gitignore
├── docs/
│   ├── index.md
│   ├── jak-pouzivat-prirucku.md
│   ├── priprava/
│   │   ├── nastroje.md
│   │   ├── druhy-praci.md
│   │   ├── zalozeni-dokumentu.md
│   │   └── cvicny-text.md
│   ├── google-docs/
│   │   ├── nastaveni-stranky.md
│   │   ├── styly.md
│   │   ├── nadpisy.md
│   │   ├── cislovani-nadpisu.md
│   │   ├── odstavce.md
│   │   ├── seznamy.md
│   │   ├── konce-stranek-a-oddily.md
│   │   ├── tabulky.md
│   │   ├── obrazky-a-grafy.md
│   │   ├── popisky-a-seznamy.md
│   │   ├── automaticky-obsah.md
│   │   └── cislovani-stran.md
│   ├── automatizace/
│   │   ├── apps-script.md
│   │   ├── ovladani-skriptu.md
│   │   └── omezeni-a-obnova.md
│   ├── zotero/
│   │   ├── instalace.md
│   │   ├── knihovna-a-synchronizace.md
│   │   ├── pridavani-zdroju.md
│   │   ├── kontrola-metadat.md
│   │   ├── citace-autor-rok.md
│   │   ├── citace-v-poznamkach.md
│   │   ├── dalsi-citacni-styly.md
│   │   ├── archivni-prameny.md
│   │   └── seznam-literatury.md
│   ├── dokonceni/
│   │   ├── zaverecna-kontrola.md
│   │   ├── export-pdf.md
│   │   └── odevzdani.md
│   ├── reseni-problemu/
│   │   ├── google-docs.md
│   │   ├── apps-script.md
│   │   └── zotero.md
│   ├── slovnik.md
│   ├── zdroje-a-metodika.md
│   ├── assets/
│   │   ├── images/
│   │   ├── diagrams/
│   │   └── stylesheets/
│   └── downloads/
│       ├── gasos-docs-script.gs
│       └── kontrolni-seznam.md
└── sources/
    └── gasos-manual-jak_napsat_MP-240221.pdf
```

Adresář `sources/` slouží jako pracovní podklad a nemusí být publikován do výsledného webu. O zveřejnění školního manuálu rozhodne vlastník dokumentu.

---

## 5. Navigace a obsah jednotlivých kapitol

### Domů – `docs/index.md`

- komu je příručka určena;
- co se student naučí;
- rozcestník „Začínám nový dokument“, „Potřebuji citovat“ a „Řeším problém“;
- upozornění, že příručka nenahrazuje zadání ani pokyny vedoucího práce;
- číslo verze a datum aktualizace.

### Jak používat příručku – `docs/jak-pouzivat-prirucku.md`

- výuková cesta a referenční použití;
- význam informačních bloků;
- doporučené pořadí kapitol;
- jak používat kontrolní body.

## Příprava

### Potřebné nástroje – `docs/priprava/nastroje.md`

- účet Google;
- Google Docs;
- podporovaný prohlížeč;
- Zotero Desktop;
- Zotero Connector;
- bezplatný účet Zotero.org a doporučená synchronizace;
- vysvětlení, že webová knihovna Zotera je doplňková a pro vkládání citací do Google Docs je nutná spuštěná desktopová aplikace.

### Druhy a skladba prací – `docs/priprava/druhy-praci.md`

- rešeršní (kompilační) práce;
- původní práce exaktních oborů;
- původní práce humanitních oborů;
- technické dílo;
- zákaz obecného členění pouze na teoretickou a praktickou část;
- čtyři samostatné vodorovné Mermaid diagramy;
- v každém diagramu jedno pole pro každou část práce a propojení šipkami;
- bez rámečků typu `subgraph` kolem diagramu.

### Založení pracovního dokumentu – `docs/priprava/zalozeni-dokumentu.md`

- vytvoření dokumentu nebo kopie školní šablony;
- pojmenování souboru;
- umístění na Disku;
- nastavení přístupových práv;
- doporučení pravidelného používání historie verzí.

### Cvičný neformátovaný text – `docs/priprava/cvicny-text.md`

- krátký odborný text použitý při společném nácviku;
- nadpisy tří úrovní;
- běžné odstavce;
- odrážkové i číslované seznamy;
- tabulka, graf a obrázek;
- záměrné chyby: nadbytečné mezery, prázdné odstavce, ruční formátování a ručně napsané číslování;
- dvě citace vhodné pro test Zotera.

## Google Docs

### Nastavení stránky – `docs/google-docs/nastaveni-stranky.md`

- formát A4;
- okraje 2,5 cm;
- orientace na výšku;
- zobrazení netisknutelných znaků během kontroly;
- proč se zarovnání nevytváří mezerami a prázdnými odstavci.

### Styly – `docs/google-docs/styly.md`

- rozdíl mezi stylem a ručním formátováním;
- nastavení a aktualizace stylu **Normální text**;
- nastavení stylů **Nadpis 1**, **Nadpis 2** a **Nadpis 3**;
- proč běžný text pod podkapitolou zůstává normálním textem a neodsazuje se tabulátorem pod číslo nadpisu;
- jak ověřit, že všechny odstavce používají správný styl.

### Nadpisy – `docs/google-docs/nadpisy.md`

- nejvýše tři úrovně;
- hierarchie nadpisů;
- použití bezpatkového tučného písma;
- mezery před a za nadpisem;
- volby **Udržet s dalším** a **Udržet řádky pohromadě**;
- rozdíl mezi udržením nadpisu s textem a vynuceným koncem stránky.

### Víceúrovňové číslování – `docs/google-docs/cislovani-nadpisu.md`

- vazba úrovně číslování na Nadpis 1–3;
- hromadné použití číslování;
- očekávané tvary `1`, `1.1`, `1.1.1`;
- důvod, proč se čísla nepíší ručně;
- postup pomocí schváleného Apps Scriptu;
- upozornění, že běžný text se pod číslo nadpisu neodsazuje.

### Odstavce – `docs/google-docs/odstavce.md`

- patkové písmo 12 bodů;
- zarovnání do bloku;
- řádkování 1,5;
- mezera za odstavcem 6 bodů;
- bez odsazení prvního řádku;
- odstranění nadbytečných mezer a prázdných odstavců;
- kontrola jedné myšlenky na odstavec.

### Odrážkové a číslované seznamy – `docs/google-docs/seznamy.md`

- kdy použít odrážky a kdy číslování;
- vytvoření skutečného seznamu místo ručně psaných znaků;
- nastavení odsazení a zarovnání;
- úprava více úrovní seznamu;
- kopírování formátu na další seznam;
- omezení Google Docs při ukládání vlastního stylu seznamu.

### Konce stránek a oddíly – `docs/google-docs/konce-stranek-a-oddily.md`

- rozdíl mezi koncem stránky a koncem oddílu;
- konec oddílu jako ekvivalent oddílu ve Wordu;
- jak vložit konec oddílu a současně začít na nové straně;
- kdy použít konec stránky;
- kdy použít konec oddílu;
- proč se konce stránek nepoužívají k pouhému udržení nadpisu s odstavcem;
- samostatné stránky pro seznam literatury, seznamy obrazových prvků a přílohy.

### Tabulky – `docs/google-docs/tabulky.md`

- vložení tabulky;
- vodorovné a svislé zarovnání obsahu buněk;
- opakování záhlaví;
- omezení dělení řádků;
- přiměřené používání ohraničení a barev;
- popisek `Tab. xx` nad tabulkou;
- samovysvětlující text popisku;
- zdroj tabulky.

### Obrázky a grafy – `docs/google-docs/obrazky-a-grafy.md`

- vložení a umístění prvku;
- čitelnost, velikost a poměr stran;
- popisek `Obr. xx` pod prvkem;
- společné číslování obrázků a grafů;
- zdroj převzatého prvku;
- udržení obrázku nebo grafu s popiskem.

### Automatické popisky a seznamy – `docs/google-docs/popisky-a-seznamy.md`

- označení popisků způsobem očekávaným školním Apps Scriptem;
- automatické číslování tabulek a obrazových prvků;
- automatické vytvoření seznamu tabulek;
- automatické vytvoření seznamu obrázků a grafů;
- odkazy nebo záložky vytvářené skriptem;
- pravidla pro aktualizaci po změnách v dokumentu;
- upozornění, že přesná syntaxe musí odpovídat finální verzi skriptu.

### Automatický obsah – `docs/google-docs/automaticky-obsah.md`

- vložení obsahu;
- vazba obsahu na styly nadpisů;
- aktualizace obsahu;
- nezařazování běžných odstavců;
- řešení nadpisů bez číslování, například seznamu literatury;
- kontrola klikacích odkazů.

### Číslování stran – `docs/google-docs/cislovani-stran.md`

- titulní strana se počítá, ale číslo se na ní nezobrazuje;
- číslo se začne zobrazovat na první stránce za obsahem;
- použití konce oddílu;
- odpojení zápatí od předchozího oddílu;
- nastavení počáteční hodnoty čísla;
- kontrola titulní strany, obsahu a první stránky hlavního textu.

## Automatizace pomocí Apps Scriptu

### Instalace skriptu – `docs/automatizace/apps-script.md`

- otevření editoru Apps Script z konkrétního dokumentu;
- vysvětlení, že skript je svázán s daným dokumentem nebo jeho kopií;
- vložení finálního schváleného kódu;
- uložení projektu;
- první spuštění a udělení oprávnění;
- bezpečnostní vysvětlení oprávnění;
- vytvoření vlastní nabídky v dokumentu.

### Ovládání skriptu – `docs/automatizace/ovladani-skriptu.md`

- aktualizace číslování nadpisů;
- aktualizace popisků;
- aktualizace seznamů;
- doporučené pořadí operací;
- co se po spuštění smí a nesmí změnit;
- kontrola výsledku.

### Omezení a obnova – `docs/automatizace/omezeni-a-obnova.md`

- vytvoření kopie dokumentu před prvním testem;
- použití historie verzí;
- chyby způsobené ručním přepisováním automatických prvků;
- řešení chyb oprávnění;
- známé dřívější chyby `DocumentApp.flush is not a function`, `doc.getUi is not a function` a `Invalid argument: element` pouze jako diagnostická historie;
- publikovat jen opravenou a otestovanou verzi skriptu.

## Zotero

### Instalace – `docs/zotero/instalace.md`

- instalace Zotero Desktop;
- instalace nebo aktivace Zotero Connectoru;
- dostupnost prohlížečů;
- kontrola nabídky Zotero v Google Docs;
- nutnost mít při citování spuštěnou desktopovou aplikaci;
- rozdíl mezi Zotero Desktop, Connector a webovou knihovnou.

### Knihovna a synchronizace – `docs/zotero/knihovna-a-synchronizace.md`

- vytvoření bezplatného účtu;
- přihlášení v desktopové aplikaci;
- synchronizace bibliografických údajů;
- rozdíl mezi synchronizací dat a souborových příloh;
- sbírky pro konkrétní práci;
- základní zálohování.

### Přidávání zdrojů – `docs/zotero/pridavani-zdroju.md`

- uložení zdroje pomocí Connectoru;
- přidání pomocí ISBN, DOI, PMID, arXiv ID nebo ADS Bibcode;
- vysvětlení, že ISSN označuje celý časopis a v dialogu pro identifikátor nevyhledá konkrétní článek;
- import RIS nebo BibTeX;
- přidání PDF a dohledání metadat;
- ruční vytvoření záznamu;
- doporučení používat primární stránku článku nebo katalogu.

### Kontrola metadat – `docs/zotero/kontrola-metadat.md`

- autor a pořadí jména;
- název;
- rok a úplné datum;
- název časopisu nebo nakladatele;
- ročník, číslo a strany;
- DOI, ISBN, ISSN a URL;
- jazyk a typ dokumentu;
- proč se chyby opravují v knihovně Zotera, nikoliv v hotové citaci.

### Citace autor–rok – `docs/zotero/citace-autor-rok.md`

- volba `ISO-690 (author-date, Čeština)`;
- vložení citace přes **Add/Edit Citation**;
- doplnění stránky nebo rozsahu stran;
- rozdíl mezi narativní a závorkovou citací;
- více zdrojů v jedné citaci;
- automatická změna stylu v celém dokumentu;
- nečíslovaný abecední seznam literatury.

### Citace v poznámkách pod čarou – `docs/zotero/citace-v-poznamkach.md`

- vhodnost pro humanitně zaměřené práce;
- volba `ISO-690 (full note, Čeština)`;
- vložení citace na místo v textu bez předchozího ručního založení poznámky;
- umístění odkazu za interpunkční znaménko, pokud se vztahuje k celé větě;
- doplnění konkrétní strany;
- první a opakovaná citace;
- kontrola souladu výsledku s pokyny školy;
- nečíslovaný abecední seznam literatury.

### Další citační styly – `docs/zotero/dalsi-citacni-styly.md`

- APA 7 jako autor–rok;
- číselný systém;
- rozdíl mezi formou citace a obsahem bibliografického záznamu;
- pravidlo jednoho citačního systému v celé práci;
- vysvětlení, že číslovaný seznam literatury náleží číselnému systému, nikoliv Harvardu nebo full-note stylu;
- doporučení ověřit normu s vedoucím práce.

### Archivní prameny – `docs/zotero/archivni-prameny.md`

- běžná archivní identifikace: archiv, fond nebo sbírka, inventární číslo, signatura, karton a folio;
- vysvětlení, že ISBN, PMID, arXiv ID a ADS Bibcode nejsou běžné identifikátory archiválií;
- možnost DOI nebo trvalého identifikátoru u digitalizovaných dat pouze v některých archivech;
- ruční založení typu Rukopis, Dopis nebo Dokument;
- kontrola výsledné poznámky pod čarou;
- možnost budoucí úpravy CSL stylu pro školní pravidla.

### Seznam použité literatury – `docs/zotero/seznam-literatury.md`

- nadpis na samostatné stránce;
- vložení přes **Add/Edit Bibliography**;
- seznam obsahuje jen skutečně citované položky;
- aktualizace přes **Refresh**;
- metadata se opravují v Zoteru;
- bibliografie se ručně nepřepisuje;
- autor–rok a full-note používají abecední nečíslovaný seznam;
- číslovaný seznam používá číselný citační systém;
- nadpis seznamu se obvykle nečísluje, ale má být uveden v obsahu.

## Dokončení práce

### Závěrečná kontrola – `docs/dokonceni/zaverecna-kontrola.md`

- styly všech odstavců;
- nejvýše tři úrovně nadpisů;
- návaznost číslování;
- osamocené nadpisy;
- nadbytečné mezery a prázdné odstavce;
- tabulky, obrázky, grafy a jejich popisky;
- obsah a automatické seznamy;
- čísla stran;
- citace a bibliografie;
- funkčnost odkazů;
- pravopisná a typografická kontrola.

### Export do PDF – `docs/dokonceni/export-pdf.md`

- vytvoření kontrolní kopie dokumentu;
- aktualizace obsahu, seznamů, citací a bibliografie;
- export do PDF;
- možnosti PDF/A a případná omezení Google Docs;
- vizuální kontrola výsledného PDF stránku po stránce;
- kontrola fontů, zalomení, tabulek, obrázků, zápatí a čísel stran.

### Odevzdání – `docs/dokonceni/odevzdani.md`

- pojmenování výsledného souboru podle aktuálních pokynů školy;
- kontrola termínu a místa odevzdání;
- archivace editovatelného dokumentu a knihovny Zotera;
- upozornění, že konkrétní organizační pokyny se mohou měnit a musí být ověřeny.

## Řešení problémů

### Google Docs – `docs/reseni-problemu/google-docs.md`

- text se posouvá po přidání odstavce;
- nadpis zůstává na konci stránky;
- prázdná stránka;
- špatně navazující čísla stran;
- obsah nezobrazuje nadpis;
- text je odsazen mezerami nebo tabulátorem;
- tabulka nebo obrázek se oddělil od popisku.

### Apps Script – `docs/reseni-problemu/apps-script.md`

- nabídka skriptu se nezobrazila;
- skript žádá oprávnění;
- číslování se neaktualizovalo;
- automatický seznam neobsahuje položku;
- záložka nemohla být vytvořena;
- bezpečný návrat pomocí historie verzí.

### Zotero – `docs/reseni-problemu/zotero.md`

- v Google Docs chybí nabídka Zotero;
- Connector nevidí desktopovou aplikaci;
- zdroj nelze najít podle identifikátoru;
- citace se nezměnila po změně stylu;
- bibliografie se neaktualizovala;
- chybná metadata;
- odpojené citační pole;
- význam a nevratnost příkazu **Unlink Citations**.

### Slovník – `docs/slovnik.md`

- odstavec;
- styl;
- nadpis;
- oddíl;
- konec stránky;
- popisek;
- bibliografie;
- citační styl;
- DOI, ISBN, ISSN, PMID, RIS, BibTeX a CSL;
- Zotero Desktop, Connector a webová knihovna.

### Zdroje a metodika – `docs/zdroje-a-metodika.md`

- školní manuál a šablona;
- oficiální dokumentace Google Docs;
- oficiální dokumentace Zotera;
- použité normy a citační styly;
- datum posledního ověření jednotlivých postupů;
- autoři a správci publikace.

---

## 6. Doporučená navigace v `mkdocs.yml`

```yaml
nav:
  - Domů: index.md
  - Jak používat příručku: jak-pouzivat-prirucku.md
  - Příprava:
      - Potřebné nástroje: priprava/nastroje.md
      - Druhy a skladba prací: priprava/druhy-praci.md
      - Založení dokumentu: priprava/zalozeni-dokumentu.md
      - Cvičný text: priprava/cvicny-text.md
  - Google Docs:
      - Nastavení stránky: google-docs/nastaveni-stranky.md
      - Styly: google-docs/styly.md
      - Nadpisy: google-docs/nadpisy.md
      - Číslování nadpisů: google-docs/cislovani-nadpisu.md
      - Odstavce: google-docs/odstavce.md
      - Seznamy: google-docs/seznamy.md
      - Konce stránek a oddíly: google-docs/konce-stranek-a-oddily.md
      - Tabulky: google-docs/tabulky.md
      - Obrázky a grafy: google-docs/obrazky-a-grafy.md
      - Popisky a seznamy: google-docs/popisky-a-seznamy.md
      - Automatický obsah: google-docs/automaticky-obsah.md
      - Číslování stran: google-docs/cislovani-stran.md
  - Automatizace:
      - Instalace Apps Scriptu: automatizace/apps-script.md
      - Ovládání skriptu: automatizace/ovladani-skriptu.md
      - Omezení a obnova: automatizace/omezeni-a-obnova.md
  - Zotero:
      - Instalace: zotero/instalace.md
      - Knihovna a synchronizace: zotero/knihovna-a-synchronizace.md
      - Přidávání zdrojů: zotero/pridavani-zdroju.md
      - Kontrola metadat: zotero/kontrola-metadat.md
      - Citace autor–rok: zotero/citace-autor-rok.md
      - Citace v poznámkách: zotero/citace-v-poznamkach.md
      - Další citační styly: zotero/dalsi-citacni-styly.md
      - Archivní prameny: zotero/archivni-prameny.md
      - Seznam literatury: zotero/seznam-literatury.md
  - Dokončení:
      - Závěrečná kontrola: dokonceni/zaverecna-kontrola.md
      - Export do PDF: dokonceni/export-pdf.md
      - Odevzdání: dokonceni/odevzdani.md
  - Řešení problémů:
      - Google Docs: reseni-problemu/google-docs.md
      - Apps Script: reseni-problemu/apps-script.md
      - Zotero: reseni-problemu/zotero.md
  - Slovník: slovnik.md
  - Zdroje a metodika: zdroje-a-metodika.md
```

---

## 7. Vizuální a technické prvky

- Použít stejné téma, barvy, typografii a vlastní CSS jako v existujících učebnicích autora.
- Mermaid zapnout stejným způsobem jako ve stávajícím projektu.
- Snímky obrazovky ukládat s popisnými názvy, například `docs-styl-normalni-text.png`.
- Obrázky ořezávat na relevantní oblast, ale ponechat dost kontextu pro orientaci.
- Citlivé údaje, uživatelská jména a soukromé dokumenty na snímcích anonymizovat.
- Na úzkých obrazovkách musí být tabulky a diagramy čitelné nebo vodorovně posuvné.
- Nabídnout tiskovou variantu nebo souhrnný kontrolní seznam ke stažení.

---

## 8. Kontrolní milníky tvorby publikace

### Milník 1 – technická kostra

- repozitář se lokálně sestaví příkazem `mkdocs build --strict`;
- funguje navigace;
- fungují Mermaid diagramy;
- je připraveno nasazení přes Cloudflare Pages.

### Milník 2 – Google Docs

- jsou dokončeny všechny kapitoly nastavení dokumentu;
- postupy byly ověřeny v českém rozhraní Google Docs;
- snímky odpovídají aktuálnímu rozhraní.

### Milník 3 – Apps Script

- je vložena pouze finální otestovaná verze skriptu;
- popsané příkazy odpovídají skutečné nabídce;
- jsou otestovány číslování, popisky, seznamy a záložky.

### Milník 4 – Zotero

- jsou ověřeny ISO 690 autor–datum, ISO 690 full note a APA 7;
- funguje automatická bibliografie;
- je popsáno přidávání běžných i archivních zdrojů;
- všechny ukázkové citace používají korektní metadata.

### Milník 5 – redakční kontrola

- pravidla jsou porovnána s aktuálním školním manuálem;
- závazné a doporučené postupy jsou zřetelně rozlišeny;
- odkazy, navigace a obrázky jsou funkční;
- stránka je použitelná na počítači i telefonu;
- je ověřen tisk nebo export kontrolního seznamu.

---

## 9. Otevřené body před finálním zveřejněním

- Doplnit odkaz na aktuální školní šablonu.
- Doplnit aktuální organizační pokyny a termíny pouze z oficiálního zdroje.
- Dodat finální schválený Apps Script; nereprodukovat jej podle starých chybových verzí.
- Rozhodnout, zda bude školní manuál součástí veřejného repozitáře.
- Ověřit pravidlo číslování nadpisu „Seznam použité literatury“ a jeho zařazení do obsahu.
- Ověřit, zda škola požaduje konkrétní podobu archivních citací.
- Ověřit následné citace stejného zdroje ve stylu `ISO-690 (full note, Čeština)`.
- Doplnit snímky obrazovky až po stabilizaci textu jednotlivých kapitol.

