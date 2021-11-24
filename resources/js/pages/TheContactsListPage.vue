<template>
  <div class="container"></div>
</template>
<script>
import PageConfig from "../classes/page-config.ts";

export default {
  name: "TheContactsListPage",
  props: {
    config: {
      type: PageConfig,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped></style>