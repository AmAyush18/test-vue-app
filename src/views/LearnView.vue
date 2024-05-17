<template>
  <div class="w-full flex gap-x-2 overflow-hidden">
    <div class="w-[240px] flex-shrink-0">
      <Sidebar @update:selectedIndex="updateSelectedComponent" />
    </div>
    <div class="flex-1 overflow-y-auto max-h-[90vh]">
      <component :is="selectedComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
import Sidebar from '../components/Learn/Sidebar.vue';

// Lazy load components
const Introduction = defineAsyncComponent(() => import('../components/Learn/Introduction.vue'));
const Instance = defineAsyncComponent(() => import('../components/Learn/Instance.vue'));
const TemplateSyntax = defineAsyncComponent(() => import('../components/Learn/TemplateSyntax.vue'));
const Directives = defineAsyncComponent(() => import('../components/Learn/Directives.vue'));
const DataBinding = defineAsyncComponent(() => import('../components/Learn/DataBinding.vue'));
const Methods = defineAsyncComponent(() => import('../components/Learn/Methods.vue'));
const Watchers = defineAsyncComponent(() => import('../components/Learn/Watchers.vue'));
const ComputedProperties = defineAsyncComponent(() => import('../components/Learn/ComputedProperties.vue'));
const LifecycleHooks = defineAsyncComponent(() => import('../components/Learn/LifecycleHooks.vue'));
const Mixin = defineAsyncComponent(() => import('../components/Learn/Mixin.vue'));
const Filters = defineAsyncComponent(() => import('../components/Learn/Filters.vue'));
const Plugins = defineAsyncComponent(() => import('../components/Learn/Plugins.vue'));
const Vuex = defineAsyncComponent(() => import('../components/Learn/Vuex.vue'));
const VueRouter = defineAsyncComponent(() => import('../components/Learn/VueRouter.vue'));

// Map of component names to component objects
const componentMap = {
  Introduction,
  Instance,
  TemplateSyntax,
  Directives,
  DataBinding,
  Methods,
  Watchers,
  ComputedProperties,
  LifecycleHooks,
  Mixin,
  Filters,
  Plugins,
  Vuex,
  VueRouter
};

const selectedComponent = ref(Introduction);

const updateSelectedComponent = (componentName) => {
  selectedComponent.value = componentMap[componentName];
};
</script>
