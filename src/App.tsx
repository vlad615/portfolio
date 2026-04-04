import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './layout/header/Header';
import { Home } from './layout/pages/home/Home';
import { Footer } from './layout/footer/Footer';
import { Projects } from './layout/pages/projects/Projects';
import { AsideContacts } from './layout/aside/AsideContacts';

function App() {
    const aboutMeData = {
        text: `Hello, i’m Elias!

I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.

Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.`
}

return (
    <BrowserRouter>
        <Header />
        <AsideContacts />
            <Routes>
                <Route path='/' element={<Home {...aboutMeData}/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
        <Footer />
    </BrowserRouter>
    
)}

export default App;