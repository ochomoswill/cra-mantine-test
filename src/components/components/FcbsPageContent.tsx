import React, {FunctionComponent} from 'react';
import {ScrollArea, useMantineTheme} from "@mantine/core";
import {useLayoutWrapper} from "../../context/LayoutContext";

interface OwnProps {
}

type Props = OwnProps;

const FcbsPageContent: FunctionComponent<Props> = (props) => {
    const theme = useMantineTheme();

    const layoutWrapper = useLayoutWrapper();

    // console.log("@layoutWrapper.height.pageContent ", layoutWrapper.height.pageContent);

    return (
        <div style={{
            flex: 1,
            //background: theme.colors.red[1]
        }}>
            <ScrollArea
                style={{height: layoutWrapper.height.pageContent}}
            >
                {/*{
                    Array.from(Array(1000).keys()).map((item) => (
                        <div key={item}>List Item {item + 1}</div>
                    ))
                }*/}

                {props.children}
            </ScrollArea>
        </div>
    );
};

export default FcbsPageContent;
