/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-04-29[14:46:40]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */

import isInteger from 'is-integer';

export const pascal = lines => {
    if (!isInteger(lines) || lines < 1) {
        throw new TypeError('"lines" must be a positive integer');
    }

    let triangle = [
        [1]
    ];

    if (1 === lines) {
        return triangle;
    }

    for (let i = 1; i < lines; ++i) {
        let line = [1];
        let preLine = triangle[i - 1];

        if (preLine.length % 2 === 0) {
            for (let j = 1; j < Math.floor((1 + preLine.length) / 2); ++j) {
                line[j] = (preLine[j - 1] | 0) + preLine[j];
            }
            let mid = preLine[preLine.length / 2 - 1] + preLine[preLine.length / 2];
            let lineR = line.slice().reverse();
            line = line.concat([mid]).concat(lineR);
        } else {
            for (let j = 1; j < (1 + preLine.length) / 2; ++j) {
                line[j] = (preLine[j - 1] | 0) + preLine[j];
            }
            let lineR = line.slice().reverse();
            line = line.concat(lineR);
        }

        triangle.push(line);
    }

    return triangle;

};

const repeat = (n, char) => {
    let ret = [];
    char = [char];

    while (1) {
        if (n & 1) {
            ret.push(...char);
        }
        n >>= 1;
        if (0 === n) {
            return ret;
        }
        char.push(...char);
    }
};

export const printPascal = lines => {
    const triangle = pascal(lines);
    const ret = [];

    for (let i = 0; i < triangle.length; ++i) {
        let line = repeat(triangle.length - 1 - i, '');
        for (let j = 0; j < triangle[i].length; ++j) {
            line.push(triangle[i][j]);
            if (j !== triangle[i].length - 1) {
                line.push('');
            }
        }
        ret.push(line);
    }
    return ret;
};