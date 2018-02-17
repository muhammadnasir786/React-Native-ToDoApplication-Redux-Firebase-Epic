import React, { Component } from 'react';
import { View , Text} from 'react-native'
class Greeting extends Component {
    render() {
        return (
            
                <Text>{this.props.name}</Text>
        );
    }
}

export default Greeting;