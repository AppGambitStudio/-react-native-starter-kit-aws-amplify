import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  aboutBtn: {
    backgroundColor: '#1A1924',
    height: 50,
    width: 200,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  aboutBtnText: {
    color: 'white',
    fontSize: 18,
  },
  versionInfo: {
    paddingTop: 5,
    borderTopColor: 'black',
    borderTopWidth: 0.5,
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 20,
  },
});

export default styles;
