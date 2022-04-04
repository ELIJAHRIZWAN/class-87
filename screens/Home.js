import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView,Platform, StatusBar, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style= {styles.container}>
            <SafeAreaView style= {styles.droidSafeArea}/>
            <View Style={styles.titleBar}> <Text style=
            {styles.titleText} > ISS Tracker App</Text>
            </View>
            <TouchableOpacity style={styles.routeCard}><Text style=
            {styles.routeText}>IssLocation</Text><Text style ={styles.knowmore}>
                {"Know More--->"}
                </Text>
                </TouchableOpacity>
 <TouchableOpacity style={styles.routeCard}><Text style=
 {styles.routeText}>Meteors</Text><Text style ={styles.knowmore}>
     {"Know More--->"}
     </Text>
     </TouchableOpacity>

         <TouchableOpacity style={styles.routeCard}><Text style=
        {styles.routeText}>Updates</Text><Text style ={styles.knowmore}>
            {"Know More--->"}
            </Text>
            </TouchableOpacity>
            </View>
        );
    }
}