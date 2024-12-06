# Simple Counter

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: white;
  font-weight: bold;
  background: linear-gradient(135deg, #ff7a7a, #ff5252);
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background: linear-gradient(135deg, #ff5252, #ff7a7a);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
