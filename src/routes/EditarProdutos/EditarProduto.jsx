//acessar dados da lista
import {useParams, useNavigate } from "react-router-dom"
import { ListaProdutos } from "../../components/ListaProdutos"

export default function EditarProduto() {

  const lista = ListaProdutos
  //useNavigate- nos permite redirecionar como un link, só que de dentro do codigo
  const navegacao = useNavigate()
  //useParams- metodo do router para pegar os dado passados na uri
  const {id} = useParams()

  const proc = lista.filter(prod => prod.id == id)
  const produto = proc[0]
  
  const salvar = () => {
    alert(`Produto: ${produto.nome} editado com sucesso!`)
    return navegacao('/produtos')
  }
  
  return (
    <main>
        <h1>Produtos</h1>
        <p>Preço: R$ {produto.preco}</p>
        <p>Descrição: Todos os produtos estão com promoções imperdíveis, não deixe de comprar!</p>
        <img src={produto.imagem} alt={produto.nome} />
        <button onClick={salvar}>Salvar</button>
    </main>
  )
}

//essa parte cria uma pagina de edicao de produto que exibe detalhes do produto base, permitindo que o usuario 
//edite o produto e redirecionando de volta para a lista de produto pós a edição.