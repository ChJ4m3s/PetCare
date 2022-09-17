import * as React from "react";
import { View } from "react-native";
import { getPets } from "../utilities/APIs";

export const Home = () => {
    const pets = getPets('mock');

    return <View>
        <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                    <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                </View>
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index}
        />
    </View>;
}
