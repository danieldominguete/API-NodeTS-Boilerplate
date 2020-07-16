export class Logger {
   constructor (){}

  public info (logText: string): void {
    console.log(new Date().toLocaleString() + ' info:::::' + logText)
  }

  public debug (logText: string): void {
    console.log(new Date().toLocaleString() + ' debug:::::' + logText)
  }

  public error (logText: string): void {
    console.log(new Date().toLocaleString() + ' error:::::' + logText)
  }
}