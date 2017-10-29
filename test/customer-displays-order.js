'use strict';

var chai=require('chai'),
    expect = chai.expect,
    orderSystemWith = require('../lib/orders'),
    sinon = require('sinon');
    chai.use(require('chai-as-promised'));

describe('Customer displays order', ()=>{

  beforeEach(()=>{
    let orderDAO = {
      byId: sinon.stub()
    };
    this.orderSystem = orderSystemWith(orderDAO);

  });
  
  context('Given that the order is empty', ()=>{

    var result;

    beforeEach(()=>{
      this.orderId = 'some empty order id';

      // this.orderDAO.byId.withArgs(this.orderId).return([]);
      // this.result = this.orderSystem.display(this.orderId);
      this.orderDAO.byId.withArgs(this.orderId).callsArgWithAsync(1,null,[]);
      // this.orderSystem.display(this.orderId,(err,res)=>{
      //   result = res;
      //   done(err);
      // })
      return this.orderSystem.display(this.orderId)
        .then((res)=>{
          result = res;
        });

    });

    it('will show no order items', ()=>{
      // expect(this.result).to.have.property('items').that.is.empty;
      expect(result).to.have.property('items').that.is.empty;
    });

    it('will show 0 as the total price',()=>{
      expect(this.result).to.have.property('totalPrice').that.is.equal(0);
    });

    it('will not be possible to place the order');

    it('will only be possible to add a beverage',()=>{
      expect(this.result).to.have.property('action')
        .that.is.deep.equal([{
          action: 'append-beverage',
          target: this.orderId,
          parameters: {
            beverageRef: null,
            quantity: 0
          }
        }]);
    });

    // it('will not be possible to remove a beverage');
    // it('will not be possible to change the quantity of a beverage');
  });

  context('Given that the order is empty', ()=>{
    it('will show one item per beverage');
    it('will show the sum of the unit prices as the total price');
    it('will be possible to place the order');
    it('will be possible to add a beverage');
    it('will be possible to remove a beverage');
    it('will be possible to change the quantity of a beverage');
  });

  context('Given that the order has pending messages', ()=>{
    it('will show the pending messages');
    it('there will be no more pending messages');
  });

});