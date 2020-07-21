import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import Home from './screens/Home/Home';

class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container}>
                    <Home />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f9f9f9',
        flex:1
    }
});

export default App;