// English language pack
const enUS = {
    // Page title and meta information
    pageTitle: "Hongci - Personal Website",
    pageDescription: "Full-Stack Software Developer | AI Product Innovator - Focused on creating high-quality software products",
    pageKeywords: "full-stack development,software engineer,AI development,frontend,backend,personal website",
    
    // Navigation
    nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact"
    },
    
    // Hero/Welcome section
    hero: {
        greeting: "Hello, I'm",
        name: "Hongci Ding",
        title: "Full-Stack Software Developer",
        subtitle: "Focused on creating high-quality software products",
        description: "Passionate about programming, skilled in frontend and backend development, AI product design and implementation",
        viewProjects: "View Projects",
        contactMe: "Contact Me",
        downloadCV: "Download CV",
        codeComment: "// About me",
        focus: "AI & ML Application Development",
        location: "China · Shanghai / Nanjing / Canada · Vancouver",
        motto: "Technology x Humanity, creating intelligent experiences with warmth"
    },
    
    // About
    about: {
        title: "About Me",
        subtitle: "Learn more about who I am",
        introduction: "I'm a passionate full-stack developer focused on creating high-quality software products. I love learning new technologies and enjoy the process of solving complex problems.",
        learnMore: "Learn more about me",
        details: {
            name: "Name",
            location: "Location", 
            email: "Email",
            phone: "Phone",
            experience: "Experience",
            projects: "Projects",
            languages: "Languages"
        },
        values: {
            passion: {
                title: "Passion",
                description: "Passionate about programming and technological innovation"
            },
            quality: {
                title: "Quality",
                description: "Committed to writing high-quality, maintainable code"
            },
            learning: {
                title: "Learning",
                description: "Continuously learning new technologies and best practices"
            },
            collaboration: {
                title: "Collaboration",
                description: "Good at teamwork, focusing on communication"
            }
        }
    },
    
    // Skills
    skills: {
        title: "Skills & Expertise",
        subtitle: "My technology stack and professional skills",
        categories: {
            frontend: "Frontend Development",
            backend: "Backend Development",
            database: "Database",
            tools: "Development Tools",
            ai: "AI/ML",
            other: "Other Skills"
        },
        skillLevels: {
            expert: "Expert",
            advanced: "Advanced",
            intermediate: "Intermediate",
            beginner: "Beginner"
        }
    },
    
    // Projects
    projects: {
        title: "Featured Projects",
        subtitle: "Showcasing my work and skills",
        viewProject: "View Project",
        viewCode: "View Code",
        liveDemo: "Live Demo",
        technologies: "Technologies",
        category: {
            all: "All",
            web: "Web App",
            mobile: "Mobile App",
            ai: "AI Project",
            game: "Game",
            tool: "Tool",
            personal: "Personal",
            company: "Company"
        }
    },
    
    // Experience
    experience: {
        title: "Work Experience",
        subtitle: "My professional development journey",
        education: "Education",
        work: "Work Experience",
        present: "Present",
        achievements: "Key Achievements",
        responsibilities: "Main Responsibilities"
    },
    
    // Contact
    contact: {
        title: "Contact Me",
        subtitle: "Let's work together",
        getInTouch: "Get In Touch",
        description: "If you have any questions or collaboration opportunities, please feel free to contact me. I'd love to discuss project requirements or technical issues with you.",
        form: {
            name: "Name",
            email: "Email",
            subject: "Subject",
            message: "Message",
            send: "Send Message",
            sending: "Sending...",
            success: "Message sent successfully!",
            error: "Failed to send, please try again"
        },
        info: {
            title: "Contact Information",
            email: "Email",
            phone: "Phone",
            location: "Work Location",
            social: "Social Media",
            wechat: "WeChat"
        },
        formTitle: "Send Message"
    },
    
    // Admin panel
    admin: {
        title: "Admin Panel",
        login: "Admin Login",
        password: "Password",
        loginBtn: "Login",
        logout: "Logout",
        addProject: "Add Project",
        editProject: "Edit Project",
        deleteProject: "Delete Project",
        projectTitle: "Project Title",
        projectDescription: "Project Description",
        projectImage: "Project Image",
        projectLink: "Project Link",
        projectTech: "Technologies",
        save: "Save",
        cancel: "Cancel",
        confirm: "Are you sure you want to delete this project?"
    },
    
    // Common
    common: {
        loading: "Loading...",
        error: "Something went wrong",
        retry: "Retry",
        close: "Close",
        open: "Open",
        more: "More",
        less: "Less",
        years: "years",
        months: "months",
        days: "days"
    },
    
    // Language switching
    language: {
        current: "English",
        switch: "中文",
        tooltip: "Switch to Chinese"
    }
};

// Export language pack
if (typeof module !== 'undefined' && module.exports) {
    module.exports = enUS;
} else if (typeof window !== 'undefined') {
    window.enUS = enUS;
}