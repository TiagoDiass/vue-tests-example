<template>
  <div id="counter">
    <main id="counter-content">
      <h1>Counter: {{ counter }}</h1>

      <div class="buttons">
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 0
  }),

  methods: {
    increment() {
      this.counter++;
    },

    decrement() {
      this.counter--;
    }
  }
};
</script>

<style lang="scss" src="./styles.scss"></style>
