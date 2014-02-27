describe('fizzBuzz', function() {
    it('should be an object', function() {
        expect(fizzBuzz).to.be.an('object');
    });
    it('should say number when it is 1', function() {
        expect(fizzBuzz.say(1)).to.be.equals(1);
    });
});
