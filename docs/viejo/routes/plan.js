var DB, Everyone,
    util = require('util');
var Plan = function(db, everyone) {
  DB = db;
  Everyone = everyone;
 
  return Plan;
};

Plan.get = function(req, res, next) {
  DB.Plan.findAll({include:[{model: DB.PlanTarea}]}).on('success', function(plan) {
    var msg=[];
    plan.forEach(function(p){
      var tareas='';
      if(p.planTareas){
        if(util.isArray(p.planTareas)){
          p.planTareas.forEach(function(t){
            if(t.deleted_at == null)
              tareas+=t.tarea_id+',';
          })
        }else{
          if(p.planTareas.deleted_at == null)
            tareas=p.planTareas.tarea_id
        }
      }
      msg.push({
        id: p.id,
        nombre: p.nombre,
        descripcion: p.descripcion,
        tarea_id: tareas
      })
    })
    res.send(msg)
  });
};

Plan.post = function(req, res, next) {
  DB.Plan.find({ where: {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion
          }
  }).on('success', function(e) {
    if(!e){
      DB.Plan.create(req.body).on('success', function(plan){
        if(req.body.tarea_id){
          if(util.isArray(req.body.tarea_id)){
            req.body.tarea_id.forEach(function(tt){
              DB.PlanTarea.create({tarea_id: tt, plan_id: plan.id})        
            })        
          }else{
            DB.PlanTarea.create({tarea_id: req.body.tarea_id, plan_id: plan.id})
          }
        }
      })
      //creo nuevas con todas las tareas_id    
      res.send(true);
    }
  })
};

Plan.put = function(req, res, next) {
  DB.Plan.find({ where: {id: req.params.id} }).on('success', function(e) {
    if (e) {
      e.updateAttributes(req.body).success(function() {
        //elimino todas las relaciones y creo nuevas con todas las tareas_id      
        DB.PlanTarea.destroy({plan_id: e.id}).on('success', function(plt){
          if(util.isArray(req.body.tarea_id)){
            req.body.tarea_id.forEach(function(tid){
              if(tid!=''){
                DB.PlanTarea.create({plan_id: e.id, tarea_id: tid})
              }
            })
          }
        })
        res.send(true);
      });
    }else{res.send(false)}
  });
};

Plan.delete = function(req, res, next) {
  DB.Plan.destroy({ id: req.params.id }).on('success',function(){res.send(true)});
};

module.exports = Plan;
