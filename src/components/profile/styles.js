import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
    container:{
        backgroundColor: '#42a0ff',
        alignContent: 'center',
        marginTop:10,
        marginHorizontal:20,
        paddingTop: 20,
        paddingHorizontal:10,
        paddingBottom:10,
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    profilImg:{
        width:100,
        height:100,
        borderRadius: 200 / 2
    },
    information:{
        flexDirection:'row'    
    },
    info:{
        alignItems:'center',
        marginTop:10,
        marginHorizontal:20
    },
    title:{
        fontSize:20,
        fontWeight: "bold",
        color:'white'
    },
    subTitle:{
        fontSize:15,
        color:'white'
    },
    bold:{
        fontWeight: "bold",
        color:'white'
    }
});