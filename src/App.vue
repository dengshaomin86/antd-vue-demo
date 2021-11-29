<template>
  <div id="app">
    <!-- <Layout>
      <Tabs>
        <keep-alive :include="['Portal']">
          <router-view />
        </keep-alive>
      </Tabs>
    </Layout> -->
    <router-view />
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import Tabs from '@/components/Tabs';

export default {
  name: 'app',
  // components: {
  //   Layout,
  //   Tabs
  // }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  .ant-layout {
    height: 100%;
  }
}
</style>
