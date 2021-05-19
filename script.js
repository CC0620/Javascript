// let state = true;
// while(state) {
//     let random = Math.floor(Math.random() * 10);
//     if(random === 3) state = false;
//     console.log(random);
// }
// for( let i=0; i<100; i++) {
//     console.log(i)
//     if(i ===50) break;
// }

while(true) {
let command = prompt('敵が現れた！([1]攻撃 [2]逃げる)');
let result = Number(command)
let enemy = 10;
let attackpoint = Math.floor(Math.random() * 10);

if(command === '1' ) {

enemy = enemy - attackpoint;
console.log(attackpoint + 'の攻撃！');
if (enemy<=0){
    console.log('敵を倒した！');
    break;
  }
  console.log('敵の体力は残り' + enemy + 'です');

  } else if(command === '2'){

    console.log('無事に逃げました');
    break; 
  }
}



console.log('ゲーム終了');



