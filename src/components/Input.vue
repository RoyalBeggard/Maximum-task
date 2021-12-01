<template>
  <div class="input">
    <label v-if="label" for="input" class="input__label">
      {{ label }}
    </label>
    <input
      id="input"
      type="text"
      v-model="text"
      @change="handle"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
    placeholder: {
      type: String,
      required: false,
      default: "Введите значение",
    },
  },
  data() {
    return {
      text: this.value,
    };
  },
  methods: {
    handle(e) {
      this.$emit("handle", e.target.value);
    },
  },
  watch: {
    value() {
      this.text = this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  input[type="text"] {
    border: 1px rgba(black, 0.075) solid;
    background: white;
    padding: 8px;
    width: 250px;
  }
}
</style>
