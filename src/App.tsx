import './App.css'
import { useState } from "react";

import { FaApple, FaTruck } from "react-icons/fa";
import { PiMagnifyingGlassBold, PiBagBold, PiBookmarkSimple } from "react-icons/pi";

import img0 from "./assets/opcoes-cores/imagens-azul-inverno/imagem-0.jpeg";
import img1 from "./assets/opcoes-cores/imagens-azul-inverno/imagem-1.jpeg";
import img2 from "./assets/opcoes-cores/imagens-azul-inverno/imagem-2.jpeg";
import img3 from "./assets/opcoes-cores/imagens-estelar/imagem-0.jpeg";
import img4 from "./assets/opcoes-cores/imagens-estelar/imagem-1.jpeg";
import img5 from "./assets/opcoes-cores/imagens-estelar/imagem-2.jpeg";
import img6 from "./assets/opcoes-cores/imagens-meia-noite/imagem-0.jpeg";
import img7 from "./assets/opcoes-cores/imagens-meia-noite/imagem-1.jpeg";
import img8 from "./assets/opcoes-cores/imagens-meia-noite/imagem-2.jpeg";
import img9 from "./assets/opcoes-cores/imagens-rosa-claro/imagem-0.jpeg";
import img10 from "./assets/opcoes-cores/imagens-rosa-claro/imagem-1.jpeg";
import img11 from "./assets/opcoes-cores/imagens-rosa-claro/imagem-2.jpeg";
import img12 from "./assets/opcoes-cores/imagens-verde-cipreste/imagem-0.jpeg";
import img13 from "./assets/opcoes-cores/imagens-verde-cipreste/imagem-1.jpeg";
import img14 from "./assets/opcoes-cores/imagens-verde-cipreste/imagem-2.jpeg";
import cor0 from "./assets/opcoes-cores/azul-inverno.jpeg";
import cor1 from "./assets/opcoes-cores/estelar.jpeg";
import cor2 from "./assets/opcoes-cores/meia-noite.jpeg";
import cor3 from "./assets/opcoes-cores/rosa-claro.jpeg";
import cor4 from "./assets/opcoes-cores/verde-cipreste.jpeg";
import carbonNeutral from "./assets/outros-recursos/neutralidade-c.jpeg";

