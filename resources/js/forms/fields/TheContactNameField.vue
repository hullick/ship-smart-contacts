<template>
  <div>
    <label for="contactName" class="form-label"> Nome do Contato </label>
    <input
      type="text"
      class="form-control"
      id="contactName"
      placeholder="Nome do Contato"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped></style>