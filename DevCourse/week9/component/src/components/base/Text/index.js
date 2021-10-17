import PropTypes from "prop-types"
import "./Text.css"

const Text = ({ 
  children,
  block, // 태그
  paragraph, // 태그
  size, 
  strong,
  underline,
  delete:del, // delete는 예약어가 있기 때문에 delete:del 으로 처리
  color,
  mark, // 하이라이트 표시
  code, // 백틱으로 텍스트를 넣을 때
  ...props
}) => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span' // 태그의 동적사용

  const fontStyle = {
    fontWeight: strong ? 'bold' : undefined,
    fontSize: typeof size == 'number' ? size : undefined,
    textDecoration: underline ? 'underline' : undefined,
    color,
  }

  if (mark) {
    children = <mark>{children}</mark>
  }
  if (code) {
    children = <code>{children}</code>
  }
  if (del) {
    children = <del>{children}</del>
  }

  return (
  <Tag className={typeof size === 'string' ? `Text--size-${size}` : undefined }
       style={{ ...props.style, ...fontStyle }}
       {...props}>
    {children}
    </Tag>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 
  block: PropTypes.bool,
  paragraph: PropTypes.bool,
  strong: PropTypes.bool,
  underline: PropTypes.bool,
  delete: PropTypes.bool,
  mark: PropTypes.bool,
  code: PropTypes.bool,
  color: PropTypes.string,
}

export default Text