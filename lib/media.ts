export type MediaAsset = {
  src: string
  alt: string
  source: "local"
}

function local(file: string, alt: string): MediaAsset {
  return {
    src: `/images/${file}`,
    alt,
    source: "local",
  }
}

/** Brand photography from public/images — used for heroes and sections. */
const brand = {
  profile: local(
    "pressing-01.jpg",
    "Portrait de marque La Pressing Community — Community Wear"
  ),
  models: local(
    "pressing-02.jpg",
    "Trois membres La Pressing Community en polo et casquette de la communauté"
  ),
  collage: local(
    "pressing-03.jpg",
    "Collage culturel La Pressing Community — Douala, style et communauté"
  ),
  president: local(
    "pressing-04.jpg",
    "Céleste Victorien, président de La Pressing Community, avec la communauté"
  ),
  door: local(
    "pressing-05.jpg",
    "La Pressing Community : leadership et équipe réunie derrière une porte"
  ),
  street: local(
    "pressing-06.jpg",
    "La Pressing Community dans la rue — Cameroon stand up"
  ),
  formal: local(
    "pressing-07.jpg",
    "Céleste Victorien et l'équipe La Pressing Community — We rise together"
  ),
  leaders: local(
    "pressing-08.jpg",
    "La prochaine génération de leaders — jeunesse et développement, Douala"
  ),
} as const

/**
 * Every site media key maps to a brand photo.
 * Prefer matching theme when possible; otherwise cycle the eight assets.
 */
export const media = {
  community: brand.door,
  solidarity: brand.leaders,
  volunteers: brand.models,
  charity: brand.street,
  kidsSchool: brand.leaders,
  africanChildren: brand.leaders,
  landscape: brand.street,
  formation: brand.models,
  classroom: brand.leaders,
  workshop: brand.models,
  youth: brand.leaders,
  students: brand.leaders,
  mentoring: brand.profile,
  tech: brand.models,
  entrepreneur: brand.president,
  donation: brand.street,
  handshake: brand.formal,
  team: brand.models,
  writing: brand.profile,
  city: brand.street,
  sports: brand.collage,
  hands: brand.door,
  packing: brand.street,
  classroomPexels: brand.leaders,
  meeting: brand.formal,
  highFive: brand.models,
  study: brand.profile,
  volunteersPexels: brand.models,
  collaboration: brand.door,
  circle: brand.door,
  family: brand.leaders,
  teacher: brand.formal,
  books: brand.profile,
  coding: brand.models,
  music: brand.collage,
  football: brand.collage,
  crowd: brand.street,
  village: brand.street,
  portrait: brand.profile,
  listening: brand.profile,
  kidsPlay: brand.leaders,
  notes: brand.models,
  collage: brand.collage,
  formal: brand.formal,
  president: brand.president,
  leaders: brand.leaders,
} as const

export type MediaKey = keyof typeof media

export const mediaByIndex: MediaKey[] = [
  "community",
  "solidarity",
  "formation",
  "students",
  "youth",
  "workshop",
  "volunteers",
  "crowd",
]

export function getMedia(key?: MediaKey, seed = 0): MediaAsset {
  if (key) return media[key]
  return media[mediaByIndex[seed % mediaByIndex.length]]
}
