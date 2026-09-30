"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pb-10">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold section-title mb-8"
      >
        About Me
      </motion.h2>

      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="glass neon-border p-8 rounded-xl max-w-3xl mx-auto"
      >
        {/* Hook */}
        <p className="text-slate-200 text-xl leading-relaxed mb-6">
          I am <span className="text-cyan-300 font-semibold">Trithikraj Doorga (Avi)</span>,
          a full-stack developer who has already shipped production code on an
          enterprise platform, and I am ready to do it again for your team.
        </p>

        {/* Professional experience */}
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          I bring <span className="text-cyan-300">3+ years of experience</span>, including
          two years at <span className="text-cyan-300">Infosys on the Renault platform</span>,
          where I built business features in
          <span className="text-cyan-300"> Java Spring Boot and Angular/React</span>, ran
          PostgreSQL and Liquibase data migrations, maintained GitLab CI/CD pipelines, and
          validated releases across Dev, QA and UAT. I know what it takes to deliver inside a
          large Agile organisation: clear communication with Product Owners, reliable code,
          and fixing issues fast when they reach production.
        </p>

        {/* Academic results */}
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          I have completed my
          <span className="text-cyan-300"> MSc in Computer Science (Software Engineering) at EPITA</span>,
          finishing <span className="text-cyan-300">3rd in my cohort</span>. My final-year
          project, <span className="text-cyan-300">Action Learning Cockpit</span>, a
          multi-service Spring Boot and React platform with real-time dashboards, was
          <span className="text-cyan-300"> ranked 1st</span>. This follows a
          <span className="text-cyan-300"> First Class Honours</span> degree in Applied
          Computing from the University of Mauritius.
        </p>

        {/* What I'm looking for */}
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          The last step to be awarded my Master&apos;s degree is a
          <span className="text-cyan-300"> 6-month end-of-studies internship (stage de fin d&apos;études)</span>.
          I am <span className="text-cyan-300">available immediately</span>, based in the
          Paris area, and looking to join a backend or full-stack team where I can contribute
          from the first week, with the goal of continuing in a
          <span className="text-cyan-300"> full-time role (CDI)</span>.
        </p>

        {/* Closing */}
        <p className="text-slate-300 text-lg leading-relaxed">
          Certified <span className="text-cyan-300">Scrum Developer (CSD)</span> and
          <span className="text-cyan-300"> Scrum Product Owner (CSPO)</span>, fluent in
          English and French, I work as comfortably with business teams as with code.
          If you are hiring, I would be glad to talk.
        </p>
      </motion.div>
    </section>
  );
}