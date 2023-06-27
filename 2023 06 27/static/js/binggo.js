// 빙고판 크기
const size = 5;

// 초기화 함수
function initialize() {
    // 빙고판 요소 가져오기
    const bingoBoard = document.getElementById('bingo-board');

    // 빙고판 생성
    for (let i = 0; i < size; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('td');
            cell.setAttribute('id', `cell-${i}-${j}`);
            cell.addEventListener('click', cellClicked);
            row.appendChild(cell);
        }
        bingoBoard.appendChild(row);
    }

    // 숫자 추가
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            const number = i * size + j + 1;
            cell.innerText = number;
        }
    }
}

// 셀 클릭 이벤트 핸들러
function cellClicked(event) {
    const cell = event.target;
    cell.style.backgroundColor = 'red';
    cell.removeEventListener('click', cellClicked);
}

// 초기화 함수 호출
initialize();