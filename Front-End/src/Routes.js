import { Route, Routes } from 'react-router-dom'
import DetalheImportacao from './pages/Detalhe'
import Importacao from './pages/Importacao'
import Main from './pages/Main'
import Suspeita from './pages/Suspeita'
import Usuario from './pages/Usuarios'


export default function MainRoutes(){
  
    return(

        
       <Routes>

            <Route path='/' element={<Main />} ></Route>
            <Route path='/usuarios' element={<Usuario />}></Route>
            <Route path='/importacao' element={<Importacao />}></Route>
            <Route path='/suspeita' element={<Suspeita />}></Route>
            <Route path= {`/DetalheImportacao/:id`} element={<DetalheImportacao />}></Route>
            {/* <Route path='*' element={} */}
       </Routes>
    )
}