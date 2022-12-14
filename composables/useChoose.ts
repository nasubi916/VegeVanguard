export const isChoose = ref(true);

export function change() {
    isChoose.value = !isChoose.value;
}