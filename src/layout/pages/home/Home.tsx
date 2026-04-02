import { Main } from './sections/main/Main';
import { Pojects } from './sections/projects/Projects';
import { Skills } from './sections/skills/Skills';
import { About } from './sections/about/About';
import { Contacts } from './sections/contacts/Contacts';


export const Home = () => {
        const textAbout = `Hello, i’m Elias!

I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.

Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.`
    
return(
    <>
        <Main />
        <Pojects />
        <Skills />
        <About text={textAbout}/>
        <Contacts />
    </>
    )
}