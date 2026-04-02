// ─── Store Info ──────────────────────────────────────────────────────────────
export const STORE = {
  name:        "SPICE BITES",
  nameJp:      "スパイスバイツ",
  tagline:     "一口ごとに広がる、本場インドの風景",
  description: "名古屋市天白区・平針駅から徒歩圏内にある「スパイスバイツ（SPICE BITES）」は、本場インドのシェフが腕を振るう本格インド料理レストランです。スパイスを絶妙にブレンドしたカレーをはじめ、タンドール窯で焼き上げる香ばしいナンやチキン、彩り豊かなセットメニューまで、多彩なメニューをご用意しています。",
  description2: "広々とした店内は70席を完備しており、ご家族・ご友人とのお食事はもちろん、グループでのご利用やパーティーにも最適。ランチからディナーまで幅広くご利用いただけます。また、テイクアウトも承っておりますので、ご自宅でも本格的な味わいをお楽しみください。",
  phone:       "052-846-4149",
  address:     "愛知県名古屋市天白区中平4-208エスパシオンビル 1F",
  access:      "平針駅より徒歩圏内",
  hours: {
    lunch:      "11:00〜15:00（L.O. 14:30）",
    dinner:     "17:00〜22:00（L.O. 21:30）",
    takeout:    "テイクアウトは22:00まで",
  },
  holiday:     "なし（年中無休）",
  seats:       "70席（テーブル40席、座席30席）",
  smoking:     "全席禁煙（外に灰皿あり）",
  parking:     "有 13台（店前5台、店裏8台）",
  payment:     ["現金", "クレジットカード", "QRコード決済", "電子マネー"],
  instagram:   "https://www.instagram.com/spice_bites_/",
  uberEats:    "https://www.ubereats.com/jp/store/%E3%82%B9%E3%83%8F%E3%82%A4%E3%82%B9%E3%83%8F%E3%82%A4%E3%83%84-spice-bites/MGqgxuPVXKunICNmZ1yadA",
  demaekan:    "https://demae-can.com/shopDetail/3166837",
  mapEmbed:    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.3!2d137.0!3d35.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5oSb55-l55yM5ZCN5Y-k5biC5aSp55m65Yy66KGT5bmM77yU77yS77yQ77yI!5e0!3m2!1sja!2sjp!4v1",
  mapSearchUrl: "https://maps.google.com/?q=愛知県名古屋市天白区中平4-208エスパシオンビル",
} as const;

// ─── CDN Image Base ───────────────────────────────────────────────────────────
const CDN = "https://spice-bites-hirabari.com/storage/images/1";

export const IMAGES = {
  hero:    `${CDN}/20251016174036.jpg`,
  about:   `${CDN}/20251016174034.jpg`,
  course:  `${CDN}/20251016174047.jpeg`,
  dinner:  `${CDN}/20251016174049.jpeg`,
  chef:    `${CDN}/20251016174038.jpg`,
  food1:   `${CDN}/20251016174021.jpg`,
  food2:   `${CDN}/20251016174033.jpg`,
  food3:   `${CDN}/20251016174025.jpg`,
  food4:   `${CDN}/20251016174020.jpeg`,
  food5:   `${CDN}/20251016174031.jpg`,
  food6:   `${CDN}/20251016174032.jpg`,
  food7:   `${CDN}/20251016174046.jpeg`,
  food8:   `${CDN}/20251016174052.jpeg`,
  food9:   `${CDN}/20251016174053.jpeg`,
  food10:  `${CDN}/20251016174051.jpeg`,
} as const;

export const GALLERY_IMAGES = [
  { src: IMAGES.food1,  alt: "本格インドカレーの盛り付け" },
  { src: IMAGES.food2,  alt: "焼きたてのナンとカレー" },
  { src: IMAGES.about,  alt: "スパイスバイツ店内の様子" },
  { src: IMAGES.food3,  alt: "タンドリーチキンとナン" },
  { src: IMAGES.food4,  alt: "セットメニューの彩り豊かな盛り付け" },
  { src: IMAGES.food5,  alt: "バターチキンカレー" },
  { src: IMAGES.dinner, alt: "ディナーセットメニュー" },
  { src: IMAGES.food6,  alt: "インド料理の盛り合わせ" },
  { src: IMAGES.course, alt: "コースメニューの全品" },
  { src: IMAGES.food7,  alt: "スパイス香るマトンカレー" },
  { src: IMAGES.food8,  alt: "チーズナンとカレー" },
  { src: IMAGES.food9,  alt: "生春巻きとエビマヨ" },
  { src: IMAGES.food10, alt: "デザートのマンゴーメルワとアイスクリーム" },
  { src: IMAGES.chef,   alt: "本場インドのシェフが調理する様子" },
  { src: IMAGES.food5,  alt: "テイクアウト用ランチセット" },
];

