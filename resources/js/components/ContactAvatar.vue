<template>
  <div class="rounded-circle bg-danger contact-avatar col-12 h-100">
    <div
      class="d-flex align-items-center justify-content-center col-12 h-100"
      style="margin-top: -100%"
    >
      <span class="fs-1 text-white" v-if="!contact.avatarFilename">{{
        contact.name[0]
      }}</span>
      <img
        :src="getPublicAvatarFolder() + contact.avatarFilename"
        class="img-fluid rounded-circle col-12"
        v-if="contact.avatarFilename"
      />
    </div>
  </div>
</template>
<script>
import { Contact } from "../types/contact.ts";

export default {
  props: {
    contact: {
      type: Contact,
      required: true,
    },
  },
  methods: {
    getPublicAvatarFolder() {
      return "/public/avatars/";
    },
  },
};
</script>
<style lang="scss" scoped>
.contact-avatar {
  padding-top: 100%;
  position: relative;
}

.contact-avatar div {
  position: absolute;
  margin-top: -100%;
  // top: 0;
  // left: 0;
  // bottom: 0;
  // right: 0;
}
</style>