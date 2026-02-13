export type Language = 'en' | 'vi';

type TranslationSet = {
  nav: {
    about: string;
    menu: string;
    reviews: string;
    contact: string;
    tdee: string;
    order: string;
  };
  hero: {
    tagline: string;
    title1: string;
    title2: string;
    description: string;
    cta: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  menu: {
    label: string;
    title: string;
    description: string;
    orderOnline: string;
    pokeName: string;
    pokeDesc: string;
    smoothieName: string;
    smoothieDesc: string;
    nutButterName: string;
    nutButterDesc: string;
    granolaName: string;
    granolaDesc: string;
    nutMilkName: string;
    nutMilkDesc: string;
    cakesName: string;
    cakesDesc: string;
  };
  reviews: {
    label: string;
    title: string;
    rating: string;
  };
  orderBanner: {
    title: string;
    description: string;
    cta: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    address: string;
    phone: string;
    hours: string;
    openDaily: string;
    openInMaps: string;
    orderOnline: string;
    facebookPage: string;
  };
  footer: {
    tagline: string;
    order: string;
    facebook: string;
    directions: string;
    callUs: string;
  };
  tdee: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    intro: string;
    goal: string;
    goalLose: string;
    goalGain: string;
    goalMaintain: string;
    gender: string;
    male: string;
    female: string;
    age: string;
    ageUnit: string;
    height: string;
    heightUnit: string;
    weight: string;
    weightUnit: string;
    activity: string;
    activity1: string;
    activity2: string;
    activity3: string;
    activity4: string;
    activity5: string;
    weightChange: string;
    rate: string;
    rateSlow: string;
    rateNormal: string;
    rateFast: string;
    calculate: string;
    resultGoalLabel: string;
    resultGoalHint: string;
    resultTdeeLabel: string;
    resultTdeeHint: string;
    resultBmrLabel: string;
    resultBmrHint: string;
    estimatedTimeLose: string;
    estimatedTimeGain: string;
    orAbout: string;
    weeksAndDays: string;
    fromToday: string;
    mealplanSubtitle: string;
    mealplanCta: string;
    mealplanHint: string;
    backToCalculator: string;
  };
};

