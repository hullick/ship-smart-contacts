<template>
  <div class="d-flex flex-row card p-3 rounded btn">
    <div class="col-1 d-flex justify-content-center align-items-center">
      <contact-avatar v-bind:contact="contact"></contact-avatar>
    </div>
    <div class="d-flex flex-row col-10 align-items-center">
      <span class="fs-2 lh-1">{{ contact.name }}</span>
    </div>
    <delete-contact
      v-bind:contact="contact"
      class="col-1 rounded"
    ></delete-contact>
  </div>
</template>
<script>
import { Contact } from "../types/contact.ts";
import ContactAvatar from "./ContactAvatar";
import DeleteContact from "./DeleteContact";

export default {
  components: {
    ContactAvatar,
    DeleteContact,
  },
  props: {
    contact: {
      type: Contact,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>