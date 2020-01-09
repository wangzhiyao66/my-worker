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

// import Worker from "worker-loader!./Worker";
import Worker from "worker-loader!./Worker";

// import Worker from "worker-loader! @/typings/Worker";

@Component({
  components: { HelloWorld }
})
export default class Home extends Vue {
  startworker() {
    const worker = new Worker();
    worker.postMessage({ a: 1, b: 2, c: 3 });
    worker.onmessage = (params: any) => {
      console.log("params =", params);
    };
  }
}
</script>
