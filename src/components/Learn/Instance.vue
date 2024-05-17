<template>
    <div class="p-6 font-sans">
      <h2 class="text-3xl text-teal-500 font-bold mb-4">Core Concepts: Instance</h2>
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">What is a Vue Instance?</h3>
        <p class="text-base leading-relaxed">
          A Vue instance is the root of every Vue application. When you create a new Vue app, you start by creating a new Vue instance. This instance serves as the central part of your application, managing the state, the DOM, and handling the user inputs. Every Vue component is also an instance that encapsulates its own data, methods, and lifecycle hooks.
        </p>
      </section>
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Creating a Vue Instance</h3>
        <p class="text-base leading-relaxed">
          Creating a Vue instance is straightforward. Here’s an example:
        </p>
        <pre class="bg-black p-4 rounded overflow-auto text-white">
          <code class="text-sm leading-relaxed">
  import Vue from 'vue';
  
  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    methods: {
      greet() {
        alert(this.message);
      }
    }
  });
          </code>
        </pre>
      </section>
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Properties and Methods</h3>
        <p class="text-base leading-relaxed">
          When you create a Vue instance, you pass in an options object that can contain various properties and methods. The most commonly used ones are:
        </p>
        <ul class="list-disc list-inside text-base">
          <li class="mb-2"><strong class="font-semibold">el</strong>: Specifies the DOM element to mount the Vue instance.</li>
          <li class="mb-2"><strong class="font-semibold">data</strong>: Contains the application data. Vue makes all properties defined in the data object reactive.</li>
          <li class="mb-2"><strong class="font-semibold">methods</strong>: Holds functions or methods that you can call directly within the instance.</li>
          <li class="mb-2"><strong class="font-semibold">computed</strong>: Defines computed properties that are cached based on their dependencies and re-evaluated only when those dependencies change.</li>
          <li class="mb-2"><strong class="font-semibold">watch</strong>: An object where keys are expressions to watch and values are corresponding callback functions.</li>
        </ul>
      </section>
      <section class="mb-6">
        <h3 class="text-2xl text-orange-200 font-semibold mb-2">Instance Lifecycle</h3>
        <p class="text-base leading-relaxed">
          Every Vue instance goes through a series of initialization steps when it is created. Along the way, it also invokes some lifecycle hooks, which give you the opportunity to add your own code at specific stages. These hooks include:
        </p>
        <ul class="list-disc list-inside text-base">
          <li class="mb-2"><strong class="font-semibold">beforeCreate</strong>: Called synchronously after the instance is initialized, but before data observation and event/watcher setup.</li>
          <li class="mb-2"><strong class="font-semibold">created</strong>: Called after the instance is created. At this point, the instance has finished processing the options, so properties like data, computed, and methods are available.</li>
          <li class="mb-2"><strong class="font-semibold">beforeMount</strong>: Called right before the mounting begins: the render function is about to be called for the first time.</li>
          <li class="mb-2"><strong class="font-semibold">mounted</strong>: Called after the instance has been mounted, where el is replaced by the newly created vm.$el.</li>
          <li class="mb-2"><strong class="font-semibold">beforeUpdate</strong>: Called when data changes, before the DOM is patched.</li>
          <li class="mb-2"><strong class="font-semibold">updated</strong>: Called after a data change causes the virtual DOM to be re-rendered and patched.</li>
          <li class="mb-2"><strong class="font-semibold">beforeDestroy</strong>: Called right before the instance is destroyed. At this stage, the instance is still fully functional.</li>
          <li class="mb-2"><strong class="font-semibold">destroyed</strong>: Called after the instance is destroyed. When this hook is called, all directives are unbound, all event listeners are removed, and all child Vue instances are destroyed.</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Instance',
  };
  </script>