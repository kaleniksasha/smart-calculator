class SmartCalculator {
  constructor(initialValue) {
    this.expression = [initialValue];
  }

  add(number) {
    this.expression.push('+');
    this.expression.push(number);
    return this;
  }

  subtract(number) {
    this.expression.push('-');
    this.expression.push(number);
    return this;
  }

  multiply(number) {
    this.expression.push('*');
    this.expression.push(number);
    return this;
  }

  devide(number) {
    this.expression.push('/');
    this.expression.push(number);
    return this;
  }

  pow(number) {
    this.expression.push('**');
    this.expression.push(number);
    return this;
  }

  valueOf() {
    let expression = this.expression;

    for (let i = expression.length; i > 0; i--) {
      if (expression[i - 1] === '**') {
        expression.splice(i - 2, 3, expression[i - 2] ** expression[i]);
        i += 1;
      }
    }

    for (let i = 0; i < expression.length - 1; i++) {
      if (expression[i + 1] === '*' || expression[i + 1] === '/') {
        expression.splice(
          i,
          3,
          expression[i + 1] === '*'
            ? expression[i] * expression[i + 2]
            : expression[i] / expression[i + 2]
        );
        i -= 1;
      }
    }

    for (let i = 0; i < expression.length - 1; i++) {
      if (expression[i + 1] === '+' || expression[i + 1] === '-') {
        expression.splice(
          i,
          3,
          expression[i + 1] === '+'
            ? expression[i] + expression[i + 2]
            : expression[i] - expression[i + 2]
        );
        i -= 1;
      }
    }

    return expression[0];
  }
}

module.exports = SmartCalculator;
