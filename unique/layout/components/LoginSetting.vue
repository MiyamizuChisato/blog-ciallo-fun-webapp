<script setup lang="ts">
import OauthSetting from "~/unique/layout/components/OauthSetting.vue";
import avatar from '~/assets/images/avatar.jpg'
import {useDisplay} from "vuetify";
import {loginApi} from "~/api/user";

const userStore = useUserStore();
const {mdAndUp} = useDisplay();
const dialog = ref(false)
const sign = ref('sign-in')
const userAuth = ref({
  email: '',
  password: ''
})
const isLogin = computed(() => userStore.isLogin)
const label = computed(() => {
  if (sign.value === 'sign-in') {
    return '去注册'
  }
  return '去登陆'
})

function toggleWindow() {
  if (sign.value === 'sign-in') {
    sign.value = 'sign-up'
  } else {
    sign.value = 'sign-in'
  }
}

async function loginTrigger() {
  const {payload} = await loginApi(userAuth.value)
  localStorage.setItem("token", payload)
  await userStore.getCurrentUser()
  userAuth.value.email = ''
  userAuth.value.password = ''
  dialog.value = false
}

function logout() {
  localStorage.removeItem("token")
  userStore.currentUser = null
}

onMounted(async () => {
  if (localStorage.getItem("token") != null) {
    await userStore.getCurrentUser()
  }
})
</script>

<template>
  <v-btn v-if="!isLogin" @click="dialog=true" color="primary" variant="tonal">
    Login
  </v-btn>
  <v-btn v-else class="text-stress" icon="">
    <v-avatar size="32" color="primary">C</v-avatar>
    <v-menu activator="parent" location="bottom end">
      <div class="p-4 mt-2 rounded-2 shadow bg-wrapper">
        <NuxtLink class="decoration-none" to="/user/1">
          <div class="text-stress my-1 py-1 px-4 rounded cursor-pointer hover:bg-inner" v-ripple>
            Profile
          </div>
        </NuxtLink>
        <div @click="logout" class="text-error my-1 py-1 px-4 rounded cursor-pointer hover:bg-inner" v-ripple>
          Logout
        </div>
      </div>
    </v-menu>
  </v-btn>
  <v-dialog :width="mdAndUp?'auto':''" v-model="dialog" transition="dialog-bottom-transition"
            :fullscreen="!mdAndUp" persistent scrollable>
    <v-card class="bg-wrapper" rounded="24">
      <template #title>
        <div class="flex justify-between items-center">
          <v-btn @click="dialog=false" color="transparent" icon="" flat>
            <i class="text-stress i-ic-round-arrow-back-ios"/>
          </v-btn>
          <v-btn @click="toggleWindow" density="comfortable" color="error" variant="text">
            {{ label }}
          </v-btn>
        </div>
      </template>
      <template #text>
        <v-window v-model="sign">
          <v-window-item value="sign-in">
            <div class="px-6 text-stress mx-auto md:w-120">
              <div class="mb-1 text-8 font-bold">
                欢迎回来，
              </div>
              <div class="mb-1 text-muted text-6 font-bold">请填写以下信息进行登陆</div>
              <div class="mt-10 bg-inner">
                <v-text-field v-model="userAuth.email" type="email" label="邮箱" hide-details/>
              </div>
              <div class="mt-10 bg-inner">
                <v-text-field v-model="userAuth.password" type="password" label="密码" hide-details/>
              </div>
              <div class="mt-10">
                <v-btn @click="loginTrigger" color="primary" height="44" flat rounded block>继续</v-btn>
              </div>
            </div>
          </v-window-item>
          <v-window-item value="sign-up">
            <div class="px-6 text-stress mx-auto md:w-120">
              <div class="mb-1 text-8 font-bold">
                <span>欢迎注册，</span>
              </div>
              <div class="mb-1 text-muted text-6 font-bold">请填写以下信息进行注册</div>
              <div class="mt-10 bg-inner">
                <v-text-field label="邮箱" hide-details>
                  <template #append>
                    <v-btn class="mr-4" color="success">
                      获取验证码
                    </v-btn>
                  </template>
                </v-text-field>
              </div>
              <div class="mt-10 bg-inner">
                <v-text-field label="验证码" hide-details/>
              </div>
              <div class="mt-10 bg-inner">
                <v-text-field label="密码" hide-details/>
              </div>
              <div class="mt-10 bg-inner">
                <v-text-field label="昵称" hide-details/>
              </div>
              <div class="mt-10 bg-inner">
                <v-file-input label="头像" hide-details prepend-icon="">
                  <template #append>
                    <div class="mr-4">
                      <v-avatar :image="avatar"/>
                    </div>
                  </template>
                </v-file-input>
              </div>
              <div class="mt-10">
                <v-btn color="primary" height="44" flat rounded block>继续</v-btn>
              </div>
            </div>
          </v-window-item>
        </v-window>
      </template>
      <template #actions>
        <div class="w-full mb-6 px-10">
          <oauth-setting/>
        </div>
      </template>
    </v-card>
  </v-dialog>
</template>
