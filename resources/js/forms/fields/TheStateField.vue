<template>
  <div>
    <label for="state" class="form-label"> Selecione o Estado </label>
    <select
      id="state"
      class="form-select"
      aria-label="Selecione o Estado"
      v-on:input="$emit('input', $event.target.value)"
    >
      <option :selected="!stateAcronym" :value="{}">Abrir o menu</option>
      <option
        v-for="state in states"
        :key="state.id"
        :value="state.id"
        :selected="state.id == initialStateId || stateAcronym == state.acronym"
      >
        {{ state.name }}
      </option>
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
    initialStateId: {
      type: Number,
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
      if (this.states && this.states.length > 0) {
        this.$emit(
          "input",
          this.states.find((currentState) => currentState.acronym == newState)
            .id
        );
      }
    },
  },
  methods: {
    onChangeSelectedState(event) {
      this.selectedState = event.target.value;
    },
  },
  beforeMount() {
    this.$services.$stateService.list().then((states) => {
      this.states = states;

      if (this.initialStateId) {
        this.$emit("input", this.initialStateId);
      }
    });
  },
};
</script>
<style lang="scss" scoped></style>