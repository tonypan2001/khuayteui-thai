import type { MenuItem } from './menu'

export type SiteContent = {
  site: {
    name: string
    metadata: {
      title: string
      description: string
    }
  }
  nav: {
    links: { id: string; label: string }[]
  }
  hero: {
    headline: string
    subheadline: string
    topLeft: { title: string; description: string }
    bottomLeft: { title: string; description: string }
    scrollLabel: string
  }
  menu: {
    header: string
    subheader: string
    items: MenuItem[]
  }
}
