<template>
  <div>
    <label for="district" class="form-label"> Bairro </label>
    <input
      type="text"
      class="form-control"
      id="district"
      placeholder="Bairro"
      disabled
      v-model="district"
    />
  </div>
</template>
<script>
export default {
  props: {
    district: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped></style>