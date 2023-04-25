import React from "react";
import { Box, Text } from './styles';
import { ItemCardProps } from "./types";


export function ItemCard ({children, style}: ItemCardProps) {
    return(
        <>
            <Box style={style}>
                <Text> {children} </Text>
            </Box>
        </>
    )
}