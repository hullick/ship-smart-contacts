<template>
  <div>
    <label for="cep" class="form-label"> CEP </label>
    <input
      v-mask="'#####-###'"
      type="text"
      class="form-control"
      id="cep"
      placeholder="Digite aqui o seu CEP"
      v-bind:value="cepValue"
      v-on:input="emitValidCep"
    />
  </div>
</template>
<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data() {
    return {
      cepValue: "",
    };
  },
  methods: {
    isCepValid(cep) {
      if (cep.length == 9) {
        return true;
      }

      return false;
    },
    emitValidCep(event) {
      let cepValue = event.target.value;

      if (this.isCepValid(cepValue)) {
        this.$emit("input", cepValue);
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>