const calculator = (() => {
  function add(a, b) {
    return Number(a) + Number(b);
  }
  function subtract(a, b) {
    return Number(a) - Number(b);
  }
  function divide(a, b) {
    return Number(a) / Number(b);
  }
  function multiply(a, b) {
    return Number(a) * Number(b);
  }

  return { add, subtract, divide, multiply };
})();

export default calculator;
