// 语言管理器
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('preferredLanguage') || 'zh-CN';
        this.languages = {
            'zh-CN': window.zhCN,
            'en-US': window.enUS
        };
        this.init();
    }

    init() {
        // 等待语言文件加载完成
        if (!window.zhCN || !window.enUS) {
            setTimeout(() => this.init(), 100);
            return;
        }
        
        this.languages = {
            'zh-CN': window.zhCN,
            'en-US': window.enUS
        };
        
        this.createLanguageToggle();
        this.applyLanguage();
        this.bindEvents();
    }

    createLanguageToggle() {
        // 检查是否已经存在语言切换按钮
        const existingToggle = document.getElementById('language-toggle');
        if (existingToggle) {
            // 如果按钮已存在，只需要更新其文本
            this.updateToggleButton();
            return;
        }

        const navRight = document.querySelector('nav .flex.items-center.space-x-4');
        if (!navRight) return;

        const langToggle = document.createElement('button');
        langToggle.id = 'language-toggle';
        langToggle.className = 'text-light-dark hover:text-primary transition-colors duration-300 flex items-center space-x-1';
        langToggle.innerHTML = `
            <i class="fa fa-globe text-lg"></i>
            <span class="hidden sm:inline text-sm">${this.getCurrentLanguageText().language.switch}</span>
        `;
        langToggle.title = this.getCurrentLanguageText().language.tooltip;
        
        // 插入到设置按钮之前
        const adminToggle = document.getElementById('admin-toggle');
        navRight.insertBefore(langToggle, adminToggle);
    }

    getCurrentLanguageText() {
        return this.languages[this.currentLanguage] || this.languages['zh-CN'];
    }

    switchLanguage() {
        this.currentLanguage = this.currentLanguage === 'zh-CN' ? 'en-US' : 'zh-CN';
        localStorage.setItem('preferredLanguage', this.currentLanguage);
        this.applyLanguage();
        this.updateToggleButton();
    }

    updateToggleButton() {
        const toggleBtn = document.getElementById('language-toggle');
        if (toggleBtn) {
            const span = toggleBtn.querySelector('span');
            if (span) {
                span.textContent = this.getCurrentLanguageText().language.switch;
            }
            toggleBtn.title = this.getCurrentLanguageText().language.tooltip;
        }
    }

    applyLanguage() {
        const lang = this.getCurrentLanguageText();
        
        // 更新页面标题和meta信息
        document.title = lang.pageTitle;
        document.documentElement.lang = this.currentLanguage;
        
        // 更新meta标签
        this.updateMetaTag('description', lang.pageDescription);
        this.updateMetaTag('keywords', lang.pageKeywords);
        
        // 更新Open Graph标签
        this.updateMetaTag('og:title', lang.pageTitle, 'property');
        this.updateMetaTag('og:description', lang.pageDescription, 'property');
        this.updateMetaTag('twitter:title', lang.pageTitle, 'property');
        this.updateMetaTag('twitter:description', lang.pageDescription, 'property');

        // 更新所有文本内容
        this.updateNavigationText(lang);
        this.updateHeroSection(lang);
        this.updateAboutSection(lang);
        this.updateSkillsSection(lang);
        this.updateProjectsSection(lang);
        this.updateExperienceSection(lang);
        this.updateContactSection(lang);
        this.updateAdminPanel(lang);
    }

    updateMetaTag(name, content, attribute = 'name') {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        if (meta) {
            meta.content = content;
        }
    }

    updateNavigationText(lang) {
        // 更新导航链接
        const navLinks = {
            'a[href="#home"]': lang.nav.home,
            'a[href="#about"]': lang.nav.about,
            'a[href="#skills"]': lang.nav.skills,
            'a[href="#projects"]': lang.nav.projects,
            'a[href="#experience"]': lang.nav.experience,
            'a[href="#contact"]': lang.nav.contact
        };

        Object.entries(navLinks).forEach(([selector, text]) => {
            document.querySelectorAll(selector).forEach(link => {
                link.textContent = text;
            });
        });
    }

    updateHeroSection(lang) {
        this.updateElementBySelector('[data-text="hero-greeting"]', lang.hero.greeting);
        this.updateElementBySelector('[data-text="hero-name"]', lang.hero.name);
        this.updateElementBySelector('[data-text="hero-title"]', lang.hero.title);
        this.updateElementBySelector('.typing-text', lang.hero.title);
        this.updateElementBySelector('[data-text="hero-subtitle"]', lang.hero.subtitle);
        this.updateElementBySelector('[data-text="hero-description"]', lang.hero.description);
        this.updateElementBySelector('[data-text="view-projects"]', lang.hero.viewProjects);
        this.updateElementBySelector('[data-text="contact-me"]', lang.hero.contactMe);
        this.updateElementBySelector('[data-text="download-cv"]', lang.hero.downloadCV);
        this.updateElementBySelector('[data-text="hero-code-comment"]', lang.hero.codeComment);
        this.updateElementBySelector('[data-text="hero-focus"]', lang.hero.focus);
        this.updateElementBySelector('[data-text="hero-location"]', lang.hero.location);
        this.updateElementBySelector('[data-text="hero-motto"]', lang.hero.motto);
    }

    updateAboutSection(lang) {
        this.updateElementBySelector('[data-text="about-title"]', lang.about.title);
        this.updateElementBySelector('[data-text="about-subtitle"]', lang.about.subtitle);
        this.updateElementBySelector('[data-text="about-intro"]', lang.about.introduction);
        this.updateElementBySelector('[data-text="about-learn-more"]', lang.about.learnMore);
        
        // 更新详细信息
        if (lang.about.details) {
            Object.entries(lang.about.details).forEach(([key, value]) => {
                this.updateElementBySelector(`[data-text="about-${key}"]`, value);
            });
        }

        // 更新价值观
        if (lang.about.values) {
            Object.entries(lang.about.values).forEach(([key, value]) => {
                this.updateElementBySelector(`[data-text="value-${key}-title"]`, value.title);
                this.updateElementBySelector(`[data-text="value-${key}-desc"]`, value.description);
            });
        }
    }

    updateSkillsSection(lang) {
        this.updateElementBySelector('[data-text="skills-title"]', lang.skills.title);
        this.updateElementBySelector('[data-text="skills-subtitle"]', lang.skills.subtitle);
        
        // 更新技能分类
        Object.entries(lang.skills.categories).forEach(([key, value]) => {
            this.updateElementBySelector(`[data-text="skill-category-${key}"]`, value);
        });
    }

    updateProjectsSection(lang) {
        this.updateElementBySelector('[data-text="projects-title"]', lang.projects.title);
        this.updateElementBySelector('[data-text="projects-subtitle"]', lang.projects.subtitle);
        this.updateElementBySelector('[data-text="view-project"]', lang.projects.viewProject);
        this.updateElementBySelector('[data-text="view-code"]', lang.projects.viewCode);
        this.updateElementBySelector('[data-text="live-demo"]', lang.projects.liveDemo);
        this.updateElementBySelector('[data-text="technologies"]', lang.projects.technologies);

        // 更新项目分类
        Object.entries(lang.projects.category).forEach(([key, value]) => {
            this.updateElementBySelector(`[data-text="project-category-${key}"]`, value);
        });
    }

    updateExperienceSection(lang) {
        this.updateElementBySelector('[data-text="experience-title"]', lang.experience.title);
        this.updateElementBySelector('[data-text="experience-subtitle"]', lang.experience.subtitle);
        this.updateElementBySelector('[data-text="education"]', lang.experience.education);
        this.updateElementBySelector('[data-text="work-experience"]', lang.experience.work);
        this.updateElementBySelector('[data-text="present"]', lang.experience.present);
        this.updateElementBySelector('[data-text="achievements"]', lang.experience.achievements);
        this.updateElementBySelector('[data-text="responsibilities"]', lang.experience.responsibilities);
    }

    updateContactSection(lang) {
        this.updateElementBySelector('[data-text="contact-title"]', lang.contact.title);
        this.updateElementBySelector('[data-text="contact-subtitle"]', lang.contact.subtitle);
        this.updateElementBySelector('[data-text="get-in-touch"]', lang.contact.getInTouch);
        this.updateElementBySelector('[data-text="contact-description"]', lang.contact.description);
        this.updateElementBySelector('[data-text="contact-form-title"]', lang.contact.formTitle);

        // 更新表单
        Object.entries(lang.contact.form).forEach(([key, value]) => {
            const elements = document.querySelectorAll(`[data-text="form-${key}"]`);
            elements.forEach(element => {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = value;
                } else {
                    element.textContent = value;
                }
            });
        });

        // 更新联系信息
        Object.entries(lang.contact.info).forEach(([key, value]) => {
            this.updateElementBySelector(`[data-text="contact-info-${key}"]`, value);
        });
    }

    updateAdminPanel(lang) {
        Object.entries(lang.admin).forEach(([key, value]) => {
            this.updateElementBySelector(`[data-text="admin-${key}"]`, value);
        });
    }

    updateElementBySelector(selector, text) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (element) {
                element.textContent = text;
            }
        });
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('#language-toggle')) {
                e.preventDefault();
                this.switchLanguage();
            }
        });

        // 监听键盘快捷键 (Ctrl/Cmd + L)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
                e.preventDefault();
                this.switchLanguage();
            }
        });
    }
}

// 在DOM加载完成后初始化语言管理器
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});

// 导出语言管理器
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageManager;
} else if (typeof window !== 'undefined') {
    window.LanguageManager = LanguageManager;
}