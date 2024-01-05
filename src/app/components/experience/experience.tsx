import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>5 mouths working as a Software Developer, in companys such as Polibras Software.</p>
          <div className="experience-time">
            <Skill image="/python.png" measure={3} />
            <Skill image="/react.png" measure={2} />
            <Skill image="/ts.png" measure={1} />
            <Skill image="/js.png" measure={2}/>
          </div>
        </div>
    )
}