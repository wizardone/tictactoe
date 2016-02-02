'use strict'

export default class Player {
  constructor (sign, ai = false) {
    this._sign = sign
  }

  imageSrc () {
    if (this._sign == 'cross')
      return 'images/playX.png'
    else if (this._sign == 'circle')
      return 'images/playO.png'
  }
}
