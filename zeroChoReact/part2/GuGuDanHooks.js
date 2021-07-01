'use strict';

const GuGuDan = () => { // hooks 방식
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputRef = React.useRef(null); // hooks에서 ref를 사용하는 방식. null위치는 초기값
  
  const onChangeInput = (e) =>setValue(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
        setResult('정답: ' + value);//result: '정답'+ prevState.value, class 방식
        setFirst(Math.ceil(Math.random()*9));//first: Math.ceil(Math.random()*9),  class 방식
        setSecond(Math.ceil(Math.random()*9));// second: Math.ceil(Math.random()*9),
        setValue('') // value: '',
        inputRef.current.focus(); // hooks 방식  
      }
      // this.input.focus(); class 방식
     else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
      }
      // this.input.focus();
    };

    console.log("렌더링"); // state가 바뀔때마다 함수 전체가 다시 실행되기 때문에 좀 더 느릴 수 있음
  return (
    <>
      <div>{first} 곱하기 {second}는?</div>
      <form onSubmit = {onSubmitForm}>
        <input ref={inputRef} type = "number"  onChange= {onChangeInput} value={value} />
        <button>입력</button>
      </form>
      <div id="result">{result}</div>
      </>
  )
  }
  // class GuGuDan extends React.Component { // class 방식
  // this.state = { 
    //   result: '',
    //   first: Math.ceil(Math.random() *9),
    //   second: Math.ceil(Math.random() *9),
    //   value: '',
    // }};