"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="italic">software developer</span> with a strong foundation in building efficient, secure, and reliable applications. My passion for software development stems from my love of problem-solving and my drive to learn new technologies. With over two years of experience, I've worked on complex payroll reporting systems, optimized application performance, 
        and developed custom solutions for international clients. My core tech stack is {" "}
        <span className="font-medium">PHP, ASP.NET, JavaScript, MySQL</span>.
      </p>

      <p className="mb-3">
        Outside of coding, I enjoy working out and spending time outdoors—paddle boarding, hiking, and camping are my go-to activities. When I'm not working, you'll likely find me playing with my dog, tuning into a good podcast, or diving into a new book. 
      </p>

      <p>
        I'm currently seeking a full-time position as a software engineer, excited to bring my skills to new challenges and impactful projects.
      </p>
    </motion.section>
  );
}
