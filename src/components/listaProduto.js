import teclado from '../imagem/img teclado.jpg';
import mouse from '../imagem/img mouse.jpg';
import monitor from '../imagem/img monitor.jpg';
import macbook from '../imagem/img macbook.jpg';
import celular from '../imagem/img celular.png'

//Passando valor de uma pagina para outra 
export const ListaProdutos = [
    {
        id: 1,
        nome: 'Teclado',
        imagem: teclado,
        preco: 200
    },
    {
        id: 2,
        nome: 'Mouse',
        imagem: mouse,
        preco: 100
    },
    {
        id: 3,
        nome:'Monitor',
        imagem: monitor,
        preco: 950
    },
    {
        id: 4,
        nome:'Celular',
        imagem: celular,
        preco: 4099
    },
    {
        id: 5,
        nome:'notebook',
        imagem: macbook,
        preco: 2000
    },
]