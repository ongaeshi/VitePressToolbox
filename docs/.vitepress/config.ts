import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "VitePressToolbox",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Test', link: '/test/' }
        ],
    
        sidebar: [
        {
            text: "Test",
            collapsed: false,
            items: [
                { text: 'Index', link: '/test/' },
                { text: 'Simple Counter', link: '/test/simple_counter' },
                { text: 'コンポーネントテスト', link: '/test/component_test' },
                { text: 'lodash を使って文字列をシャッフル', link: '/test/shuffle_string_with_lodash' },
                { text: 'RubyWasmテスト', link: '/test/ruby_wasm_test' },
            ]
        }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/ongaeshi/VitePressToolbox' }
        ]
      }
    })
