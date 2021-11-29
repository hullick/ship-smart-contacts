<template>
  <div>
    <label for="residenceNumber" class="form-label">
      Número de residência
    </label>
    <input
      v-mask="'##########'"
      type="text"
      class="form-control"
      id="residenceNumber"
      placeholder="Número de residência"
      v-model="residenceNumbeValue"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  props: {
    residenceNumber: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      residenceNumbeValue: this.residenceNumber,
    };
  },
};
</script>
<style lang="scss" scoped></style>