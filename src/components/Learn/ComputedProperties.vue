<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Core Concepts: Computed Properties</h2>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
        <p class="text-base leading-relaxed">
          Computed properties in Vue.js are properties that are calculated based on other data properties. They are cached and only re-evaluated when their dependencies change. Computed properties are useful for performing complex calculations or transformations on data.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Defining Computed Properties</h3>
        <p class="text-base leading-relaxed">
          Computed properties are defined within the computed property of the Vue instance. They are defined as functions that return a value based on other data properties.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example defines a computed property fullName that concatenates the values of firstName and lastName data properties.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Using Computed Properties</h3>
        <p class="text-base leading-relaxed">
          Computed properties can be used in templates just like data properties. They are accessed as if they were regular properties, but Vue handles caching and reactivity under the hood.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
  &lt;p&gt;Full Name: {{ fullName }}&lt;/p&gt;
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example displays the value of the fullName computed property in the template.
        </p>
      </section>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'ComputedProperties',
    data() {
      return {
        firstName: 'Jane',
        lastName: 'Doe'
      };
    },
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      }
    }
  };
  </script>
  