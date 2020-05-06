function solution(bridge_length, weight, truck_weights) {
    let ans = 0; // 결과 답

    const currentTruckCount = truck_weights.length; // 트럭 개수

    const bridge = new Array(bridge_length).fill(0); // 배열로 된 다리, 0 으로 채우기

    let currentBridgeWeight = 0; // 현재 다리 무게

    const passedTrucks = []; // 다리를 지나온 트럭들

    let target = truck_weights.shift();
    bridge.push(target);
    currentBridgeWeight += target;
    bridge.shift(); // 빼기
    ans = 1;

    while (true) {
        if (passedTrucks.length === currentTruckCount) break;
        ans++; // 시간초 증가
        let target = bridge.shift(); // 빼기

        if (target !== 0) {
            // 트럭님 나오시는 상태
            currentBridgeWeight -= target;
            passedTrucks.push(target);
        }

        target = truck_weights.shift();

        if (currentBridgeWeight + target <= weight) {
            // 들어갈 수 있는 상황
            bridge.push(target);
            currentBridgeWeight += target;
        } else {
            bridge.push(0);
            truck_weights.unshift(target);
        }
    }

    return ans;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
/*

    다리안에 있는 내용물을 0으로 채운다.
    그리고 다리를 지나갈 트럭이 있으면 넣어주고, 아니면 0 을 빼주고,
    0을 채워준다.

 */