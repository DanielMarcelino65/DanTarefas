import { ReactNode } from 'react';

export interface TouchableProps {
    onPress?: function,
    style?: object,
    children: ReactNode,
    textStyle?: object,
}
