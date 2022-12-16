//ホストをA、ゲストをBと仮称する
export const turn = ref(0);

export const rdyA = ref(false);
export const rdyB = ref(false);

export const btnA = () => {
  //if文の省略 三項演算子
  rdyA.value ? (rdyA.value = false) : (rdyA.value = true);
  both();
};

export const btnB = () => {
  rdyB.value ? (rdyB.value = false) : (rdyB.value = true);
  both();
};

export const both = () => {
  if (rdyA.value && rdyB.value) {
    turn.value++;
    rdyA.value = false;
    rdyB.value = false;
  }
};
