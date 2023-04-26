export const Municipality = {
  KØBENHAVN: 'København',
  FREDERIKSBERG: 'Frederiksberg',
  BALLERUP: 'Ballerup',
  BRØNDBY: 'Brøndby',
  DRAGØR: 'Dragør',
  GENTOFTE: 'Gentofte',
  GLADSAXE: 'Gladsaxe',
  GLOSTRUP: 'Glostrup',
  HERLEV: 'Herlev',
  ALBERTSLUND: 'Albertslund',
  HVIDOVRE: 'Hvidovre',
  RØDOVRE: 'Rødovre',
  ISHØJ: 'Ishøj',
  TÅRNBY: 'Tårnby',
  VALLENSBÆK: 'Vallensbæk',
  FURESØ: 'Furesø',
  ALLERØD: 'Allerød',
  FREDENSBORG: 'Fredensborg',
  HELSINGØR: 'Helsingør',
  HILLERØD: 'Hillerød',
  HØRSHOLM: 'Hørsholm',
  RUDERSDAL: 'Rudersdal',
  EGEDAL: 'Egedal',
  FREDERIKSSUND: 'Frederikssund',
  GREVE: 'Greve',
  KØGE: 'Køge',
  HALSNÆS: 'Halsnæs',
  ROSKILDE: 'Roskilde',
  SOLRØD: 'Solrød',
  GRIBSKOV: 'Gribskov',
  ODSHERRED: 'Odsherred',
  HOLBÆK: 'Holbæk',
  FAXE: 'Faxe',
  KALUNDBORG: 'Kalundborg',
  RINGSTED: 'Ringsted',
  SLAGELSE: 'Slagelse',
  STEVNS: 'Stevns',
  SORØ: 'Sorø',
  LEJRE: 'Lejre',
  LOLLAND: 'Lolland',
  NÆSTVED: 'Næstved',
  GULDBORGSUND: 'Guldborgsund',
  VORDINGBORG: 'Vordingborg',
  BORNHOLM: 'Bornholm',
  MIDDELFART: 'Middelfart',
  ASSENS: 'Assens',
  KERTEMINDE: 'Kerteminde',
  NYBORG: 'Nyborg',
  ODENSE: 'Odense',
  SVENDBORG: 'Svendborg',
  NORDFYNS: 'Nordfyns',
  LANGELAND: 'Langeland',
  ÆRØ: 'Ærø',
  HADERSLEV: 'Haderslev',
  BILLUND: 'Billund',
  SØNDERBORG: 'Sønderborg',
  TØNDER: 'Tønder',
  ESBJERG: 'Esbjerg',
  FANØ: 'Fanø',
  VARDE: 'Varde',
  VEJEN: 'Vejen',
  AABENRAA: 'Aabenraa',
  FREDERICIA: 'Fredericia',
  HORSENS: 'Horsens',
  KOLDING: 'Kolding',
  VEJLE: 'Vejle',
  HERNING: 'Herning',
  HOLSTEBRO: 'Holstebro',
  LEMVIG: 'Lemvig',
  STRUER: 'Struer',
  SYDDJURS: 'Syddjurs',
  NORDDJURS: 'Norddjurs',
  FAVRSKOV: 'Favrskov',
  ODDER: 'Odder',
  RANDERS: 'Randers',
  SILKEBORG: 'Silkeborg',
  SAMSØ: 'Samsø',
  SKANDERBORG: 'Skanderborg',
  AARHUS: 'Aarhus',
  HEDENSTED: 'Hedensted',
  MORSØ: 'Morsø',
  SKIVE: 'Skive',
  THISTED: 'Thisted',
  VIBORG: 'Viborg',
  BRØNDERSLEV: 'Brønderslev',
  FREDERIKSHAVN: 'Frederikshavn',
  VESTHIMMERLAND: 'Vesthimmerland',
  LÆSØ: 'Læsø',
  REBILD: 'Rebild',
  MARIAGERFJORD: 'Mariagerfjord',
  JAMMERBUGT: 'Jammerbugt',
  AALBORG: 'Aalborg',
  HJØRRING: 'Hjørring',
  'HØJE-TAASTRUP': 'Høje-Taastrup',
  'LYNGBY-TAARBÆK': 'Lyngby-Taarbæk',
  'FAABORG-MIDTFYN': 'Faaborg-Midtfyn',
  'IKAST-BRANDE': 'Ikast-Brande',
  'RINGKØBING-SKJERN': 'Ringkøbing-Skjern'
} as const

export type MunicipalityType = (typeof Municipality)[keyof typeof Municipality]

