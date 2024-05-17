<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Core Concepts: Watchers</h2>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
        <p class="text-base leading-relaxed">
          Watchers in Vue.js are a powerful feature that allows you to perform asynchronous or expensive operations in response to changes in data properties. They provide an alternative to computed properties for executing logic based on changes to data.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Defining Watchers</h3>
        <p class="text-base leading-relaxed">
          Watchers are defined within the watchers property of the Vue instance. Each watcher is a function that receives two arguments: newValue and oldValue, representing the new and old values of the watched property, respectively.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  watch: {
    message(newValue, oldValue) {
      console.log('Message changed from', oldValue, 'to', newValue);
    }
  }
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example defines a watcher for the message data property. Whenever the message property changes, the watcher function is called with the new and old values of the property.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Watcher Options</h3>
        <p class="text-base leading-relaxed">
          Watchers can also be configured with options to control when they should be invoked. Options include immediate, deep, and handler properties.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
  watch: {
    count: {
      handler(newValue, oldValue) {
        console.log('Count changed from', oldValue, 'to', newValue);
      },
      immediate: true
    }
  }
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example defines a watcher for the count data property with the immediate option set to true, causing the watcher to be invoked immediately after the component is created.
        </p>
      </section>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'Watchers',
    data() {
      return {
        message: 'Hello!',
        count: 0
      };
    },
    watch: {
      message(newValue, oldValue) {
        console.log('Message changed from', oldValue, 'to', newValue);
      }
    }
  };
  </script>
  