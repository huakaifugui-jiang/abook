/*
 * @Author: wlj
 * @Date: 2022-10-31 15:37:23
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-15 08:16:35
 * @Description:
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main': "url('./src/assets/img/background/bg_main.jpg')"
      }
    }
  },
  plugins: []
};
