<template>
  <div
    class="d-flex flex-row card p-3 rounded btn"
    @click="goToContactDetailPage"
  >
    <div class="d-none d-lg-block col-lg-1 px-3">
      <contact-avatar v-bind:contact="contact"></contact-avatar>
    </div>
    <div class="d-flex flex-row col-lg-10 col-11 align-items-center">
      <span class="fs-2 lh-1">{{ contact.name }}</span>
    </div>
    <the-delete-contact-button
      v-bind:contact="contact"
      class="col-1 d-flex justify-content-center align-items-center"
    ></the-delete-contact-button>
  </div>
</template>
<script>
import { Contact } from "../types/contact.ts";
import ContactAvatar from "./ContactAvatar";
import TheDeleteContactButton from "./TheDeleteContactButton";

export default {
  components: {
    ContactAvatar,
    TheDeleteContactButton,
  },
  props: {
    contact: {
      type: Contact,
      required: true,
    },
  },
  methods: {
    goToContactDetailPage() {
      window.location.href = this.$helpers.$urlHelper.getContactDetailPage(
        this.contact.id
      );
    },
  },
};
</script>
<style lang="scss" scoped></style>