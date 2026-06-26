export const company = {
  name: "TEAM LINE ECO RESORT",
  parent: "TEAM LINE INFRA DEVELOPERS",
  phone: "+91 94942 91924",
  phoneRaw: "+919494291924",
  whatsapp: "https://wa.me/919494291924",
  location: "Alair, Hyderabad–Warangal Highway, Telangana",
  office:
    "2nd Floor, Paramount Heights, 95 Bhagayat, Near Shilparamam, Uppal, Hyderabad – 500039",
};

export const properties = [
  {
    id: "duplex",
    slug: "duplex-villa",
    name: "Duplex Villa",
    type: "Duplex Villa",
    builtUp: "1250 Sft",
    land: "165 Sq. Yards",
    price: "₹65 Lakhs",
    priceRaw: 6500000,
    rental: "₹30,000/month",
    rentalYearly: "₹3,60,000",
    roi: "5.5%",
    bedrooms: "2+2 Duplex",
    facing: "East",
    bestFor: "Family + Rental Income",
    badge: "Most Popular",
    imgId: "property-duplex",
    image: "/assets/villas/duplex-render.jpg",
    images: [
      "/assets/villas/duplex-render.jpg",
      "/assets/villas/duplex-construction.jpg"
    ],
    whatsappUrl: "https://wa.me/919494291924?text=Hi%20Team%20Line%2C%20I%20am%20interested%20in%20the%20Duplex%20Villa%20(1250%20Sft%2C%20%E2%82%B965%20Lakhs).%20Please%20share%20more%20details.",
    features: [
      "Spacious duplex layout",
      "Premium fittings",
      "Private parking",
      "Garden view",
    ],
  },
  {
    id: "villa-2bhk",
    slug: "2bhk-villa",
    name: "Bangalore Style Villa – 2 BHK",
    type: "2BHK Villa",
    builtUp: "750 Sft",
    land: "165 Sq. Yards",
    price: "₹45 Lakhs",
    priceRaw: 4500000,
    rental: "₹20,000/month",
    rentalYearly: "₹2,40,000",
    roi: "5.3%",
    bedrooms: "2 BHK",
    facing: "East",
    bestFor: "Small Family",
    badge: null,
    imgId: "property-2bhk",
    image: "/assets/villas/bangalore-villa-2bhk-new.jpg",
    whatsappUrl: "https://wa.me/919494291924?text=Hi%20Team%20Line%2C%20I%20am%20interested%20in%20the%202BHK%20Bangalore%20Style%20Villa%20(750%20Sft%2C%20%E2%82%B945%20Lakhs).%20Please%20share%20more%20details.",
    features: [
      "2 bedroom layout",
      "Modern kitchen",
      "Open courtyard",
      "Highway access",
    ],
  },
  {
    id: "villa-1bhk",
    slug: "1bhk-villa",
    name: "Bangalore Style Villa – 1 BHK",
    type: "1BHK Villa",
    builtUp: "500 Sft",
    land: "165 Sq. Yards",
    price: "₹39 Lakhs",
    priceRaw: 3900000,
    rental: "₹10,000/month",
    rentalYearly: "₹1,20,000",
    roi: "3%",
    bedrooms: "1 BHK",
    facing: "East",
    bestFor: "Investment / Bachelors",
    badge: "Most Affordable",
    imgId: "property-1bhk",
    image: "/assets/villas/bangalore-villa.jpg",
    whatsappUrl: "https://wa.me/919494291924?text=Hi%20Team%20Line%2C%20I%20am%20interested%20in%20the%201BHK%20Bangalore%20Style%20Villa%20(500%20Sft%2C%20%E2%82%B939%20Lakhs).%20Please%20share%20more%20details.",
    features: [
      "Compact 1 BHK",
      "Ideal for rentals",
      "Low maintenance",
      "Quick possession",
    ],
  },
  {
    id: "plot-only",
    slug: "premium-plot",
    name: "Premium Open Plot",
    type: "Plot",
    builtUp: "N/A",
    land: "165 Sq. Yards",
    price: "₹16,000 / Sq. Yard",
    priceRaw: 2640000,
    rental: "No Rental Income",
    rentalYearly: "N/A",
    roi: "N/A",
    bedrooms: "N/A",
    facing: "Any",
    bestFor: "Self Construction",
    badge: "100% Loan Available",
    imgId: "property-plot",
    image: "/assets/villas/premium-plot-new.jpg",
    whatsappUrl: "https://wa.me/919494291924?text=Hi%20Team%20Line%2C%20I%20am%20interested%20in%20the%20Premium%20Open%20Plot%20(165%20Sq.%20Yards).%20Please%20share%20more%20details.",
    features: [
      "Just plot for sale",
      "100% Loan Available",
      "No rental income",
      "Self construction allowed",
    ],
  },
];

