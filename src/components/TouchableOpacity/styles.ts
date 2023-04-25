import { Text } from 'react-native-paper';
import styled from 'styled-components/native';

export const ButtonOpacity = styled.TouchableOpacity`
    background-color: orange;
    padding: 15px;
    border-radius: 7px;
    align-items: center;
    margin-top: 20px;
    width: 100%;
`;

export const ButtonText = styled(Text)`
    color: #121214;
    font-size: 16px;
    font-weight: bold;
`;
