<template>
  <div class="container">
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Diego Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
      class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
  </div>
</template>
<script>
import PageConfig from "../classes/page-config.ts";
import SingleContact from "../components/SingleContact";

export default {
  components: {
    SingleContact,
  },
  props: {
    config: {
      type: PageConfig,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped></style>