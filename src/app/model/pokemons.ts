
export class Pokemons{
  private _numPokemon:number;
  private _nom:string;
  private _type?: string[];
  private _poids:number;
  private _taille:number;
  private _img:string;
  private _categories:string;


  constructor(numPokemon: number, nom: string, type: string[], poids: number, taille: number, img: string, categories: string) {
    this._numPokemon = numPokemon;
    this._nom = nom;
    this._type = type;
    this._poids = poids;
    this._taille = taille;
    this._img = img;
    this._categories = categories;
  }

  get numPokemon(): number {
    return this._numPokemon;
  }

  set numPokemon(value: number) {
    this._numPokemon = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get type(): string[]|undefined{
    return this._type;
  }

  set type(value: string[]|undefined) {
    this._type = value;
  }

  get poids(): number {
    return this._poids;
  }

  set poids(value: number) {
    this._poids = value;
  }

  get taille(): number {
    return this._taille;
  }

  set taille(value: number) {
    this._taille = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get categories(): string {
    return this._categories;
  }

  set categories(value: string) {
    this._categories = value;
  }
}
