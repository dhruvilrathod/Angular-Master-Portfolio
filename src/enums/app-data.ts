import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/rado-mahenina-randrianjanahary-049a01331/?skipRedirect=true",
        simpleIconName: "LinkedIn", // this icon is not available in simple icon v14
        backgroundColor: "#0066c8", // manually checked
    },
    {
        name: "Gmail",
        link: "https://mail.google.com/mail/?view=cm&to=radomaheninarandrianjanahary@gmail.com",
        simpleIconName: "Gmail",
        backgroundColor: "#EA4335",
    },
    {
        name: "WhatsApp",
        link: "https://wa.me/261342665876",
        simpleIconName: "WhatsApp",
        backgroundColor: "#3da81d",
    },
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: "Angular",
        link: "",
        simpleIconName: "Angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "React",
        link: "",
        simpleIconName: "React",
        backgroundColor: "#1572B6",
    },
    {
        name: "NodeJS",
        link: "",
        simpleIconName: "Node.js",
        backgroundColor: "#5FA04E",
    },
    {
        name: "Java",
        link: "",
        simpleIconName: "Java",
        backgroundColor: "#ffffffd3",
    },
    {
        name: "PHP",
        link: "",
        simpleIconName: "PHP",
        backgroundColor: "#ffffffd3",
    },
    {
        name: "Postgresql",
        link: "",
        simpleIconName: "Postgresql",
        backgroundColor: "#ffffff",
    },
];

// Fullstack section
const FullstackSection: SkillSection = {
    sectionTitle: "Fullstack Development",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
        "Composée de 4 développeurs expérimentés",
        "Parcours professionnel chez ITUniversity",
        "Nous venons de différentes entreprises à Madagascar avec des postes variés dans le développement",
        "Deux développeurs front-end et conception d’API REST, un développeur spécialisé en intégration de bases de données, un hébergeur web",
    ]
}

// Could skills
const CloudSkills: ExternalSite[] = [
    // {
    //     name: "Heroku",
    //     link: "https://www.heroku.com/",
    //     simpleIconName: "Heroku",
    //     backgroundColor: "#430098",
    // }
];

// Could section
const CloudSection: SkillSection = {
    sectionTitle: "Nos services",
    imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG,
    skillLinks: CloudSkills,
    skillsList: [
        "<strong>Application de gestion :</strong>",
        "&nbsp;&nbsp;• Système d'information d'une entreprise, digitalisant les tâches grâce aux données internes",
        "&nbsp;&nbsp;• Mise en place de systèmes de gestion RH ou de comptabilité",
        "&nbsp;&nbsp;• Personnalisation des applications existantes, modifications des ERP",
        "<strong>Création de sites web</strong>",
        "&nbsp;&nbsp;• Site web vitrine, utilisant toutes les technologies demandées",
        "&nbsp;&nbsp;• Site web dynamique, dont le contenu change en fonction des données, comme les sites d’annonces",
        "&nbsp;&nbsp;• Site web de vente, e-commerce et boutique en ligne",
        "<strong>Maintenance & Hébergement</strong>",
        "&nbsp;&nbsp;• Création de noms de domaine selon la demande du client",
        "&nbsp;&nbsp;• Configuration d’e-mails professionnels avec le nom de domaine",
        "&nbsp;&nbsp;• Hébergement web sécurisé",
        "&nbsp;&nbsp;• Mises à jour et support technique",
    ]
}

// Design skills
const DesignSkills: ExternalSite[] = [
    {
        name: "Adobe XD",
        link: "https://adobexdplatform.com/",
        simpleIconName: "Adobe XD",
        backgroundColor: "#FF2BC2",
    },
    {
        name: "Figma",
        link: "https://figma.com/",
        simpleIconName: "Figma",
        backgroundColor: "#F24E1E",
    },
    {
        name: "Adobe Illustrator",
        link: "https://www.adobe.com/au/products/illustrator.html/",
        simpleIconName: "Adobe Illustrator",
        backgroundColor: "#FF7C00",
    },
    {
        name: "Adobe Photoshop",
        link: "https://www.adobe.com/products/photoshop.html/",
        simpleIconName: "Adobe Photoshop",
        backgroundColor: "#001e36",
    },
];

