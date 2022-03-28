import React, { FunctionComponent } from 'react';
import {MyColorsPalette} from "../../constants/Colors";
import {Text} from "@mantine/core";

interface OwnProps {}

type Props = OwnProps;

export const FcbsPageTitle: FunctionComponent<Props> = (props) => {

  return (
      <Text
          size={'xl'}
          color={MyColorsPalette.primary}
          // color={'blue'}
          weight={600}>
          {props.children}
      </Text>
  );
};

