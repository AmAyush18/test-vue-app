<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-300 font-bold mb-4">Understanding Vue Slots</h2>
      <p class="text-base leading-relaxed">
        Slots are a powerful feature in Vue.js that allow you to create flexible and reusable components by providing a
        way to inject content into a component from the parent scope.
      </p>
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Key Concepts</h3>
      <ul class="list-disc pl-6">
        <li class="text-base leading-relaxed">
          <strong>Named Slots:</strong> Vue allows you to define slots with specific names, allowing the parent component
          to inject content into the appropriate slot.
        </li>
        <li class="text-base leading-relaxed">
          <strong>Scoped Slots:</strong> Scoped slots provide a way to pass data from the parent component into the slot
          content, enabling more dynamic and reusable components.
        </li>
        <li class="text-base leading-relaxed">
          <strong>Default Slots:</strong> If a component does not specify any named slots, any content passed into the
          component will be placed in the default slot.
        </li>
      </ul>
      <h3 class="text-2xl text-orange-200 font-semibold mb-2">Example</h3>
      <p class="text-base leading-relaxed">
        Let's create a simple component with a named slot and a default slot.
      </p>
      <pre class="bg-black p-2 rounded overflow-auto text-white">
        <code class="text-sm leading-relaxed">
  &lt;template&gt;
    &lt;div class="card"&gt;
      &lt;h3 class="title"&gt;&lt;slot name="header" :title="cardTitle"&gt;&lt;/slot&gt;&lt;/h3&gt;
      &lt;div class="content"&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script setup&gt;
  import { ref } from 'vue';
  const cardTitle = ref('Default Card Title');
  &lt;/script&gt;
  
  &lt;style scoped&gt;
  /* Add your component-specific styles here */
  .card {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  &lt;/style&gt;
        </code>
      </pre>
      <p class="text-base leading-relaxed">
        In this example, we create a `Card` component with two slots: a named slot for the header and a default slot for
        the content. We pass data (in this case, the card title) to the named slot using scoped slots. The parent
        component can then provide content and data to these slots, allowing for greater flexibility and reusability.
      </p>
    </div>
</template>
  
<script>
export default {
name: 'SlotsComponent'
};
</script>