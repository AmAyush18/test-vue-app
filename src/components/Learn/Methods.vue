<template>
  <div class="p-6 font-sans">
    <h2 class="text-3xl text-teal-300 font-bold mb-4">Core Concepts: Methods</h2>
    
    <section class="mb-6">
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
      <p class="text-base leading-relaxed">
        Methods in Vue.js are functions defined within the Vue instance that can be called from the template or other methods. They are commonly used to define behavior or logic associated with user interactions or other events.
      </p>
    </section>
    
    <section class="mb-6">
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Defining Methods</h3>
      <p class="text-base leading-relaxed">
        Methods are defined within the setup function of the Vue component. They can be regular JavaScript functions or ES6 arrow functions.
      </p>
      <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
        <code class="text-sm leading-relaxed">
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const greet = () => {
        console.log('Hello!');
      };

      const handleClick = () => {
        console.log('Button clicked');
      };

      return {
        greet,
        handleClick
      };
    }
  });
        </code>
      </pre>
      <p class="text-base leading-relaxed">
        The above example defines two methods, greet and handleClick, within the setup function of the Vue component.
      </p>
    </section>
    
    <section class="mb-6">
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Calling Methods</h3>
      <p class="text-base leading-relaxed">
        Methods can be called from the template using the v-on directive or the shorthand @, followed by the event name.
      </p>
      <pre class="bg-black p-2 rounded overflow-auto text-white">
        <code class="text-sm leading-relaxed">
  &lt;button @click="handleClick"&gt;Click Me&lt;/button&gt;
        </code>
      </pre>
      <p class="text-base leading-relaxed">
        The above example calls the handleClick method when the button is clicked.
      </p>
    </section>
    
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Methods',
  setup() {
    const greet = () => {
      console.log('Hello!');
    };

    const handleClick = () => {
      console.log('Button clicked');
    };

    return {
      greet,
      handleClick
    };
  }
});
</script>