export const whatsappGeneralUrl = "https://wa.me/919494291924?text=Hi%20Team%20Line%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20Team%20Line%20Eco%20Resort.";

export const testimonials = [
  { name: "Ramesh K., Hyderabad", text: "Excellent project on the highway. RERA approved and bank loan was hassle-free. Great investment!" },
  { name: "Suresh Reddy, Warangal", text: "Loved the eco resort concept. The amenities are top class. Rental income started immediately." },
  { name: "Anitha M., Secunderabad", text: "Very close to Yadagirigutta. The team was professional and transparent throughout the process." },
];

export const galleryItems = [
  { 
    id: "gallery-1", 
    label: "Villa Exterior", 
    category: "Villas",
    images: ["/assets/gallery/villas/villa-exterior-1.jpg"]
  },
  { 
    id: "gallery-2", 
    label: "Villa Interior", 
    category: "Villas",
    images: [
      "/assets/gallery/villas/interior-1.jpg",
      "/assets/gallery/villas/interior-2.jpg",
      "https://res.cloudinary.com/dhbcyydef/video/upload/v1778597841/IMG_1653_rzgsa9.mov",
      "https://res.cloudinary.com/dhbcyydef/video/upload/v1778597926/IMG_1667_qqmmyr.mov"
    ]
  },
  { 
    id: "gallery-3", 
    label: "Duplex View", 
    category: "Villas",
    interval: 1500,
    images: [
      "/assets/gallery/villas/duplex-view-1.jpg",
      "/assets/gallery/villas/duplex-view-2.jpg",
      "https://res.cloudinary.com/dhbcyydef/video/upload/v1778839139/WhatsApp_Video_2026-05-15_at_15.28.12_qzkq8q.mp4",
      "https://res.cloudinary.com/dhbcyydef/video/upload/WhatsApp_Video_2026-05-15_at_15.28.14_tcdjaw.mp4"
    ]
  },
  { 
    id: "gallery-4", 
    label: "2BHK Interior", 
    category: "Villas",
    images: [
      "/assets/gallery/villas/interior-1.jpg",
      "/assets/gallery/villas/interior-2.jpg",
      "https://res.cloudinary.com/dhbcyydef/video/upload/v1778597841/IMG_1653_rzgsa9.mov",
      "https://res.cloudinary.com/dhbcyydef/video/upload/v1778597926/IMG_1667_qqmmyr.mov"
    ]
  },

  { id: "gallery-7", label: "Swimming Pool", category: "Amenities", images: ["/assets/amenities/swimming-pool.jpg"] },
  { id: "gallery-8", label: "Box Cricket", category: "Amenities", images: ["/assets/amenities/box-cricket.jpg"] },
  { id: "gallery-9", label: "Open Gym", category: "Amenities", images: ["/assets/amenities/open-gym.jpg"] },
  { id: "gallery-10", label: "Projector Area", category: "Amenities", images: ["/assets/amenities/projector-area.jpg"] },
  { id: "gallery-11", label: "Solar Street Lights", category: "Amenities", images: ["/assets/amenities/solar-street-lights.jpg"] },
  { id: "gallery-12", label: "CCTV Surveillance", category: "Amenities", images: ["/assets/amenities/cctv.jpg"] },
  { id: "gallery-13", label: "Underground Sewage", category: "Amenities", images: ["/assets/amenities/sewage.jpg"] },
  { 
    id: "gallery-14", 
    label: "Layout Overview", 
    category: "Layout",
    images: [
      "/assets/gallery/layout/layout-1.jpg",
      "/assets/gallery/layout/layout-2.jpg",
      "/assets/gallery/layout/layout-3.jpg",
      "/assets/gallery/layout/layout-4.jpg",
    ]
  },
  { 
    id: "gallery-15", 
    label: "CC Road", 
    category: "Layout",
    images: [
      "/assets/gallery/cc-road/road-1.jpg",
      "/assets/gallery/cc-road/road-2.jpg",
      "/assets/gallery/cc-road/road-3.jpg",
      "/assets/gallery/cc-road/road-4.jpg",
    ]
  },
  { id: "gallery-16", label: "Grand Entrance Arch", category: "Layout", images: ["/assets/gallery/layout/entrance-arch-1.jpg"] },
  { id: "gallery-17", label: "Compound Wall", category: "Layout", images: ["/assets/amenities/wall.jpg"] },
  { id: "gallery-18", label: "Highway View", category: "Location", images: ["https://res.cloudinary.com/dhbcyydef/video/upload/DJI_20260503154215_0413_D_1_vhyxha.mp4"] },

  { id: "gallery-20", label: "Aler Town", category: "Location", images: ["https://res.cloudinary.com/dhbcyydef/video/upload/v1778840069/DJI_20260503150750_0399_D_1_wjtkn8.mp4"] },

] as const;