// ─── Menu Data ────────────────────────────────────────────────────────────────

export type MenuItem = {
  name: string;
  nameEn?: string;
  price: number;
  note?: string;
  spiceLevel?: number;
};

export type MenuSection = {
  title: string;
  titleEn: string;
  items: MenuItem[];
};

// COURSE MENU
export const COURSE_MENU: MenuSection[] = [
  {
    title: "コースメニュー",
    titleEn: "COURSE MENU",
    items: [
      { name: "3,200円コース（12品）", nameEn: "12-Dish Course", price: 3200, note: "4名様〜 / ナン・ライス食べ放題 / 辛さ選択可（0〜5）" },
      { name: "2,600円コース（9品）",  nameEn: "9-Dish Course",  price: 2600, note: "4名様〜 / ナン・ライス食べ放題 / 辛さ選択可（0〜5）" },
    ],
  },
  {
    title: "飲み放題オプション",
    titleEn: "ALL-YOU-CAN-DRINK",
    items: [
      { name: "ソフトドリンク飲み放題 90分", price: 1200 },
      { name: "アルコール飲み放題 90分",     price: 1800 },
    ],
  },
];

// DINNER MENU
export const DINNER_SETS: MenuSection = {
  title: "ディナーセットメニュー",
  titleEn: "DINNER SETS",
  items: [
    { name: "ファミリーセット（4人前）",         nameEn: "Family Set",         price: 6950, note: "スペシャルカレー4種・チキンティッカ・エビマヨ・生春巻き・サラダ・デザート4つ・ソフトドリンク4つ・チーズナン・ガーリックナン・プレーンナン2つ含む" },
    { name: "スパイスバイツSPペアセット（2人前）", nameEn: "Spice Bites SP Pair", price: 3630, note: "スペシャルカレー2種・タンドリーチキン・シシカバブ・生春巻き・サラダ・チーズナン・ナン・デザート2つ・ドリンク2つ含む" },
    { name: "アジアンセット",                    nameEn: "Asian Set",           price: 1790, note: "スペシャルカレー・スープ・サラダ・生春巻き・エビマヨ・ソフトドリンク・ナンorライス・デザート" },
    { name: "ネパールスペシャルセット",            nameEn: "Nepal Special",       price: 1790, note: "選べるカレー・スパイシーマトンorチキン・アチャール・サラダ・ナンorライス・ソフトドリンク（店内のみ）" },
    { name: "タンドリーチキンセット",             nameEn: "Tandoori Chicken Set", price: 1690, note: "選べるカレー・タンドリーチキン1P・サラダ・ナンorライス・ソフトドリンク・アイスクリーム" },
    { name: "チキン食べ比べセット",               nameEn: "Chicken Tasting Set",  price: 1550, note: "スペシャルカレー・スープ・サラダ・3種チキンティッカ・プレーンナンorライス・ソフトドリンク" },
    { name: "カレーセット",                      nameEn: "Curry Set",            price: 1250, note: "選べるカレー（チキンor野菜）・サラダ・スープorドリンク・ナンorライス（おかわり+¥150）" },
    { name: "キッズセット",                      nameEn: "Kids Set",             price: 690,  note: "チキンor野菜カレー・サラダ・ナンorライス・ソフトドリンクorデザート（おかわり+¥100）" },
  ],
};

// MEAT
export const MEAT_ITEMS: MenuSection = {
  title: "肉料理",
  titleEn: "MEAT DISHES",
  items: [
    { name: "ミックスグリルチキン",   nameEn: "Mix Grill Chicken",    price: 1650, note: "タンドリーチキン・マライティッカ・シシカバブ・タンドリーエビ" },
    { name: "タンドリーチキン（2P）", nameEn: "Tandoori Chicken ×2",  price: 1050 },
    { name: "タンドリーチキン（1P）", nameEn: "Tandoori Chicken ×1",  price: 550  },
    { name: "マライティッカ（6P）",   nameEn: "Malai Tikka ×6",       price: 1050 },
    { name: "マライティッカ（3P）",   nameEn: "Malai Tikka ×3",       price: 950  },
    { name: "チキンティッカ（6P）",   nameEn: "Chicken Tikka ×6",     price: 1050 },
    { name: "チキンティッカ（3P）",   nameEn: "Chicken Tikka ×3",     price: 550  },
    { name: "シシカバブ（4本）",      nameEn: "Sheek Kebab ×4",       price: 700  },
    { name: "シシカバブ（2本）",      nameEn: "Sheek Kebab ×2",       price: 350  },
    { name: "チキンティッカ＆マライティッカの野菜炒め", nameEn: "Tikka & Malai Veggie Stir-fry", price: 950 },
  ],
};

