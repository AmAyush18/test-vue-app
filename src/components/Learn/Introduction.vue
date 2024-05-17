<template>
<div class="p-6 font-sans">
    <h2 class="text-3xl text-teal-500 font-bold mb-4">Introduction to Vue.js</h2>
    <section class="mb-6">
    <h3 class="text-2xl text-orange-200 font-semibold mb-2">Overview</h3>
    <p class="text-base leading-relaxed">
        Vue.js is a progressive JavaScript framework used to build user interfaces. Unlike monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library focuses on the view layer only, and it is easy to pick up and integrate with other libraries or existing projects. Vue also powers sophisticated single-page applications when used in combination with modern tooling and supporting libraries.
    </p>
    </section>
    <section class="mb-6">
    <h3 class="text-2xl text-orange-200 font-semibold mb-2">Key Features</h3>
    <ul class="list-disc list-inside text-base">
        <li class="mb-2"><strong class="font-semibold">Reactive Data Binding</strong>: Vue's reactivity system ensures that the DOM stays in sync with the underlying data.</li>
        <li class="mb-2"><strong class="font-semibold">Component-Based Architecture</strong>: Vue's component system is designed to be flexible and promote reusability.</li>
        <li class="mb-2"><strong class="font-semibold">Declarative Rendering</strong>: Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance's data.</li>
        <li class="mb-2"><strong class="font-semibold">Transition Effects</strong>: Vue provides a way to apply transition effects when items are inserted, updated, or removed from the DOM.</li>
        <li class="mb-2"><strong class="font-semibold">Single-File Components</strong>: Vue allows you to define your entire component in a single <code class="bg-gray-800 px-1 rounded">.vue</code> file, which encapsulates the HTML, JavaScript, and CSS needed for the component.</li>
    </ul>
    </section>
    <section class="mb-6">
    <h3 class="text-2xl text-orange-200 font-semibold mb-2">Getting Started</h3>
    <p class="text-base leading-relaxed mb-4">
        To get started with Vue.js, you can include it via a CDN, use a Vue CLI to scaffold a project, or integrate it into an existing project. Here’s a simple example to get you started:
    </p>
    <pre class="bg-black p-4 rounded overflow-auto">
        <code class="text-sm leading-relaxed text-white-800">
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
        &lt;head&gt;
            &lt;title&gt;Hello Vue&lt;/title&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/vue@2"&gt;&lt;/script&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;div id="app"&gt;
                {{ message }}
            &lt;/div&gt;

            &lt;script&gt;
                new Vue({
                el: '#app',
                data: {
                    message: 'Hello Vue!'
                }
                });
            &lt;/script&gt;
        &lt;/body&gt;
    &lt;/html&gt;
        </code>
    </pre>
    </section>
</div>
</template>

<script>
export default {
    name: 'Introduction',
};
</script>

