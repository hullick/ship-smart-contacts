<template>
  <div class="rounded-circle bg-danger text-center contact-avatar">
    <span class="text-white fs-1 lh-1">{{ contact.name[0] }}</span>
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
};
</script>
<style lang="scss" scoped>
.contact-avatar {
  min-height: 48px;
  min-width: 48px;
  max-height: 48px;
  max-width: 48px;
}
</style>