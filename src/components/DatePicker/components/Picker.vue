<template>
  <component :is="component" v-bind="$attrs" :value="valueFormat" v-on="$listeners" @change="change" />
</template>

<script>
import PickerDate from './PickerDate';
import PickerDateRange from './PickerDateRange';

export default {
  name: 'Picker',
  components: { PickerDate, PickerDateRange },
  model: {
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: 'date'
    },
    value: {
      type: [Number, Array, String],
      default: '',
      validator(value) {
        try {
          let flag = true;
          if (Array.isArray(value)) {
            if (value.some(v => isNaN(Number(v)))) flag = false;
          } else if (isNaN(Number(value))) {
            flag = false;
          }
          if (!flag) throw new Error('参数类型有误');
          return flag;
        } catch (e) {
          console.error(value, e);
          return false;
        }
      }
    }
  },
  computed: {
    component() {
      return `picker-${this.type}`;
    },
    valueFormat() {
      return Array.isArray(this.value) ? this.value.map(v => Number(v)) : Number(this.value);
    }
  },
  methods: {
    change(value) {
      this.$emit('change', value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
