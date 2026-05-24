var DEFAULT_PRODUCTS = [
    { id: 1, name: "حقيبة يد مبطنة كلاسيك", brand: "Chanel", category: "حقائب يد", sizes: [{ size: "واحد", unit: "قطعة", price: 650 }], discount: 0, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 2, name: "حقيبة يد GG ميني", brand: "Gucci", category: "حقائب يد", sizes: [{ size: "واحد", unit: "قطعة", price: 520 }], discount: 0, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop", status: "special" },
    { id: 3, name: "حقيبة يد مونوجرام فاخرة", brand: "Louis Vuitton", category: "حقائب يد", sizes: [{ size: "واحد", unit: "قطعة", price: 610 }], discount: 5, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 4, name: "حقيبة ليدي ديور", brand: "Dior", category: "حقائب يد", sizes: [{ size: "واحد", unit: "قطعة", price: 580 }], discount: 0, image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=400&fit=crop", status: "normal" },
    { id: 5, name: "حقيبة جلدية أنيقة", brand: "Prada", category: "حقائب يد", sizes: [{ size: "واحد", unit: "قطعة", price: 540 }], discount: 10, image: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=400&h=400&fit=crop", status: "special" },
    { id: 6, name: "حقيبة يد يومية فاخرة", brand: "Michael Kors", category: "حقائب يد", sizes: [{ size: "واحد", unit: "قطعة", price: 360 }], discount: 0, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop", status: "normal" },
    { id: 7, name: "حقيبة كتف بسلسلة ذهبية", brand: "Chanel", category: "حقائب كتف", sizes: [{ size: "واحد", unit: "قطعة", price: 430 }], discount: 0, image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 8, name: "حقيبة كتف روز", brand: "Gucci", category: "حقائب كتف", sizes: [{ size: "واحد", unit: "قطعة", price: 390 }], discount: 0, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", status: "normal" },
    { id: 9, name: "حقيبة كتف مونوجرام", brand: "Louis Vuitton", category: "حقائب كتف", sizes: [{ size: "واحد", unit: "قطعة", price: 450 }], discount: 0, image: "https://images.unsplash.com/photo-1614179689702-355944cd0918?w=400&h=400&fit=crop", status: "special" },
    { id: 10, name: "حقيبة كتف سوهو", brand: "Prada", category: "حقائب كتف", sizes: [{ size: "واحد", unit: "قطعة", price: 410 }], discount: 0, image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop", status: "normal" },
    { id: 11, name: "جزدان نسائي صغير", brand: "Chanel", category: "جزادين نسائية", sizes: [{ size: "واحد", unit: "قطعة", price: 180 }], discount: 0, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop", status: "normal" },
    { id: 12, name: "محفظة نسائية جلد", brand: "Gucci", category: "جزادين نسائية", sizes: [{ size: "واحد", unit: "قطعة", price: 220 }], discount: 0, image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 13, name: "جزدان بسحاب مونوجرام", brand: "Louis Vuitton", category: "جزادين نسائية", sizes: [{ size: "واحد", unit: "قطعة", price: 250 }], discount: 5, image: "https://images.unsplash.com/photo-1612902456551-071b20047ba7?w=400&h=400&fit=crop", status: "special" },
    { id: 14, name: "ساعة نسائية كلاسيكية", brand: "Dior", category: "ساعات", sizes: [{ size: "واحد", unit: "قطعة", price: 420 }], discount: 0, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop", status: "normal" },
    { id: 15, name: "ساعة يد ذهبية", brand: "Michael Kors", category: "ساعات", sizes: [{ size: "واحد", unit: "قطعة", price: 360 }], discount: 0, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 16, name: "ساعة جلد أسود", brand: "Prada", category: "ساعات", sizes: [{ size: "واحد", unit: "قطعة", price: 330 }], discount: 0, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&h=400&fit=crop", status: "normal" },
    { id: 17, name: "ساعة فاخرة بلمسة ذهبية", brand: "Chanel", category: "ساعات", sizes: [{ size: "واحد", unit: "قطعة", price: 450 }], discount: 10, image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&h=400&fit=crop", status: "special" },
    { id: 18, name: "نظارة شمسية أنيقة", brand: "Chanel", category: "إكسسوارات", sizes: [{ size: "واحد", unit: "قطعة", price: 140 }], discount: 0, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop", status: "normal" },
    { id: 19, name: "نظارة شمسية عصرية", brand: "Gucci", category: "إكسسوارات", sizes: [{ size: "واحد", unit: "قطعة", price: 160 }], discount: 0, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 20, name: "حزام جلد فاخر", brand: "Louis Vuitton", category: "إكسسوارات", sizes: [{ size: "واحد", unit: "قطعة", price: 120 }], discount: 0, image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop", status: "normal" },
    { id: 21, name: "وشاح حريري مطبع", brand: "Dior", category: "إكسسوارات", sizes: [{ size: "واحد", unit: "قطعة", price: 95 }], discount: 0, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop", status: "special" },
    { id: 22, name: "بكج هدية فاخر", brand: "Classic Store", category: "هدايا/بكج", sizes: [{ size: "واحد", unit: "قطعة", price: 290 }], discount: 0, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 23, name: "بكج ساعة ومحفظة", brand: "Michael Kors", category: "هدايا/بكج", sizes: [{ size: "واحد", unit: "قطعة", price: 390 }], discount: 0, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop", status: "special" },
    { id: 24, name: "بكج حقيبة وإكسسوار", brand: "Chanel", category: "هدايا/بكج", sizes: [{ size: "واحد", unit: "قطعة", price: 480 }], discount: 10, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop", status: "special" }
];

var DEFAULT_DISCOUNTS = [];

var DEFAULT_SITE_SETTINGS = {
    whatsappNumber: '972569236758',
    heroSubtitle: 'حقائب وإكسسوارات ماستر كوبي بأعلى جودة',
    aboutText: 'كلاسيك ستور - متجرك المفضل لأجمل الحقائب والإكسسوارات\n\nنوفر لكِ أفخم الحقائب وأجمل الإكسسوارات بجودة عالية وأسعار منافسة\nخدمة توصيل لكل مناطق الضفة والداخل',
    instagramLink: 'https://www.instagram.com/classicstoreklsyk/',
    tiktokLink: ''
};

var BRANDS_DATA = [
    { name: 'Chanel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chanel_logo-no-words.svg/200px-Chanel_logo-no-words.svg.png' },
    { name: 'Gucci', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1960s_Gucci_Logo.svg/200px-1960s_Gucci_Logo.svg.png' },
    { name: 'Louis Vuitton', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Louis_Vuitton_logo_and_wordmark.svg/200px-Louis_Vuitton_logo_and_wordmark.svg.png' },
    { name: 'Dior', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dior_Logo.svg/200px-Dior_Logo.svg.png' },
    { name: 'Prada', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/200px-Prada-Logo.svg.png' },
    { name: 'Michael Kors', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Michael_Kors_logo.svg/200px-Michael_Kors_logo.svg.png' }
];

function normalizeSizeEntry(entry) {
    if (!entry) return { size: 'واحد', unit: 'قطعة', price: 0 };
    var unit = entry.unit === 'g' ? 'g' : (entry.unit === 'قطعة' ? 'قطعة' : 'ml');
    return {
        size: String(entry.size || 'واحد').trim() || 'واحد',
        unit: unit,
        price: Number(entry.price) || 0
    };
}

function normalizeProduct(product) {
    var sizes = Array.isArray(product && product.sizes) && product.sizes.length
        ? product.sizes.map(normalizeSizeEntry)
        : [normalizeSizeEntry({ size: product && product.size, unit: product && product.unit, price: product && product.price })];

    return {
        id: Number(product && product.id) || Date.now(),
        name: (product && product.name) || '',
        brand: (product && product.brand) || '',
        category: (product && product.category) || '',
        sizes: sizes.filter(function (size) { return size.size && size.price >= 0; }),
        discount: Number(product && product.discount) || 0,
        image: (product && product.image) || '',
        status: (product && product.status) || 'normal'
    };
}

function normalizeProducts(list) {
    return (Array.isArray(list) ? list : []).map(normalizeProduct).sort(function (a, b) { return a.id - b.id; });
}

function normalizeDiscount(discount) {
    var values = [];
    if (discount && discount.values && Array.isArray(discount.values)) {
        values = discount.values;
    } else if (discount && discount.value) {
        values = String(discount.value).split(',').map(function (v) { return v.trim(); }).filter(Boolean);
    }
    return {
        id: String(discount && discount.id ? discount.id : Date.now()),
        type: ['brand', 'category', 'manual', 'all'].indexOf(discount && discount.type) >= 0 ? discount.type : 'manual',
        value: values.join(', '),
        values: values,
        percentage: Number(discount && discount.percentage) || 0,
        description: String(discount && discount.description ? discount.description : '').trim(),
        expiresAt: discount && discount.expiresAt ? discount.expiresAt : ''
    };
}

function normalizeDiscounts(list) {
    return (Array.isArray(list) ? list : []).map(normalizeDiscount);
}

function extractWhatsappNumber(input) {
    var raw = String(input || '').trim();
    if (!raw) return DEFAULT_SITE_SETTINGS.whatsappNumber;
    var fromLink = raw.indexOf('wa.me/') >= 0 ? raw.split('wa.me/')[1] : raw;
    return fromLink.replace(/[^\d]/g, '');
}

function buildWhatsAppUrl(number, message) {
    var safeNumber = extractWhatsappNumber(number);
    var text = message ? '?text=' + encodeURIComponent(message) : '';
    return 'https://wa.me/' + safeNumber + text;
}

function normalizeSettings(settings) {
    var source = settings || {};
    return {
        whatsappNumber: extractWhatsappNumber(source.whatsappNumber || source.whatsappLink || DEFAULT_SITE_SETTINGS.whatsappNumber),
        heroSubtitle: String(source.heroSubtitle || DEFAULT_SITE_SETTINGS.heroSubtitle),
        aboutText: String(source.aboutText || DEFAULT_SITE_SETTINGS.aboutText),
        instagramLink: String(source.instagramLink || DEFAULT_SITE_SETTINGS.instagramLink),
        tiktokLink: String(source.tiktokLink || DEFAULT_SITE_SETTINGS.tiktokLink)
    };
}

function getSizeData(product, sizeIdx) {
    if (!product || !Array.isArray(product.sizes) || !product.sizes.length) return { size: 'واحد', unit: 'قطعة', price: 0 };
    var safeIndex = Math.max(0, Math.min(Number(sizeIdx) || 0, product.sizes.length - 1));
    return product.sizes[safeIndex];
}

function getUnitLabel(unit) {
    if (unit === 'g') return 'غرام';
    if (unit === 'قطعة') return '';
    return 'مل';
}

function getSizeLabel(sizeData) {
    var label = getUnitLabel(sizeData.unit);
    if (!label) return String(sizeData.size);
    return String(sizeData.size) + ' ' + label;
}

function getProductDiscountPercent(product, discounts) {
    var discountPercent = Number(product && product.discount) || 0;
    var now = new Date().toISOString().slice(0, 10);
    normalizeDiscounts(discounts).forEach(function (discount) {
        if (discount.expiresAt && discount.expiresAt < now) return;
        if (discount.type === 'all') discountPercent = Math.max(discountPercent, discount.percentage);
        if (discount.type === 'brand' && discount.values.indexOf(product.brand) >= 0) discountPercent = Math.max(discountPercent, discount.percentage);
        if (discount.type === 'category' && discount.values.indexOf(product.category) >= 0) discountPercent = Math.max(discountPercent, discount.percentage);
    });
    return discountPercent;
}

function getFinalPrice(product, sizeIdx, discounts) {
    var sizeData = getSizeData(product, sizeIdx);
    var discountPercent = getProductDiscountPercent(product, discounts || []);
    if (discountPercent > 0) {
        return {
            original: Number(sizeData.price) || 0,
            final: Math.round((Number(sizeData.price) || 0) * (1 - discountPercent / 100)),
            hasDiscount: true,
            discountPercent: discountPercent
        };
    }

    return {
        original: Number(sizeData.price) || 0,
        final: Number(sizeData.price) || 0,
        hasDiscount: false,
        discountPercent: 0
    };
}

function normalizeCartItems(cartItems, productsList) {
    var safeProducts = Array.isArray(productsList) ? productsList : normalizeProducts(DEFAULT_PRODUCTS);
    return (Array.isArray(cartItems) ? cartItems : []).map(function (item) {
        var product = safeProducts.find(function (entry) { return entry.id === Number(item.id || item.productId); });
        var maxSizeIndex = product && product.sizes.length ? product.sizes.length - 1 : 0;
        var requestedSize = Number.isInteger(item.sizeIdx) ? item.sizeIdx : parseInt(item.sizeIdx || 0, 10) || 0;
        var sizeIdx = Math.max(0, Math.min(requestedSize, maxSizeIndex));
        return {
            id: Number(item.id || item.productId),
            sizeIdx: sizeIdx,
            qty: Math.max(1, parseInt(item.qty || 1, 10) || 1),
            price: Number(item.price) || (product ? getSizeData(product, sizeIdx).price : 0)
        };
    }).filter(function (item) {
        return item.id;
    });
}

function formatCurrency(value) {
    return '₪' + (Number(value) || 0);
}

function formatDateTime(dateValue) {
    var date = dateValue instanceof Date ? dateValue : new Date(dateValue);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleString('ar-PS', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function makeOrderId() {
    var alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    var code = '';
    for (var idx = 0; idx < 5; idx += 1) {
        code += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return 'ORD-' + code;
}
