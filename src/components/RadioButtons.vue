<template>
  <div class="radio-buttons">
    <Label value="radioButtons" :required="required"> {{ label }} </Label>
    <div class="radio-buttons__list">
      <div
        id="radioButtons"
        v-for="(item, index) in list"
        :key="index"
        class="radio-buttons__item"
      >
        <input
          v-model="picked"
          @change="handle"
          :disabled="disabled"
          type="radio"
          :id="index"
          :value="item.value"
        />
        <label :for="index"> {{ item.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
const Label = () => import("@/components/Label");

export default {
  name: "RadioButtons",
  components: {
    Label,
  },
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
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      picked: this.value,
    };
  },
  methods: {
    handle(e) {
      this.$emit("handle", e.target.value);
    },
  },
  watch: {
    value() {
      this.picked = this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.radio-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 4px;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}
</style>
