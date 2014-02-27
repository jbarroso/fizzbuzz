var fizzBuzz = (function(fb) {
    fb.fizz = {
        factor: 3,
        result: 'Fizz'
    };
    fb.buzz = {
        factor: 5,
        result: 'Buzz'
    };
    return fb;
})(fizzBuzz || {});
