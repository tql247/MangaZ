import React, { Component } from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions, FlatList, TouchableOpacity} from "react-native";
import {Text} from "./Themed";
import {ActionSheetOptions} from "@expo/react-native-action-sheet";


const {height, width} = Dimensions.get("window");
const numColumn = Math.floor(width/100) - 1;

interface Props {
    navigation : any;
    showActionSheetWithOptions: (
        options: ActionSheetOptions,
        callback: (buttonIndex: number) => void
    ) => void;
}

export class FollowingFlatList extends Component<Props> {

    state = {
        screenHeight: 0,
        users: [
            {
                title: 'Dragon Ball by Akira Toriyama',
                coverImageURI: 'https://www.kindpng.com/picc/m/236-2362818_anime-sempai-animegirl-heart-kawaii-cute-anime-girl.png'
            },
            {
                title: 'Siren Roar Mir Kola',
                coverImageURI: 'https://i.imgur.com/wDlae3z.jpg'
            },
            {
                title: 'Inuyasha by Rumiko Takahashi',
                coverImageURI: 'https://i.imgur.com/zNZmemg.jpg'
            },
            {
                title: 'Maus geht kape gacha',
                coverImageURI: 'https://i.imgur.com/ti9Nf0R.jpg'
            },
            {
                title: 'Il a dit con olp',
                coverImageURI: 'https://i.imgur.com/ZvFehmB.jpg'
            },
            {
                title: 'Naruto by Masashi Kishimoto',
                coverImageURI: 'https://i.imgur.com/esC9VjO.jpg'
            },
            {
                title: 'Fullmetal Alchemist by Hiromu Arakawa',
                coverImageURI: 'https://i.imgur.com/zEqLKpl.jpg'
            },
            {
                title: 'Death Note by Tsugumi Ohba and Takeshi Obata',
                coverImageURI: 'https://i.imgur.com/l9lwBT6.jpg'
            },
            {
                title: 'Fruits Basket by Natsuki Takaya',
                coverImageURI: 'https://i.imgur.com/tKKGXAH.jpg'
            },
            {
                title: 'Sailor Moon by Naoko Takeuchi',
                coverImageURI: 'https://i.pinimg.com/564x/42/fb/ac/42fbaca97af619fb2327cf7561fa53c1.jpg'
            },
            {
                title: 'My Hero Academia by Kohei Horikoshi',
                coverImageURI: 'https://i.pinimg.com/564x/15/63/4c/15634cf53dcabcf55d3e8c9bbb771afe.jpg'
            },
            {
                title: 'Death Note',
                coverImageURI: 'https://i.pinimg.com/564x/c9/72/5c/c9725ccda0271714e360655a916dd94b.jpg'
            },
            {
                title: 'Naruto',
                coverImageURI: 'https://i.pinimg.com/564x/91/3b/ec/913becf803280c4f2baff246990d7ba9.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/92/eb/05/92eb05a3f26de59666fc8aa0cb14b697.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/73/68/c4/7368c425d8305f50ba78d4f6987858a4.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/2e/8b/50/2e8b504dab66527a1937b9fb769e9ab0.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/2f/c7/6c/2fc76c9f5a3d20caafff63fb3bf985fe.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/f6/93/bb/f693bba1836ed913f220cbf37c348370.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/35/79/4f/35794ffed3f0054284246985f0652c96.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/0a/95/c8/0a95c8d9bd6a33a3e6304c3a87817bc7.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/236x/8d/10/0a/8d100ab9e4fb772fb03addc60408bb38.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/236x/f2/5b/f6/f25bf67343ed8597d9ff436f13714e44.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/236x/f5/ea/d0/f5ead037edb9312530c0a4a793f3fd95.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/236x/dc/62/4d/dc624db637552afe5d014f4e17e10b96.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/d2/ed/12/d2ed12ea5992abc9bd9a7341e0061cd1.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/36/ed/f9/36edf9fc5680342a25e7321af3c1e56a.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/8f/b1/56/8fb156205c5c468a58cb53abd9302009.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/ec/00/73/ec0073c99c12fb36e8429e146a4e671c.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/6d/58/2a/6d582afc1497060768b526ab77dbcdec.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/18/a1/d3/18a1d3ad313b44c3b15a23d605bcb567.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/dc/7f/ca/dc7fca12ee6996d61f7afc2a5a62ccd0.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/24/68/d6/2468d6d43a95e74f1ddd00a388703ac7.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/46/4b/7d/464b7d1b62a5f0f106bb41ca28f59fa0.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/01/5d/91/015d9121be5a1ce828d2acc40680f0fc.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/f6/5d/0e/f65d0e54480a0592d14367d39c1b0a47.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/f0/8e/3f/f08e3fa4272e5c193fa5623cc9ea86e0.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/36/5b/c4/365bc4e62d67ba378813b2a0ebd34aae.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/16/28/10/16281022f619c71db9f3cb4025f2e746.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/a1/63/78/a16378585fdcde8de8a16c0400fb99cd.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/9b/8b/fd/9b8bfdd0a63a29329e3c88d4083b9b3e.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/d3/62/4c/d3624c615d53be6c4c3f77caee1b02a5.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/cc/63/2c/cc632c0cec998a541b9949b007ecfde4.jpg'
            },
            {
                title: ' ヘビの首を噛',
                coverImageURI: 'https://i.pinimg.com/564x/26/39/f8/2639f821a36e609ce197af6326928fdc.jpg'
            },
        ]
    };

    onContentSizeChange = (contentWidth: number, contentHeight: number) => {
        this.setState({ screenHeight: contentHeight });
    };

    _onPressButton() {
        console.log('af')
    }

    _onLongPressFollowingItem() {
        const options = ['Unfollow!', 'Cancel'];
        const destructiveButtonIndex = 0;
        const cancelButtonIndex = 1;
        console.log('a')

        this.props.showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
                destructiveButtonIndex,
            },
            buttonIndex => {
                // if (buttonIndex === 0) this.props.navigation.replace("ListingScreen");
            },
        );
    }


    render() {
        return (
            <View style={styles.flatListContainer}>
                <FlatList
                    style={styles.scrollView}
                    data={this.state.users}
                    numColumns={numColumn}
                    keyExtractor={item => item.coverImageURI.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={styles.touchButton}
                            delayLongPress={1000}
                            onPress={this._onPressButton}
                            onLongPress={() => this._onLongPressFollowingItem()}
                        >
                            <View style={styles.imgContainer}>
                                <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: item.coverImageURI }}
                                />
                                <View style={styles.titleContainer}>
                                    <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ) }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1,
        marginHorizontal: 2.5,
        marginTop: 2.5
    },
    scrollView: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
        flex: 1
    },
    touchButton: {
        flexGrow: 1,
    },
    imgContainer: {
        flexGrow: 1,
        margin: 2.5,
        flexDirection: "row",
        flexWrap: "wrap",
        maxHeight: 250,
        maxWidth: 200,
        minHeight: 180,
        minWidth: 100,
        overflow: "hidden",
        borderRadius: 5,
        borderColor: "rgba(254,180,123,0.1)",
        borderWidth: 0.1,
        backgroundColor: "rgba(254,180,123,0.5)",
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1,
        flexGrow: 1,
    },
    titleContainer: {
        backgroundColor: "rgba(20,20,20,0.5)",
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingHorizontal: 1,
        paddingBottom: 1
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        width: "100%",
        color: "rgba(255,255,255,0.9)",
        marginHorizontal: 1,
    },
});
