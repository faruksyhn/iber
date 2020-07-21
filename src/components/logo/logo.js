import * as React from 'react';
import { View, Text ,Image} from 'react-native';

import { logoStyles as styles } from './styles';

class Logo extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.Img}
                    source = {require('../../images/logo.jpg')}
                />
            </View>
        );
    }
}

export default Logo;