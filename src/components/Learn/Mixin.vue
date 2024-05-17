<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Advanced Concepts: Mixins</h2>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
        <p class="text-base leading-relaxed">
          Mixins in Vue.js are a way to share reusable functionality between Vue components. They allow you to encapsulate logic and data into reusable objects that can be mixed into multiple components.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Defining Mixins</h3>
        <p class="text-base leading-relaxed">
          Mixins are defined as objects containing component options, such as data, methods, computed properties, and lifecycle hooks. These objects can then be mixed into components using the <code>mixins</code> option in the component definition.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
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
    name: 'MyComponent',
    mixins: [myMixin],
    created() {
      this.logMessage();
    }
  };
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example defines a mixin with data and a method, and then mixes it into a component using the <code>mixins</code> option. The component's <code>created</code> hook calls a method from the mixin to log a message.
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
  