# Maturitní práce - pomocný technický manuál

Webová příručka pro studenty Gymnázia a SOŠ Rokycany k technické přípravě maturitní, ročníkové nebo seminární odborné práce. Aktuálně pokrývá hlavně Google Docs a Zotero; struktura počítá s budoucím doplněním MS Wordu, MS Excelu a dalších pomocných aplikací.

## Lokální spuštění

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Kontrolní build:

```bash
mkdocs build --strict
```

## Cloudflare Pages

Doporučené nasazení je přes GitHub repozitář napojený v Cloudflare Pages:

- Build command: `pip install -r requirements.txt && mkdocs build --strict`
- Build output directory: `site`
- Root directory: ponechat prázdné, pokud je repozitář celý tento projekt

Projekt neobsahuje žádné tajné hodnoty ani tokeny. Finální Apps Script a školní šablona zatím nejsou součástí repozitáře.

### Ochrana webu heslem

Cloudflare Pages používá soubor `docs/_worker.js`, který chrání celý web pomocí HTTP Basic Authentication.

V Cloudflare nastavte tyto proměnné prostředí:

- `BASIC_AUTH_USERNAME` - přihlašovací jméno;
- `BASIC_AUTH_PASSWORD` - přihlašovací heslo.

Pokud proměnné nejsou nastavené, Worker web nenaservíruje a vrátí chybu konfigurace.
