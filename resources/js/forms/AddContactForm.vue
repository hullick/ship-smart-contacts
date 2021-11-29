<template>
  <form class="col-12 d-block d-lg-flex flex-row" @submit="addContact">
    <div class="col-12 col-lg-3">
      <the-avatar-field></the-avatar-field>
    </div>
    <div class="col-lg-9">
      <div class="row">
        <the-cep-field
          class="mb-3 col-12 col-lg-6"
          v-model="cep"
          v-on:validChanged="cepValidChanged"
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
        <the-residence-number-field
          class="mb-3 col-12 col-lg-3"
          v-model="addressNumber"
        >
        </the-residence-number-field>
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
import TheCepField from "./fields/TheCepField";
import TheStateField from "./fields/TheStateField";
import TheDistrictField from "./fields/TheDistrictField";
import TheCityField from "./fields/TheCityField";
import TheAddressField from "./fields/TheAddressField";
import TheResidenceNumberField from "./fields/TheResidenceNumberField";
import TheContactNameField from "./fields/TheContactNameField";
import TheContactNumberField from "./fields/TheContactNumberField";
import TheContactEmailField from "./fields/TheContactEmailField";
import TheAvatarField from "./fields/TheAvatarField";

export default {
  components: {
    TheCepField,
    TheStateField,
    TheDistrictField,
    TheCityField,
    TheAddressField,
    TheResidenceNumberField,
    TheContactNameField,
    TheContactNumberField,
    TheAvatarField,
    TheContactEmailField,
  },
  data() {
    return {
      invalidFields: [],
      cep: "",
      selectedState: {},
      contactName: "",
      contactNumber: "",
      lastValidEmail: "",
      addressNumber: "",
      lastImage: "",
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

      const contact = {
        name: this.contactName,
        phoneNumber: this.contactNumber,
        email: this.lastValidEmail,
        address: {
          cep: this.lastCepApiResponse.cep,
          city: this.lastCepApiResponse.city,
          district: this.lastCepApiResponse.district,
          address: this.lastCepApiResponse.address,
          residenceNumber: this.addressNumber,
          state: this.$store.state.states.find(
            (currentState) => currentState.id == this.selectedState
          ),
        },
      };

      this.$services.$contactService.save(contact).then((createdUserId) => {
        contact.id = createdUserId;

        if (event.target.elements.avatar.files[0]) {
          this.$services.$contactService
            .associate(event.target.elements.avatar.files[0], contact)
            .then(() => {
              window.location.href =
                this.$helpers.$urlHelper.getContactDetailPage(contact.id);
            });
        } else {
          window.location.href = this.$helpers.$urlHelper.getContactDetailPage(
            contact.id
          );
        }
      });
    },
    cepValidChanged(cepValid) {
      if (!cepValid) {
        if (!this.invalidFields.includes("cep")) {
          this.invalidFields.push("cep");
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>