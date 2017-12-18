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
   *Function to normalize visual config data based on user agent caller and return a NEW object
   * @param {Object} data - to normalize
   * @param {Object} headers - header of request
   * @return {Object} data -normalized data
  */
  normalize(data = {}, headers) {
    try {
      const md = new this.mobileDetector(headers['user-agent']);

      if(md.mobile()) {
        this.normalizeMobileComponents(data);
      } else {
        this.normalizeDesktopComponents(data);
      }
    } catch (error) {
      console.log(`NormalizeVisualData.normalize \n Error: ${error.message}` ); // TODO - refac to logger
    }

  };

  /**
   * Function to remove all components non mobile
   * @param {Object} data - visualSettings
   */
  normalizeMobileComponents(data = {}) {
    try {
      data.components = data.components.filter(element => {
        return element.mobile ? element : null;
      });
    } catch (error) {
      console.log(`NormalizeVisualData.normalizeMobileComponents \n Error: ${error.message}` ); // TODO - refac to logger
    }
  };

    /**
   * Function to remove all components non desktop
   * @param {Object} data - visualSettings
   */
  normalizeDesktopComponents(data = {}) {
    try {
      data.components = data.components.filter(element => {
        return !element.mobile ? element : null;
      });
    } catch (error) {
      console.log(`NormalizeVisualData.normalizeMobileComponents \n Error: ${error.message}` ); // TODO - refac to logger
    }
  };
};
module.exports = NormalizeVisualData;