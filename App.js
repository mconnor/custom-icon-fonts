import React from 'react';
import { Text, View } from 'react-native';


//If importing directly into App.tsx
//const Icon = createIconSet(glyphMap, 'Helium', 'helium.ttf');
import Icon from './components/Icon'

export default props => {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon  name={"helium-heart"} size={50} color="black"/>
      </View>
    );
};