function App() {

  const [selecionada, setSelecionada] = useState(0);
  const [selecinaTamanho, setSelecionadaTamanho] = useState(0)
  const [selecionaImagem, setselecionaImagem] = useState(1)

  function selecionarCor(i) {
    setSelecionada(i)
  }

  function selecionarTamanho(i) {
    setSelecionadaTamanho(i)
  }

  function selecionarImagem(i) {
    setselecionaImagem(i)
  }

  function mudarnome() {
    if (selecionada === 0) {
      return "azul-inverno"
    } else if (selecionada === 1) {
      return "estela"
    } else if (selecionada === 2) {
      return "meia-noite"
    } else if (selecionada === 3) {
      return "rosa-claro"
    } else if (selecionada === 4) {
      return "verde-cinpreste"
    } else {
      return []
    }
  }

  function mudarTamanho() {
    if (selecinaTamanho === 0) {
      return "41 mm"
    } else if (selecinaTamanho === 1) {
      return "45 mm"
    }
  }

  function mudarTamanhoImg() {
    if (selecinaTamanho === 0) {
      return "w-120"
    } else if (selecinaTamanho === 1) {
      return "w-130"
    }
  }

  function mudarImagem() {
    if (selecionada === 0) {
      return [img0, img1, img2]
    } else if (selecionada === 1) {
      return [img3, img4, img5]
    } else if (selecionada === 2) {
      return [img6, img7, img8]
    } else if (selecionada === 3) {
      return [img9, img10, img11]
    } else if (selecionada === 4) {
      return [img12, img13, img14]
    } else {
      return []
    }
  }



  const imagensAtuais = mudarImagem();

  return (
    <div className="flex flex-col items-center mx-100 my-2">
      <header>
        <nav>
          <ul className='flex gap-10 items-center'>
            <li className='cursor-pointer'><FaApple /></li>
            <li className='cursor-pointer'>Loja</li>
            <li className='cursor-pointer'>Mac</li>
            <li className='cursor-pointer'>IPad</li>
            <li className='cursor-pointer'>IPhone</li>
            <li className='cursor-pointer'>Watch</li>
            <li className='cursor-pointer'>AirPods</li>
            <li className='cursor-pointer'>Tv e Casa</li>
            <li className='cursor-pointer'>Entreterimento</li>
            <li className='cursor-pointer'>Acessórios</li>
            <li className='cursor-pointer'>Suporte</li>
            <li className='cursor-pointer'><PiMagnifyingGlassBold className="w-4 h-7 text-gray-700 hover:text-black transition" /></li>
            <li className='cursor-pointer'><PiBagBold className="w-4 h-7 text-gray-700 hover:text-black transition" /></li>
          </ul>
        </nav>
      </header>

      <main className='grid grid-cols-2 mt-5'>
        <div id='textos' className='text-1xl'>
          <h1 className='text-2xl my-4 font-bold'>Pulseira loop esportiva {mudarnome()} para caixa de {mudarTamanho()}</h1>
          <p className='text-2xl'>R$ 1.149,00</p>
          <p className='text-blue-500 hover:underline cursor-pointer'> Em até 12x de R$ 95,75</p>
          <p>R$ 1.034,10 à vista (10% de desconto)</p>
          <h2 className='my-4 font-bold'>Cor - {mudarnome()}</h2>
          <div id='imagens' className='flex gap-5 mb-4'>
            <button onClick={() => selecionarCor(0)}>
              <img src={cor0} alt="cor da pulseira" className={`cursor-pointer w-9 h-9 ${selecionada === 0 ? 'selecionarCor' : ''}`} />
            </button>
            <button onClick={() => selecionarCor(1)}>
              <img src={cor1} alt="cor da pulseira" className={`cursor-pointer w-9 h-9 ${selecionada === 1 ? 'selecionarCor' : ''}`} />
            </button>
            <button onClick={() => selecionarCor(2)}>
              <img src={cor2} alt="cor da pulseira" className={`cursor-pointer w-9 h-9 ${selecionada === 2 ? 'selecionarCor' : ''}`} />
            </button>
            <button onClick={() => selecionarCor(3)}>
              <img src={cor3} alt="cor da pulseira" className={`cursor-pointer w-9 h-9 ${selecionada === 3 ? 'selecionarCor' : ''}`} />
            </button>
            <button onClick={() => selecionarCor(4)}>
              <img src={cor4} alt="cor da pulseira" className={`cursor-pointer w-9 h-9 ${selecionada === 4 ? 'selecionarCor' : ''}`} />
            </button>
          </div>
          <div id='carbonNeutral' className='flex items-center'>
            <img src={carbonNeutral} alt="" width={25} />
            <p>Carbon Neutral</p>
          </div>
          <h2 className='mt-4 mb-3 font-bold'>Tamanho da caixa</h2>
          <div id='tamanhoCaixa' className='flex gap-5 text-1xl font-bold mb-2'>
            <button onClick={() => selecionarTamanho(0)}><p className={`px-10 py-6 border-black border rounded-2xl cursor-pointer ${selecinaTamanho === 0 ? 'selecionarTamanho' : ''}`}>41 mm</p></button>
            <button onClick={() => selecionarTamanho(1)}><p className={`px-10 py-6 border-black border rounded-2xl cursor-pointer ${selecinaTamanho === 1 ? 'selecionarTamanho' : ''}`}>45 mm</p></button>
          </div>
          <p>Compatível com a maioria das versões de Apple Watch.</p>
          <p className='text-blue-500 hover:underline cursor-pointer'>Saiba mais sobre a compatibilidade de pulseiras</p>
          <h2 className='mt-4 mb-2 font-bold'>Tamanho da pulseira</h2>
          <p>Tamanho único (cabe na maioria dos pulsos)</p>
          <p className='text-gray-500'>Para pulsos de 145 a 220 mm.</p>
          <div id='entrega' className='mt-2 grid grid-cols-[auto_1fr] gap-x-3'>
            <div>
              <FaTruck className='w-5 h-8 text-gray-700 hover:text-black transition' />
            </div>
            <div>
              <p className='font-bold'>Entrega:</p>
              <p>Em estoque</p>
              <p>Frente Grátis</p>
              <p className='text-blue-500 hover:underline cursor-pointer'>Ver data de entrega</p>
            </div>
          </div>
          <button className='px-10 py-2 bg-blue-500 text-white rounded-2xl my-4 font-bold cursor-pointer hover:bg-blue-600 transition'>Colocar na sacola</button>
          <h2 className='my-2 font-bold'>Precisa de um tempo?</h2>
          <p>Mantenha todas as suas seleções salvando este aparelho em Itens salvos. Depois, você pode voltar quando quiser e continuar de onde parou.</p>
          <div className='flex items-center gap-1 text-blue-500 my-1 cursor-pointer hover:underline'>
            <PiBookmarkSimple className="w-4 h-7" />
            <p>Salvar para depois</p>
          </div>
        </div>


        <div id='imagens-relogio' className='flex flex-col my-15'>
          <div>
            <img src={imagensAtuais[1]} alt="Imagens do relogio" className={mudarTamanhoImg()} />
          </div>
          <div className='flex gap-10 justify-center'>
            <button onClick={(() => {selecionarImagem(0)})}>
              <img src={imagensAtuais[0]} alt="Imagens do relogio" width={50} className={`cursor-pointer ${selecionaImagem === 0 ? 'border-b-2 border-black' : ''}`} />
            </button>
            <button onClick={(() => {selecionarImagem(1)})}>
              <img src={imagensAtuais[1]} alt="Imagens do relogio" width={50} className={`cursor-pointer ${selecionaImagem === 1 ? 'border-b-2 border-black' : ''}`} />
            </button>
            <button onClick={(() => {selecionarImagem(2)})}>
              <img src={imagensAtuais[2]} alt="Imagens do relogio" width={50} className={`cursor-pointer ${selecionaImagem === 2 ? 'border-b-2 border-black' : ''}`} />
            </button>
          </div>

        </div>
      </main>
    </div>
  )
}

export default App
