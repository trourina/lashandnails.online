<template>
  <section aria-labelledby="contact-methods">
    <h2 id="contact-methods">{{ t("contactInfo.heading") }}</h2>

    <dl>
      <div>
        <dt>{{ t("contactInfo.addressLabel") }}</dt>
        <dd>
          <address>
            {{ settings.address.street }}<br />
            {{ settings.address.postalCode }} {{ settings.address.city }}<br />
            {{ settings.address.region }}, {{ t("contactInfo.country") }}
          </address>
        </dd>
      </div>

      <div>
        <dt>{{ t("contactInfo.phoneLabel") }}</dt>
        <dd>
          <a :href="`tel:${settings.phone}`" rel="nofollow">{{ settings.phone }}</a>
        </dd>
      </div>

      <div>
        <dt>{{ t("contactInfo.whatsappLabel") }}</dt>
        <dd>
          <a
            :href="`https://wa.me/${settings.phone.replace(/\+/g, '')}?text=${encodeURIComponent(t('contactInfo.whatsappMessage'))}`"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {{ t("contactInfo.whatsappAction") }}
          </a>
        </dd>
      </div>

      <div>
        <dt>{{ t("contactInfo.telegramLabel") }}</dt>
        <dd>
          <a
            :href="`https://t.me/${settings.telegram}?text=${encodeURIComponent(t('contactInfo.telegramMessage'))}`"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {{ t("contactInfo.telegramAction") }}
          </a>
        </dd>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const settings = useSiteSettings();
</script>
