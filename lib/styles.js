'use strict';

import React from 'react';
import { StyleSheet } from 'react-native';
import font from './fonts/Montserrat-Light'

const hairlineWidth = StyleSheet.hairlineWidth;

export const BG_COLOR = '#3a3b3e';


export default StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        backgroundColor: '#3a3b3e',
        width: 300,
    },
    main: {
        flex: 1,
        alignSelf: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 15,
    }
});


export const keyStyle = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: 70,
        backgroundColor: '#3a3b3e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bd: {
        flex: 1,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: hairlineWidth,
        borderRadius: 50,
        borderColor: '#f4e375',
    },
    border: {
      borderColor: '#f4e375'
    },
    mainText: {
        fontSize: 30,
        color: '#f4e375',
        fontFamily: 'Montserrat-Light'
    },
    bg_d2d5dc: {
        backgroundColor: BG_COLOR
    },
    bgLessL: {
      backgroundColor: '#f4e375'
    },
    dot: {
        height: 30,
        fontSize: 60,
        lineHeight: 33
    }
});
