import * as React from 'react';
import { View, Text } from 'react-native';
import { Profile, Followed, Logo} from '../../components'

class Home extends React.Component{
    render(){
        return(
            <View>
                <Logo />
                <Profile />
                <Followed />
                <Text>*Bu alan api'den gelen veriler ile dolacak</Text>
            </View>
        );
    }
}

export default Home;