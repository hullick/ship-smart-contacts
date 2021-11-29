<template>
  <div>
    <div
      class="
        bg-danger
        text-white
        d-flex
        align-items-center
        justify-content-center
        col-12
      "
      v-on:click="onDeleteItemPressed"
    >
      <span class="fs-1 lh-1">-</span>
    </div>
  </div>
</template>
<script>
import { Contact } from "../types/contact.ts";
import { ModalEnum } from "../types/modals.ts";

export default {
  props: {
    contact: {
      type: Contact,
      required: true,
    },
  },
  methods: {
    onDeleteItemPressed: function (event) {
      this.$services.$modalService.show(ModalEnum.DELETE_USER);
      this.$store.commit("setLastDeletedContact", this.contact);
    },
  },
};
</script>
<style lang="scss" scoped></style>