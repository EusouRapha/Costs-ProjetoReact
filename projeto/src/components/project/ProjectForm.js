import { useState,useEffect } from "react";

import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

useEffect(()=>{
  fetch("http://localhost:5000/categories", {
    //REQUEST COM O FETCHAPI PARA A URL
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json()) //pegou o dado e transformou em json
    .then((data) => {
      setCategories(data); //pegou os dados em json e colocou no hook setcategories
    })
    .catch((err) => console.log(err));
},[])

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      ></Input>
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      ></Input>
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      ></Select>
      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
}

export default ProjectForm;
