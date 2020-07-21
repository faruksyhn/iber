import { StyleSheet } from 'react-native';

export const followedStyles = StyleSheet.create({
    container:{
        justifyContent: "center",
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginHorizontal:20,
        backgroundColor:'#e5e5e5'
    },
    contentContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:25,
        paddingVertical:22
    },
    followedImg: {
        width:25,
        height:25,
        borderRadius:4,
    },
    followedName:{
        flex:1,
        marginStart:12,
        color:'black'
    }
});