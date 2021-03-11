let skills = document.getElementById('skills'),
  projects = document.getElementById('projects'),
  meLink = document.getElementById('me-link'),
  skillsLink = document.getElementById('skills-link'),
  projectsLink = document.getElementById('projects-link'),
  header = document.querySelector('header');

if (window.innerWidth <= 600) {
  skillsOffset = skills.offsetTop - window.innerHeight + 80;
  projectsOffset = projects.offsetTop - window.innerHeight + 80;
} else {
  skillsOffset = skills.offsetTop - 40;
  projectsOffset = projects.offsetTop - 40;
}

window.onscroll = function() {
  if (window.scrollY < skillsOffset) {
    if (header.classList.contains('even-color')) {
      header.classList.remove('even-color');
      meLink.classList.add('current-link');
      skillsLink.classList.remove('current-link');
    }
  } else if (window.scrollY < projectsOffset) {
    if (!header.classList.contains('even-color')) {
      header.classList.add('even-color');
      meLink.classList.remove('current-link');
      skillsLink.classList.add('current-link');
      projectsLink.classList.remove('current-link');
    }
  } else {
    skillsLink.classList.remove('current-link');
    projectsLink.classList.add('current-link');
    if (window.innerWidth <= 600) {
      let footer = document.querySelector('footer'),
        footerOffset = footer.offsetTop - window.innerHeight + 40;
      if (window.scrollY < footerOffset) {
        header.classList.remove('even-color');
      } else {
        header.classList.add('even-color');
      }
    } else {
      if (header.classList.contains('even-color')) {
        header.classList.remove('even-color');
      }
    }
  }
}