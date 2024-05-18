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
        Watchers are defined within the setup function of the Vue component. The watch function takes two arguments: the reactive property to watch and a callback function that receives the new and old values of the watched property.
      </p>
      <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
        <code class="text-sm leading-relaxed">
  import { ref, watch } from 'vue';

  export default {
    setup() {
      const message = ref('Hello!');
      
      watch(message, (newValue, oldValue) => {
        console.log('Message changed from', oldValue, 'to', newValue);
      });

      return {
        message
      };
    }
  };
        </code>
      </pre>
      <p class="text-base leading-relaxed">
        The above example defines a watcher for the message reactive property. Whenever the message property changes, the watcher function is called with the new and old values of the property.
      </p>
    </section>
    
    <section class="mb-6">
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Watcher Options</h3>
      <p class="text-base leading-relaxed">
        Watchers can also be configured with options to control when they should be invoked. Options include immediate and deep properties.
      </p>
      <pre class="bg-black p-2 rounded overflow-auto text-white">
        <code class="text-sm leading-relaxed">
  import { ref, watch } from 'vue';

  export default {
    setup() {
      const count = ref(0);
      
      watch(count, (newValue, oldValue) => {
        console.log('Count changed from', oldValue, 'to', newValue);
      }, { immediate: true });

      return {
        count
      };
    }
  };
        </code>
      </pre>
      <p class="text-base leading-relaxed">
        The above example defines a watcher for the count reactive property with the immediate option set to true, causing the watcher to be invoked immediately after the component is created.
      </p>
    </section>
    
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'Watchers',
  setup() {
    const message = ref('Hello!');
    const count = ref(0);

    watch(message, (newValue, oldValue) => {
      console.log('Message changed from', oldValue, 'to', newValue);
    });

    watch(count, (newValue, oldValue) => {
      console.log('Count changed from', oldValue, 'to', newValue);
    }, { immediate: true });

    return {
      message,
      count
    };
  }
};
</script>
