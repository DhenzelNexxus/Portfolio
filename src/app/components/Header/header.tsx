import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, I am Dhenzel ! 👋</h1>
            <h2>Software Developer</h2>
          </div>
          <Image
            src="/Dhenzel-icone-perfil.jpeg"
            alt="Vercel Logo"
            width={280}
            height={270}
            priority
          />
        </div>
    )
}