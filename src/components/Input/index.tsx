import React from "react";
import { InputText } from "./styles";
import { InputProps } from "./types";


export function Input({onChangeText, placeholder, placeholertextcolor}:InputProps) {
    return (
        <>
            <InputText onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={placeholertextcolor}/>
        </>
    )
}