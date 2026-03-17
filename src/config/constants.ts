import { CodeIcon, SmartphoneIcon, CpuIcon, BrainCircuitIcon, TrendingUpIcon } from 'lucide-react';
import aiAutomationImage from '../services/ai automation.jpg';
import iotImage from '../services/digital marketting.jpg';
import webDevImage from '../services/web_development_premium.png';

// Navigation Links
export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
];

// Service Links
export const SERVICE_LINKS = [
    { name: 'Web Development', path: '/web-development', color: 'bg-blue-500' },
    { name: 'App Development', path: '/app-development', color: 'bg-purple-500' },
    { name: 'IoT Development', path: '/iot-development', color: 'bg-emerald-500' },
    { name: 'AI Automations', path: '/ai-automations', color: 'bg-rose-500' },
    { name: 'Digital Marketing', path: '/digital-marketing', color: 'bg-orange-500' },
];

export const ALL_NAV_ITEMS = [
    ...NAV_LINKS,
    ...SERVICE_LINKS
];

// Home Page Data
export const SERVICES_DATA = [
    {
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies for exceptional user experiences.',
        icon: CodeIcon,
        link: '/web-development',
        gradient: 'from-gray-700 to-gray-900',
        backgroundImage: webDevImage
    },
    {
        title: 'App Development',
        description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
        icon: SmartphoneIcon,
        link: '/app-development',
        gradient: 'from-gray-700 to-gray-900',
        backgroundImage: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb'
    },
    {
        title: 'IoT Development',
        description: 'Connected devices and smart solutions that transform physical environments into intelligent ecosystems.',
        icon: CpuIcon,
        link: '/iot-development',
        gradient: 'from-gray-700 to-gray-900',
        backgroundImage: iotImage
    },
    {
        title: 'AI Automations',
        description: 'Intelligent automation solutions that streamline operations and boost productivity.',
        icon: BrainCircuitIcon,
        link: '/ai-automations',
        gradient: 'from-gray-700 to-gray-900',
        backgroundImage: aiAutomationImage
    },
    {
        title: 'Digital Marketing',
        description: 'Data-driven marketing strategies that amplify your brand and drive measurable results.',
        icon: TrendingUpIcon,
        link: '/digital-marketing',
        gradient: 'from-gray-700 to-gray-900',
        backgroundImage: 'https://images.unsplash.com/photo-1557862921-37829c790f19'
    }
];

export const TESTIMONIALS_DATA = [
    {
        quote: 'Innoaivators transformed our vision into a stunning reality. Their profound expertise and innovative approach significantly elevated our brand\'s digital presence. The meticulous attention to detail and seamless execution were truly unparalleled.',
        name: 'Nazira',
        role: 'CEO',
        company: 'Glossixpro'
    },
    {
        quote: 'Working with Innoaivators was a brilliant decision for our startup. Their agility, deep technical acumen, and focus on delivering a truly pixel-perfect, cutting-edge platform exceeded all our expectations.',
        name: 'Aathish',
        role: 'Founder',
        company: 'aatzy'
    },
    {
        quote: 'Innoaivators provided us with highly scalable and resilient software solutions that perfectly align with our sustainable energy goals. Their proactive team helped streamline our operations effortlessly.',
        name: 'Abdul kathir',
        role: 'General Manager',
        company: 'Agaram solar solutions'
    },
    {
        quote: 'Partnering with Innoaivators revolutionized our digital infrastructure. Their foresight, commitment to excellence, and robust engineering crafted a foundation that will drive our sustainable initiatives forward for years to come.',
        name: 'Sulthan alavudeen',
        role: 'CEO',
        company: 'Agaram solar solutions'
    },
    {
        quote: 'Their innovative strategies and unwavering commitment to quality completely transformed our business workflows. Innoaivators is a truly exceptional team that executes with precision and deep technical expertise.',
        name: 'Khaled alshammari',
        role: 'Executive',
        company: 'Metallica kuwait'
    },
    {
        quote: 'We engaged Innoaivators to scale our operations, and the results have been phenomenal. Their deep understanding of modern tech architectures coupled with a relentless drive for innovation made them an invaluable partner.',
        name: 'Arivu',
        role: 'CEO',
        company: 'Wetrekindia & we solutions'
    },
    {
        quote: 'The team at Innoaivators completely overhauled our IT infrastructure with zero downtime. Their tailored solutions and proactive support have drastically improved our system reliability and overall performance.',
        name: 'Gulam',
        role: 'IT Manager',
        company: 'Glossixpro'
    },
    {
        quote: 'Partnering with Innoaivators has been a game-changer for our business strategy. Their strategic insights and flawless execution have driven substantial growth and positioned us as a market leader.',
        name: 'Arafath',
        role: 'Managing Director',
        company: 'Glossixpro'
    }
];

export const STATS_DATA = [
    { value: 500, suffix: '+', label: 'Projects Completed', duration: 2 },
    { value: 200, suffix: '+', label: 'Happy Clients', duration: 2.2 },
    { value: 50, suffix: '+', label: 'Team Members', duration: 2.4 },
    { value: 99, suffix: '%', label: 'Client Satisfaction', duration: 2.6 }
];

export const WHAT_WE_DO_DATA = [
    {
        title: 'Discover',
        description: 'We partner with you to uncover opportunities through market research, competitor analysis, and stakeholder workshops.',
        icon: BrainCircuitIcon
    },
    {
        title: 'Design',
        description: 'We craft human-centered experiences backed by data-informed UX, visual prototyping, and rapid iteration.',
        icon: SmartphoneIcon
    },
    {
        title: 'Build',
        description: 'We engineer scalable platforms using resilient architectures, automation, and rigorous quality practices.',
        icon: CodeIcon
    },
    {
        title: 'Accelerate',
        description: 'We activate growth with targeted launches, intelligent analytics, and ongoing optimization initiatives.',
        icon: TrendingUpIcon
    }
];
