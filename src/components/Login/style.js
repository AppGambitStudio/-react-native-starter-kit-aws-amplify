import {StyleSheet} from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  loginBtn: {
    backgroundColor: '#1A1924',
    height: 50,
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  viewTF: {},
  textInput: {
    margin: 10,
    height: 45,
    paddingHorizontal: 10,
    width: 300,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 5,
  },
  loginBtnText: {
    color: 'white',
    fontSize: 18,
  },
});

export default styles;
