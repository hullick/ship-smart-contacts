<template>
  <div class="my-5">
    <p class="h1 text-center my-4">Formulário de contato</p>
    <div class="container d-flex flex-row">
      <add-contact-form></add-contact-form>
    </div>
  </div>
</template>
<script>
import PageConfig from "../classes/page-config.ts";
import AddContactForm from "../forms/AddContactForm";

export default {
  components: {
    AddContactForm,
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