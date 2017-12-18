'use strict'

class NormalizeVisualData {

  /**
   * constructor method
   * @param {*} mobileDetector - dependencies injection of filter lib
   */
  constructor(mobileDetector = null) {
    this.mobileDetector = mobileDetector;
  }

  /**
   *function to normalize visual config data based on user agent caller
   * @param {Object} data - to normalize
   * @param {Object} headers - header of request
   * @return {Object} data -normalized data
  */
  normalize(data = {}, headers) {
    const md = new this.mobileDetector(headers['user-agent']);
    return data;
  };
};
module.exports = NormalizeVisualData;