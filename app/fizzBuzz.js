var fizzBuzz = (function(fb) {
    fb.fizz = {
        factor: 3,
        result: 'Fizz'
    };
    fb.buzz = {
        factor: 5,
        result: 'Buzz'
    };
    var isDivisibleBy = function(number, factor) {
        return (number % factor === 0);
    };
    fb.DivisibleByRule = function(opt) {
        return function(output, number) {
            return isDivisibleBy(number, opt.factor) ?
                output + opt.result : output;
        };
    };
    fb.DefaultNumberRule = function(output, number) {
        return output === '' ? number : output;
    };
    fb.rules = [
        fb.DivisibleByRule(fb.fizz),
        fb.DivisibleByRule(fb.buzz),
        fb.DefaultNumberRule
    ];
    fb.say = function(number) {
        return fb.rules.reduce(function(output, rule) {
            return rule(output, number);
        }, '');
    };
    return fb;
})(fizzBuzz || {});
