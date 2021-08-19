/** while을 쓰지 않고 progress가 100이 되는 기간을 구하는 것 까지는 구현했었지만,
for문을 사용하지 않고는 앞의 값보다 작은 수의 갯수를 찾지 못했습니다...😥
앞부분이 제 코드와 일치하는 것을 보면서 조금만 더 해볼걸 하는 아쉬움이 남네요.
inc를 갯수 세는 것에만 사용할 수 있을거라 생각했는데, count와 period를 이용하여
조건문을 구현하는 것을 보고, 함수를 여러 방법으로 활용할 필요를 느꼈습니다.

함수형 사고를 통해 알고리즘을 짜다 보니,
어떻게 풀어낼 수 있을까 보다 어떻게 계산해야 할까 를 더 생각해보게 되었습니다.
이전이라면 효율성을 생각하지 않고 쉽게 뽑아냈을 period도 계산을 통해 뽑아내는 제 모습을 보고, 
많이 어려웠던 공부였지만 그래도 조금은 배웠구나 싶은 마음이 들었습니다.
*/

const featureCount = periods =>
    reduce(([counts, total_period], period) =>
        total_period < period
            ? [inc(counts, counts.length), period]
            : [inc(counts, counts.length-1), total_period])([[], 0], periods);

const solution = (progresses, speeds) => go(
    zip(progresses)(speeds),
    map(([progress, speed]) => Math.ceil((100 - progress) / speed)),
    featureCount,
    head
);
