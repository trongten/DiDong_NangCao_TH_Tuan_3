import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button ,View, Touchable, TouchableOpacity, TouchableOpacityComponent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['white', '#40E0D0']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={{flex:1,alignItems: 'center',width:'100%'}}
      >

      <View style={{
        marginTop:100,
        height:200,
        width:200,
        borderColor:'black',
        borderWidth: 20,
        borderRadius:"100%"}}/>

      <Text style={{fontSize:20, marginTop:50, fontWeight:'bold',textAlign:"center",  width:250, marginTop:80,}}>GROW {"\n"}YOUR BUSINESS</Text>
      
      <Text  style={{width:310,fontWeight:'bold', textAlign:"center", marginTop:30}}>We will help you to grow your business using
        online server</Text>

        
      <View style={{width:"100%",display:"flex",flexDirection: 'row',  justifyContent:'space-evenly', marginTop:50}}>
      <TouchableOpacity
        style={{  height:40,
                backgroundColor: "#E3C000",
                padding: 10}}>
        <Text style={{fontWeight:'bold'}}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{  height:40,
                backgroundColor: "#E3C000",
                padding: 10}}>
        <Text style={{fontWeight:'bold'}}>SIGN UP</Text>
      </TouchableOpacity>
      </View>

      <Text  style={{fontWeight:'bold',marginTop:70}}>
        HOW WE WORK?
      </Text>
      <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
