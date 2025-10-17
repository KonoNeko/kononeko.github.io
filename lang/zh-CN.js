// 中文语言包
const zhCN = {
    // 页面标题和元信息
    pageTitle: "Hongci - 个人主页",
    pageDescription: "全栈软件开发工程师 | AI 产品创新者 - 专注于创建高质量的软件产品",
    pageKeywords: "全栈开发,软件工程师,AI开发,前端,后端,个人网站",
    
    // 导航栏
    nav: {
        home: "首页",
        about: "关于我",
        skills: "技能",
        projects: "项目",
        experience: "经历",
        contact: "联系我"
    },
    
    // 首页/欢迎区
    hero: {
        greeting: "你好，我是",
        name: "丁鸿磁Akink",
        title: "全栈软件开发工程师",
        subtitle: "专注于创建高质量的软件产品",
        description: "热爱编程，擅长前后端开发，AI产品设计与实现",
        viewProjects: "查看项目",
        contactMe: "联系我",
        downloadCV: "下载简历",
        codeComment: "// 关于我",
        focus: "AI 大模型应用开发",
        location: "中国 · 上海 / 南京 / 温哥华",
        motto: "技术 x 人文，打造有温度的智能体验"
    },
    
    // 关于我
    about: {
        title: "关于我",
        subtitle: "了解更多关于我的信息",
        introduction: "我是一名充满激情的全栈开发工程师，专注于创建高质量的软件产品。我热爱学习新技术，享受解决复杂问题的过程。",
        learnMore: "了解更多关于我",
        details: {
            name: "姓名",
            age: "年龄",
            location: "位置",
            email: "邮箱",
            phone: "电话",
            experience: "经验",
            projects: "项目数",
            languages: "语言"
        },
        values: {
            passion: {
                title: "热情",
                description: "对编程和技术创新充满热情"
            },
            quality: {
                title: "品质",
                description: "致力于编写高质量、可维护的代码"
            },
            learning: {
                title: "学习",
                description: "持续学习新技术和最佳实践"
            },
            collaboration: {
                title: "协作",
                description: "善于团队合作，注重沟通交流"
            }
        }
    },
    
    // 技能
    skills: {
        title: "技能专长",
        subtitle: "我的技术栈和专业技能",
        categories: {
            frontend: "前端开发",
            backend: "后端开发",
            database: "数据库",
            tools: "开发工具",
            ai: "AI/ML",
            other: "其他技能"
        },
        skillLevels: {
            expert: "专家",
            advanced: "高级",
            intermediate: "中级",
            beginner: "初级"
        }
    },
    
    // 项目
    projects: {
        title: "精选项目",
        subtitle: "展示我的作品和技能",
        viewProject: "查看项目",
        viewCode: "查看代码",
        liveDemo: "在线演示",
        technologies: "技术栈",
        category: {
            all: "全部",
            web: "网页应用",
            mobile: "移动应用",
            ai: "AI项目",
            game: "游戏",
            tool: "工具",
            personal: "个人项目",
            company: "公司项目"
        }
    },
    
    // 经历
    experience: {
        title: "工作经历",
        subtitle: "我的职业发展历程",
        education: "教育背景",
        work: "工作经验",
        present: "至今",
        achievements: "主要成就",
        responsibilities: "主要职责"
    },
    
    // 联系我
    contact: {
        title: "联系我",
        subtitle: "让我们一起合作",
        getInTouch: "取得联系",
        description: "如果您有任何问题或合作机会，请随时联系我。我很乐意与您讨论项目需求或技术问题。",
        form: {
            name: "姓名",
            email: "邮箱",
            subject: "主题",
            message: "消息",
            send: "发送消息",
            sending: "发送中...",
            success: "消息发送成功！",
            error: "发送失败，请重试"
        },
        info: {
            title: "联系信息",
            email: "邮箱",
            phone: "电话",
            location: "工作地点",
            social: "社交媒体",
            wechat: "微信"
        },
        formTitle: "发送消息"
    },
    
    // 管理员面板
    admin: {
        title: "管理员面板",
        login: "管理员登录",
        password: "密码",
        loginBtn: "登录",
        logout: "退出登录",
        addProject: "添加项目",
        editProject: "编辑项目",
        deleteProject: "删除项目",
        projectTitle: "项目标题",
        projectDescription: "项目描述",
        projectImage: "项目图片",
        projectLink: "项目链接",
        projectTech: "技术栈",
        save: "保存",
        cancel: "取消",
        confirm: "确认删除此项目吗？"
    },
    
    // 通用
    common: {
        loading: "加载中...",
        error: "出错了",
        retry: "重试",
        close: "关闭",
        open: "打开",
        more: "更多",
        less: "收起",
        years: "年",
        months: "个月",
        days: "天"
    },
    
    // 语言切换
    language: {
        current: "中文",
        switch: "English",
        tooltip: "切换到英文"
    }
};

// 导出语言包
if (typeof module !== 'undefined' && module.exports) {
    module.exports = zhCN;
} else if (typeof window !== 'undefined') {
    window.zhCN = zhCN;
}