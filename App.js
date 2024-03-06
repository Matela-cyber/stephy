import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
<View style={styles.top}><View style={styles.leftcon}>      <Image source={require('./profile.jpg')}
      style={styles.profilepicture}/>
      <View style={styles.text}>
        <Text>Reitumetse Mporoane
      </Text>
    <View><Text>10hrs</Text></View>
      </View>
      </View><Text>...</Text></View>

      
      
      
      
      
      <Text>“Having A Best Friend” is a story of two best friends who got into a fight,
         but later the first friend saves his friend’s life.
          The origin of the story cannot be determined as this story has been passed on through generations.</Text>
      <Image source={require('./body.jpg')} style={styles.bodypicture}/>
      <Text>62 likes</Text>
      <Text></Text>
      <View style={styles.bottom}><View><AntDesign name="like1" size={24} color="black" /><Text>Likes</Text>
      </View>
      <View><FontAwesome name="comment-o" size={24} color="black" /><Text>Comment</Text>
      </View>
      <View><MaterialCommunityIcons name="share-outline" size={24} color="black" /><Text>Share</Text>
      </View></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
   
  },
  profilepicture:{
    padding:10,
    width:40,
    height:40,
    borderRadius:50,
  },
  bodypicture:{
    padding:10,
    height:500,
    width:500,

  },
  top:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  leftcon: {
    flexDirection:'row',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
