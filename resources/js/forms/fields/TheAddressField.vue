<template>
  <div>
    <label for="address" class="form-label"> Address </label>
    <input
      type="text"
      class="form-control"
      id="address"
      placeholder="Endereço"
      v-model="address"
      disabled
    />
  </div>
</template>
<script>
export default {
  props: {
    address: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped></style>