import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 10,
    paddingTop: 20,
    borderRadius: 50,
    alignItems: 'center',
    width: '100%'
  },
  numberImc: {
    fontSize: 48,
    color: '#FF0043',
    fontWeight: 'bold'
  },
  information: {
    fontSize: 18,
    color: '#FF0043',
    fontWeight: 'bold'
  },
  boxShareButton: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10
  },
  shared: {
    backgroundColor: '#01DFA5',
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5
  },
  sharedText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingHorizontal: 30
  }
})

export default styles
