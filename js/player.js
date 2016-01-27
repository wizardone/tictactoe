'use strict'

export default class Player {
  constructor (sign, ai = false) {
    this._sign = sign
  }

  image () {
    if (this._sign == 'cross')
      'playX.png'
    else if (this._sign == 'circle')
      'playO.png'
  }

  set sign (sign) {
    this._sign = sign
  }
}

