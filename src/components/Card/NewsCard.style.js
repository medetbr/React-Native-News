import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#ffff",
        margin:10,
        marginBottom:30,
        borderRadius:7,
        borderWidth:1,
        borderColor:"#2222",        
    },
    header:{
    },
    news_image:{
        height:Dimensions.get("window").height/3.5,
        borderTopLeftRadius:7,
        borderTopRightRadius:7,
    },
    author_and_times:{ 
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:15,
        marginHorizontal: 10,
        paddingBottom:8,        
        borderBottomWidth:1.5,
        borderBottomColor:"#3333"
    },
    body:{
         
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
        color:"black",
        padding:10
    },
    description:{       
        padding:10,
        color:"black",
    },
    author_profile:{
        flexDirection:"row",
        alignItems:"center",
    },
    author_profile_img:{
        width: 50,
        height: 50,
        marginRight:8,
        borderRadius:50
    },
    times:{
        fontSize:13,
        marginTop:20
    },
    footer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        margin:10
    },
    readMoreBtn:{
        backgroundColor:"black",
        paddingVertical:7,
        paddingHorizontal:15
    },
    readMoreBtnTitle:{
        color:"white",
        fontWeight:"bold"
    }
   
})