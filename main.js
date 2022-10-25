const 굴리기_버튼 = document.querySelector('#rollButton');
const 사진_모음 = ['images/dice-01.svg', 'images/dice-02.svg', 'images/dice-03.svg', 'images/dice-04.svg', 'images/dice-05.svg', 'images/dice-06.svg'];

const 주사위들 = document.querySelectorAll('img');

const 주사위_1번 = document.querySelector('#die-1');
const 주사위_2번 = document.querySelector('#die-2');
const 결과 = document.querySelector('#total');

굴리기_버튼.addEventListener('click', 주사위_굴리기);

function 주사위_굴리기() {
  주사위들.forEach((주사위) => {
    주사위.classList.add('shake');
  });

  setTimeout(() => {
    주사위들.forEach((주사위) => {
      주사위.classList.remove('shake');
    });

    const 주사위_1번_값 = Math.floor(Math.random() * 6);
    const 주사위_2번_값 = Math.floor(Math.random() * 6);
    const 주사위_합 = 주사위_1번_값 + 주사위_2번_값 + 2;

    주사위_1번.setAttribute('src', 사진_모음[주사위_1번_값]);
    주사위_2번.setAttribute('src', 사진_모음[주사위_2번_값]);

    결과.innerHTML = `주사위 합은 ${주사위_합}`;
  }, 1000);
}

주사위_굴리기();
