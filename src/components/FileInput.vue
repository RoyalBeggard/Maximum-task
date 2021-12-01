<template>
  <div class="file-input">
    <Label value="fileInput" :required="required"> {{ label }}</Label>
    <div v-if="hints" class="file-input__hints">
      <div
        v-for="(item, index) in hints"
        :key="index"
        class="file-input__hints-item"
      >
        {{ item }}
      </div>
    </div>
    <input id="fileInput" type="file" @change="handle" multiple />
  </div>
</template>

<script>
const Label = () => import("@/components/Label");

export default {
  name: "FileInput",
  components: {
    Label,
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    hints: {
      type: Array,
      required: false,
      default: null,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    handle(e) {
      this.$emit("handle", e.target.files);
    },
  },
};
</script>

<style lang="scss" scoped>
.file-input {
  &__hints {
    margin-bottom: 12px;
  }

  &__hints-item {
    color: rgba(black, 0.5);
  }
}
</style>
