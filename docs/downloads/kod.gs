function onOpen() {
  DocumentApp.getUi()
    .createMenu('Maturitní práce')
    .addItem(
      'Aktualizovat číslování nadpisů',
      'aktualizovatCislovaniNadpisu'
    )
    .addItem(
      'Aktualizovat číslování popisků',
      'aktualizovatCislovaniPopisku'
    )
    .addItem(
      'Aktualizovat seznamy',
      'aktualizovatSeznamy'
    )
    .addSeparator()
    .addItem(
      'Aktualizovat vše',
      'aktualizovatVse'
    )
    .addToUi();
}


function aktualizovatVse() {
  aktualizovatCislovaniNadpisu();
  aktualizovatCislovaniPopisku();
  aktualizovatSeznamy();

  console.log('Celková aktualizace byla dokončena.');
}


function aktualizovatCislovaniNadpisu() {
  const doc = DocumentApp.getActiveDocument();
  const paragraphs = doc.getBody().getParagraphs();

  const counters = [0, 0, 0];
  let headingCount = 0;

  paragraphs.forEach(paragraph => {
    const heading = paragraph.getHeading();
    let level = 0;

    if (heading === DocumentApp.ParagraphHeading.HEADING1) {
      level = 1;
    } else if (
      heading === DocumentApp.ParagraphHeading.HEADING2
    ) {
      level = 2;
    } else if (
      heading === DocumentApp.ParagraphHeading.HEADING3
    ) {
      level = 3;
    }

    if (level === 0) {
      return;
    }

    headingCount++;
    counters[level - 1]++;

    for (let i = level; i < counters.length; i++) {
      counters[i] = 0;
    }

    const cleanText = odstranitCisloNadpisu(
      paragraph.getText()
    );

    const number = counters
      .slice(0, level)
      .join('.');

    paragraph.setText(number + ' ' + cleanText);
  });

  console.log('Očíslováno nadpisů: ' + headingCount);
}


function aktualizovatCislovaniPopisku() {
  const doc = DocumentApp.getActiveDocument();
  const paragraphs = doc.getBody().getParagraphs();

  let imageCounter = 0;
  let tableCounter = 0;
  let reachedLists = false;

  paragraphs.forEach(paragraph => {
    if (jeZacatekSeznamoveCasti(paragraph)) {
      reachedLists = true;
    }

    // Položky v automatických seznamech již nečíslujeme.
    if (reachedLists) {
      return;
    }

    const originalText = paragraph.getText();

    const imageMatch = originalText.match(
      /^\s*Obr\.\s*(?:\d+\s*)?:\s*/i
    );

    const tableMatch = originalText.match(
      /^\s*Tab\.\s*(?:\d+\s*)?:\s*/i
    );

    if (imageMatch) {
      imageCounter++;

      nahraditPrefixPopisku(
        paragraph,
        imageMatch[0],
        'Obr. ' + imageCounter + ': '
      );

      return;
    }

    if (tableMatch) {
      tableCounter++;

      nahraditPrefixPopisku(
        paragraph,
        tableMatch[0],
        'Tab. ' + tableCounter + ': '
      );
    }
  });

  console.log(
    'Očíslováno obrázků a grafů: ' + imageCounter
  );

  console.log(
    'Očíslováno tabulek: ' + tableCounter
  );
}


function aktualizovatSeznamy() {
  const doc = DocumentApp.getActiveDocument();
  const tab = doc.getActiveTab().asDocumentTab();
  const body = tab.getBody();

  const imageListHeading = najitNadpis(
    body,
    'Seznam obrázků a grafů'
  );

  const tableListHeading = najitNadpis(
    body,
    'Seznam tabulek'
  );

  if (!imageListHeading) {
    throw new Error(
      'Nebyl nalezen nadpis „Seznam obrázků a grafů“.'
    );
  }

  if (!tableListHeading) {
    throw new Error(
      'Nebyl nalezen nadpis „Seznam tabulek“.'
    );
  }

  const captions = najitPopisky(body);

  // Odstranění seznamu tabulek provádíme jako první,
  // aby se nezměnila poloha předcházejícího seznamu.
  odstranitStarePolozky(
    body,
    tableListHeading,
    'Tab'
  );

  odstranitStarePolozky(
    body,
    imageListHeading,
    'Obr'
  );

  odstranStareZalozky(tab);

  const bookmarkIds = [];

  const imageEntries = captions.images.map(item => {
    const bookmark = vytvoritZalozku(
      tab,
      item.paragraph
    );

    bookmarkIds.push(bookmark.getId());

    return {
      text: item.text,
      link: vytvoritOdkazNaZalozku(
        doc.getId(),
        bookmark.getId()
      )
    };
  });

  const tableEntries = captions.tables.map(item => {
    const bookmark = vytvoritZalozku(
      tab,
      item.paragraph
    );

    bookmarkIds.push(bookmark.getId());

    return {
      text: item.text,
      link: vytvoritOdkazNaZalozku(
        doc.getId(),
        bookmark.getId()
      )
    };
  });

  vlozitPolozkySeznamu(
    body,
    imageListHeading,
    imageEntries
  );

  vlozitPolozkySeznamu(
    body,
    tableListHeading,
    tableEntries
  );

  PropertiesService
    .getDocumentProperties()
    .setProperty(
      'MP_CAPTION_BOOKMARKS',
      JSON.stringify(bookmarkIds)
    );

  console.log(
    'Položek v seznamu obrázků a grafů: ' +
    imageEntries.length
  );

  console.log(
    'Položek v seznamu tabulek: ' +
    tableEntries.length
  );
}


