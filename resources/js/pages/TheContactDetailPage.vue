<template>
  <div class="container"></div>
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
      console.log(contact)
    });
  },
};
</script>
<style lang="scss" scoped></style>