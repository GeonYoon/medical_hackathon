import React, { PureComponent } from 'react';

const bmiTable = [
  { value: 17.5, label: '저체중', color: '#00B050' },
  { value: 22.5, label: '정상', color: '#92D050' },
  { value: 25.0, label: '과체중', color: '#FFFF00' },
  { value: 30.0, label: '경도비만', color: '#FFC000' },
  { value: 50.0, label: '고도비만', color: '#FF0000' }
]

class BMIGraph extends PureComponent {
  render() {
    const indicatorValue = this.props.value
    const rects = []
    const maxValue = bmiTable[bmiTable.length - 1].value

    for(let i = 0 ; i < bmiTable.length ; i++) {
      const prevValue = (i == 0) ? 0 : bmiTable[i - 1].value
      const {value, color, label} = bmiTable[i]
      rects.push(<rect x={prevValue} y='1' width={value - prevValue} height='1.4' fill={color}></rect>)
      rects.push(<text x={(value + prevValue) / 2} y='2' className='text-bar-label'>{label}</text>)
      rects.push(<text x={value} y='0.8' className='text-bar-value'>{value}</text>)
    }
    return (
      <svg width='100%' viewBox={`0 0 ${maxValue} 4`}>
        <style>
        {`
          .text-bar-label {
            font-size: .8px;
            font-weight: bold;
            text-anchor: middle;
          }

          .text-bar-value {
            font-size: .6px;
            text-anchor: middle;
          }

          .indicator-line {
            stroke: black;
            stroke-width: .3px;
          }

          .indicator-value {
            font-size: 1px;
            font-weight: bold;
            text-anchor: middle;
          }
        `}
        </style>
        { rects }
        <line x1={indicatorValue} y1='0.7' x2={indicatorValue} y2='2.7' className='indicator-line'></line>
        <text x={indicatorValue} y='3.5' className='indicator-value'>{indicatorValue}</text>
      </svg>
    )
  }
}

export default BMIGraph
