import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>5 months interning as a software developer at Polibras Software, a large company in the sales force area.</p>
          <div className="experience-time">
            <Skill image="/git.png" measure={3} />
            <Skill image="/python2.png" measure={3} />
            <Skill image="/django.jpg" measure={2} />
            <Skill image="/react.png" measure={2} />
            <Skill image="/js.png" measure={2}/>
            <Skill image="/ts.png" measure={1} />
          </div>
        </div>
    )
}