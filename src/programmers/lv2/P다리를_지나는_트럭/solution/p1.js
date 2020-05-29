function solution(bridge_length, weight, truck_weights) {
    let ans = 0;
    const bridge = Array(bridge_length).fill(0);
    const truckSize = truck_weights.length;
    const leavedTrucks = []; // 지나온 트럭

    let bridgeCurrentWeight = 0; // 다리 현재 무게

    while (leavedTrucks.length !== truckSize) {
        const nextTruck = truck_weights.shift();
        const leavedTruck = bridge.shift();
        bridgeCurrentWeight -= leavedTruck; // 나간 무게 빼주고

        if (bridgeCurrentWeight + nextTruck <= weight) {
            bridge.push(nextTruck);
            bridgeCurrentWeight += nextTruck;
        } else {
            truck_weights.unshift(nextTruck); // 다시 집어 넣고
            bridge.push(0);
        }

        if (leavedTruck !== 0) {
            leavedTrucks.push(leavedTruck);
        }

        ans++;
    }

    return ans;
}

export default solution;

/*
    https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
 */