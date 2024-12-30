<template>
  <p>
    <img
      v-if="field.thumbnailUrl"
      :src="field.thumbnailUrl"
      :max-width="field.maxWidth || field.indexWidth"
      :rounded="field.rounded"
      :aspect="field.aspect"
      :alt="field.name"
    />
    <span v-else>&mdash;</span>
  </p>
</template>

<script>
export default {
  props: ["resourceName", "field"],
};
</script>
