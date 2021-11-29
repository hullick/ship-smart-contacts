<template>
  <div>
    <label for="address" class="form-label"> Address </label>
    <input
      type="text"
      class="form-control"
      id="address"
      disabled
      placeholder="Endereço"
      v-model="addressValue"
      v-on:input="$emit('input', $event.target.value)"
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
  watch: {
    address: function (newAddress, oldAddress) {
      this.addressValue = newAddress;
    },
  },
  data() {
    return {
      addressValue: this.address,
    };
  },
};
</script>
<style lang="scss" scoped></style>