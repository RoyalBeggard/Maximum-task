<template>
  <div class="textarea">
    <Label value="textarea" :required="required"> {{ label }} </Label>
    <textarea
      id="textarea"
      type="text"
      v-model="text"
      @change="handle"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
const Label = () => import("@/components/Label");

export default {
  name: "Textarea",
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
    placeholder: {
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
  value() {
    this.text = this.value;
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  textarea {
    border: 1px rgba(black, 0.075) solid;
    background: white;
    padding: 8px;
    color: black;
    width: 100%;
    height: 150px;
    resize: none;
  }
}
</style>
