<template>
  <div class="pricing-page">
    <Typo is="h1" variant="h1" class="text-center mb-12 font-display">
      {{ t('title') }}
    </Typo>

    <PricingTable :title="t('pricingTitle')" :categories="pricingData" />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })

useSeoMeta({
  title: () => t('seoTitle'),
  description: () => t('seoDescription'),
  ogTitle: () => t('seoTitle'),
  ogDescription: () => t('seoDescription'),
})

const pricingData = computed(() => [
  {
    name: t('categories.lashes.name'),
    services: [
      { name: t('categories.lashes.services.tinting'), price: '10€' },
      {
        name: t('categories.lashes.services.lamination'),
        note: t('categories.lashes.services.laminationNote'),
        price: '35€'
      },
      {
        name: t('categories.lashes.services.combo'),
        note: t('categories.lashes.services.comboNote'),
        price: '60€'
      },
    ],
  },
  {
    name: t('categories.extensions.name'),
    services: [
      {
        name: t('categories.extensions.services.classic'),
        note: t('categories.extensions.services.classicNote'),
        price: '35€'
      },
      { name: t('categories.extensions.services.2d'), price: '40€' },
      { name: t('categories.extensions.services.3d'), price: '45€' },
      {
        name: t('categories.extensions.services.effects'),
        note: t('categories.extensions.services.effectsNote'),
        price: '+5€'
      },
      {
        name: t('categories.extensions.services.removal'),
        note: t('categories.extensions.services.removalNote'),
        price: '+5€'
      },
    ],
  },
  {
    name: t('categories.brows.name'),
    services: [
      { name: t('categories.brows.services.tinting'), price: '10€' },
      {
        name: t('categories.brows.services.tintingCorrection'),
        note: t('categories.brows.services.tintingCorrectionNote'),
        price: '15€'
      },
      {
        name: t('categories.brows.services.lamination'),
        note: t('categories.brows.services.laminationNote'),
        price: '35€'
      },
    ],
  },
  {
    name: t('categories.micropigmentation.name'),
    services: [
      { name: t('categories.micropigmentation.services.brows'), price: '120€' },
      { name: t('categories.micropigmentation.services.lips'), price: '120€' },
      { name: t('categories.micropigmentation.services.interlash'), price: '100€' },
    ],
  },
  {
    name: t('categories.manicure.name'),
    services: [
      { name: t('categories.manicure.services.hygienicWomen'), price: '20€' },
      { name: t('categories.manicure.services.men'), price: '25€' },
      { name: t('categories.manicure.services.withCoating'), price: '35€' },
      { name: t('categories.manicure.services.french'), price: '45€' },
      { name: t('categories.manicure.services.brokenNailRepair'), price: '2€' },
      { name: t('categories.manicure.services.gelExtension'), price: '60€' },
      { name: t('categories.manicure.services.acrylicRemoval'), price: '5€' },
      { name: t('categories.manicure.services.spaHandCare'), price: '15€' },
    ],
  },
  {
    name: t('categories.pedicure.name'),
    services: [
      { name: t('categories.pedicure.services.hygienicWomen'), price: '45€' },
      { name: t('categories.pedicure.services.withCoating'), price: '55€' },
      { name: t('categories.pedicure.services.men'), price: '50€' },
      { name: t('categories.pedicure.services.spaFootCare'), price: '20€' },
    ],
  },
  {
    name: t('categories.podology.name'),
    services: [
      { name: t('categories.podology.services.ingrownNail'), price: t('priceFrom', { price: '10€' }) },
      { name: t('categories.podology.services.hyperkeratosis'), price: t('priceFrom', { price: '10€' }) },
      { name: t('categories.podology.services.onychomycosis'), price: t('priceFrom', { price: '10€' }) },
      { name: t('categories.podology.services.calluses'), price: t('priceFrom', { price: '5€' }) },
      { name: t('categories.podology.services.callus'), price: '10€' },
      { name: t('categories.podology.services.nailProtection'), price: t('priceFrom', { price: '5€' }) },
      { name: t('categories.podology.services.crackTreatment'), price: '10€' },
      { name: t('categories.podology.services.titaniumThread'), price: '35€' },
    ],
  },
])
</script>

