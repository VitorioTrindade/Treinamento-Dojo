import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index'
import AtividadeContextProvider from './context'

export default function App(){
    return(
        <AtividadeContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path= "/" exact={true} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </AtividadeContextProvider>
    )
}

