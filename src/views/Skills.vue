<template>
  <div id="skills" class="col cross-center main-center section">
    <h2>My Skills</h2>
    <div class="row w-100 wrap main-center cross-start">
      <article class="col main-center cross-start shadow-15">
        <h3 class="dark w-100 row cross-center">Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>Dart</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
      </article>
      <article class="col main-center cross-start shadow-15">
        <h3 class="dark w-100 row cross-center">Frameworks & <br class="hide-sm">Libraries</h3>
        <ul>
          <li>VueJS</li>
          <li>NodeJS</li>
          <li>Flutter</li>
          <li>Rails</li>
          <li>Bootstrap</li>
          <li>ExpressJS</li>
          <li>AngularJS</li>
          <li>NativeScript</li>
        </ul>
      </article>
      <article class="col main-center cross-start shadow-15">
        <h3 class="dark w-100 row cross-center">Soft Skills</h3>
        <ul>
          <li>Problem Solving</li>
          <li>Public Speaking</li>
          <li>Teamwork</li>
          <li>Team Leadership</li>
          <li>Critical Thinking</li>
        </ul>
      </article>
      <article class="col main-center cross-start shadow-15">
        <h3 class="dark w-100 row cross-center">Spoken Languages</h3>
        <ul>
          <li>English</li>
          <li>French</li>
          <li>Hindi</li>
          <li>Mauritian Creole</li>
          <li>Mauritian Bhojpuri</li>
        </ul>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skills'
}
</script>
<style lang="scss" scoped>
.section {
  min-height: calc(80vh - 40px);

  h3 {
    font-size: 22px;
  }

  & > div {
    article {
      h3 {
        padding: 20px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        height: 80px;
      }

      ul {
        padding: 0 20px;
        height: 250px;
      }

      margin: 20px;
      width: 200px;
      border-radius: 5px;
    }
  }
}
</style>