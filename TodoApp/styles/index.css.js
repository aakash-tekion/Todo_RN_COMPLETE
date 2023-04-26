import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    alignContentCenter:{
        alignItems:'center'
    },
    justifyContentCenter:{
        justifyContent:'center'
    },
    width100:{
        width:'100%'
    },
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    }
})
export default styles
