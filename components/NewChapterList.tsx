import React, { Component } from "react";
import {
    Image,
    StyleSheet,
    View,
    Dimensions,
    FlatList,
    TouchableOpacity
} from "react-native";
import { ListItem, Icon } from 'react-native-elements';
import {Text} from "./Themed";

interface Props {
    navigation: any
}

export class NewChapterList extends Component<Props>  {

    state = {
        users: [
            {
                title: '',
                newChapter: 'Chap 32: Release That Witch',
                imageCover: 'https://avt.mkklcdnv6temp.com/47/i/17-1583496971.jpg',
                lastUpdate: "Aug 18,2021 - 21:30 PM",
            },
            {
                title: '',
                newChapter: 'chap 12: Gakkou no Minna to Isekai no Mujintou',
                imageCover: 'https://avt.mkklcdnv6temp.com/41/a/22-1606497907.jpg',
                lastUpdate: "Aug 19,2021 - 12:54 AM",
                isFollowing: true,
                tag: [
                    "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Harem" ,"Psychological" , "Romance"
                ]
            },
            {
                title: '',
                newChapter: 'Chap 111: Soredemo Ayumu wa Yosetekuru',
                imageCover: 'https://avt.mkklcdnv6temp.com/3/j/18-1583497210.jpg',
                lastUpdate: "Aug 18,2021 - 15:32 AM",
            },
            {
                title: '',
                newChapter: 'Chap 45: ApretÉ El BotÓN Durante Un MillÓN new It, I Was The Strongest',
                imageCover: 'https://avt.mkklcdnv6temp.com/12/a/21-1589272261.jpg',
                lastUpdate: "Aug 19,2021 - 16:54 PM",
            },
            {
                title: '',
                newChapter: 'Chap 90: MP, 武炼巅峰',
                imageCover: 'https://avt.mkklcdnv6temp.com/20/b/16-1583494192.jpg',
                lastUpdate: "Aug 19,2021 - 02:24 AM",
                isFollowing: false,
                tag: [
                    "Action" , "Adventure" , "Fantasy" , "Historical" , "Martial arts"
                ]
            },
            {
                title: '',
                newChapter: 'Chap 78: うらら迷路帖 ; Urara 迷路帖',
                imageCover: 'https://avt.mkklcdnv6temp.com/10/e/15-1583491828.jpg',
                lastUpdate: "Aug 19,2021 - 01:26 AM",
                isFollowing: false,
                tag: [
                    "Action" ,"Adventure", "Fantasy", "Historical" ,"Martial arts"
                ]
            },
            {
                title: '',
                newChapter: 'Chap 66: キルボードを駆使して最強に至る',
                imageCover: 'https://avt.mkklcdnv6temp.com/3/t/22-1598420567.jpg',
                lastUpdate: "Aug-18-2021 23:25:20 PM",
                isFollowing: false,
                tag: [
                    "Adventure", "Fantasy", "Shounen",
                ]
            },
            {
                title: '',
                newChapter: 'Chap 12: ダイI (English); Diamond no Ace 2',
                imageCover: 'https://avt.mkklcdnv6temp.com/50/k/13-1583489698.jpg',
                lastUpdate: "Aug 19,2021 - 16:54 PM",
                isFollowing: false,
                tag: [
                    "Comedy" ,"School life", "Shounen", "Sports"
                ]
            },
            {
                title: '',
                newChapter: 'Chap 40: Оперативный отряд "Daishikkaku" ; 戦隊大失格',
                imageCover: 'https://avt.mkklcdnv6temp.com/26/h/23-1613533484.jpg',
                lastUpdate: "Aug 19,2021 - 01:26 AM",
            },
            {
                title: 'Chap 72: Blue Period',
                newChapter: 'ブルーピリオド',
                imageCover: 'https://avt.mkklcdnv6temp.com/45/s/17-1583496913.jpg',
                lastUpdate: "Aug 19,2021 - 01:26 AM",
            },
            {
                title: 'add',
                forwardScreen: "ListItemScreen",
            },
        ]
    };

    renderTitle(name: string) {
        return (
            <Text style={styles.title}>
                {name.slice(0, 25) + (name.length>25?"...":"")}
            </Text>
        )
    }

    renderImage(item: any) {
        if (item.title === "add")
            return (
                <View style={styles.image}>
                    <Icon name={"chevron-forward-circle"} size={50} type={"ionicon"} color={"#feb47b"} />
                </View>
            )
        return (
            <View style={styles.imgContainer}>
                <Image
                    style={[styles.image, {backgroundColor: item.backgroundColor || "#feb47b"}]}
                    resizeMode="cover"
                    source={ { uri: item.imageCover }}
                />
                <View>
                    {this.renderTitle(item.newChapter)}
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.flatListContainer}>
                <FlatList
                    style={styles.scrollView}
                    data={this.state.users}
                    horizontal={true}
                    renderItem={({item}) => (
                        <View style={styles.imgContainer}>
                            <TouchableOpacity
                                onPress={() => (this.props.navigation.navigate(item.forwardScreen || "ComicDetailScreen", {subject: "Got Movie/Anime"}))}
                            >
                                {this.renderImage(item)}
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1
    },
    title: {
        color: "#767676",
        fontWeight: "400",
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: 120,
        minWidth: 120,
    },
    scrollView: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
        flex: 1
    },
    imgContainer: {
        flexGrow: 1,
        margin: 2.5,
        paddingBottom: 5,
    },
    image: {
        maxHeight: 160,
        maxWidth: 120,
        minHeight: 160,
        minWidth: 120,
        borderRadius: 5,
        flex: 1,
        flexGrow: 1,
        borderWidth: 2,
        borderColor: "#feb47b",
        color: "#feb47b",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
});
