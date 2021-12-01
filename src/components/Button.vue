<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style lang="scss" scoped>
.button {
  padding: 7px 20px;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 400;
  border: none;
  color: white;
  background: rgba(coral, 0.9);
  transition: 0.3s;

  &:hover {
    background: coral;
  }

  &:disabled {
    background: rgba(black, 0.25);
  }
}
</style>
