import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 20,
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
    marginBottom: 10,
    marginTop: 15
  },
  shared: {
    backgroundColor: '#FF0043',
    borderRadius: 10
  },
  sharedIcon: {
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'contain'
  }
})

export default styles
