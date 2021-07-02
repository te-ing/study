const React = require('react');
const { useState, useRef} = React; // React.useState('태중') 을 useState('태중')으로 줄일 수 있음

const WordRelay = () => {
  const [word, setWord] = useState('태중');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onChangeInput = (e) =>setValue(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length-1]===value[0]) {
      setResult('정답입니다');
      setWord(value);
      setValue('');
    }
    else {
      setResult('틀렸습니다');
      setValue('');
    }
  }

  return( 
    <>
      <div>{word}</div>
      <form onSubmit = {onSubmitForm}>
        <input  onChange = {onChangeInput} value = {value} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  )
}

module.exports = WordRelay; // client.jsx에서 불러올 수 있도록 만들어줌