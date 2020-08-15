class Logger {
  // constructor () {}

  public info (logText: string): void {
    console.log(new Date().toLocaleString() + ' INFO: ' + logText)
  }

  public debug (logText: string): void {
    console.log(new Date().toLocaleString() + ' DEBUG: ' + logText)
  }

  public error (logText: string): void {
    console.log(new Date().toLocaleString() + ' ERROR: ' + logText)
  }
}

export default new Logger()
