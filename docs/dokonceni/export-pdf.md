# Export do PDF

## Cíl

Vytvoříte výsledné PDF a zkontrolujete, že odpovídá dokumentu.

!!! info "Požadavek GASOŠ"
    Výstupní soubor má být PDF, pokud možno PDF/A.

!!! note "PDF/A nelze vytvořit přímo v Google Docs"
    Google Docs umí dokument stáhnout jako běžné PDF, ale nenabízí přímé uložení ve formátu PDF/A. Pokud je PDF/A vyžadováno, nejprve stáhněte běžné PDF a potom ho převeďte v nástroji, který PDF/A podporuje.

    V praxi lze použít například:

    - **Adobe Acrobat Pro** - placený profesionální nástroj, vhodný pro převod i kontrolu souladu s PDF/A;
    - **LibreOffice** - bezplatný kancelářský balík, který umí při exportu do PDF zvolit verzi PDF/A;
    - **PDF24 Creator** - bezplatný nástroj pro Windows, který obsahuje převod a profily pro PDF/A.

    Po převodu vždy otevřete výsledné PDF/A a zkontrolujte vzhled stran, písma, obrázky, tabulky, citace a obsah.

## Postup

1. Vytvořte konečnou pojmenovanou verzi dokumentu.
2. Spusťte finální aktualizaci Apps Scriptu.
3. Aktualizujte obsah.
4. V Zoteru spusťte **Refresh**.
5. Zkontrolujte bibliografii.
6. Stáhněte dokument jako PDF.
7. Pokud je požadováno PDF/A, použijte ověřený postup převodu a výsledek validujte.
8. Otevřete stažené PDF mimo Google Docs.
9. Projděte každou stránku.

## Varování Zotera při stahování

Google Docs může při stahování dokumentu zobrazit varování, že dokument obsahuje aktivní citace Zotera. Aktivní citace se mohou ve stažené kopii chovat jako odkazy na zotero.org.

Bezpečný postup je:

1. Ponechte si původní dokument s propojenými citacemi pro další úpravy.
2. Vytvořte kopii dokumentu.
3. V kopii zvolte **Zotero -> Unlink Citations** nebo **Odpojit citace**.
4. Teprve z této kopie stáhněte finální PDF.

!!! note "Technická poznámka"
    Odpojením citace nezmizí. Zůstanou v textu i v seznamu literatury, ale stanou se z nich obyčejné textové údaje. Nepůjde je dál aktualizovat přes **Zotero -> Refresh**, změnit jejich citační styl ani automaticky přepočítat bibliografii.

## Co kontrolovat v PDF

- nechtěné prázdné stránky;
- osamocené nadpisy;
- rozdělené tabulky a popisky;
- kvalitu obrázků;
- přetečení tabulek;
- fonty a zvláštní znaky;
- čísla stran;
- obsah a seznamy;
- funkčnost odkazů, pokud mají být zachovány.
