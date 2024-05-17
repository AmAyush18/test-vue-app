<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Advanced Concepts: Filters</h2>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
        <p class="text-base leading-relaxed">
          Filters in Vue.js are a way to apply text formatting or data transformation to output in templates. They allow you to apply common text formatting operations or custom data transformations to data displayed in templates.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Using Filters</h3>
        <p class="text-base leading-relaxed">
          Filters are applied in template expressions using the pipe (|) syntax. You can use built-in filters provided by Vue.js or define custom filters to meet your specific requirements.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Defining Custom Filters</h3>
        <p class="text-base leading-relaxed">
          Custom filters can be defined globally using the <code>Vue.filter</code> method or locally within a component's options. Custom filters are functions that take a value as input and return the transformed value.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
  Vue.filter('capitalize', function(value) {
    if (!value) return '';
    return value.toString().charAt(0).toUpperCase() + value.slice(1);
  });
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example defines a global <code>capitalize</code> filter that capitalizes the first letter of a string.
        </p>
      </section>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'Filters',
    data() {
      return {
        message: 'hello world'
      };
    },
    filters: {
      capitalize(value) {
        if (!value) return '';
        return value.toString().charAt(0).toUpperCase() + value.slice(1);
      }
    }
  };
  </script>
  