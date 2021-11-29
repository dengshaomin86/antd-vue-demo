<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu theme="dark" mode="horizontal" :default-selected-keys.sync="selectKey" :style="{ lineHeight: '64px' }">
        <a-menu-item key="Home">
          <router-link to="/">Home</router-link>
        </a-menu-item>
        <a-menu-item key="About">
          <router-link to="/about">About</router-link>
        </a-menu-item>
        <a-menu-item key="User">
          <router-link to="/user">User</router-link>
        </a-menu-item>
        <a-menu-item key="Portal001">
          <router-link to="/portal/001">Portal001</router-link>
        </a-menu-item>
        <a-menu-item key="Portal002">
          <router-link to="/portal/002">Portal002</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '700px' }">
        <slot></slot>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    selectKey() {
      if (!this.$route || !this.$route.name) return [];
      return [this.$route.name];
    }
  }
};
</script>

<style></style>
