<script>
import Clock from "@/components/Clock";

export default {
  components: {
    Clock,
  },
};
</script>
<template>
  <div>
    <router-link to="/test">テストページ</router-link>
    <Clock class="clock" location="TOKYO" :diff="0" />
    <Clock class="clock" location="NY" :diff="-14" />
    <Clock class="clock" location="LA" :diff="-17" />
  </div>
</template>
<style scoped>
.clock {
  width: 80%;
  max-width: 500px;
  margin: 30px auto;
}
</style>

<style>
html {
  font-size: 62.5%;
}

body {
  margin: 0;
}

p {
  margin: 0;
}
</style>