// APPETIZERS
export const APPETIZER_ITEMS: MenuSection = {
  title: "おつまみ・前菜",
  titleEn: "APPETIZERS",
  items: [
    { name: "モモ（8P）",       nameEn: "Momo ×8",           price: 1000 },
    { name: "エビチリ（8P）",   nameEn: "Prawn Chilli ×8",   price: 1200 },
    { name: "サモサ（2P）",     nameEn: "Samosa ×2",         price: 600  },
    { name: "ナンロール",       nameEn: "Naan Roll",          price: 650  },
    { name: "アルジラ",        nameEn: "Alu Jeera",           price: 650  },
    { name: "エビマヨ（6P）",   nameEn: "Prawn Mayo ×6",     price: 700  },
    { name: "エビマヨ（3P）",   nameEn: "Prawn Mayo ×3",     price: 360  },
    { name: "パパド（3枚）",    nameEn: "Papad ×3",          price: 200  },
    { name: "フライドポテト",   nameEn: "French Fries",       price: 400  },
  ],
};

// SALADS
export const SALAD_ITEMS: MenuSection = {
  title: "サラダ",
  titleEn: "SALADS",
  items: [
    { name: "生春巻き（6P）", nameEn: "Fresh Rolls ×6", price: 650 },
    { name: "チキンサラダ",   nameEn: "Chicken Salad",  price: 650 },
    { name: "サラダ",        nameEn: "Garden Salad",    price: 550 },
  ],
};

// SOUPS
export const SOUP_ITEMS: MenuSection = {
  title: "スープ",
  titleEn: "SOUPS",
  items: [
    { name: "チキンスープ",  nameEn: "Chicken Soup",  price: 400 },
    { name: "トマトスープ",  nameEn: "Tomato Soup",   price: 400 },
    { name: "本日のスープ",  nameEn: "Soup of the Day", price: 350 },
  ],
};

// CURRY
export const CURRY_CHICKEN: MenuSection = {
  title: "鶏肉ベースカレー",
  titleEn: "CHICKEN CURRY",
  items: [
    { name: "バターチキン",       nameEn: "Butter Chicken",        price: 1000, spiceLevel: 1 },
    { name: "チキンコルマ",       nameEn: "Chicken Korma",         price: 1000, spiceLevel: 1 },
    { name: "チキンカダイ",       nameEn: "Chicken Kadai",         price: 1000, spiceLevel: 2 },
    { name: "キーマナス",         nameEn: "Keema Naas",            price: 1000, spiceLevel: 2 },
    { name: "チキンティッカマサラ", nameEn: "Chicken Tikka Masala", price: 950,  spiceLevel: 2 },
    { name: "サグチキン",         nameEn: "Saag Chicken",          price: 950,  spiceLevel: 2 },
    { name: "キーマエッグ",       nameEn: "Keema Egg",             price: 950,  spiceLevel: 2 },
    { name: "チキンビンダル",     nameEn: "Chicken Vindaloo",      price: 950,  spiceLevel: 4 },
    { name: "チキンカレー",       nameEn: "Chicken Curry",         price: 900,  spiceLevel: 2 },
  ],
};

export const CURRY_SEAFOOD: MenuSection = {
  title: "魚介ベースカレー",
  titleEn: "SEAFOOD CURRY",
  items: [
    { name: "シーフードカレー", nameEn: "Seafood Curry",  price: 950, spiceLevel: 2 },
    { name: "サグプローン",    nameEn: "Saag Prawn",      price: 950, spiceLevel: 2 },
    { name: "プローンカレー",  nameEn: "Prawn Curry",     price: 950, spiceLevel: 2 },
  ],
};

export const CURRY_LAMB: MenuSection = {
  title: "羊肉ベースカレー",
  titleEn: "LAMB CURRY",
  items: [
    { name: "マトンカダイ",   nameEn: "Mutton Kadai",   price: 1000, spiceLevel: 3 },
    { name: "マトンビンダル", nameEn: "Mutton Vindaloo", price: 1000, spiceLevel: 4 },
    { name: "マトンマサラ",   nameEn: "Mutton Masala",   price: 950,  spiceLevel: 3 },
    { name: "サグマトン",     nameEn: "Saag Mutton",     price: 950,  spiceLevel: 2 },
    { name: "マトンカレー",   nameEn: "Mutton Curry",    price: 900,  spiceLevel: 2 },
  ],
};

