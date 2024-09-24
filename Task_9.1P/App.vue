<template>
 <div id="app">
 <img src="/src/assets/img.jpg" alt="Placeholder Image" 
class="app-image"/>
 <h1>{{ message }}</h1>
 <h2>{{ subtitle }}</h2>
 <p class="des">{{ description }}</p>
 <p><strong>Reflection:</strong> {{ reflection }}</p>
 <h3>Your List Title</h3> 
 <!-- Add your own list of subjects here --> 
  <ul>
    <li>Subject 1</li>
    <li>Subject 2</li>
    <li>Subject 3</li>
    <li>Subject 4</li>
    <li>Subject 5</li>
  </ul>
 </div>
</template>

<script>
export default {
 name: 'App',
 data() {
 return {
 message: 'A Wonderfull Day !!!',
 subtitle: 'This is a vue Project',
 description: 'This is a simple Vue application done by me to learn about web development using vue.',
 reflection: 'The most challenging aspect of the task was figuring out how the entire file structure works. Since there are many boilerplate files, as a newcomer to Vue.js, it can be intimidating. Therefore, I searched and went through some documentation to get a rough idea of the structure of the boilerplates in Vue.js. As I read through the documentation, things became clearer. Vue.js follows a "Component-Based Programming Model," according to the official documentation. It has two core features, namely declarative rendering and reactivity.Even though Vue.js is component-based, having a separate CSS file is a good idea because, when building a website, it will likely need a common theme. A separate CSS file greatly helps in this aspect. For example, applying the same style to all the <p> tags in every component would be cumbersome. This issue can be solved by using a separate CSS file to define the styles for the <p> tags globally.' 
 };
 } 
} 
</script>
<style link="./styles/styles.css" rel="stylesheet"></style>
