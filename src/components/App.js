import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import MyButton from './MyButton';
import leftIcon from '../images/back.png';
import rightIcon from '../images/next.png';
import { myWidth, myHeight, platformDiff } from '../utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      unsplash: `https://unsplash.it/${myWidth}/${myHeight * 0.87}?image=0`,
    }

    this.count = 0;
    this.size = 1000;

    this.pressPrev = this.pressPrev.bind(this);
    this.pressNext = this.pressNext.bind(this);
    this.pressRandom = this.pressRandom.bind(this);
  }

  fetchImage() {
    this.setState({ unsplash: `https://unsplash.it/${myWidth}/${myHeight * 0.87}?image=${this.count}` });
  }

  randomize(min, max) {
    return Math.floor( (Math.random() * max) + min );
  }

  pressPrev() {
    if (this.count === 0) {
      this.count = this.count + (this.size - 1);
    } else {
      this.count = this.count - 1;
    }

    this.fetchImage();
  }

  pressNext() {
    this.count = (this.count + 1) % this.size;
    this.fetchImage();
  }

  pressRandom() {
    this.count = this.randomize(0, this.size);
    this.fetchImage();
  }
  
  render() {
    const indicator = {
      size: 80,
      borderWidth: 1,
      color: '#F5FCFF',
      unfilledColor: 'rgba(200, 200, 200, 0.8)'
    };

    return (
      <View style={styles.container}>
        <Image 
          source={{ uri: this.state.unsplash }} 
          indicator={ProgressBar} 
          indicatorProps={indicator}
          style={styles.img}
        />
        <View style={styles.btnWrapper}>
          <MyButton onPress={this.pressPrev} label="Prev" leftIcon={leftIcon} isLeftIcon/>
          <MyButton onPress={this.pressRandom} label="Random" />
          <MyButton onPress={this.pressNext} label="Next" rightIcon={rightIcon} isRightIcon/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: platformDiff,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  img: {
    width: myWidth,
    height: myHeight * 0.87,
  },
  btnWrapper: {
    flexDirection: 'row',
  },
});

export default App;