export const CURRY_VEG: MenuSection = {
  title: "野菜ベースカレー",
  titleEn: "VEGETABLE CURRY",
  items: [
    { name: "チャナマサラ",     nameEn: "Chana Masala",       price: 1000, spiceLevel: 2 },
    { name: "アルベーガン（ドライ）", nameEn: "Alu Baingan Dry", price: 1000, spiceLevel: 2 },
    { name: "アルパラク",      nameEn: "Alu Palak",           price: 900,  spiceLevel: 1 },
    { name: "野菜カレー",      nameEn: "Vegetable Curry",     price: 900,  spiceLevel: 1 },
    { name: "ダルカレー",      nameEn: "Dal Curry",           price: 800,  spiceLevel: 1 },
  ],
};

export const CURRY_PORK: MenuSection = {
  title: "豚肉ベースカレー",
  titleEn: "PORK CURRY",
  items: [
    { name: "ポークチーズ",  nameEn: "Pork Cheese",   price: 1100, spiceLevel: 2 },
    { name: "チリポーク",    nameEn: "Chilli Pork",   price: 1100, spiceLevel: 4 },
    { name: "ポークコルマ",  nameEn: "Pork Korma",    price: 1000, spiceLevel: 1 },
    { name: "ポークマサラ",  nameEn: "Pork Masala",   price: 950,  spiceLevel: 2 },
    { name: "ポークサグ",    nameEn: "Pork Saag",     price: 950,  spiceLevel: 2 },
    { name: "ポークカレー",  nameEn: "Pork Curry",    price: 900,  spiceLevel: 2 },
  ],
};

// NAAN & RICE
export const NAAN_RICE: MenuSection = {
  title: "ナン・ライス",
  titleEn: "NAAN & RICE",
  items: [
    { name: "プチナンセット（ミニチーズ・ハニー・チョコ）", nameEn: "Mini Naan Set", price: 1100 },
    { name: "ベトナムチャーハン目玉焼きのせ",              nameEn: "Vietnamese Fried Rice", price: 950 },
    { name: "ビリヤニ",          nameEn: "Biryani",            price: 900  },
    { name: "チーズナン",        nameEn: "Cheese Naan",        price: 650  },
    { name: "桜エビチーズナン",  nameEn: "Sakura Shrimp Cheese Naan", price: 650 },
    { name: "もろこしチーズナン", nameEn: "Corn Cheese Naan",   price: 650  },
    { name: "ベーコンポテトチーズナン", nameEn: "Bacon Potato Cheese Naan", price: 650 },
    { name: "キーマチーズナン",  nameEn: "Keema Cheese Naan",  price: 650  },
    { name: "ガーリックライス",  nameEn: "Garlic Rice",        price: 600  },
    { name: "チョコナン",        nameEn: "Chocolate Naan",     price: 600  },
    { name: "ハニーナン",        nameEn: "Honey Naan",         price: 400  },
    { name: "ガーリックナン",    nameEn: "Garlic Naan",        price: 400  },
    { name: "バターナン",        nameEn: "Butter Naan",        price: 400  },
    { name: "プレーンナン",      nameEn: "Plain Naan",         price: 350  },
    { name: "ライス",            nameEn: "Steamed Rice",       price: 350  },
  ],
};

// DESSERTS
export const DESSERT_ITEMS: MenuSection = {
  title: "デザート",
  titleEn: "DESSERTS",
  items: [
    { name: "マンゴーメルワ", nameEn: "Mango Merwa", price: 450 },
    { name: "アイスクリーム", nameEn: "Ice Cream",   price: 250 },
  ],
};

