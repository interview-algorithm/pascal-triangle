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
        let mid;

        if (preLine.length % 2 === 0) {
            mid = preLine.length / 2;
        } else {
            mid = Math.ceil(preLine.length / 2);
        }
        for (let j = 1; j < preLine.length + 1; ++j) {
            line[j] = (preLine[j - 1]|0) + (preLine[j]|0);
        }
        triangle.push(line);
    }

    return triangle;

};