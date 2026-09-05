# Druhy a skladba prací

## Cíl

Vyberete typ práce a pochopíte, proč nestačí obecné členění na teoretickou a praktickou část.

!!! info "Požadavek GASOŠ"
    Práce musí mít skladbu odpovídající svému typu. Obecné rozdělení pouze na „teoretickou část“ a „praktickou část“ není přípustné.

## Rešeršní práce

Rešeršní neboli kompilační práce je podle školního manuálu přípustná jen výjimečně. Vychází z vyšších desítek relevantních zdrojů, které autor porovnává, propojuje a parafrázuje. Není to opis ani slepenec citátů.

```mermaid
flowchart LR
    D["Druh práce"] --> R["Rešeršní práce"]
    R --> A["Titulní list"] --> B["Prohlášení"] --> C["Poděkování"] --> E["Obsah"]
    E --> F["Úvod"] --> G["Vlastní text práce"] --> H["Závěr"] --> I["Seznam použité literatury"]
```

Poděkování není obsahově povinné. Zařazuje se jen tehdy, když má skutečný smysl.

## Původní práce exaktních oborů

Tento typ práce stojí na vlastním výzkumu, měření nebo experimentu. Kapitola **Materiál a metody** vysvětluje, jak byl výzkum proveden. **Výsledky** předkládají zjištění a **Diskuze** je hodnotí a porovnává s publikovanými pracemi.

```mermaid
flowchart LR
    D["Druh práce"] --> R["Původní exaktní práce"]
    R --> A["Titulní list"] --> B["Prohlášení"] --> C["Poděkování"] --> E["Obsah"]
    E --> F["Abstrakt"] --> G["Úvod"] --> H["Materiál a metody"] --> I["Výsledky"]
    I --> J["Diskuze"] --> K["Závěr"] --> L["Seznam použité literatury"]
```

## Původní práce humanitních oborů

Humanitně orientovaná práce má sledovat jasnou argumentační linku. Vlastní stať se dělí do věcných kapitol podle tématu, pramenů a postupu, nikoliv podle obecného schématu „teorie“ a „praxe“.

```mermaid
flowchart LR
    D["Druh práce"] --> R["Původní humanitní práce"]
    R --> A["Titulní list"] --> B["Prohlášení"] --> C["Poděkování"] --> E["Obsah"]
    E --> F["Abstrakt"] --> G["Úvod"] --> H["Vlastní stať"] --> I["Závěr"]
    I --> J["Seznam literatury"] --> K["Seznamy obrazových prvků"] --> L["Přílohy"]
```

Seznamy obrázků, grafů, tabulek a přílohy se zařazují pouze tehdy, když je práce skutečně obsahuje.

## Technické dílo

Technické dílo popisuje problém, zvolené řešení, implementaci a ověření funkčnosti. Není nutné vkládat celý zdrojový kód; důležitější je srozumitelně vysvětlit rozhodnutí a testování.

```mermaid
flowchart LR
    D["Druh práce"] --> R["Technické dílo"]
    R --> A["Titulní strana"] --> B["Prohlášení"] --> C["Poděkování"] --> E["Obsah"]
    E --> F["Abstrakt"] --> G["Úvod"] --> H["Analýza problému"] --> I["Implementace"]
    I --> J["Testování"] --> K["Uživatelská příručka"] --> L["Závěr"] --> M["Seznam použité literatury"]
```

## Kontrolní bod

- [ ] Umím pojmenovat typ své práce.
- [ ] Kapitoly odpovídají zvolenému typu práce.
- [ ] Nepoužívám obecné názvy kapitol jen proto, že vypadají známě.

## Související témata

- [Automatický obsah](../google-docs/automaticky-obsah.md)
- [Citace autor-rok](../zotero/citace-autor-rok.md)
- [Závěrečná kontrola](../dokonceni/zaverecna-kontrola.md)

