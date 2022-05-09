import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Pressable,
  View,
  Text,
  Alert,
  TextInput,
} from 'react-native';
import styles from './style';
import {setLogin} from '../../redux/reducers/Auth/authReducer';
import {useDispatch} from 'react-redux';
import awsConfig from '../../awsConfig/awsConfig';
import {Auth} from 'aws-amplify';
import Loader from '../Loader/Loader';

const Login = props => {
  const [userName, setUserName] = useState(
    'abhishek.desai+quickly-super-admin@appgambit.com',
  );
  const [password, setPassword] = useState('Test@1234');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log('useEffect');
  //   awsConfig();
  // }, []);
  const login = async () => {
    try {
      setIsLoading(true);
      const user = await Auth.signIn(userName, password);
      console.log('User : ', user);
      setIsLoading(false);
      dispatch(setLogin(true));
    } catch (error) {
      setIsLoading(false);
      console.log('Login Error : ', error);
      Alert.alert('Login error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loader isLoading={isLoading} />
      <View style={{alignItems: 'center'}}>
        <Text>Login</Text>
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          placeholderTextColor="#777"
          onChangeText={value => setUserName(value)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.textInput}
          placeholderTextColor="#777"
          onChangeText={value => setPassword(value)}
        />
        <Pressable onPress={() => login()} style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
