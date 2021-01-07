const assert = require('assert');
const Taxi = require('../taxi.js');

describe('Taxi', function() {
    let taxi;
    beforeEach(function (){
       taxi = new Taxi('Toyota', 'Prius', 'Max') 
    });

    it('should have a manufacturer', function() {
       // const taxi = Taxi('Toyota', 'Prius');//Arrange
        const actual = taxi.manufacturer; //Act
        assert.strictEqual(actual, 'Toyota');
}); 
     it('should have a model', function() {
        //const taxi = new Taxi('Toyota', 'Prius'); //Arrange
        const actual = taxi.model; //ACT
        assert.strictEqual(actual, 'Prius'); // Assert
        

});
    it('should have a driver', function(){
    //Arrange gets it from before each
    const actual = taxi.driver;        // Act 
    assert.strictEqual(actual, 'Max');
    });

    describe('passengers', function (){
        it('should start with no passengers', function(){
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []);
        });
    });

});
