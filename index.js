const symbol = Symbol('foo')

class Foo {
  constructor() {
    this[symbol] = this[symbol].bind(this)
  }

  async [symbol]() {
  }
}
