import styled from '@emotion/styled'
import { useRef, useState } from 'react'

const UploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`

const Input = styled.input`
display: none;
`

const Upload = ({ children, droppable, name, accept, value, onChange, ...props }) => {
  const [file, setFile] = useState(value)
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  const handleFileChange = (e) => {
    const files = e.target.files
    const changedFile = files[0] // 여러개를 선택해도 첫번째 파일만 받도록
    setFile(changedFile)
    onChange && onChange(changedFile)
  }

  const handleChooseFile = () => {
    inputRef.current.click()
  }

  const handleDragEnter = (e) => {
    if (!droppable) return
    e.preventDefault(); // 브라우저 기본 이벤트 제한
    e.stopPropagation() // 부모나 자식컴포넌트로 이벤트전파를 제한
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true)
    }
  }
  const handleDragLeave = (e) => {
    if (!droppable) return
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }
  const handleDragOver = (e) => {
    if (!droppable) return // handleDragOver를 설정하지 않으면 드래그 시 새창이 열리게 된다.
  }
  const handleFileDrop = (e) => {
    if (!droppable) return
    e.preventDefault()
    e.stopPropagation()
    const files = e.dataTransfer.files
    const changedFile = files[0]
    setFile(changedFile)
    onChange && onChange(changedFile)
    setDragging(false)
  }


  return (
    <UploadContainer onClick={handleChooseFile}
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}
    >
      <Input ref={inputRef} type="file" name={name}
        accept={accept} onChange={handleFileChange} />
      {typeof children === 'function' ? children(file, dragging) : children}
    </UploadContainer>
  )
}

export default Upload
