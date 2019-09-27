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

export default class ProgressBar extends React.Component<ICircularProgressBarProps, ICircularProgressBarState>{
    constructor(Props) {
        super(Props);
        this.state = {
            sqSize: this.props.sqSize | 0,
            strokeWidth: this.props.strokeWidth | 0,
            percentage: this.props.percentage | 10
        };
    }
    render() {
        const sqSize = this.props.sqSize;
        const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * this.props.percentage / 100;

        return (
            <svg
                width={this.props.sqSize}
                height={this.props.sqSize}
                fill={'#ffffff'}
                viewBox={viewBox}>
                <circle
                    cx={this.props.sqSize / 2}
                    cy={this.props.sqSize / 2}
                    r={radius}
                    stroke={'#fdc726'}
                    fill={'#0000'}
                    strokeWidth={`${this.props.strokeWidth + 2}px`}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }} />
                <circle
                    cx={this.props.sqSize / 2}
                    cy={this.props.sqSize / 2}
                    r={radius - this.props.strokeWidth - 2}
                    fill={'#61caf3'}
                />
                <text
                    x='50%'
                    y='50%'
                    dy='.3em'
                    fontSize='30px'
                    fontWeight='bold'
                    textAnchor='middle'>
                    {`${this.props.percentage}%`}
                </text>
            </svg>
        );
    }

}