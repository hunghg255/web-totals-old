import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '515'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '404'),
    exact: true
  },
  {
    path: '/blog/build-tools-frontend-2023',
    component: ComponentCreator('/blog/build-tools-frontend-2023', 'a44'),
    exact: true
  },
  {
    path: '/blog/center-css',
    component: ComponentCreator('/blog/center-css', '67c'),
    exact: true
  },
  {
    path: '/blog/convert-svgs-to-jsx',
    component: ComponentCreator('/blog/convert-svgs-to-jsx', '271'),
    exact: true
  },
  {
    path: '/blog/event-loop-call-stack-example',
    component: ComponentCreator('/blog/event-loop-call-stack-example', 'd9c'),
    exact: true
  },
  {
    path: '/blog/handle-form-antd-part-1',
    component: ComponentCreator('/blog/handle-form-antd-part-1', '780'),
    exact: true
  },
  {
    path: '/blog/html-input',
    component: ComponentCreator('/blog/html-input', 'a2e'),
    exact: true
  },
  {
    path: '/blog/react-provider-hell',
    component: ComponentCreator('/blog/react-provider-hell', '40e'),
    exact: true
  },
  {
    path: '/blog/scroll-restoration-nextjs',
    component: ComponentCreator('/blog/scroll-restoration-nextjs', '4f9'),
    exact: true
  },
  {
    path: '/blog/svg-icon-with-pure-css',
    component: ComponentCreator('/blog/svg-icon-with-pure-css', '09a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '7f2'),
    exact: true
  },
  {
    path: '/blog/tags/2023',
    component: ComponentCreator('/blog/tags/2023', '16f'),
    exact: true
  },
  {
    path: '/blog/tags/ant-design',
    component: ComponentCreator('/blog/tags/ant-design', '987'),
    exact: true
  },
  {
    path: '/blog/tags/build-tools',
    component: ComponentCreator('/blog/tags/build-tools', '6a1'),
    exact: true
  },
  {
    path: '/blog/tags/callstack',
    component: ComponentCreator('/blog/tags/callstack', 'a18'),
    exact: true
  },
  {
    path: '/blog/tags/css',
    component: ComponentCreator('/blog/tags/css', '771'),
    exact: true
  },
  {
    path: '/blog/tags/event-loop',
    component: ComponentCreator('/blog/tags/event-loop', 'c1c'),
    exact: true
  },
  {
    path: '/blog/tags/extensions',
    component: ComponentCreator('/blog/tags/extensions', 'a54'),
    exact: true
  },
  {
    path: '/blog/tags/frontend',
    component: ComponentCreator('/blog/tags/frontend', 'd80'),
    exact: true
  },
  {
    path: '/blog/tags/generate',
    component: ComponentCreator('/blog/tags/generate', '613'),
    exact: true
  },
  {
    path: '/blog/tags/html',
    component: ComponentCreator('/blog/tags/html', '10e'),
    exact: true
  },
  {
    path: '/blog/tags/icon',
    component: ComponentCreator('/blog/tags/icon', 'b79'),
    exact: true
  },
  {
    path: '/blog/tags/javascript',
    component: ComponentCreator('/blog/tags/javascript', '843'),
    exact: true
  },
  {
    path: '/blog/tags/jsx',
    component: ComponentCreator('/blog/tags/jsx', '048'),
    exact: true
  },
  {
    path: '/blog/tags/nextjs',
    component: ComponentCreator('/blog/tags/nextjs', '849'),
    exact: true
  },
  {
    path: '/blog/tags/provider',
    component: ComponentCreator('/blog/tags/provider', '65b'),
    exact: true
  },
  {
    path: '/blog/tags/react',
    component: ComponentCreator('/blog/tags/react', 'eb3'),
    exact: true
  },
  {
    path: '/blog/tags/reactjs',
    component: ComponentCreator('/blog/tags/reactjs', '58f'),
    exact: true
  },
  {
    path: '/blog/tags/scripts',
    component: ComponentCreator('/blog/tags/scripts', '52d'),
    exact: true
  },
  {
    path: '/blog/tags/scroll-restoration',
    component: ComponentCreator('/blog/tags/scroll-restoration', 'c4a'),
    exact: true
  },
  {
    path: '/blog/tags/svg',
    component: ComponentCreator('/blog/tags/svg', 'e50'),
    exact: true
  },
  {
    path: '/blog/tags/tips',
    component: ComponentCreator('/blog/tags/tips', 'ebe'),
    exact: true
  },
  {
    path: '/blog/tags/vscode',
    component: ComponentCreator('/blog/tags/vscode', 'ab9'),
    exact: true
  },
  {
    path: '/blog/vscode-extensions-useful',
    component: ComponentCreator('/blog/vscode-extensions-useful', '508'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '49c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e43'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '709'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', '0cc'),
            exact: true
          },
          {
            path: '/docs/tags/design-patterns',
            component: ComponentCreator('/docs/tags/design-patterns', '79e'),
            exact: true
          },
          {
            path: '/docs/tags/git',
            component: ComponentCreator('/docs/tags/git', '994'),
            exact: true
          },
          {
            path: '/docs/tags/reactjs',
            component: ComponentCreator('/docs/tags/reactjs', 'a4e'),
            exact: true
          },
          {
            path: '/docs/tags/rendering-patterns',
            component: ComponentCreator('/docs/tags/rendering-patterns', 'c86'),
            exact: true
          },
          {
            path: '/docs/tags/state-managers',
            component: ComponentCreator('/docs/tags/state-managers', '75a'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'ae9'),
            routes: [
              {
                path: '/docs/design-patterns/',
                component: ComponentCreator('/docs/design-patterns/', '930'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/git/how-to-git-works',
                component: ComponentCreator('/docs/git/how-to-git-works', '987'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/javascript/js-extension-import-export-module',
                component: ComponentCreator('/docs/javascript/js-extension-import-export-module', 'f1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reactjs/compound-pattern',
                component: ComponentCreator('/docs/reactjs/compound-pattern', 'e95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reactjs/hoc-pattern',
                component: ComponentCreator('/docs/reactjs/hoc-pattern', '206'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reactjs/state-managers',
                component: ComponentCreator('/docs/reactjs/state-managers', '257'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rendering-patterns/client-side-rendering',
                component: ComponentCreator('/docs/rendering-patterns/client-side-rendering', '929'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rendering-patterns/incremental-static-regeneration',
                component: ComponentCreator('/docs/rendering-patterns/incremental-static-regeneration', '194'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rendering-patterns/intro',
                component: ComponentCreator('/docs/rendering-patterns/intro', '6bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rendering-patterns/server-side-rendering',
                component: ComponentCreator('/docs/rendering-patterns/server-side-rendering', '2be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rendering-patterns/static-rendering',
                component: ComponentCreator('/docs/rendering-patterns/static-rendering', '32e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rendering-patterns/streaming-ssr',
                component: ComponentCreator('/docs/rendering-patterns/streaming-ssr', 'adc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/issues',
    component: ComponentCreator('/issues', '8ed'),
    routes: [
      {
        path: '/issues',
        component: ComponentCreator('/issues', 'f5c'),
        routes: [
          {
            path: '/issues/tags',
            component: ComponentCreator('/issues/tags', 'b82'),
            exact: true
          },
          {
            path: '/issues/tags/1-loc',
            component: ComponentCreator('/issues/tags/1-loc', '927'),
            exact: true
          },
          {
            path: '/issues/tags/context-api',
            component: ComponentCreator('/issues/tags/context-api', 'ce0'),
            exact: true
          },
          {
            path: '/issues/tags/context-api-faster',
            component: ComponentCreator('/issues/tags/context-api-faster', '74d'),
            exact: true
          },
          {
            path: '/issues/tags/css',
            component: ComponentCreator('/issues/tags/css', '709'),
            exact: true
          },
          {
            path: '/issues/tags/custom-hook',
            component: ComponentCreator('/issues/tags/custom-hook', '724'),
            exact: true
          },
          {
            path: '/issues/tags/discord',
            component: ComponentCreator('/issues/tags/discord', 'ab3'),
            exact: true
          },
          {
            path: '/issues/tags/javascript',
            component: ComponentCreator('/issues/tags/javascript', '2f2'),
            exact: true
          },
          {
            path: '/issues/tags/jotai',
            component: ComponentCreator('/issues/tags/jotai', 'e9b'),
            exact: true
          },
          {
            path: '/issues/tags/provider',
            component: ComponentCreator('/issues/tags/provider', '8cd'),
            exact: true
          },
          {
            path: '/issues/tags/random',
            component: ComponentCreator('/issues/tags/random', '1dd'),
            exact: true
          },
          {
            path: '/issues/tags/rc-component',
            component: ComponentCreator('/issues/tags/rc-component', '887'),
            exact: true
          },
          {
            path: '/issues/tags/rc-dialog',
            component: ComponentCreator('/issues/tags/rc-dialog', 'e62'),
            exact: true
          },
          {
            path: '/issues/tags/rc-picker',
            component: ComponentCreator('/issues/tags/rc-picker', 'c7d'),
            exact: true
          },
          {
            path: '/issues/tags/rc-select',
            component: ComponentCreator('/issues/tags/rc-select', '429'),
            exact: true
          },
          {
            path: '/issues/tags/rc-tooltip',
            component: ComponentCreator('/issues/tags/rc-tooltip', 'd18'),
            exact: true
          },
          {
            path: '/issues/tags/react',
            component: ComponentCreator('/issues/tags/react', '967'),
            exact: true
          },
          {
            path: '/issues/tags/reactjs',
            component: ComponentCreator('/issues/tags/reactjs', '4e8'),
            exact: true
          },
          {
            path: '/issues/tags/recoil',
            component: ComponentCreator('/issues/tags/recoil', '38d'),
            exact: true
          },
          {
            path: '/issues/tags/redux',
            component: ComponentCreator('/issues/tags/redux', '364'),
            exact: true
          },
          {
            path: '/issues/tags/sort',
            component: ComponentCreator('/issues/tags/sort', 'e25'),
            exact: true
          },
          {
            path: '/issues/tags/state-management',
            component: ComponentCreator('/issues/tags/state-management', 'c49'),
            exact: true
          },
          {
            path: '/issues/tags/style',
            component: ComponentCreator('/issues/tags/style', '876'),
            exact: true
          },
          {
            path: '/issues/tags/use-click-outside',
            component: ComponentCreator('/issues/tags/use-click-outside', 'f9d'),
            exact: true
          },
          {
            path: '/issues/tags/use-count-down',
            component: ComponentCreator('/issues/tags/use-count-down', '858'),
            exact: true
          },
          {
            path: '/issues/tags/use-debounce',
            component: ComponentCreator('/issues/tags/use-debounce', '526'),
            exact: true
          },
          {
            path: '/issues/tags/use-deep-effect',
            component: ComponentCreator('/issues/tags/use-deep-effect', 'a90'),
            exact: true
          },
          {
            path: '/issues/tags/use-delayed-state',
            component: ComponentCreator('/issues/tags/use-delayed-state', '6ef'),
            exact: true
          },
          {
            path: '/issues/tags/use-fade-effect',
            component: ComponentCreator('/issues/tags/use-fade-effect', '23e'),
            exact: true
          },
          {
            path: '/issues/tags/use-fetch',
            component: ComponentCreator('/issues/tags/use-fetch', '308'),
            exact: true
          },
          {
            path: '/issues/tags/use-geolocation',
            component: ComponentCreator('/issues/tags/use-geolocation', 'aa4'),
            exact: true
          },
          {
            path: '/issues/tags/use-media-query',
            component: ComponentCreator('/issues/tags/use-media-query', '15b'),
            exact: true
          },
          {
            path: '/issues/tags/use-memo-by-object-variables',
            component: ComponentCreator('/issues/tags/use-memo-by-object-variables', '74e'),
            exact: true
          },
          {
            path: '/issues/tags/use-merge-refs',
            component: ComponentCreator('/issues/tags/use-merge-refs', '9f9'),
            exact: true
          },
          {
            path: '/issues/tags/use-previous',
            component: ComponentCreator('/issues/tags/use-previous', 'a14'),
            exact: true
          },
          {
            path: '/issues/tags/use-size',
            component: ComponentCreator('/issues/tags/use-size', '8c7'),
            exact: true
          },
          {
            path: '/issues/tags/use-state-proxy',
            component: ComponentCreator('/issues/tags/use-state-proxy', 'e3e'),
            exact: true
          },
          {
            path: '/issues/tags/use-timeout',
            component: ComponentCreator('/issues/tags/use-timeout', 'c86'),
            exact: true
          },
          {
            path: '/issues/tags/use-toggle',
            component: ComponentCreator('/issues/tags/use-toggle', '37f'),
            exact: true
          },
          {
            path: '/issues/tags/use-window-size',
            component: ComponentCreator('/issues/tags/use-window-size', '381'),
            exact: true
          },
          {
            path: '/issues/tags/utils',
            component: ComponentCreator('/issues/tags/utils', '6d1'),
            exact: true
          },
          {
            path: '/issues/tags/valtio',
            component: ComponentCreator('/issues/tags/valtio', '852'),
            exact: true
          },
          {
            path: '/issues/tags/zustand',
            component: ComponentCreator('/issues/tags/zustand', '309'),
            exact: true
          },
          {
            path: '/issues',
            component: ComponentCreator('/issues', '3f0'),
            routes: [
              {
                path: '/issues/',
                component: ComponentCreator('/issues/', '62f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/javascripts/1loc/random',
                component: ComponentCreator('/issues/javascripts/1loc/random', '9c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/javascripts/delay-without-set-timeout',
                component: ComponentCreator('/issues/javascripts/delay-without-set-timeout', 'f14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/javascripts/sort/sleep-sort',
                component: ComponentCreator('/issues/javascripts/sort/sleep-sort', 'a54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/javascripts/split-text-utils',
                component: ComponentCreator('/issues/javascripts/split-text-utils', '33b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/rc-style/rc-dialog',
                component: ComponentCreator('/issues/rc-style/rc-dialog', 'ca0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/rc-style/rc-picker',
                component: ComponentCreator('/issues/rc-style/rc-picker', 'd05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/rc-style/rc-select',
                component: ComponentCreator('/issues/rc-style/rc-select', '8d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/rc-style/rc-tooltip',
                component: ComponentCreator('/issues/rc-style/rc-tooltip', 'e38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/react-native/test',
                component: ComponentCreator('/issues/react-native/test', '099'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-click-outside',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-click-outside', '2b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-count-down',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-count-down', 'a52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-debounce',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-debounce', 'e9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-deep-effect',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-deep-effect', '6eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-fetch',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-fetch', '252'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-geolocation',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-geolocation', '074'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-media-query',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-media-query', 'dc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-merge-ref',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-merge-ref', 'c83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-previous',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-previous', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-size',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-size', 'b87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-state-proxy',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-state-proxy', '97e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-timeout',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-timeout', '6b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-toggle',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-toggle', '8ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/use-window-size',
                component: ComponentCreator('/issues/reactjs/custom-hook/use-window-size', '0e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/useDelayedState',
                component: ComponentCreator('/issues/reactjs/custom-hook/useDelayedState', '103'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/useFadeEffect',
                component: ComponentCreator('/issues/reactjs/custom-hook/useFadeEffect', 'f46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/custom-hook/useMemoByObjectVariables',
                component: ComponentCreator('/issues/reactjs/custom-hook/useMemoByObjectVariables', '991'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/state-management/context',
                component: ComponentCreator('/issues/reactjs/state-management/context', '4a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/state-management/context-fast',
                component: ComponentCreator('/issues/reactjs/state-management/context-fast', 'a39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/state-management/jotai',
                component: ComponentCreator('/issues/reactjs/state-management/jotai', '6df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/state-management/recoil',
                component: ComponentCreator('/issues/reactjs/state-management/recoil', 'b8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/state-management/redux',
                component: ComponentCreator('/issues/reactjs/state-management/redux', '0dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/state-management/valtio',
                component: ComponentCreator('/issues/reactjs/state-management/valtio', '961'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/issues/reactjs/state-management/zustand',
                component: ComponentCreator('/issues/reactjs/state-management/zustand', '754'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/questions',
    component: ComponentCreator('/questions', '69d'),
    routes: [
      {
        path: '/questions',
        component: ComponentCreator('/questions', '1c6'),
        routes: [
          {
            path: '/questions/tags',
            component: ComponentCreator('/questions/tags', '867'),
            exact: true
          },
          {
            path: '/questions/tags/javascript',
            component: ComponentCreator('/questions/tags/javascript', '20c'),
            exact: true
          },
          {
            path: '/questions',
            component: ComponentCreator('/questions', 'ce4'),
            routes: [
              {
                path: '/questions/',
                component: ComponentCreator('/questions/', '197'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-1',
                component: ComponentCreator('/questions/javascripts/question-1', '883'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-10',
                component: ComponentCreator('/questions/javascripts/question-10', 'c2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-11',
                component: ComponentCreator('/questions/javascripts/question-11', '90b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-12',
                component: ComponentCreator('/questions/javascripts/question-12', 'eef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-13',
                component: ComponentCreator('/questions/javascripts/question-13', '742'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-14',
                component: ComponentCreator('/questions/javascripts/question-14', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-15',
                component: ComponentCreator('/questions/javascripts/question-15', '46d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-16',
                component: ComponentCreator('/questions/javascripts/question-16', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-2',
                component: ComponentCreator('/questions/javascripts/question-2', '94e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-3',
                component: ComponentCreator('/questions/javascripts/question-3', '6a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-4',
                component: ComponentCreator('/questions/javascripts/question-4', 'd74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-5',
                component: ComponentCreator('/questions/javascripts/question-5', '02c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-6',
                component: ComponentCreator('/questions/javascripts/question-6', 'e0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-7',
                component: ComponentCreator('/questions/javascripts/question-7', '313'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-8',
                component: ComponentCreator('/questions/javascripts/question-8', 'f39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/questions/javascripts/question-9',
                component: ComponentCreator('/questions/javascripts/question-9', '389'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2f9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
