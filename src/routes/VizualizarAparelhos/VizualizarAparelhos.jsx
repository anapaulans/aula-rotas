import React from 'react';
import { useParams } from 'react-router-dom';
import aparelhos from './aparelhos'; 
import { ListaProdutos } from '../../components/ListaProduto';

const VisualizarAparelho = () => {
  const { id } = useParams();

  const aparelhoSelecionado = aparelhos.find((aparelho) => aparelho.id === parseInt(id));

  if (!ListaProdutos) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <h1>{aparelhos.nome}</h1>
      <img src={aparelhos.imagem} alt={prod.nome} />
      <p>{aparelhos.preco}</p>
    </div>
  );
}

export default VisualizarAparelho;

//cria um componente React que exibe os detalhes de um aparelho com base no id passado na URL.