// Personal projects
const PersonalProjects: ProjectSection = {
    sectionTitle: "My Projects",
    sectionSubtitle: "🚀 Showcasing innovative solutions and real-world applications built with cutting-edge technologies.",
    entities: [
        {
            title: "Web-Based 3D IFC File Viewer",
            coverImagePath: AssetPaths.PROJECT_THREEJS_IFC_VIEWER,
            liveLink: "https://dhruvilrathod.github.io/webifcviewer/",
            githubLink: "https://github.com/dhruvilrathod/three_ifc_angular",
            description: "🧱 This tool enables seamless visualization of IFC files in your browser. Toggle elements, explore real-time details by hovering, search and highlight elements, and interact with ease for a dynamic 3D experience.",
            techStack: ["Angular", "ThreeJS", "ExpressJS", "Heroku"],
            year: 2022
        },
        {
            title: "Customizable Multi-Select Dropdown",
            coverImagePath: AssetPaths.PROJECT_CUSTOM_DROPDOWN,
            githubLink: "https://github.com/dhruvilrathod/custom-dropdown/tree/resource-tree-utility",
            description: "🌲 An Angular-based, asynchronous multi-select dropdown designed for tree-structured data with custom validation. It's a powerful replacement for jQuery's Select2.",
            techStack: ["Angular", "TypeScript", "SCSS"],
            year: 2023,
            branch: "resource-tree-utility"
        },
        {
            title: "Learning Management System",
            coverImagePath: AssetPaths.PROJECT_LMS_APP,
            githubLink: "https://github.com/dhruvilrathod/lms-asite",
            description: "📚 A production-grade frontend for a Learning Management System, designed with scalability in mind to deliver a seamless and efficient user experience.",
            techStack: ["Angular", "PrimeNG", "Tailwind", "Figma"],
            year: 2023
        },
        {
            title: "Angular + NestJS Boilerplate",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_NEST_DOCKER,
            githubLink: "https://github.com/dhruvilrathod/sample-angular-nest",
            description: "🛠️ A production-grade boilerplate integrating Angular, NestJS, and Nginx for seamless fullstack development. Perfect for kickstarting robust and scalable web applications.",
            techStack: ["Angular", "NestJS", "NgINX", "Docker"],
            year: 2023
        },
        {
            title: "Hospital Management System Dashboard",
            coverImagePath: AssetPaths.PROJECT_HMS_APP,
            githubLink: "https://github.com/freelancer-dhruvil/hms-demo",
            description: "🏥 Transformed Figma designs into a fully functional, user-friendly dashboard for a Hospital Management System, ensuring precision and intuitive interface.",
            techStack: ["Angular", "PrimeNG", "PrimeFlex", "Figma"],
            year: 2024
        },
        {
            title: "Cross-Platform Music Player",
            coverImagePath: AssetPaths.PROJECT_MUSIC_PLAYER,
            githubLink: "https://github.com/dhruvilrathod/music_player",
            description: "🎵 Developed with Angular and NestJS, this music player evolved into a fullstack app and was wrapped with ElectronJS for a seamless desktop experience.",
            techStack: ["Angular", "NestJS", "ElectronJS", "ExpressJS"],
            year: 2023
        }
    ]
}

