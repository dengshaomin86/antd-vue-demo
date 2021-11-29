<template>
  <div class="picker">
    <h1>PickerDate</h1>
    <input :value="value" />
    <div class="picker-list">
      <div v-for="item in 10" :key="item" class="picker-list-item" @click="handleClick(item)">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PickerDate',
  props: {
    value: [Number, String]
  },
  methods: {
    handleClick(item) {
      this.$emit('change', item);
    }
  }
};
</script>

<style lang="scss" scoped>
.picker {
  user-select: none;
  &-list {
    display: flex;
    flex-wrap: wrap;
    &-item {
      margin: 6px;
      transition: all 0.3s;
      &:hover {
        cursor: pointer;
        color: skyblue;
      }
    }
  }
}
</style>
