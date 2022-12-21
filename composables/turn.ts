//ホストをA、ゲストをBと仮称する
export const turn = ref(0);

export const endA = ref(false);
export const endB = ref(false);

export const btnA = () => {
  //if文の省略 三項演算子
  endA.value ? (endA.value = false) : (endA.value = true);
    //もっといい方法があるかも
  turnEnd();
};

export const btnB = () => {
  endB.value ? (endB.value = false) : (endB.value = true);
  turnEnd();
};

export const turnEnd = () => {
  if (endA.value && endB.value) {
    turnCount();
    turnHungry();
    checkHP();
    badDec();
  }
};

export const turnCount=()=>{
  turn.value++;
  endA.value = false;
  endB.value = false;
}

export const badDec=()=>{
  hand.forEach((_,index)=>{hand[index].bad--})
}