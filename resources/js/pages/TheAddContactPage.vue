<template>
  <div class="container d-flex flex-row">
    <div class="col-3">IMAGEM</div>
    <div class="col-9">CAMPOS</div>
  </div>
</template>
<script>
import PageConfig from "../classes/page-config.ts";

export default {
  components: {},
  props: {
    config: {
      type: PageConfig,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped></style>