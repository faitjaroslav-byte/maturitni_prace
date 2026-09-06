# Číslování nadpisů

## Cíl

Nadpisy budou číslované automaticky ve tvaru `1`, `1.1` a `1.1.1`.

!!! tip "Doporučený postup"
    Čísla nadpisů nepište ručně. Po přesunutí nebo vložení kapitoly by se sama neopravila a mohla by poškodit automatický obsah.

## Proč je v Google Docs potřeba zvláštní postup

Google Docs na rozdíl od MS Wordu nepodporuje plnohodnotné automatické číslování nadpisů navázané přímo na styly **Nadpis 1**, **Nadpis 2** a **Nadpis 3**. Nestačí tedy jednou nastavit vazbu mezi úrovní nadpisu a tvarem čísla tak, aby se všechny nadpisy průběžně číslovaly stejně jako ve Wordu.

V praxi jsou proto dvě možnosti:

1. číslovat každý nadpis jednotlivě pomocí běžných nástrojů Google Docs;
2. nechat nadpisy očíslovat doplňující funkcí, tedy připraveným Apps Scriptem.

Oba postupy se nesmějí kombinovat. Pokud dokument očíslujete skriptem, nepokračujte u nově dopsaných kapitol ručním dopisováním čísel. Po úpravách dokumentu znovu spusťte stejnou doplňující funkci, aby se číslování přepočítalo jednotně v celém dokumentu.

!!! warning "Častá chyba"
    Ruční dopisování čísel po použití skriptu téměř jistě povede k duplicitám, chybné návaznosti nebo rozdílům mezi nadpisy a automatickým obsahem.

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
