'use strict';

var chai=require('chai'),
    expect = chai.expect,
    sinon = require('sinon');

describe('Customer display order', ()=>{
  context('Given that the order is empty', ()=>{
    it('will show no order items');
    it('will show 0 as the total price');
    it('will not be possible to place the order');
    it('will be possible to add a beverage');
    it('will not be possible to remove a beverage');
    it('will not be possible to change the quantity of a beverage');
  });

});