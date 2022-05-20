import styled from '@emotion/styled'

const Icon = styled.i`
  display: inline-block;
  vertical-align: middle;
`

const Spinner = ({ size = 24, color = '#919EAB', loading = true, ...props }) => {
  const sizeStyle = {
    width: size,
    height: size
  }

  return loading ?
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" style={sizeStyle}>
        <path fill={color} d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
          <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.8s"
            repeatCount="indefinite" />
        </path>
      </svg>
    </Icon > : null
}

export default Spinner