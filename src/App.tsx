import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './layout/header/Header';
import { Home } from './layout/pages/home/Home';
import { Footer } from './layout/footer/Footer';
import { Projects } from './layout/pages/projects/Projects';

function App() {
    
return (
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
        <Footer />
    </BrowserRouter>
    
)}

export default App;