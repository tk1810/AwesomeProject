import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

const App =() => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#f9fbfc',
  },
});
export default App;


