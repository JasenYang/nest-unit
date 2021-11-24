export class User {
  private _name: string;
  private _code: string;

  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get code() {
    return this._code;
  }
  set code(code: string) {
    this._code = code;
  }
}
