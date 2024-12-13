<div>
    <div>
        <h1>Ruby WASM Web App</h1>
        <textarea
        v-model="rubyCode"
        placeholder="ここに Ruby コードを入力してください"
        ></textarea>
        <button @click="runRubyCode">実行</button>
        <p>出力:</p>
        <pre>{{ output }}</pre>
    </div>
</div>

<script setup>
import { ref, onMounted } from "vue";
import { DefaultRubyVM } from "https://cdn.jsdelivr.net/npm/@ruby/wasm-wasi@2.7.0/dist/browser/+esm";

const rubyCode = ref("");
const output = ref("");

let vm = null;

const initializeRubyVM = async () => {
  try {
    const response = await fetch(
      "https://cdn.jsdelivr.net/npm/@ruby/3.3-wasm-wasi@2.7.0/dist/ruby+stdlib.wasm"
    );
    const module = await WebAssembly.compileStreaming(response);
    const instance = await DefaultRubyVM(module);
    vm = instance.vm;
    // output.value = "Ruby VM が初期化されました。";
  } catch (error) {
    output.value = `エラー: Ruby VM の初期化に失敗しました (${error.message})`;
  }
};

const runRubyCode = async () => {
  if (!vm) {
    output.value = "エラー: Ruby VM が初期化されていません。";
    return;
  }
  try {
    const result = vm.eval(rubyCode.value);
    output.value = result;
  } catch (error) {
    output.value = `エラー: ${error.message}`;
  }
};

onMounted(() => {
  initializeRubyVM();
});
</script>

<style>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}

button {
  margin-bottom: 10px;
}
</style>