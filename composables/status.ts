export const status: status = reactive({
	hp: 200,
	hungry: 0,
	atk: 0,
	def: 0,
})

//仮で作成したCalc.tsで呼び出す予定
export const damage = () => status.hp -= 10;
export const eat = () => status.hungry += 10;
export const life=ref('life');

//?turn.tsの方に移動するとエラー吐く理由がわからない
export const turnHungry=()=>status.hungry -= 10;
export const checkHP=()=> (status.hp<=0) ? life.value='dead':life.value='live'