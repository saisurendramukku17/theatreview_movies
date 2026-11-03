// The movies the audience can pick under "Now showing".
// - clips play from YouTube, in YouTube's own player. That is the only way
//   we are allowed to show them. YouTube picks their quality.
// - The free Blender films (CC BY) play as HLS streams drawn straight onto the 3D screen,
//   so they get full quality, no YouTube buttons, and glow with the room.
// YouTube titles were checked with YouTube's oEmbed endpoint on 2026-10-14.

export type CatalogMovie = {
  id: string
  film: string
  label: string
  url: string
  channel: string
  kind: 'youtube' | 'file' | 'stream'
  videoId?: string
}

export const CATALOG: CatalogMovie[] = [
  {
    id: 'OG',
    film: 'OG',
    label: 'Trailer',
    url: 'https://www.youtube.com/watch?v=_8J8LwoVH_0',
    channel: 'DVV Entertainment',
    kind: 'youtube',
    videoId: '_8J8LwoVH_0',
  },
  {
    id: 'SALAAR',
    film: 'SALAAR',
    label: 'Kateramma Scene',
    url: 'https://www.youtube.com/watch?v=NQjiHbdWQOc',
    channel: 'Netflix India',
    kind: 'youtube',
    videoId: 'NQjiHbdWQOc',
  },
  {
    id: 'JERSEY',
    film: 'JERSEY',
    label: 'Edit Video from Jersey',
    url: 'https://www.youtube.com/watch?v=Kdf3D3SkHzw',
    channel: 'GV MEDIAWORKS',
    kind: 'youtube',
    videoId: 'Kdf3D3SkHzw',
  },
  {
    id: 'DAAKU MAHARAAJ',
    film: 'Daaku Maharaaj',
    label: 'Balayya’s MASSIVE Final Fight',
    url: 'https://www.youtube.com/watch?v=kMhNNb3aFYI',
    channel: 'Netflix India',
    kind: 'youtube',
    videoId: 'kMhNNb3aFYI',
  },
  {
    id: 'KANTARA',
    film: 'Kantara',
    label: 'Varaha Roopam Scene',
    url: 'https://www.youtube.com/watch?v=m-5ck3BuT1o',
    channel: 'Hombale Films',
    kind: 'youtube',
    videoId: 'm-5ck3BuT1o',
  },
  {
    id: 'RRR',
    film: 'RRR',
    label: 'RRR Legendary Climax',
    url: 'https://www.youtube.com/watch?v=dEniTURLCdc',
    channel: 'Netflix India',
    kind: 'youtube',
    videoId: 'dEniTURLCdc',
  },
  {
    id: 'KGF',
    film: 'KGF',
    label: 'KGF Chapter 2',
    url: 'https://www.youtube.com/watch?v=fppK7UbFyZs',
    channel: 'Hombale Films',
    kind: 'youtube',
    videoId: 'fppK7UbFyZs',
  },
  {
    id: 'tears-of-steel',
    film: 'More Movies',
    label: 'Tears of Steel (Stream)',
    url: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
    channel: 'Blender Foundation, streamed by Unified Streaming',
    kind: 'stream',
  },
]

export const DEFAULT_CATALOG_MOVIE = CATALOG[0]

export function catalogUrl(movie: CatalogMovie) {
  return movie.url
}

// Groups the catalog by film, keeping the order above.
export function catalogByFilm() {
  const groups: { film: string; movies: CatalogMovie[] }[] = []

  for (const movie of CATALOG) {
    let group = groups.find((g) => g.film === movie.film)

    if (!group) {
      group = { film: movie.film, movies: [] }
      groups.push(group)
    }

    group.movies.push(movie)
  }

  return groups
}
