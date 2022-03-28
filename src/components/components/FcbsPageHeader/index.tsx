import React, {FunctionComponent, useLayoutEffect, useRef} from 'react';
import {Breadcrumbs, createStyles, Group} from "@mantine/core";
import {isString} from "../../../utils/StringUtils";
import {Link} from "react-router-dom";
import {FcbsPageTitle} from "../FcbsPageTitle";
import {useLayoutWrapper} from "../../../context/LayoutContext";

interface FcbsPageHeaderBreadCrumbProps {
    title: string
    url: string
}

export type FcbsPageHeaderBreadCrumbsProps = FcbsPageHeaderBreadCrumbProps[]

interface FcbsPageHeaderProps {
    breadcrumbs?: FcbsPageHeaderBreadCrumbsProps
    title: React.ReactNode | string
    titleRightSection?: React.ReactNode
    footer?: React.ReactNode
}


const useStyles = createStyles((theme, props: FcbsPageHeaderProps) => ({
    pageHeader: {
        height: props?.breadcrumbs ? 54 : 40,
        minHeight: 40,
        borderBottom: props?.footer ? `none` : `1px solid`,
        borderBottomColor: theme.colors.gray[4],
        justifyContent: 'center',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        background: theme.colors.gray[0]
    },
}));

export const FcbsPageHeader: FunctionComponent<FcbsPageHeaderProps> = (props) => {
    const {classes} = useStyles(props);


    const {height, updatePageHeaderHeight} = useLayoutWrapper();
    const pageHeaderRef = useRef<any>(null);

    useLayoutEffect(() => {
        updatePageHeaderHeight(pageHeaderRef?.current?.clientHeight)
    }, [pageHeaderRef?.current?.clientHeight]);

    console.log("@layout heights ", height);

    return (
        <React.Fragment>
                <section ref={pageHeaderRef}>
                    <Group className={classes.pageHeader} direction="column" noWrap={true}
                           spacing={1}

                    >
                        {props?.breadcrumbs ? (
                            <Breadcrumbs
                                separator="/"
                                styles={{
                                    root: {paddingTop: 2},
                                    breadcrumb: {fontSize: 11},
                                    separator: {fontSize: 11},
                                }}
                            >
                                {
                                    props?.breadcrumbs.map((item, index) => (
                                        <Link to={item.url} key={index}>
                                            {item.title}
                                        </Link>
                                    ))}
                            </Breadcrumbs>
                        ) : null}
                        <Group position={'apart'} style={{width: '100%'}}>
                            {
                                isString(props.title) ? (
                                    <FcbsPageTitle>
                                        {props.title}
                                    </FcbsPageTitle>
                                ) : props.title
                            }


                            {props?.titleRightSection ?? null}

                        </Group>
                    </Group>
                </section>

                {props?.footer ?? null}
        </React.Fragment>
    );
};

