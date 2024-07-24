// src/components/LandingPage.jsx
import React from 'react';
import Card from './Card';
import mycoursesImg from '../assets/mycourses.webp';
import courselistImg from '../assets/courselist.png';
import registerImg from '../assets/register.webp';
const LandingPage = () => (
  <section className="min-h-screen body-bg">
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <Card
          href="/mycourses"
          imgSrc={mycoursesImg}
          title="My Courses"
          description="See your registered courses."
        />
        <Card
          href="/courselist"
          imgSrc={courselistImg}
          title="Course List"
          description="Check the list of the courses to see all of the courses of your faculty."
        />
        <Card
          href="/register"
          imgSrc={registerImg}
          title="Register to Courses"
          description="Register for courses that suit you."
        />
      </div>
    </div>
  </section>
);

export default LandingPage;
