<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Core Concepts: Lifecycle Hooks</h2>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
        <p class="text-base leading-relaxed">
          Lifecycle hooks in Vue.js are special methods that allow you to perform actions at specific stages of a component's lifecycle. These hooks provide opportunities to execute code when a component is created, mounted, updated, or destroyed.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Available Lifecycle Hooks</h3>
        <p class="text-base leading-relaxed">
          Vue provides a set of lifecycle hooks that correspond to different stages in a component's lifecycle. Some of the most commonly used lifecycle hooks include <code>created</code>, <code>mounted</code>, <code>updated</code>, and <code>destroyed</code>.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  export default {
    name: 'MyComponent',
    created() {
      console.log('Component created');
    },
    mounted() {
      console.log('Component mounted');
    },
    updated() {
      console.log('Component updated');
    },
    destroyed() {
      console.log('Component destroyed');
    }
  };
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The <code>created</code> hook is called when the component is created, <code>mounted</code> when it's inserted into the DOM, <code>updated</code> when data changes and the DOM updates, and <code>destroyed</code> when the component is removed from the DOM.
        </p>
      </section>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'LifecycleHooks',
    created() {
      console.log('Component created');
    },
    mounted() {
      console.log('Component mounted');
    },
    updated() {
      console.log('Component updated');
    },
    destroyed() {
      console.log('Component destroyed');
    }
  };
  </script>