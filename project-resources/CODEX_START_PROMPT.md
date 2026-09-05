# Startovací prompt pro Codex

Níže uvedený text vlož do Codexu při zahájení práce v novém nebo připraveném GitHub repozitáři.

---

## PROMPT PRO CODEX

Pracujeme na české webové publikaci **Jak připravit maturitní práci v Google Docs** pro studenty Gymnázia a SOŠ Rokycany (GASOŠ). Publikace má být vytvořena v Markdownu, sestavována pomocí MkDocs a nasazena jako statický web přes GitHub a Cloudflare Pages. Má vzhledově a technicky navazovat na moje existující webové učebnice, které rovněž používají MkDocs a upravuji je prostřednictvím Codexu.

### 1. Cíl projektu

Vytvoř praktickou příručku, podle které může učitel studenty živě provádět nastavením Google Docs a Zotera a kterou mohou studenti později používat jako samostatnou referenční dokumentaci.

Příručka musí pokrýt:

- správnou skladbu různých typů maturitních prací;
- nastavení stránky a dokumentu v Google Docs;
- styly Normální text a Nadpis 1–3;
- víceúrovňové číslování nadpisů;
- formátování odstavců;
- odrážkové a číslované seznamy;
- konce stránek a oddíly;
- záhlaví, zápatí a číslování stran;
- tabulky, obrázky a grafy;
- popisky a automatické seznamy obrazových prvků;
- automatický obsah;
- školní Apps Script pro číslování, popisky, seznamy a záložky;
- instalaci a používání Zotera;
- přidávání, kontrolu a správu zdrojů;
- ISO 690 autor–datum, ISO 690 full note, APA 7 a číselné citace;
- archivní prameny;
- automatický seznam použité literatury;
- závěrečnou kontrolu a export do PDF nebo PDF/A.

### 2. Autoritativní zdroje a jejich priorita

Při práci používej zdroje v tomto pořadí:

1. **Aktuální manuál GASOŠ** – očekávaný soubor `sources/gasos-manual-jak_napsat_MP-240221.pdf`, verze 240221.
2. **Aktuální školní šablona**, pokud bude dodána.
3. **Finální otestovaný Apps Script**, který dodám jako samostatný soubor.
4. **Soubor `MANUAL_OBSAH.md`**, který je obsahovým masterem a obsahuje konkrétní postupy, vysvětlení a rozhodnutí z praktického nastavování dokumentu. Tento obsah nerozšiřuj domněnkami a při převodu do webu zachovej jeho věcný význam.
5. **Soubor `STRUKTURA_OBSAHU.md`**, který určuje informační architekturu, názvy stránek a navigaci.
6. **Oficiální dokumentace Google a Zotera** pro technické postupy, které se mohly změnit.
7. Existující MkDocs repozitář mé učebnice jako technický a vizuální vzor.

Pokud si zdroje odporují, závazné školní požadavky mají přednost. Rozpor nezakrývej: popiš jej a navrhni, co je třeba ověřit s garantem nebo vedoucím práce.

Pokud některý z uvedených podkladů v repozitáři chybí, neodhaduj jeho obsah. Uveď chybějící vstup jako blokující nebo otevřený bod a pokračuj pouze v částech, které lze bezpečně připravit.

### 3. Závazné požadavky GASOŠ známé z manuálu

Publikace musí správně vysvětlit minimálně tato pravidla:

- výstupní soubor je PDF, pokud možno PDF/A;
- stránka A4 a všechny okraje 2,5 cm;
- strany se počítají od titulní strany, ale číslo se zobrazuje až od první stránky za obsahem;
- nejvýše tři úrovně nadpisů;
- nadpisy používají bezpatkové tučné písmo, nejvýše 16 bodů;
- běžný text používá patkové písmo 12 bodů;
- běžný odstavec je zarovnán do bloku, má řádkování 1,5 a mezeru za odstavcem 6 bodů;
- první řádek odstavce se neodsazuje;
- mezi slovy je právě jedna mezera;
- zarovnání se nevytváří opakovanými mezerami;
- automatický obsah se vytváří ze stylů nadpisů;
- tabulka se označuje `Tab. xx` a její samovysvětlující popisek je nad tabulkou;
- obrázky a grafy se označují `Obr. xx`, používají společnou číselnou řadu a popisek je pod prvkem;
- převzaté prvky musí mít uvedený zdroj;
- obecné rozdělení práce pouze na „teoretickou část“ a „praktickou část“ není přípustné;
- práce musí používat jeden citační systém konzistentně;
- seznam použité literatury musí obsahovat použité a citované zdroje.

