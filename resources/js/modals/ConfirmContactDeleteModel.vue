<template>
  <div
    class="modal fade"
    id="deleteUserModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="deleteUserModal"
    aria-describedby="Modal to delete an contact of list"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            Você tem certeza disso?
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Confirmar esta ação irá remover os dados do contato.
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" class="btn btn-danger">Remover</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Contact } from "../types/contact.ts";

export default {
  watch: {
    "$store.state.lastDeletedContact": function () {
      console.log(123, this.$store.state.lastDeletedContact);
    },
  },
};
</script>
<style lang="scss" scoped></style>