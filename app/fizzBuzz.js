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
        return function(output, number) {
            return isDivisibleBy(number, opt.factor) ?
                output + opt.result : output;
        };
    };
    var DefaultNumberRule = function(output, number) {
        return output === '' ? number : output;
    };
    var rules = [
        DivisibleByRule(fizz),
        DivisibleByRule(buzz),
        DefaultNumberRule
    ];
    return {
        say: function(number) {
            return rules.reduce(function(output, rule) {
                return rule(output, number);
            }, '');
        }
    };
})();
