<template>
  <div>
    <label for="state" class="form-label"> Selecione o Estado </label>
    <select
      id="state"
      class="form-select"
      aria-label="Selecione o Estado"
      v-on:input="$emit('input', $event.target.value)"
    >
      <option :selected="!stateAcronym">Abrir o menu</option>
      <option value="rj" :selected="stateAcronym == 'RJ'">Rio</option>
      <option value="sp" :selected="stateAcronym == 'SP'">São Paulo</option>
      <option value="3">Three</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    stateAcronym: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      states: [],
      selectedState: "",
    };
  },
  watch: {
    stateAcronym: function (newState, oldState) {
      this.$emit('input', newState)
    },
  },
  methods: {
    onChangeSelectedState(event) {
      this.selectedState = event.target.value;
    },
  },
};
</script>
<style lang="scss" scoped></style>