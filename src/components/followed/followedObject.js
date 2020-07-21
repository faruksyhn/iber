import * as React from 'react';
import { View, Text, Image, Platform, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import { followedStyles as styles } from './sytles';

class followedObject extends React.Component{
    render(){
        const name = 'İber Tekno'
        const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
        return(
            <TouchableComponent>
                <View style={styles.contentContainer}>
                    <View style={styles.followedImg}>
                        <Image style={styles.followedImg}
                            source = {require('../../images/customer.png')}
                        />
                    </View>
                    <Text style={styles.followedName}>{name}</Text>
                </View>
            </TouchableComponent>
        );
    }
}

export default followedObject;