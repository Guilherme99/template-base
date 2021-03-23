/* import * as FaIcons from 'react-icons/fa'; */
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Meu Perfil',
        path: '/profile',
        icon: <AiIcons.AiOutlineUser/>,
        cName: 'nav-text'
    },
   /*  {
        title: 'Atualizar Informações',
        path: '/update',
        icon: <AiIcons.AiOutlineUser/>,
        cName: 'nav-text'
    }, */
    {
        title: 'Histórico',
        path: '/historic',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    /* {
        title: 'Sobre nós',
        path: 'https://portalldti.netlify.app/',
        icon: <FaIcons.FaEnvelope/>,
        cName: 'nav-text'
    }, */
   /*  {
        title: 'Novo (a) Professor (a)',
        path: '/newprofessor',
        icon: <FaIcons.FaChalkboardTeacher/>,
        cName: 'nav-text'
        
    } */
]
