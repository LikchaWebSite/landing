import AOS from 'aos'

export default defineNuxtPlugin(() => {
  AOS.init({
    disable: 'mobile',
  })
})