export const isChoose = ref(false);

export function change() {
    isChoose.value = !isChoose.value;
}