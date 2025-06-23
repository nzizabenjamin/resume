// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved user preference or use system preference
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Social links - prevent default and open in new tab
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(this.href, '_blank');
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For this example, we'll just log it and show a success message
    console.log({ name, email, subject, message });
    
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Skills data
const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
    { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
   // { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
    //{ name: 'Python', icon: 'fab fa-python', color: 'text-blue-600' },
    { name: 'Java', icon: 'fab fa-java', color: 'text-red-500' },
    { name: 'SQL', icon: 'fas fa-database', color: 'text-blue-700' },
    { name: 'Tailwind CSS', icon: 'fas fa-paint-brush', color: 'text-teal-400' },
    //{ name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-500' },
    //{ name: 'Responsive Design', icon: 'fas fa-mobile-alt', color: 'text-green-400' }
];

// Projects data
const projects = [
    {
        title: 'E-commerce Website',
        description: 'A full-stack e-commerce platform with product listings, cart functionality, and user authentication.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
        link: '#',
        github: '#'
    },
    {
        title: 'Task Management App',
        description: 'A productivity application for organizing tasks with drag-and-drop functionality and deadline reminders.',
        technologies: ['JavaScript', 'Firebase', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
        link: '#',
        github: '#'
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather information application with 5-day forecast and location search functionality.',
        technologies: ['React', 'OpenWeather API', 'Chart.js'],
        image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80',
        link: '#',
        github: '#'
    },
    {
        title: 'Recipe Finder',
        description: 'Web application that helps users discover recipes based on ingredients they have available.',
        technologies: ['JavaScript', 'Edamam API', 'Bootstrap'],
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
        link: '#',
        github: '#'
    },
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio website to showcase projects and skills (this website).',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
        link: '#',
        github: '#'
    },
    {
        title: 'Blog Platform',
        description: 'Content management system for creating and managing blog posts with markdown support.',
        technologies: ['Python', 'Django', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        link: '#',
        github: '#'
    }
];

// Generate skills HTML
const skillsContainer = document.querySelector('#skills .grid');
skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-pill bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center space-x-3 transition-colors cursor-default';
    skillElement.innerHTML = `
        <i class="${skill.icon} ${skill.color} text-xl"></i>
        <span>${skill.name}</span>
    `;
    skillsContainer.appendChild(skillElement);
});

// Generate projects HTML
const projectsContainer = document.querySelector('#projects .grid');
projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project-card bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl';
    projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
        <div class="p-6">
            <h3 class="text-xl font-bold mb-2">${project.title}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.technologies.map(tech => `<span class="text-xs bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">${tech}</span>`).join('')}
            </div>
            <div class="flex space-x-3">
                <a href="${project.link}" class="text-primary-600 dark:text-primary-400 hover:underline">Live Demo</a>
                <a href="${project.github}" class="text-gray-600 dark:text-gray-300 hover:underline">View Code</a>
            </div>
        </div>
    `;
    projectsContainer.appendChild(projectElement);
});

// Add click handlers for project links
document.querySelectorAll('#projects a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.href !== '#') {
            window.open(this.href, '_blank');
        }
    });
});