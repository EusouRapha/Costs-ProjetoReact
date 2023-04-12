import { useState, useEffect } from "react";

import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      //REQUEST COM O FETCHAPI PARA A URL
      method: "GET", //GET BUSCA DADOS
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json()) //pegou o dado e transformou em json
      .then((data) => {
        setCategories(data); //pegou os dados em json e colocou no hook setcategories
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    // console.log(project)
    handleSubmit(project);
  };
  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      ></Input>
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      ></Input>
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      ></Select>
      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
}

export default ProjectForm;
