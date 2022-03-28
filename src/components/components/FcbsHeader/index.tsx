import React, {FunctionComponent, useState} from 'react';
import {
    Avatar,
    Burger,
    createStyles,
    Group,
    Header,
    Kbd,
    MediaQuery,
    Menu,
    Text,
    UnstyledButton,
    useMantineTheme
} from "@mantine/core";
import {ChevronDown, Logout, Search, Settings, SwitchHorizontal} from "tabler-icons-react";
import {MyColorsPalette} from "../../../constants/Colors";
import {useNavigate} from "react-router-dom";
import {useSpotlight} from "@mantine/spotlight";
import {PORTAL_ROUTES} from "../../../constants/Routes";

interface OwnProps {
    isNavBarOpened: boolean
    setIsNavBarOpened: any
}

type Props = OwnProps;

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: MyColorsPalette.header,
        color: theme.white,
        borderBottom: 'none'
    },
    userMenu: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    user: {
        color: theme.white,
        padding: `${theme.spacing.xs}px ${theme.spacing.xs}px`,
        borderRadius: theme.radius.xs,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
        },
    },

    userActive: {
        backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
    },

    search: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },
}));

export const FcbsHeader: FunctionComponent<Props> = (props) => {
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    const {classes, cx} = useStyles();
    const theme = useMantineTheme();
    const navigate = useNavigate();
    const spotlight = useSpotlight();
    const {isNavBarOpened, setIsNavBarOpened} = props;

  return (
      <Header height={48} p="xs" className={classes.header}>
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
              <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                  <Burger
                      opened={isNavBarOpened}
                      onClick={() => setIsNavBarOpened((o: boolean) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                  />
              </MediaQuery>

              <Group position="apart" style={{width: '100%'}}>
                  <Text>NextGen Portal</Text>


                  <Group>
                      <UnstyledButton
                          style={{
                              border: '1px solid white',
                              padding: '3px 5px',
                              borderRadius: 4,
                              color: "white",
                              fontSize: 14
                          }}
                          onClick={spotlight.openSpotlight}
                      >
                          <Group spacing={'xl'} >
                              <Group spacing={'xs'}>
                                  <Search size={16}/>

                                  <Text size={'xs'} style={{marginLeft: '-4px'}}>Search</Text>
                              </Group>

                              <div style={{display: 'flex', alignItems: 'center'}}>
                                  <Kbd style={{height: 10, fontSize: 'xx-small'}}>Ctrl + K</Kbd>
                              </div>
                          </Group>
                      </UnstyledButton>

                      <Menu
                          size={260}
                          placement="end"
                          transition="pop-top-right"
                          className={classes.userMenu}
                          onClose={() => setUserMenuOpened(false)}
                          onOpen={() => setUserMenuOpened(true)}
                          control={
                              <UnstyledButton
                                  className={cx(classes.user, {[classes.userActive]: userMenuOpened})}
                              >
                                  <Group spacing={7}>
                                      <Avatar
                                          src={'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'}
                                          alt={'Jane Austine'} radius="xl" size={20}/>
                                      <Text weight={500} size="xs" sx={{lineHeight: 1, color: theme.white}}
                                            mr={3}>
                                          Jane Austine
                                      </Text>
                                      <ChevronDown size={12}/>
                                  </Group>
                              </UnstyledButton>
                          }
                      >
                          <Menu.Label size={'xs'}>Settings</Menu.Label>
                          <Menu.Item icon={<Settings size={14}/>}>Account settings</Menu.Item>
                          <Menu.Item icon={<SwitchHorizontal size={14}/>}>Change account</Menu.Item>
                          <Menu.Item
                              color='red'
                              icon={<Logout size={14}/>}
                              onClick={() => navigate(PORTAL_ROUTES.login)}

                          >
                              Logout
                          </Menu.Item>
                      </Menu>
                  </Group>


              </Group>
          </div>
      </Header>
  );
};

