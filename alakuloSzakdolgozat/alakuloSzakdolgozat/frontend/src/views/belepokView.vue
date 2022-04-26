<template>
  <div :style="image"></div>
</template>

<script>
export default {
  data() {
    return {
      image: { backgroundImage: "url(https://vuejs.org/images/logo.png)" }
    };
  }
};
</script>