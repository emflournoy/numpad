/**
 * Keyboard
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import {
    View, Text, Image, TouchableOpacity
} from 'react-native';

import styles, {
    keyStyle, BG_COLOR
} from './styles';


const numberKeys = [
    [
        { mainText: '1' },
        { mainText: '2' },
        { mainText: '3' }
    ],
    [
        { mainText: '4' },
        { mainText: '5' },
        { mainText: '6' }
    ],
    [
        { mainText: '7' },
        { mainText: '8' },
        { mainText: '9' }
    ]
];


class Keyboard extends Component {

    constructor(props) {
        super(props);
    }

    _clearAll() {
        this.props.onClear();
    }

    _onPress(key) {
        if (key === '') {
            return;

        // delete key
        } else if (key === 'del') {
            this.props.onDelete();

        // number key
        } else {
            this.props.onKeyPress(key);
        }
    }

    _disableBorder() {
      if (this.props.disableBorder !== true) {
        return keyStyle.bd;
      }

      return keyStyle.border;
    }

    _disableClearButtonBackground() {
      if (this.props.disableClearButtonBackground !== true) {
        return keyStyle.bg_d2d5dc;
      }

      return keyStyle.bgLess;
    }

    _clearBtnUnderlayColor() {
      if (this.props.disableClearButtonBackground !== true) {
        return '#3a3b3e';
      }

      return '#3a3b3e';
    }

    _renderKey(key, index) {
        return (
            <TouchableOpacity
                key={index}
                underlayColor={BG_COLOR}
                style={keyStyle.wrapper}
                onPress={this._onPress.bind(this, key.mainText)}
            >
                <View style={[keyStyle.bd, this._disableBorder()]}>
                    <Text style={keyStyle.mainText}>{key.mainText}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _renderNumberKeys() {
        return numberKeys.map((group, groupIndex) => {
            return (
                <View key={groupIndex} style={styles.row}>
                    {group.map(this._renderKey.bind(this))}
                </View>
            );
        });
    }

    _isDecimalPad() {
        return this.props.keyboardType === 'decimal-pad';
    }

    _renderDotKey() {
      if (this.props.disableDot !== true) {
        let dotNode = null,
        dotText = '';
        if (this._isDecimalPad()) {
            dotText = '.';
            dotNode = <Text style={[keyStyle.mainText, keyStyle.dot]}>.</Text>;
        }
        return (
            <TouchableOpacity
                underlayColor="#3a3b3e"
                style={[keyStyle.wrapper, keyStyle.bg_d2d5dc]}
                onPress={this._onPress.bind(this, dotText)}
            >
                <View style={[keyStyle.bd, this._disableBorder()]}>{dotNode}</View>
            </TouchableOpacity>
        );
      }

      return (
        <TouchableOpacity
          style={keyStyle.wrapper}
        >
          <View />
        </TouchableOpacity>
      );
    }

    render() {
        const props = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.main}>

                    {this._renderNumberKeys()}

                    <View style={styles.row}>
                        {this._renderDotKey()}

                        <TouchableOpacity
                            underlayColor={BG_COLOR}
                            style={keyStyle.wrapper}
                            onPress={this._onPress.bind(this, '0')}
                        >
                            <View style={[keyStyle.bd, this._disableBorder()]}>
                                <Text style={keyStyle.mainText}>0</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            underlayColor={this._clearBtnUnderlayColor()}
                            style={[keyStyle.wrapper, this._disableClearButtonBackground()]}
                            onPress={this._onPress.bind(this, 'del')}
                            onLongPress={this._clearAll.bind(this)}
                        >
                            <View style={[keyStyle.bd, this._disableBorder()]}>
                                <Text style={keyStyle.mainText}>del</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


Keyboard.propTypes = {
    keyboardType: PropTypes.oneOf(['number-pad', 'decimal-pad']),
    onKeyPress: PropTypes.func,
    onDelete: PropTypes.func,
    onClear: PropTypes.func
};


Keyboard.defaultProps = {
    keyboardType: 'number-pad',
    onKeyPress: () => {},
    onDelete: () => {},
    onClear: () => {}
};


export default Keyboard;
