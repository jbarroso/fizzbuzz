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
    return {
        say: function(number) {
            if (isDivisibleBy(number, fizz.factor)) {
                return fizz.result;
            }
            if (isDivisibleBy(number, buzz.factor)) {
                return buzz.result;
            }
            return number;
        }
    };
})();