<i18n lang="json">
{
  "es": {
    "title": "Precios",
    "seoTitle": "Precios | Lash & Nails Santa Pola",
    "seoDescription": "Precios de servicios de belleza en Santa Pola - Extensiones de pestañas, manicura, pedicura, micropigmentación y más",
    "pricingTitle": "Nuestros Servicios y Precios",
    "priceFrom": "desde {price}",
    "categories": {
      "lashes": {
        "name": "Pestañas",
        "services": {
          "tinting": "Tinte de pestañas",
          "lamination": "Laminación de pestañas",
          "laminationNote": "(laminación + tinte)",
          "combo": "Combo: laminación de pestañas + laminación de cejas",
          "comboNote": "(corrección + tinte + laminación)"
        }
      },
      "extensions": {
        "name": "Extensiones",
        "services": {
          "classic": "Clásica",
          "classicNote": "(1.5-2 horas)",
          "2d": "2D",
          "3d": "3D",
          "effects": "Efectos",
          "effectsNote": "(efecto mojado, rayos, efecto L, pestañas de colores)",
          "removal": "Retirada de pestañas",
          "removalNote": "(si no se hace nueva extensión)"
        }
      },
      "brows": {
        "name": "Cejas",
        "services": {
          "tinting": "Tinte de cejas",
          "tintingCorrection": "Tinte + corrección de cejas",
          "tintingCorrectionNote": "",
          "lamination": "Laminación de cejas",
          "laminationNote": "(corrección + tinte)"
        }
      },
      "micropigmentation": {
        "name": "Micropigmentación",
        "services": {
          "brows": "Micropigmentación de cejas",
          "lips": "Micropigmentación de labios",
          "interlash": "Entrelíneas"
        }
      },
      "manicure": {
        "name": "Manicura",
        "services": {
          "hygienicWomen": "Manicura higiénica mujer",
          "men": "Manicura masculina",
          "withCoating": "Manicura con esmaltado",
          "french": "Manicura francesa",
          "brokenNailRepair": "Reparación de uña rota",
          "gelExtension": "Extensión con gel",
          "acrylicRemoval": "Retirada de acrílico",
          "spaHandCare": "Spa cuidado de manos"
        }
      },
      "pedicure": {
        "name": "Pedicura",
        "services": {
          "hygienicWomen": "Pedicura higiénica mujer",
          "withCoating": "Pedicura con esmaltado",
          "men": "Pedicura masculina",
          "spaFootCare": "Spa cuidado de pies"
        }
      },
      "podology": {
        "name": "Podología",
        "services": {
          "ingrownNail": "Eliminación de uña encarnada",
          "hyperkeratosis": "Tratamiento de hiperqueratosis",
          "onychomycosis": "Tratamiento de onicomicosis",
          "calluses": "Tratamiento de callos",
          "callus": "Eliminación de callo plantar",
          "nailProtection": "Prótesis de uña",
          "crackTreatment": "Tratamiento de grietas",
          "titaniumThread": "Instalación de hilo de titanio"
        }
      }
    }
  },
  "en": {
    "title": "Pricing",
    "seoTitle": "Pricing | Lash & Nails Santa Pola",
    "seoDescription": "Beauty services pricing in Santa Pola - Lash extensions, manicure, pedicure, micropigmentation and more",
    "pricingTitle": "Our Services and Pricing",
    "priceFrom": "from {price}",
    "categories": {
      "lashes": {
        "name": "Lashes",
        "services": {
          "tinting": "Lash tinting",
          "lamination": "Lash lamination",
          "laminationNote": "(lamination + tinting)",
          "combo": "Combo: lash lamination + brow lamination",
          "comboNote": "(correction + tinting + lamination)"
        }
      },
      "extensions": {
        "name": "Extensions",
        "services": {
          "classic": "Classic",
          "classicNote": "(1.5-2 hours)",
          "2d": "2D",
          "3d": "3D",
          "effects": "Effects",
          "effectsNote": "(wet effect, rays, L-effect, colored lashes)",
          "removal": "Lash removal",
          "removalNote": "(if new extension is not done)"
        }
      },
      "brows": {
        "name": "Brows",
        "services": {
          "tinting": "Brow tinting",
          "tintingCorrection": "Tinting + brow correction",
          "tintingCorrectionNote": "",
          "lamination": "Brow lamination",
          "laminationNote": "(correction + tinting)"
        }
      },
      "micropigmentation": {
        "name": "Micropigmentation",
        "services": {
          "brows": "Brow micropigmentation",
          "lips": "Lip micropigmentation",
          "interlash": "Interlash line"
        }
      },
      "manicure": {
        "name": "Manicure",
        "services": {
          "hygienicWomen": "Hygienic manicure (women)",
          "men": "Men's manicure",
          "withCoating": "Manicure with coating",
          "french": "French manicure",
          "brokenNailRepair": "Broken nail repair",
          "gelExtension": "Gel extension",
          "acrylicRemoval": "Acrylic removal",
          "spaHandCare": "Spa hand care"
        }
      },
      "pedicure": {
        "name": "Pedicure",
        "services": {
          "hygienicWomen": "Hygienic pedicure (women)",
          "withCoating": "Pedicure with coating",
          "men": "Men's pedicure",
          "spaFootCare": "Spa foot care"
        }
      },
      "podology": {
        "name": "Podology",
        "services": {
          "ingrownNail": "Ingrown nail removal",
          "hyperkeratosis": "Hyperkeratosis treatment",
          "onychomycosis": "Onychomycosis treatment",
          "calluses": "Callus treatment",
          "callus": "Plantar callus removal",
          "nailProtection": "Nail prosthesis",
          "crackTreatment": "Crack treatment",
          "titaniumThread": "Titanium thread installation"
        }
      }
    }
  },
  "ru": {
    "title": "Цены",
    "seoTitle": "Цены | Lash & Nails Santa Pola",
    "seoDescription": "Цены на услуги салона красоты в Санта-Пола - Наращивание ресниц, маникюр, педикюр, микропигментация и многое другое",
    "pricingTitle": "Наши услуги и цены",
    "priceFrom": "от {price}",
    "categories": {
      "lashes": {
        "name": "Ресницы",
        "services": {
          "tinting": "Окрашивание ресниц",
          "lamination": "Ламинирование ресниц",
          "laminationNote": "(ламинирование + окрашивание)",
          "combo": "Комбо: ламинирование ресниц + ламинирование бровей",
          "comboNote": "(коррекция + окрашивание + ламинирование)"
        }
      },
      "extensions": {
        "name": "Наращивание",
        "services": {
          "classic": "Классика",
          "classicNote": "(1,5-2 часа)",
          "2d": "2D",
          "3d": "3D",
          "effects": "Эффекты",
          "effectsNote": "(мокрый эффект, лучики, L-изгиб, цветные ресницы)",
          "removal": "Снятие ресниц",
          "removalNote": "(если не делается новое наращивание)"
        }
      },
      "brows": {
        "name": "Брови",
        "services": {
          "tinting": "Окрашивание бровей",
          "tintingCorrection": "Окрашивание + коррекция бровей",
          "tintingCorrectionNote": "",
          "lamination": "Ламинирование бровей",
          "laminationNote": "(коррекция + окрашивание)"
        }
      },
      "micropigmentation": {
        "name": "Микропигментация",
        "services": {
          "brows": "Микропигментация бровей",
          "lips": "Микропигментация губ",
          "interlash": "Межресничка"
        }
      },
      "manicure": {
        "name": "Маникюр",
        "services": {
          "hygienicWomen": "Гигиенический маникюр женский",
          "men": "Мужской маникюр",
          "withCoating": "Маникюр с покрытием",
          "french": "Французский маникюр",
          "brokenNailRepair": "Ремонт сломанного ногтя",
          "gelExtension": "Наращивание гелевыми типсами",
          "acrylicRemoval": "Снятие акрилового покрытия",
          "spaHandCare": "Спа уход за руками"
        }
      },
      "pedicure": {
        "name": "Педикюр",
        "services": {
          "hygienicWomen": "Гигиенический педикюр женский",
          "withCoating": "Педикюр с покрытием",
          "men": "Мужской педикюр",
          "spaFootCare": "Спа уход за ногами"
        }
      },
      "podology": {
        "name": "Подология",
        "services": {
          "ingrownNail": "Удаление вросшего ногтя",
          "hyperkeratosis": "Обработка гиперкератоза",
          "onychomycosis": "Обработка онихомикоза",
          "calluses": "Обработка омозолелостей",
          "callus": "Удаление стержневой мозоли",
          "nailProtection": "Протезирование ногтевой пластины",
          "crackTreatment": "Обработка трещин",
          "titaniumThread": "Установка титановой нити"
        }
      }
    }
  }
}
</i18n>
