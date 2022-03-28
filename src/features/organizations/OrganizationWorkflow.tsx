import {Badge, Button, Container, Group, ScrollArea, Text, useMantineTheme} from '@mantine/core';
import React from "react";
import {FcbsPageHeader} from "../../components/components/FcbsPageHeader";
import {useNavigate} from "react-router-dom";
import {PORTAL_ROUTES} from "../../constants/Routes";
import {FcbsPageTitle} from "../../components/components/FcbsPageTitle";
import {PORTAL_CONTENT_HEIGHT} from "../../constants/General";
import FcbsPageContent from "../../components/components/FcbsPageContent";


export function OrganizationWorkflow() {
    const navigate = useNavigate();
    const theme = useMantineTheme();

    return (
        <section style={{display: "flex", flexDirection: 'column', height: PORTAL_CONTENT_HEIGHT}}>
            <FcbsPageHeader
                breadcrumbs={[
                    {title: 'Main Menu', url: PORTAL_ROUTES.home},
                    {title: 'Organizations', url: PORTAL_ROUTES.organizations},
                    {title: 'Organization Workflows', url: PORTAL_ROUTES.organizationWorkflows},
                ]}
                title={
                    <Group spacing={4}>
                        <FcbsPageTitle>Create Defence SACCO</FcbsPageTitle>

                        <Badge size={'xs'} variant={'dot'}>IN PROGRESS</Badge>
                    </Group>

                }
                titleRightSection={
                    <Group align={'center'} spacing={6} position={'center'}>
                        <Button compact size={'xs'} variant={'filled'} color={'green'}>
                            Approve
                        </Button>
                        <Button compact size={'xs'} variant={'filled'} color={'red'}>
                            Reject
                        </Button>
                    </Group>
                }
            />

            <FcbsPageContent/>


            {/*<div style={{flex: 1, background: theme.colors.red[1]}}>
                <ScrollArea
                    style={{height: 'calc(100vh - 94px)'}}
                >
                    {
                        Array.from(Array(1000).keys()).map((item) => (
                            <div key={item} >List Item {item + 1}</div>
                        ))
                    }
                </ScrollArea>
            </div>*/}


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