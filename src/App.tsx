import { JSX, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { PropsWithChildren } from 'react';
import RNHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;



const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [btnBgColor, setbtnBgColor] = useState('#FFF2F2');

  const rollDice = (): void => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        setbtnBgColor('#622584');
        break;
      case 2:
        setDiceImage(DiceTwo);
        setbtnBgColor('#3852c0');
        break;
      case 3:
        setDiceImage(DiceThree);
        setbtnBgColor('#29af6d');
        break;
      case 4:
        setDiceImage(DiceFour);
        setbtnBgColor('#d50503');
        break;
      case 5:
        setDiceImage(DiceFive);
        setbtnBgColor('#f9c7d4');
        break;
      case 6:
        setDiceImage(DiceSix);
        setbtnBgColor('#eece17');
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }

    RNHapticFeedback.trigger('impactHeavy');
  };

  const genRandomColor = (): string => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange.charAt(Math.floor(Math.random() * hexRange.length));
    }
    return color;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={[styles.container, { backgroundColor: genRandomColor() }]}
      >
        <Dice imageUrl={diceImage} />
        <Pressable onPress={rollDice}>
          <Text
            style={[styles.rollDiceBtnText, { backgroundColor: btnBgColor }]}
          >
            Roll Dice
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
