const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.cipheringArray = []
    this.reverse = reverse
  }
  getKeyForCrypt(initialStr, keyStr) {
    const fullKeyForInitialStr = []
    let countCharWithoutSpace = 0
    for (let i = 0; i < initialStr.length; i++) {
      if (initialStr[i] === ' ') {
        fullKeyForInitialStr.push(' ')
        continue
      } else {
        if (countCharWithoutSpace >= keyStr.length) {
          countCharWithoutSpace = 0
        }
        fullKeyForInitialStr.push(keyStr[countCharWithoutSpace++])
      }
    }
    return fullKeyForInitialStr
  }
  encrypt(str, key) {
    if (!key || !str) {
      throw new Error('Incorrect arguments!')
    }
    const initialStr = this.reverse ? str.split('').map(char => char.toUpperCase()) : str.split('').reverse().map(char => char.toUpperCase())
    const keyStr = this.reverse ? key.split('').map(char => char.toUpperCase()) : key.split('').reverse().map(char => char.toUpperCase())
    const fullKeyForInitialStr = this.getKeyForCrypt(initialStr, keyStr)

    this.cipheringArray = initialStr.map((char, index) => {
      if (char.match(/[^A-Z]/)) {
        return char
      }
      const lastCodeChartZ = 90
      const codeChar = char.charCodeAt(0)
      const codeCharKey = fullKeyForInitialStr[index].charCodeAt(0) - 65
      if (codeChar + codeCharKey > lastCodeChartZ) {
        return String.fromCharCode(65 + Math.abs(((codeChar + codeCharKey)) - 90) - 1)
      } else {
        return String.fromCharCode(codeChar + codeCharKey)
      }
    })
    return this.cipheringArray.join('')
  }
  decrypt(str, key) {
    if (!key || !str) {
      throw new Error('Incorrect arguments!')
    }
    const cryptedStr = this.reverse ? str.split('') : str.split('').reverse()
    const keyStr = this.reverse ? key.split('').map(char => char.toUpperCase()) : key.split('').reverse().map(char => char.toUpperCase())
    const fullKeyForInitialStr = this.getKeyForCrypt(cryptedStr, keyStr)

    this.cipheringArray = cryptedStr.map((char, index) => {
      if (char.match(/[^A-Z]/)) {
        return char
      }
      const codeCryptChar = char.charCodeAt(0)
      const codeCharKey = fullKeyForInitialStr[index].charCodeAt(0) - 65

      if (codeCryptChar - codeCharKey < 65) {
        return String.fromCharCode(90 - Math.abs(((codeCharKey - codeCryptChar + 65))) + 1)
      } else {
        return String.fromCharCode(codeCryptChar - codeCharKey)
      }
    })
    return this.cipheringArray.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
