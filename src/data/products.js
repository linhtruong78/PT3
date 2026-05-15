/**
 * PT3 Global Royal — Product catalogue
 * -------------------------------------
 * Six products, each with multi-language fields. Visual identity (theme) is
 * derived per-product so the detail pages can re-skin themselves (burgundy
 * red, champagne gold, rose gold, emerald green, matte black).
 *
 * To add a 7th product: append a new object with the same shape.
 */

export const PRODUCTS = [
  {
    slug: 'arak-sagi',
    sku: 'ARS-750',
    category: 'spirit',
    format: { value: '750ml', glass: 'glass' },
    abv: '40%',
    image: '/products/arak-sagi.jpeg',
    order: 1,
    theme: {
      name: 'matte-gold',
      bg: 'from-matte-black via-matte-900 to-matte-black',
      accent: '#c8a04a',
      panel: 'bg-matte-900/80',
    },
    name: {
      en: 'Arak Sagi',
      fr: 'Arak Sagi',
      vi: 'Arak Sagi',
      fa: 'عرق ساقی',
    },
    type: {
      en: 'Premium Persian Spirit',
      fr: 'Spiritueux Persan Premium',
      vi: 'Rượu Mạnh Ba Tư Cao Cấp',
      fa: 'عرق ممتاز پارسی',
    },
    tagline: {
      en: 'The traditional Persian spirit, reimagined in black and gold.',
      fr: 'Le spiritueux traditionnel persan, réimaginé en noir et or.',
      vi: 'Rượu mạnh truyền thống Ba Tư, tái sinh trong đen và vàng.',
      fa: 'عرق سنتی پارسی، در قاب سیاه و طلا روایت شده.',
    },
    description: {
      en: 'Distilled in the centuries-old Persian tradition and finished for an international stage. Arak Sagi pours like polished obsidian — clean, deep, and unmistakably royal. Sip neat over a single hand-cut cube, or serve in the suite, after midnight.',
      fr: 'Distillé selon une tradition persane séculaire et fini pour la scène internationale. Arak Sagi se sert comme une obsidienne polie — net, profond, indéniablement royal. À déguster pur sur un seul glaçon taillé à la main, ou en suite, après minuit.',
      vi: 'Chưng cất theo truyền thống Ba Tư hàng thế kỷ và hoàn thiện cho sân khấu quốc tế. Arak Sagi rót xuống như đá obsidian được đánh bóng — sạch, sâu và đậm chất hoàng gia. Thưởng thức nguyên với một viên đá cắt tay, hoặc phục vụ trong suite sau nửa đêm.',
      fa: 'با شیوهٔ کهن پارسی تقطیر شده و برای صحنهٔ جهانی پرداخت یافته است. عرق ساقی همچون ابسیدین صیقلی می‌ریزد — تمیز، عمیق و به‌روشنی سلطنتی. به‌تنهایی روی یک تکه یخ دست‌تراش، یا در سوئیت پس از نیمه‌شب.',
    },
    identity: {
      en: [
        'Authentic Persian heritage',
        'Luxury black & gold bottle',
        'Royal Persian craftsmanship',
        'Premium international presentation',
      ],
      fr: [
        'Héritage persan authentique',
        'Bouteille noir & or de luxe',
        'Artisanat royal persan',
        'Présentation internationale premium',
      ],
      vi: [
        'Di sản Ba Tư đích thực',
        'Chai đen vàng cao cấp',
        'Tinh hoa chế tác hoàng gia',
        'Phong cách trình bày quốc tế',
      ],
      fa: [
        'میراث اصیل پارسی',
        'بطری مجلل سیاه و طلایی',
        'هنر سلطنتی پارس',
        'پرزنتیشن بین‌المللی ممتاز',
      ],
    },
    mood: {
      en: ['Powerful', 'Elegant', 'Sophisticated', 'Traditional Persian luxury'],
      fr: ['Puissant', 'Élégant', 'Sophistiqué', 'Luxe persan traditionnel'],
      vi: ['Mạnh mẽ', 'Thanh lịch', 'Tinh tế', 'Xa hoa Ba Tư truyền thống'],
      fa: ['قدرتمند', 'نجیب', 'پیچیده', 'تجمل سنتی پارسی'],
    },
  },

  {
    slug: 'shiraz-red-wine',
    sku: 'SHR-RED-750',
    category: 'wine',
    format: { value: '750ml', glass: 'bottle' },
    abv: '14%',
    image: '/products/shiraz-red.jpeg',
    order: 2,
    theme: {
      name: 'burgundy',
      bg: 'from-burgundy-deep via-burgundy to-burgundy-deep',
      accent: '#c8a04a',
      panel: 'bg-burgundy-deep/80',
    },
    name: {
      en: 'Shiraz Red Wine',
      fr: 'Shiraz — Vin Rouge',
      vi: 'Shiraz Vang Đỏ',
      fa: 'شراب سرخ شیراز',
    },
    type: {
      en: 'Premium Red Wine',
      fr: 'Vin Rouge Premium',
      vi: 'Vang Đỏ Cao Cấp',
      fa: 'شراب قرمز ممتاز',
    },
    tagline: {
      en: 'Burgundy and gold, written for the slow evenings of the world.',
      fr: 'Bordeaux et or, écrit pour les soirées lentes du monde.',
      vi: 'Rượu vang đỏ và sắc vàng, dành cho những buổi tối thong dong.',
      fa: 'بورگاندی و طلایی، نوشته‌شده برای شب‌های آرام جهان.',
    },
    description: {
      en: 'A full-bodied Shiraz with deep burgundy reflections, layered with dark fruit, leather and a long, gold-edged finish. Designed for the candlelit dining room, the after-hours conversation, the perfect first glass.',
      fr: 'Un Shiraz corsé aux reflets bordeaux profonds, en strates de fruits noirs, cuir et finale longue ourlée d’or. Pensé pour la salle à manger aux chandelles, la conversation tardive, le premier verre parfait.',
      vi: 'Một chai Shiraz đầy thân, ánh đỏ burgundy sâu, lớp lớp trái cây sẫm, da thuộc và hậu vị dài viền vàng. Dành cho phòng ăn ánh nến, cuộc trò chuyện về khuya, và ly đầu tiên hoàn hảo.',
      fa: 'یک شیراز پر‌بدنه با بازتاب‌های ژرف بورگاندی، لایه‌لایه از میوهٔ تیره، چرم و یک پایان طولانی با حاشیهٔ طلایی. برای سالن غذاخوری شمعی، گفت‌وگوی نیمه‌شب و نخستین جام بی‌نقص.',
    },
    identity: {
      en: [
        'Burgundy and gold luxury tones',
        'Elegant vineyard atmosphere',
        'Premium fine wine presentation',
        'Romantic cinematic aesthetic',
      ],
      fr: [
        'Teintes luxueuses bordeaux et or',
        'Atmosphère élégante de vignoble',
        'Présentation grand vin premium',
        'Esthétique romantique cinématographique',
      ],
      vi: [
        'Tông màu burgundy và vàng kim',
        'Không khí vườn nho thanh lịch',
        'Phong cách trình bày rượu vang hảo hạng',
        'Vẻ đẹp lãng mạn điện ảnh',
      ],
      fa: [
        'تنالیتهٔ مجلل بورگاندی و طلایی',
        'فضای نجیب تاکستان',
        'پرزنتیشن شراب فاین ممتاز',
        'زیبایی‌شناسی سینمایی عاشقانه',
      ],
    },
    mood: {
      en: ['Elegant', 'Sophisticated', 'Luxury dining lifestyle', 'Premium nightlife atmosphere'],
      fr: ['Élégant', 'Sophistiqué', 'Art de vivre gastronomique', 'Nuit premium'],
      vi: ['Thanh lịch', 'Tinh tế', 'Phong cách ẩm thực sang trọng', 'Không khí đêm cao cấp'],
      fa: ['نجیب', 'پیچیده', 'سبک زندگی غذاخوری مجلل', 'فضای شبانهٔ ممتاز'],
    },
  },

  {
    slug: 'shiraz-white-wine',
    sku: 'SHR-WHT-750',
    category: 'wine',
    format: { value: '750ml', glass: 'bottle' },
    abv: '12.5%',
    image: '/products/shiraz-white.jpeg',
    order: 3,
    theme: {
      name: 'champagne',
      bg: 'from-matte-900 via-matte-800 to-matte-black',
      accent: '#e8d4a0',
      panel: 'bg-matte-900/70',
    },
    name: {
      en: 'Shiraz White Wine',
      fr: 'Shiraz — Vin Blanc',
      vi: 'Shiraz Vang Trắng',
      fa: 'شراب سفید شیراز',
    },
    type: {
      en: 'Premium White Wine',
      fr: 'Vin Blanc Premium',
      vi: 'Vang Trắng Cao Cấp',
      fa: 'شراب سفید ممتاز',
    },
    tagline: {
      en: 'A champagne-gold pour for bright rooms and brighter company.',
      fr: 'Une coulée or champagne pour les pièces lumineuses et les belles tablées.',
      vi: 'Rót ánh vàng champagne cho những căn phòng và bạn bè rạng rỡ.',
      fa: 'یک ریزش طلایی شامپاینی برای اتاق‌های روشن و هم‌نشینان درخشان.',
    },
    description: {
      en: 'A crisp, sun-laced white Shiraz with bright stone-fruit, honeyed citrus and a quietly mineral finish. Built for terraces in summer, balconies at golden hour, and the lightest first courses.',
      fr: 'Un Shiraz blanc vif, baigné de soleil — fruits à noyau lumineux, agrumes miellés et finale minérale discrète. Pour les terrasses d’été, les balcons à l’heure dorée et les entrées les plus légères.',
      vi: 'Một chai Shiraz trắng thanh mát, đẫm ánh nắng — trái có hạt sáng, cam quýt mật ong và hậu vị khoáng nhẹ. Dành cho hiên hè, ban công giờ vàng và những món khai vị nhẹ nhất.',
      fa: 'یک شیراز سفید با ترشی پاکیزه و آغشتهٔ آفتاب — میوهٔ هسته‌دار روشن، مرکبات عسلی و یک پایان آرام و معدنی. ساخته‌شده برای تراس‌های تابستان، بالکن‌های ساعت طلایی و سبک‌ترین پیش‌غذاها.',
    },
    identity: {
      en: [
        'Champagne gold aesthetic',
        'Bright luxury vineyard visuals',
        'Clean modern wine presentation',
        'Elegant premium branding',
      ],
      fr: [
        'Esthétique or champagne',
        'Visuels de vignoble lumineux',
        'Présentation moderne épurée',
        'Branding premium élégant',
      ],
      vi: [
        'Thẩm mỹ vàng champagne',
        'Hình ảnh vườn nho rực rỡ',
        'Phong cách trình bày hiện đại',
        'Bản sắc cao cấp thanh lịch',
      ],
      fa: [
        'زیبایی‌شناسی طلایی شامپاینی',
        'تصاویر روشن تاکستان مجلل',
        'پرزنتیشن مدرن و تمیز',
        'برندینگ نجیب و ممتاز',
      ],
    },
    mood: {
      en: ['Fresh', 'Modern luxury', 'Elegant lifestyle', 'Premium summer atmosphere'],
      fr: ['Frais', 'Luxe moderne', 'Art de vivre élégant', 'Été premium'],
      vi: ['Tươi mát', 'Sang trọng hiện đại', 'Phong cách thanh lịch', 'Không khí mùa hè cao cấp'],
      fa: ['تازه', 'تجمل مدرن', 'سبک زندگی نجیب', 'حال‌وهوای تابستان ممتاز'],
    },
  },

  {
    slug: 'shiraz-rose-wine',
    sku: 'SHR-ROS-750',
    category: 'wine',
    format: { value: '750ml', glass: 'bottle' },
    abv: '12%',
    image: '/products/shiraz-rose.jpeg',
    order: 4,
    theme: {
      name: 'rose-gold',
      bg: 'from-matte-900 via-matte-800 to-matte-black',
      accent: '#c89b8c',
      panel: 'bg-matte-900/70',
    },
    name: {
      en: 'Shiraz Rosé Wine',
      fr: 'Shiraz — Rosé',
      vi: 'Shiraz Vang Hồng',
      fa: 'شراب رزه شیراز',
    },
    type: {
      en: 'Premium Rosé Wine',
      fr: 'Rosé Premium',
      vi: 'Vang Hồng Cao Cấp',
      fa: 'شراب رزهٔ ممتاز',
    },
    tagline: {
      en: 'Sunset in a bottle, dressed in rose gold.',
      fr: 'Un coucher de soleil en bouteille, habillé d’or rose.',
      vi: 'Hoàng hôn đóng chai, khoác sắc vàng hồng.',
      fa: 'غروب در یک بطری، با لباس طلایی رُز.',
    },
    description: {
      en: 'A chic, delicately blushed rosé with notes of wild strawberry, white peach and rose petal. Built for sunset terraces, fashion-week dinners, and the long Mediterranean weekends in between.',
      fr: 'Un rosé chic et délicatement rosé, aux notes de fraise des bois, pêche blanche et pétale de rose. Pensé pour les terrasses au coucher du soleil, les dîners de fashion week et les longs week-ends méditerranéens.',
      vi: 'Một chai vang hồng tinh tế, ửng nhẹ, với hương dâu rừng, đào trắng và cánh hoa hồng. Dành cho hiên hoàng hôn, bữa tối fashion week và những cuối tuần Địa Trung Hải dài lâu.',
      fa: 'یک رزهٔ شیک و به‌نرمی گُلگون، با عطر توت‌فرنگی وحشی، هلوی سفید و گلبرگ رز. ساخته‌شده برای تراس‌های غروب، شام‌های هفتهٔ مد و آخرهفته‌های طولانی مدیترانه‌ای.',
    },
    identity: {
      en: [
        'Rose gold luxury aesthetic',
        'Sunset vineyard atmosphere',
        'Chic feminine elegance',
        'Fashion-inspired premium branding',
      ],
      fr: [
        'Esthétique or rose de luxe',
        'Vignoble au coucher du soleil',
        'Élégance féminine chic',
        'Branding premium d’inspiration mode',
      ],
      vi: [
        'Thẩm mỹ vàng hồng cao cấp',
        'Không khí vườn nho lúc hoàng hôn',
        'Nét nữ tính thanh lịch',
        'Bản sắc cao cấp lấy cảm hứng thời trang',
      ],
      fa: [
        'زیبایی‌شناسی مجلل طلایی رُز',
        'فضای تاکستان غروب',
        'نجابت زنانهٔ شیک',
        'برندینگ ممتاز با الهام از مد',
      ],
    },
    mood: {
      en: ['Stylish', 'Elegant', 'Luxury social lifestyle', 'Modern premium atmosphere'],
      fr: ['Stylé', 'Élégant', 'Vie sociale de luxe', 'Atmosphère premium moderne'],
      vi: ['Phong cách', 'Thanh lịch', 'Phong cách xã giao sang trọng', 'Không khí cao cấp hiện đại'],
      fa: ['شیک', 'نجیب', 'سبک اجتماعی مجلل', 'فضای ممتاز مدرن'],
    },
  },

  {
    slug: 'shams-beer-bottle',
    sku: 'SHB-BTL-330',
    category: 'beer',
    format: { value: '330ml', glass: 'glass-bottle' },
    abv: '5%',
    image: '/products/shams-bottle.jpeg',
    order: 5,
    theme: {
      name: 'emerald',
      bg: 'from-emerald-deep via-emerald to-emerald-deep',
      accent: '#e8d4a0',
      panel: 'bg-emerald-deep/85',
    },
    name: {
      en: 'Shams Beer — Glass Bottle',
      fr: 'Shams Beer — Bouteille en Verre',
      vi: 'Shams Beer — Chai Thủy Tinh',
      fa: 'آبجو شمس — بطری شیشه‌ای',
    },
    type: {
      en: 'Premium Persian Lager',
      fr: 'Lager Persan Premium',
      vi: 'Bia Lager Ba Tư Cao Cấp',
      fa: 'لاگر ممتاز پارسی',
    },
    tagline: {
      en: 'Emerald and gold — the modern Persian lager.',
      fr: 'Émeraude et or — le lager persan moderne.',
      vi: 'Ngọc lục bảo và vàng — lager Ba Tư hiện đại.',
      fa: 'زمرد و طلا — لاگر مدرن پارسی.',
    },
    description: {
      en: 'A bright, golden Persian lager poured into a deep emerald glass bottle and crowned with the royal sun emblem. Crisp, clean, ice-cold — built for rooftops, fast cities and slow weekends.',
      fr: 'Un lager persan brillant et doré, dans une bouteille émeraude profonde, couronnée de l’emblème solaire royal. Vif, net, glacé — pour les rooftops, les grandes villes et les week-ends lents.',
      vi: 'Một dòng lager Ba Tư vàng óng, đựng trong chai thủy tinh ngọc lục bảo sâu, đỉnh dấu huy hiệu mặt trời hoàng gia. Sạch, lạnh, sảng khoái — dành cho sân thượng và đô thị.',
      fa: 'یک لاگر پارسی روشن و طلایی، در بطری شیشه‌ای زمردی ژرف و تاج‌گذاری شده با نشان خورشید سلطنتی. تمیز، سرد و پاکیزه — برای بام‌های شهر و آخرهفته‌های آرام.',
    },
    identity: {
      en: [
        'Emerald green & gold luxury styling',
        'Royal Persian sun emblem',
        'Cold cinematic premium beer atmosphere',
        'Modern Persian premium lager identity',
      ],
      fr: [
        'Stylisme vert émeraude & or de luxe',
        'Emblème solaire royal persan',
        'Atmosphère bière premium glacée et cinéma',
        'Identité lager persane moderne',
      ],
      vi: [
        'Phối màu ngọc lục bảo và vàng cao cấp',
        'Huy hiệu mặt trời hoàng gia Ba Tư',
        'Không khí bia cao cấp lạnh điện ảnh',
        'Bản sắc lager Ba Tư hiện đại',
      ],
      fa: [
        'استایلینگ مجلل سبز زمردی و طلایی',
        'نشان خورشید سلطنتی پارسی',
        'فضای آبجوی ممتاز سرد و سینمایی',
        'هویت لاگر مدرن پارسی',
      ],
    },
    mood: {
      en: ['Energetic', 'Modern nightlife', 'Premium social atmosphere', 'Young luxury audience'],
      fr: ['Énergique', 'Vie nocturne moderne', 'Ambiance sociale premium', 'Public jeune et luxe'],
      vi: ['Tràn năng lượng', 'Đêm hiện đại', 'Không khí xã giao cao cấp', 'Khán giả trẻ sang trọng'],
      fa: ['پرانرژی', 'شب‌زندگی مدرن', 'فضای اجتماعی ممتاز', 'مخاطب جوانِ مجلل'],
    },
  },

  {
    slug: 'shams-beer-can',
    sku: 'SHB-CAN-355',
    category: 'beer',
    format: { value: '355ml', glass: 'can' },
    abv: '5%',
    image: '/products/shams-can.jpeg',
    order: 6,
    theme: {
      name: 'emerald-can',
      bg: 'from-emerald-deep via-emerald to-matte-900',
      accent: '#e8d4a0',
      panel: 'bg-emerald-deep/85',
    },
    name: {
      en: 'Shams Beer — Premium Can',
      fr: 'Shams Beer — Canette Premium',
      vi: 'Shams Beer — Lon Cao Cấp',
      fa: 'آبجو شمس — قوطی ممتاز',
    },
    type: {
      en: 'Premium Persian Lager',
      fr: 'Lager Persan Premium',
      vi: 'Bia Lager Ba Tư Cao Cấp',
      fa: 'لاگر ممتاز پارسی',
    },
    tagline: {
      en: 'A pocket-sized icon of modern Persian luxury.',
      fr: 'Une icône au format de poche du luxe persan moderne.',
      vi: 'Biểu tượng gọn gàng của sang trọng Ba Tư hiện đại.',
      fa: 'یک نماد جیبی از تجمل مدرن پارسی.',
    },
    description: {
      en: 'The same crisp, emerald-and-gold Shams lager, dressed for the journey — a sleek 250ml can, designed for festival skylines, beach clubs and rooftop terraces.',
      fr: 'Le même lager Shams émeraude et or, prêt pour le voyage — une canette 250 ml affûtée, dessinée pour les skylines de festival et les rooftops.',
      vi: 'Vẫn là Shams lager ngọc lục bảo và vàng quen thuộc, sẵn sàng cho hành trình — một lon 250ml mảnh mai, dành cho festival, beach club và sân thượng.',
      fa: 'همان لاگر شمسِ زمردی-طلایی، آمادهٔ سفر — یک قوطی ۲۵۰ میلی‌لیتری شکیل، طراحی‌شده برای فستیوال‌ها، بیچ‌کلاب‌ها و تراس‌های بام.',
    },
    identity: {
      en: [
        'Emerald green & gold luxury styling',
        'Royal Persian sun emblem',
        'Modern Persian premium lager identity',
        'Premium portable format',
      ],
      fr: [
        'Stylisme émeraude & or de luxe',
        'Emblème solaire royal persan',
        'Identité lager persane moderne',
        'Format portable premium',
      ],
      vi: [
        'Phối màu ngọc lục bảo và vàng',
        'Huy hiệu mặt trời hoàng gia',
        'Bản sắc lager Ba Tư hiện đại',
        'Định dạng di động cao cấp',
      ],
      fa: [
        'استایلینگ زمردی و طلایی',
        'نشان خورشید سلطنتی',
        'هویت لاگر مدرن پارسی',
        'بسته‌بندی قابل‌حمل ممتاز',
      ],
    },
    mood: {
      en: ['Energetic', 'Modern nightlife', 'Premium social atmosphere', 'Young luxury audience'],
      fr: ['Énergique', 'Vie nocturne moderne', 'Ambiance sociale premium', 'Public jeune et luxe'],
      vi: ['Tràn năng lượng', 'Đêm hiện đại', 'Không khí xã giao cao cấp', 'Khán giả trẻ sang trọng'],
      fa: ['پرانرژی', 'شب‌زندگی مدرن', 'فضای اجتماعی ممتاز', 'مخاطب جوانِ مجلل'],
    },
  },
];

/** Lookup a product by its slug. Returns undefined when unknown. */
export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Get related products (same category, exclude self). */
export function getRelatedProducts(product, max = 3) {
  if (!product) return [];
  return PRODUCTS
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .concat(PRODUCTS.filter((p) => p.slug !== product.slug && p.category !== product.category))
    .slice(0, max);
}