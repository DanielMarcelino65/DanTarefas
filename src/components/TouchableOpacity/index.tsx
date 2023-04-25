import { ButtonOpacity, ButtonText } from './styles';
import { TouchableProps } from './types';

export function Touchable({onPress, children, style, textStyle}:TouchableProps) {
    return (
        <ButtonOpacity style={style} activeOpacity={0.7} onPress={onPress}>
            <ButtonText style={textStyle}> {children} </ButtonText>
        </ButtonOpacity>
    );
}
