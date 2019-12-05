import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  history: {
    backgroundColor: '#EFEFEF',
    flex: 1
  },
  gamesList: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  gameCard: {
    flexDirection: 'row',
    marginTop: 10
  },
  gameCardEdge: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    minWidth: 50
  },
  gameCardPlaceData: {
    flex: 8,
    flexDirection: 'column'
  }
});
