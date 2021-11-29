<template>
  <div>
    <label for="city" class="form-label"> Cidade </label>
    <input
      type="text"
      class="form-control"
      id="city"
      disabled
      placeholder="Cidade"
      v-model="cityValue"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: {
    city: {
      type: String,
      required: false,
    },
  },
  watch: {
    city: function (newCity, oldCity) {
      this.cityValue = newCity;
    },
  },
  data() {
    return {
      cityValue: this.city,
    };
  },
};
</script>
<style lang="scss" scoped></style>