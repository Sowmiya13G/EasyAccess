import React, { useState } from 'react';
import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { styles } from './styles';


const SignupScreen = () => {


  // render UI ........
  return (
    <View style={styles.body}>
      <Text style={styles.header}>
        Pik<Text style={[styles.header, { color: '#20d5d8' }]}>up</Text>
      </Text>
    </View>

  );
};

export default SignupScreen;
