/* Libraries */
import React, {Component} from 'react';
import {Button} from 'react-native-paper';
import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, Platform, ScrollView, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';

// ICONS IMPORT
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

// THEME IMPORT
import * as theme from '../../Constants/theme';

// API CALL IMPORT
import * as ApiCall from '../../Constants/apiCall';

// HELPER IMPORT
import Helper from '../../Constants/helper';

// CONSTANTS
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        headerShown: false,
    };

    // LIFECYCLE METHODS
    componentDidMount = () => {};
    // END LIFECYCLE METHODS

    // UTILITY FUNCTIONS
    // END UTILITY FUNCTIONS

    // RENDERING FUNCTIONS
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>Hello World asdklam</Text>
                </View>
            </SafeAreaView>
        );
    }
    // END RENDERING FUNCTIONS
}

const styles = StyleSheet.create({});

export default Home;
