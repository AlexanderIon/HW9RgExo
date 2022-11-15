export default class Validator {
  constructor(nameStr) {
    this.nameStr = nameStr;
    // const re = /\-/gmi;
    this.reSignAble = /(?<space>\s+)|(?<kirilica>[А-Яа-я])|(?<sign>[^A-Za-z0-9\\_\\-])/gmi;
    this.reStartAndEnd = /(?<startSign>^[0-9\-\\_])|(?<endSign>[0-9\-\\_]$)|(?<threeDigits>\d{3})/gmi;/// проверка на первый и последний и 898 знак если null запрешенных знаков НЕТ
  }

  validateUserName() {
    // const valSignAble = this.reOne.exec(this.nameStr)
    // const valStartAndEnd = this.reTwo.exec(this.nameStr)
    let errorsList = [this.reSignAble.exec(this.nameStr), this.reStartAndEnd.exec(this.nameStr)];
    errorsList = (errorsList.filter((item) => item != null)).map((el) => el.groups);
    return errorsList;
  }
}

// const validOne = new Validator('Кolya-Ivanov777Smir');
// console.log(validOne.reOne.exec(validOne.nameStr))
// console.log(validOne.reTwo.exec(validOne.nameStr))

// validOne.validateUserName()
// console.log(validOne.validateUserName());
