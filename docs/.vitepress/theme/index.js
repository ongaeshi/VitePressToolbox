import DefaultTheme from 'vitepress/theme';
import CharCounter from './components/CharCounter.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CharCounter', CharCounter);
  },
};
