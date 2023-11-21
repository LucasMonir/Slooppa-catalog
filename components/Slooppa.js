import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const Slooppa = ({ props }) => {
    return <View style={style.container}>
        <Image style={style.image} source={{ uri: props.url }} />
        <View style={style.label}>
            <Text style={style.title}>{props.name}</Text>
        </View>
    </View>
};

export default Slooppa;


const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 2,
        alignContent: 'center'
    },
    label: {
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(153, 132, 84, 0.5)',
        borderRadius: 10,
    },
    title: {
        color: 'white'
    }
})