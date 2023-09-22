import { useState } from "react";
import Link from "../../Link/Link";
import { AiOutlineMenu , AiOutlineClose} from 'react-icons/ai';


const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' }
    ];

    return (
        <nav className="bg-blue-600 p-8 text-white ">
            <div className="md:hidden text-3xl " onClick={() => setOpenMenu(!openMenu)} >
                {
                    openMenu === true ? <AiOutlineClose></AiOutlineClose> : 
                    <AiOutlineMenu></AiOutlineMenu>
                }
                
            </div>

         <ul className={`md:flex absolute md:static duration-1000 
            ${openMenu? 'top-16' : '-top-60'}
             bg-gray-900 md:bg-blue-600 px-6 text-2xl font-semibold pb-2 `}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;