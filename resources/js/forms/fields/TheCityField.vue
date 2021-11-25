<template>
  <div>
    <label for="city" class="form-label"> Cidade </label>
    <input
      type="text"
      class="form-control"
      id="city"
      placeholder="Cidade"
      disabled
      v-model="city"
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
};
</script>
<style lang="scss" scoped></style>