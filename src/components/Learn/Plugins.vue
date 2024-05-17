<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Advanced Concepts: Plugins</h2>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
        <p class="text-base leading-relaxed">
          Plugins in Vue.js are a way to encapsulate reusable functionality that can be easily integrated into Vue applications. They allow you to extend Vue's core functionality or add third-party libraries to your application in a modular and reusable way.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Using Plugins</h3>
        <p class="text-base leading-relaxed">
          Vue plugins are typically installed and used by calling the <code>Vue.use()</code> method in your application's entry point, such as the main.js file. This method accepts the plugin as an argument and installs it globally on the Vue instance.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  // main.js
  import Vue from 'vue';
  import MyPlugin from './plugins/my-plugin';
  
  Vue.use(MyPlugin);
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example demonstrates how to install a custom plugin named <code>MyPlugin</code> globally in your Vue application.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Creating Plugins</h3>
        <p class="text-base leading-relaxed">
          Vue plugins are simple JavaScript objects or functions that expose a <code>install</code> method. This method receives the Vue constructor as its only argument and can be used to extend Vue's functionality by adding global components, directives, mixins, or other features.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
  export default {
    install(Vue) {
      Vue.prototype.$myMethod = function() {
        // Your plugin logic here
      };
    }
  };
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example defines a custom plugin that adds a global method named <code>$myMethod</code> to the Vue prototype.
        </p>
      </section>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'Plugins'
  };
  </script>
  