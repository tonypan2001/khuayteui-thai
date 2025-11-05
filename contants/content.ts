import type { MenuItem } from "@/types/menu";

export const content = {
  site: {
    name: "Khuay Teui Thai",
    metadata: {
      title: "Khuay Teui Thai",
      description: "Hand‑pulled noodles, fresh ingredients, bold flavors.",
    },
  },
  nav: {
    links: [
      { id: "hero", label: "Home" },
      { id: "menu", label: "Menu" },
      { id: "how-we-work", label: "How we work" },
    ],
  },
  hero: {
    headline: "Khuay Teui Thai",
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
    header: "Recommend Menu",
    subheader: "Our top picks, crafted fresh daily.",
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
  howWeWork: {
    header: "How We Work",
    detail:
      "We prep fresh ingredients daily, simmer broths low and slow, and hand‑pull noodles to order. Every bowl is finished à la minute for peak texture and flavor.",
    imageSrc: "/imgs/kitchen.png",
    imageAlt: "Open kitchen with steaming pots and utensils",
    ingredients: [
      {
        src: "/imgs/ingredients/noodles.png",
        alt: "Fresh noodles",
        title: "Hand‑Pulled Noodles",
        detail: "Pulled to order for a springy, silky bite and perfect sauce cling.",
      },
      {
        src: "/imgs/ingredients/soup.png",
        alt: "Clear soup broth",
        title: "Slow‑Simmered Broth",
        detail: "Clean, layered flavors from hours of gentle simmering and aromatics.",
      },
      {
        src: "/imgs/ingredients/vegies.png",
        alt: "Fresh vegetables",
        title: "Crisp Vegetables",
        detail: "Prepped daily for color and crunch that balance each bowl.",
      },
      {
        src: "/imgs/ingredients/crispy-pork.png",
        alt: "Crispy pork",
        title: "Crispy Pork",
        detail: "Golden crackling for savory depth and satisfying texture.",
      },
      {
        src: "/imgs/ingredients/meat-ball.png",
        alt: "Meat balls",
        title: "Tender Meatballs",
        detail: "Lightly seasoned, gently cooked for a bouncy, tender bite.",
      },
    ],
  },
} as const;
