<template>
  <div class="Counter">
    <div>
      Count: {{count}}
    </div>
    <button type="button" @click="decrement">-</button>
    <button type="button" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',

  data() {
    return {
      count: 0
    }
  },

  methods: {
    decrement() {
      this.count--
    },

    increment() {
      this.count++
    }
  }
}
</script>

