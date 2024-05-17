<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Advanced Concepts: Vuex</h2>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
        <p class="text-base leading-relaxed">
          Vuex is a state management pattern and library for Vue.js applications. It serves as a centralized store for all the components in an application, allowing you to manage state in a predictable way and facilitate communication between components.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Core Concepts</h3>
        <p class="text-base leading-relaxed">
          Vuex introduces several core concepts:
        </p>
        <ul class="list-disc pl-6">
          <li class="text-base leading-relaxed">State: Single source of truth for the entire application's state.</li>
          <li class="text-base leading-relaxed">Getters: Functions that compute derived state based on store state.</li>
          <li class="text-base leading-relaxed">Mutations: Functions that directly mutate the store's state.</li>
          <li class="text-base leading-relaxed">Actions: Functions that commit mutations. They can contain asynchronous operations.</li>
          <li class="text-base leading-relaxed">Modules: Organize store into separate modules, each with its own state, getters, mutations, actions, and nested modules.</li>
        </ul>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Using Vuex</h3>
        <p class="text-base leading-relaxed">
          To use Vuex in a Vue.js application, you need to install it and create a Vuex store. The store is then injected into the root Vue instance and made available to all components in the application.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  // main.js
  import Vue from 'vue';
  import Vuex from 'vuex';
  import store from './store';
  
  Vue.use(Vuex);
  
  new Vue({
    store,
    render: h => h(App)
  }).$mount('#app');
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above code snippet demonstrates how to set up Vuex in a Vue.js application by creating a store and injecting it into the root Vue instance.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Defining a Store</h3>
        <p class="text-base leading-relaxed">
          A Vuex store is defined as a JavaScript object containing state, getters, mutations, actions, and modules.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
  import Vue from 'vue';
  import Vuex from 'vuex';
  
  Vue.use(Vuex);
  
  export default new Vuex.Store({
    state: {
      // Application state
    },
    getters: {
      // Getters
    },
    mutations: {
      // Mutations
    },
    actions: {
      // Actions
    },
    modules: {
      // Modules
    }
  });
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above code snippet demonstrates how to define a Vuex store with state, getters, mutations, actions, and modules.
        </p>
      </section>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'Vuex'
  };
  </script>
  