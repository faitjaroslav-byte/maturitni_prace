# Číslování nadpisů

## Cíl

Nadpisy budou číslované automaticky ve tvaru `1`, `1.1` a `1.1.1`.

!!! tip "Doporučený postup"
    Čísla nadpisů nepište ručně. Po přesunutí nebo vložení kapitoly by se sama neopravila a mohla by poškodit automatický obsah.

## Příprava

1. Odstraňte ručně napsaná čísla z nadpisů.
2. Každému nadpisu přiřaďte styl **Nadpis 1**, **Nadpis 2** nebo **Nadpis 3**.
3. Běžným odstavcům ponechte **Normální text**.
4. Vytvořte kopii dokumentu nebo pojmenovanou verzi.

## Hromadné číslování

V plánovaném školním postupu má číslování zajišťovat vlastní Apps Script. Skript má projít nadpisy, odstranit starou automatickou předponu, vypočítat čísla podle úrovně a přidat je bez změny názvu kapitoly.

!!! warning "Ověřte s vedoucím práce"
    Před zveřejněním je nutné doplnit přesný název nabídky, tlačítka a funkce podle finálního otestovaného `.gs` souboru.

## Kontrolní bod

- [ ] Číslování plynule navazuje.
- [ ] V názvu není číslo dvakrát.
- [ ] Nadpis 2 patří pod předchozí Nadpis 1.
- [ ] Nadpis 3 patří pod předchozí Nadpis 2.
- [ ] Běžný text není součástí číslovaného seznamu.

