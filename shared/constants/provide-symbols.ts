import { InjectionKey } from 'vue'

export const WIDTH_SYMBOL: InjectionKey<number> = Symbol('Provide width symbol')

export const THEME_SYMBOL: InjectionKey<'light' | 'dark'> = Symbol('Provide theme symbol')