import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Intro from './Pages/Intro.tsx'
import Home from './Pages/Home.tsx'
import ColetadeDados from './Pages/ColetadeDados.tsx'
import AnalisePredativa from './Pages/AnalisePredativa.tsx'
import BuscadaColeta from './Components/BuscadaColeta.tsx'
import EsqueciaSenha from './Pages/EsqueciaSenha.tsx'
import Cadastro from './Pages/Cadastro.tsx'
import Relatorios from './Pages/Relatorios.tsx'
import Feedbacks from './Components/Feedbacks.tsx'
import RelatorioGerado from './Components/RelatorioGerado.tsx'
import AnaliseFeita from './Components/AnaliseFeita.tsx'

const router = createBrowserRouter([
  { path: "/" , element : <App /> , children:[
    {path: "/" , element : <Intro /> }
  ]},
  { path: "/home" , element:<Home/>},
  { path: "/coleta" , element:<ColetadeDados/>},
  { path: "/analise" , element:<AnalisePredativa/>},
  { path: "/buscaColeta/:id/:tribunal/:situacao" , element:<BuscadaColeta/>},
  { path: "/esqueciASenha" , element:<EsqueciaSenha/>},
  { path: "/cadastro" , element:<Cadastro/>},
  { path: "/relatorios" , element:<Relatorios/>},
  { path: "/feedback" , element:<Feedbacks/>},
  { path: "/analiseFeita/:id" , element:<AnaliseFeita/>},
  { path: "/relatorioGerado/:id" , element:<RelatorioGerado/>}

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