Každé tvrzení, které označíš jako „Požadavek GASOŠ“, ověř v dodaném manuálu nebo školní šabloně. Pokud je něco jen doporučená praxe, označ to jako doporučení, ne jako školní povinnost.

### 4. Typy a skladba prací

Příručka má vysvětlit čtyři struktury:

1. **Rešeršní (kompilační) práce**  
   Titulní list → Prohlášení → Poděkování → Obsah → Úvod → Vlastní text práce → Závěr → Seznam použité literatury

2. **Původní práce exaktních oborů**  
   Titulní list → Prohlášení → Poděkování → Obsah → Abstrakt → Úvod → Materiál a metody → Výsledky → Diskuze → Závěr → Seznam použité literatury

3. **Původní práce humanitních oborů**  
   Titulní list → Prohlášení → Poděkování → Obsah → Abstrakt → Úvod → Vlastní stať → Závěr → Seznam literatury → Seznamy obrázků, grafů a tabulek → Přílohy

4. **Technické dílo**  
   Titulní strana → Prohlášení → Poděkování → Obsah → Abstrakt → Úvod → Analýza problému → Implementace → Testování → Uživatelská příručka → Závěr → Seznam použité literatury

Poděkování, seznamy obrazových prvků a přílohy označ podle kontextu jako nepovinné nebo podmíněné obsahem práce.

Pro každou strukturu vytvoř **samostatný vodorovný Mermaid diagram**:

- diagram začíná polem `Druh práce`;
- následuje konkrétní typ práce;
- každá část práce je v samostatném poli;
- pole jsou propojena šipkami zleva doprava;
- nepoužívej `subgraph` ani vnější rámečky kolem celé větve;
- pokud je diagram na menším displeji široký, zajisti vodorovné posouvání místo zmenšení do nečitelné velikosti.

### 5. Důležitá rozhodnutí z přípravné konzultace

Při psaní respektuj tyto již vyjasněné zásady:

- Styl **Normální text** se používá pro běžné odstavce i pod číslovanými podkapitolami. Text se tabulátorem neodsazuje pod číslo typu `1.1`.
- Čísla nadpisů se nepíší ručně. Hromadně je vytváří automatické číslování nebo schválený Apps Script.
- K udržení nadpisu s následujícím textem se používá **Udržet s dalším**, nikoliv konec stránky.
- **Udržet řádky pohromadě** se používá tam, kde nemá být odstavec nebo související prvek nevhodně rozdělen.
- Konec stránky se používá pro skutečný začátek nové stránky. Konec oddílu se používá tam, kde se mění záhlaví, zápatí, číslování nebo jiné nastavení oddílu.
- Seznam použité literatury a následné seznamy obrazových prvků nebo příloh mají začínat na samostatných stranách.
- Titulní stránka se nesmí svisle vycentrovat pomocí řady prázdných odstavců. Přednost má školní šablona nebo stabilní rozvržení.
- Popisek tabulky je nad tabulkou. Popisek obrázku nebo grafu je pod prvkem.
- Grafy navazují na číslování ostatních obrazových prvků `Obr.`.
- Popisek musí být samovysvětlující a musí obsahovat informace potřebné k pochopení prvku.
- Popisek a jeho tabulka, obrázek nebo graf musí zůstat pohromadě.
- Google Docs nemá plnohodnotný samostatný pojmenovaný styl seznamu jako Word; formát seznamu lze vytvořit a přenést na další seznamy.
- Automatické výstupy skriptu mají používat běžné černé písmo bez nechtěného tučného zvýraznění.

### 6. Apps Script

V projektu bude publikována finální verze skriptu pro automatizaci Google Docs. Skript má podle dosavadního řešení zajišťovat zejména:

- hromadné víceúrovňové číslování nadpisů;
- číslování popisků tabulek;
- společné číslování obrázků a grafů;
- automatické vytvoření nebo aktualizaci příslušných seznamů;
- vytvoření záložek nebo odkazů na prvky, pokud je tato funkce ve finální verzi zachována;
- společný příkaz pro aktualizaci všech automatických částí.

**Důležité:** Finální zdrojový kód zatím nepovažuj za dostupný, pokud není v repozitáři skutečně přiložen. Nevytvářej jej podle tohoto popisu ani podle starých chybových hlášení. Požádej o aktuální otestovaný `.gs` soubor a před publikací porovnej dokumentaci se skutečnými názvy funkcí a nabídek.

V průběhu vývoje se vyskytly a byly opraveny chyby:

- `DocumentApp.flush is not a function`;
- `doc.getUi is not a function`;
- `Exception: Invalid argument: element` při vytváření záložky.

Tyto chyby použij pouze při tvorbě kapitoly řešení problémů. Do veřejného návodu nevkládej nefunkční historické verze kódu.

