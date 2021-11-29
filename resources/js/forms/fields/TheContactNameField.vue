<template>
  <div>
    <label for="contactName" class="form-label"> Nome do Contato </label>
    <input
      type="text"
      class="form-control"
      id="contactName"
      placeholder="Nome do Contato"
      :value="nameValue"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      nameValue: this.name,
    };
  },
};
</script>
<style lang="scss" scoped></style>