<div>
  <h1>lodash を使って文字列をシャッフル</h1>
  <input v-model="inputText" placeholder="Enter some text" />
  <button @click="shuffleText">文字列をシャッフル</button>
  <p>結果: {{ shuffledText }}</p>
</div>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      inputText: "",
      shuffledText: "",
    };
  },
  methods: {
    shuffleText() {
      // lodash の shuffle を使って文字列をシャッフル
      this.shuffledText = _.shuffle(this.inputText.split("")).join("");
    },
  },
};
</script>

<style>
button {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
