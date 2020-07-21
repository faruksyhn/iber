import * as React from 'react';
import { View, Text ,Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

import { profileStyles as styles } from './styles';

class Profile extends React.Component{
    render(){
        const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
        return(
            <View style={styles.container}>
                <TouchableComponent>
                    <View style={styles.profilImg}>
                    <Image style={styles.profilImg}
                        source = {require('../../images/customer.png')}
                    />
                    </View>
                </TouchableComponent>
                
                <Text style={styles.title}>Faruk Seyhan</Text>
                <View style={styles.information}>
                <TouchableOpacity>
                    <View style={styles.info}>
                        <Text style={styles.bold}>5</Text>
                        <Text style={styles.bold}>Gönderiler</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.info}>
                        <Text style={styles.bold}>60</Text>
                        <Text style={styles.bold}>Takipçi</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.info}>
                        <Text style={styles.bold}>35</Text>
                        <Text style={styles.bold}>Takip</Text>
                    </View>
                </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

export default Profile;