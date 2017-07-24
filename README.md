# numpad
number pad react native NPM package by Elizabeth Flournoy and Tasman Drake

Based on the NPM package [react-native-keyboard](https://github.com/beefe/react-native-keyboard) by beefe. See copyright and instructions for installation for that package below:
The MIT License (MIT)

Copyright (c) 2016 beefe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



# react-native-keyboard
A numeric keyboard component.

![ios demo](./doc/ios.png) ![android demo](./doc/android.png)

## Install
1. npm install react-native-keyboard --save
2. import Keyboard from 'react-native-keyboard'


## Example
```javascript
'use strict';

import React, {View, Text, StyleSheet} from 'react-native';
import Keyboard from 'react-native-keyboard';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        model.onChange((model) => {
            this.setState({text: model.getKeys().join('')});
        });
    }

    _handleClear() {
        model.clearAll();
    }

    _handleDelete() {
        model.delKey();
    }

    _handleKeyPress(key) {
        model.addKey(key);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Text style={styles.text}>{this.state.text}</Text>
                </View>    
                <Keyboard
                    keyboardType="decimal-pad"
                    onClear={this._handleClear.bind(this)}
                    onDelete={this._handleDelete.bind(this)}
                    onKeyPress={this._handleKeyPress.bind(this)}
                />
            </View>
        );
    }
}
```

## Props

#### keyboardType
Type: enum('number-pad', 'decimal-pad');

#### onKeyPress
Type: func


#### onDelete
Type: func


#### onClear
Type: func
