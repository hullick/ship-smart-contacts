<template>
  <div class="container">
    <div
      class="d-flex flex-row my-1"
      v-for="contact in contacts"
      :key="contact.id"
    >
      <single-contact class="col-12" v-bind:contact="contact"></single-contact>
    </div>
    <the-create-contact-button
      class="fixed-bottom col-6 mb-4 m-auto"
    ></the-create-contact-button>
  </div>
</template>
<script>
import PageConfig from "../classes/page-config.ts";
import SingleContact from "../components/SingleContact";
import TheCreateContactButton from "../components/TheCreateContactButton";

export default {
  components: {
    SingleContact,
    TheCreateContactButton,
  },
  props: {
    config: {
      type: PageConfig,
      required: false,
    },
  },
  data() {
    return {
      contacts: [],
    };
  },
  beforeMount() {
    this.$services.$contactService.list().then((contacts) => {
      // Ordering contacts
      this.contacts = contacts.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
    });
  },
};
</script>
<style lang="scss" scoped></style>