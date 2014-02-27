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
    fb.DefaultNumberRule = function(output, number) {
        return output === '' ? number : output;
    };
    fb.rules = [
        fb.DivisibleByRule(fb.fizz),
        fb.DivisibleByRule(fb.buzz),
        fb.DefaultNumberRule
    ];
    return fb;
})(fizzBuzz || {});
