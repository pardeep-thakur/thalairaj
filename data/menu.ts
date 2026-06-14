export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  rating: number | null;
  ratingCount: string | null;
  type: "Veg" | "Non-veg";
  isBestseller: boolean;
  imageUrl: string | null;
  category: "bowls" | "biryanis" | "family" | "starters" | "extras" | "dessert" | "beverages";
}

export interface CategoryInfo {
  id: string;
  label: string;
  fallbackImage: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: "all", label: "All Items", fallbackImage: "/assets/menu_biryani.png" },
  { id: "recommended", label: "★ Recommended", fallbackImage: "/assets/menu_biryani.png" },
  { id: "bowls", label: "Biryani Bowls", fallbackImage: "/assets/menu_bowl.png" },
  { id: "biryanis", label: "Biryanis & Rice", fallbackImage: "/assets/menu_biryani.png" },
  { id: "family", label: "Family Packs", fallbackImage: "/assets/menu_family.png" },
  { id: "starters", label: "Starters", fallbackImage: "/assets/menu_starter.png" },
  { id: "extras", label: "Extras", fallbackImage: "/assets/menu_extra.png" },
  { id: "dessert", label: "Desserts", fallbackImage: "/assets/menu_extra.png" },
  { id: "beverages", label: "Beverages", fallbackImage: "/assets/menu_extra.png" },
];