export type GalleryCategory = "All" | "Villas" | "Amenities" | "Layout" | "Location";

export const layoutHighlights = [
  { icon: "🔒", title: "24×7 Security with CCTV", id: "layout-cctv" },
  { icon: "🛣", title: "40' & 33' Wide CC Roads", id: "layout-road" },
  { icon: "🚰", title: "Underground Sewage System", id: "layout-sewage" },
  { icon: "💡", title: "Solar Automatic Street Lights", id: "layout-solar" },
  { icon: "🧱", title: "Compound Wall", id: "layout-wall" },
  { icon: "🏛", title: "Grand Entrance Arch", id: "layout-arch" },
];

export const amenities = [
  { id: "amenity-pool", icon: "🏊", title: "Swimming Pool & Rain Dance", desc: "Resort-style pool with rain dance arena for the whole family.", image: "/assets/amenities/swimming-pool.jpg" },
  { id: "amenity-cricket", icon: "🏏", title: "Box Cricket", desc: "Floodlit box cricket arena for evening matches.", image: "/assets/amenities/box-cricket.jpg" },
  { id: "amenity-gym", icon: "🏋", title: "Open Gym", desc: "Outdoor fitness equipment surrounded by nature.", image: "/assets/amenities/open-gym.jpg" },
  { id: "amenity-projector", icon: "📽", title: "Projector TV Area", desc: "Open-air projector lounge for events and matches.", image: "/assets/amenities/projector-area.jpg" },
  { id: "amenity-solar", icon: "💡", title: "Solar Street Lights", desc: "Eco-friendly automatic solar street lighting throughout the layout.", image: "/assets/amenities/solar-street-lights.jpg" },
  { id: "amenity-cctv", icon: "🔒", title: "CCTV Surveillance", desc: "24x7 security monitoring for a safe and secure community.", image: "/assets/amenities/cctv.jpg" },
  { id: "amenity-sewage", icon: "🚰", title: "Underground Sewage", desc: "Professional underground drainage system for a clean environment.", image: "/assets/amenities/sewage.jpg" },
  { id: "amenity-wall", icon: "🧱", title: "Compound Wall", desc: "Entire project is secured with a high-quality compound wall.", image: "/assets/amenities/wall.jpg" },
];

export const connectivity = [
  "15 mins to Yadagirigutta Temple",
  "2 mins to Aler Bus Stand",
  "2 mins to Railway Station",
  "2 mins to Hospitals",
  "Highway Facing",
  "Tourism Hub",
];

export const trustBadges = [
  { icon: "🏛", label: "DTCP Approved" },
  { icon: "✅", label: "RERA Approved" },
  { icon: "🏦", label: "Bank Loan Available" },
  { icon: "🌿", label: "Eco Resort Living" },
];

export const projectFeatures = [
  "165 Sq. Yards Land",
  "CC Road Access (40ft & 33ft)",
  "Underground Sewage",
  "Solar Street Lights",
  "24x7 CCTV Security",
  "Compound Wall",
  "Grand Entrance Arch",
  "Swimming Pool & Rain Dance Access",
  "Box Cricket & Open Gym Access",
  "Projector TV Area Access",
];
