var fizzBuzz = (function() {
    var fizz = {
        factor: 3,
        result: 'Fizz'
    };
    var buzz = {
        factor: 5,
        result: 'Buzz'
    };
    return {
        say: function(number) {
            if (number % fizz.factor === 0) {
                return fizz.result;
            }
            if (number % buzz.factor === 0) {
                return buzz.result;
            }
            return number;
        }
    };
})();
