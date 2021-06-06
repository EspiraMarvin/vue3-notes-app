import { ref, watch, onMounted, onUnmounted } from "vue"

const useLocalStorage = (key, defaulValue) => {
  const value = ref(defaulValue)

  // reads key in localstorage
  const read = () => {
    const v = window.localStorage.getItem(key)
    if (v != null) value.value = JSON.parse(v)
  }

  read()

  onMounted(() => {
    window.addEventListener('storage', read)
  })

  onUnmounted(() => {
    window.removeEventListener('storage', read)
  })

  // this converts value into a string and saves it with a key
  const write = () => {
    window.localStorage.setItem(key, JSON.stringify(value.value))
  }

  // watch checks everytime value in localstorage changes
  // if any new element is added it adds it automatically to localStorage
  watch([value], write, { deep: true})

  return value
}

  // this fn wraps the useLocalStorage fn
  // it passes with it the notes storage key 'notes' and an empty array for the (default) notes value
export const useLocalNotes = () => {
  return useLocalStorage('notes', [])
}
