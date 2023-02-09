<template>
  <div class="col container" :class="$route.path.slice(1)">
		<header class="row main-center-lg main-space-between-sm shadow-15 w-100" :class="$route.path === '/skills' ? 'even-color' : ''">
      <router-link v-for="link in links" :key="link.url" :to="link.url" class="clickable row main-center cross-center" :class="$route.path === link.url ? 'current-link' : ''">{{ link.name }}</router-link>
		</header>
    <main class="w-100 h-100">
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
    </main>
    <footer class="row wrap">
      <div class="row main-center cross-center w-100">
        <a href="https://www.github.com/suyashfowdar/" target="_blank"><i class="fab fa-github fa-2x"></i></a>
        <a href="https://twitter.com/SuyashFowdar" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/suyash-fowdar/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
        <a href="mailto:suyashkrishnadas@gmail.com"><i class="fas fab fa-envelope fa-2x"></i></a>
        <a :href="require('../assets/pdf/SuyashFowdar.pdf')" class="clickable row cross-center" target="_blank">Resume</a>
      </div>
    </footer>
  </div>
</template>

<script>
const DEFAULT_TRANSITION = 'fade';

export default {
  name: 'Home',
  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
      links: [{
        name: 'Me',
        url: '/me'
      }, {
        name: 'Skills',
        url: '/skills'
      }, {
        name: 'Projects',
        url: '/projects'
      }]
    }
  },
  created() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://kit.fontawesome.com/bcea3aca40.js')
    document.head.appendChild(externalScript);
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === 'slide') {
        const change = to.meta.tabNum - from.meta.tabNum;
        transitionName = change < 0 ? 'slide-right' : 'slide-left';
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION;

      next();
    });
  }
}
</script>
