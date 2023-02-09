<template>
  <div id="me" class="row-lg col-sm cross-center section dark">
    <div class="flex h-100 col main-center">
      <h1 class="row">Suyash Fowdar</h1>
      <h2>Dreamer. Drama Artist. <br> Software Developer.</h2>
    </div>
    <div class="flex h-100 col main-center" :class="loaded ? 'non-animate' : 'animate'">
      <p>{{ date.getFullYear() - 2017 }}+ years of experience in  Full-Stack Software Development. </p>
      <p>Expert in building static and dynamic Websites or Mobile Apps as per your requirements.</p>
      <p>For more info, contact me.</p>
      <div class="links row wrap">
        <a href="https://www.github.com/suyashfowdar/" target="_blank"><i class="fab fa-github fa-2x"></i></a>
        <a href="https://twitter.com/SuyashFowdar" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/suyash-fowdar/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
        <a href="mailto:suyashkrishnadas@gmail.com"><i class="fas fab fa-envelope fa-2x"></i></a>
        <a :href="require('../assets/pdf/SuyashFowdar.pdf')" class="clickable row cross-center" target="_blank">Resume</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Me',
  data() {
    return {
      loaded: false,
      date: new Date(),
    }
  },
  created() {
    var vm = this;
    vm.loaded = vm.$store.getters.getLoaded;
    vm.$store.commit('setLoaded');
  }
}
</script>
<style lang="scss" scoped>
$sm:('-sm', 0, 600px);
$lg:('-lg', 601px, 4000px);

@mixin sm {
	@media screen and (min-width: nth($sm, 2)) and (max-width: nth($sm, 3)) {
		@content;
	}
}

@mixin lg {
	@media screen and (min-width: nth($lg, 2)) and (max-width: nth($lg, 3)) {
		@content;
	}
}

.section {
  min-height: calc(100vh - 40px);
  background-image: radial-gradient(rgb(85, 85, 85), rgb(60, 60, 60), rgb(50, 50, 50));

  & > div {
    height: 60%;
    margin: 20px;
    
    h1 {
      font-family: 'Courier New', Courier, monospace;
      margin-top: 0;
      
      @include lg {
        font-size: calc(10px + 3vw);
      }
      
      @include sm {
        font-size: calc(10px + 6vw);
      }
      
      &::after {
        content: ' ';
        background-color: rgb(240, 240, 240);
        animation-name: blink;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        
        @include lg {
          width: 2vw;
          height: 3.5vw;
          margin-left: 0.3vw;
          margin-top: 0.4vw;
        }
        
        @include sm {
          width: 4vw;
          height: 7vw;
          margin-left: 0.6vw;
          margin-top: 0.8vw;
        }
      }
    }
    
    h2 {
      margin: 0;

      @include lg {
        font-size: calc(8px + 2vw);
      }
      
      @include sm {
        font-size: calc(8px + 4vw);
      }
    }

    &:last-child {
      font-size: 20px;
      padding: 40px;

      @include lg {
        border-left: 2px solid white;
      }

      @include sm {
        border-top: 2px solid white;
      }

      &.non-animate {
        p,
        .links {
          opacity: 1;
        }
      }

      &.animate {
        p {
          animation-name: appear;
          animation-duration: 2s;
          animation-fill-mode: forwards;

          &:first-of-type {
            animation-delay: 1s;
          }
          
          &:nth-of-type(2) {
            animation-delay: 2s;
          }
          
          &:last-of-type {
            animation-delay: 3s;
          }
        }

        .links {
          animation-name: appear;
          animation-duration: 2s;
          animation-fill-mode: forwards;
          animation-delay: 4s;
        }
      }

      p {
        margin: 10px 0;
        opacity: 0;
      }

      .links {
        margin-top: 16px;
        opacity: 0;
        
        a {
          margin: 20px;

          &:last-child {
            font-weight: bold;
            padding: 10px;
          }
        }
      }
    }
  }
}
</style>
