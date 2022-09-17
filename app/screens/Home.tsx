import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { getPets } from "../utilities/APIs";
import { Container } from "../components/Container";
import { colors } from "../assets/colors"
import {
    WarningCircle,
    CaretRight,
    Plus,
    SmileySad,
    SmileyMeh,
    Smiley
} from 'phosphor-react-native';
import { IconButton } from "react-native-paper";

export const Home = () => {
    const pets = getPets('mock');
    const pet = pets[0];

    return <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <ScrollView>
            <Container>
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
                    marginTop: 20
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
                    <Text style={{fontWeight: 'bold', marginTop: 20}}>
                        Kilocalories
                    </Text>
                    <View style={{flex: 1, marginTop: 5}}>
                        <View style={{
                            height: 10,
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                flex: 13,
                                backgroundColor: colors.primary,
                                borderBottomLeftRadius: 10,
                                borderTopLeftRadius: 10
                            }} />
                            <View style={{
                                flex: 8.8,
                                backgroundColor: '#cdb4db',
                            }} />
                            <View style={{
                                flex: 0.2,
                                backgroundColor: '#ffc8dd',
                            }} />
                            <View style={{
                                flex: 7.8,
                                backgroundColor: '#bde0fe',
                            }} />
                            <View style={{
                                flex: 67,
                                backgroundColor: '#ffafcc',
                            }} />
                            <View style={{
                                flex: 3.2,
                                backgroundColor: '#a3b18a',
                            }} />
                            <View style={{
                                flex: 30,
                                backgroundColor: '#ffffff',
                                borderBottomRightRadius: 10,
                                borderTopRightRadius: 10
                            }} />
                        </View>
                        <View style={{flex: 1, marginTop: 20, flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View
                                        style={{
                                            height: 10,
                                            width: 10,
                                            marginRight: 10,
                                            borderRadius: 100,
                                            backgroundColor: colors.primary
                                        }}
                                    />
                                    <Text>Protein</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View
                                        style={{
                                            height: 10,
                                            width: 10,
                                            marginRight: 10,
                                            borderRadius: 100,
                                            backgroundColor: '#bde0fe'
                                        }}
                                    />
                                    <Text>Carbs</Text>
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View
                                        style={{
                                            height: 10,
                                            width: 10,
                                            marginRight: 10,
                                            borderRadius: 100,
                                            backgroundColor: '#cdb4db'
                                        }}
                                    />
                                    <Text>Fat</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View
                                        style={{
                                            height: 10,
                                            width: 10,
                                            marginRight: 10,
                                            borderRadius: 100,
                                            backgroundColor: '#ffafcc'
                                        }}
                                    />
                                    <Text>Humidity</Text>
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View
                                        style={{
                                            height: 10,
                                            width: 10,
                                            marginRight: 10,
                                            borderRadius: 100,
                                            backgroundColor: "#ffc8dd"
                                        }}
                                    />
                                    <Text>Fiber</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View
                                        style={{
                                            height: 10,
                                            width: 10,
                                            marginRight: 10,
                                            borderRadius: 100,
                                            backgroundColor: "#a3b18a"
                                        }}
                                    />
                                    <Text>Micronutrients</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    borderRadius: 20,
                    backgroundColor: '#f1f1f1',
                    flex: 1,
                    padding: 20,
                    marginTop: 20,
                    flexDirection: 'row'
                }}>
                    <Text style={{fontWeight: 'bold', flex: 1, fontSize: 20}}>Immunity check</Text>
                    <WarningCircle color={"#d62828"} size={25} />
                    <CaretRight size={25} />
                </View>
                <View style={{
                    borderRadius: 20,
                    backgroundColor: '#f1f1f1',
                    flex: 1,
                    padding: 20,
                    marginTop: 20,
                    flexDirection: 'row'
                }}>
                    <Text style={{fontWeight: 'bold', flex: 1, fontSize: 20}}>Settings</Text>
                    <CaretRight size={25} />
                </View>
                <View style={{
                    marginTop: 20
                }}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
                        How is your pet doing?
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        marginTop: 20
                    }}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <IconButton
                                style={{height: 60, width: '100%'}}
                                icon={() => <SmileySad
                                    size={60}
                                    color={"#adb5bd"}
                                />}
                                onPress={() => null}
                            />
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <IconButton
                                style={{height: 60, width: '100%'}}
                                icon={() => <SmileyMeh
                                    size={60}
                                    color={"#adb5bd"}
                                />}
                                onPress={() => null}
                            />
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <IconButton
                                style={{height: 60, width: '100%'}}
                                icon={() => <Smiley
                                    size={60}
                                    color={"#adb5bd"}
                                />}
                                onPress={() => null}
                            />
                        </View>
                    </View>
                </View>
            </Container>
        </ScrollView>
        <IconButton
            icon={() => <Plus color={"#ffffff"} />}
            style={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                backgroundColor: colors.primary,
            }}
            onPress={() => {

            }}
        />
    </View>
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
