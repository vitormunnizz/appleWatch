import './App.css'
import { FaApple } from "react-icons/fa";
import { PiMagnifyingGlassBold, PiBagBold } from "react-icons/pi";
import img0 from "./assets/opcoes-cores/imagens-azul-inverno/imagem-0.jpeg";
import img1 from "./assets/opcoes-cores/imagens-azul-inverno/imagem-1.jpeg";
import img2 from "./assets/opcoes-cores/imagens-azul-inverno/imagem-2.jpeg";
import cor0 from "./assets/opcoes-cores/azul-inverno.jpeg";
import cor1 from "./assets/opcoes-cores/estelar.jpeg";
import cor2 from "./assets/opcoes-cores/meia-noite.jpeg";
import cor3 from "./assets/opcoes-cores/rosa-claro.jpeg";
import cor4 from "./assets/opcoes-cores/verde-cipreste.jpeg";


function App() {

  return (
    <div>
      <header>
        <nav>
          <ul className='flex justify-between gap-10 items-center'>
            <li className='cursor-pointer'><FaApple id='apple' /></li>
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

      <main className='grid grid-cols-2 mt-10'>
        <div id='textos' className='text-1xl'>
          <h1 className='text-2xl my-5'>Pulseira Loop Esportiva azul-inverno para caixa de 45 mm</h1>
          <p>R$ 1.149,00</p>
          <p> Em até 12x de R$ 95,75</p>
          <p>R$ 1.034,10 à vista (10% de desconto)</p>
          <p className='text-2xl my-5'>Cor - Azul-inverno</p>
          <div id='imagens' className='flex gap-5'>
            <img src={cor0} alt="" width={35} className='cursor-pointer'/>
            <img src={cor1} alt="" width={35} className='cursor-pointer'/>
            <img src={cor2} alt="" width={35} className='cursor-pointer'/>
            <img src={cor3} alt="" width={35} className='cursor-pointer'/>
            <img src={cor4} alt="" width={35} className='cursor-pointer'/>
          </div>
          <p>Cor da caixa do Apple Watch - Preto</p>
          <h2>Tamanho da caixa</h2>
          <div >
              <p>41 mm</p>
              <p>45 mm</p>
          </div>
          <p>Compatível com a maioria das versões de Apple Watch.</p>
          <p>Saiba mais sobre a compatibilidade de pulseiras</p>
          <h2>Tamanho da pulseira</h2>
          <p>Tamanho único (cabe na maioria dos pulsos)</p>
          <p>Para pulsos de 145 a 220 mm.</p>
        </div>
        <div id='imagens-relogios' className='flex flex-col'>
          <div>
            <img src={img1} alt="aaa" width={200}/>
          </div>
          <div className='flex gap-10'>
            <img src={img0} alt="aaa" width={100} className='cursor-pointer'/>
            <img src={img1} alt="aaa" width={100} className='cursor-pointer'/>
            <img src={img2} alt="aaa" width={100} className='cursor-pointer'/>
          </div>
            
        </div>
      </main>
    </div>
  )
}

export default App
