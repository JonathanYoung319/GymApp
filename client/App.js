import React from 'react'
import axios from 'axios'
// import { ROOT_URL } from './config'
import { local_url } from './config';

import { StyleSheet, Text, View, Button } from 'react-native'

export default class App extends React.Component {
  constructor() {
    super()
    this.fetchDataFromServer = this.fetchDataFromServer.bind(this)

    this.state = {
      serverData: ''
    }
  }

  async fetchDataFromServer () {
    try {
      // EC2 Instance
      // const response = await axios.get(`${ROOT_URL}/api/values`) 
      const response = await axios.get(`${local_url}/api/values`); 
      this.setState({ serverData: response.data });
    } catch (ex) {
      this.setState({ serverData: 'error...' })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Gym App</Text>
        <Button 
          onPress={this.fetchDataFromServer}
          title={'Fetch'}
        />
        <Text>Serve Data: {this.state.serverData}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
