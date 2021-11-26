<template>
  <div>
    <label for="contactNumber" class="form-label"> Número de Telefone </label>
    <input
      type="text"
      class="form-control"
      id="contactNumber"
      placeholder="Número de Telefone"
      v-on:input="$emit('input', $event.target.value)"
      v-mask="['(##) ####-####', '(##) #####-####']"
    />
  </div>
</template>
<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
};
</script>
<style lang="scss" scoped></style>