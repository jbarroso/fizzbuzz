var fizzBuzz = (function() {
    var fizz = {
        factor: 3,
        result: 'Fizz'
    };
    return {
        say: function(number) {
            if (number % fizz.factor === 0) {
                return fizz.result;
            }
            return number;
        }
    };
})();
