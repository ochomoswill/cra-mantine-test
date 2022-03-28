import {Badge, Button, Center, Group, SegmentedControl, useMantineTheme} from '@mantine/core';
import {LayoutGrid, List,} from 'tabler-icons-react';
import React from "react";
import {FcbsPageHeader} from "../../components/components/FcbsPageHeader";
import {useNavigate} from "react-router-dom";
import {PORTAL_ROUTES} from "../../constants/Routes";
import FcbsPageContent from "../../components/components/FcbsPageContent";


export function Organizations() {
    const theme = useMantineTheme();
    const navigate = useNavigate();

    return (
        <section>
            <FcbsPageHeader
                breadcrumbs={[
                    {title: 'Main Menu', url: '/home'},
                ]}
                title={'Organizations'}
                titleRightSection={
                    <Group align={'center'} spacing={6} position={'center'}>
                        <Button
                            compact
                            size={'xs'}
                            variant={'outline'}
                            rightIcon={<Badge color={'red'} variant="filled" size={'xs'}>3</Badge>}
                            onClick={() => navigate(PORTAL_ROUTES.organizationWorkflows)}
                        >
                            Workflow
                        </Button>

                        <Button
                            compact
                            size={'xs'}
                            variant={'filled'}
                            onClick={() => navigate(PORTAL_ROUTES.createOrganizations)}
                        >
                            Create
                        </Button>

                        <SegmentedControl
                            size={'xs'}
                            data={[
                                {
                                    value: 'preview',
                                    label: (
                                        <Center>
                                            <LayoutGrid size={16}/>
                                        </Center>
                                    ),
                                },
                                {
                                    value: 'code',
                                    label: (
                                        <Center>
                                            <List size={16}/>
                                        </Center>
                                    ),
                                }
                            ]}
                        />
                    </Group>
                }
            />


            <FcbsPageContent/>


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