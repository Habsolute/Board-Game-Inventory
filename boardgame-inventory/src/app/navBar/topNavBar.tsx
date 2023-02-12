import Image from "next/image"
import Link from "next/link"


export const TopNavBar = () => {
    return (
        <nav className="w-100 bg-slate-900 flex justify-between p-5">
            <div className="logo">
                <Link href={"/"} className='flex gap-x-4 items-center p-2'>
                    <Image className={`cursor-pointer`} src="/image/logo.png" width={30} height={30} alt=""/>
                        <h1 className={` text-white origin-left font-medium text-xl duration-300`}>Jeux de Société</h1>
                </Link>
            </div>
            <div className="flex text-base">
                <ul className="flex justify-end text-white font-bold mr-14 ">
                    <li className="flex items-center mr-7">
                        <a className='p-2 text-gray-300 items-center gap-x-4 menu-items border-b-2 border-transparent hover:border-b-2 hover:border-white' href="#">Onglet Future</a> 
                    </li>
                    <li className="flex items-center mr-7">
                        <a className='p-2 text-gray-300 items-center gap-x-4 menu-items border-b-2 border-transparent hover:border-b-2 hover:border-white' href="#">Onglet Future</a> 
                    </li>
                    <li className="flex items-center mr-7">
                        <a className='p-2 text-gray-300 items-center gap-x-4 menu-items border-b-2 border-transparent hover:border-b-2 hover:border-white' href="#">Onglet Future</a> 
                    </li>
                    <li className="flex items-center mr-7">
                        <a className='p-2 text-gray-300 items-center gap-x-4 menu-items border-b-2 border-transparent hover:border-b-2 hover:border-white' href="#">Onglet Future</a> 
                    </li>
                    <li className="flex items-center mr-7">
                        <a className='p-2 text-gray-300 items-center gap-x-4 menu-items border-b-2 border-transparent hover:border-b-2 hover:border-white' href="#">Locations</a> 
                    </li>
                </ul>
                <ul className="flex justify-end text-white font-bold mr-14 ">
                    <li className="flex items-center">
                        <a className='p-2 text-gray-300 items-center gap-x-4 menu-items border-b-2 border-transparent hover:border-b-2 hover:border-white' href="#">Administration</a> 
                    </li>
                </ul>
            </div>
        </nav>
    )
}