/**
 * Keyboard
 */
'use strict';

import React, { Component, PropTypes } from 'react';
import {
    View, Text, Image, TouchableHighlight
} from 'react-native';

import styles, {
    keyStyle, BG_COLOR
} from './styles';
import { Font, AppLoading } from 'expo';


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
        return '#ffffff';
      }

      return '#d2d5dc';
    }

    _renderKey(key, index) {
        return (
            <TouchableHighlight
                key={index}
                underlayColor={BG_COLOR}
                style={keyStyle.wrapper}
                onPress={this._onPress.bind(this, key.mainText)}
            >
                <View style={[keyStyle.bd, this._disableBorder()]}>
                    <Text style={keyStyle.mainText}>{key.mainText}</Text>
                </View>
            </TouchableHighlight>
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
            <TouchableHighlight
                underlayColor="#ffffff"
                style={[keyStyle.wrapper, keyStyle.bg_d2d5dc]}
                onPress={this._onPress.bind(this, dotText)}
            >
                <View style={[keyStyle.bd, this._disableBorder()]}>{dotNode}</View>
            </TouchableHighlight>
        );
      }

      return (
        <TouchableHighlight
          style={keyStyle.wrapper}
        >
          <View />
        </TouchableHighlight>
      );
    }

    state = {
      fontsAreLoaded: false
    }

    async componentDidMount() {
      await Font.loadAsync({
        'Montserrat-Light':
          require('./fonts/Montserrat-Light.ttf')
      })

      this.setState({fontsAreLoaded: true})
    }

    render() {
        const props = this.props;
      if (this.state.fontsAreLoaded) {
        return (
            <View style={styles.wrapper}>
                <View style={styles.main}>

                    {this._renderNumberKeys()}

                    <View style={styles.row}>
                        {this._renderDotKey()}

                        <TouchableHighlight
                            underlayColor={BG_COLOR}
                            style={keyStyle.wrapper}
                            onPress={this._onPress.bind(this, '0')}
                        >
                            <View style={[keyStyle.bd, this._disableBorder()]}>
                                <Text style={keyStyle.mainText}>0</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor={this._clearBtnUnderlayColor()}
                            style={[keyStyle.wrapper, this._disableClearButtonBackground()]}
                            onPress={this._onPress.bind(this, 'del')}
                            onLongPress={this._clearAll.bind(this)}
                        >
                            <View style={[keyStyle.bd, this._disableBorder()]}>
                                <Text style={keyStyle.mainText}>del</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
      }
      return null;
    }
}


Keyboard.propTypes = {
    // 是否显示小数点符号
    keyboardType: PropTypes.oneOf(['number-pad', 'decimal-pad']),
    // 点击键盘按键
    onKeyPress: PropTypes.func,
    // 点击删除按钮
    onDelete: PropTypes.func,
    // 长按删除按钮
    onClear: PropTypes.func
};


Keyboard.defaultProps = {
    keyboardType: 'number-pad',
    onKeyPress: () => {},
    onDelete: () => {},
    onClear: () => {}
};


export default Keyboard;
