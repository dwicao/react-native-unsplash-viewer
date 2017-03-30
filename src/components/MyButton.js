import React, { PropTypes } from 'react';
import {
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { myWidth, myHeight } from '../utils';

const MyButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onPress} style={styles.btn}>
            {props.isLeftIcon &&
                <Image source={props.leftIcon} style={styles.icon} />
            }
            <Text style={styles.txt}>
              {props.label}
            </Text>
            {props.isRightIcon &&
                <Image source={props.rightIcon} style={styles.icon} />
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'gray',
        margin: 5,
        borderRadius: 5,
        width: myWidth * 0.3,
        height: myHeight * 0.08,
    },
    txt: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    icon: {
        width: 20,
        height: 20,
    },
});

MyButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default MyButton;