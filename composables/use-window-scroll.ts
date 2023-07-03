export function useWindowScroll() {
  const scrollThreshold = 20

  const scrollTop = ref(0)
  const scrollLeft = ref(0)

  onMounted(() => {
    window.addEventListener('scroll', scrollListener)
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollListener)
  })

  function scrollListener() {
    const { scrollX, scrollY } = window
    
    scrollTop.value = scrollY
    scrollLeft.value = scrollX
  }

  const isScrolledX = computed(() => scrollLeft.value >= scrollThreshold)
  
  const isScrolledY = computed(() => scrollTop.value >= scrollThreshold)

  return {
    scrollTop,
    scrollLeft,
    isScrolledX,
    isScrolledY,
  }
}