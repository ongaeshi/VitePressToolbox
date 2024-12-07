<div>
<h1>文字数カウンター</h1>
<CharCounter :maxChars="50" v-model="textInput" />
<p>入力内容: {{ textInput }}</p>
</div>

<script setup>
import CharCounter from '../components/CharCounter.vue';
import { ref } from 'vue';

const textInput = ref("");
</script>
