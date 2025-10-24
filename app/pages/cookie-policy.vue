<template>
  <div class="min-h-screen bg-gray-50">
    <Hero :title="t('title')" :subtitle="t('subtitle')" />

    <div class="container mx-auto max-w-4xl px-4 py-12">
      <div class="bg-white rounded-2xl p-8 shadow-sm space-y-8">
        <!-- What are cookies -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.what.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ t('sections.what.content') }}
          </p>
        </section>

        <!-- Cookies we use -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.types.title') }}
          </h2>

          <!-- Analytics Cookies -->
          <div class="mb-6">
            <h3 class="font-semibold text-lg text-gray-900 mb-2">
              {{ t('sections.types.analytics.title') }}
            </h3>
            <p class="text-gray-700 mb-3">
              {{ t('sections.types.analytics.content') }}
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Google Analytics:</strong> {{ t('sections.types.analytics.google') }}</li>
              <li><strong>{{ t('sections.types.analytics.duration') }}:</strong> {{ t('sections.types.analytics.durationValue') }}</li>
            </ul>
          </div>

          <!-- Essential Cookies -->
          <div class="mb-6">
            <h3 class="font-semibold text-lg text-gray-900 mb-2">
              {{ t('sections.types.essential.title') }}
            </h3>
            <p class="text-gray-700 mb-3">
              {{ t('sections.types.essential.content') }}
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>i18n_redirected:</strong> {{ t('sections.types.essential.language') }}</li>
              <li><strong>{{ t('sections.types.essential.duration') }}:</strong> {{ t('sections.types.essential.durationValue') }}</li>
            </ul>
          </div>
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

        <!-- Third Party Cookies -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.thirdParty.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            {{ t('sections.thirdParty.content') }}
          </p>
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="text-sm text-gray-600">
              <strong>Google Analytics:</strong>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="text-[#6B5B52] hover:underline">
                https://policies.google.com/privacy
              </a>
            </p>
          </div>
        </section>

        <!-- Manage Cookies -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.manage.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            {{ t('sections.manage.content') }}
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Chrome:</strong> {{ t('sections.manage.chrome') }}</li>
            <li><strong>Firefox:</strong> {{ t('sections.manage.firefox') }}</li>
            <li><strong>Safari:</strong> {{ t('sections.manage.safari') }}</li>
            <li><strong>Edge:</strong> {{ t('sections.manage.edge') }}</li>
          </ul>
          <p class="text-gray-700 leading-relaxed mt-4">
            {{ t('sections.manage.warning') }}
          </p>
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

        <!-- Contact -->
        <section>
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ t('sections.contact.title') }}
          </h2>
          <p class="text-gray-700 leading-relaxed">
            {{ t('sections.contact.content') }} <a href="mailto:info@lashandnails.online" class="text-[#6B5B52] hover:underline">info@lashandnails.online</a>
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
    "title": "Política de Cookies",
    "subtitle": "Información sobre las cookies que utilizamos en nuestro sitio web",
    "seoTitle": "Política de Cookies | Lash & Nails Santa Pola",
    "seoDescription": "Política de cookies de Lash & Nails Santa Pola - Información sobre el uso de cookies",
    "sections": {
      "what": {
        "title": "¿Qué son las Cookies?",
        "content": "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y proporcionen información a los propietarios del sitio."
      },
      "types": {
        "title": "Cookies que Utilizamos",
        "analytics": {
          "title": "Cookies Analíticas",
          "content": "Estas cookies nos permiten reconocer y contar el número de visitantes y ver cómo se mueven por nuestro sitio web. Esto nos ayuda a mejorar la forma en que funciona nuestro sitio.",
          "google": "Recopila información sobre cómo los visitantes usan nuestro sitio web",
          "duration": "Duración",
          "durationValue": "Hasta 2 años"
        },
        "essential": {
          "title": "Cookies Esenciales",
          "content": "Estas cookies son necesarias para el funcionamiento del sitio web y no pueden ser desactivadas en nuestros sistemas.",
          "language": "Guarda tu preferencia de idioma",
          "duration": "Duración",
          "durationValue": "1 año"
        }
      },
      "purpose": {
        "title": "Finalidad de las Cookies",
        "intro": "Utilizamos cookies para:",
        "items": [
          "Recordar tus preferencias de idioma",
          "Analizar cómo se utiliza nuestro sitio web",
          "Mejorar la experiencia del usuario",
          "Proporcionar contenido relevante"
        ]
      },
      "thirdParty": {
        "title": "Cookies de Terceros",
        "content": "Algunos servicios externos que utilizamos también pueden establecer cookies en tu dispositivo. Estos servicios de terceros tienen sus propias políticas de privacidad:"
      },
      "manage": {
        "title": "Cómo Gestionar las Cookies",
        "content": "Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en tu ordenador y puedes configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites un sitio.",
        "chrome": "Configuración > Privacidad y seguridad > Cookies",
        "firefox": "Opciones > Privacidad y seguridad > Cookies",
        "safari": "Preferencias > Privacidad > Cookies",
        "edge": "Configuración > Cookies y permisos del sitio",
        "warning": "Ten en cuenta que deshabilitar las cookies puede afectar la funcionalidad de este y muchos otros sitios web."
      },
      "updates": {
        "title": "Actualizaciones de esta Política",
        "content": "Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las cookies que utilizamos o por otros motivos operativos, legales o reglamentarios. Te recomendamos revisar esta página periódicamente."
      },
      "contact": {
        "title": "Contacto",
        "content": "Si tienes preguntas sobre nuestra Política de Cookies, contáctanos en"
      }
    }
  },
  "en": {
    "title": "Cookie Policy",
    "subtitle": "Information about the cookies we use on our website",
    "seoTitle": "Cookie Policy | Lash & Nails Santa Pola",
    "seoDescription": "Cookie policy of Lash & Nails Santa Pola - Information about cookie usage",
    "sections": {
      "what": {
        "title": "What are Cookies?",
        "content": "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to site owners."
      },
      "types": {
        "title": "Cookies We Use",
        "analytics": {
          "title": "Analytics Cookies",
          "content": "These cookies allow us to recognize and count the number of visitors and see how they move around our website. This helps us improve how our website works.",
          "google": "Collects information about how visitors use our website",
          "duration": "Duration",
          "durationValue": "Up to 2 years"
        },
        "essential": {
          "title": "Essential Cookies",
          "content": "These cookies are necessary for the website to function and cannot be disabled in our systems.",
          "language": "Stores your language preference",
          "duration": "Duration",
          "durationValue": "1 year"
        }
      },
      "purpose": {
        "title": "Purpose of Cookies",
        "intro": "We use cookies to:",
        "items": [
          "Remember your language preferences",
          "Analyze how our website is used",
          "Improve user experience",
          "Provide relevant content"
        ]
      },
      "thirdParty": {
        "title": "Third-Party Cookies",
        "content": "Some external services we use may also set cookies on your device. These third-party services have their own privacy policies:"
      },
      "manage": {
        "title": "How to Manage Cookies",
        "content": "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site.",
        "chrome": "Settings > Privacy and security > Cookies",
        "firefox": "Options > Privacy and security > Cookies",
        "safari": "Preferences > Privacy > Cookies",
        "edge": "Settings > Cookies and site permissions",
        "warning": "Please note that disabling cookies may affect the functionality of this and many other websites."
      },
      "updates": {
        "title": "Updates to this Policy",
        "content": "We may update this Cookie Policy occasionally to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. We recommend reviewing this page periodically."
      },
      "contact": {
        "title": "Contact",
        "content": "If you have questions about our Cookie Policy, contact us at"
      }
    }
  },
  "ru": {
    "title": "Политика использования файлов cookie",
    "subtitle": "Информация о файлах cookie, которые мы используем на нашем сайте",
    "seoTitle": "Политика использования файлов cookie | Lash & Nails Santa Pola",
    "seoDescription": "Политика использования файлов cookie Lash & Nails Santa Pola - Информация об использовании cookie",
    "sections": {
      "what": {
        "title": "Что такое файлы cookie?",
        "content": "Файлы cookie - это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении веб-сайта. Они широко используются для того, чтобы веб-сайты работали более эффективно и предоставляли информацию владельцам сайта."
      },
      "types": {
        "title": "Используемые нами файлы cookie",
        "analytics": {
          "title": "Аналитические файлы cookie",
          "content": "Эти файлы cookie позволяют нам распознавать и подсчитывать количество посетителей и видеть, как они перемещаются по нашему сайту. Это помогает нам улучшить работу нашего сайта.",
          "google": "Собирает информацию о том, как посетители используют наш сайт",
          "duration": "Длительность",
          "durationValue": "До 2 лет"
        },
        "essential": {
          "title": "Необходимые файлы cookie",
          "content": "Эти файлы cookie необходимы для работы веб-сайта и не могут быть отключены в наших системах.",
          "language": "Сохраняет ваши языковые предпочтения",
          "duration": "Длительность",
          "durationValue": "1 год"
        }
      },
      "purpose": {
        "title": "Цель использования файлов cookie",
        "intro": "Мы используем файлы cookie для:",
        "items": [
          "Запоминания ваших языковых предпочтений",
          "Анализа использования нашего веб-сайта",
          "Улучшения пользовательского опыта",
          "Предоставления релевантного контента"
        ]
      },
      "thirdParty": {
        "title": "Сторонние файлы cookie",
        "content": "Некоторые внешние сервисы, которые мы используем, также могут устанавливать файлы cookie на вашем устройстве. Эти сторонние сервисы имеют свои собственные политики конфиденциальности:"
      },
      "manage": {
        "title": "Как управлять файлами cookie",
        "content": "Вы можете контролировать и/или удалять файлы cookie по своему усмотрению. Вы можете удалить все файлы cookie, которые уже есть на вашем компьютере, и настроить большинство браузеров для предотвращения их размещения. Однако, если вы это сделаете, вам может потребоваться вручную настраивать некоторые предпочтения каждый раз, когда вы посещаете сайт.",
        "chrome": "Настройки > Конфиденциальность и безопасность > Файлы cookie",
        "firefox": "Настройки > Приватность и защита > Файлы cookie",
        "safari": "Настройки > Конфиденциальность > Файлы cookie",
        "edge": "Настройки > Файлы cookie и разрешения сайта",
        "warning": "Обратите внимание, что отключение файлов cookie может повлиять на функциональность этого и многих других веб-сайтов."
      },
      "updates": {
        "title": "Обновления этой политики",
        "content": "Мы можем время от времени обновлять эту Политику использования файлов cookie, чтобы отразить изменения в используемых нами файлах cookie или по другим операционным, юридическим или нормативным причинам. Рекомендуем периодически проверять эту страницу."
      },
      "contact": {
        "title": "Контакт",
        "content": "Если у вас есть вопросы о нашей Политике использования файлов cookie, свяжитесь с нами по адресу"
      }
    }
  }
}
</i18n>
