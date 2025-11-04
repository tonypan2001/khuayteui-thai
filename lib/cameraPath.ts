export type Shot = {
  pos: [number, number, number]
  target: [number, number, number]
}

export const shots: Shot[] = [
  { pos: [0, 60, 90], target: [0, 0, 0] }, // Hero
  { pos: [10, 12, 30], target: [12, 0, 0] }, // Transport
  { pos: [-8, 40, 18], target: [0, 20, 0] }, // Business
  { pos: [6, 16, -12], target: [0, 6, 0] }, // Residential
  { pos: [0, 80, 120], target: [0, 0, 0] }, // Outro
]

export const sectionIds = [
  'hero',
  'transport',
  'business',
  'residential',
  'outro',
] as const

export type SectionId = (typeof sectionIds)[number]

