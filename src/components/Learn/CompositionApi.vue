<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Understanding Vue Composition API</h2>
      <p class="text-base leading-relaxed">
        The Composition API is a new and optional way of organizing component logic in Vue.js. It provides a more
        flexible and scalable approach compared to the Options API, especially for large and complex components.
      </p>
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Key Concepts</h3>
      <ul class="list-disc pl-6">
        <li class="text-base leading-relaxed">
          <strong>Reactivity:</strong> The Composition API leverages Vue's reactivity system, allowing you to create
          reactive data and computed properties using the `ref` and `computed` functions.
        </li>
        <li class="text-base leading-relaxed">
          <strong>Composition Functions:</strong> Instead of defining options like `data`, `computed`, and `methods`,
          logic is organized into reusable functions called composition functions. These functions can be composed
          together to encapsulate related logic.
        </li>
        <li class="text-base leading-relaxed">
          <strong>Setup:</strong> The `setup` function is the entry point for defining component logic in the
          Composition API. It replaces the `data`, `computed`, and `methods` options in the Options API. Inside the
          `setup` function, you can declare reactive state, computed properties, and methods.
        </li>
      </ul>
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Example</h3>
      <pre class="bg-black p-2 rounded overflow-auto text-white">
        <code class="text-sm leading-relaxed">
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      // Define reactive state
      const count = ref(0);
  
      // Define computed property
      const doubleCount = computed(() => count.value * 2);
  
      // Define method
      const increment = () => {
        count.value++;
      };
  
      // Expose variables and functions to template
      return {
        count,
        doubleCount,
        increment
      };
    }
  };
        </code>
      </pre>
      <p class="text-base leading-relaxed">
        In this example, we define a component using the Composition API. The `setup` function defines reactive state
        (`count`), a computed property (`doubleCount`), and a method (`increment`). These are then exposed to the
        template for rendering and interaction.
      </p>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: 'CompositionApi',
    setup() {
      // Define reactive state
      const count = ref(0);
  
      // Define computed property
      const doubleCount = computed(() => count.value * 2);
  
      // Define method
      const increment = () => {
        count.value++;
      };
  
      // Expose variables and functions to template
      return {
        count,
        doubleCount,
        increment
      };
    }
  };
  </script>  