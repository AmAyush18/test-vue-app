<template>
    <div class="flex flex-col gap-y-4 w-[250px] py-4 px-2 bg-slate-900 fixed bottom-0 left-0 max-h-[89vh] overflow-y-auto">
      <div class="w-[90%] mx-auto flex gap-x-4 justify-center items-center">
        <img src="/vite.svg" alt="Vite Logo" class="w-[42px] h-[42px] object-cover">
        <h4 class="text-[24px] text-teal-300 font-semibold">Vue-Dev</h4>
      </div>
      <div class="w-[90%] mx-auto flex flex-col gap-y-2">
        <button v-for="(option, index) in options" :key="index"
                @click="selectOption(index)"
                :class="{'bg-yellow-500 text-white': index === indexSelected}"
                class="w-full py-2 rounded border border-teal-500 hover:bg-yellow-300 hover:text-white transition shadow-xl">
          {{ option.name }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Sidebar',
    setup(props, { emit }) {
      const indexSelected = ref(0);
      const options = ref([
        { name: 'Introduction', component: 'Introduction' },
        { name: 'Instance', component: 'Instance' },
        { name: 'TemplateSyntax', component: 'TemplateSyntax' },
        { name: 'Directives', component: 'Directives' },
        { name: 'DataBinding', component: 'DataBinding' },
        { name: 'Methods', component: 'Methods' },
        { name: 'Watchers', component: 'Watchers' },
        { name: 'ComputedProperties', component: 'ComputedProperties' },
        { name: 'LifecycleHooks', component: 'LifecycleHooks' },
        { name: 'Mixin', component: 'Mixin' },
        { name: 'Filters', component: 'Filters' },
        { name: 'Plugins', component: 'Plugins' },
        { name: 'Vuex', component: 'Vuex' },
        { name: 'VueRouter', component: 'VueRouter' }
      ]);
  
      const selectOption = (index) => {
        indexSelected.value = index;
        emit('update:selectedIndex', options.value[index].component);
      };
  
      return {
        options,
        indexSelected,
        selectOption
      };
    }
  }
  </script>
  