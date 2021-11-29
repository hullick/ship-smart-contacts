<template>
  <picture-input
    ref="avatarInput"
    margin="16"
    accept="image/jpeg,image/png"
    size="10"
    button-class="btn"
    :zIndex="0"
    :prefill="getAvatarFolder()"
    v-bind:hideChangeButton="true"
    :custom-strings="{
      upload: 'Seu dispositivo não aceita o carregamento de imagens', // HTML allowed
      drag: 'Clique ou arraste um arquivo para selecionar uma imagem', // HTML allowed
      tap: 'Clique ou arraste um arquivo para selecionar uma imagem', // HTML allowed
      aspect: 'Landscape/Portrait', // Text only
    }"
    name="avatar"
    id="avatar"
    @change="checkImageLandscapeOrPortrait"
  />
</template>
<script>
import PictureInput from "vue-picture-input";

export default {
  components: {
    PictureInput,
  },
  props: {
    avatarUrl: {
      type: String,
      required: false,
    },
  },
  methods: {
    checkImageLandscapeOrPortrait(imageData) {
      const image = new Image();
      image.src = imageData;

      image.onload = function () {
        if (image.width > image.height) {
          // TODO: Add in array of errors
          alert("Imagem em modo panorama, por favor, troque");
        }
      };
    },
    getAvatarFolder() {
      return this.avatarUrl? this.$helpers.$urlHelper.getAvatarFolder(this.avatarUrl) : undefined;
    },
  },
};
</script>
<style lang="scss" scoped></style>