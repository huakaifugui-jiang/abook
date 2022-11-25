/*
 * @Author: wlj
 * @Date: 2022-11-25 14:45:19
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-25 15:43:33
 * @Description: unocss配置选项
 * @See:https://github.com/unocss/unocss
 */
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'
    ]
  ], //新增一些快捷的class
  rules: [
    ['bg-bookDetail', { 'background-image': 'url("./src/assets/img/background/bg_main.jpg")' }]
  ], //新增一些规则
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
  //   safelist: 'prose prose-sm m-auto text-left'.split(' ')
});
