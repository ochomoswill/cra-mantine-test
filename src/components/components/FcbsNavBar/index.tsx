import React, {FunctionComponent} from 'react';
import {ActionIcon, createStyles, Group, Navbar, ScrollArea, Text} from "@mantine/core";
import {setColorModeValue} from "../../../lib/mantine";
import {LinksGroup} from "../../NavbarLinksGroup";
import {SideBarItems} from "../../../constants/SideBarItems";
import {PinnedOff} from "tabler-icons-react";

interface OwnProps {
    isNavBarOpened: boolean
}


type Props = OwnProps;

const useStyles = createStyles((theme) => ({
    navbar: {
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : MyColorsPalette.sidebar,
        backgroundColor: setColorModeValue(theme.colors.gray[0], theme.colors.dark[6])(theme),
        paddingBottom: 0,
        borderRightWidth: `1px`,
        borderRightColor: theme.colors.gray[4]
    },
    navbarHeader: {
        height: 32,
        background: setColorModeValue(theme.colors.gray[0], theme.colors.dark[7])(theme),
        width: '100%',
        borderBottom: `1px solid`,
        borderBottomColor: theme.colors.gray[3],
        // color: theme.white,
        // fontSize: theme.fontSizes.sm
    },
    links: {
        // marginLeft: -theme.spacing.xs,
        // marginRight: -theme.spacing.xs,
        width: '100%',
    },

    linksInner: {
        /*paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xs,*/
    }
}));

export const FcbsNavBar: FunctionComponent<Props> = (props) => {
    const {classes} = useStyles();


    const links = SideBarItems.map((item) => <LinksGroup {...item} key={item.label}/>);

    return (
        <Navbar
            className={classes.navbar}
            p={0}
            // Breakpoint at which navbar will be hidden if hidden prop is true
            hiddenBreakpoint="sm"
            // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
            hidden={!props?.isNavBarOpened}
            // when viewport size is less than theme.breakpoints.sm navbar width is 100%
            // viewport size > theme.breakpoints.sm – width is 300px
            // viewport size > theme.breakpoints.lg – width is 400px
            width={{sm: 250, lg: 250}}
        >
            <Group direction={'column'} spacing={0}>
                <Group px={'sm'} pr={'xs'} className={classes.navbarHeader} position={'apart'}>
                    <Text size={'sm'} weight={500}>Navigation</Text>
                    <ActionIcon size={'xs'} variant="outline" color={'blue'}>
                        <PinnedOff size={14}/>
                    </ActionIcon>
                </Group>
                <Navbar.Section
                    // px={'md'}
                    grow className={classes.links} component={ScrollArea}>
                    <div className={classes.linksInner}>{links}</div>
                </Navbar.Section>
            </Group>
        </Navbar>
    );
};

