import './App.css'
import { FaApple } from "react-icons/fa";
import { PiMagnifyingGlassBold, PiBagBold } from "react-icons/pi";

function App() {

  return (
    <div>
      <header>
        <nav>
          <ul className='flex justify-center gap-10 items-center'>
            <li className='cursor-pointer'><FaApple className="text-1xl" id='apple'/></li>
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

      
    </div>
  )
}

export default App
