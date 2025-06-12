export default {
    general : {
        profilePicture : "pp.jpg",
        name : "Ardito Hilman Martono",
        title : "Software Developer",
        descriptions : [
            `
            I’m a <span class="text-jet-200 font-semibold">software developer</span> with <span class="text-jet-200 font-semibold">4+ years of experience</span>, mainly focused on <span class="text-jet-200 font-semibold">frontend development</span> using <span class="text-harvest_gold-400 font-semibold">Vue</span>, <span class="text-harvest_gold-400 font-semibold">Nuxt</span>, and <span class="text-harvest_gold-400 font-semibold">JavaScript</span>—my go-to tools and something I’m really confident with. I’ve also got a solid handle on <span class="text-jet-200 font-semibold">backend</span> stuff, which helps me build more complete, well-rounded apps. Lately, I’ve been using <span class="text-jet-200 font-semibold">AI tools</span> to speed things up and make my workflow even smoother.
            `,
            `
            Outside of coding, I’m super into <span class="text-jet-200 font-semibold">motorsport</span> and <span class="text-jet-200 font-semibold">music</span>—they keep me inspired and balanced. Whether I’m working on a new feature or trying out the latest dev tools, I’m always looking for ways to <span class="text-jet-200 font-semibold">learn</span>, <span class="text-jet-200 font-semibold">improve</span>, and <span class="text-jet-200 font-semibold">build cool things</span>.
            `,
        ],
        resume : "CV-Ardito-Hilman-V1.1.pdf"
    },
    experiences : [
        {
            role  : "FRONTEND DEV (FREELANCE)",
            company  : "Vodjo / Bandung",
            date  : "Feb - Apr 2025",
            desc  : "Collaborated with cross-functional teams to translate user needs into optimized, reusable Web UI components."
        },
        {
            role  : "SENIOR SOFTWARE DEVELOPER",
            company  : "BTS.id - PT. Intersolusi Teknologi Asia / Bandung",
            date  : "Jan 2023 - Feb 2025",
            desc  : "Participate in integration of modular software into existing systems, resolved critical issues efficiently, and designed reusable components & module to streamline future development."
        },
        {
            role  : "SOFTWARE DEVELOPER",
            company  : "BTS.id - PT. Intersolusi Teknologi Asia / Bandung",
            date  : "Dec 2022 – Jun 2023",
            desc  : "Boosted software performance by identifying and fixing bugs while enhancing overall system stability"
        },
        {
            role  : "JUNIOR SOFTWARE DEVELOPER",
            company  : "BTS.id - PT. Intersolusi Teknologi Asia / Bandung",
            date  : "May 2021 – Dec 2022",
            desc  : "Developed tailored features for client-specific needs, improving functionality of existing applications."
        },
        {
            role  : "BACKEND DEV (Intern)",
            company  : "PT Adhim Aju Sejahtera / Bandung",
            date  : "Jul 2019 – Oct 2019",
            desc  : "Built API services and client for Smart Tranformers Device"
        }
    ],
    projects : [
        {
            name : "Vision+ Academy",
            desc : `
            A web app built to make the internship experience at Vision+ more open, informative, and exciting.
            <br/><br/>
            With Vision+ Academy, people can easily check if there are any open internship positions, see the schedule (when applications open and close), and follow each step of the hiring process. Users can also get notified when new positions are available—so they never miss a chance.
            <br/><br/>
            The site also shares what it’s like to intern at Vision+, including real stories from past interns, updates on internship activities, and the perks of being part of the program.
            `,
            link: "https://academy.visionplus.id/",
            ss: {
                prefix: '/ss/vplus-academy/',
                count: 7,
            },
            tech : [
                "Nuxt",
                "Typescript",
                "Vue",
                "Pinia",
                "TailwindCSS",
            ]
        },
        {
            name : "Vision+ Centralized Dashboard",
            desc : "All in one centralized dashboard. Manage all Vision+ system seamlessly and elevate your management system with this dashboard ",
            link: null,
            ss: {
                prefix: '/ss/vplus-centralized-dashboard/',
                count: 9,
            },
            tech : [
                "Nuxt",
                "Typescript",
                "Vue",
                "Pinia",
                "TailwindCSS",
            ]
        },
        {
            name : "Vision+ Smart TV App",
            desc : "It's V+ app where you can enjoy a lot of kind entertainment, but.. This one optimized for TV with LG - Web OS & Samsung - Tizen OS. This one built using Solid js to focused on responsive and high-performing user interfaces.",
            link: "https://tv.visionplus.id/",
            ss: {
                prefix: '/ss/vplus-smart-tv/',
                count: 7,
            },
            tech : [
                "SolidJS",
                "Typescript",
                "NanoStore",
                "TailwindCSS",
                "Golang",
            ]
        },
        {
            name : "Vision+ Android TV Launcher Dashboard",
            desc : "Provide API & Manage All thing about V+ custom STB launcher. Handle crucial thing such as - Setting up content Cluster, Poster, Banner, Subscription package, also sending promotional message to client device and many more",
            link: null,
            ss: {
                prefix: '/ss/vplus-atv-launcher/',
                count: 4,
            },
            tech : [
                "Laravel",
                "PostgreSQL",
                "Bootstrap",
                "Javascript",
            ]
        },
    ],
    skills : [
        {
            name: "FRONTEND",
            tech: [
                {
                    name : 'Javascript',
                    percentage: 93
                },
                {
                    name : 'Typescript',
                    percentage: 93
                },
                {
                    name : 'Nuxt',
                    percentage: 85
                },
                {
                    name : 'Vue',
                    percentage: 87
                },
                {
                    name : 'SolidJS',
                    percentage: 80
                },
                {
                    name : 'React',
                    percentage: 69
                },
                {
                    name : 'TailwindCss',
                    percentage: 80
                },
                {
                    name : 'Bootstrap',
                    percentage: 75
                },
            ]
        },
        {
            name: "BACKEND",
            tech: [
                {
                    name : 'Golang',
                    percentage: 80
                },
                {
                    name : 'NestJS',
                    percentage: 70
                },
                {
                    name : 'Laravel',
                    percentage: 87
                },
                {
                    name : 'Python',
                    percentage: 70
                },
            ]
        },
        {
            name: "DATABASE",
            tech: [
                {
                    name : 'PostgreSQL',
                    percentage: 80
                },
                {
                    name : 'MySQL',
                    percentage: 85
                },
                {
                    name : 'Microsoft SQL Server',
                    percentage: 60
                },
            ]
        },
        {
            name: "TOOLS",
            tech: [
                {
                    name : 'Git',
                    percentage: 95
                },
                {
                    name : 'Gitlab',
                    percentage: 90
                },
                {
                    name : 'Bitbucket',
                    percentage: 90
                },
                {
                    name : 'Docker',
                    percentage: 70
                },
                {
                    name : 'Figma',
                    percentage: 80
                },
                {
                    name : 'Jira',
                    percentage: 90
                },
            ]
        },
    ],
    contacts: {
        email: 'ardito.hm.work@gmail.com',
        phone: '+6281386194926',
        linkedin: 'https://www.linkedin.com/in/ardito-hilman-martono',
        instagram: 'https://www.instagram.com/arditohilman__/',
    }
}