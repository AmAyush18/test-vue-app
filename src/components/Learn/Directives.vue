<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Core Concepts: Directives</h2>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
        <p class="text-base leading-relaxed">
          Directives are special tokens in the template that tell the library to do something to a DOM element. The most common built-in directives are v-bind and v-model, but Vue also allows you to create custom directives.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Built-in Directives</h3>
        <h4 class="text-xl text-teal-300 font-semibold mb-2">v-bind</h4>
        <p class="text-base leading-relaxed">
          The v-bind directive allows you to dynamically bind one or more attributes or a component prop to an expression. It expects a single argument, the expression to bind. The syntax is shorthand with a colon.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  &lt;div v-bind:class="{ active: isActive }"&gt;&lt;/div&gt;
  
  &lt;img :src="imageSrc"&gt;
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example binds the class attribute of a div element and the src attribute of an image element to data properties in the Vue instance.
        </p>
      </section>
      
      <section class="mb-6">
        <h4 class="text-xl text-teal-300 font-semibold mb-2">v-model</h4>
        <p class="text-base leading-relaxed">
          The v-model directive creates a two-way binding on a form input element or a component. It automatically picks the correct way to update the element based on the input type.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
  &lt;input v-model="message"&gt;
  
  &lt;custom-input v-model="value"&gt;&lt;/custom-input&gt;
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example binds the input value to the message data property in the Vue instance. For custom components, v-model automatically picks the correct way to update the value based on the component's props and events.
        </p>
      </section>

      <section class="mb-6">
        <h4 class="text-xl text-teal-300 font-semibold mb-2">v-for</h4>
        <p class="text-base leading-relaxed">
          The v-for directive is used to render a list of items based on an array. It expects an array-like object and iterates over its elements, exposing each element as a variable.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  &lt;ul&gt;
    &lt;li v-for="(item, index) in items" :key="index"&gt;
      {{ item }}
    &lt;/li&gt;
  &lt;/ul&gt;
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example renders a list of items contained in the "items" array.
        </p>
      </section>
      
      <section class="mb-6">
        <h4 class="text-xl text-teal-300 font-semibold mb-2">v-on</h4>
        <p class="text-base leading-relaxed">
          The v-on directive is used to attach event listeners to elements. It expects an event name and a handler function.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  &lt;button v-on:click="handleClick"&gt;Click Me&lt;/button&gt;
  
  &lt;input v-on:input="handleInput"&gt;
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example attaches event listeners for click and input events to a button and an input element, respectively.
        </p>
      </section>
      
      <section class="mb-6">
        <h4 class="text-xl text-teal-300 font-semibold mb-2">v-if / v-else</h4>
        <p class="text-base leading-relaxed">
          The v-if directive is used to conditionally render a block of HTML based on the provided expression. If the expression evaluates to true, the block is rendered; otherwise, it is removed from the DOM. The v-else directive works as a sibling to v-if and is used to display content when the v-if condition is false.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
  &lt;div v-if="isLoggedIn"&gt;
    Welcome, {{ username }}
  &lt;/div&gt;
  &lt;div v-else&gt;
    Please log in.
  &lt;/div&gt;
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example conditionally renders a welcome message if the user is logged in, otherwise, it displays a login prompt.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Custom Directives</h3>
        <p class="text-base leading-relaxed">
          In addition to the built-in directives, Vue allows you to register custom directives for more advanced behavior. Custom directives are registered using Vue.directive, and can accept several hooks such as bind, inserted, update, componentUpdated, and unbind.
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  Vue.directive('focus', {
    inserted: function (el) {
      el.focus();
    }
  });
  
  &lt;input v-focus&gt;
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          The above example defines a custom directive v-focus that focuses the input element when inserted into the DOM.
        </p>
      </section>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'Directives',
  };
  </script>
  