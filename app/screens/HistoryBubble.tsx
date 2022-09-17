import React from "react";
import { View, StyleSheet } from "react-native";
import {Ruler, Scales} from 'phosphor-react-native';
import { colors } from "../assets/colors";

export const HistoryBubble = (props: {measure: Measure}) => {
    const {measure} = props;
    const {category, value, unit} = measure;

    return <View style={styles.bubble}>
        <View style={styles.type}>
            <View style={styles.iconContainer}>
                {
                    category === "weight" ? <Scales
                        size={30}
                        color={'#ffffff'}
                        style={styles.icon}
                        weight={'bold'}
                    />   : <Ruler
                        size={30}
                        color={'#ffffff'}
                        style={styles.icon}
                        weight={'bold'}
                    />
                }

            </View>
        </View>
        <View style={styles.space} />
        <View style={styles.content}>

        </View>
    </View>;
}

const styles = StyleSheet.create({
    bubble: {
        flex: 1,
        flexDirection: 'row'
    },
    type: {
        flex: 2,
        alignItems: 'center',
    },
    icon: {
        aspectRatio: 1,
        borderRadius: 100,
        fontSize: 20,
    },
    iconContainer: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 100
    },
    space: {
        flex: 2
    },
    content: {
        flex: 8
    }
});
