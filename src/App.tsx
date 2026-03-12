import { Header } from './styles/layout/header/Header';
import { Container } from './components/wrapper/Container';
import { Main } from './styles/layout/sections/main/Main';
import { Pojects } from './styles/layout/sections/projects/Projects';
import { Skills } from './styles/layout/sections/skills/Skills';
import { About } from './styles/layout/sections/about/About';
import { Contacts } from './styles/layout/sections/contacts/Contacts';
import { Footer } from './styles/layout/footer/Footer';

function App() {
    return (<Container>
        <Header />
        <Main />
        <Pojects />
        <Skills />
        <About />
        <Contacts />
        <Footer />
    </Container>
    );
}

export default App;