// Freelancing projects
const FreelancingProjects: ProjectSection = {
    sectionTitle: "Freelancing",
    sectionSubtitle: "🚀 Transforming Ideas into Digital Solutions: Tailored Websites, Custom CMS, and More!",
    entities: [
        {
            title: "South Australia Tiling",
            coverImagePath: AssetPaths.PROJECT_SA_TILING,
            liveLink: "https://southaustraliatiling.com.au/",
            description: "🚀 Built with SSR and SSG to showcase a South Australian tiling and bathroom renovation business, enhancing their online presence and visibility.",
            techStack: ["Angular 19", "SSR/SSG", "NestJS", "Firebase"],
            year: 2025
        },
        {
            title: "Kiwi Finance",
            coverImagePath: AssetPaths.PROJECT_KIWI_FINANCE,
            liveLink: "https://kiwifinance.com.au/",
            description: "💰 Developed a tailored website for a new Perth-based finance and mortgage broking business, combining modern design with a focus on accessibility and client engagement.",
            techStack: ["Angular", "MongoDB", "NestJS", "Firebase"],
            year: 2025
        },
        {
            title: "RAS Finance Website + CMS",
            coverImagePath: AssetPaths.PROJECT_RAS_FINANCE,
            liveLink: "https://rasfinance.com.au/",
            description: "📈 Designed a bespoke website for a leading South Australia-based finance and mortgage broking business, showcasing services with a sleek, client-focused design.",
            techStack: ["Angular", "MongoDB", "NestJS", "Firebase"],
            year: 2024
        },
        {
            title: "Acquire Conveyancing Website",
            coverImagePath: AssetPaths.PROJECT_ACQUIRE_CONVEYANCING,
            liveLink: "https://acquireconveyancing.com.au/",
            description: "🏡 Crafted a tailored website for a South Australia-based conveyancing business, delivering a professional online presence with user-friendly design and local appeal.",
            techStack: ["Angular", "Tailwind", "Firebase"],
            year: 2023
        },
    ]
}


// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Work Experience",
    experiences: [
        {
            orgLink: "https://acquireconveyancing.com.au/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Acquire Conveyancing",
            positions: [
                {
                    positionName: "Conveyancing Assistant",
                    duration: "Apr 2024 - Present",
                    location: "Adelaide, SA",
                    locationType: "On-Site",
                    jobType: "Part-time",
                    workPoints: [
                        "Ensured secure management of sensitive data with top-notch IT support. 🔒",
                        "Streamlined property searches by liaising with government agencies. 🏡",
                        "Prepared legal documents like Cooling Off Forms, Nominations, and Addendums. 📝",
                        "Optimized software workflows with precise data entry and customized templates in CATS and PEXA. ⚙️",
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.asite.com/",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Asite Solution",
            positions: [
                {
                    positionName: "Jr Software Engineer",
                    duration: "Jun 2023 - Mar 2024",
                    location: "Ahmedabad, India",
                    locationType: "Hybrid",
                    jobType: "Full-time",
                    workPoints: [
                        "Built the Issue Tracker feature for the cBIM unit, integrating 30+ Angular components like side pane, image carousel, and quill editor. 🚀📋",
                        "Designed a robust Angular reactive form and a customizable async dropdown for efficient file-folder tree searches, enhancing Record Retention Policy. 📂🔍",
                        "Debugged and unit-tested code using Karma & Jasmine, achieving an impressive 96% coverage. 🐞✅",
                    ]
                }
            ]
        }
    ]
}

// Freenacing Experience
const FreelancingExperience: ExperienceSection = {
    experienceSectionTitle: "Freelancing",
    experiences: [
        {
            orgLink: "https://southaustraliatiling.com.au/",
            orgLogoPath: AssetPaths.WORK_SA_TILING_LOGO,
            orgName: "South Australia Tiling",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2025",
                    location: "Adelaide, WA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Designed and developed a visually appealing website to highlight the high-quality work of a South Australian tiling and bathroom renovation business, improving their online presence.📊",
                        "Utilized Server-Side Rendering (SSR) and Static Site Generation (SSG) to enhance search engine visibility and drive organic traffic to the website. 🚀",
                    ]
                }
            ]
        },
        {
            orgLink: "https://kiwifinance.com.au/",
            orgLogoPath: AssetPaths.WORK_KIWI_LOGO,
            orgName: "Kiwi Finance",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2025",
                    location: "Perth, WA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Designed and developed an SEO-friendly website with financial calculators, and a custom contact form tailored to Astute Financial's requirements. 🌐📊",
                        "Streamlined data collection and client inquiries by integrating the contact form with Google Sheets and Gmail. 📋",
                    ]
                }
            ]
        },
        {
            orgLink: "https://rasfinance.com.au/",
            orgLogoPath: AssetPaths.WORK_RAS_LOGO,
            orgName: "RAS Finance",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2024",
                    location: "Adelaide, SA",
                    locationType: "Hybrid",
                    jobType: "Contract",
                    workPoints: [
                        "Built a dynamic website featuring financial calculators, a CMS for articles, and a sleek contact form. 📊📝",
                        "Streamlined client inquiries by integrating the contact form with Google Sheets and Gmail. 📧📋✨",
                    ]
                }
            ]
        },
        {
            orgLink: "https://acquireconveyancing.com.au/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Acquire Conveyancing",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2023",
                    location: "Adelaide, SA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Crafted a professional logo, business cards, and responsive website using Illustrator. 🎨💼",
                        "Set up a custom domain email and Office 365 with SharePoint for seamless operations. 📧🔗",
                        "Developed and hosted an SEO-friendly website with a contact form to boost online presence. 🌐📈",
                    ]
                }
            ]
        },
    ]
}

