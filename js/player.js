'use strict'

export default class Player {
  constructor (sign, ai = false) {
    this._sign = sign
    this._name = this.normalizedName();
  }

  imageSrc () {
    if (this._sign == 'cross')
      return 'images/playX.png'
    else if (this._sign == 'circle')
      return 'images/playO.png'
  }

  normalizedName () {
    if (this._sign == 'cross')
      return 'Player 1'
    else if (this._sign == 'circle')
      return 'Player 2'
  }
}
