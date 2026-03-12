import { Header } from './styles/layout/header/Header';
import { Container } from './components/Wrapper/Container';
import { Main } from './styles/layout/sections/main/Main';
import { Pojects } from './styles/layout/sections/projects/Projects';
import { Skills } from './styles/layout/sections/skills/Skills';
import { About } from './styles/layout/sections/about/About';


function App() {
    return (<Container>
        <Header />
        <Main />
        <Pojects />
        <Skills />
        <About />
    </Container>
    );
}

export default App;