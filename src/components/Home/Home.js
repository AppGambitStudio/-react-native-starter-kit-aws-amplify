import React, {useState} from 'react';
import {View, Text, SafeAreaView, Pressable, Alert} from 'react-native';
import styles from './style';
import commonStyles from '../../theme/commonStyles';
import {API} from 'aws-amplify';
import Loader from '../Loader/Loader';

const Home = props => {
  const navigation = props.navigation;
  const [isLoading, setIsLoading] = useState(false);
  const callGqlApi = async () => {
    const agentQueryForProfile = `query getTenantAccountsByStatus($status: TenantAccountStatus) {
        getTenantAccountsByStatus(status: $status) {
            TenantAccount {
            ON_HOLD
            averageDrivers
            address
            averageMonthlyOrders
            businessName
            contactEmail
            contactFirstName
            contactLastName
            country
            id
            status
            zipCode
            }
        }
    }`;
    try {
      setIsLoading(true);
      let response = await API.graphql({
        query: agentQueryForProfile,
        variables: {status: 'INIT_READY_WORK'},
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      setIsLoading(false);
      console.log('GraphQL response : ', response);
      Alert.alert('GraphQL Response', JSON.stringify(response));
    } catch (error) {
      setIsLoading(false);
      console.log('GraphQL response error: ', error);
      Alert.alert('GraphQL Error', JSON.stringify(error));
    }
  };
  return (
    <SafeAreaView style={commonStyles.flex}>
      <Loader isLoading={isLoading} />
      <View style={[commonStyles.containerPadding, styles.container]}>
        <Text style={styles.screenText}>Home</Text>
        <Pressable
          onPress={() => navigation.navigate('About')}
          style={styles.aboutBtn}>
          <Text style={styles.aboutBtnText}>About</Text>
        </Pressable>
        <Pressable onPress={() => callGqlApi()} style={styles.aboutBtn}>
          <Text style={styles.aboutBtnText}>Call GraphQL API</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
