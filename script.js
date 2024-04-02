// script.js

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.02)';
        project.style.transition = 'transform 0.3s ease';
    });

    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
    });
});
