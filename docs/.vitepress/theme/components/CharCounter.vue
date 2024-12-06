<script setup>
import { ref, computed } from "vue";

// Props
defineProps({
  maxChars: {
    type: Number,
    default: 100, // 最大文字数
  },
});

// Reactive data
const inputText = ref("");

// Computed properties
const charCount = computed(() => inputText.value.length);
const isOverLimit = false // TODO: computed(() => charCount.value > maxChars);

// Emit event for the parent
defineEmits(["update:modelValue"]);

// Watch for input changes
const handleInput = (event) => {
  inputText.value = event.target.value;
  // Emit the input value to the parent
  // TODO: emit("update:modelValue", inputText.value);
};
</script>

<template>
  <div>
    <textarea
      v-model="inputText"
      @input="handleInput"
      :class="{ 'over-limit': isOverLimit }"
      placeholder="Type something..."
    ></textarea>
    <p :class="{ 'warning': isOverLimit }">
      {{ charCount }} / {{ maxChars }} characters
      <span v-if="isOverLimit"> (Too many characters!)</span>
    </p>
  </div>
</template>

<style scoped>
textarea {
  width: 100%;
  min-height: 100px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea.over-limit {
  border-color: red;
}

p {
  font-size: 14px;
  margin-top: 5px;
}

p.warning {
  color: red;
  font-weight: bold;
}
</style>
