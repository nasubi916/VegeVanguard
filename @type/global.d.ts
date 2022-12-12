type Details = {
  name: string;
  atk?: number;
  def?: number;
  special?: any; //!後で変更する
  hungry: number;
};
type Card = { [key: number]: Details };