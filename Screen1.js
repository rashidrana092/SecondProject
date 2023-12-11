import { View, Text } from 'react-native'
import React from 'react'

export default function Screen1() {
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 20,
                    textAlign: 'center',
                    marginVertical: 10,
                    fontWeight: 'bold',
                    color: '#000'
                    }}>Responsive Design Demo (Second Project)</Text>
      <Text style={{fontSize: 12,
                    marginVertical: 5,
                    color: '#000',
                    paddingLeft: 10
                    }}>Following properties are applied on below boxex: </Text>
      <Text style={{fontSize: 12,
                    color: '#000',
                    paddingLeft: 10
                    }}>flexDirection: row ( Align children from left to right)  </Text>
      <Text style={{fontSize: 12,
                    color: '#000',
                    paddingLeft: 10
                    }}>justifyContent: space-around  ( align horizontally) </Text>
      <Text style={{fontSize: 12,
                    color: '#000',
                    paddingLeft: 10
                    }}>alignItems: center ( align vertically) </Text>

<Text style={{fontSize: 12,
                    color: '#000',
                    paddingLeft: 10,
                    paddingTop: 10
                    }}>If flexDirection is row then justifyContent will align items horizontally
                     and  alignItems align items vertically</Text>


      <View style={{
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flex: 1,
                   // borderWidth: 1
  
                    }}>
              <View style={{width: 100,height: 100,backgroundColor: 'powderblue'}}></View>
              <View style={{width: 100,height: 100,backgroundColor: 'skyblue'}}></View>
              <View style={{width: 100,height: 100,backgroundColor: 'steelblue'}}></View>

      </View>

    </View>
  )
}