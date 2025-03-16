import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center">My Skills</h2>
        <div className="row">
          <div className="col-md-4">
            <h4>JavaScript</h4>
            <p>Experienced in building web applications using JavaScript frameworks like React.</p>
          </div>
          <div className="col-md-4">
            <h4>React</h4>
            <p>Proficient in creating interactive UIs with React and related libraries.</p>
          </div>
          <div className="col-md-4">
            <h4>HTML & CSS</h4>
            <p>Strong understanding of web design with modern HTML and CSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
