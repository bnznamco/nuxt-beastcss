<template>
  <div :class="toggle ? 'class' : 'unused-class'">
    beastcss !
    <button @click="toggle = !toggle">
      Toggle class
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    toggle: true,
  }),
};
</script>

<style>
.class {
  background: aquamarine;
}
.unused-class {
  background: gold;
}
</style>
