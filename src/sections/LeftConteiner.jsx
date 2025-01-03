import React from 'react'
import { categorys, geners } from '../contnet'


const LeftConteiner = () => {


    
  return (
    <section id='menuTo' className='w-[200px] h-[100vh] absolute overflow-y-scroll hidden md:block right-[-200px] md:left-[0px] z-10 bg-white dark:bg-zinc-950'>
        <div className='text-3xl text-center text-blue-600 dark:text-red-600 font-bold border-b-[1px] border-b-gray-300 py-6 '>Filmpire</div>
        <div className='text-gray-500 border-b-[1px] border-b-gray-300'>
            <p className='p-4 text-[12px] dark:text-white'>Categories</p>
            <ul>
                {categorys.map((categori) => (
                    <li className='flex items-center px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900' key={categori.id}><img src={categori.icon} className='w-[25px] dark:w-[28px] dark:p-[2px] dark:rounded dark:bg-white'/> <p className='pl-4'>{categori.name}</p></li>
                ))}
            </ul>
        </div>
        <div className='text-gray-500 dark:text-white'>
            <p className='p-4 text-[12px]'>Genres</p>
            <ul>
                {geners.map((gener) => (
                    <li className='flex items-center px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900' key={gener.id}><img src={gener.icon} className='w-[25px] dark:w-[28px] dark:p-[2px] dark:rounded dark:bg-white'/> <p className='pl-4'>{gener.name}</p></li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default LeftConteiner