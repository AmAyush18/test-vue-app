<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Core Concepts: Data Binding</h2>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
        <p class="text-base leading-relaxed">
          Data binding in Vue.js is the process of synchronizing data between the Vue instance and the DOM. Vue provides a reactive and composable data-binding system that allows you to declaratively associate DOM elements with Vue data properties.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">One-Way Binding</h3>
        <p class="text-base leading-relaxed">
          Vue.js uses one-way data binding by default, meaning data flows from the Vue instance to the DOM. Changes in the Vue instance automatically update the DOM, but changes in the DOM do not affect the Vue instance.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Two-Way Binding</h3>
        <p class="text-base leading-relaxed">
          Vue also supports two-way data binding using the v-model directive. It creates a binding that syncs the input value with a data property. Changes to the input value in the DOM are reflected in the Vue instance, and changes in the Vue instance update the input value in the DOM.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  &lt;input v-model="message"&gt;
  
  &lt;textarea v-model="text"&gt;&lt;/textarea&gt;
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example binds the input value of an input element and the text value of a textarea element to data properties in the Vue instance.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Reactivity</h3>
        <p class="text-base leading-relaxed">
          Vue.js implements reactivity using the Observer pattern. It converts plain JavaScript objects into reactive objects by recursively adding getters and setters to each property. When a property is accessed or modified, Vue automatically updates any bindings that depend on that property.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
  new Vue({
    data() {
      return {
        count: 0
      };
    }
  });
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          In the above example, any changes to the count property will trigger updates to any bindings that reference it.
        </p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DataBinding',
    data() {
      return {
        message: 'Hello Vue!',
        text: 'Some text',
      };
    },
  };
  </script>
  