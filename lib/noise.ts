// Simple pseudo-random and value noise helpers for procedural building heights

export function seededRandom(seed: number) {
  let s = seed % 2147483647
  if (s <= 0) s += 2147483646
  return () => (s = (s * 16807) % 2147483647) / 2147483647
}

export function valueNoise2D(x: number, y: number, seed = 1) {
  // Very lightweight value noise by hashing grid corners
  const floorX = Math.floor(x)
  const floorY = Math.floor(y)
  const tx = x - floorX
  const ty = y - floorY

  const rnd = (ix: number, iy: number) => {
    const s = Math.sin(ix * 127.1 + iy * 311.7 + seed * 13.13) * 43758.5453
    return s - Math.floor(s)
  }

  const v00 = rnd(floorX, floorY)
  const v10 = rnd(floorX + 1, floorY)
  const v01 = rnd(floorX, floorY + 1)
  const v11 = rnd(floorX + 1, floorY + 1)

  const fade = (t: number) => t * t * (3 - 2 * t)
  const u = fade(tx)
  const v = fade(ty)

  const ix0 = v00 * (1 - u) + v10 * u
  const ix1 = v01 * (1 - u) + v11 * u
  return ix0 * (1 - v) + ix1 * v
}

