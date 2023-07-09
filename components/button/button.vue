<template>
  <button class="button">Test</button>
  <h1>{{ props.text }}</h1>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string
}>();
</script>

<style>
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>