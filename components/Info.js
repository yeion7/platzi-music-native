/* @flow weak */

import React from "react";
import { View } from "react-native";
import { Text } from "native-base";
import styled from "styled-components/native";

import { formattedTime } from "../lib/time";

const Info = ({ song, position, duration }) => (
  <Container>
    <Text>
      {song.name}
    </Text>
    <Text note>
      {formattedTime(position)}
      {" "}
      /
      {" "}
      {formattedTime(duration)}
    </Text>
  </Container>
);

const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 2;
`;

export default Info;
