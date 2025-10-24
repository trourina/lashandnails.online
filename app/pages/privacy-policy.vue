<template>
  <div class="min-h-screen bg-gray-50">
    <Hero :title="t('title')" :subtitle="t('subtitle')" />

    <div class="container mx-auto max-w-4xl px-4 py-12">
      <div class="bg-white rounded-2xl p-8 shadow-sm space-y-8">
        <!-- Data Controller -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.controller.title') }}
          </h2>
          <div class="space-y-2 text-gray-700">
            <p><strong>{{ t('sections.controller.businessName') }}:</strong> Staigis Iryna</p>
            <p><strong>{{ t('sections.controller.nie') }}:</strong> Y7526337S</p>
            <p><strong>{{ t('sections.controller.businessType') }}:</strong> {{ t('sections.controller.autonomo') }}</p>
            <p><strong>{{ t('sections.controller.address') }}:</strong> Carrer Major, 8, 03130 Santa Pola, Alicante, España</p>
            <p><strong>{{ t('sections.controller.email') }}:</strong> info@lashandnails.online</p>
          </div>
        </section>

        <!-- Data Collection -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.collection.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            {{ t('sections.collection.intro') }}
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>{{ t('sections.collection.items.0') }}</li>
            <li>{{ t('sections.collection.items.1') }}</li>
            <li>{{ t('sections.collection.items.2') }}</li>
            <li>{{ t('sections.collection.items.3') }}</li>
          </ul>
        </section>

        <!-- Purpose -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.purpose.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            {{ t('sections.purpose.intro') }}
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>{{ t('sections.purpose.items.0') }}</li>
            <li>{{ t('sections.purpose.items.1') }}</li>
            <li>{{ t('sections.purpose.items.2') }}</li>
            <li>{{ t('sections.purpose.items.3') }}</li>
          </ul>
        </section>

        <!-- Legal Basis -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.legal.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ t('sections.legal.content') }}
          </p>
        </section>

        <!-- Data Retention -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.retention.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ t('sections.retention.content') }}
          </p>
        </section>

        <!-- User Rights -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.rights.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            {{ t('sections.rights.intro') }}
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>{{ t('sections.rights.items.0') }}</li>
            <li>{{ t('sections.rights.items.1') }}</li>
            <li>{{ t('sections.rights.items.2') }}</li>
            <li>{{ t('sections.rights.items.3') }}</li>
            <li>{{ t('sections.rights.items.4') }}</li>
            <li>{{ t('sections.rights.items.5') }}</li>
          </ul>
          <p class="text-gray-700 leading-relaxed mt-4">
            {{ t('sections.rights.contact') }}
          </p>
        </section>

        <!-- Data Security -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.security.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ t('sections.security.content') }}
          </p>
        </section>

        <!-- Third Parties -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.thirdParty.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            {{ t('sections.thirdParty.content') }}
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Google Analytics:</strong> {{ t('sections.thirdParty.google') }}</li>
          </ul>
        </section>

        <!-- Updates -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.updates.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ t('sections.updates.content') }}
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
    "title": "Política de Privacidad",
    "subtitle": "Cómo recopilamos, usamos y protegemos tu información personal",
    "seoTitle": "Política de Privacidad | Lash & Nails Santa Pola",
    "seoDescription": "Política de privacidad de Lash & Nails Santa Pola - Protección de datos personales conforme al RGPD",
    "sections": {
      "controller": {
        "title": "Responsable del Tratamiento",
        "businessName": "Titular",
        "nie": "NIE",
        "businessType": "Tipo de Actividad",
        "autonomo": "Autónomo",
        "address": "Dirección",
        "email": "Email de contacto"
      },
      "collection": {
        "title": "Información que Recopilamos",
        "intro": "Recopilamos la siguiente información cuando utilizas nuestros servicios:",
        "items": [
          "Nombre y apellidos",
          "Número de teléfono",
          "Dirección de correo electrónico",
          "Información de navegación (a través de cookies)"
        ]
      },
      "purpose": {
        "title": "Finalidad del Tratamiento",
        "intro": "Utilizamos tu información personal para:",
        "items": [
          "Gestionar reservas de citas y servicios",
          "Comunicarnos contigo sobre tus citas",
          "Enviarte información sobre nuestros servicios (con tu consentimiento)",
          "Mejorar nuestros servicios y la experiencia del usuario"
        ]
      },
      "legal": {
        "title": "Base Legal",
        "content": "El tratamiento de tus datos se basa en tu consentimiento explícito al solicitar nuestros servicios y en la ejecución del contrato de prestación de servicios. También procesamos datos para cumplir con obligaciones legales."
      },
      "retention": {
        "title": "Conservación de Datos",
        "content": "Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados, incluyendo cualquier obligación legal, contable o de información. Los datos de clientes se conservan durante el período de prestación de servicios y posteriormente durante los plazos legales establecidos."
      },
      "rights": {
        "title": "Tus Derechos",
        "intro": "Conforme al RGPD, tienes derecho a:",
        "items": [
          "Acceder a tus datos personales",
          "Rectificar datos inexactos o incompletos",
          "Solicitar la supresión de tus datos",
          "Oponerte al tratamiento de tus datos",
          "Solicitar la limitación del tratamiento",
          "Portabilidad de tus datos"
        ],
        "contact": "Para ejercer estos derechos, contacta con nosotros en info{'@'}lashandnails.online"
      },
      "security": {
        "title": "Seguridad de los Datos",
        "content": "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Todos nuestros instrumentos están esterilizados y mantenemos estrictos protocolos de higiene y seguridad."
      },
      "thirdParty": {
        "title": "Comunicación a Terceros",
        "content": "No compartimos tu información personal con terceros, excepto cuando sea necesario para la prestación del servicio o por obligación legal. Utilizamos los siguientes servicios de terceros:",
        "google": "Para análisis web y mejora de la experiencia del usuario"
      },
      "updates": {
        "title": "Actualizaciones de esta Política",
        "content": "Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web. Te recomendamos revisar esta página periódicamente."
      }
    }
  },
  "en": {
    "title": "Privacy Policy",
    "subtitle": "How we collect, use and protect your personal information",
    "seoTitle": "Privacy Policy | Lash & Nails Santa Pola",
    "seoDescription": "Privacy policy of Lash & Nails Santa Pola - Personal data protection in accordance with GDPR",
    "sections": {
      "controller": {
        "title": "Data Controller",
        "businessName": "Owner",
        "nie": "NIE",
        "businessType": "Business Type",
        "autonomo": "Self-Employed (Autónomo)",
        "address": "Address",
        "email": "Contact Email"
      },
      "collection": {
        "title": "Information We Collect",
        "intro": "We collect the following information when you use our services:",
        "items": [
          "Name and surname",
          "Phone number",
          "Email address",
          "Browsing information (through cookies)"
        ]
      },
      "purpose": {
        "title": "Purpose of Processing",
        "intro": "We use your personal information to:",
        "items": [
          "Manage appointment and service bookings",
          "Communicate with you about your appointments",
          "Send you information about our services (with your consent)",
          "Improve our services and user experience"
        ]
      },
      "legal": {
        "title": "Legal Basis",
        "content": "The processing of your data is based on your explicit consent when requesting our services and on the execution of the service provision contract. We also process data to comply with legal obligations."
      },
      "retention": {
        "title": "Data Retention",
        "content": "We will retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting obligations. Customer data is retained during the service provision period and subsequently for legally established periods."
      },
      "rights": {
        "title": "Your Rights",
        "intro": "Under GDPR, you have the right to:",
        "items": [
          "Access your personal data",
          "Rectify inaccurate or incomplete data",
          "Request deletion of your data",
          "Object to the processing of your data",
          "Request limitation of processing",
          "Data portability"
        ],
        "contact": "To exercise these rights, contact us at info{'@'}lashandnails.online"
      },
      "security": {
        "title": "Data Security",
        "content": "We implement technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All our instruments are sterilized and we maintain strict hygiene and safety protocols."
      },
      "thirdParty": {
        "title": "Third Party Disclosure",
        "content": "We do not share your personal information with third parties, except when necessary for service provision or legal obligation. We use the following third-party services:",
        "google": "For web analytics and user experience improvement"
      },
      "updates": {
        "title": "Updates to this Policy",
        "content": "We may update this Privacy Policy occasionally. We will notify you of significant changes by posting the new policy on our website. We recommend reviewing this page periodically."
      }
    }
  },
  "ru": {
    "title": "Политика конфиденциальности",
    "subtitle": "Как мы собираем, используем и защищаем вашу личную информацию",
    "seoTitle": "Политика конфиденциальности | Lash & Nails Santa Pola",
    "seoDescription": "Политика конфиденциальности Lash & Nails Santa Pola - Защита персональных данных в соответствии с GDPR",
    "sections": {
      "controller": {
        "title": "Контролер данных",
        "businessName": "Владелец",
        "nie": "NIE",
        "businessType": "Тип деятельности",
        "autonomo": "Индивидуальный предприниматель (Autónomo)",
        "address": "Адрес",
        "email": "Контактный Email"
      },
      "collection": {
        "title": "Информация, которую мы собираем",
        "intro": "Мы собираем следующую информацию, когда вы пользуетесь нашими услугами:",
        "items": [
          "Имя и фамилия",
          "Номер телефона",
          "Адрес электронной почты",
          "Информация о просмотре (через cookies)"
        ]
      },
      "purpose": {
        "title": "Цель обработки",
        "intro": "Мы используем вашу личную информацию для:",
        "items": [
          "Управления записями на прием и услугами",
          "Связи с вами по поводу ваших записей",
          "Отправки информации о наших услугах (с вашего согласия)",
          "Улучшения наших услуг и пользовательского опыта"
        ]
      },
      "legal": {
        "title": "Правовая основа",
        "content": "Обработка ваших данных основана на вашем явном согласии при запросе наших услуг и на исполнении договора о предоставлении услуг. Мы также обрабатываем данные для выполнения юридических обязательств."
      },
      "retention": {
        "title": "Хранение данных",
        "content": "Мы будем хранить ваши личные данные в течение времени, необходимого для выполнения целей, для которых они были собраны, включая любые юридические, бухгалтерские или отчетные обязательства. Данные клиентов хранятся в течение периода предоставления услуг и впоследствии в течение законодательно установленных сроков."
      },
      "rights": {
        "title": "Ваши права",
        "intro": "В соответствии с GDPR, вы имеете право на:",
        "items": [
          "Доступ к вашим личным данным",
          "Исправление неточных или неполных данных",
          "Запрос на удаление ваших данных",
          "Возражение против обработки ваших данных",
          "Запрос на ограничение обработки",
          "Переносимость данных"
        ],
        "contact": "Для осуществления этих прав свяжитесь с нами по адресу info{'@'}lashandnails.online"
      },
      "security": {
        "title": "Безопасность данных",
        "content": "Мы применяем технические и организационные меры безопасности для защиты ваших личных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Все наши инструменты стерилизованы, и мы соблюдаем строгие протоколы гигиены и безопасности."
      },
      "thirdParty": {
        "title": "Раскрытие третьим лицам",
        "content": "Мы не передаем вашу личную информацию третьим лицам, за исключением случаев, когда это необходимо для предоставления услуги или по юридическому обязательству. Мы используем следующие сторонние сервисы:",
        "google": "Для веб-аналитики и улучшения пользовательского опыта"
      },
      "updates": {
        "title": "Обновления этой политики",
        "content": "Мы можем время от времени обновлять эту Политику конфиденциальности. Мы уведомим вас о значительных изменениях, опубликовав новую политику на нашем сайте. Рекомендуем периодически проверять эту страницу."
      }
    }
  }
}
</i18n>
