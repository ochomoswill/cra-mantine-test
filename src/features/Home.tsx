import {Avatar, Container, createStyles, SimpleGrid, Text, UnstyledButton, useMantineTheme} from '@mantine/core';
import {FcbsPageHeader} from "../components/components/FcbsPageHeader";
import React from "react";
import {
    BuildingBank,
    Coin,
    CreditCard,
    InfoCircle,
    Receipt,
    ReceiptRefund,
    ReceiptTax,
    Repeat,
    Report
} from "tabler-icons-react";
import {useNavigate} from "react-router-dom";
import {PORTAL_ROUTES} from "../constants/Routes";
import FcbsPageContent from "../components/components/FcbsPageContent";

const useStyles = createStyles((theme) => ({
    applicationCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: theme.radius.xs,
        height: 110,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        transition: 'box-shadow 150ms ease, transform 100ms ease',
        border: '1.3px solid',
        borderColor: theme.colors.gray[3],

        '&:hover': {
            boxShadow: `${theme.shadows.md} !important`,
            transform: 'scale(1.05)',
        },
    },
}));

const applicationsData = [
    { title: 'Applications', icon: CreditCard, color: 'violet' },
    { title: 'Workflows', icon: BuildingBank, color: 'indigo' },
    { title: 'Organizations', icon: Repeat, color: 'blue', url: PORTAL_ROUTES.organizations },
    { title: 'Refunds', icon: ReceiptRefund, color: 'green' },
    { title: 'Users', icon: Receipt, color: 'teal' },
    { title: 'User Profiles', icon: ReceiptTax, color: 'cyan' },
    { title: 'Object Registry', icon: Report, color: 'pink' },
    { title: 'Dynamic Interfaces', icon: Coin, color: 'red' },
];


export function Home() {
    const theme = useMantineTheme();

    const {classes} = useStyles();

    const navigate = useNavigate();

    return (
        <section>
            <FcbsPageHeader
                title={'Main Menu'}
            />

            <FcbsPageContent>
                <Container fluid={true}>
                    <SimpleGrid
                        cols={4}
                        mt="md"
                        breakpoints={[
                            {maxWidth: 'lg', cols: 4, spacing: 'md'},
                            {maxWidth: 'md', cols: 3, spacing: 'md'},
                            {maxWidth: 'sm', cols: 3, spacing: 'sm'},
                            {maxWidth: 'xs', cols: 1, spacing: 'sm'},
                        ]}
                    >
                        {
                            applicationsData.map((item) => (
                                <UnstyledButton
                                    key={item.title}
                                    className={classes.applicationCard}
                                    onClick={(e) => {
                                        if(item?.url){
                                            navigate(item?.url);
                                        }
                                    }}
                                >
                                    <Avatar
                                        color={item.color}
                                        size={54}
                                        radius="xl"
                                    >

                                        <item.icon color={theme.colors[item.color][6]} size={32}/>
                                    </Avatar>

                                    <Text size="sm" mt={7} weight={500}>
                                        {item.title}
                                        <sup>
                                            <InfoCircle color={theme.colors.blue[7]} size={14}/>
                                        </sup>
                                    </Text>
                                </UnstyledButton>
                            ))
                        }
                    </SimpleGrid>
                </Container>
            </FcbsPageContent>

            {/*<Container fluid={true}>
                <SimpleGrid
                    cols={4}
                    mt="md"
                    breakpoints={[
                        {maxWidth: 'lg', cols: 4, spacing: 'md'},
                        {maxWidth: 'md', cols: 3, spacing: 'md'},
                        {maxWidth: 'sm', cols: 3, spacing: 'sm'},
                        {maxWidth: 'xs', cols: 1, spacing: 'sm'},
                    ]}
                >
                    {
                        applicationsData.map((item) => (
                            <UnstyledButton
                                key={item.title}
                                className={classes.applicationCard}
                                onClick={(e) => {
                                    if(item?.url){
                                        navigate(item?.url);
                                    }
                                }}
                            >
                                <Avatar
                                    color={item.color}
                                    size={54}
                                    radius="xl"
                                >

                                    <item.icon color={theme.colors[item.color][6]} size={32}/>
                                </Avatar>

                                <Text size="sm" mt={7} weight={500}>
                                    {item.title}
                                    <sup>
                                        <InfoCircle color={theme.colors.blue[7]} size={14}/>
                                    </sup>
                                </Text>
                            </UnstyledButton>
                        ))
                    }
                </SimpleGrid>
            </Container>*/}
        </section>
    );
}