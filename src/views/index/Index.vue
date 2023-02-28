<template>
  <div>
    <a-button type="primary" @click="enter">enter the three page</a-button>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";

const enter = () => {
    alert('success')
    router.push('/game')

};
</script>

<style scoped>
</style>
