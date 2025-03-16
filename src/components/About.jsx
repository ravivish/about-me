import React from "react";

const About = () => {
  const [display, setDisplay] = React.useState(false);
  const [text, setText] = React.useState(", such as my recent project: an SQL Server to PostgreSQL query converter");

  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center">About Me</h2>
        <p className="lead">
          I am a <b>Senior Backend Engineer</b> with <b>5+ years of experience</b> in building scalable, high-performance backend systems. My expertise lies in <b>C#, .NET, SQL Server, and PostgreSQL</b>, with a strong focus on <b>system design, database management, and concurrency</b>.
        </p>
        <p className="lead">
          I enjoy solving complex engineering challenges, optimizing database performance, and designing robust architectures for distributed systems. Currently, I am deep-diving into <b>DSA, Low-Level Design (LLD), and mastering concurrency in C# using Task and async </b>.
        </p>
        <p className="lead">
          I am also passionate about sharing knowledge through technical writing and working on developer tools{display ? text : ""}.

          When I’m not coding, I focus on <b>work-life balance</b> by exploring new tech trends and writing about <b>backend engineering best practices</b>.
        </p>
      </div>
    </section>
  );
};

export default About;
