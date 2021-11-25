<template>
  <div>
    <label for="contactName" class="form-label"> Nome do Contato </label>
    <input
      type="text"
      class="form-control"
      id="contactName"
      placeholder="Nome do Contato"
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