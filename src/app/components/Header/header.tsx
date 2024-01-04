import Image from 'next/image'
import "./header.scss"

export function Header(){
    return(
        <div className="header">
            <div>
                <h1>Oi, Meu nome é Dhenzel</h1>
                <h2>Desenvolvedor de Software</h2>
            </div>
            <Image 
                src="/Dhenzel-perfil.jpeg"
                alt="Dhenzel-perfil"
                width={325}
                height={310}
                priority
                />
      </div>
    )
}