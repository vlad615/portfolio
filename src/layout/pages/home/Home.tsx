import { Main } from './sections/main/Main';
import { Pojects } from './sections/projects/Projects';
import { Skills } from './sections/skills/Skills';
import { About } from './sections/about/About';
import { Contacts } from './sections/contacts/Contacts';
import { AboutProps } from '../../aboutMe/AboutMe';


export const Home = (props: AboutProps) => {

    
return(
    <>
        <Main />
        <Pojects />
        <Skills />
        <About {...props}/>
        <Contacts />
    </>
    )
}