
class Timer {
  constructor(){
    this.time = null;
  }

  start() {
    this.time = process.hrtime();
  }

  end() {
    return `${process.hrtime(this.time)[1] / 1000000} ms`;
  }

}

module.exports = Timer;
