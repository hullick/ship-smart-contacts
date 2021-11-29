<template>
  <div class="container" v-if="contact">
    <div class="d-flex justify-content-center">
      <div class="col-6 col-md-3 d-flex justify-content-center">
        <contact-avatar :contact="contact"></contact-avatar>
      </div>
    </div>
    <div>
      <div class="text-center">
        <span class="fs-1">{{ contact.name }}</span>
      </div>
      <div class="row">
        <span class="fs-4 col-12 col-xl-9">Email: {{ contact.email }} </span>
        <span class="fs-4 col-12 col-xl-3"
          >Telefone: {{ contact.phoneNumber }}</span
        >
      </div>
      <div class="row">
        <span class="fs-4 col-12 col-xl-9"
          >Estado: {{ contact.address.state.name }}</span
        >
        <span class="fs-4 col-12 col-xl-3"
          >Cidade: {{ contact.address.city }}</span
        >
      </div>
      <div class="row">
        <span class="fs-4 col-12 col-xl-9"
          >Bairro: {{ contact.address.district }}</span
        >
        <span class="fs-4 col-12 col-xl-3">CEP: {{ contact.address.cep }}</span>
      </div>
      <div class="row">
        <span class="fs-4 col-12 col-xl-9"
          >Endereço: {{ contact.address.address }}</span
        >
        <span class="fs-4 col-12 col-xl-3"
          >Nº Residência: {{ contact.address.residenceNumber }}</span
        >
      </div>
      <div class="row text-center py-4">
        <div class="col-12 col-md-4 py-3">
          <a :href="$helpers.$urlHelper.getEditContactPage(contact.id)" class="btn btn-rounded btn-warning btn-lg p-4 col-12 text-white">
            <i class="fas fa-2x fa-edit"></i>
          </a>
        </div>
        <div class="col-12 col-md-4 py-3">
          <a
            class="btn btn-rounded btn-success btn-lg p-4 col-12 text-white"
            :href="
              'https://wa.me/' +
              getNumberInTelFonrmat(contact.phoneNumber) +
              '?text=Olá, estou entrando em contato através do gerenciador de contatos da ShipSmart'
            "
            target="_blank"
          >
            <i class="fab fa-2x fa-whatsapp"></i>
          </a>
        </div>
        <div class="col-12 col-md-4 py-3">
          <a
            class="btn btn-rounded btn-primary btn-lg p-4 col-12 text-white"
            :href="'tel:55' + getNumberInTelFonrmat(contact.phoneNumber)"
          >
            <i class="fas fa-2x fa-phone-volume"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageConfig from "../classes/page-config.ts";
import ContactAvatar from "../components/ContactAvatar.vue";

export default {
  components: {
    ContactAvatar,
  },
  props: {
    config: {
      type: PageConfig,
      required: false,
    },
    contactId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contact: undefined,
    };
  },
  beforeMount() {
    this.$services.$contactService.get(this.contactId).then((contact) => {
      this.contact = contact;
    });
  },
  methods: {
    getNumberInTelFonrmat(number) {
      return number
        .replace(/\(/, "")
        .replace(/\)/, "")
        .replace(/\ /, "")
        .replace(/\-/, "");
    },
  },
};
</script>
<style lang="scss" scoped></style>