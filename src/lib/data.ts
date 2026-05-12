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
    builtUp: "1250 Sft",
    land: "165 Sq. Yards",
    price: "₹65 Lakhs",
    rental: "₹30,000/month",
    badge: "Best Value",
    imgId: "property-img-1",
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
    slug: "bangalore-style-villa-2bhk",
    name: "Bangalore Style Villa – 2 BHK",
    builtUp: "750 Sft",
    land: "165 Sq. Yards",
    price: "₹45 Lakhs",
    rental: "₹20,000/month",
    badge: null,
    imgId: "property-img-2",
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
    slug: "bangalore-style-villa-1bhk",
    name: "Bangalore Style Villa – 1 BHK",
    builtUp: "500 Sft",
    land: "165 Sq. Yards",
    price: "₹39 Lakhs",
    rental: "₹10,000/month",
    badge: "Most Affordable",
    imgId: "property-img-3",
    whatsappUrl: "https://wa.me/919494291924?text=Hi%20Team%20Line%2C%20I%20am%20interested%20in%20the%201BHK%20Bangalore%20Style%20Villa%20(500%20Sft%2C%20%E2%82%B939%20Lakhs).%20Please%20share%20more%20details.",
    features: [
      "Compact 1 BHK",
      "Ideal for rentals",
      "Low maintenance",
      "Quick possession",
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
  { id: "gallery-img-1", label: "Villa Exterior", category: "Villas" },
  { id: "gallery-img-2", label: "Villa Interior", category: "Villas" },
  { id: "gallery-img-3", label: "Duplex View", category: "Villas" },
  { id: "gallery-img-4", label: "2BHK Interior", category: "Villas" },
  { id: "gallery-img-5", label: "1BHK View", category: "Villas" },
  { id: "gallery-img-6", label: "Villa Garden", category: "Villas" },
  { id: "gallery-img-7", label: "Swimming Pool", category: "Amenities" },
  { id: "gallery-img-8", label: "Box Cricket", category: "Amenities" },
  { id: "gallery-img-9", label: "Open Gym", category: "Amenities" },
  { id: "gallery-img-10", label: "Projector Area", category: "Amenities" },
  { id: "gallery-img-11", label: "Layout Overview", category: "Layout" },
  { id: "gallery-img-12", label: "CC Road", category: "Layout" },
  { id: "gallery-img-13", label: "Entrance Arch", category: "Layout" },
  { id: "gallery-img-14", label: "Compound Wall", category: "Layout" },
  { id: "gallery-img-15", label: "Highway View", category: "Location" },
  { id: "gallery-img-16", label: "Yadagirigutta Proximity", category: "Location" },
  { id: "gallery-img-17", label: "Aler Town", category: "Location" },
  { id: "gallery-img-18", label: "Aerial View", category: "Location" },
] as const;

export type GalleryCategory = "All" | "Villas" | "Amenities" | "Layout" | "Location";

export const layoutHighlights = [
  { icon: "🔒", title: "24×7 Security with CCTV" },
  { icon: "🛣", title: "40' & 33' Wide CC Roads" },
  { icon: "🚰", title: "Underground Sewage System" },
  { icon: "💡", title: "Solar Automatic Street Lights" },
  { icon: "🧱", title: "Compound Wall" },
  { icon: "🏛", title: "Grand Entrance Arch" },
];

export const amenities = [
  { id: "swimming", icon: "🏊", title: "Swimming Pool & Rain Dance", desc: "Resort-style pool with rain dance arena for the whole family." },
  { id: "cricket", icon: "🏏", title: "Box Cricket", desc: "Floodlit box cricket arena for evening matches." },
  { id: "gym", icon: "🏋", title: "Open Gym", desc: "Outdoor fitness equipment surrounded by nature." },
  { id: "projector", icon: "📽", title: "Projector TV Area", desc: "Open-air projector lounge for events and matches." },
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
