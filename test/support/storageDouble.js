
var sinon = require('sinon');

module.exports =  ()=>{
  var dao = {
    byId: sinon.stub(),
  };
  var storage = {};

  storage.dao = ()=>{
    return dao;
  };

  storage.alreadyContains = (entity)=>{
    var data = entity.data;
    dao.byId.withArgs(entity.id)
      .callsArgWithAsync(1, null, data);
    
    return entity;
  };

  return storage;

}