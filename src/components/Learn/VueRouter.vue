<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Advanced Concepts: Vue Router</h2>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
        <p class="text-base leading-relaxed">
          Vue Router is the official routing library for Vue.js. It enables navigation between different views in a Vue.js application, allowing you to build single-page applications with client-side routing.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Core Concepts</h3>
        <p class="text-base leading-relaxed">
          Vue Router introduces several core concepts:
        </p>
        <ul class="list-disc pl-6">
          <li class="text-base leading-relaxed">Routes: Defines the mapping between URLs and Vue components.</li>
          <li class="text-base leading-relaxed">Router instance: Manages the application's route configuration.</li>
          <li class="text-base leading-relaxed">Router-view: Renders the component associated with the current route.</li>
          <li class="text-base leading-relaxed">Router-link: Generates a hyperlink to navigate between routes.</li>
          <li class="text-base leading-relaxed">Navigation Guards: Functions to control navigation behavior and perform tasks before or after navigation.</li>
          <li class="text-base leading-relaxed">Dynamic Routes: Allows defining dynamic segments in route paths.</li>
        </ul>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Using Vue Router</h3>
        <p class="text-base leading-relaxed">
          To use Vue Router in a Vue.js application, you need to install it and configure routes. The router is then injected into the root Vue instance and made available to all components in the application.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  // main.js
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import routes from './routes';
  
  Vue.use(VueRouter);
  
  const router = new VueRouter({
    routes
  });
  
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above code snippet demonstrates how to set up Vue Router in a Vue.js application by creating a router instance and injecting it into the root Vue instance.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Defining Routes</h3>
        <p class="text-base leading-relaxed">
          Routes are defined as an array of route objects, where each object specifies the path and component to render for that path.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
  // routes.js
  import Home from './components/Home.vue';
  import About from './components/About.vue';
  
  const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ];
  
  export default routes;
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above code snippet demonstrates how to define routes for a Vue.js application using Vue Router.
        </p>
      </section>
      
    </div>
  </template>
  
  <script>
  import routes from '../../router';
  
  export default {
    name: 'VueRouter',
    data() {
      return {
        routes
      };
    }
  };
  </script>
  