### 7. Zotero – požadovaný obsah

Vysvětli rozdíl mezi:

- **Zotero Desktop** – hlavní aplikace a lokální knihovna;
- **Zotero Connector** – rozšíření pro ukládání zdrojů a integraci s Google Docs;
- **webovou knihovnou Zotera** – doplňkovým přístupem ke knihovně a sdílení.

Pro automatické vkládání a úpravu citací v Google Docs je nutná nainstalovaná a spuštěná desktopová aplikace Zotero a Connector.

Přidávání zdrojů:

- preferuj uložení přes Connector z primární stránky zdroje;
- dialog identifikátoru používá ISBN, DOI, PMID, arXiv ID a ADS Bibcode;
- ISSN označuje celý časopis, nikoliv konkrétní článek, a v tomto dialogu se nepoužívá k dohledání článku;
- popiš import RIS a BibTeX;
- popiš přidání PDF a kontrolu získaných metadat;
- ruční zadání použij tam, kde automatické získání není možné.

Archivní prameny:

- obvykle používají název archivu, fond nebo sbírku, inventární číslo, signaturu, karton a folio;
- v Zoteru je lze založit ručně jako Rukopis, Dopis nebo Dokument podle povahy pramene;
- výslednou podobu archivní citace je nutné zkontrolovat;
- některé digitalizované archiválie mohou mít trvalý identifikátor, ale nesmí se to zobecňovat.

### 8. Citační systémy a bibliografie

Příručka musí rozlišit:

#### ISO 690 autor–datum

- vhodný styl: `ISO-690 (author-date, Čeština)`;
- citace v textu má podobu autor a rok;
- seznam literatury je abecední a nečíslovaný.

#### Poznámky pod čarou

- vhodné zejména pro humanitně orientované práce;
- pro nácvik byl použit styl `ISO-690 (full note, Čeština)`;
- Zotero vytvoří poznámku automaticky, student ji předem nezakládá ručně;
- pokud se odkaz vztahuje k celé větě, číslo poznámky má být za koncovým interpunkčním znaménkem;
- konkrétní stránka se přidává jako lokátor v citačním dialogu;
- seznam literatury je abecední a nečíslovaný;
- ověř první i následnou citaci stejného zdroje proti aktuálním pokynům školy.

#### APA 7

- funguje technicky obdobně jako ostatní styly Zotera;
- používá systém autor–rok;
- bibliografie je abecední a nečíslovaná;
- výstup není totožný s ISO 690 a styly se v práci nesmějí míchat.

#### Číselný systém

- odkazy používají čísla;
- bibliografie je číslovaná podle pravidel konkrétního stylu;
- čísla se nevytvářejí ručně.

Bibliografii vkládej přes **Zotero → Add/Edit Bibliography**. Aktualizuje se přes **Refresh**. Chybná metadata se opravují v knihovně Zotera, nikoliv ručním přepisem automatické bibliografie.

### 9. Obsahový master a informační architektura

Soubor `MANUAL_OBSAH.md` obsahuje skutečný základ publikace, nikoliv pouze inspiraci nebo seznam témat. Rozděl jeho obsah do jednotlivých stránek, odstraň opakování a doplň interní odkazy, ale neměň potvrzené postupy bez ověření. Pokud narazíš na nejasnost nebo časově proměnlivý údaj, ověř jej v autoritativním zdroji a změnu transparentně popiš.

Použij strukturu souborů a navigaci definovanou v `STRUKTURA_OBSAHU.md`. Pokud technický vzor existující učebnice používá jinou rozumnou konvenci, zachovej jeho konvenci a mapování stručně zdokumentuj.

Hlavní oblasti navigace:

1. Domů a používání příručky
2. Příprava
3. Google Docs
4. Automatizace pomocí Apps Scriptu
5. Zotero
6. Dokončení práce
7. Řešení problémů
8. Slovník
9. Zdroje a metodika

### 10. Jednotná šablona kapitoly

Praktické kapitoly vytvářej přibližně v této podobě:

```markdown
# Název postupu

## Cíl

Jedna až dvě věty popisující výsledek.

!!! info "Požadavek GASOŠ"
    Použij pouze pro ověřené školní pravidlo.

## Postup

1. První konkrétní krok.
2. Druhý konkrétní krok.
3. Kontrola výsledku.

## Jak má výsledek vypadat

Popis nebo aktuální snímek obrazovky.

## Kontrolní bod

- [ ] Jednoznačně ověřitelný výsledek.

!!! warning "Častá chyba"
    Popis chyby a bezpečného způsobu opravy.

## Související témata

- [Název kapitoly](odkaz.md)
```

