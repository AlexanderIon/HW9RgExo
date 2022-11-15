import Validator from '../classesForIndex.js';

test('test of created Validator', () => {
  const testVal = new Validator('TestName');
  const SignAble = /(?<space>\s+)|(?<kirilica>[А-Яа-я])|(?<sign>[^A-Za-z0-9\\_\\-])/gim;
  const StartAndEnd = /(?<startSign>^[0-9\-\\_])|(?<endSign>[0-9\-\\_]$)|(?<threeDigits>\d{3})/gmi;
  const res = [testVal.nameStr, testVal.reSignAble, testVal.reStartAndEnd];
  const testOut = ['TestName', SignAble, StartAndEnd];
  expect(res).toEqual(testOut);
});

const dataListForTest = [
  ['GOOD Name', 'Name01_Good-for_Test', []],
  ['Name with space', 'Name with space', [
    {
      space: ' ',
      kirilica: undefined,
      sign: undefined,
    }]],
  ['Banned the first sign ', '_startWithError', [
    {
      startSign: '_',
      endSign: undefined,
      threeDigits: undefined,
    }]],
  ['Banned the end sign', 'test0', [
    {
      startSign: undefined,
      endSign: '0',
      threeDigits: undefined,
    }]],
  ['three numbers and one letter of rus', 'Кolya-Ivanov777Smir', [
    {
      space: undefined,
      kirilica: 'К',
      sign: undefined,
    },
    {
      startSign: undefined,
      endSign: undefined,
      threeDigits: '777',
    }]]];
const handl = test.each(dataListForTest);
handl('test with %s', (testname, nametest, testOut) => {
  const testName = new Validator(nametest);
  expect(testName.validateUserName()).toEqual(testOut);
});
