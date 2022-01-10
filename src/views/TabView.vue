<template>
  <div>
    <a-tabs :activeKey="activeKey" type="editable-card" @edit="onEdit" @change="change">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
        {{ pane.content }}
      </a-tab-pane>
    </a-tabs>

    <div v-for="pane in panes" :key="pane.key">
      <iframe :src="pane.url" frameborder="0" width="800" height="500" v-show="pane.key === activeKey" :sandbox="sandbox" referrerpolicy="origin" />
    </div>
  </div>
</template>

<script>
import '@/utils/history2';

export default {
  data() {
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1', url: 'http://localhost:8081/#/' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2', url: 'https://cn.bing.com/' },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false, url: 'https://cn.bing.com/' }
    ];
    return {
      // activeKey: panes[0].key,
      panes,
      newTabIndex: 0
    };
  },
  computed: {
    activeKey() {
      return this.$route.params.id;
    },
    sandbox() {
      return 'allow-scripts';
    }
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    change(key) {
      console.log(key);
      // history.pushState({ first: 'first' }, 'page2', '/first');
      if (key == 3) {
        this.$router.replace({ name: 'TabView', params: { id: key } });
        return false;
      }
      this.$router.push({ name: 'TabView', params: { id: key } });
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    add() {
      const panes = this.panes;
      const activeKey = `newTab${this.newTabIndex++}`;
      panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
      this.panes = panes;
      this.activeKey = activeKey;
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
