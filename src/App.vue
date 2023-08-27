<template>
  <auth-modal />
  <alert id="alert" />
  <the-header :switch-modal="switchModalState" :open-modal="openModal" />
  <router-view v-slot="slotProps">
    <div class="xl:ml-48 min-h-[600px]">
      <component :is="slotProps.Component" />
    </div>
  </router-view>
  <the-footer />
  <main-sidebar />
</template>

<script>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import TheFooter from './components/layout/TheFooter.vue'
import TheHeader from './components/layout/TheHeader.vue'
import Alert from './components/layout/modals/Alert.vue'
import AuthModal from './components/layout/modals/AuthModal.vue'
import MainSidebar from './components/layout/sidebars/MainSidebar.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    MainSidebar,
    AuthModal,
    RouterView,
    Alert
  },
  setup() {
    const authStates = ['login', 'signup', 'restore']
    const isShowModal = ref(false)
    const modalState = ref(authStates[0])
    return { isShowModal, modalState, authStates }
  },
  computed: {
    alertStyle() {
      return 'translate-y-[150px]'
    }
  },
  async mounted() {}
}
</script>
