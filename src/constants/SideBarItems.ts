import {Adjustments, Apps, AppWindow, BuildingSkyscraper, Home, Lock, Notes, Server, Users} from "tabler-icons-react";
import {PORTAL_ROUTES} from "./Routes";

export const SideBarItems = [
    {label: 'Home', icon: Home, link: PORTAL_ROUTES.home},
    {label: 'Applications', icon: Apps, link: '/applications'},
    {label: 'Workflows', icon: Notes, link: '/workflows'},
    {label: 'Organizations', icon: BuildingSkyscraper, link: PORTAL_ROUTES.organizations},
    {label: 'Object Registry', icon: Server, link: '/object-registry'},
    {label: 'Dynamic Interfaces', icon: AppWindow, link: '/dynamic-interfaces'},
    {
        label: 'User Management',
        icon: Users,
        initiallyOpened: true,
        links: [
            {label: 'Users', link: '/user-management/users'},
            {label: 'User Profiles', link: '/user-management/user-profiles'},
        ],
    },
    {label: 'Settings', icon: Adjustments},
    {
        label: 'Security',
        icon: Lock,
        links: [
            {label: 'Enable 2FA', link: '/'},
            {label: 'Change password', link: '/'},
            {label: 'Recovery codes', link: '/'},
        ],
    },
];