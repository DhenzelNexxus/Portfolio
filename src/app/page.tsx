import { Header } from './components/Header/header'
import { Experience } from './components/experience/experience'
import "./styles/home.scss"

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
        <div className="infos">
          <h3>Linguas</h3>
          <div className="language-info">
            <span>EN - Intermediario</span>
            <span>PT-BR - Nativo</span>
          </div>
          <h3>Educação</h3>
          <div className="educational-info">
            <span></span>
            <span>Curso Tecnico de Informatica - Escola Educacional de Ensino Profissional Edson Queiroz</span>
        </div>
        </div>
          <div className="buttons">
            <div className="social"></div>
            <button>contact me</button>
          </div>
    </main>
  )
}
