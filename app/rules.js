var fizzBuzz = (function(fb) {
    var isDivisibleBy = function(number, factor) {
        return (number % factor === 0);
    };
    fb.DivisibleByRule = function(opt) {
        return function(output, number) {
            return isDivisibleBy(number, opt.factor) ?
                output + opt.result : output;
        };
    };
    fb.DivisibleByOrContainsRule = function(opt) {
        return function(output, number) {
            return isDivisibleBy(number, opt.factor) ||
                number.toString().indexOf(opt.factor) !== -1 ?
                output + opt.result : output;
        };
    };

    fb.DefaultNumberRule = function(output, number) {
        return output === '' ? number : output;
    };
    fb.rules = [
        fb.DivisibleByOrContainsRule(fb.fizz),
        fb.DivisibleByRule(fb.buzz),
        fb.DefaultNumberRule
    ];
    return fb;
})(fizzBuzz || {});
