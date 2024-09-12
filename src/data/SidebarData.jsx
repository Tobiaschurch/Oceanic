import { FiHome } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';

export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <FiHome size={25} />,
        link: '/dashboard',
        id: '' 
    },
    {
        title: 'Settings',
        icon: <IoSettingsOutline size={25} />,
        link: '/dashboard/settings',
        id: 'settings'
    },
];