<template>
  <div class="checkbox">
    <input type="checkbox" id="checkbox" v-model="checked" @change="handle" />
    <div class="checkbox__label">
      <label v-if="label" for="checkbox">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    label: {
      type: String,
      required: true,
      default: null,
    },
    value: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      checked: this.value,
    };
  },
  methods: {
    handle(e) {
      this.$emit("handle", e.target.checked);
    },
  },
  watch: {
    value() {
      this.checked = this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
