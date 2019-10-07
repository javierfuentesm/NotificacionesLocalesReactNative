import React, { Component } from 'react';
import { AppState, View, Button, Text, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushController from './PushController.js'; //The push controller created earlier

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.sendNotification = this.sendNotification.bind(this);
  };
  
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  };
  
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  };
  
  // This will notify the user in 3 seconds after sending the app to the 
  // background (like after pressing the home button or switching apps)
  handleAppStateChange(appState) {
    if (appState === 'background') {
      // Schedule a notification
     /*  PushNotification.localNotificationSchedule({
        message: 'Scheduled delay notification message', // (required)
        date: new Date(Date.now() + (3 * 1000)) // in 3 secs
      }); */
    }
  };

  sendNotification() {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1
   }));
    PushNotification.localNotification({
      message: 'Has recibido una notificacion '
    });
  };

  render() {
    return (
      
      <View>
      <Text style={{fontWeight: 'bold'}}>

      Has presionado el boton {this.state.clicks} veces
</Text>
        <Button title='Presiona aqui para recibir una notificacion'
          onPress={this.sendNotification}>
            </Button>
        <PushController />

      </View>

    
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});