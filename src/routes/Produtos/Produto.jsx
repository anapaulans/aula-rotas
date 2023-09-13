import { Link } from "react-router-dom"
import { ListaProdutos } from "../../components/listaProdutos"


export default function Produtos() {
  return (
  
    <main>
      <h1>Vizualizar aparelhos</h1>
      {ListaProdutos.map(prod => (
        <div key={prod.id}>
          <Link to={`/produtos/editar/${prod.id}`}>Produto: {prod.nome}
          </Link>
        </div>
      ))}
    </main>

    )
}

//cria uma pagina produto que lista os produtos disponiveis e fornece o link para cada um dele.
//clicando em um desse links, será redirecionado para a pagina de edição do produto com base no id.