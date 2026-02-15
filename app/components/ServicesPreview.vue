<template>
  <section aria-labelledby="services-preview">
    <h2 id="services-preview">{{ t("nav.services") }}</h2>
    <p class="section-subtitle"></p>

    <div class="services-grid">
      <article v-for="service in services" :key="service.slug" class="service-card">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <NuxtLink :to="localePath(`/services/${service.slug}`)" class="service-link">
          {{ t("common.learnMore") }}
        </NuxtLink>
      </article>
    </div>

    <div class="services-cta">
      <NuxtLink :to="localePath('/pricing')">
        {{ t("common.viewDetails") }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const services = computed(() => [
  {
    slug: "lash-extensions",
    title: t("services.lashes"),
    description: "",
  },
  {
    slug: "manicure",
    title: t("services.nails"),
    description: "",
  },
  {
    slug: "brows",
    title: t("services.beauty"),
    description: "",
  },
]);
</script>

<style scoped>
section {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-family: "Prata", serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #999;
  margin-bottom: 3rem;
  font-size: 1.125rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 12px;
  transition:
    transform 0.2s,
    border-color 0.2s;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: #667eea;
}

.service-card h3 {
  font-family: "Prata", serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.service-card p {
  color: #999;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.service-link::after {
  content: "→";
  transition: transform 0.2s;
}

.service-link:hover::after {
  transform: translateX(4px);
}

.services-cta {
  text-align: center;
}
</style>
