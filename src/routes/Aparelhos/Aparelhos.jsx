import React from 'react';
import { Link } from 'react-router-dom';
import { ListaProdutos } from '../../components/listaProdutos';

//map serve percorrer cada item na lista de produto
//key fornece uma chave unica para cada item da lista, importante quando se renderizam em lista React para a atualização
//link gera uma URL com base no id do produto
export default function Aparelhos() {
  return (
    <div>
      <h1>Lista de Aparelhos</h1>
      <ul>
        {ListaProdutos.map((produto) => (
          <li key={produto.id}>
            <Link to={`/src/components/listaProdutos.js${produto.id}`}>
              <h2>{produto.nome}</h2>
              <p>Preço: R$ {produto.preco}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
//nessa parte permite que o usuario clique em um produto para ver mais detalhes
