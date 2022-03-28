import {Container, Group, ScrollArea, Tabs, useMantineTheme} from '@mantine/core';
import React from "react";
import {FcbsPageHeader} from "../../components/components/FcbsPageHeader";
import FcbsPageContent from "../../components/components/FcbsPageContent";
import {useLayoutWrapper} from "../../context/LayoutContext";
import {PORTAL_ROUTES} from "../../constants/Routes";

interface WorkflowTabTitleProps {
    title: string
    color: string
}

const WorkflowTabTitle = (props: WorkflowTabTitleProps) => {
    return (
        <Group spacing={6}>
            <div style={{height: 8, width: 8, borderRadius: '50%', background: props.color}}/>

            {props.title}
        </Group>
    )
}

export function OrganizationWorkflows() {
    const theme = useMantineTheme();
    const layoutWrapper = useLayoutWrapper();
    const {appHeader, pageHeader} = layoutWrapper.height;
    const TAB_HEIGHT = 24;

    const TABBED_PAGE_HEIGHT = `calc(100vh - ${parseInt(appHeader as string) + parseInt(pageHeader as string) + TAB_HEIGHT}px)`;

    return (
        <section>
            <FcbsPageHeader
                breadcrumbs={[
                    {title: 'Main Menu', url: PORTAL_ROUTES.home},
                    {title: 'Organizations', url: PORTAL_ROUTES.organizations},
                ]}
                title={'Organizations Workflows'}
                footer={
                    <FcbsPageContent>
                        <Tabs
                            variant="outline"
                            color={'blue'}
                            styles={{
                                // root: { color: 'red' , height: layoutWrapper.height.pageContent},
                                tabsListWrapper: {background: theme.colors.gray[0]},
                                tabsList: {paddingLeft: 16, paddingRight: 16},
                                body: {
                                    //background: 'red',
                                    height: TABBED_PAGE_HEIGHT
                                },
                                tabControl: {height: TAB_HEIGHT, fontSize: 12},
                                // tabActive: { color: 'red' },
                                // tabInner: { padding: theme.spacing.md },
                                // tabLabel: { color: 'red' },
                                // tabIcon: { color: 'red' },
                            }}
                            tabPadding={0}
                        >
                            <Tabs.Tab
                                label={<WorkflowTabTitle title={'Draft'} color={theme.colors.blue[5]}/>}
                            >
                                <ScrollArea style={{height: 'inherit'}}>
                                    <Container fluid={true}>
                                        {/*{
                                            Array.from(Array(1000).keys()).map((item) => (
                                                <div key={item}>List Item {item + 1}</div>
                                            ))
                                        }*/}
                                        Draft Tab Content
                                    </Container>
                                </ScrollArea>
                                {/*

                                */}
                            </Tabs.Tab>
                            <Tabs.Tab
                                label={<WorkflowTabTitle title={'In Progress'} color={theme.colors.orange[5]}/>}
                            >
                                <Container fluid={true}>In Progress tab content</Container>
                            </Tabs.Tab>
                            <Tabs.Tab
                                label={<WorkflowTabTitle title={'Completed'} color={theme.colors.green[5]}/>}
                            >
                                <Container fluid={true}>Completed tab content</Container>
                            </Tabs.Tab>
                            <Tabs.Tab
                                label={<WorkflowTabTitle title={'Discarded'} color={theme.colors.red[5]}/>}
                            >
                                <Container fluid={true}>Discarded tab content</Container>
                            </Tabs.Tab>
                        </Tabs>
                    </FcbsPageContent>
                }
            />


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