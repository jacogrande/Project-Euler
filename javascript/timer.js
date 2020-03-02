
class Timer {
  constructor(){
    this.time = null;
  }

  start() {
    this.time = process.hrtime();
  }

  end() {
    console.log(`Time ellapsed: ${process.hrtime(this.time)[1] / 1000000} ms`);
  }

}

module.exports = new Timer();
