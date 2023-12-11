import { View, Text } from 'react-native'
import React from 'react'

export default function Screen2() {
  return (
    <View style={{flex: 1}}>
    <Text style={{fontSize: 20,
                  textAlign: 'center',
                  marginVertical: 10,
                  fontWeight: 'bold',
                  color: '#000'
                  }}>Responsive Design Demo</Text>
    <Text style={{fontSize: 12,
                  marginVertical: 5,
                  color: '#000',
                  paddingLeft: 10
                  }}>Following properties are applied on below boxex: </Text>
    <Text style={{fontSize: 12,
                  color: '#000',
                  paddingLeft: 10
                  }}>flexDirection: column (Align children from top to bottom)</Text>
    <Text style={{fontSize: 12,
                  color: '#000',
                  paddingLeft: 10
                  }}>justifyContent: space-around ( align vertically) </Text>
    <Text style={{fontSize: 12,
                  color: '#000',
                  paddingLeft: 10
                  }}>alignItems: center  ( align horizontally)</Text>

<Text style={{fontSize: 12,
                  color: '#000',
                  paddingLeft: 10,
                  paddingTop: 10
                  }}>If flexDirection is column then justifyContent will align items vertically
                   and  alignItems align items horizontally</Text>


    <View style={{
                  marginVertical: 50,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flex: 1

                  }}>
            <View style={{width: 100,height: 100,backgroundColor: 'powderblue'}}></View>
            <View style={{width: 100,height: 100,backgroundColor: 'skyblue'}}></View>
            <View style={{width: 100,height: 100,backgroundColor: 'steelblue'}}></View>

    </View>

  </View>

  )
}