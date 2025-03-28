<!-- <template>
    <div>Loading...</div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  
  const route = useRoute()
  const router = useRouter()
  const store = useStore()
  
  onMounted(() => {
    const hash = window.location.hash.substring(1).split('&').reduce((acc, item) => {
      const [key, value] = item.split('=')
      acc[key] = value
      return acc
    }, {})
  
    if (hash.access_token) {
      store.commit('auth/setToken', hash.access_token)
      store.dispatch('auth/fetchUser')
      router.push('/')
    }
  })
  </script>
   -->