Nepoužívej informační blok „Požadavek GASOŠ“ pro obecné typografické doporučení nebo omezení softwaru.

### 11. Technické řešení MkDocs

Nejprve prohlédni existující MkDocs učebnici a převezmi z ní:

- téma a barevnou paletu;
- rozšíření Markdownu;
- vlastní CSS;
- řešení Mermaid diagramů;
- navigační konvence;
- způsob práce s obrázky;
- konfiguraci Cloudflare Pages.

Nevytvářej paralelní nebo konfliktní konfiguraci, pokud lze použít existující řešení.

Minimální technické požadavky:

- web se musí sestavit příkazem `mkdocs build --strict`;
- interní odkazy nesmí být rozbité;
- Mermaid diagramy musí být vykreslené;
- tabulky a široké diagramy musí být použitelné na mobilním zařízení;
- navigace musí odpovídat skutečným souborům;
- závislosti musí být uvedeny v `requirements.txt` nebo v již používaném ekvivalentu;
- v repozitáři nesmí být přístupové údaje ani jiné tajné hodnoty;
- generovaný adresář `site/` se běžně neukládá do Gitu, pokud existující projekt nepoužívá jinou konvenci.

Pro Cloudflare Pages očekávej obvykle:

```text
Build command: pip install -r requirements.txt && mkdocs build
Output directory: site
```

Konkrétní nastavení vždy porovnej s fungujícím projektem. Nic nenasazuj do produkce a neměň doménu bez výslovného požadavku.

### 12. Pracovní postup Codexu

1. Prohlédni repozitář, `AGENTS.md`, `README`, `mkdocs.yml`, závislosti a vlastní styly.
2. Zkontroluj stav Gitu a zachovej všechny existující uživatelské změny.
3. Prostuduj celý školní manuál a relevantní dodané podklady.
4. Prostuduj celý `MANUAL_OBSAH.md`; považuj jej za obsahový základ, který se má redakčně rozdělit do webu.
5. Porovnej existující strukturu s `STRUKTURA_OBSAHU.md`.
6. Navrhni krátký plán implementace a označ chybějící vstupy.
7. Připrav technickou kostru a navigaci.
8. Tvoř kapitoly po menších tematických celcích z obsahu masteru.
9. Po každém celku spusť relevantní kontroly.
10. Ověř výsledný web pomocí `mkdocs build --strict`.
11. Před odevzdáním shrň provedené změny, testy a otevřené body.

Při úpravách používej malé, přehledné změny. Nepřepisuj nesouvisející soubory, nemaž uživatelskou práci a neprováděj destruktivní gitové operace.

### 13. Práce se snímky obrazovky

- Nevytvářej fiktivní snímky uživatelského rozhraní.
- Pokud snímek chybí, vlož jasné `TODO` s popisem potřebného záběru.
- Používej aktuální české rozhraní, pokud je publikace česká.
- Ořízni snímek na relevantní část, ale zachovej kontext potřebný k orientaci.
- Anonymizuj účty, názvy soukromých dokumentů a další citlivé údaje.
- Každý obrázek musí mít smysluplný alternativní text.

### 14. Kontrola správnosti

Před označením kapitoly jako hotové ověř:

- shodu se školním manuálem;
- shodu názvů nabídek s aktuálním českým rozhraním;
- rozdíl mezi povinností a doporučením;
- funkčnost interních odkazů;
- správné vykreslení obrázků a diagramů;
- jazykovou a typografickou správnost;
- možnost provést postup podle návodu bez dalších nevysvětlených kroků.

### 15. První úkol

Na začátku práce:

1. zjisti, zda pracujeme v novém repozitáři, nebo v kopii existující učebnice;
2. prohlédni dostupné podklady;
3. přečti celý `MANUAL_OBSAH.md` a `STRUKTURA_OBSAHU.md`;
4. identifikuj chybějící školní šablonu, finální Apps Script a technický vzor, pokud nejsou dostupné;
5. připrav nebo uprav technickou kostru MkDocs;
6. vytvoř navigaci a prázdné stránky podle `STRUKTURA_OBSAHU.md`;
7. z obsahového masteru zpracuj nejprve kapitoly **Jak používat příručku**, **Potřebné nástroje** a **Druhy a skladba prací**;
8. spusť `mkdocs build --strict` a oprav všechny chyby;
9. ukaž výsledek a navrhni další nejbližší tematický celek.

Nezačínej rozsáhlým psaním všech kapitol současně. Nejprve vytvoř funkční kostru a jeden reprezentativní celek, na kterém společně ověříme styl, podrobnost a použitelnost při živé výuce.

## KONEC PROMPTU
