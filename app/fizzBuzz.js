var fizzBuzz = (function() {
    var fizz = {
        factor: 3,
        result: 'Fizz'
    };
    var buzz = {
        factor: 5,
        result: 'Buzz'
    };
    var isDivisibleBy = function(number, factor) {
        return (number % factor === 0);
    };
    var DivisibleByRule = function(opt) {
        return function(number) {
            return isDivisibleBy(number, opt.factor) ?
                opt.result : '';
        };
    };
    var rules = [
        DivisibleByRule(fizz),
        DivisibleByRule(buzz)
    ];
    return {
        say: function(number) {
            var output = '';
            for (var i = 0, l = rules.length; i < l; i++) {
                output += rules[i](number);
            }
            return (output === '') ? number : output;
        }
    };
})();
