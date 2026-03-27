import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Pojects } from './layout/sections/projects/Projects';
import { Skills } from './layout/sections/skills/Skills';
import { About } from './layout/sections/about/About';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';

function App() {
    const textAbout = `Hello, i’m Elias!

I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.

Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.`
    
return (<>
    <Header />
    <Main />
    <Pojects />
    <Skills />
    <About text={textAbout}/>
    <Contacts />
    <Footer />
</>
    
);
}

export default App;