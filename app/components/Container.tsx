import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

export const Container = (props: {
    children: ReactNode
}) => {
    const {children} = props;

    return <View style={styles.container}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20
    }
});
