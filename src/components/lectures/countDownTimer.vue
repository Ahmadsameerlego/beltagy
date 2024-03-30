<template>
  <div style="margin-right: 50px" class="d-flex align-items-center">
    <p v-if="countdownFinished">تم الانتهاء!</p>
    <div v-else class="d-flex align-items-baseline">
      <p class="remain-head">الوقت المتبقى:</p>
      <div class="d-flex count-down-container mx-3">
        <p class="mx-2">ايام: {{ remainingTime.days }}</p>
        <p class="mx-2">ساعات: {{ remainingTime.hours }}</p>
        <p class="mx-2">دقائق: {{ remainingTime.minutes }}</p>
        <p class="mx-2">ثواني: {{ remainingTime.seconds }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    days: {
      type: Number,
      default: 0,
    },
    hours: {
      type: Number,
      default: 0,
    },
    minutes: {
      type: Number,
      default: 0,
    },
    seconds: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      countdownFinished: false,
      remainingTime: {
        days: this.days,
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds,
      },
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      let totalSeconds =
        this.days * 24 * 60 * 60 +
        this.hours * 60 * 60 +
        this.minutes * 60 +
        this.seconds;

      const countdown = setInterval(() => {
        if (totalSeconds <= 0) {
          clearInterval(countdown);
          this.countdownFinished = true;
        } else {
          totalSeconds--;

          const days = Math.floor(totalSeconds / (60 * 60 * 24));
          const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
          const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
          const seconds = totalSeconds % 60;

          this.remainingTime = { days, hours, minutes, seconds };
        }
      }, 1000);
    },
  },
};
</script>
<style lang="scss">
.count-down-container {
  border: 2px solid #4eb727;
  border-radius: 4px;
  padding: 5px 7px;
  p {
    margin-bottom: 0px !important;
  }
}
.remain-head {
  color: #4eb727;
}
</style>
