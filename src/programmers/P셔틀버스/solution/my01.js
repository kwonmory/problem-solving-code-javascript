function makeBusList(n, t, bus, Bus, m) {
    for (let i = 0; i < n; i++) {
        const d = new Date(Date.UTC(2000, 0, 1, 9));
        d.setMinutes(d.getMinutes() + (i * parseInt(t)));
        bus.push(new Bus(d, m));
    }
}

function makePeopleList(timetable, people) {
    for (let i = 0; i < timetable.length; i++) {
        const a = timetable[i].split(':');
        const hour = parseInt(a[0]);
        const min = parseInt(a[1]);

        const d = new Date(Date.UTC(2000, 0, 1, hour, min, 0));

        people.push(d);
    }
}

function poepleAddToBus(bus, people, m) {
    let pos = 0;
    for (let i = 0; i < bus.length; i++) {
        const pbus = bus[i];
        // 버스를 태우는데 만약 버스 인원이 다 차있는지도 고려
        for (let p = pos; p < people.length; p++) {

            // 버스를 태우고
            if (pbus.people.length < m && people[p].getTime() <= pbus.arriveTime) {
                pbus.people.push(people[p]);
                pos++;
            }
        }
    }
}

function Bus(arriveTime) {
    this.arriveTime = arriveTime;
    this.people = [];
}

function solution(n, t, m, timetable) {
    const bus = []; // 버스
    const people = []; // 사람

    // 버스 가공 작업
    makeBusList(n, t, bus, Bus, m);

    // 사람 가공 작업
    makePeopleList(timetable, people);

    // 사람 시간 순으로 정렬하기
    people.sort((a, b) => a.getTime() - b.getTime());

    // 일단 모든 사람 버스에 태우기
    poepleAddToBus(bus, people, m);

    /* 여기서 주인공이 치고 들어가야하는 상황인데
       버스 마지막부터 확인해서 자리가 있는지 체크하고 자리가 있다면 그 버스의 시간을 반환하면 되고
       그런데 버스 마지막에 자리가 없다면 사람 마지막부터 검사해서 그 시간보다 -1 분 해주면 되지 않을까?
     */

    for (let i = bus.length - 1; i >= 0; i--) {
        const nextBus = bus[i];
        let utcHours = nextBus.arriveTime.getUTCHours();
        let utcMinutes = nextBus.arriveTime.getUTCMinutes();

        if (nextBus.people.length < m) {
            return `${utcHours < 10 ? "0" + utcHours : utcHours}:${utcMinutes < 10 ? "0" + utcMinutes : utcMinutes}`;
        } else {
            // 사람 마지막부터 검사해서 그 사람보다 - 1분 해주면 됌
            for (let peoplePosition = nextBus.people.length - 1; peoplePosition >= 0; peoplePosition--) {
                const nextPeople = nextBus.people[peoplePosition];
                nextPeople.setUTCMinutes(nextPeople.getUTCMinutes() - 1); // 마지막 사람보다 1분 빠르게만 하기

                let utcHours = nextPeople.getUTCHours();
                let utcMinutes = nextPeople.getUTCMinutes();
                return `${utcHours < 10 ? "0" + utcHours : utcHours}:${utcMinutes < 10 ? "0" + utcMinutes : utcMinutes}`;
            }
        }
    }
}


/*
9시부터
n 회
t 분 간격으로

먼저 정렬

셔틀버스를 만들고
셔틀 버스를 하나씩 꺼내서 큐에 있는 학생들 중 데리고 갈 수 있는 인원 체크 후
뺴주고,

기존에 인원들이 버스에 탈 수 있는지 체크 하고

버스를 만들고 버스마다 큐를 존재하도록 하고, 그리고 버스에 들어갈 수 있는지 넣어놓기

 */


module.exports = solution;
