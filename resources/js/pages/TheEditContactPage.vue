<template>
  <div class="my-5">
    <p class="h1 text-center my-4">Formulário de edição contato</p>
    <div class="container d-flex flex-row" v-if="contact">
      <edit-contact-form :updatedContact="contact"></edit-contact-form>
    </div>
  </div>
</template>
<script>
import PageConfig from "../classes/page-config.ts";
import EditContactForm from "../forms/EditContactForm";

export default {
  components: {
    EditContactForm,
  },
  props: {
    config: {
      type: PageConfig,
      required: false,
    },
    contactId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contact: undefined,
    };
  },
  beforeMount() {
    this.$services.$contactService.get(this.contactId).then((contact) => {
      this.contact = contact;
    });
  },
};
</script>
<style lang="scss" scoped></style>