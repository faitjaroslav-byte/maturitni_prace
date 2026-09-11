# Instalace Apps Scriptu

## Cíl

Připravíte dokument na použití školního Apps Scriptu bez ztráty možnosti návratu.

!!! tip "Doporučený postup"
    Před vložením skriptu vytvořte kopii dokumentu nebo pojmenovanou verzi. Skript upravuje číslování a automatické seznamy v celém dokumentu.

## Vložení skriptu

1. Otevřete cvičný Google dokument.
2. Vytvořte kopii dokumentu nebo pojmenovanou verzi.
3. Otevřete **Rozšíření -> Apps Script**.
4. Vložte kód ze sekce **Kód skriptu ke zkopírování**.
5. Uložte projekt.
6. Obnovte dokument, pokud skript vytváří vlastní nabídku pomocí `onOpen()`.
7. Při prvním spuštění potvrďte požadovaná oprávnění.

## Kód skriptu ke zkopírování

!!! info "Verze skriptu"
    Níže uvedený kód je **rev1 ze dne 11. září 2026**.

    Oproti předchozí verzi obsahuje tyto fixy:

    - prázdné odstavce se stylem nadpisu se nečíslují;
    - opakované spuštění zachovává konce stránek;
    - číslování zůstává stabilní;
    - formátování nadpisů se nepřepisuje.

```javascript title="kod.gs"
--8<-- "downloads/kod.gs"
```

## Proč skript žádá oprávnění

Skript potřebuje pracovat s obsahem konkrétního dokumentu. Uživatel musí oprávnění udělit sám. Pokud dokument zkopíruje jiný student, autorizace a případné spouštěče se obvykle řeší znovu.

## Co ještě ověřit před hromadným použitím

- ověřit skript v kopii školní šablony;
- ověřit přesné názvy položek vlastní nabídky ve studentském dokumentu;
- ověřit, zda se skript kopíruje spolu se školní šablonou v zamýšleném postupu.