export const municipalityTaxes = {
  [Municipality.KØBENHAVN]: { tax: 23.7, churchTax: 0.8 },
  [Municipality.FREDERIKSBERG]: { tax: 23.47, churchTax: 0.5 },
  [Municipality.BALLERUP]: { tax: 25.5, churchTax: 0.72 },
  [Municipality.BRØNDBY]: { tax: 24.3, churchTax: 0.8 },
  [Municipality.DRAGØR]: { tax: 24.8, churchTax: 0.61 },
  [Municipality.GENTOFTE]: { tax: 24.17, churchTax: 0.4 },
  [Municipality.GLADSAXE]: { tax: 23.6, churchTax: 0.75 },
  [Municipality.GLOSTRUP]: { tax: 24.6, churchTax: 0.8 },
  [Municipality.HERLEV]: { tax: 23.7, churchTax: 0.75 },
  [Municipality.ALBERTSLUND]: { tax: 25.6, churchTax: 0.8 },
  [Municipality.HVIDOVRE]: { tax: 25.4, churchTax: 0.72 },
  [Municipality.RØDOVRE]: { tax: 25.7, churchTax: 0.72 },
  [Municipality.ISHØJ]: { tax: 25, churchTax: 0.9 },
  [Municipality.TÅRNBY]: { tax: 23.1, churchTax: 0.61 },
  [Municipality.VALLENSBÆK]: { tax: 25.6, churchTax: 0.8 },
  [Municipality.FURESØ]: { tax: 24.88, churchTax: 0.65 },
  [Municipality.ALLERØD]: { tax: 25.3, churchTax: 0.58 },
  [Municipality.FREDENSBORG]: { tax: 25.3, churchTax: 0.6 },
  [Municipality.HELSINGØR]: { tax: 25.52, churchTax: 0.63 },
  [Municipality.HILLERØD]: { tax: 25.6, churchTax: 0.69 },
  [Municipality.HØRSHOLM]: { tax: 23.7, churchTax: 0.62 },
  [Municipality.RUDERSDAL]: { tax: 23.21, churchTax: 0.57 },
  [Municipality.EGEDAL]: { tax: 25.7, churchTax: 0.76 },
  [Municipality.FREDERIKSSUND]: { tax: 25.8, churchTax: 0.96 },
  [Municipality.GREVE]: { tax: 24.42, churchTax: 0.73 },
  [Municipality.KØGE]: { tax: 25.26, churchTax: 0.87 },
  [Municipality.HALSNÆS]: { tax: 25.7, churchTax: 0.85 },
  [Municipality.ROSKILDE]: { tax: 25.2, churchTax: 0.84 },
  [Municipality.SOLRØD]: { tax: 24.9, churchTax: 0.89 },
  [Municipality.GRIBSKOV]: { tax: 25.4, churchTax: 0.85 },
  [Municipality.ODSHERRED]: { tax: 26.3, churchTax: 0.98 },
  [Municipality.HOLBÆK]: { tax: 25.3, churchTax: 0.96 },
  [Municipality.FAXE]: { tax: 25.8, churchTax: 1.08 },
  [Municipality.KALUNDBORG]: { tax: 24.2, churchTax: 1.01 },
  [Municipality.RINGSTED]: { tax: 26.1, churchTax: 0.95 },
  [Municipality.SLAGELSE]: { tax: 25.6, churchTax: 0.96 },
  [Municipality.STEVNS]: { tax: 26, churchTax: 1.1 },
  [Municipality.SORØ]: { tax: 26.3, churchTax: 0.95 },
  [Municipality.LEJRE]: { tax: 25.31, churchTax: 1.05 },
  [Municipality.LOLLAND]: { tax: 26.3, churchTax: 1.23 },
  [Municipality.NÆSTVED]: { tax: 25, churchTax: 0.98 },
  [Municipality.GULDBORGSUND]: { tax: 25.8, churchTax: 1.16 },
  [Municipality.VORDINGBORG]: { tax: 25.7, churchTax: 1.02 },
  [Municipality.BORNHOLM]: { tax: 26.2, churchTax: 0.93 },
  [Municipality.MIDDELFART]: { tax: 25.8, churchTax: 0.9 },
  [Municipality.ASSENS]: { tax: 26.1, churchTax: 0.98 },
  [Municipality.KERTEMINDE]: { tax: 26.1, churchTax: 0.98 },
  [Municipality.NYBORG]: { tax: 26.3, churchTax: 1 },
  [Municipality.ODENSE]: { tax: 25.5, churchTax: 0.68 },
  [Municipality.SVENDBORG]: { tax: 26.3, churchTax: 1.02 },
  [Municipality.NORDFYNS]: { tax: 26, churchTax: 1.04 },
  [Municipality.LANGELAND]: { tax: 26.3, churchTax: 1.14 },
  [Municipality.ÆRØ]: { tax: 26.1, churchTax: 1.07 },
  [Municipality.HADERSLEV]: { tax: 26.3, churchTax: 0.95 },
  [Municipality.BILLUND]: { tax: 24, churchTax: 0.89 },
  [Municipality.SØNDERBORG]: { tax: 25.7, churchTax: 0.91 },
  [Municipality.TØNDER]: { tax: 25.3, churchTax: 1.16 },
  [Municipality.ESBJERG]: { tax: 25.8, churchTax: 0.81 },
  [Municipality.FANØ]: { tax: 25.66, churchTax: 1.14 },
  [Municipality.VARDE]: { tax: 25.1, churchTax: 0.95 },
  [Municipality.VEJEN]: { tax: 25.33, churchTax: 1.06 },
  [Municipality.AABENRAA]: { tax: 25.6, churchTax: 0.95 },
  [Municipality.FREDERICIA]: { tax: 25.5, churchTax: 0.88 },
  [Municipality.HORSENS]: { tax: 25.39, churchTax: 0.79 },
  [Municipality.KOLDING]: { tax: 25.5, churchTax: 0.92 },
  [Municipality.VEJLE]: { tax: 23.4, churchTax: 0.89 },
  [Municipality.HERNING]: { tax: 24.9, churchTax: 0.99 },
  [Municipality.HOLSTEBRO]: { tax: 25.5, churchTax: 1.08 },
  [Municipality.LEMVIG]: { tax: 25.46, churchTax: 1.27 },
  [Municipality.STRUER]: { tax: 25.3, churchTax: 1.2 },
  [Municipality.SYDDJURS]: { tax: 25.9, churchTax: 1 },
  [Municipality.NORDDJURS]: { tax: 26, churchTax: 1 },
  [Municipality.FAVRSKOV]: { tax: 25.7, churchTax: 0.96 },
  [Municipality.ODDER]: { tax: 25.1, churchTax: 0.95 },
  [Municipality.RANDERS]: { tax: 25.8, churchTax: 0.89 },
  [Municipality.SILKEBORG]: { tax: 25.5, churchTax: 0.95 },
  [Municipality.SAMSØ]: { tax: 25.9, churchTax: 1.22 },
  [Municipality.SKANDERBORG]: { tax: 26, churchTax: 0.86 },
  [Municipality.AARHUS]: { tax: 24.52, churchTax: 0.74 },
  [Municipality.HEDENSTED]: { tax: 25.52, churchTax: 0.98 },
  [Municipality.MORSØ]: { tax: 25.8, churchTax: 1.2 },
  [Municipality.SKIVE]: { tax: 25.5, churchTax: 1.09 },
  [Municipality.THISTED]: { tax: 25.5, churchTax: 1.27 },
  [Municipality.VIBORG]: { tax: 25.5, churchTax: 0.93 },
  [Municipality.BRØNDERSLEV]: { tax: 26.3, churchTax: 1.08 },
  [Municipality.FREDERIKSHAVN]: { tax: 26.2, churchTax: 1.03 },
  [Municipality.VESTHIMMERLAND]: { tax: 26.3, churchTax: 1.18 },
  [Municipality.LÆSØ]: { tax: 26.3, churchTax: 1.3 },
  [Municipality.REBILD]: { tax: 25.33, churchTax: 1.2 },
  [Municipality.MARIAGERFJORD]: { tax: 25.9, churchTax: 1.15 },
  [Municipality.JAMMERBUGT]: { tax: 25.7, churchTax: 1.2 },
  [Municipality.AALBORG]: { tax: 25.4, churchTax: 0.98 },
  [Municipality.HJØRRING]: { tax: 26.21, churchTax: 1.19 },
  [Municipality['HØJE-TAASTRUP']]: { tax: 24.6, churchTax: 0.8 },
  [Municipality['LYNGBY-TAARBÆK']]: { tax: 24.38, churchTax: 0.62 },
  [Municipality['FAABORG-MIDTFYN']]: { tax: 26.1, churchTax: 1.05 },
  [Municipality['IKAST-BRANDE']]: { tax: 25.1, churchTax: 0.97 },
  [Municipality['RINGKØBING-SKJERN']]: { tax: 25, churchTax: 1.05 }
}
