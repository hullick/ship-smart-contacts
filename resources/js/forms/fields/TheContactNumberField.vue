<template>
  <div>
    <label for="contactNumber" class="form-label"> Número de Telefone </label>
    <input
      type="text"
      class="form-control"
      id="contactNumber"
      placeholder="Número de Telefone"
      v-mask="['(##) ####-####', '(##) #####-####']"
      v-model="numberValue"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  props: {
    number: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      numberValue: this.number
    };
  },
};
</script>
<style lang="scss" scoped></style>