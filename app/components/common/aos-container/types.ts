import { anchorPlacementOptions, easingOptions } from 'aos'

export type FadeAnimation = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-up-right' | 'fade-up-left' | 'fade-down-right' | 'fade-down-left'

export type FlipAnimation = 'flip-up' | 'flip-down' | 'flip-left' | 'flip-right'

export type SlideAnimation = 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right'

export type ZoomAnimation = 'zoom-in' | 'zoom-in-up' | 'zoom-in-down' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-out' | 'zoom-out-up' | 'zoom-out-down' | 'zoom-out-left' | 'zoom-out-right'

export type Animation = FadeAnimation | FlipAnimation | SlideAnimation | ZoomAnimation

export type Easing = easingOptions

export type AnchorPlacement = anchorPlacementOptions