import React, {FunctionComponent, useState} from 'react';
import {FcbsNavBar} from "../components/FcbsNavBar";
import {FcbsHeader} from "../components/FcbsHeader";
import {AppShell} from "@mantine/core";
import {useSpotlightActions} from "../../lib/mantine";
import {Search} from "tabler-icons-react";
import {SpotlightProvider} from '@mantine/spotlight';
import {Outlet} from "react-router-dom";
import {LayoutProvider} from "../../context/LayoutContext";

interface OwnProps {
}

type Props = OwnProps;

export const PortalLayout: FunctionComponent<Props> = (props) => {
    const [isNavBarOpened, setIsNavBarOpened] = useState(false);

    const SPOTLIGHT_ACTIONS = useSpotlightActions();

    return (
        <SpotlightProvider
            actions={SPOTLIGHT_ACTIONS}
            searchIcon={<Search size={18}/>}
            searchPlaceholder="Search..."
            shortcut="mod + K"
            nothingFoundMessage="Nothing found..."
        >
            <LayoutProvider>
                <AppShell
                    // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
                    navbarOffsetBreakpoint="sm"
                    // fixed prop on AppShell will be automatically added to Header and Navbar
                    fixed
                    navbar={
                        <FcbsNavBar isNavBarOpened={isNavBarOpened}/>
                    }
                    header={
                        <FcbsHeader isNavBarOpened={isNavBarOpened} setIsNavBarOpened={setIsNavBarOpened}/>
                    }
                    padding={0}

                >
                    {/*<Home/>*/}
                    <Outlet/>
                </AppShell>
            </LayoutProvider>
        </SpotlightProvider>
    );
};

