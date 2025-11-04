import type { MenuItem } from "@/types/menu";

export const content = {
  site: {
    name: "KhuayTeiThai",
    metadata: {
      title: "KhuayTeiThai",
      description: "Hand‑pulled noodles, fresh ingredients, bold flavors.",
    },
  },
  nav: {
    links: [{ id: "menu", label: "Menu" }],
  },
  hero: {
    headline: "KhuayTeiThai",
    subheadline: "Hand‑Pulled Noodles, Made Fresh Daily",
    topLeft: {
      title: "Handmade Noodles",
      description:
        "Pulled-to-order with heritage techniques and fresh, local flour.",
    },
    bottomLeft: {
      title: "Open Daily",
      description: "11:00–22:00 · Dine‑in · Takeaway · Order online",
    },
    scrollLabel: "SCROLL",
  },
  menu: {
    items: [
      {
        id: "boat",
        title: "Boat Noodle",
        desc: "Rich, spiced broth with tender beef slices and herbs.",
        img: "/imgs/gem_boat_noodle.png",
        badges: [
          { label: "Broth", value: "Beef marrow • dark soy" },
          { label: "Heat", value: "Medium" },
          { label: "Toppings", value: "Beef • basil • crackling" },
        ],
      },
      {
        id: "clear",
        title: "Clear Soup Noodle",
        desc: "Light and aromatic broth, crisp veg and delicate noodles.",
        img: "/imgs/gem_clear_soup_noodle.png",
        badges: [
          { label: "Broth", value: "Chicken • white pepper" },
          { label: "Heat", value: "Mild" },
          { label: "Toppings", value: "Pork • scallion • garlic" },
        ],
      },
      {
        id: "tomyum",
        title: "Tom Yum Noodle",
        desc: "Zesty lemongrass heat with creamy depth and crunch.",
        img: "/imgs/gem_tomyum_noodle.png",
        badges: [
          { label: "Broth", value: "Tom Yum • lemongrass" },
          { label: "Heat", value: "Hot" },
          { label: "Toppings", value: "Shrimp • squid • lime" },
        ],
      },
    ] as MenuItem[],
  },
} as const;
 
