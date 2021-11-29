<template>
  <form
    class="col-12 d-block d-lg-flex flex-row"
    @submit="editContact"
    v-if="updatedContact"
  >
    <div class="col-12 col-lg-3 px-4">
      <the-avatar-field
        :avatarUrl="updatedContact.avatarFilename"
      ></the-avatar-field>
    </div>
    <div class="col-lg-9">
      <div class="row">
        <the-cep-field
          class="mb-3 col-12 col-lg-6"
          v-bind:cep="cep"
          v-model="cep"
        ></the-cep-field>
        <the-state-field
          class="mb-3 col-12 col-lg-6"
          v-model="selectedState"
          v-bind:stateAcronym="lastCepApiResponse.state"
          v-bind:initialStateId="updatedContact.address.state.id"
        ></the-state-field>
      </div>
      <div class="row">
        <the-city-field
          class="mb-3 col-12 col-lg-6"
          v-bind:city="city"
          v-model="city"
        ></the-city-field>
        <the-district-field
          class="mb-3 col-12 col-lg-6"
          v-bind:district="district"
          v-model="district"
        ></the-district-field>
      </div>
      <div class="row">
        <the-address-field
          class="mb-3 col-12 col-lg-9"
          v-bind:address="address"
          v-model="address"
        ></the-address-field>
        <the-residence-number-field
          class="mb-3 col-12 col-lg-3"
          v-model="residenceNumber"
          v-bind:residenceNumber="residenceNumber"
        >
        </the-residence-number-field>
      </div>
      <div class="row">
        <the-contact-name-field
          class="mb-3 col-12 col-lg-9"
          v-model="contactName"
          v-bind:name="contactName"
        ></the-contact-name-field>
        <the-contact-number-field
          class="mb-3 col-12 col-lg-3"
          v-model="contactNumber"
          v-bind:number="contactNumber"
        >
        </the-contact-number-field>
      </div>
      <div class="row">
        <the-contact-email-field
          class="mb-3 col-12 col-lg-12"
          v-model="lastValidEmail"
          :email="updatedContact.email"
        ></the-contact-email-field>
      </div>
      <button type="submit" class="btn btn-primary col-12 col-lg-4">
        Salvar Edição
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
import TheAvatarField from "./fields/TheAvatarField.vue";
import Contact from "../types/contact.ts";

export default {
  components: {
    TheCepField,
    TheAvatarField,
    TheStateField,
    TheDistrictField,
    TheCityField,
    TheAddressField,
    TheResidenceNumberField,
    TheContactNameField,
    TheContactNumberField,
    TheContactEmailField,
  },
  props: {
    updatedContact: {
      Contact,
      required: true,
    },
  },
  data() {
    return {
      city: this.updatedContact.address.city,
      cep: this.updatedContact.address.cep,
      address: this.updatedContact.address.address,
      district: this.updatedContact.address.district,
      residenceNumber: this.updatedContact.address.residenceNumber,
      selectedState: 0,
      contactName: this.updatedContact.name,
      contactNumber: this.updatedContact.phoneNumber,
      lastValidEmail: this.updatedContact.email,
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
    "lastCepApiResponse.city": function (newCity, oldCity) {
      this.city = newCity;
    },
    "lastCepApiResponse.district": function (newDistrict, oldDistrict) {
      this.district = newDistrict;
    },
    "lastCepApiResponse.address": function (newAddress, oldAddress) {
      this.address = newAddress;
    },
  },
  methods: {
    onCepChanged(newCep) {
      this.cep = newCep;
    },
    editContact(event) {
      event.preventDefault();

      const contact = {
        name: this.contactName,
        phoneNumber: this.contactNumber,
        email: this.lastValidEmail,
        address: {
          cep: this.cep,
          city: this.city,
          district: this.district,
          address: this.address,
          residenceNumber: this.residenceNumber,
          state: this.$store.state.states.find((currentState) => {
            return currentState.id == this.selectedState;
          }),
        },
      };

      this.$services.$contactService
        .update(this.updatedContact.id, contact)
        .then(() => {
          if (event.target.elements.avatar.files[0]) {
            this.$services.$contactService
              .change(
                event.target.elements.avatar.files[0],
                this.updatedContact
              )
              .then(() => {
                window.location.href =
                  this.$helpers.$urlHelper.getContactDetailPage(
                    this.updatedContact.id
                  );
              });
          } else {
            window.location.href =
              this.$helpers.$urlHelper.getContactDetailPage(
                this.updatedContact.id
              );
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped></style>