<template>
  <div class="container">
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Diego Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <div class="d-flex flex-row my-1">
      <single-contact
        class="col-12"
        v-bind:contact="{
          name: 'Daiane Barbosa',
          phoneNumber: '+55 (21) 12345-6789',
        }"
      ></single-contact>
    </div>
    <the-create-contact-button class="fixed-bottom col-6 mb-4 m-auto"></the-create-contact-button>
  </div>
</template>
<script>
import PageConfig from "../classes/page-config.ts";
import SingleContact from "../components/SingleContact";
import TheCreateContactButton from "../components/TheCreateContactButton";

export default {
  components: {
    SingleContact,
    TheCreateContactButton,
  },
  props: {
    config: {
      type: PageConfig,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped></style>