<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          My Profile
        </q-toolbar-title>


        <div class="q-px-lg q-pt-xl q-mb-md">
          <div class="text-h5">Chirra Chinmayee Sri Reddy</div>
          <div class="text-subtitle1">Software Engineer</div>
          <div class="text-subtitle1">chirrachinnmayee@gmail.com</div>

        </div>
        <q-img 
          src="C:\Users\10725938\Desktop\vujs\10725938_chinmayee.png"
          class="header-image absolute-top"/> 
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="168"
        :breakpoint="100"
      >
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>
            <!-- <q-item 
              to="/mypage"
            >
              <q-item-section avatar>
                <q-icon name="style" />
              </q-item-section>

              <q-item-section>
                MY PROFILE
              </q-item-section>
            </q-item> -->
            <q-item 
              to="/chinmayee/aboutme">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                About Me
              </q-item-section>
            </q-item>

            <q-item 
              to="/chinmayee/myskills"
            >
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Skills
              </q-item-section>
            </q-item>
            <q-item 
              to="/chinmayee/myhobbies"
            >
              <q-item-section avatar>
                <q-icon name="style" />
              </q-item-section>

              <q-item-section>
                Hobbies
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top"  style="height: 192px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="125px" >
            <img src="https://th.bing.com/th?id=OIP.Yj2YWXjwmTfZZOyjz2DIgAHaHa&w=80&h=80&c=12&rs=1&qlt=90&o=6&dpr=1.5&pid=13.1">
            </q-avatar>
            <div class="text-weight-bold">Chinmayee</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive></keep-alive>
    <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Quasar',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style lang ="scss">
  .header-image{
    height:100%;
    z-index:-1;
    opacity:0.2;
  filter:grayscale(100%)
}
</style>
