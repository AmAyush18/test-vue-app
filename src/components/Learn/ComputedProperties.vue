<template>
  <div class="p-6 font-sans">
    <h2 class="text-3xl text-teal-300 font-bold mb-4">Core Concepts: Computed Properties</h2>
    
    <section class="mb-6">
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
      <p class="text-base leading-relaxed">
        Computed properties in Vue.js are properties that are calculated based on other data properties. They are cached and only re-evaluated when their dependencies change. Computed properties are useful for performing complex calculations or transformations on data, providing a more efficient and declarative approach to data manipulation.
      </p>
    </section>
    
    <section class="mb-6">
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Defining Computed Properties</h3>
      <p class="text-base leading-relaxed">
        In the Composition API, computed properties are defined using the <code>computed</code> function from Vue. They are reactive and will update when their dependencies change.
      </p>
      <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
        <code class="text-sm leading-relaxed">
  import { ref, computed } from 'vue';

  export default {
    setup() {
      const firstName = ref('Jane');
      const lastName = ref('Doe');

      const fullName = computed(() => {
        return firstName.value + ' ' + lastName.value;
      });

      return {
        firstName,
        lastName,
        fullName
      };
    }
  };
        </code>
      </pre>
      <p class="text-base leading-relaxed">
        The above example defines a computed property <code>fullName</code> that concatenates the values of <code>firstName</code> and <code>lastName</code> reactive properties. The <code>computed</code> function ensures that <code>fullName</code> is only recalculated when either <code>firstName</code> or <code>lastName</code> changes.
      </p>
    </section>
    
    <section class="mb-6">
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Using Computed Properties</h3>
      <p class="text-base leading-relaxed">
        Computed properties can be used in templates just like data properties. They are accessed as if they were regular properties, but Vue handles caching and reactivity under the hood. This makes them very powerful for efficient data manipulation and rendering in templates.
      </p>
      <pre class="bg-black p-2 rounded overflow-auto text-white">
        <code class="text-sm leading-relaxed">
  &lt;p&gt;Full Name: {{ fullName }}&lt;/p&gt;
        </code>
      </pre>
      <p class="text-base leading-relaxed">
        The above example displays the value of the <code>fullName</code> computed property in the template. Vue automatically updates the displayed value whenever the dependencies (<code>firstName</code> or <code>lastName</code>) change, ensuring the UI remains in sync with the underlying data.
      </p>
    </section>
    
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'ComputedProperties',
  setup() {
    const firstName = ref('Jane');
    const lastName = ref('Doe');

    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    return {
      firstName,
      lastName,
      fullName
    };
  }
};
</script>
