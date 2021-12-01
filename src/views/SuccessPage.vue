<template>
  <div class="success-page">
    <div class="success-page__title">Заявка отправлена.</div>
    <img
      class="success-page__image"
      src="@/assets/success_img.png"
      alt="Success result image"
    />
  </div>
</template>

<script>
export default {
  name: "SuccessPage",
};
</script>

<style lang="scss" scoped>
.success-page {
  padding: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: black;
  }

  &__image {
    width: 200px;
  }
}
</style>
