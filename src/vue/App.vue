<template>
  <div class="App">
    <h1>{{title}}</h1>
    
    <Counter />
  </div>
</template>

<script>
import Counter from './Counter'

export default {
  name: 'App',

  components: {
    Counter
  },

  data() {
    return {
      title: 'Vue App'
    }
  }
}
</script>

<style scoped>
.App {
  border: 1px solid lightgreen;
  border-style: dashed;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-top: 15px;
}
</style>
