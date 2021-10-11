import React from 'react'

const Spacer = ({ children, type = 'horizontal', size = 8, ...props }) => {
  const spacerStyle = {
    ...props.style,
    display: type === 'vertical' ? 'block' : 'inline-block',
    verticalAlign: type === 'horizontal' ? 'middle' : undefined
  }

  const nodes = React.Children.toArray(children) // 자식요소 직접접근
    .filter(element => React.isValidElement(element)) // 검증
    .map((element, index, elements) => {
      return React.cloneElement(element, {
        ...element.props,
        style: {
          ...element.props.style,
          marginRight: type === 'horizontal' && index !== elements.length - 1 ? size : undefined,
          marginBottom: type === 'vertical' && index !== elements.length - 1 ? size : undefined
        }
      })
    })

  return (
    <div {...props} style={spacerStyle}>
      {nodes}
    </div>
  )
}

export default Spacer