var DB, Everyone;

var Recibo = function(db, everyone) {
  DB = db;
  Everyone = everyone;
  return Recibo;
};

Recibo.maximoc = function(req, res, next){
  DB.Recibo.max('c').on('success',function(maximo){
    if(isNaN(maximo)){
      maximo=1
    }else{
      maximo=maximo+1
    }
    res.send({maxi:maximo})
  })
};
Recibo.maximod = function(req, res, next){
  DB.Recibo.max('d').on('success',function(maximo){
    if(isNaN(maximo)){
      maximo=1
    }else{
      maximo=maximo+1
    }
    res.send({maxi:maximo})
  })
};
Recibo.maximoe = function(req, res, next){
  DB.Recibo.max('e').on('success',function(maximo){
    if(isNaN(maximo)){
      maximo=1
    }else{
      maximo=maximo+1
    }
    res.send({maxi:maximo})
  })
};
Recibo.maximof = function(req, res, next){
  DB.Recibo.max('f').on('success',function(maximo){
    if(isNaN(maximo)){
      maximo=1
    }else{
      maximo=maximo+1
    }
    res.send({maxi:maximo})
  })
};
Recibo.maximog = function(req, res, next){
  DB.Recibo.max('g').on('success',function(maximo){
    if(isNaN(maximo)){
      maximo=1
    }else{
      maximo=maximo+1
    }
    res.send({maxi:maximo})
  })
};
Recibo.maximoh = function(req, res, next){
  DB.Recibo.max('h').on('success',function(maximo){
    if(isNaN(maximo)){
      maximo=1
    }else{
      maximo=maximo+1
    }
    res.send({maxi:maximo})
  })
};
module.exports = Recibo
