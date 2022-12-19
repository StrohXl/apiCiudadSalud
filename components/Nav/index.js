import { Menu } from "antd";
import Cookies from "js-cookie";
import Link from "next/link";
import Icon from "@mdi/react";
import { useRouter } from "next/router";
import {UserOutlined} from '@ant-design/icons'
import { mdiLogout  , mdiHome , mdiAccount , mdiAccountGroupOutline, mdiAccountGroup  } from '@mdi/js';
const Nav = () => {
    const router = useRouter()
    const Salir =()=>{
        Cookies.remove('token')
        router.push('/')
    }
    const items = [
        {
            label:(<Link href={'/user'}>Usuario</Link>),
            icon: <UserOutlined />,
            key:1
        },

        {
            label:(<Link href={'/user/Home'}>Casas</Link>),
            icon: <Icon path={mdiHome} size={0.7} />,
            key: 2
        },
        {
            label:(<Link href={'/user/Person'}>Personas</Link>),
            icon: <Icon path={mdiAccount} size={0.7} />,
            key: 3
        },

        {
            label:(<Link href={'/user/Chief'}>Jefes Familiares</Link>),
            icon: <Icon path={mdiAccountGroupOutline} size={0.7} />,
            key: 4
        },
        {
            label:(<Link href={'/user/Group'}>Grupos Familiares</Link>),
            icon: <Icon path={mdiAccountGroup} size={0.7} />,
            key: 5
        },
        {
            label:(<div onClick={Salir}><Icon className="inline mr-2 mb-1" path={mdiLogout} size={0.7} />Salir</div>),
            key: 6
        },

        ]

    return <Menu theme="dark" className="flex justify-end  " mode="horizontal" items={items} />
    
};

export default Nav;