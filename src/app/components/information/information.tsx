import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Intermediate</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>
          Computer technician course - Escola Educacional de Ensino Profissional Edson Queiroz
          </span>
        </div>
        <div className="educational-info">
          <span>🎓</span>
          <span>
            Bachelors degree in information systems - UNI7 - Centro Universitario 7 de setembro
          </span>
        </div>
      </div>
    )
}