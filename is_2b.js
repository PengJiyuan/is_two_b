/*
 *  ///////////////     ///////////_\\
 *              //      ||           \\
 *             //       ||           ||
 *            //        ||           ||
 *           //         ||           ||
 *          //          ||           //
 *         //           ||/////////_\\
 *        //            ||           \\
 *       //             ||            ||
 *      //              ||            ||
 *     //               ||            ||
 *    //                ||            ||
 *   //                 ||            ||
 *  ///////////////     ||/////////////
 *
 *
 */

/**
 * @param something {Array | String}
 * @returns {object}
 */

var languages = require('./languages.js');

var is_2b = function(something) {

  var strict = true;
  var isLog = false;
  var language = 'pure';
  var o_p_t = Object.prototype.toString;
  var isII = function(p) {
    return o_p_t.call(p) === '[object Array]';
  }
  var isO = function(j) {
    return o_p_t.call(j) === '[object Object]';
  }
  var isS = function(y) {
    return o_p_t.call(y) === '[object String]';
  }

  return {

    two_b: function() {
      return ( isII(something) && this.II() ) || ( isS(something) && this.S() );
    },

    // Array
    II: function() {
      let ret = strict ? something.join('').toLowerCase() === 'bb' : this.unstrictII();
      this.consolelog(ret);
      return ret;
    },

    unstrictII: function() {
      var IItoString = something.join('');
      var reg = /[Bb6]{1}\w*[Bb6]{1}/;
      return reg.test(IItoString);
    },

    // String
    S: function() {
      let ret = strict ? something.toLowerCase() === 'bb' : this.unstrictS();
      this.consolelog(ret);
      return ret;
    },
    unstrictS: function() {
      var reg = /[Bb6]{1}\w*[Bb6]{1}/;
      return reg.test(something);
    },

    unstrict: function() {
      strict = false;
      return this;
    },

    consolelog: function(bool) {
      if(isLog) {
        console.log(bool ? languages[language][0] : languages[language][1]);
      }
    },

    log(lang) {
      isLog = true;
      for(var l in languages) {
        if(lang === l) {
          language = lang;
        }
      }
      return this;
    }

  }
}

module.exports = is_2b;
