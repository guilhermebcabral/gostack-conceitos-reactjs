import React, { useState, useEffect } from 'react'
import api from './services/api'

import './App.css'

import Header from './components/Header'

export default function App() {
  const [projects, setProjects] = useState([])

  // Conexão com a API
  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data)
    })

  }, [])

  // useState retorna um array com 2 posições
  //
  // 1. Variável com seu valor inicial
  // 2. Função para atualizarmos esse valor

  const handleAddProject = async () => {
    // setProjects([...projects, `Novo projeto ${Date.now()}`])
    const response = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Guilherme B"
    })

    const project = response.data

    setProjects([...projects, project])
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map(project => {
          return (
            <li key={project.id}>{project.title}</li>
          )
        })}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}