export const translations: Record<Language, TranslationSet> = {
  en: {
    nav: {
      about: 'About',
      menu: 'Menu',
      reviews: 'Reviews',
      contact: 'Visit Us',
      tdee: 'Meal Plan',
      order: 'Order Now',
    },
    hero: {
      tagline: 'Fresh \u2022 Healthy \u2022 Homemade',
      title1: 'Nourish Your Body,',
      title2: 'Delight Your Soul',
      description:
        'Poke bowls, smoothie bowls, fresh juices, artisan coffee, homemade cakes, nut milks & more \u2014 crafted with love in the heart of Tay Ho.',
      cta: 'View Menu & Order',
    },
    about: {
      label: 'Our Story',
      title: 'A Little Corner of Wellness',
      description:
        'Tucked away on a quiet lane off Xuan Dieu, Song Linh Bistro is where healthy eating meets Vietnamese hospitality. We believe that good food should be simple, fresh, and made from the heart.',
      feature1Title: 'Fresh & Natural',
      feature1Desc:
        'Every ingredient is carefully selected for freshness. No preservatives, no artificial flavors \u2014 just pure, wholesome goodness.',
      feature2Title: 'Made with Love',
      feature2Desc:
        'From our homemade granola to our nut butters, everything is crafted in small batches with genuine care and passion.',
      feature3Title: 'Cozy Atmosphere',
      feature3Desc:
        'Settle into our charming upstairs seating in a peaceful alley off Xuan Dieu, and maybe meet our adorable resident cat.',
    },
    menu: {
      label: 'What We Serve',
      title: 'Crafted with Care',
      description:
        'From colorful poke bowls to creamy nut butters, every item is handmade with the freshest ingredients.',
      orderOnline: 'Order Online',
      pokeName: 'Poke Bowls',
      pokeDesc: 'Build your perfect bowl with fresh, vibrant ingredients and house-made sauces.',
      smoothieName: 'Smoothie Bowls',
      smoothieDesc: 'Thick, fruity blends topped with granola, fresh fruits, and superfoods.',
      nutButterName: 'Nut Butters',
      nutButterDesc: 'Handmade peanut & cashew butters \u2014 pure, creamy, and nothing artificial.',
      granolaName: 'Homemade Granola',
      granolaDesc: 'Crunchy clusters of oats, nuts, and seeds, baked to golden perfection.',
      nutMilkName: 'Nut Milks',
      nutMilkDesc: 'Fresh almond & cashew milk made daily \u2014 no additives, just pure nutrition.',
      cakesName: 'Cakes & Treats',
      cakesDesc: 'Wholesome baked goods and nougat treats, perfect with your afternoon coffee.',
    },
    reviews: {
      label: 'What People Say',
      title: 'Loved by Our Guests',
      rating: '4.6 out of 5 (132 reviews) on Google',
    },
    orderBanner: {
      title: 'Hungry? Order Online Now',
      description:
        'Browse our full menu, customize your bowl, and get fresh food delivered to your door \u2014 or pick it up on the way.',
      cta: 'Order Now',
    },
    contact: {
      label: 'Find Us',
      title: 'Come Say Hello',
      description:
        "We're on a cozy lane just off Xuan Dieu \u2014 look for the green sign and follow the aroma.",
      address: 'Address',
      phone: 'Phone',
      hours: 'Hours',
      openDaily: 'Open daily',
      openInMaps: 'Open in Google Maps',
      orderOnline: 'Order Online',
      facebookPage: 'Facebook Page',
    },
    footer: {
      tagline: 'Song Linh Bistro \u2014 Fresh & healthy in Tay Ho',
      order: 'Order',
      facebook: 'Facebook',
      directions: 'Directions',
      callUs: 'Call Us',
    },
    tdee: {
      sectionLabel: '',
      title: 'PERSONALIZED MEAL PLAN',
      subtitle: 'Calculate your needs, then let us build the perfect plan for you',
      intro: '',
      goal: 'GOAL',
      goalLose: 'Lose fat',
      goalGain: 'Gain muscle',
      goalMaintain: 'Maintain',
      gender: 'GENDER',
      male: 'Male',
      female: 'Female',
      age: 'AGE',
      ageUnit: 'years',
      height: 'HEIGHT',
      heightUnit: 'cm',
      weight: 'WEIGHT',
      weightUnit: 'kg',
      activity: 'ACTIVITY LEVEL',
      activity1: 'Sedentary',
      activity2: 'Light exercise 1-2x/week',
      activity3: 'Moderate exercise 4-5x/week',
      activity4: 'Heavy exercise 6-7x/week',
      activity5: 'Very active, physical job',
      weightChange: 'WEIGHT GOAL',
      rate: 'RATE OF CHANGE',
      rateSlow: 'Slow',
      rateNormal: 'Normal',
      rateFast: 'Fast',
      calculate: 'CALCULATE TDEE NOW',
      resultGoalLabel: 'EAT THIS MANY CALORIES PER DAY',
      resultGoalHint: 'Follow this daily target to reach your goal',
      resultTdeeLabel: 'YOU BURN',
      resultTdeeHint: 'total calories your body uses per day',
      resultBmrLabel: 'AT REST YOU BURN',
      resultBmrHint: 'calories your body needs just to stay alive',
      estimatedTimeLose: 'Estimated time to lose',
      estimatedTimeGain: 'Estimated time to gain',
      orAbout: 'or about',
      weeksAndDays: 'weeks and',
      fromToday: 'days from today',
      mealplanSubtitle: 'Don\u2019t do it alone. Our nutrition experts will craft a meal plan tailored to your exact numbers \u2014 delivered straight to your door from Song Linh Bistro.',
      mealplanCta: 'Get My Personalized Meal Plan',
      mealplanHint: 'Opens WhatsApp \u2014 your results will be sent to Song Linh Bistro so we can create your plan',
      backToCalculator: 'Recalculate',
    },
  },
  vi: {
    nav: {
      about: 'Gi\u1edbi thi\u1ec7u',
      menu: 'Th\u1ef1c \u0111\u01a1n',
      reviews: '\u0110\u00e1nh gi\u00e1',
      contact: 'Li\u00ean h\u1ec7',
      tdee: 'Meal Plan',
      order: '\u0110\u1eb7t h\u00e0ng',
    },
    hero: {
      tagline: 'T\u01b0\u01a1i \u2022 L\u00e0nh m\u1ea1nh \u2022 T\u1ef1 l\u00e0m',
      title1: 'Nu\u00f4i d\u01b0\u1ee1ng c\u01a1 th\u1ec3,',
      title2: 'Th\u1ecfa m\u00e3n t\u00e2m h\u1ed3n',
      description:
        'Poke bowl, smoothie bowl, n\u01b0\u1edbc \u00e9p t\u01b0\u01a1i, c\u00e0 ph\u00ea th\u1ee7 c\u00f4ng, b\u00e1nh t\u1ef1 l\u00e0m, s\u1eefa h\u1ea1t & nhi\u1ec1u h\u01a1n n\u1eefa \u2014 \u0111\u01b0\u1ee3c ch\u1ebf bi\u1ebfn v\u1edbi t\u00ecnh y\u00eau t\u1ea1i T\u00e2y H\u1ed3.',
      cta: 'Xem th\u1ef1c \u0111\u01a1n & \u0110\u1eb7t h\u00e0ng',
    },
    about: {
      label: 'C\u00e2u chuy\u1ec7n c\u1ee7a ch\u00fang t\u00f4i',
      title: 'G\u00f3c nh\u1ecf cho s\u1ee9c kh\u1ecfe',
      description:
        '\u1ea8n m\u00ecnh tr\u00ean m\u1ed9t con ng\u00f5 y\u00ean t\u0129nh g\u1ea7n Xu\u00e2n Di\u1ec7u, Song Linh Bistro l\u00e0 n\u01a1i \u1ea9m th\u1ef1c l\u00e0nh m\u1ea1nh g\u1eb7p g\u1ee1 l\u00f2ng hi\u1ebfu kh\u00e1ch Vi\u1ec7t Nam. Ch\u00fang t\u00f4i tin r\u1eb1ng \u0111\u1ed3 \u0103n ngon n\u00ean \u0111\u01a1n gi\u1ea3n, t\u01b0\u01a1i m\u1edbi v\u00e0 \u0111\u01b0\u1ee3c l\u00e0m t\u1eeb tr\u00e1i tim.',
      feature1Title: 'T\u01b0\u01a1i & T\u1ef1 nhi\u00ean',
      feature1Desc:
        'M\u1ecdi nguy\u00ean li\u1ec7u \u0111\u01b0\u1ee3c ch\u1ecdn l\u1ecdc k\u1ef9 l\u01b0\u1ee1ng. Kh\u00f4ng ch\u1ea5t b\u1ea3o qu\u1ea3n, kh\u00f4ng h\u01b0\u01a1ng v\u1ecb nh\u00e2n t\u1ea1o \u2014 ch\u1ec9 c\u00f3 s\u1ef1 tinh khi\u1ebft v\u00e0 l\u00e0nh m\u1ea1nh.',
      feature2Title: 'L\u00e0m b\u1eb1ng t\u00ecnh y\u00eau',
      feature2Desc:
        'T\u1eeb granola t\u1ef1 l\u00e0m \u0111\u1ebfn b\u01a1 h\u1ea1t, m\u1ecdi th\u1ee9 \u0111\u01b0\u1ee3c ch\u1ebf bi\u1ebfn th\u1ee7 c\u00f4ng v\u1edbi s\u1ef1 ch\u0103m ch\u00fat v\u00e0 \u0111am m\u00ea th\u1ef1c s\u1ef1.',
      feature3Title: 'Kh\u00f4ng gian \u1ea5m c\u00fang',
      feature3Desc:
        'Th\u01b0 gi\u00e3n t\u1ea1i t\u1ea7ng tr\u00ean \u0111\u1ea7y quy\u1ebfn r\u0169 trong m\u1ed9t con h\u1ebb y\u00ean b\u00ecnh g\u1ea7n Xu\u00e2n Di\u1ec7u, v\u00e0 c\u00f3 th\u1ec3 g\u1eb7p ch\u00fa m\u00e8o \u0111\u00e1ng y\u00eau c\u1ee7a ch\u00fang t\u00f4i.',
    },
    menu: {
      label: 'Ch\u00fang t\u00f4i ph\u1ee5c v\u1ee5',
      title: 'Ch\u1ebf bi\u1ebfn t\u1eadn t\u00e2m',
      description:
        'T\u1eeb nh\u1eefng poke bowl \u0111\u1ea7y m\u00e0u s\u1eafc \u0111\u1ebfn b\u01a1 h\u1ea1t b\u00e9o ng\u1eady, m\u1ecdi m\u00f3n \u0111\u1ec1u \u0111\u01b0\u1ee3c l\u00e0m th\u1ee7 c\u00f4ng t\u1eeb nguy\u00ean li\u1ec7u t\u01b0\u01a1i nh\u1ea5t.',
      orderOnline: '\u0110\u1eb7t h\u00e0ng online',
      pokeName: 'Poke Bowl',
      pokeDesc: 'T\u1ef1 ch\u1ecdn bowl ho\u00e0n h\u1ea3o v\u1edbi nguy\u00ean li\u1ec7u t\u01b0\u01a1i v\u00e0 s\u1ed1t \u0111\u1eb7c bi\u1ec7t.',
      smoothieName: 'Smoothie Bowl',
      smoothieDesc: 'Sinh t\u1ed1 \u0111\u1eb7c s\u00e1nh top granola, tr\u00e1i c\u00e2y t\u01b0\u01a1i v\u00e0 superfood.',
      nutButterName: 'B\u01a1 h\u1ea1t',
      nutButterDesc: 'B\u01a1 \u0111\u1eadu ph\u1ed9ng & h\u1ea1t \u0111i\u1ec1u th\u1ee7 c\u00f4ng \u2014 tinh khi\u1ebft, b\u00e9o ng\u1eady, 100% t\u1ef1 nhi\u00ean.',
      granolaName: 'Granola t\u1ef1 l\u00e0m',
      granolaDesc: 'Y\u1ebfn m\u1ea1ch, h\u1ea1t & h\u1ea1t gi\u1ed1ng gi\u00f2n r\u1ee5m, n\u01b0\u1edbng v\u00e0ng ho\u00e0n h\u1ea3o.',
      nutMilkName: 'S\u1eefa h\u1ea1t',
      nutMilkDesc: 'S\u1eefa h\u1ea1nh nh\u00e2n & h\u1ea1t \u0111i\u1ec1u t\u01b0\u01a1i m\u1ed7i ng\u00e0y \u2014 kh\u00f4ng ph\u1ee5 gia, dinh d\u01b0\u1ee1ng thu\u1ea7n khi\u1ebft.',
      cakesName: 'B\u00e1nh & \u0110\u1ed3 ng\u1ecdt',
      cakesDesc: 'B\u00e1nh l\u00e0nh m\u1ea1nh v\u00e0 nougat, ho\u00e0n h\u1ea3o cho bu\u1ed5i chi\u1ec1u c\u00e0 ph\u00ea.',
    },
    reviews: {
      label: 'Kh\u00e1ch h\u00e0ng n\u00f3i g\u00ec',
      title: '\u0110\u01b0\u1ee3c y\u00eau th\u00edch b\u1edfi kh\u00e1ch h\u00e0ng',
      rating: '4.6 tr\u00ean 5 (132 \u0111\u00e1nh gi\u00e1) tr\u00ean Google',
    },
    orderBanner: {
      title: '\u0110\u00f3i b\u1ee5ng? \u0110\u1eb7t h\u00e0ng online ngay',
      description:
        'Xem to\u00e0n b\u1ed9 th\u1ef1c \u0111\u01a1n, t\u00f9y ch\u1ec9nh bowl c\u1ee7a b\u1ea1n v\u00e0 nh\u1eadn \u0111\u1ed3 \u0103n t\u01b0\u01a1i giao t\u1eadn n\u01a1i \u2014 ho\u1eb7c gh\u00e9 l\u1ea5y tr\u00ean \u0111\u01b0\u1eddng.',
      cta: '\u0110\u1eb7t h\u00e0ng ngay',
    },
    contact: {
      label: 'T\u00ecm ch\u00fang t\u00f4i',
      title: 'Gh\u00e9 th\u0103m ch\u00fang t\u00f4i',
      description:
        'Ch\u00fang t\u00f4i \u1edf tr\u00ean m\u1ed9t con h\u1ebb \u0111\u1ea7y quy\u1ebfn r\u0169 g\u1ea7n Xu\u00e2n Di\u1ec7u \u2014 h\u00e3y t\u00ecm bi\u1ec3n xanh v\u00e0 \u0111i theo h\u01b0\u01a1ng th\u01a1m.',
      address: '\u0110\u1ecba ch\u1ec9',
      phone: '\u0110i\u1ec7n tho\u1ea1i',
      hours: 'Gi\u1edd m\u1edf c\u1eeda',
      openDaily: 'M\u1edf c\u1eeda h\u00e0ng ng\u00e0y',
      openInMaps: 'M\u1edf trong Google Maps',
      orderOnline: '\u0110\u1eb7t h\u00e0ng online',
      facebookPage: 'Trang Facebook',
    },
    footer: {
      tagline: 'Song Linh Bistro \u2014 T\u01b0\u01a1i & l\u00e0nh m\u1ea1nh t\u1ea1i T\u00e2y H\u1ed3',
      order: '\u0110\u1eb7t h\u00e0ng',
      facebook: 'Facebook',
      directions: 'Ch\u1ec9 \u0111\u01b0\u1eddng',
      callUs: 'G\u1ecdi cho ch\u00fang t\u00f4i',
    },
    tdee: {
      sectionLabel: '',
      title: 'KẾ HOẠCH ĂN UỐNG CÁ NHÂN',
      subtitle: 'Tính toán nhu cầu của bạn, rồi để chúng tôi tạo kế hoạch hoàn hảo',
      intro: '',
      goal: 'M\u1ee4C TI\u00caU',
      goalLose: 'Gi\u1ea3m m\u1ee1',
      goalGain: 'T\u0103ng c\u00e2n',
      goalMaintain: 'Duy tr\u00ec',
      gender: 'GI\u1edaI T\u00cdNH',
      male: 'Nam',
      female: 'N\u1eef',
      age: 'TU\u1ed4I',
      ageUnit: 'n\u0103m',
      height: 'CHI\u1ec0U CAO',
      heightUnit: 'cm',
      weight: 'C\u00c2N N\u1eb6NG',
      weightUnit: 'kg',
      activity: 'C\u01af\u1edcNG \u0110\u1ed8 T\u1eacP LUY\u1ec6N',
      activity1: '\u00cdt v\u1eadn \u0111\u1ed9ng',
      activity2: 'V\u1eadn \u0111\u1ed9ng nh\u1eb9 1-2 bu\u1ed5i',
      activity3: 'C\u00f3 v\u1eadn \u0111\u1ed9ng v\u1eeba 4-5 bu\u1ed5i',
      activity4: 'V\u1eadn \u0111\u1ed9ng nhi\u1ec1u 6-7 bu\u1ed5i',
      activity5: 'V\u1eadn \u0111\u1ed9ng r\u1ea5t nhi\u1ec1u',
      weightChange: 'C\u00c2N N\u1eb6NG M\u1ee4C TI\u00caU',
      rate: 'T\u1ed0C \u0110\u1ed8 T\u0102NG/GI\u1ea2M C\u00c2N',
      rateSlow: 'Ch\u1eadm',
      rateNormal: 'B\u00ecnh th\u01b0\u1eddng',
      rateFast: 'Nhanh',
      calculate: 'T\u00cdNH TDEE NGAY',
      resultGoalLabel: 'ĂN BAO NHIÊU CALO MỖI NGÀY',
      resultGoalHint: 'Theo mục tiêu hàng ngày này để đạt kết quả',
      resultTdeeLabel: 'BẠN ĐỐT CHÁY',
      resultTdeeHint: 'tổng calo cơ thể tiêu hao mỗi ngày',
      resultBmrLabel: 'KHI NGHỈ NGƠI',
      resultBmrHint: 'calo cơ thể cần chỉ để duy trì sự sống',
      estimatedTimeLose: 'Dự tính thời gian giảm',
      estimatedTimeGain: 'Dự tính thời gian tăng',
      orAbout: 'hoặc,',
      weeksAndDays: 'tuần',
      fromToday: 'ngày từ hôm nay',
      mealplanSubtitle: '\u0110\u1eebng l\u00e0m m\u1ed9t m\u00ecnh. Chuy\u00ean gia dinh d\u01b0\u1ee1ng c\u1ee7a ch\u00fang t\u00f4i s\u1ebd t\u1ea1o th\u1ef1c \u0111\u01a1n ph\u00f9 h\u1ee3p v\u1edbi ch\u1ec9 s\u1ed1 c\u1ee7a b\u1ea1n \u2014 giao t\u1eadn n\u01a1i t\u1eeb Song Linh Bistro.',
      mealplanCta: 'Nh\u1eadn meal plan c\u00e1 nh\u00e2n ngay',
      mealplanHint: 'M\u1edf WhatsApp \u2014 k\u1ebft qu\u1ea3 c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ebfn Song Linh Bistro \u0111\u1ec3 t\u1ea1o k\u1ebf ho\u1ea1ch cho b\u1ea1n',
      backToCalculator: 'T\u00ednh l\u1ea1i',
    },
  },
};
