# Jak připravit maturitní práci v Google Docs

Webová příručka pro studenty Gymnázia a SOŠ Rokycany k přípravě maturitní, ročníkové nebo seminární odborné práce v Google Docs a Zoteru.

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