function najitPopisky(body) {
  const result = {
    images: [],
    tables: []
  };

  const paragraphs = body.getParagraphs();
  let reachedLists = false;

  paragraphs.forEach(paragraph => {
    if (jeZacatekSeznamoveCasti(paragraph)) {
      reachedLists = true;
    }

    if (reachedLists) {
      return;
    }

    const text = paragraph.getText().trim();

    if (/^Obr\.\s*\d+\s*:/i.test(text)) {
      result.images.push({
        paragraph: paragraph,
        text: text
      });
    } else if (/^Tab\.\s*\d+\s*:/i.test(text)) {
      result.tables.push({
        paragraph: paragraph,
        text: text
      });
    }
  });

  return result;
}


function najitNadpis(body, requestedName) {
  const paragraphs = body.getParagraphs();

  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];

    if (
      paragraph.getHeading() !==
      DocumentApp.ParagraphHeading.HEADING1
    ) {
      continue;
    }

    const headingName = odstranitCisloNadpisu(
      paragraph.getText()
    );

    if (
      headingName.trim().toLowerCase() ===
      requestedName.trim().toLowerCase()
    ) {
      return paragraph;
    }
  }

  return null;
}


function jeZacatekSeznamoveCasti(paragraph) {
  if (
    paragraph.getHeading() !==
    DocumentApp.ParagraphHeading.HEADING1
  ) {
    return false;
  }

  const name = odstranitCisloNadpisu(
    paragraph.getText()
  ).trim().toLowerCase();

  return (
    name === 'seznam obrázků a grafů' ||
    name === 'seznam tabulek' ||
    name === 'seznam příloh' ||
    name === 'přílohy'
  );
}


function odstranitStarePolozky(
  body,
  headingParagraph,
  type
) {
  const pattern = type === 'Obr'
    ? /^\s*Obr\.\s*\d+\s*:/i
    : /^\s*Tab\.\s*\d+\s*:/i;

  let index =
    body.getChildIndex(headingParagraph) + 1;

  while (index < body.getNumChildren()) {
    const child = body.getChild(index);

    if (
      child.getType() ===
      DocumentApp.ElementType.PARAGRAPH
    ) {
      const paragraph = child.asParagraph();

      if (
        paragraph.getHeading() ===
        DocumentApp.ParagraphHeading.HEADING1
      ) {
        break;
      }

      if (pattern.test(paragraph.getText())) {
        paragraph.removeFromParent();
        continue;
      }
    }

    index++;
  }
}


function vlozitPolozkySeznamu(
  body,
  headingParagraph,
  entries
) {
  let index =
    body.getChildIndex(headingParagraph) + 1;

  entries.forEach(entry => {
    const paragraph = body.insertParagraph(
      index,
      entry.text
    );

    // Položka seznamu bude běžný odstavec.
    paragraph.setHeading(
      DocumentApp.ParagraphHeading.NORMAL
    );

    const text = paragraph.editAsText();
    const lastCharacter =
      text.getText().length - 1;

    if (lastCharacter >= 0) {
      // Zachování klikacího odkazu.
      text.setLinkUrl(
        0,
        lastCharacter,
        entry.link
      );

      // Vizuálně běžný černý text bez podtržení.
      text.setForegroundColor(
        0,
        lastCharacter,
        '#000000'
      );

      text.setUnderline(
        0,
        lastCharacter,
        false
      );
    }

    index++;
  });
}

function vytvoritZalozku(tab, paragraph) {
  for (
    let i = 0;
    i < paragraph.getNumChildren();
    i++
  ) {
    const child = paragraph.getChild(i);

    if (
      child.getType() ===
      DocumentApp.ElementType.TEXT
    ) {
      const textElement = child.asText();

      if (textElement.getText().length > 0) {
        const position = tab.newPosition(
          textElement,
          0
        );

        return tab.addBookmark(position);
      }
    }
  }

  throw new Error(
    'U popisku nebyl nalezen textový prvek: ' +
    paragraph.getText()
  );
}

function vytvoritOdkazNaZalozku(
  documentId,
  bookmarkId
) {
  return (
    'https://docs.google.com/document/d/' +
    documentId +
    '/edit#bookmark=' +
    bookmarkId
  );
}


function odstranStareZalozky(tab) {
  const properties =
    PropertiesService.getDocumentProperties();

  const storedValue = properties.getProperty(
    'MP_CAPTION_BOOKMARKS'
  );

  if (!storedValue) {
    return;
  }

  let bookmarkIds = [];

  try {
    bookmarkIds = JSON.parse(storedValue);
  } catch (error) {
    console.log(
      'Starý seznam záložek se nepodařilo načíst.'
    );
  }

  bookmarkIds.forEach(bookmarkId => {
    const bookmark = tab.getBookmark(bookmarkId);

    if (bookmark) {
      bookmark.remove();
    }
  });

  properties.deleteProperty(
    'MP_CAPTION_BOOKMARKS'
  );
}


function nahraditPrefixPopisku(
  paragraph,
  puvodniPrefix,
  novyPrefix
) {
  const text = paragraph.editAsText();

  text.deleteText(
    0,
    puvodniPrefix.length - 1
  );

  text.insertText(0, novyPrefix);
}


function odstranitCisloNadpisu(text) {
  return text.replace(
    /^\s*\d+(?:\.\d+){0,2}\s+/,
    ''
  );
}