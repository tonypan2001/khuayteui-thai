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
      { id: "about", label: "About" },
      { id: "menu", label: "Menu" },
      { id: "how-we-work", label: "How we work" },
      { id: "contact", label: "Contact" },
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
        detail:
          "Pulled to order from a high‑protein flour blend that rests overnight for gluten development. We vary thickness by dish — thinner for clear soups, thicker for rich broths — so every bowl lands with the ideal chew and sauce cling.",
      },
      {
        src: "/imgs/ingredients/soup.png",
        alt: "Clear soup broth",
        title: "Slow‑Simmered Broth",
        detail:
          "Bones, roots and toasted aromatics simmer gently for 6–8 hours. We skim patiently for clarity and season in stages, building depth without MSG so the final broth is clean, balanced and naturally umami‑rich.",
      },
      {
        src: "/imgs/ingredients/vegies.png",
        alt: "Fresh vegetables",
        title: "Crisp Vegetables",
        detail:
          "Greens and herbs are washed, trimmed and kept cold to preserve snap. We blanch or wok‑toss to order for bright color and crunch, using seasonal produce from trusted local suppliers.",
      },
      {
        src: "/imgs/ingredients/crispy-pork.png",
        alt: "Crispy pork",
        title: "Crispy Pork",
        detail:
          "Marinated pork is slow‑cooked for tenderness, then roasted until the skin bubbles into glassy crackling. Right before serving we flash‑fry for extra crunch, yielding savory shards that enrich broths and toppings.",
      },
      {
        src: "/imgs/ingredients/meat-ball.png",
        alt: "Meat balls",
        title: "Tender Meatballs",
        detail:
          "Hand‑rolled with a light rice‑flour binder for a bouncy, tender bite. Gently poached to keep them juicy, then warmed in the broth so they absorb flavor without turning tough.",
      },
    ],
  },
  about: {
    header: "About Us",
    paragraphs: [
      "We started as a tiny counter serving a handful of bowls a day. What we lacked in space we made up for in patience — learning to coax flavor from simple ingredients and to pull noodles that feel alive in the bowl.",
      "Today our kitchens still move to the same rhythm: low flames, sharp knives, and hands that know when a dough is ready. We grow by teaching those rhythms to new teams and by sourcing from partners who care as much as we do.",
      "Every franchise cooks with our shared standards, then adds a local accent. That’s how we keep the soul of the original shop while letting each neighborhood taste like itself.",
    ],
    stats: [
      { id: "franchise", label: "Franchises", value: 24, suffix: "+" },
      { id: "bowls", label: "Bowls Served", value: 1800000, suffix: "+" },
      { id: "years", label: "Years of Craft", value: 12, suffix: "+" },
    ],
  },
  contact: {
    header: "Contact Us",
    addressLines: [
      "123 Flavor Street",
      "Phaya Thai, Bangkok 10400",
      "Thailand",
    ],
    phone: "+66 2 000 0000",
    email: "hello@khuayteuithai.example",
    hours: [
      { label: "Mon–Fri", value: "11:00 – 22:00" },
      { label: "Sat–Sun", value: "10:00 – 22:30" },
    ],
    mapEmbedUrl: "https://www.google.com/maps?q=13.7563,100.5018&hl=en&z=14&output=embed",
  },
} as const;
