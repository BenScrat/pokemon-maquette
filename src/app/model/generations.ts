export class Generations{
  private _numGen: number;

  constructor(numGen: number) {
    this._numGen = numGen;
  }

  get numGen(): number {
    return this._numGen;
  }

  set numGen(value: number) {
    this._numGen = value;
  }
}
