import { Button, Menu, Drawer } from "antd";
import Cookies from "js-cookie";
import Link from "next/link";
import Icon from "@mdi/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { mdiLogout, mdiMenu, mdiClose  , mdiHome , mdiAccount , mdiAccountGroupOutline, mdiAccountGroup  } from '@mdi/js';
const Nav = () => {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const bodyStyle = {
        padding: 'inherit',
        background: '#001529',
    }
    const Salir =()=>{
        Cookies.remove('token')
        router.push('/')
    }
    const OpenDrawer=()=>{
        setDrawerOpen(true)
        setMenuOpen(true)
    }
    const OnClose=()=>{
        setDrawerOpen(false)
        setMenuOpen(false)
    }
    const items = [
        {
            label:(<Link onClick={OnClose} href={'/user'}>Inicio</Link>),
        
            key:1
        },

        {
            label:(<Link onClick={OnClose} href={'/user/Home'}>Casas</Link>),
            icon: <Icon path={mdiHome} size={0.8} />,
            key: 2
        },
        {
            label:(<Link onClick={OnClose} href={'/user/Person'}>Personas</Link>),
            icon: <Icon path={mdiAccount} size={0.8} />,
            key: 3
        },

        {
            label:(<Link onClick={OnClose} href={'/user/Chief'}>Jefes Familiares</Link>),
            icon: <Icon path={mdiAccountGroupOutline} size={0.8} />,
            key: 4
        },
        {
            label:(<Link onClick={OnClose} href={'/user/Group'}>Grupos Familiares</Link>),
            icon: <Icon path={mdiAccountGroup} size={0.8} />,
            key: 5
        },
        {
            label:(<div onClick={Salir}><Icon className="inline mr-2 mb-1" path={mdiLogout} size={0.8} />Salir</div>),
            key: 6
        },

        ]

    return <div> 
        <Menu theme="dark" className="hidden lg:flex justify-end text-lg " mode="horizontal" items={items} />
        <Button type={'text'} className="flex items-center lg:hidden" onClick={()=> OpenDrawer()} ><Icon className="text-white hover:text-blue-500" path={ mdiMenu } size={2} /></Button>
        <Drawer bodyStyle={bodyStyle} open={drawerOpen} onClose={OnClose} placement='right'>
         
        <Menu theme="dark" className="flex flex-col gap-2 text-xl w-full " mode={'inline'} items={items} />
        </Drawer>
    </div>
    
};

export default Nav;