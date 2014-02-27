var fizzBuzz = (function(fb) {
    fb.say = function(number) {
        return fb.rules.reduce(function(output, rule) {
            return rule(output, number);
        }, '');
    };
    return fb;
})(fizzBuzz || {});
