<template>
  <div class="label">
    <label :for="value" class="label__text">
      <slot></slot>
      <span class="label__required" v-if="required">*</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Label",
  props: {
    value: {
      type: String,
      required: false,
      default: null,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  margin-bottom: 12px;

  &__text {
    font-size: 16px;
  }

  &__required {
    margin-left: 5px;
    color: red;
  }
}
</style>
