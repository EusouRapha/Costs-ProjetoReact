import React from "react"
import styles from './NewProject.module.css'
import ProjectForm from "../project/ProjectForm"
import {useNavigate} from 'react-router-dom'

function NewProject(){
        
    const navigate = useNavigate();
    function createPost(project){

        // initialize cost and services
        project.cost = 0
        project.services = []
        fetch('http://localhost:5000/projects',{
            method: "POST", //ENVIA DADOS
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project), //TRANSFORMAR OS DADOS EM JSON
        }).then((resp => resp.json()))
        .then((data => {
            console.log(data)
            navigate('/projects',{message: 'Projeto criado com sucesso!'})
        }))
        .catch((err) => console.log(err));

    }
    return (

        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"></ProjectForm>
        </div>
    )
}

export default NewProject