import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { getHistory, getPets } from "../utilities/APIs";
import { Title } from "../components/Title";
import { Container } from "../components/Container";
import { HistoryBubble } from "./HistoryBubble";
import { colors } from "../assets/colors";

export const Home = () => {
    const pets = getPets('mock');
    const pet = pets[0];
    const history = getHistory("mock");

    return <Container>
        <ScrollView>
            <View style={styles.avatar}>
                <View style={{
                    backgroundColor: '#cdb4db',
                    padding: 10,
                    borderRadius: 100
                }}>
                    <View style={{
                        backgroundColor: '#ffffff',
                        padding: 5,
                        borderRadius: 100
                    }}>
                        <Image
                            style={styles.image}
                            source={{uri: pet.avatar}}
                        />
                    </View>
                    <View style={{
                        backgroundColor: '#cdb4db',
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderRadius: 100,
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                    }}>
                        <Text style={{fontWeight: 'bold'}}>
                            7 / 10
                        </Text>
                    </View>

                </View>
                <Text style={styles.name}>
                    {pet.name}
                </Text>
            </View>
            <View style={{
                borderRadius: 20,
                backgroundColor: '#f1f1f1',
                flex: 1,
                padding: 20,
            }}>
                <Text style={{fontWeight: 'bold'}}>
                    Active
                </Text>
                <View style={{flex: 1, marginTop: 5}}>
                    <Text style={{fontWeight: 'bold', fontSize: 30}}>
                        55%
                    </Text>
                    <View style={{
                        height: 10,
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            flex: 55,
                            backgroundColor:
                            colors.primary,
                            borderBottomLeftRadius: 10,
                            borderTopLeftRadius: 10
                        }} />
                        <View style={{
                            flex: 45,
                            backgroundColor: '#ffffff',
                            borderBottomRightRadius: 10,
                            borderTopRightRadius: 10
                        }}>

                        </View>
                    </View>
                </View>
                <View style={{flex: 1}}>

                </View>
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
