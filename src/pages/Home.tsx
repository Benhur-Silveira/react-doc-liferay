
import yoImge from '../assets/img/yoeman.png'
import liferayImge from '../assets/img/liferay.png'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="p-6 flex flex-col gap-6 w-full h-full">

      <div className="space-y-2 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-[600px]">
          Passo a passo criação módulo React/Liferay
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          Guia completo para configurar seu ambiente, criar módulos React para Liferay, implementar testes
          unitários e utilizar shared bundles.
        </p>
      </div>

      <p className="max-w-[600px] text-muted-foreground md:text-xl">
        Escolha o método de criação do módulo:
      </p>

      <div className="flex gap-4 w-full ">

        <Link to={"yo-liferay-js"}>
          <div className='flex  items-center gap-1 max-w-sm p-6 bg-[#1f1f1f] border border-gray-200 rounded-lg shadow-sm text-white cursor-pointer'>
            <img src={yoImge} alt="yo icon" className='size-16' />
            <h3 className='font-bold text-xl'>Yo Liferay-js</h3>
          </div>
        </Link>
        <Link to={"liferay-cli"}>
          <div className='flex items-center gap-1 max-w-sm p-6 bg-[#00256C] border border-gray-200 rounded-lg shadow-sm text-white cursor-pointer'>
            <img src={liferayImge} alt="liferay icon" className='size-16' />
            <h3 className='font-bold text-xl'>Liferay CLI</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
