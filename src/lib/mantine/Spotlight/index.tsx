import {SpotlightAction} from "@mantine/spotlight";
import {FileText, Home} from "tabler-icons-react";
import {useNavigate} from "react-router-dom";
import {PORTAL_ROUTES} from "../../../constants/Routes";


export const useSpotlightActions = (): SpotlightAction[] => {
    const navigate = useNavigate();
    return [
        {
            title: 'Home',
            description: 'Get to home page',
            onTrigger: () => navigate(PORTAL_ROUTES.home),
            icon: <Home size={18}/>,
        },
        {
            title: 'Organizations',
            description: 'View all the onboarded organizations',
            onTrigger: () => navigate(PORTAL_ROUTES.organizations),
            icon: <FileText size={18}/>,
        },
        {
            title: 'Organization Workflows',
            description: 'View Organization Workflows that need to be actioned',
            onTrigger: () => navigate(PORTAL_ROUTES.organizationWorkflows),
            icon: <FileText size={18}/>,
        },
    ]
}