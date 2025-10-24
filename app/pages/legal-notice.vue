<template>
  <div class="min-h-screen bg-gray-50">
    <Hero :title="t('title')" :subtitle="t('subtitle')" />

    <div class="container mx-auto max-w-4xl px-4 py-12">
      <div class="bg-white rounded-2xl p-8 shadow-sm space-y-8">
        <!-- Company Information -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.company.title') }}
          </h2>
          <div class="space-y-2 text-gray-700">
            <p><strong>{{ t('sections.company.businessName') }}:</strong> Staigis Iryna</p>
            <p><strong>{{ t('sections.company.nie') }}:</strong> Y7526337S</p>
            <p><strong>{{ t('sections.company.businessType') }}:</strong> {{ t('sections.company.autonomo') }}</p>
            <p><strong>{{ t('sections.company.address') }}:</strong> Carrer Major, 8, 03130 Santa Pola, Alicante, España</p>
            <p><strong>{{ t('sections.company.phone') }}:</strong> +34 604 31 67 78</p>
            <p><strong>{{ t('sections.company.email') }}:</strong> info@lashandnails.online</p>
          </div>
        </section>

        <!-- Object -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.object.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ t('sections.object.content') }}
          </p>
        </section>

        <!-- Intellectual Property -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.ip.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ t('sections.ip.content') }}
          </p>
        </section>

        <!-- Liability -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.liability.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ t('sections.liability.content') }}
          </p>
        </section>

        <!-- Applicable Law -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.law.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ t('sections.law.content') }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: "local" });

useSeoMeta({
  title: () => t("seoTitle"),
  description: () => t("seoDescription"),
  ogTitle: () => t("seoTitle"),
  ogDescription: () => t("seoDescription"),
  ogType: "website",
  ogLocale: () =>
    locale.value === "es" ? "es_ES" : locale.value === "ru" ? "ru_RU" : "en_US",
});
</script>

<i18n lang="json">
{
  "es": {
    "title": "Aviso Legal",
    "subtitle": "Información legal y condiciones de uso del sitio web",
    "seoTitle": "Aviso Legal | Lash & Nails Santa Pola",
    "seoDescription": "Información legal sobre Lash & Nails Santa Pola - Aviso legal y condiciones de uso",
    "sections": {
      "company": {
        "title": "Información de la Empresa",
        "businessName": "Titular",
        "nie": "NIE",
        "businessType": "Tipo de Actividad",
        "autonomo": "Autónomo",
        "address": "Dirección",
        "phone": "Teléfono",
        "email": "Email"
      },
      "object": {
        "title": "Objeto",
        "content": "Este sitio web tiene como objetivo proporcionar información sobre los servicios de belleza ofrecidos por Lash & Nails Santa Pola, incluyendo extensiones de pestañas, manicura, pedicura y diseño de cejas. El acceso y uso de este sitio web implica la aceptación de estos términos y condiciones."
      },
      "ip": {
        "title": "Propiedad Intelectual",
        "content": "Todos los contenidos de este sitio web, incluyendo textos, imágenes, diseños, logotipos y código fuente, son propiedad de Lash & Nails Santa Pola o de sus proveedores de contenido y están protegidos por las leyes de propiedad intelectual. Queda prohibida su reproducción, distribución o modificación sin autorización expresa."
      },
      "liability": {
        "title": "Limitación de Responsabilidad",
        "content": "Lash & Nails Santa Pola no se hace responsable de los daños o perjuicios que puedan derivarse del uso de este sitio web, interrupciones del servicio, o errores en el contenido. Nos esforzamos por mantener la información actualizada, pero no garantizamos la exactitud absoluta de todos los contenidos."
      },
      "law": {
        "title": "Legislación Aplicable",
        "content": "Estas condiciones se rigen por la legislación española. Para cualquier controversia derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales de Santa Pola, Alicante, España."
      }
    }
  },
  "en": {
    "title": "Legal Notice",
    "subtitle": "Legal information and website terms of use",
    "seoTitle": "Legal Notice | Lash & Nails Santa Pola",
    "seoDescription": "Legal information about Lash & Nails Santa Pola - Legal notice and terms of use",
    "sections": {
      "company": {
        "title": "Company Information",
        "businessName": "Owner",
        "nie": "NIE",
        "businessType": "Business Type",
        "autonomo": "Self-Employed (Autónomo)",
        "address": "Address",
        "phone": "Phone",
        "email": "Email"
      },
      "object": {
        "title": "Purpose",
        "content": "This website aims to provide information about the beauty services offered by Lash & Nails Santa Pola, including lash extensions, manicure, pedicure, and brow design. Access and use of this website implies acceptance of these terms and conditions."
      },
      "ip": {
        "title": "Intellectual Property",
        "content": "All contents of this website, including texts, images, designs, logos, and source code, are property of Lash & Nails Santa Pola or its content providers and are protected by intellectual property laws. Reproduction, distribution, or modification without express authorization is prohibited."
      },
      "liability": {
        "title": "Limitation of Liability",
        "content": "Lash & Nails Santa Pola is not responsible for damages or losses that may arise from the use of this website, service interruptions, or errors in content. We strive to keep information up to date, but do not guarantee the absolute accuracy of all contents."
      },
      "law": {
        "title": "Applicable Law",
        "content": "These conditions are governed by Spanish legislation. For any dispute arising from the use of this website, the parties submit to the courts and tribunals of Santa Pola, Alicante, Spain."
      }
    }
  },
  "ru": {
    "title": "Правовая информация",
    "subtitle": "Юридическая информация и условия использования сайта",
    "seoTitle": "Правовая информация | Lash & Nails Santa Pola",
    "seoDescription": "Юридическая информация о Lash & Nails Santa Pola - Правовое уведомление и условия использования",
    "sections": {
      "company": {
        "title": "Информация о компании",
        "businessName": "Владелец",
        "nie": "NIE",
        "businessType": "Тип деятельности",
        "autonomo": "Индивидуальный предприниматель (Autónomo)",
        "address": "Адрес",
        "phone": "Телефон",
        "email": "Email"
      },
      "object": {
        "title": "Цель",
        "content": "Этот веб-сайт предназначен для предоставления информации об услугах красоты, предлагаемых Lash & Nails Santa Pola, включая наращивание ресниц, маникюр, педикюр и дизайн бровей. Доступ и использование этого веб-сайта подразумевают принятие этих условий."
      },
      "ip": {
        "title": "Интеллектуальная собственность",
        "content": "Все содержимое этого веб-сайта, включая тексты, изображения, дизайн, логотипы и исходный код, являются собственностью Lash & Nails Santa Pola или его поставщиков контента и защищены законами об интеллектуальной собственности. Воспроизведение, распространение или модификация без явного разрешения запрещены."
      },
      "liability": {
        "title": "Ограничение ответственности",
        "content": "Lash & Nails Santa Pola не несет ответственности за ущерб или убытки, которые могут возникнуть в результате использования этого веб-сайта, перерывов в обслуживании или ошибок в содержании. Мы стремимся поддерживать информацию в актуальном состоянии, но не гарантируем абсолютную точность всего содержания."
      },
      "law": {
        "title": "Применимое законодательство",
        "content": "Эти условия регулируются испанским законодательством. В случае любого спора, возникающего в связи с использованием этого веб-сайта, стороны подчиняются судам и трибуналам Санта-Пола, Аликанте, Испания."
      }
    }
  }
}
</i18n>