export const MENU_DATA: MenuItem[] = [
  // ================= BIRYANI BOWLS =================
  {
    id: "bowl-pepper-chicken",
    name: "Pepper Chicken Biryani Bowl (Serves 1)",
    description: "Enjoy 21 spice biryani rice with pepper chicken, a whole egg served alongside refreshing raita or veg salan. A right-sized lunch with a flavour punch.",
    price: 269,
    originalPrice: null,
    rating: 4.6,
    ratingCount: "1.6K+",
    type: "Non-veg",
    isBestseller: true,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/2/eaf5b16f-1ca6-4d35-b7b0-131fc64855df_4acf962b-26d9-487e-b143-6a70d1f36763.jpg",
    category: "bowls"
  },
  {
    id: "bowl-boneless-chicken",
    name: "Boneless Chicken Biryani Bowl (Serves 1)",
    description: "Enjoy 21 spice biryani rice with boneless chicken, a whole egg served alongside refreshing raita or veg salan. A right-sized lunch with a flavour punch.",
    price: 269,
    originalPrice: null,
    rating: 4.4,
    ratingCount: "2.4K+",
    type: "Non-veg",
    isBestseller: true,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/2/92c02d38-8436-4ec2-9462-6399cfcbe01b_df7ed699-fbeb-4da2-aead-9df62014f461.jpg",
    category: "bowls"
  },
  {
    id: "bowl-kebab",
    name: "Kebab Biryani Bowl (Serves 1)",
    description: "Enjoy 21 spice biryani rice with pepper chicken, a whole egg served alongside refreshing raita or veg salan. A right-sized lunch with a flavour punch.",
    price: 229,
    originalPrice: null,
    rating: 4.6,
    ratingCount: "35",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/2/b90a1e2b-3e43-412e-9d5a-9034664f56f1_71f4112c-b958-4614-a004-be2bed96515e.jpg",
    category: "bowls"
  },
  {
    id: "bowl-triple-egg",
    name: "Triple Egg Biryani Bowl (Serves 1)",
    description: "Enjoy 21 spice biryani rice with tripple egg served alongside refreshing raita or veg salan. A right-sized lunch with a flavour punch.",
    price: 229,
    originalPrice: null,
    rating: 4.4,
    ratingCount: "9",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/2/f98534e2-51d1-4d3c-860c-d1e063df032e_8e61250a-1a2d-42b2-bc94-1c436fa76134.jpg",
    category: "bowls"
  },
  {
    id: "bowl-exotic-paneer",
    name: "Exotic Paneer Biryani Bowl (Serves 1)",
    description: "Enjoy 21 spice biryani rice with flavourful paneer, Served alongside refreshing raita or veg salan. A right-sized lunch with a flavour punch.",
    price: 269,
    originalPrice: null,
    rating: 4.5,
    ratingCount: "529",
    type: "Veg",
    isBestseller: true,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/2/9390eee0-69cc-4507-a033-bb2a4496ee7e_9004e969-0fe4-47ac-9224-3ac617efa2ad.jpg",
    category: "bowls"
  },
  {
    id: "bowl-pepper-mushroom",
    name: "Pepper Mushroom Biryani Bowl (Serves 1)",
    description: "Enjoy 21 spice biryani rice with pepper mushroom, Served alongside refreshing raita or veg salan. A right-sized lunch with a flavour punch.",
    price: 259,
    originalPrice: null,
    rating: 4.6,
    ratingCount: "882",
    type: "Veg",
    isBestseller: true,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/2/05d7a124-4379-4b76-887f-79a382e8f872_a4345eed-5d3a-4baf-b5d9-b1f27eef19b4.jpg",
    category: "bowls"
  },

  // ================= BIRYANIS & RICE =================
  {
    id: "biryani-boneless-chicken",
    name: "Boneless Chicken Biryani (650 gms)",
    description: "Melt-in-the-mouth morsels of chicken marinated in secret combination of fresh-ground spices served atop fragrant ghee-flavoured biryani rice garnished with cripsy fried onions. Serves 1.",
    price: 359,
    originalPrice: null,
    rating: 4.5,
    ratingCount: "923",
    type: "Non-veg",
    isBestseller: true,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/to06h8jda8nyq5qz81k6",
    category: "biryanis"
  },
  {
    id: "biryani-dum-chicken",
    name: "Chicken Dum Biryani (650 gms)",
    description: "Signature 21 Spice biryani! Whole chicken pieces generously coated with 21 spices and cooked in dum served atop aromatic ghee-flavoured biryani rice. Serves 1.",
    price: 359,
    originalPrice: null,
    rating: 4.4,
    ratingCount: "3.4K+",
    type: "Non-veg",
    isBestseller: true,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/sedaoopc1u8vrbtxhqmc",
    category: "biryanis"
  },
  {
    id: "biryani-kebab",
    name: "Kebab Biryani (650 gms)",
    description: "Enjoy 21 spice biryani rice with chicken Kebab, served alongside refreshing raita. A right-sized lunch with a flavour punch. Serves 1.",
    price: 359,
    originalPrice: null,
    rating: 4.6,
    ratingCount: "641",
    type: "Non-veg",
    isBestseller: true,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/advbx2r3bpsqp1visf8y",
    category: "biryanis"
  },
  {
    id: "biryani-pepper-chicken",
    name: "Pepper Chicken Boneless Biryani (650 gms)",
    description: "Chettinad pepper chicken made with fresh ground pepper and curry leaves combine with signature 21 spice for an unforgettable flavour explosion. Serves 1.",
    price: 359,
    originalPrice: null,
    rating: 4.6,
    ratingCount: "1.3K+",
    type: "Non-veg",
    isBestseller: true,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/18/fa3ce5da-4627-4d2f-95a3-e47142195ab0_04f053b3-a5c3-4e49-8b06-61034e6fbb9e.jpg_compressed",
    category: "biryanis"
  },
  {
    id: "biryani-egg",
    name: "Egg Biryani (650 gms)",
    description: "Four perfectly fried whole eggs, marinated in roasted spices and cooked in a delicious semi-dry homestyle masala, flavored with freshly pounded coriander seeds and crushed red chilies, served atop aromatic vegetable biryani rice. Serves 1.",
    price: 289,
    originalPrice: null,
    rating: 4.6,
    ratingCount: "391",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/9/8/a45ca4a0-2c95-41de-8228-81669bb70e44_693d2c3f-9a34-4403-be04-2237814f2eac.jpeg",
    category: "biryanis"
  },
  {
    id: "biryani-exotic-paneer",
    name: "Exotic Paneer Biryani (650 gms)",
    description: "Fresh malai paneer generously coated in signature 21 spice recipe perfected over time atop flavourful pure-ghee veg biryani rice. Serves 1.",
    price: 359,
    originalPrice: null,
    rating: 4.5,
    ratingCount: "447",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/vqz0lu1hdclbz1k3pozr",
    category: "biryanis"
  },
  {
    id: "biryani-pepper-paneer",
    name: "Pepper Paneer Biryani (650 gms)",
    description: "Chettinad-style preparation of creamy malai paneer spiked with fresh ground pepper and curry leaves combine with signature 21 spice for an unforgettable flavour explosion. Serves 1.",
    price: 359,
    originalPrice: null,
    rating: 4.6,
    ratingCount: "205",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/hkeaqgjcf0xazsj0twvt",
    category: "biryanis"
  },
  {
    id: "biryani-pepper-mushroom",
    name: "Pepper Mushroom Biryani (650 gms)",
    description: "Crispy mushrooms spiced with fresh ground pepper, kashmiri chillies and curry leaves atop Thalaivar's pure ghee veg biryani rice. Serves 1.",
    price: 349,
    originalPrice: null,
    rating: 4.7,
    ratingCount: "769",
    type: "Veg",
    isBestseller: true,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/prrbrx633bcdnj7jqhvu",
    category: "biryanis"
  },
  {
    id: "biryani-potato-dum",
    name: "Potato Dum Biryani (650 gms)",
    description: "Savoury dum potatos simmered in a rich masala of roasted spices atop signature 21 spice veg biryani. Serves 1.",
    price: 289,
    originalPrice: null,
    rating: 4.5,
    ratingCount: "367",
    type: "Veg",
    isBestseller: true,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/fvdi888pmylvbfhx4fob",
    category: "biryanis"
  },
  {
    id: "biryani-rice-only",
    name: "Biryani Rice",
    description: "Bayleaf-scented ghee flavoured biriyani rice mixed with signature 21 spice and garnished with crisp fried onions. Serves 1.",
    price: 239,
    originalPrice: null,
    rating: 4.5,
    ratingCount: "297",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ba2duypwxeqvtwk6vlig",
    category: "biryanis"
  },

  // ================= FAMILY PACKS =================
  {
    id: "family-pepper-chicken",
    name: "Pepper Chicken Boneless Biryani Family Pack",
    description: "Pepper chicken biryani family pack comes with approx 450 grams chicken + 2 eggs + 6 pc kebab + gravy + raita. Serves 3-4.",
    price: 875,
    originalPrice: null,
    rating: 4.8,
    ratingCount: "73",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/16/354570f5-ae52-4f8f-a5ce-bae994b806b4_3e1aea67-981c-4c1f-97c7-a0b29fe7efa5.jpg",
    category: "family"
  },
  {
    id: "family-boneless-chicken",
    name: "Boneless Chicken Biryani Family Pack",
    description: "Boneless chicken biryani family pack comes with approx 450 grams chicken + 2 eggs + 6 pc kebab + gravy + raita. Serves 3-4.",
    price: 875,
    originalPrice: null,
    rating: 4.4,
    ratingCount: "106",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/18/cd0cd18f-ab41-4280-acbc-f400a7cd24d4_108605d9-bc68-45cc-9cf7-698d828ef890.jpg_compressed",
    category: "family"
  },
  {
    id: "family-dum-chicken",
    name: "Dum Chicken Biryani Family Pack",
    description: "Dum chicken biryani family pack comes with 5 dum pieces + 2 boiled eggs + salan + thick raitha. Serves 3-4.",
    price: 875,
    originalPrice: null,
    rating: 4.2,
    ratingCount: "95",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/16/826988d0-7b79-4559-9689-cfc300986da6_cb6461be-69cb-40bb-9759-c1fc31c7bda6.jpg",
    category: "family"
  },
  {
    id: "family-kebab-chicken",
    name: "Kebab Chicken Biryani Family Pack",
    description: "Kebab chicken biryani family pack comes with approx 450 grams Kebab + 2 eggs + gravy + raita. Serves 3-4.",
    price: 849,
    originalPrice: null,
    rating: 4.9,
    ratingCount: "14",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/16/081697c1-dd3e-4f35-91b2-2542bcae1704_f631d255-6f88-4e9d-ba10-96ef5fb3c988.jpg",
    category: "family"
  },
  {
    id: "family-exotic-paneer",
    name: "Exotic Paneer Biryani Family Pack",
    description: "Exotic paneer biryani family pack comes with approx 450 grams paneer + gravy + raita. Serves 3-4.",
    price: 849,
    originalPrice: null,
    rating: 4.7,
    ratingCount: "23",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/hqmcbgsnznmu43nm8veu",
    category: "family"
  },
  {
    id: "family-pepper-mushroom",
    name: "Pepper Mushroom Biryani Family Pack",
    description: "Pepper mushroom biryani family pack comes with approx 450 grams mushroom + gravy + raita. Serves 3-4.",
    price: 825,
    originalPrice: null,
    rating: 4.6,
    ratingCount: "43",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/16/2b78baa0-75e5-432a-89cf-f1230a9b8b8b_1ab55f3b-54b6-43f4-ab20-d8df214fb578.jpg",
    category: "family"
  },

  // ================= STARTERS =================
  {
    id: "starter-neruppu-chicken-full",
    name: "Neruppu Chicken 21 Boneless (Full) - 240gms",
    description: "Melt-in-the-mouth morsels of fiery chicken made with fresh ground peppercorns and fragrant curry leaves, spiked with Guntur and kashmiri chilli for that fiesty flavour. Serves 1.",
    price: 269,
    originalPrice: null,
    rating: 4.7,
    ratingCount: "132",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/16/cd444812-f5ec-4d5e-9e77-f2e877017d13_f47255e3-5d1f-44f7-9394-ca698ca7b349.jpg",
    category: "starters"
  },
  {
    id: "starter-pepper-chicken-full",
    name: "Pepper Chicken Fry Boneless (Full) - 240gms",
    description: "3 types of peppercorns combine with curry leaves in this Chettinad chicken fry to create an unforgettable blend of complementary flavour. Serves 1.",
    price: 269,
    originalPrice: null,
    rating: 4.4,
    ratingCount: "107",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/c759d718-1766-43e7-b3a6-16ba4cb801d9_4b591cfc-9955-4848-9163-fe923cfc4163.jpg",
    category: "starters"
  },
  {
    id: "starter-roasted-chicken-full",
    name: "Roasted Chicken Masala (Full) - 240gms",
    description: "Tender chicken morsels marinated in yoghurt and folded into a rich satin-smooth tomato and onion semi-gravy. Serves 1.",
    price: 269,
    originalPrice: null,
    rating: 4.4,
    ratingCount: "118",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/d8ff2863-79fd-4115-968f-c92d60b07d0d_bf4299cf-d658-4a0f-a7fb-35e1ea9aaca1.jpg",
    category: "starters"
  },
  {
    id: "starter-chicken-kebab-full",
    name: "Chicken Kebab Boneless (Full) - 240gms",
    description: "A full portion of our crispy boneless kebab coated in spicy masala and fried to perfection. A perfect starter - roomba juicy, flavourful and fingerlicking good! Serves 2.",
    price: 249,
    originalPrice: null,
    rating: 4.3,
    ratingCount: "406",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/8/5dee16f7-8b79-4741-993d-d90a1e3a168e_f5fefa88-0b50-4f70-90a6-2ddef8a3574c.jpg",
    category: "starters"
  },
  {
    id: "starter-neruppu-paneer-full",
    name: "Neruppu Paneer 21 (Full) - 240gms",
    description: "Fiery paneer made with fresh ground peppercorns and fragrant curry leaves, spiked with Guntur and kashmiri chilli for that fiesty flavour. Serves 1.",
    price: 269,
    originalPrice: null,
    rating: 5,
    ratingCount: "11",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/cd9a6dc8-92ae-41a0-8b60-9216fde7ca6f_cc54341f-2c6c-4b7e-9a6b-a0dae98598fd.jpg",
    category: "starters"
  },
  {
    id: "starter-pepper-paneer-full",
    name: "Pepper Paneer Fry (Full) - 240gms",
    description: "3 types of peppercorns combine with curry leaves in this crispy paneer fry to create an unforgettable blend of complementary flavour. Serves 1.",
    price: 269,
    originalPrice: null,
    rating: 4.9,
    ratingCount: "7",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/bbae9586-fe2a-4c18-8d9a-6e84cfc85e52_3a16fd7c-c32b-4634-a3a1-fb7c24ff306d.jpg",
    category: "starters"
  },
  {
    id: "starter-roasted-paneer-full",
    name: "Roasted Paneer Masala (Full) - 240gms",
    description: "Soft creamy malai paneer marinated in yoghurt and folded into a rich satin-smooth tomato and onion semi-gravy. Serves 1.",
    price: 269,
    originalPrice: null,
    rating: 4.0,
    ratingCount: "2",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/mcyfjda1unfzr9clwzpd",
    category: "starters"
  },
  {
    id: "starter-mushroom-pepper-full",
    name: "Mushroom Pepper Fry (Full) - 240gms",
    description: "3 types of peppercorns combine with curry leaves in this crispy mushroom fry to create an unforgettable blend of complimentary flavours. Serves 1.",
    price: 239,
    originalPrice: null,
    rating: 4.5,
    ratingCount: "40",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/70501b0f-17c3-4e8d-a96d-bcbac5fe124c_ccd16bfb-16c3-4fdb-ab89-1d5ce5c0fc87.jpg",
    category: "starters"
  },
  {
    id: "starter-pepper-chicken-half",
    name: "Pepper Chicken Fry Boneless (Half) - 120gms",
    description: "3 types of peppercorns combine with curry leaves in this Chettinad chicken fry to create an unforgettable blend of complementary flavour. Serves 1.",
    price: 169,
    originalPrice: null,
    rating: 4.5,
    ratingCount: "163",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/16/c6289f16-7718-4551-871e-10d3ee14885c_3d712396-f83d-439d-a54f-ac325417d06f.jpg",
    category: "starters"
  },
  {
    id: "starter-neruppu-paneer-half",
    name: "Neruppu Paneer 21 (Half) - 120gms",
    description: "Fiery paneer made with fresh ground peppercorns and fragrant curry leaves, spiked with Guntur and kashmiri chilli for that fiesty flavour. Serves 1.",
    price: 149,
    originalPrice: 169,
    rating: 4.8,
    ratingCount: "43",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/16/1f8aebf0-f640-430c-9545-03c8d1e6ad14_274fabc7-a5c9-4d8b-8972-6e8dad0edf60.jpg",
    category: "starters"
  },
  {
    id: "starter-chicken-kebab-half",
    name: "Chicken Kebab Boneless (Half) - 120gms",
    description: "A half portion of our crispy boneless kebab coated in spicy masala and fried to perfection. A perfect starter - roomba juicy, flavourful and fingerlicking good! Serves 1.",
    price: 149,
    originalPrice: 169,
    rating: 4.5,
    ratingCount: "112",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/8/91cabc50-1f6d-46a6-b113-3b2bc844c41f_88b3c0c9-a462-475a-a75b-ed62c4441d71.jpg",
    category: "starters"
  },
  {
    id: "starter-mushroom-pepper-half",
    name: "Mushroom Pepper Fry (Half) - 120gms",
    description: "3 types of peppercorns combine with curry leaves in this crispy mushroom fry to create an unforgettable blend of complimentary flavours. Serves 1.",
    price: 149,
    originalPrice: 159,
    rating: 4.8,
    ratingCount: "65",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/16/563970fe-ebf1-4898-b122-e622c4a0733f_f2be63a7-6f21-4e68-8dc1-6bf4d4360e7c.jpg",
    category: "starters"
  },

  // ================= EXTRAS =================
  {
    id: "extra-salan",
    name: "Salan",
    description: "Delicious spicy peanut-sesame salan gravy to perfectly accompany your biryani meal. Serves 1.",
    price: 20,
    originalPrice: null,
    rating: 4.4,
    ratingCount: "73",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/18/26d33b5c-f68f-4108-bef4-b99078c1e75b_11e4b5aa-8ef5-4901-80d6-ded428328cb1.jpg",
    category: "extras"
  },
  {
    id: "extra-raita",
    name: "Raita",
    description: "Cooling whipped yogurt salad seasoned with sliced onions, cucumber, and roasted cumin. Serves 1.",
    price: 20,
    originalPrice: null,
    rating: 4.6,
    ratingCount: "178",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/svbdwtxu2xwkjc1vxzev",
    category: "extras"
  },
  {
    id: "extra-roasted-egg",
    name: "Roasted Egg",
    description: "Single boiled egg gently roasted in a spicy dry masala coating. Serves 1.",
    price: 20,
    originalPrice: null,
    rating: 4.4,
    ratingCount: "206",
    type: "Non-veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/10/6/46fb2477-bee3-4b71-93fd-8a4132675b56_6e212139-e4e4-4bec-a460-74e7d19d43bd.png_compressed",
    category: "extras"
  },
  {
    id: "extra-bowls-cutleries",
    name: "2 Bowls + 2 Cutleries",
    description: "Clean reusable serving bowls and plastic forks/spoons. Serves 1.",
    price: 30,
    originalPrice: null,
    rating: 5.0,
    ratingCount: "2",
    type: "Veg",
    isBestseller: false,
    imageUrl: null,
    category: "extras"
  },

  // ================= DESSERTS =================
  {
    id: "dessert-gulab-jamun",
    name: "Gulab Jamun (2pcs)",
    description: "Warm, soft golden-fried cottage cheese dumplings soaked in aromatic cardamom sugar syrup. Serves 1.",
    price: 59,
    originalPrice: null,
    rating: 4.3,
    ratingCount: "268",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/a6207b32fb59fafb69a830d7521a6e19",
    category: "dessert"
  },

  // ================= BEVERAGES =================
  {
    id: "beverage-black-pepsi",
    name: "Black Pepsi Can",
    description: "Refreshing zero-sugar carbonated cola drink. Serves 1.",
    price: 57,
    originalPrice: null,
    rating: 4.8,
    ratingCount: "38",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/vb8lpjzqrazsxeceybzs",
    category: "beverages"
  },
  {
    id: "beverage-pepsi",
    name: "Pepsi Can",
    description: "Classic sweet carbonated cola soft drink can. Serves 1.",
    price: 57,
    originalPrice: null,
    rating: 4.4,
    ratingCount: "34",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/vc3cmilossiu5joyzjsi",
    category: "beverages"
  },
  {
    id: "beverage-choco-mint-shake",
    name: "Raw Pressery Choco Mint Milk Shake",
    description: "Delicious cold chocolate milkshake with a fresh kick of cool mint. Serves 1.",
    price: 119,
    originalPrice: null,
    rating: 5.0,
    ratingCount: "4",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/6b54ae8286f195197ca245edae55e491",
    category: "beverages"
  },
  {
    id: "beverage-alphanso-mango",
    name: "Raw Pressery Alphanso Mango",
    description: "Thick sweet nectar juice made from handpicked premium Alphonso mangoes. Serves 1.",
    price: 95,
    originalPrice: null,
    rating: 4.8,
    ratingCount: "10",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/00be2db7571bf4e2dcb4ef8f88ae69d2",
    category: "beverages"
  },
  {
    id: "beverage-coconut-water",
    name: "Raw Pressery Tender Coconut water",
    description: "100% natural, refreshing coconut water packed with electrolytes. Serves 1.",
    price: 95.5,
    originalPrice: null,
    rating: 4.3,
    ratingCount: "5",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/3557427c63fa5591245ac863a0d17b0e",
    category: "beverages"
  },
  {
    id: "beverage-mirinda",
    name: "Mirinda Can",
    description: "Orange-flavored bubbly carbonated sweet beverage can. Serves 1.",
    price: 66,
    originalPrice: null,
    rating: 4.1,
    ratingCount: "3",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/5bb14d060860bcc8c22d34418a5713fd",
    category: "beverages"
  },
  {
    id: "beverage-thumbs-up",
    name: "Thumbs up Can",
    description: "Classic strongly-spiced Indian carbonated cola can. Serves 1.",
    price: 66.5,
    originalPrice: null,
    rating: 4.6,
    ratingCount: "3",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/26/ab3e4666-8bc7-4113-8b0f-7bc621ceed0f_94a3fc39-4cf2-496d-98c1-dcb7eef6fa8c.jpg",
    category: "beverages"
  },
  {
    id: "beverage-red-bull",
    name: "Red Bull Can",
    description: "Energy drink can to revitalize body and mind. Serves 1.",
    price: 180.5,
    originalPrice: null,
    rating: 5.0,
    ratingCount: "2",
    type: "Veg",
    isBestseller: false,
    imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/lvx0h9i4rfrwgermjk23",
    category: "beverages"
  }
];
