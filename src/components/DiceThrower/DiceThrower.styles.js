import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  diceThrower: {
    flex: 1
  },
  column: {
    flex: 1,
    height: 100,
    width: '100%',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  buttonContainer: {
    flex: 1,
    height: 100,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#CCC',
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopWidth: 0
  }
});
