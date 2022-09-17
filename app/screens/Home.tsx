import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { getHistory, getPets } from "../utilities/APIs";
import { Title } from "../components/Title";
import { Container } from "../components/Container";
import { HistoryBubble } from "./HistoryBubble";

export const Home = () => {
    const pets = getPets('mock');
    const pet = pets[0];
    const history = getHistory("mock");

    return <Container>
        <ScrollView>
            <View style={styles.avatar}>
                <Image
                    style={styles.image}
                    source={{uri: pet.avatar}}
                />
                <Text style={styles.name}>
                    {pet.name}
                </Text>
            </View>
            <View style={styles.history}>
                <Title title={"History"} />
                {
                    history.map((el: Measure) => {
                        return <HistoryBubble measure={el} />
                    })
                }
            </View>
        </ScrollView>
    </Container>;
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 'auto',
        aspectRatio: 1,
        borderRadius: 500,
        borderStyle: 'solid',
        borderColor: '#e7eedc',
        borderWidth: 0,
        alignItems: 'center'
    },
    avatar: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    name: {
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25
    },
    history: {
        flex: 1,
    }
});
