<template>
  <div class="p-6 font-sans">
    <h2 class="text-3xl text-teal-300 font-bold mb-4">Advanced Concepts: Mixins</h2>
    
    <section class="mb-6">
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
      <p class="text-base leading-relaxed">
        Mixins in Vue.js are a way to share reusable functionality between Vue components. They allow you to encapsulate logic and data into reusable objects that can be mixed into multiple components. Mixins can contain any component options such as data, methods, computed properties, and lifecycle hooks. However, with the Composition API, we use composables to achieve similar functionality.
      </p>
    </section>
    
    <section class="mb-6">
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Defining Mixins (Using Composables)</h3>
      <p class="text-base leading-relaxed">
        Composables are functions that encapsulate reusable logic and can be used across multiple components. They are defined as JavaScript functions that can return reactive state, methods, and computed properties.
      </p>
      <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
        <code class="text-sm leading-relaxed">
  import { ref } from 'vue';

  export function useMessage() {
    const message = ref('Hello from composable!');

    function logMessage() {
      console.log(message.value);
    }

    return {
      message,
      logMessage
    };
  }
        </code>
      </pre>
      <p class="text-base leading-relaxed">
        The above example defines a composable <code>useMessage</code> that provides a reactive property <code>message</code> and a method <code>logMessage</code>. This composable can then be used in any component.
      </p>
    </section>
    
    <section class="mb-6">
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Using Composables</h3>
      <p class="text-base leading-relaxed">
        To use a composable in a component, simply import it and call it within the <code>setup</code> function. The returned properties and methods can be used directly in the component's template and logic.
      </p>
      <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
        <code class="text-sm leading-relaxed">
  import { defineComponent } from 'vue';
  import { useMessage } from './useMessage';

  export default defineComponent({
    name: 'MyComponent',
    setup() {
      const { message, logMessage } = useMessage();

      logMessage();

      return {
        message,
        logMessage
      };
    }
  });
        </code>
      </pre>
      <p class="text-base leading-relaxed">
        The above example shows how to use the <code>useMessage</code> composable in a component. The component logs the message when it is created and makes the <code>message</code> reactive property available to the template.
      </p>
    </section>

    <section class="mb-6">
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Combining Multiple Composables</h3>
      <p class="text-base leading-relaxed">
        You can combine multiple composables in a single component to reuse various pieces of logic. Each composable can encapsulate different aspects of the component's behavior or state management.
      </p>
      <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
        <code class="text-sm leading-relaxed">
  import { defineComponent } from 'vue';
  import { useMessage } from './useMessage';
  import { useCounter } from './useCounter'; // Assume another composable

  export default defineComponent({
    name: 'CombinedComponent',
    setup() {
      const { message, logMessage } = useMessage();
      const { count, increment } = useCounter();

      logMessage();

      return {
        message,
        logMessage,
        count,
        increment
      };
    }
  });
        </code>
      </pre>
      <p class="text-base leading-relaxed">
        The above example demonstrates how to use multiple composables, <code>useMessage</code> and <code>useCounter</code>, within a single component. This allows you to combine reusable logic for handling messages and a counter in a clean and modular way.
      </p>
    </section>
  </div>
</template>
  
  <script>
  const myMixin = {
    data() {
      return {
        message: 'Hello from mixin!'
      };
    },
    methods: {
      logMessage() {
        console.log(this.message);
      }
    }
  };
  
  export default {
    name: 'Mixin',
    mixins: [myMixin],
    created() {
      this.logMessage();
    }
  };
  </script>
  