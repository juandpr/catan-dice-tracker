import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  diceThrower: {
    flex: 1,
    marginTop: 10
  },
  column: {
    flex: 1,
    width: '100%',
    flexDirection: 'row'
  },
  firstColumn: {
    borderColor: '#FEC807',
    borderStyle: 'solid',
    borderTopWidth: 4
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FEC807',
    borderStyle: 'solid',
    borderBottomWidth: 4,
    borderRightWidth: 4
  },
  buttonContainerLastRow: {
    borderRightWidth: 0
  }
});
