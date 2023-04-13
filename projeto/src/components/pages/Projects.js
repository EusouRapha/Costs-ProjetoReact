import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading ] = useState(false)

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(()=>{
        fetch("http://localhost:5000/projects", {
            method: "GET", //RECEBE DADOS
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((resp) => resp.json())
            .then((data) => {
              console.log(data);
              setProjects(data);
              setRemoveLoading(true);
            })
            .catch((err) => console.log(err));
    },1500)
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto"></LinkButton>
      </div>
      {message && <Message type="sucess" msg={message}></Message>}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard 
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.key}
            ></ProjectCard>
          ))}
          {!removeLoading && <Loading/>}
      </Container>
    </div>
  );
}

export default Projects;
