<template>
  <div>
    <label for="addressNumber" class="form-label"> Número de residência </label>
    <input
      v-mask="'##########'"
      type="text"
      class="form-control"
      id="addressNumber"
      placeholder="Número de residência"
      v-bind:value="addressNumber"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data() {
    return {
      addressNumber: "",
    };
  },
};
</script>
<style lang="scss" scoped></style>