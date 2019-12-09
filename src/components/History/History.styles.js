import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  history: {
    backgroundColor: '#EFEFEF',
    flex: 1,
    padding: 10
  },
  historyTitle: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 24
  },
  listTitle: {
    flexDirection: 'row',
    height: 20
  },
  listTitleLeft: {
    textAlign: 'left',
    flex: 1
  },
  listTitleRight: {
    textAlign: 'right',
    flex: 1
  },
  gamesList: {
    flex: 1,
    paddingVertical: 10
  },
  gameCard: {
    flexDirection: 'row',
    marginTop: 10
  },
  gameCardEdge: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});
