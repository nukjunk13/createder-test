<template>
  <div class="bg-cover bg-no-repeat min-h-screen flex items-center" style="background-image: url('/dFQROr7oWzulq5FZUEj5WDLeElRCjUaKapSNlWTetE95tnKuxiZH3tkcpzdGj4P2zNb.jpg');">
  <div class="max-w-md w-full space-y-8">
    <div class="text-4xl font-black text-right text-black bg-white">{{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</div>
    <p class="text-6xl font-black text-right text-white">Welcome</p>
  </div>
  </div>
</template>

<script>
const date = new Date();
export default {
  layout: 'navbarUser',
  data() {
    return {
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      },
      timer: undefined,
    };
  },
  methods: {
    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      };
    },
  },
  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>
}
</script>
<style>
p {
	text-shadow: 3px 3px rgb(12, 12, 12);
}
</style>