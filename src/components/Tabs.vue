<template>
  <div class="tabs">
    <template v-if="visible">
      {{ activeTabKey }}
      <a-tabs :activeKey="activeTabKey" hide-add type="editable-card" @edit="onEdit" @change="change">
        <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
          <slot></slot>
        </a-tab-pane>
      </a-tabs>
    </template>
    <slot v-else></slot>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Tabs',
  data() {
    return {
      loaded: false
    };
  },
  computed: {
    ...mapState('tabs', ['panes', 'activeTabKey']),
    visible() {
      if (!this.loaded) return false;
      if (this.$route.name === 'Home') return false;
      return true;
    }
  },
  watch: {
    $route(n) {
      // console.log(n);
      const { name, fullPath, params } = n;
      let title = name;
      let key = name;
      if (name === 'Portal') {
        title = `Portal-${params.id}`;
        key = `Portal-${params.id}`;
      }
      this.appendPane({ title, key, url: fullPath });
    }
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    ...mapMutations('tabs', ['appendPane', 'setActiveTabKey']),
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    change(key) {
      this.setActiveTabKey(key);
      const { url } = this.panes.find(item => item.key === key);
      this.$router.push(url);
    },
    remove(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter(pane => pane.key !== targetKey);
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key;
        } else {
          activeKey = panes[0].key;
        }
      }
      this.panes = panes;
      this.activeKey = activeKey;
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-pane {
  min-height: 100px;
  background: gold;
  &.portal {
    background: pink;
  }
}
</style>
