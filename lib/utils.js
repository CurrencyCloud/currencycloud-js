/**
 * @module utils
 */

'use strict';

module.exports = {
  camelize: function (obj) {
    if (!obj || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(this.camelize, this);
    }

    var camel = {};
    for (var key of Object.keys(obj)) {
      var camelKey = key.replace(/([_][a-z0-9])/g, function (match) {
        return match[1].toUpperCase();
      });
      camel[camelKey] = this.camelize(obj[key]);
    }
    return camel;
  },

  snakeize: function (obj) {
    if (!obj || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(this.snakeize, this);
    }

    var snake = {};
    for (var key of Object.keys(obj)) {
      var snakeKey = key.replace(/([_]?[A-Z0-9]+)/g, function (match) {
        if (match.startsWith('_')) {
          return match.toLowerCase();
        }
        else {
          return '_' + match.toLowerCase();
        }
      });
      snake[snakeKey] = this.snakeize(obj[key]);
    }
    return snake;
  },

  toYAML: function (obj) {
    var convert = function (smth, indent) {
      var gettype = function (smth) {
        if (Array.isArray(smth)) {
          return 'array';
        }
        else if (smth && typeof smth === 'object') {
          return 'object';
        }
        else {
          return 'value';
        }
      };

      var converter = {
        value: function () {
          return smth;
        },

        array: function () {
          if (smth.length === 0) {
            return '[]';
          }

          var yaml = '';

          for (var item of smth) {
            var itemYaml = convert(item, indent.concat('  '));
            var itemShift = '\n' + indent + '- ';

            if (gettype(item) !== 'value') {
              itemYaml = itemYaml.substring(itemShift.length);
            }

            yaml += itemShift + itemYaml;
          }

          return yaml;
        },

        object: function () {
          if (Object.keys(smth).length === 0) {
            return '{}';
          }

          var yaml = '';

          for (var key of Object.keys(smth)) {
            var item = smth[key];
            var itemYaml;

            if (gettype(item) === 'array') {
              itemYaml = convert(item, indent);
            }
            else {
              itemYaml = convert(item, indent.concat('  '));
            }

            yaml += '\n' + indent + key + ': ' + itemYaml;
          }

          return yaml;
        }
      };

      var type = gettype(smth);
      var converterFunc = converter[type];

      return converterFunc();
    };

    return '---' + convert(obj, '');
  }
};