// LUNCH MENU
export const LUNCH_SETS: MenuSection = {
  title: "ランチセットメニュー",
  titleEn: "LUNCH SETS",
  items: [
    { name: "タンドリーチキンスペシャルセット", nameEn: "Tandoori Chicken Special", price: 1550, note: "選べるカレー5種・選べるパン・タンドリーチキン・スープ・サラダ・ドリンク・デザート" },
    { name: "スパイスバイツセット",            nameEn: "Spice Bites Set",          price: 1590, note: "カレー2種・生春巻き3P・スープ・サラダ・ナンorライス・ドリンク・デザート" },
    { name: "生春巻きセット",                  nameEn: "Fresh Roll Set",            price: 1290, note: "選べるカレー・チキンティッカ2P・スープ・サラダ・ナンorライス・ドリンク" },
    { name: "エビマヨセット",                  nameEn: "Prawn Mayo Set",            price: 1290, note: "カレー4種食べ比べ・スープ・サラダ・ナンorライス・ドリンク" },
    { name: "マサラセット",                    nameEn: "Masala Set",                price: 1290, note: "チキン・ビーフ・ポークマサラ3種・スープ・サラダ・ナンorライス・ドリンク" },
    { name: "プチナンセット",                  nameEn: "Mini Naan Set",             price: 1100, note: "ミニハニーナン・ミニチーズナン・ミニチョコナン（+¥100でドリンク追加可）" },
    { name: "日替わりカレーセット",            nameEn: "Daily Curry Set",           price: 990,  note: "日替りカレー・スープ・サラダ・ナンorライス・ドリンク" },
    { name: "キッズセット",                    nameEn: "Kids Set",                  price: 650,  note: "チキンor野菜カレー・サラダ・ナンorライス・ドリンクorデザート" },
  ],
};

export const LUNCH_SIDES: MenuSection = {
  title: "ランチサイドメニュー",
  titleEn: "LUNCH SIDES",
  items: [
    { name: "タンドリーチキン（1P）", price: 550 },
    { name: "チキンティッカ（2P）",   price: 350 },
    { name: "マライティッカ（2P）",   price: 360 },
    { name: "シシカバブ（2P）",       price: 350 },
    { name: "エビマヨ（3P）",         price: 360 },
    { name: "生春巻き（3P）",         price: 380 },
    { name: "サラダ",                 price: 550 },
  ],
};

// DRINKS
export const DRINKS: MenuSection[] = [
  {
    title: "生ビール・瓶ビール",
    titleEn: "BEER",
    items: [
      { name: "スーパードライ（生）",         price: 450 },
      { name: "キングフィッシャー（瓶）",     price: 500 },
      { name: "ハイネケン（瓶）",             price: 450 },
      { name: "ザ・プレミアム・モルツ中瓶",   price: 500 },
      { name: "ドライゼロ（ノンアル）",       price: 380 },
    ],
  },
  {
    title: "ウイスキー・ハイボール・焼酎",
    titleEn: "WHISKY & SPIRITS",
    items: [
      { name: "角ハイボール",       price: 450 },
      { name: "水割り・ロック",     price: 400 },
      { name: "翠ジンソーダ",       price: 450 },
      { name: "カルピスサワー",     price: 450 },
      { name: "レモンサワー",       price: 450 },
    ],
  },
  {
    title: "ワイン・スパークリング",
    titleEn: "WINE",
    items: [
      { name: "ハーフボトル（赤・白）", price: 1000 },
      { name: "グラスワイン（白）",     price: 600  },
      { name: "スパークリングワイン",   price: 1000 },
    ],
  },
  {
    title: "ソフトドリンク",
    titleEn: "SOFT DRINKS",
    items: [
      { name: "マンゴーラッシー",         price: 330 },
      { name: "ラッシー",                 price: 300 },
      { name: "マンゴージュース",         price: 300 },
      { name: "グァバジュース",           price: 330 },
      { name: "アイスコーヒー・アイスティー", price: 290 },
      { name: "コカ・コーラ",             price: 300 },
      { name: "ジンジャーエール",         price: 300 },
      { name: "オレンジ・アップル・パインジュース", price: 290 },
      { name: "マスカットティー（ホット・アイス）", price: 330 },
      { name: "イタリアンソーダ（パイン・オレンジ）", price: 350 },
    ],
  },
];

// FEATURED MENU ITEMS for Homepage preview
export const FEATURED_DISHES = [
  { name: "バターチキンカレー",  nameEn: "Butter Chicken",  price: 1000, image: IMAGES.food1,  tag: "人気No.1", spiceLevel: 1 },
  { name: "タンドリーチキン",    nameEn: "Tandoori Chicken", price: 550,  image: IMAGES.food3,  tag: "看板メニュー", spiceLevel: 2 },
  { name: "チーズナン",          nameEn: "Cheese Naan",     price: 650,  image: IMAGES.food5,  tag: "定番", spiceLevel: 0 },
  { name: "マトンビンダル",      nameEn: "Mutton Vindaloo", price: 1000, image: IMAGES.food4,  tag: "通好み", spiceLevel: 4 },
  { name: "ランチセット",        nameEn: "Lunch Set",       price: 990,  image: IMAGES.food2,  tag: "お得", spiceLevel: 2 },
  { name: "マンゴーラッシー",    nameEn: "Mango Lassi",     price: 330,  image: IMAGES.food7,  tag: "定番ドリンク", spiceLevel: 0 },
];
