//ホストをA、ゲストをBと仮称する
export const turn = ref(0);

export const rdyA = ref(false);
export const rdyB = ref(false);

export const btnA = () => {
  if (rdyA.value) {
    rdyA.value = false;
  } else {
    rdyA.value = true;
  }
  both();
};

export const btnB = () => {
  if (rdyB.value) {
    rdyB.value = false;
  } else {
    rdyB.value = true;
  }
  both();
};

export const both = () => {
  if (rdyA.value && rdyB.value) {
    turn.value++;
    rdyA.value = false;
    rdyB.value = false;
  }
};
