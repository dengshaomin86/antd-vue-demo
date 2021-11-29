<template>
  <div v-if="visible" ref="panel" class="panel" tabindex="1" @blur="blur" @click.stop>
    <div class="panel-title">每月</div>
    <div class="panel-list">
      <template v-for="item in 31">
        <div :key="item" :class="['panel-list-item', { active: range.includes(item) }]" @click="handleClick(item)">{{ item }}</div>
        <!-- <div v-for="item in 10" :key="item" :class="['picker-list-item', { active: range.includes(item) }]" @click="handleClick(item)">{{ item }}</div> -->
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    range: {
      type: [Array]
    }
  },
  watch: {
    async visible(val) {
      if (val) {
        await this.$nextTick();
        this.$refs.panel.focus();
      }
    }
  },
  methods: {
    blur() {
      this.$emit('update:visible', false);
    },
    handleClick(item) {
      this.$emit('select', item);
    }
  }
};
</script>

<style lang="scss" scoped>
.panel {
  width: 300px;
  position: absolute;
  left: -1px;
  top: 34px;
  z-index: 999;
  border: 1px solid #ccc;
  background: #fff;
  box-sizing: border-box;
  outline: none;
  &-title {
    font-size: 14px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    &-item {
      padding: 6px;
      transition: all 0.3s;
      &.active {
        background: skyblue;
        color: #fff;
      }
      &:hover {
        cursor: pointer;
        color: skyblue;
      }
    }
  }
}
</style>
