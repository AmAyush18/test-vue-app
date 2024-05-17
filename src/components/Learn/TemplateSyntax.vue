<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Core Concepts: Template Syntax</h2>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
        <p class="text-base leading-relaxed">
          Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance’s data. All Vue templates are valid HTML that can be parsed by browsers and HTML parsers. Vue compiles the templates into Virtual DOM render functions.
        </p>
      </section>
      
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Interpolations</h3>
        <h4 class="text-xl text-teal-300 font-semibold mb-2">Text</h4>
        <p class="text-base leading-relaxed">
          The most basic form of data binding is text interpolation using the “Mustache” syntax (double curly braces):
        </p>
        <p class="text-base leading-relaxed">
          The data properties of the Vue instance are available in the template:
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
    new Vue({
        data: {
        message: 'Hello Vue!'
        }
    });
          </code>
        </pre>
      </section>
      
      <section class="mb-6">
        <h4 class="text-xl text-teal-300 font-semibold mb-2">Raw HTML</h4>
        <p class="text-base leading-relaxed">
          The double curly braces will interpret the data as plain text, not HTML. To output raw HTML, use the v-html directive:
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  &lt;span v-html="rawHtml"&gt;&lt;/span&gt;
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          Be careful when using v-html as it can make your application vulnerable to XSS attacks.
        </p>
      </section>
      
      <section class="mb-6">
        <h4 class="text-xl text-teal-300 font-semibold mb-2">Attributes</h4>
        <p class="text-base leading-relaxed">
          Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive:
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  &lt;a v-bind:href="url"&gt;Link&lt;/a&gt;
          </code>
        </pre>
        <p class="text-base leading-relaxed">
          There is also a shorthand for v-bind:
        </p>
        <pre class="bg-black p-2 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
  &lt;a :href="url"&gt;Link&lt;/a&gt;
          </code>
        </pre>
      </section>
      
      <section class="mb-6">
        <h4 class="text-xl text-teal-300 font-semibold mb-2">Using JavaScript Expressions</h4>
        <p class="text-base leading-relaxed">
          You can perform JavaScript expressions inside bindings.
        </p>
        <!-- <pre class="bg-black p-2 rounded overflow-auto text-white mb-4">
          <code class="text-sm leading-relaxed">
  {{ number + 1 }}
  
  {{ ok ? 'YES' : 'NO' }}
          </code>
        </pre> -->
        <p class="text-base leading-relaxed">
          These expressions have access to all the data properties of the Vue instance.
        </p>
      </section>
      
    </div>
</template>
  
  <script>
  export default {
    name: 'TemplateSyntax',
  };
  </script>
  