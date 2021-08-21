import * as React from 'react';
import {Dimensions, FlatList, Image, ScrollView, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import {ChapterContent} from "../components/ChapterContent";
import {Icon} from 'react-native-elements';
import { FAB } from 'react-native-elements';

const {height} = Dimensions.get("window");
export default function ReadingScreen({props, navigation} : any) {
    const state = {
        chapter: {
            chapIndex: "31",
            chapName: "Parallel Thinking191",
            updatedAt: "Mar 19,21"
        }
    };


    return (
            <View  style={{ position: "relative", flex: 1}}>
                <View style={styles.topFab}>
                    <View style={styles.fabItem}>
                        <Icon onPress={() => (navigation.goBack())} size={30} color={"#666666"} name={"chevron-back"} type={"ionicon"} />
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Text style={styles.chapterTitle}>
                            Chapter {state.chapter.chapIndex}: {state.chapter.chapName.slice(0, 30) + (state.chapter.chapName.length > 30?"...":"")}
                        </Text>
                        <Text style={{color: "#666666", fontStyle: "italic"}}>{state.chapter.updatedAt}</Text>
                    </View>
                </View>
                <View style={{marginTop: 50, height: height - 100}}>
                    {/*<View style={{flex: 1}}>*/}
                    {/*    <View style={{flex: 1}}>*/}

                    <FlatList
                        style={styles.scrollView}
                        data={[1]}
                        renderItem={({item}) => (
                            <ChapterContent />
                        ) }
                    />
                    {/*    </View>*/}
                    {/*</View>*/}

                </View>
                <View style={styles.fab}>
                    <View style={styles.fabItem}>
                        <Icon size={30} color={"#666666"} name={"arrow-back"} type={"ionicon"} />
                    </View>
                    <View style={styles.fabItem}>
                        <Icon size={30} color={"#666666"} name={"arrow-forward"} type={"ionicon"} />
                    </View>
                    <View style={styles.fabItem}>
                        <Icon size={30} color={"#666666"} name={"comment-outline"} type={"material-community"} />
                        <Text style={styles.fabItemText}>30</Text>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
    },
    container: {
        borderWidth: 0,
        borderColor: "transparent",
        shadowColor: 'transparent',
    },
    chapterTitle: {
        fontSize: 20,
        color: "#464846",
        overflow: "hidden"
    },
    topFab: {
        borderTopColor: "#666666",
        position: 'absolute',
        left: 0,
        top: 0,
        color: "#666666",
        flexDirection: "row",
        width: "100%",
        flex: 1,
        flexGrow: 1,
        zIndex: 10000
    },
    fab: {
        borderTopWidth: 0.5,
        borderTopColor: "#666666",
        position: 'absolute',
        left: 0,
        bottom: 0,
        color: "#666666",
        justifyContent: "space-around",
        flexDirection: "row",
        width: "100%",
        zIndex: 10000
    },
    fabItem: {
        marginVertical: 7,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    fabItemText: {
        fontSize: 20,
        margin: 5, color: "#666666",
        alignItems: "center",
        justifyContent: "center",
    },
});
