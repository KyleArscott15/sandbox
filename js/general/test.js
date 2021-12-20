var assert = require('assert');

describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        assert.strictEqual([1, 2, 3].indexOf(4), -1);
      });
    });
  }); 


it('birds should fly', function(){
    /** here.should.be.tested
      * However, as long as no error within a it(),
      * it() is considered PASSED */
})

describe('galaxy', function(){
    describe('earth', function(){
      describe('singapre', function(){
        it('birds should fly', function(){ /** ... */ })
      })
    })
  })

describe('singapre', function(){
    it('birds should fly', function(){ /** ... */ })
    it('horse should gallop', function(){ /** ... */ })
})

describe('singapre', function(){
    before(function(){
        console.log('see.. this function is run ONCE only')
    })
    it('birds should fly', function(){ /** ... */ })
    it('horse should gallop', function(){ /** ... */ })
})

describe('singapre', function(){
    beforeEach(function(){
      console.log('see.. this function is run EACH time')
    })
    it('birds should fly', function(){ /** ... */ })
    it('horse should gallop', function(){ /** ... */ })
})

