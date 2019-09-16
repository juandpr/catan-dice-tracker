import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  diceThrower: {
    flex: 1,
    marginTop: 10
  },
  column: {
    flex: 1,
    height: 100,
    width: '100%',
    flexDirection: 'row'
  },
  firstColumn: {
    borderColor: '#CCC',
    borderStyle: 'solid',
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
    borderBottomWidth: 1,
    borderRightWidth: 1
  }
});
