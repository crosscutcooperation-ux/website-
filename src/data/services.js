import { Globe, Smartphone, Bot, AppWindow, PenTool, Cloud } from 'lucide-react'
import webImage from '../../web.avif'
export const services = [
  { n:'01', icon:Globe, image:webImage, title:'Web Development', desc:'Fast, accessible websites and web apps built to convert and to last.', items:['Business Websites','Portfolio Websites','Landing Pages','E-commerce','Web Applications'] },
  { n:'02', icon:Smartphone, image:'/mobile-app.jpe', title:'Mobile Applications', desc:'Native-feeling apps for the platforms your users already live on.', items:['Android Applications','iOS Applications','Cross-Platform Apps','Progressive Web Apps'] },
  { n:'03', icon:Bot, image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', title:'AI & Automation', desc:'Practical AI and automation that removes repetitive work.', items:['AI Chatbots','AI Assistants','Workflow Automation','AI-Powered Features','Intelligent Business Tools'] },
  { n:'04', icon:AppWindow, image:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', title:'Custom Software', desc:'Software shaped around how your business actually operates.', items:['Desktop Applications','Internal Tools','Business Dashboards','SaaS Solutions','Custom Systems'] },
  { n:'05', icon:PenTool, image:'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80', title:'UI / UX Design', desc:'Clear, considered interfaces designed before a line of code is written.', items:['Wireframes','Interface Design','Responsive Design','Design Systems','User Experience Optimization'] },
  { n:'06', icon:Cloud, image:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80', title:'Backend & Cloud', desc:'Reliable foundations: APIs, data and infrastructure that scale.', items:['REST APIs','Database Architecture','Authentication','Cloud Deployment','Server Infrastructure'] },
]
