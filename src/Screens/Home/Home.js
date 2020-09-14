/* Libraries */
import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {NeuView} from 'react-native-neu-element';

// ICONS IMPORT
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

// THEME IMPORT
import * as theme from '../../Constants/theme';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            weatherInfo: {
                location: 'Kent, England',
                wind: '9 m/h',
                humidity: '69%',
                visibility: '21km',
                uv: 1,
                today: {
                    weather: 'Cloudy',
                    desc: 'Sunny',
                    temperature: '24°c',
                },
                tomorrow: {
                    weather: 'Sunny',
                    desc: 'Cloudy with a chance of rain',
                    temperature: '24°c',
                },
                sevenDayForcast: [
                    {
                        day: 'Monday',
                        weather: 'Cloudy',
                        temperature: '24°c',
                    },
                    {
                        day: 'Tuesday',
                        weather: 'Sunny',
                        temperature: '28°c',
                    },
                    {
                        day: 'Wednesday',
                        weather: 'Cloudy',
                        temperature: '21°c',
                    },
                    {
                        day: 'Thursday',
                        weather: 'Sunny',
                        temperature: '25°c',
                    },
                    {
                        day: 'Friday',
                        weather: 'Cloudy',
                        temperature: '21°c',
                    },
                    {
                        day: 'Saturday',
                        weather: 'Sunny',
                        temperature: '28°c',
                    },
                    {
                        day: 'Sunday',
                        weather: 'Cloudy',
                        temperature: '20°c',
                    },
                ],
            },
        };
    }

    static navigationOptions = {
        headerShown: false,
    };

    // LIFECYCLE METHODS
    componentDidMount = () => {};
    // END LIFECYCLE METHODS

    // UTILITY FUNCTIONS
    // END UTILITY FUNCTIONS

    // FUNCTIONAL COMPONENT
    TabHeader = (props) => {
        return (
            <>
                {this.state.currentTab == props.currentTab ? (
                    <NeuView color={theme.colors.bgCol} height={40} width={props.width} borderRadius={20}>
                        <Text style={{fontSize: 18, color: theme.colors.themeCol2, fontWeight: 'bold'}}>{props.text}</Text>
                    </NeuView>
                ) : (
                    <TouchableOpacity onPress={() => this.setState({currentTab: props.currentTab})}>
                        <Text style={{fontSize: 18, color: 'grey'}}>{props.text}</Text>
                    </TouchableOpacity>
                )}
            </>
        );
    };

    TabContent = (props) => {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: 'grey', fontWeight: '600', textAlign: 'center'}}>{props.weatherInfo.desc}</Text>
                <Feather
                    name={props.weatherInfo.weather == 'Sunny' ? 'sun' : 'cloud-drizzle'}
                    size={50}
                    color={props.weatherInfo.weather == 'Sunny' ? theme.colors.themeCol1 : theme.colors.themeCol2}
                    style={{marginVertical: 20}}
                />
                <Text style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>{props.weatherInfo.temperature}</Text>
            </View>
        );
    };
    // END FUNCTIONAL COMPONENT

    // RENDERING FUNCTIONS
    render() {
        const {TabHeader, TabContent} = this;
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.bgCol}}>
                <View style={{flex: 1, padding: 25}}>
                    {/* HEADER */}
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <NeuView color={theme.colors.bgCol} height={50} width={50} borderRadius={25}>
                            <Feather name={'user'} size={25} color={theme.colors.themeCol2} />
                        </NeuView>
                        <Text style={{fontWeight: 'bold', fontSize: 30}}>Weather</Text>
                        <NeuView color={theme.colors.bgCol} height={50} width={50} borderRadius={25}>
                            <Ionicons name={'add-circle-outline'} size={25} color={theme.colors.themeCol1} style={{marginRight: -5}} />
                        </NeuView>
                    </View>

                    {/* SECTION 1 */}
                    <View style={{alignSelf: 'center', marginTop: '5%'}}>
                        <NeuView color={theme.colors.bgCol} height={150} width={150} borderRadius={75} concave>
                            <Feather
                                name={this.state.weatherInfo.today.weather == 'Sunny' ? 'sun' : 'cloud-drizzle'}
                                size={100}
                                color={this.state.weatherInfo.today.weather == 'Sunny' ? theme.colors.themeCol1 : theme.colors.themeCol2}
                            />
                        </NeuView>
                    </View>

                    {/* SECTION 2 */}
                    <View style={{alignSelf: 'center', marginTop: '10%', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>{this.state.weatherInfo.today.temperature}</Text>
                        <Text style={{fontWeight: '500', fontSize: 18}}>{this.state.weatherInfo.location}</Text>
                    </View>

                    {/* SECTION 3 */}
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '10%'}}>
                        <TabHeader width={100} text={'Today'} currentTab={0} />
                        <TabHeader width={140} text={'Tomorrow'} currentTab={1} />
                        <TabHeader width={170} text={'7 Day Forcast'} currentTab={2} />
                    </View>

                    {/* SECTION 4 */}
                    <View style={{alignSelf: 'center', marginTop: '10%', alignItems: 'center'}}>
                        <NeuView color={theme.colors.bgCol} height={220} width={180} borderRadius={40} concave>
                            {this.state.currentTab == 0 && <TabContent weatherInfo={this.state.weatherInfo.today} />}
                            {this.state.currentTab == 1 && <TabContent weatherInfo={this.state.weatherInfo.tomorrow} />}
                            {this.state.currentTab == 2 && (
                                <View>
                                    {this.state.weatherInfo.sevenDayForcast.map((item, index) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={{
                                                    paddingHorizontal: 20,
                                                    flexDirection: 'row',
                                                    width: 180,
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    marginBottom: 8,
                                                }}>
                                                <Text style={{fontWeight: 'bold', fontSize: 14, color: 'black'}}>{item.day.substr(0, 3)}.</Text>
                                                <Text style={{fontSize: 14, color: 'grey'}}>{item.temperature}.</Text>
                                                <Feather
                                                    name={item.weather == 'Sunny' ? 'sun' : 'cloud-drizzle'}
                                                    size={15}
                                                    color={item.weather == 'Sunny' ? theme.colors.themeCol1 : theme.colors.themeCol2}
                                                />
                                            </View>
                                        );
                                    })}
                                </View>
                            )}
                        </NeuView>
                    </View>

                    {/* SECTION 5 */}
                    <View style={{width: '100%', marginTop: '10%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Additional Info</Text>
                        <View style={{width: '100%', flexDirection: 'row', height: 40, marginTop: '5%'}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={{...styles.addnInfoTxt}}>Wind</Text>
                                <Text style={{...styles.addnInfoTxt, color: 'grey'}}> {this.state.weatherInfo.wind}</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={{...styles.addnInfoTxt}}>Humidity</Text>
                                <Text style={{...styles.addnInfoTxt, color: 'grey'}}> {this.state.weatherInfo.humidity}</Text>
                            </View>
                        </View>
                        <View style={{width: '100%', flexDirection: 'row', height: 40}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={{...styles.addnInfoTxt}}>Visibility</Text>
                                <Text style={{...styles.addnInfoTxt, color: 'grey'}}> {this.state.weatherInfo.visibility}</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={{...styles.addnInfoTxt}}>UV</Text>
                                <Text style={{...styles.addnInfoTxt, color: 'grey'}}> {this.state.weatherInfo.uv}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
    // END RENDERING FUNCTIONS
}

const styles = StyleSheet.create({
    addnInfoTxt: {
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
    },
});

export default Home;