// Internships Experience
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "Internships",
    experiences: [
        {
            orgLink: "https://asite.com/",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Asite Solution",
            positions: [
                {
                    positionName: "UI Developer Intern",
                    duration: "Feb 2023 - May 2023",
                    location: "Ahmedabad, India",
                    locationType: "Hybrid",
                    jobType: "Full-time",
                    workPoints: [
                        "Led an 11-member team to design and implement the frontend architecture of an LMS using Angular, following the latest methodologies and best practices. 🚀💻",
                        "Gained expertise in Angular, jQuery, SCSS, and DSA through personalized training and hands-on assignments during the internship. 🌟📊✨",
                    ]
                },
                {
                    positionName: "Software Engineering Intern",
                    duration: "Jun 2022 — Jul 2022",
                    location: "Ahmedabad, India",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Developed an innovative 3D IFC file viewer using Three.js, applying DSA concepts to create a tree-like structure for exploring model internals. 🌐🌳📐",
                        "Deployed the Node.js backend on Heroku and hosted the frontend on GitHub Pages for seamless accessibility. 🚀💻✨",
                    ]
                }
            ]
        },
        {
            orgLink: "https://workxmate.com/",
            orgLogoPath: AssetPaths.WORK_WORKXMATE_LOGO,
            orgName: "WorkXMate Technologies Pvt. Ltd.",
            positions: [
                {
                    positionName: "Angular Developer Internship",
                    duration: "Feb 2022 — Mar 2022",
                    location: "Noida, India",
                    locationType: "Remote",
                    jobType: "Part-time",
                    workPoints: [
                        "Designed and implemented an optimized, cross-browser-compatible Attendance Management Module. 🌐✔️",
                        "Built a RESTful Node.js server integrated with Oracle DB for seamless code migration. 🚀📊",
                        "Developed intuitive web forms with robust validation and error handling for a smooth user experience. 🖋️⚙️✨",
                    ]
                }
            ]
        },
    ]
}

// Community Involvement
const CommunityInvolvement: ProjectSection = {
    sectionTitle: "Community Involvement",
    entities: [
        {
            liveLink: "https://adventofcode.com/",
            coverImagePath: AssetPaths.ACHIEVEMENT_AOC_PIC,
            techStack: ["Python"],
            title: "Advent of Code 2024",
            description: "📅 Completed all Advent of Code 2024 problems within a personal deadline of 1 day each, showcasing strong DSA and problem-solving skills.🎯",
            year: 2024,
            githubLink: "https://github.com/dhruvilrathod/RSP/tree/master/advent_of_code",
        },
    ]
}

// Achievement
const AchievementInvolvement: ProjectSection = {
    sectionTitle: "Achievements",
    entities: [
        {
            liveLink: "https://www.linkedin.com/posts/dhruvilrathod_competitiveprogramming-codingchallenges-teamwork-activity-7291965632684695553-CTqM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADi05s0B8nMLyX_mC2aovn2P6w6tNr-b3AA",
            coverImagePath: AssetPaths.ACHIEVEMENT_CPC_RSP_WIN_PIC,
            techStack: ["C++", "Python"],
            title: "CPC X RSP 2025",
            description: "🏆 Secured 3rd place in a high-stakes coding competition, tackling complex algorithms under pressure! Grateful for an incredible team and experience at CPC X RSP competition.",
            year: 2025,
        },
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_UNISA_CHANCELLORS_LETTER_2024_PIC,
            liveLink: "unisa-chancellors-letter-of-commandation-2024.html",
            // liveLink: "public/unisa-chancellors-letter-of-commandation-2024.html",
            techStack: ["Cisco", "FortiGate", "ISO 270001"],
            title: "Chancellor's Commendation Letter (2024)",
            description: "🚀 Awarded for academic excellence with a cumulative program GPA in the TOP 5% of all students, and invited to join the Golden Key International Honour Society.",
            year: 2024,
        },
    ]
}

