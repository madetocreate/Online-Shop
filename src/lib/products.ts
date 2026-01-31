export interface Product {
  id: string;
  slug: string;
  category: "sunglasses" | "bags";
  price: number;
  isNew: boolean;
  image: string;
  name: { de: string; en: string; es: string };
  description: { de: string; en: string; es: string };
  details: { de: string[]; en: string[]; es: string[] };
}

export const products: Product[] = [
  {
    id: "1",
    slug: "aviator-gold",
    category: "sunglasses",
    price: 389,
    isNew: true,
    image: "/images/products/sunglasses-1.png",
    name: {
      de: "Aviator Gold",
      en: "Aviator Gold",
      es: "Aviator Gold",
    },
    description: {
      de: "Klassische Pilotenbrille mit 24-Karat vergoldetem Titanrahmen. Handgefertigt in Italien mit polarisierten Gläsern der höchsten Kategorie.",
      en: "Classic aviator with 24-karat gold-plated titanium frame. Handcrafted in Italy with highest-category polarized lenses.",
      es: "Gafas de aviador clásicas con montura de titanio chapada en oro de 24 quilates. Hechas a mano en Italia con lentes polarizadas de la más alta categoría.",
    },
    details: {
      de: ["Titan-Rahmen, 24K vergoldet", "Polarisierte Gläser, UV400", "Handgefertigt in Mailand", "Inkl. Lederhülle"],
      en: ["Titanium frame, 24K gold-plated", "Polarized lenses, UV400", "Handcrafted in Milan", "Incl. leather case"],
      es: ["Montura de titanio, chapada en oro 24K", "Lentes polarizadas, UV400", "Hecha a mano en Milán", "Incluye funda de cuero"],
    },
  },
  {
    id: "2",
    slug: "cat-eye-noir",
    category: "sunglasses",
    price: 445,
    isNew: false,
    image: "/images/products/sunglasses-2.png",
    name: {
      de: "Cat-Eye Noir",
      en: "Cat-Eye Noir",
      es: "Cat-Eye Noir",
    },
    description: {
      de: "Elegante Cat-Eye-Silhouette aus handpoliertem Acetat. Die getönten Gläser bieten perfekten Schutz bei maximalem Stil.",
      en: "Elegant cat-eye silhouette in hand-polished acetate. Tinted lenses offer perfect protection with maximum style.",
      es: "Elegante silueta cat-eye en acetato pulido a mano. Las lentes tintadas ofrecen protección perfecta con máximo estilo.",
    },
    details: {
      de: ["Handpoliertes Acetat", "Getönte Gläser, UV400", "Gefertigt in Frankreich", "Inkl. Seidenbeutel"],
      en: ["Hand-polished acetate", "Tinted lenses, UV400", "Made in France", "Incl. silk pouch"],
      es: ["Acetato pulido a mano", "Lentes tintadas, UV400", "Fabricado en Francia", "Incluye bolsa de seda"],
    },
  },
  {
    id: "3",
    slug: "round-tortoise",
    category: "sunglasses",
    price: 520,
    isNew: true,
    image: "/images/products/sunglasses-3.png",
    name: {
      de: "Round Tortoise",
      en: "Round Tortoise",
      es: "Round Tortoise",
    },
    description: {
      de: "Ikonische runde Form in Schildpatt-Optik. Jeder Rahmen ist ein Unikat — handgefertigt aus mehrschichtigem italienischem Acetat.",
      en: "Iconic round shape in tortoiseshell. Each frame is unique — handcrafted from multi-layer Italian acetate.",
      es: "Icónica forma redonda en carey. Cada montura es única — hecha a mano con acetato italiano multicapa.",
    },
    details: {
      de: ["Mehrschichtiges Acetat", "Mineralgläser", "Handgefertigt in Florenz", "Inkl. Hartschalenbox"],
      en: ["Multi-layer acetate", "Mineral lenses", "Handcrafted in Florence", "Incl. hard case"],
      es: ["Acetato multicapa", "Lentes minerales", "Hecho a mano en Florencia", "Incluye estuche rígido"],
    },
  },
  {
    id: "4",
    slug: "shield-silver",
    category: "sunglasses",
    price: 675,
    isNew: false,
    image: "/images/products/sunglasses-4.png",
    name: {
      de: "Shield Silver",
      en: "Shield Silver",
      es: "Shield Silver",
    },
    description: {
      de: "Futuristisches Shield-Design aus gebürstetem Titan. Die verspiegelten Gläser vereinen Performance und Luxus.",
      en: "Futuristic shield design in brushed titanium. Mirrored lenses combine performance and luxury.",
      es: "Diseño futurista tipo shield en titanio cepillado. Las lentes espejadas combinan rendimiento y lujo.",
    },
    details: {
      de: ["Gebürstetes Titan", "Verspiegelte Gläser", "Japanische Fertigung", "Inkl. Sportband"],
      en: ["Brushed titanium", "Mirrored lenses", "Japanese manufacturing", "Incl. sport strap"],
      es: ["Titanio cepillado", "Lentes espejadas", "Fabricación japonesa", "Incluye correa deportiva"],
    },
  },
  {
    id: "5",
    slug: "tote-camel",
    category: "bags",
    price: 1290,
    isNew: true,
    image: "/images/products/bag-1.png",
    name: {
      de: "Tote Camel",
      en: "Tote Camel",
      es: "Tote Camel",
    },
    description: {
      de: "Zeitloser Shopper aus vollnarbigem Kalbsleder in warmem Camel. Handgenäht mit gewachstem Leinengarn — ein Stück für die Ewigkeit.",
      en: "Timeless shopper in full-grain calfskin in warm camel. Hand-sewn with waxed linen thread — a piece for eternity.",
      es: "Shopper atemporal en piel de becerro de grano completo en color camel cálido. Cosido a mano con hilo de lino encerado — una pieza para la eternidad.",
    },
    details: {
      de: ["Vollnarbiges Kalbsleder", "Handgenäht", "Gefertigt in der Toskana", "Innenfutter aus Wildleder"],
      en: ["Full-grain calfskin", "Hand-sewn", "Made in Tuscany", "Suede lining"],
      es: ["Piel de becerro de grano completo", "Cosido a mano", "Fabricado en la Toscana", "Forro de ante"],
    },
  },
  {
    id: "6",
    slug: "clutch-midnight",
    category: "bags",
    price: 890,
    isNew: false,
    image: "/images/products/bag-2.png",
    name: {
      de: "Clutch Midnight",
      en: "Clutch Midnight",
      es: "Clutch Midnight",
    },
    description: {
      de: "Schlanke Abendtasche aus tiefblauem Leder mit goldfarbenen Details. Der magnetische Verschluss und das Seidenfutter machen sie zum perfekten Begleiter.",
      en: "Sleek evening bag in deep blue leather with gold-tone details. Magnetic closure and silk lining make it the perfect companion.",
      es: "Bolso de noche elegante en cuero azul profundo con detalles dorados. El cierre magnético y el forro de seda lo convierten en el compañero perfecto.",
    },
    details: {
      de: ["Nappaleder", "Goldfarbene Beschläge", "Seidenfutter", "Abnehmbare Kette"],
      en: ["Nappa leather", "Gold-tone hardware", "Silk lining", "Detachable chain"],
      es: ["Cuero napa", "Herrajes dorados", "Forro de seda", "Cadena desmontable"],
    },
  },
  {
    id: "7",
    slug: "crossbody-olive",
    category: "bags",
    price: 980,
    isNew: true,
    image: "/images/products/bag-3.png",
    name: {
      de: "Crossbody Olive",
      en: "Crossbody Olive",
      es: "Crossbody Olive",
    },
    description: {
      de: "Vielseitige Umhängetasche in edlem Olivgrün. Der verstellbare Riemen und die durchdachte Innenaufteilung machen sie zum idealen Alltagsbegleiter.",
      en: "Versatile crossbody in refined olive green. Adjustable strap and thoughtful interior make it the ideal everyday companion.",
      es: "Bolso bandolera versátil en refinado verde oliva. Correa ajustable e interior bien pensado lo convierten en el compañero ideal para el día a día.",
    },
    details: {
      de: ["Genarbtes Rindsleder", "Verstellbarer Riemen", "3 Innenfächer", "Gefertigt in Spanien"],
      en: ["Grained cowhide", "Adjustable strap", "3 inner compartments", "Made in Spain"],
      es: ["Cuero de vaca grabado", "Correa ajustable", "3 compartimentos interiores", "Fabricado en España"],
    },
  },
  {
    id: "8",
    slug: "weekender-cognac",
    category: "bags",
    price: 1690,
    isNew: false,
    image: "/images/products/bag-4.png",
    name: {
      de: "Weekender Cognac",
      en: "Weekender Cognac",
      es: "Weekender Cognac",
    },
    description: {
      de: "Großzügige Reisetasche aus pflanzlich gegerbtem Leder in sattem Cognac. Mit Schuhfach, Laptopfach und Trolley-Befestigung.",
      en: "Generous travel bag in vegetable-tanned leather in rich cognac. With shoe compartment, laptop sleeve, and trolley attachment.",
      es: "Amplio bolso de viaje en cuero curtido vegetal en color coñac intenso. Con compartimento para zapatos, funda para portátil y sujeción para trolley.",
    },
    details: {
      de: ["Pflanzlich gegerbtes Leder", "Schuhfach & Laptopfach", "Trolley-Befestigung", "Gefertigt in Portugal"],
      en: ["Vegetable-tanned leather", "Shoe & laptop compartment", "Trolley attachment", "Made in Portugal"],
      es: ["Cuero curtido vegetal", "Compartimento para zapatos y portátil", "Sujeción para trolley", "Fabricado en Portugal"],
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}
