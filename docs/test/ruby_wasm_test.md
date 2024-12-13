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

<script>
import { ref } from "vue";
import { DefaultRubyVM } from "https://cdn.jsdelivr.net/npm/@ruby/wasm-wasi@2.7.0/dist/browser/+esm";
const response = await fetch("https://cdn.jsdelivr.net/npm/@ruby/3.3-wasm-wasi@2.7.0/dist/ruby+stdlib.wasm");
const module = await WebAssembly.compileStreaming(response);
const { vm } = await DefaultRubyVM(module);  
vm.eval(`puts "Hello Ruby VM #{2 ** 128}"`) 
</script>
