/* eslint-disable import/prefer-default-export, react/prop-types */

import React from 'react';
import TopLayout from './TopLayout';

require("typeface-roboto")


export const wrapRootElement = ({
    element
}) => {
    return <TopLayout > {
        element
    } < /TopLayout>;
};