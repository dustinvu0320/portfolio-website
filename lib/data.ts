import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import reactivitiesImg from "@/public/reactivities.png";
import restaurantImg from "@/public/restaurant.png";
import tiktikImg from "@/public/tiktik.png";
import shoppingImg from "@/public/shopping.png";
import wordleImg from "@/public/wordle.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergraduated - University of Houston",
    location: "Houston, TX",
    description:
      "- I'm graduated with a Bachelor Degree in Computer Science. My time there was all about solving interesting problems in courses, racking up a few Dean’s List honors, and diving deep into software design.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2022",
  },
  {
    title: "Software Engineer - Publicis Sapient",
    location: "Houston, TX",
    description:
      "- Publicis Sapient was where I sharpened my collaboration skills, working with an awesome team. With tools like ASP.NET, ReactJS, TypeScript, SQL Server, Power BI, and Azure, I streamlined software processes and tackled some serious data challenges.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - July 2023",
  },
  {
    title: "Software Developer - Paycom",
    location: "Irving, TX",
    description:
      "- At Paycom, I dove into the world of payroll reporting, customizing tax reports for clients worldwide. Using PHP, JavaScript, MySQL, Docker, and Splunk, I focused on turning complex tax calculations into seamless, secure solutions!",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - October 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Reactivities",
    description:
      "A dynamic social networking platform that allows users to sign up for events while implementing Clean Architecture and real-time communication.",
    tags: ["React", "ASP.NET", "TypeScript", "PostgreSQL", "Github Actions"],
    imageUrl: reactivitiesImg,
    linkUrl: "https://reactivities-dv.fly.dev/"
  },
  {
    title: "Restaurant App",
    description:
      "A user-friendly e-commerce web app for a restaurant, ensuring seamless payment processing and secure customer interactions.",
    tags: ["React", "ASP.NET", "TypeScript", "Azure", "Stripe API"],
    imageUrl: restaurantImg,
    linkUrl: "https://dv-ecommerce.azurewebsites.net/"
  },
  {
    title: "Tiktik",
    description:
      "A TikTok clone application that enables users to create, share, and explore short videos, complete with features for likes, comments, and user profiles.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Sanity API"],
    imageUrl: tiktikImg,
    linkUrl: "http://tiktokclone-app.vercel.app/"
  },
  {
    title: "Shopping App",
    description:
    "A user-friendly e-commerce web app for a shopping, ensuring seamless payment processing and secure customer interactions.",
    tags: ["React", "NodeJS", "JavaScript", "Mongo DB"],
    imageUrl: shoppingImg,
    linkUrl: "https://ecommerceapp-frontend.onrender.com/"
  },
  {
    title: "Wordle",
    description:
      "A Wordle game as a desktop application, utilizing OOP design principles and automated testing to maintain code quality and stability.",
    tags: ["Java", "Swing GUI"],
    imageUrl: wordleImg,
    linkUrl: "https://github.com/dustinvu0320/WordleGame"
  },
] as const;

export const skillsData = [
  "PHP",
  "C#",
  "ASP.NET",
  "Azure",
  "Python",
  "Java",
  "SQL Server",
  "MySQL",
  "ReactJS",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Git",
  "Docker",
  "Splunk",
] as const;
