export function useWindowWidth() {
  const width = ref(0)

  if (process.server) {
    return {
      width
    }
  }

  const resizeListener = () => {
    width.value = window.innerWidth
  }
  
  onMounted(() => {
    window.addEventListener('resize', resizeListener)
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeListener)
  })

  return {
    width,
  }
}