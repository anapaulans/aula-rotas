//acessar dados da lista
import {useParams, useNavigate } from "react-router-dom"
import { ListaProdutos } from "../../components/listaProduto"

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
        <h2>{produto.nome}</h2>
        <img src={produto.imagem} alt={produto.nome} />
        <p>Preço: R$ {produto.preco}</p>
        <p>Gostou de algum produto? Compre já, não perca essa promoção </p>
        <button onClick={salvar}>Salvar</button>
    </main>
  )
}

//essa parte cria uma pagina de edicao de produto que exibe detalhes do produto base, permitindo que o usuario 
//edite o produto e redirecionando de volta para a lista de produto pós a edição.