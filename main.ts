function generateSlug(text: string): string {
    return text
        .toString()                  // Muunna tekstiksi (varmistetaan, että input on string)
        .normalize('NFD')            // Normaali muodoksi NFC (käsitellään erikoismerkit kuten ä,ö jne.)
        .replace(/[\u0300-\u036f]/g, '') // Poistetaan aksentit
        .toLowerCase()               // Muutetaan kaikki kirjaimet pieniksi
        .trim()                      // Poistetaan ylimääräiset välilyönnit alusta ja lopusta
        .replace(/[^a-z0-9 -]/g, '') // Poistetaan kaikki erikoismerkit
        .replace(/\s+/g, '-')        // Korvataan välilyönnit yhdysmerkeillä
        .replace(/-+/g, '-');        // Korvataan useampi yhdysmerkki yhdellä
}

// Esimerkki käyttö
const text: string = process.argv[2];

// Poista kaikki välimerkit, muuta teksti slugiksi, poista välimerkit ja lisää .fi loppuun
console.log(
    `https://${
    generateSlug(
        text
    ).replace(
        /-+/g,
        ''
    )}.fi`
);

// Näytä lisäksi tekstin pituus ilman .fi loppua
console.log(
    `Tekstin pituus ilman .fi loppua: ${generateSlug(text).replace(/-+/g, '').length} merkkiä`
);