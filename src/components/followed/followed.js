import * as React from 'react';
import { View } from 'react-native';
import { followedStyles as sytles} from './sytles';
import FollowedObject from './followedObject';

class Followed extends React.Component{
    render(){
        return(
            <View style={sytles.container}>
                <FollowedObject />
            </View>
        );
    }
}

export default Followed;