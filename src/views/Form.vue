<template>
  <div class="form">
    <div class="form__title">
      {{ title }}
    </div>
    <form class="form__body" @submit.prevent="handleSumbit">
      <div class="form__branch">
        <Selector
          :value="branch.value"
          :label="branch.label"
          :list="cities"
          :disabled="branch.disabled"
          :placeholder="branch.placeholder"
          :required="branch.required"
          @handle="changeCity"
        />
        <Checkbox
          :label="online.label"
          :value="online.value"
          @handle="changeOnline"
        />
      </div>
      <div class="form__theme">
        <RadioButtons
          :label="theme.label"
          :list="theme.list"
          :value="theme.value"
          :required="theme.required"
          @handle="chooseTheme"
        />
        <Input
          :value="anotherTheme.value"
          :placeholder="anotherTheme.placeholder"
          @handle="changeTheme"
        />
      </div>
      <div class="form__description">
        <Textarea
          :value="description.value"
          :label="description.label"
          :placeholder="description.placeholder"
          :required="description.required"
          @handle="changeTextarea"
        />
      </div>
      <div class="form__file">
        <FileInput
          :label="document.label"
          :hints="document.hints"
          :required="document.required"
          @handle="loadDocument"
        />
      </div>
      <div class="form__buttons">
        <Button :disabled="!validateForm"> Отправить </Button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
const Selector = () => import("@/components/Selector");
const Checkbox = () => import("@/components/Checkbox");
const RadioButtons = () => import("@/components/RadioButtons");
const Input = () => import("@/components/Input");
const Textarea = () => import("@/components/Textarea");
const FileInput = () => import("@/components/FileInput");
const Button = () => import("@/components/Button");

export default {
  name: "Form",
  components: {
    Selector,
    Checkbox,
    RadioButtons,
    Input,
    Textarea,
    FileInput,
    Button,
  },
  data() {
    return {
      title: "Форма подачи заявки в отдел сервиса и качества",
      branch: {
        label: "Ваш филиал",
        placeholder: "Выберите город",
        value: null,
        disabled: false,
        required: true,
      },
      online: {
        label: "Онлайн",
        value: false,
      },
      theme: {
        label: "Тема обращения",
        value: null,
        disabled: false,
        required: true,
        list: [
          { label: "Недоволен качеством услуг", value: 1 },
          { label: "Расторжение договора", value: 2 },
          { label: "Не приходит письмо активации на почту", value: 3 },
          { label: "Не работает личный кабинет", value: 4 },
        ],
      },
      anotherTheme: {
        value: null,
        placeholder: "Другое",
      },
      description: {
        value: null,
        required: true,
        label: "Описание проблемы",
        placeholder: "Введите тему обращения",
      },
      document: {
        label: "Загрузка документов",
        value: null,
        required: false,
        hints: [
          "Приложите, пожалуйста, полноэкранный скриншот.",
          "Это поможет быстрее решить проблему.",
        ],
      },
    };
  },
  methods: {
    ...mapActions({
      loadCities: "cities/load",
      sendForm: "forms/send",
    }),
    changeCity(value) {
      this.branch.value = value;
    },
    changeOnline(value) {
      this.branch.value = null;

      if (value) {
        this.branch.disabled = true;
        this.online.value = true;
      } else {
        this.branch.disabled = false;
        this.online.value = false;
      }
    },
    chooseTheme(value) {
      this.theme.value = value;
      this.anotherTheme.value = null;
    },
    changeTheme(value) {
      this.anotherTheme.value = value;
      this.theme.value = null;
    },
    changeTextarea(value) {
      this.description.value = value;
    },
    loadDocument(value) {
      this.document.value = value;
    },
    handleSumbit() {
      const form = {
        city: this.branch.value || this.online.value,
        theme: this.theme.value || this.anotherTheme.value,
        file: this.document.value || null,
        description: this.description.value,
      };

      this.sendForm(form);

      if (this.status) this.$router.push({ name: "SuccessPage" });
      else alert("Пришёл отрицательный ответ, попробуйте ещё раз");
    },
  },
  computed: {
    ...mapState({
      cities: (state) => state.cities.data,
      status: (state) => state.forms.status,
    }),
    validateForm() {
      if (
        (!this.branch.value && !this.online.value) ||
        (!this.theme.value && !this.anotherTheme.value) ||
        !this.description.value
      ) {
        return false;
      }

      return true;
    },
  },
  mounted() {
    this.loadCities();
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  width: 100%;

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: rgb(75, 75, 75);
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 32px;
    border: 1px rgba(black, 0.15) solid;
    border-radius: 2px;
    padding: 32px;
  }

  &__branch,
  &__theme {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
