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
        style={{flex:1,alignItems: 'center'}}
      >

      <View style={{
        marginTop:100,
        height:140,
        width:140,
        border:"15px solid black", 
        borderRadius:"100%"}}/>
      <Text style={{fontSize:20, marginTop:50, fontWeight:700,textAlign:"center",  width:155, marginTop:80,}}>GROW<br/>YOUR BUSINESS</Text>
      
      <Text  style={{width:310,fontWeight:700, textAlign:"center", marginTop:30}}>We will help you to grow your business using
        online server</Text>

        
      <View style={{width:"100%",display:"flex",flexDirection: 'row', alignItems:"stretch", justifyContent:"space-around", marginTop:50}}>
      <TouchableOpacity
        style={{ alignItems: "center", height:40,
                backgroundColor: "#E3C000",
                padding: 10}}>
        <Text style={{fontWeight:700}}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", height:40,
                backgroundColor: "#E3C000",
                padding: 10}}>
        <Text style={{fontWeight:700}}>SIGN UP</Text>
      </TouchableOpacity>
      </View>

      <Text  style={{fontWeight:700,marginTop:50}}>
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
