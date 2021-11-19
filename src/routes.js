import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Musica from './components/musica'
import Cidade from './components/cidade'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/musica" exact element={<Musica/>}></Route>
                <Route path="/cidade" exact element={<Cidade/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;