<template>
  <div>
    <label for="district" class="form-label"> Bairro </label>
    <input
      type="text"
      class="form-control"
      id="district"
      disabled
      placeholder="Bairro"
      v-model="districtValue"
      v-on:input="$emit('input', $event.target.value)"
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
  watch: {
    district: function (newDistrict, oldDistrict) {
      this.districtValue = newDistrict;
    },
  },
  data() {
    return {
      districtValue: this.district,
    };
  },
};
</script>
<style lang="scss" scoped></style>