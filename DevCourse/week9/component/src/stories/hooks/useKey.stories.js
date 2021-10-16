import useKey from "../../hooks/useKey"

export default {
  title: 'Hook/useKey'
}

export const Default = () => {
  useKey('keydown', 'f', () => {
    alert('F!')
  })

  useKey('keyup', 'q', () => {
    alert('Q!')
  })

  return <>useKey</>
}