import React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import styles from './style';
import commonStyles from '../../theme/commonStyles';

const About = props => {
  const navigation = props.navigation;

  return (
    <SafeAreaView style={commonStyles.flex}>
      <View style={[commonStyles.containerPadding, styles.container]}>
        <Text style={styles.screenText}>About</Text>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={styles.aboutBtn}>
          <Text style={styles.aboutBtnText}>Back To Home</Text>
        </Pressable>
      </View>
      <View style={styles.versionInfo}>
        <Text style={styles.versionText}>
          App Version : v1.1 {'\n'} Build : 1
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default About;
