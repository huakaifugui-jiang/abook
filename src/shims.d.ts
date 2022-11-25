/*
 * @Author: wlj
 * @Date: 2022-11-25 10:33:01
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-25 15:53:01
 * @Description:
 */
import type { AttributifyAttributes } from 'unocss/preset-attributify';

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
