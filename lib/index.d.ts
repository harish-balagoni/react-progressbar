import * as React from 'react';
interface ICircularProgressBarProps {
    sqSize: number;
    strokeWidth: number;
    percentage: number;
}
interface ICircularProgressBarState {
    sqSize: number;
    strokeWidth: number;
    percentage: number;
}
export default class ProgressBar extends React.Component<ICircularProgressBarProps, ICircularProgressBarState> {
    constructor(Props: any);
    render(): JSX.Element;
}
export {};
