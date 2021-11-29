<template>
  <div style="padding: 30px;">
    <h1>About</h1>
    <Picker v-model="date" />

    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="Note">
        <a-input v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
      </a-form-item>
      <a-form-item label="Date">
        <Picker v-decorator="['date', { initialValue: ['2', 4] }]" type="date-range" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import Picker from '@/components/DatePicker';

export default {
  name: 'About',
  components: { Picker },
  data() {
    return {
      date: 22,
      form: this.$form.createForm(this, { name: 'coordinated' })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log(this.date);
        console.log(values);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
