describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ" ),"HIJKLMNOPQRSTUVWXYZABCDEFG" );
    });

    it('deberia retornar "RYVK WKMK" para "HOLA MACA" con offset de 10', ()=>{
      assert.equal(cipher.encode(10,"HOLA MACA"),"RYVK WKMK");
    });
    
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('deberia retornar "HOLA MACA" para "RYVK WKMK" con offset de 10', ()=>{
      assert.equal(cipher.decode(10,"RYVK WKMK"),"HOLA MACA");

    });
   
   });



  

});
