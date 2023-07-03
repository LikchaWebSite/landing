export const useScrollLock = () => {
  const isLocked = ref(false)

  function toggleScrollLock(state: boolean) {
    const html = document.querySelector('html')

    if (!html) {
      return
    }

    html.style.overflow = state ? 'hidden' : 'auto'
  }

  return {
    isLocked,
    toggleScrollLock,
  }
}