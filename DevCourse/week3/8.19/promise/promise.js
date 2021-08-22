const delay = (delayTime) => {
  return new Promise(resolve => setTimeout(resolve, delayTime))
}
/*
const work = () => {
  console.log('work run');
  delay(1000)
    .then(() => {
      console.log('work 1 complete.');
      return delay(1000)
    })
    .then(() => {
      console.log('work 2 complete.');
      return delay(1000)
    })
    .then(() => {
      console.log('work3 complete')
      return delay(1000);
    })
    .then(() => {
      console.log('work all complete!');
    })
  
    console.log('work running..');
}
work()
*/
// async await 사용시
const work = async () => {
  console.log('work run');

  await delay(1000)
  console.log('work 1 complete.');

  await delay(1000)
  console.log('work 2 complete.');

  await delay(1000)
  console.log('work 3 complete')

  await delay(1000)
  console.log('work all complete!');
}
work()