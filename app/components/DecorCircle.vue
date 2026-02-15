<template>
  <div
    class="absolute rounded-full -z-10"
    :class="[sizeClass, colorClass]"
    :style="positionStyle"
  />
</template>

<script setup lang="ts">
interface Props {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "gold" | "cream" | "brown";
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  color: "gold",
});

const sizeClass = computed(
  () =>
    ({
      sm: "w-10 h-10",
      md: "w-16 h-16",
      lg: "w-24 h-24",
      xl: "w-32 h-32",
    })[props.size],
);

const colorClass = computed(
  () =>
    ({
      gold: "bg-[#FFC107]/15",
      cream: "bg-[#E8D5C4]/30",
      brown: "bg-[#6B5B52]/10",
    })[props.color],
);

const positionStyle = computed(() => ({
  top: props.top,
  bottom: props.bottom,
  left: props.left,
  right: props.right,
}));
</script>
