import React from 'react'
import * as S from './ProductQualityController.style'
import Proptypes from 'prop-types'
export default function ProductQualityController({ onChange, max, value }) {
  const handleChange = value => {
    let _value = Number(value)
    if (_value > max) {
      _value = max
    } else if (_value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
  }
  const increase = () => {
    let _value = value + 1
    if (_value > max) {
      _value = max
    }
    onChange && onChange(_value)
  }
  const decrease = () => {
    let _value = value - 1
    if (_value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
  }
  return (
    <S.ProductQualityController>
      <S.ProductQualityButton onClick={decrease}>
        <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon ">
          <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
        </svg>
      </S.ProductQualityButton>
      <S.ProductQualityInput onChange={handleChange} value={value} />
      <S.ProductQualityButton onClick={increase}>
        <svg
          enableBackground="new 0 0 10 10"
          viewBox="0 0 10 10"
          x={0}
          y={0}
          className="shopee-svg-icon icon-plus-sign"
        >
          <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
        </svg>
      </S.ProductQualityButton>
    </S.ProductQualityController>
  )
}
ProductQualityController.propTypes = {
  onChange: Proptypes.func,
  max: Proptypes.number,
  value: Proptypes.number
}
