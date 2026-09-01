export type MediaAsset = {
  src: string
  alt: string
  source: "unsplash" | "pexels"
}

function unsplash(id: string, alt: string): MediaAsset {
  return {
    src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=80`,
    alt,
    source: "unsplash",
  }
}

function pexels(id: number, alt: string): MediaAsset {
  return {
    src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1800`,
    alt,
    source: "pexels",
  }
}

/** Remote placeholders. Swap `src` for `/images/...` when local photos are ready. */
export const media = {
  community: unsplash(
    "photo-1531206715517-5c0ba140b2b8",
    "Des personnes réunies, les mains levées, lors d'un rassemblement communautaire"
  ),
  solidarity: unsplash(
    "photo-1488521787991-ed7bbaae773c",
    "Des enfants se tenant par la main"
  ),
  volunteers: unsplash(
    "photo-1593113598332-cd288d649433",
    "Des bénévoles qui trient des dons alimentaires"
  ),
  charity: unsplash(
    "photo-1469571486292-0ba58a3f068b",
    "Un groupe de bénévoles souriant après une action solidaire"
  ),
  kidsSchool: unsplash(
    "photo-1542810634-71277d952f32",
    "Des enfants concentrés en classe"
  ),
  africanChildren: unsplash(
    "photo-1509099836639-18ba1795216d",
    "Des enfants africains souriant ensemble"
  ),
  landscape: unsplash(
    "photo-1547471080-7cc2caa01a7e",
    "Paysage d'Afrique, acacias au coucher du soleil"
  ),
  formation: unsplash(
    "photo-1522202176988-66273c2fd55f",
    "Un groupe de jeunes qui travaillent ensemble autour d'un ordinateur"
  ),
  classroom: unsplash(
    "photo-1503676260728-1c00da094a0b",
    "Une salle de classe, des élèves attentifs"
  ),
  workshop: unsplash(
    "photo-1531482615713-2afd69097998",
    "Un atelier de formation autour d'ordinateurs portables"
  ),
  youth: unsplash(
    "photo-1529156069898-49953e39b3ac",
    "Un groupe de jeunes complices, assis côte à côte"
  ),
  students: unsplash(
    "photo-1523240795612-9a054b0db644",
    "Des étudiants réunis autour d'une table de travail"
  ),
  mentoring: unsplash(
    "photo-1573496359142-b8d87734a5a2",
    "Une professionnelle qui écoute et conseille"
  ),
  tech: unsplash(
    "photo-1516321318423-f06f85e504b3",
    "Deux personnes qui collaborent devant un écran"
  ),
  entrepreneur: unsplash(
    "photo-1556761175-5973dc0f32e7",
    "Une équipe en discussion autour d'un projet"
  ),
  donation: unsplash(
    "photo-1532629345422-7515f3d16bb6",
    "Des mains qui tiennent un cœur en papier, symbole de don"
  ),
  handshake: unsplash(
    "photo-1521791136064-7986c2920216",
    "Une poignée de main professionnelle"
  ),
  team: unsplash(
    "photo-1552664730-d307ca884978",
    "Une équipe en atelier, notes au tableau"
  ),
  writing: unsplash(
    "photo-1454165804606-c3d57bc86b40",
    "Une personne qui planifie un projet sur un carnet"
  ),
  city: unsplash(
    "photo-1477959858617-67f85cf4f1df",
    "Une ville éclairée au crépuscule"
  ),
  sports: unsplash(
    "photo-1461896836934-ffe607ba6851",
    "Des jeunes qui courent ensemble sur une piste"
  ),
  hands: unsplash(
    "photo-1582213782179-e0d53f98f2ca",
    "Des mains jointes, symbole d'entraide"
  ),
  packing: pexels(
    6646918,
    "Des bénévoles qui préparent des colis de solidarité"
  ),
  classroomPexels: pexels(
    8613089,
    "Des enfants qui apprennent en classe, crayons en main"
  ),
  meeting: pexels(
    3184418,
    "Une équipe réunie autour d'une table de travail"
  ),
  highFive: pexels(
    3184465,
    "Deux personnes qui se tapent dans la main après un succès"
  ),
  study: pexels(
    4144923,
    "Une jeune femme qui étudie devant un ordinateur"
  ),
  volunteersPexels: pexels(
    6646917,
    "Des bénévoles qui préparent une distribution"
  ),
  collaboration: pexels(
    3184291,
    "Des collègues qui collaborent autour d'un projet"
  ),
  circle: pexels(
    3184338,
    "Un cercle de personnes qui travaillent ensemble"
  ),
  family: unsplash(
    "photo-1609220136736-443140cffec6",
    "Une famille réunie, symbole de foyer et de solidarité"
  ),
  teacher: unsplash(
    "photo-1588072432836-e10032774318",
    "Une enseignante devant un tableau, face à ses élèves"
  ),
  books: unsplash(
    "photo-14565130808-af0986bc3505",
    "Des livres ouverts, travail et préparation d'un examen"
  ),
  coding: unsplash(
    "photo-1517694712202-14dd9538aa97",
    "Des mains qui tapent du code sur un ordinateur"
  ),
  music: unsplash(
    "photo-1511671782779-c97d3d27a1d4",
    "Un micro sur scène, image des talents artistiques"
  ),
  football: unsplash(
    "photo-1574629810360-7efbbe195818",
    "Des jeunes qui jouent au football"
  ),
  crowd: unsplash(
    "photo-1511632765486-a01980e01a18",
    "Une foule de personnes qui se rassemblent"
  ),
  village: unsplash(
    "photo-1523805009345-7448845a9e53",
    "Un village africain sous un ciel clair"
  ),
  portrait: unsplash(
    "photo-1531123897727-8f129e1688ce",
    "Portrait d'une femme africaine, regard confiant"
  ),
  listening: unsplash(
    "photo-1573497019940-1c28c88b4f3e",
    "Deux personnes en conversation, écoute et conseil"
  ),
  kidsPlay: pexels(
    8613313,
    "Des enfants qui jouent et apprennent ensemble"
  ),
  notes: pexels(
    3183197,
    "Une équipe qui prend des notes pendant une réunion"
  ),
} as const

export type MediaKey = keyof typeof media

export const mediaByIndex: MediaKey[] = [
  "solidarity",
  "community",
  "formation",
  "students",
  "youth",
  "workshop",
  "volunteers",
  "landscape",
]

export function getMedia(key?: MediaKey, seed = 0): MediaAsset {
  if (key) return media[key]
  return media[mediaByIndex[seed % mediaByIndex.length]]
}
