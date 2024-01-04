import { Header } from './components/Header/header'
import "./styles/home.scss"

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <div className="experience">
        <h3>Experiencia</h3>
        <p>Estágio de desenvolvimento - Polibras SoftWare - 5 meses</p>
        <div className="experience-time"></div>
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
          <div className="buttons">
            <div className="social"></div>
            <button>contact me</button>
          </div>
        </div>
      </div>
    </main>
  )
}
