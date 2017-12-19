
const Logging = require('js-logging');
const ColorConfig = {
    filters: {
      debug: 'white',
      info: 'yellow',
      notice: 'green',
      warning: 'blue',
      error: 'red',
      critical: 'red',
      alert: 'cyan',
      emergency: 'magenta'
    }
  }

class Logger {

  /**
   * Constructor to initialize the logger lib
   */
  constructor() {
    this.logger = Logging.console(ColorConfig);
  }

  /**
   * Function to call the logger by parameters
   * @param {String} level - Param to call the level of log.
   * @param {String} message - Param to pass the message to be logged.
   */
  log(level = 'debug', message = '') {
    this.logger[level](message);
  }
}

module.exports = new Logger()