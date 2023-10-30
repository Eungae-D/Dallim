import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const TabBarContainer = styled.View`
  flex-direction: 'row';
  width: '100%';
  justify-content: 'space-evenly';
  background-color: 'white';
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  z-index: 2;
  position: 'absolute';
  bottom: 0;
  flex: 1;
`;

export const ComponentCircle = styled(Animated.View)`
  border-radius: 30px;
  width: 60px;
  height: 60px;
  position: 'absolute';
  background-color: 'black';
`;
