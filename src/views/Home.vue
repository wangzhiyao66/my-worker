<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="startworker()">startworker</button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: { HelloWorld }
})
export default class Home extends Vue {
  startworker() {
    if (typeof Worker !== "undefined") {
      let worker = new Worker("../../static/webworker.js"); // 需要每次都调用打开一个woker
      // this.worker = new Worker('@/assets/js/webworker.js'); // 需要每次都调用打开一个woker

      // 可以序列化为JSON结构的任何值都可以作为参数传递给 postMessage();
      // this.worker.postMessage(msg);
      // this.worker.onmessage = event => {
      //     this.worker_data = event.data;
      // };
      console.log("start Web Workers...");
    } else {
      console.log("Sorry, your browser does not support Web Workers...");
    }
  }
}
</script>
