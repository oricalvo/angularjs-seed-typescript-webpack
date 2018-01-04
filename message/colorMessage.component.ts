import { appModule } from '../app/app.module';
import template from './colorMessage.component.html';
import './colorMessage.component.css';
import * as angular from 'angular';

// import * as rgbHex from 'rgb-hex';

export class AppComponent {
    bgColor: string;

    constructor() {
        const rgbColor =
            window.getComputedStyle(document.body, null)
                .getPropertyValue('background-color');
        this.bgColor = rgb2hex(rgbColor);
    }

    rndColor() {
        const rgbColor = `rgb(${getRandom256()}, ${getRandom256()}, ${getRandom256()})`;
        document.body.style.backgroundColor = rgbColor;
        this.bgColor = rgb2hex(rgbColor);
    }
}

const rgb2hex = (rgb: string): string => {
    const res = '#' + rgb.substr(4, rgb.indexOf(')') - 4)
        .split(',')
        .map((color) => pad(parseInt(color).toString(16), 2))
        .join('');
    return res;
}

const getRandom256 = (): number => {
    return Math.floor((Math.random() * 256) + 0);
}

const padLeft = function (str: string, paddingChar: string, length: number) {
    if ((str.length < length) && (paddingChar.toString().length > 0)) {
        for (var i = 0; i < (length - this.length); i++) {
            str = paddingChar.toString().charAt(0).concat(str);
        }
    }
    return str;
}

const pad = (str: string, size: number) => {
    while (str.length < size) {
        str = '0' + str;
    }
    return str;
}