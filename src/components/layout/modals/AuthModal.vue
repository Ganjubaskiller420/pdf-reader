<template>
  <div
    id="modal"
    class="flex xs:h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center hidden"
    @click.self="hideModals"
  >
    <div
      class="relative p-4 w-full h-full md:h-auto max-w-2xl md:border-4 rounded-3xl shadow bg-white bg-opacity-60 border-gray-200 dark:border-white"
    >
      <div class="relative">
        <div v-if="currentModal !== 'search'" class="p-4 flex justify-between items-center">
          <button
            type="button"
            class="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="hideModal('login')"
          >
            <svg
              class="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div v-if="currentModal === 'login'" class="p-6 pt-0">
        <LoginView />
      </div>
      <div v-else-if="currentModal === 'signup'" class="p-6 pt-0">
        <SignUpView />
      </div>
      <div v-else-if="currentModal === 'restore'" class="p-6 pt-0">
        <RestoreView />
      </div>
      <div v-else-if="currentModal === 'search'" class="p-6 pt-0">
        <SearchModal />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useModalStore } from '../../../stores/modal'
import LoginView from '../../user/Login.vue'
import SignUpView from '../../user/SignUp.vue'
import RestoreView from '../../user/Restore.vue'
import SearchModal from '../../user/Search.vue'
export default {
  components: { LoginView, SignUpView, RestoreView, SearchModal },
  computed: {
    ...mapState(useModalStore, ['currentModal'])
  },
  methods: {
    ...mapActions(useModalStore, ['showModal', 'hideModal', 'hideModals'])
  }
}
</script>
