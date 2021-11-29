<template>
  <div class="picker" @click="showPanel">
    <input :value="startDate" readonly />
    <div>~</div>
    <input :value="endDate" readonly />
    <a-icon type="calendar" />
    <Panel :visible.sync="visible" :range="range" @select="handleClick" />
  </div>
</template>

<script>
import Panel from './Panel';

export default {
  name: 'PickerDateRange',
  components: { Panel },
  props: {
    value: [Array, String]
  },
  data() {
    return {
      dates: [],
      visible: false
    };
  },
  computed: {
    startDate() {
      if (!Array.isArray(this.value) || this.value.length < 2) return '';
      return `${this.value[0]}日`;
    },
    endDate() {
      if (!Array.isArray(this.value) || this.value.length < 2) return '';
      return `${this.value[1]}日`;
    },
    range() {
      return Array.isArray(this.dates) && this.dates.length ? this.dates : this.value;
    }
  },
  methods: {
    showPanel() {
      this.dates = [];
      this.visible = true;
    },
    handleClick(item) {
      if (this.dates.length < 2) {
        this.dates.push(item);
        if (this.dates.length === 2) this.setValue();
      } else {
        this.dates = [item];
      }
    },
    setValue() {
      this.visible = false;
      this.$emit(
        'change',
        this.range.sort((a, b) => a - b)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.picker {
  width: 300px;
  height: 32px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  position: relative;
  box-sizing: border-box;
  input {
    border: none;
    outline: none;
    height: inherit;
    text-align: center;
    overflow: hidden;
    background: transparent;
  }
  .anticon {
    font-size: 14px;
    margin-right: 8px;
  }
}
</style>
