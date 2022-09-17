import React from "react";
import { StyleSheet, Text } from 'react-native';

export const Title = (props: {
    title: string
}) => {
    const {title} = props;

    return <Text style={styles.title}>
        {title}
    </Text>
}

const styles = StyleSheet.create({
    title: {
        marginVertical: '10%',
        fontWeight: 'bold',
        fontSize: 30
    }
});
