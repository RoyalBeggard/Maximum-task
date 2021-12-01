<template>
  <div class="selector">
    <Label value="selector" :required="required"> {{ label }} </Label>
    <select
      :disabled="disabled"
      v-model="selected"
      @change="handle"
      name="selector"
      id="selector"
      class="selector__list"
      required
    >
      <option :value="null" disabled hidden class="selector__item">
        {{ placeholder }}
      </option>
      <option
        v-for="item in list"
        :key="item.id"
        :value="item.title"
        class="selector__item"
      >
        {{ item.title }}
      </option>
    </select>
  </div>
</template>

<script>
const Label = () => import("@/components/Label");

export default {
  name: "Selector",
  components: {
    Label,
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    placeholder: {
      type: String,
      required: false,
      default: "Выберите значение",
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
      selected: this.value,
    };
  },
  methods: {
    handle(e) {
      this.$emit("handle", e.target.value);
    },
  },
  watch: {
    value() {
      this.selected = this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.selector {
  &__list {
    background-color: rgba(black, 0.05);
    border: 1px rgba(black, 0.075) solid;
    color: rgba(black, 0.5);
    font-size: 13px;
    padding: 8px;
    width: 250px;
  }
}
</style>
