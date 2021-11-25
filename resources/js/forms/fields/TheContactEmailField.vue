<template>
  <div>
    <label for="contactEmail" class="form-label"> Email do Contato </label>
    <input
      type="text"
      class="form-control"
      id="contactEmail"
      placeholder="Email do Contato"
      v-on:input="emitValidEmail"
    />
  </div>
</template>
<script>
export default {
  methods: {
    isEmailValid(email) {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    },
    emitValidEmail(event) {
      const emailValue = event.target.value;

      if (this.isEmailValid(emailValue)) {
        this.$emit("input", emailValue);
      } else {
        this.$emit("input", "");
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>