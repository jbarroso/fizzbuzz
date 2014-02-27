describe('fizzBuzz', function() {
    it('should be an object', function() {
        expect(fizzBuzz).to.be.an('object');
    });
    it('should say number when it is 1', function() {
        expect(fizzBuzz.say(1)).to.be.equals(1);
    });
    it('should say Fizz when it is multiple of 3', function() {
        expect(fizzBuzz.say(3)).to.be.equals('Fizz');
    });
    it('should say Buzz when it is multiple of 5', function() {
        expect(fizzBuzz.say(5)).to.be.equals('Buzz');
    });
    it('should say FizzBuzz when it is multiple of 3 and 5', function() {
        expect(fizzBuzz.say(15)).to.be.equals('FizzBuzz');
    });
    it('should say Fizz when it contains 3', function() {
        expect(fizzBuzz.say(13)).to.be.equals('Fizz');
    });
});
