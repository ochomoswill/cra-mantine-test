import {Button, Group} from '@mantine/core';
import React from "react";
import {FcbsPageHeader} from "../../components/components/FcbsPageHeader";
import {useNavigate} from "react-router-dom";
import {PORTAL_ROUTES} from "../../constants/Routes";


export function CreateOrganization() {
    const navigate = useNavigate();

    return (
        <section>
            <FcbsPageHeader
                breadcrumbs={[
                    {title: 'Main Menu', url: PORTAL_ROUTES.home},
                    {title: 'Organizations', url: PORTAL_ROUTES.organizations},
                ]}
                title={'Create Organization'}
                titleRightSection={
                    <Group align={'center'} spacing={6} position={'center'}>
                        <Button compact size={'xs'} variant={'filled'}>
                            Save
                        </Button>

                        <Button compact size={'xs'} variant={'subtle'} color={'red'}>
                            Cancel
                        </Button>
                    </Group>
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