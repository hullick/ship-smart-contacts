<template>
  <form class="col-12 d-block d-lg-flex flex-row" @submit="addContact">
    <div class="col-12 col-lg-3">
      <picture-input
        ref="pictureInput"
        margin="16"
        accept="image/jpeg,image/png"
        size="10"
        button-class="btn"
        v-bind:hideChangeButton="true"
        :custom-strings="{
          upload: 'Seu dispositivo não aceita o carregamento de imagens', // HTML allowed
          drag: 'Clique ou arraste um arquivo para selecionar uma imagem', // HTML allowed
          tap: 'Clique ou arraste um arquivo para selecionar uma imagem', // HTML allowed
          aspect: 'Landscape/Portrait', // Text only
        }"
      >
      </picture-input>
    </div>
    <div class="col-lg-9">
      <div class="row">
        <the-cep-field
          class="mb-3 col-12 col-lg-6"
          v-model="cep"
        ></the-cep-field>
        <the-state-field
          class="mb-3 col-12 col-lg-6"
          v-bind:stateAcronym="lastCepApiResponse.state"
          v-model="selectedState"
        ></the-state-field>
      </div>
      <div class="row">
        <the-city-field
          class="mb-3 col-12 col-lg-6"
          v-bind:city="lastCepApiResponse.city"
        ></the-city-field>
        <the-district-field
          class="mb-3 col-12 col-lg-6"
          v-bind:district="lastCepApiResponse.district"
        ></the-district-field>
      </div>
      <div class="row">
        <the-address-field
          class="mb-3 col-12 col-lg-9"
          v-bind:address="lastCepApiResponse.address"
        ></the-address-field>
        <the-address-number-field class="mb-3 col-12 col-lg-3">
        </the-address-number-field>
      </div>
      <div class="row">
        <the-contact-name-field
          class="mb-3 col-12 col-lg-9"
          v-model="contactName"
        ></the-contact-name-field>
        <the-contact-number-field
          class="mb-3 col-12 col-lg-3"
          v-model="contactNumber"
        >
        </the-contact-number-field>
      </div>
      <div class="row">
        {{ lastValidEmail }}
        <the-contact-email-field
          class="mb-3 col-12 col-lg-12"
          v-model="lastValidEmail"
        ></the-contact-email-field>
      </div>
      <button type="submit" class="btn btn-primary col-12 col-lg-4">
        Salvar Contato
      </button>
    </div>
  </form>
</template>
<script>
import PageConfig from "../classes/page-config.ts";
import TheCepField from "./fields/TheCepField";
import TheStateField from "./fields/TheStateField";
import TheDistrictField from "./fields/TheDistrictField";
import TheCityField from "./fields/TheCityField";
import TheAddressField from "./fields/TheAddressField";
import TheAddressNumberField from "./fields/TheAddressNumberField";
import TheContactNameField from "./fields/TheContactNameField";
import TheContactNumberField from "./fields/TheContactNumberField";
import TheContactEmailField from "./fields/TheContactEmailField";
import PictureInput from "vue-picture-input";

export default {
  components: {
    TheCepField,
    PictureInput,
    TheStateField,
    TheDistrictField,
    TheCityField,
    TheAddressField,
    TheAddressNumberField,
    TheContactNameField,
    TheContactNumberField,
    TheContactEmailField,
  },
  data() {
    return {
      cep: "",
      selectedState: "",
      contactName: "",
      contactNumber: "",
      lastValidEmail: "",
      lastCepApiResponse: {
        address: "",
        address_name: "",
        address_type: "",
        cep: "",
        city: "",
        city_ibge: "",
        ddd: "",
        district: "",
        lat: "",
        lng: "",
        state: "",
      },
    };
  },
  watch: {
    cep: function (newCep, oldCep) {
      this.$services.$cepService.get(newCep).then((cepResponse) => {
        this.lastCepApiResponse = cepResponse;
      });
    },
  },
  methods: {
    addContact(event) {
      event.preventDefault();
    },
  },
};
</script>
<style lang="scss" scoped></style>