// Degrees
const BachelorsDegree: EducationSection = {
    degreeName: "Bachelor of Engineering",
    majorName: "Computer Engineering",
    duration: "Jul 2019 - May 2023",
    universityName: "Gujarat Technological University (GTU)",
    campusName: "VGEC",
    logoImagePath: AssetPaths.EDUCATION_GTU_LOGO,
    gpa: "6.9 / 7.0",
    websiteLink: "https://www.gtu.ac.in/",
    studyPoints: [
        "Studied foundational subjects like Data Structures, Database Management Systems, Discrete Mathematics, and Operating Systems, building a strong base in computer science. 🧠💻",
        "Explored Object-Oriented Programming, Software Engineering, Computer Networks, and Microprocessor & Interfacing, bridging software development with hardware understanding. ⚙️",
        "Gained insights into Big Data Analytics, Artificial Intelligence, Data Mining, and Data Visualization, equipping skills for modern computing challenges. 🚀📊",
    ]
}


export const AppConfig = {
    loaderSplashAnimation: true,        // enable or disable splash screen at the initialization of website
    logoName: "Dev-Professionnel",         // Signature font logo name in header
    name: "Dev-Professionnel",             // your name
    emailId: "thedhruvilrathod@gmail.com",  // your email id

    // Google Form Contact Link
    googleFormContactLink: "https://docs.google.com/forms/d/e/1FAIpQLSdLL8txhuCh8_On7-QAysulM7O7bagAOLcT-TrjX96Vj9FIeg/viewform?usp=publish-editor",

    // Home page
    professionalTitle: "Développeurs Freelance",
    professionalSummary: "Forte expérience dans le développement full-stack, la conception d’API REST, la gestion de bases de données relationnelles et NoSQL, et le déploiement en production.",
    githubProfile: "https://github.com/dhruvilrathod",              // Your github profile link
    portfolioRepository: "https://github.com/dhruvilrathod/Angular-Master-Portfolio",        // Your portfolio repository link
    socialMedia: SocialMediaLinks,      // use from above
    aboutMe: [                          // all the sections you want to show under "What I do?". 
        FullstackSection,
        CloudSection,
    ],

    // Projects page
    projectsPageTitle: "Projects & Freelancing",    // Title of projects page
    projectsPageDescription: "My projects leverage a diverse range of cutting-edge technology tools. I specialize in building data science solutions and seamlessly deploying them as web applications using robust cloud infrastructure.",
    projectSections: [                  // Define and add a custom section if needed
        FreelancingProjects,
        PersonalProjects,
    ],

    // Experience page
    experiencePageTitle: "My Works, Internships and Freelancing",
    experiencePageDescription: "💼 From Corporate Giants to Creative Freelance Projects: A journey through internships, corporate, and helping local businesses.",
    experienceSections: [               // Define and add a custom section if needed
        JobExperience,
        InternshipExperience,
        FreelancingExperience,
    ],

    // Education page
    educationPageTitle: "Technologie",
    educationPageDescription: "💻 Les outils et technologies que nous maîtrisons pour créer des solutions innovantes pour le web et les applications",
    educationSections: [
    ],


    // Achievements Page
    achievementsPageTitle: "Achievements, Participation and Community Involvement",
    achievementsPageDescription: "🚀 Milestones, Contributions & Impact: Driving Innovation, Engaging Communities, and Making a Difference 🌍",
    achievementsSections: [
        AchievementInvolvement,
        CommunityInvolvement,
    ],
}
