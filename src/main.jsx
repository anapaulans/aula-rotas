import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//importando elementos que irá precisar do router e as paginas main.jsx. E chamando os componentes Menu e Rodape no App
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Produtos from './routes/Produtos/Produtos.jsx'
import Error from './routes/Error/Error.jsx'
import EditarProduto from './routes/EditarProdutos/EditarProdutos.jsx'


//Configurando rotas para utilizar o metodo createBrowserRouter, recebe dados do App e dentro do atributo children
const router = createBrowserRouter([
  {
   path: '/',
   element: <App/>,
   errorElement: <Error/>,
   children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path: "/produtos",
      element:<Produtos />
    },
    {
      path:"produtos/editar/:id",
      element: <EditarProduto/>
    },
    {
// Serve para se alguem tentar ir para o endereço antigo, será direcionado para a pagina home
      path: "/antiga",
      element: <Navigate to="/"/>
    }
  ]
}])

//Usa o RouterProvider para controlar  a renderização das páginas no ReactDOM, passando o router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
