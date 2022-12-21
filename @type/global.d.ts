type Card = {
  name: string;
  atk?: number;
  def?: number;
  special?: any; //!後で変更する
  hungry: number;
  bad:number;
};

type status={
  hp:number;
  hungry:number;
  atk:number;
  def:number;
  energy:number;
}