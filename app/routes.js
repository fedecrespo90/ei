var Auth = require('./auth');
module.exports = function(app, routes) {
//aplicacion
  app.get('/', Auth.restrict, routes.index.get);
//login
  app.get('/login', routes.login.get);
  app.post('/login', routes.login.post);
  app.get('/logout', Auth.restrict, routes.logout.get);
//novedades 
  app.get('/novedades', Auth.restrict, routes.novedades.get);
  app.post('/novedades/:id', Auth.restrict, routes.novedades.post);  
//novTarea
  app.get('/novTarea', Auth.restrict, routes.novTarea.get);
//OTRO
  app.get('/otro', Auth.restrict, routes.otro.get);
  app.post('/otro', Auth.restrict, routes.otro.post);      
//recibo
  app.get('/recibo/maximoc', Auth.restrict, routes.recibo.maximoc);
  app.get('/recibo/maximod', Auth.restrict, routes.recibo.maximod);
  app.get('/recibo/maximoe', Auth.restrict, routes.recibo.maximoe);
  app.get('/recibo/maximof', Auth.restrict, routes.recibo.maximof);
//cliente 
  app.get('/cliente', Auth.restrict, routes.cliente.get);
  app.get('/cliente/all', Auth.restrict, routes.cliente.getAll);
  app.get('/cliente/nombre', Auth.restrict, routes.cliente.getNombre);  
  app.put('/cliente/:id', Auth.restrict, routes.cliente.put);
  app.post('/cliente', Auth.restrict, routes.cliente.post);
  app.get('/cliente/conCuenta', Auth.restrict, routes.cliente.conCuenta);  
  app.post('/cliente/delete/:id',Auth.restrict, routes.cliente.delete);
//actividad 
  app.get('/actividad', Auth.restrict, routes.actividad.get);
  app.post('/actividad', Auth.restrict, routes.actividad.post);  
  app.put('/actividad/:id', Auth.restrict, routes.actividad.put);
  app.post('/actividad/delete/:id',Auth.restrict, routes.actividad.delete);
//clave 
  app.get('/clave', Auth.restrict, routes.clave.get);
  app.post('/clave', Auth.restrict, routes.clave.post);  
  app.put('/clave/:id', Auth.restrict, routes.clave.put);
  app.post('/clave/delete/:id',Auth.restrict, routes.clave.delete);
//plan
  app.get('/plan', Auth.restrict, routes.plan.get);  
  app.post('/plan', Auth.restrict, routes.plan.post);  
  app.put('/plan/:id', Auth.restrict, routes.plan.put);
  app.post('/plan/delete/:id',Auth.restrict, routes.plan.delete);  
//ieot
  app.get('/ieot', Auth.restrict, routes.ieot.get);    
//ieoc
  app.get('/ieoc', Auth.restrict, routes.ieoc.get);
  app.get('/ieoc/numero', Auth.restrict, routes.ieoc.numero); 
  app.post('/ieoc', Auth.restrict, routes.ieoc.post);  
  app.put('/ieoc/:id', Auth.restrict, routes.ieoc.put);  
//oc
  app.get('/oc', Auth.restrict, routes.oc.get);
  app.put('/oc/:id', Auth.restrict, routes.oc.put);    
  app.get('/oc/byId/:id', Auth.restrict, routes.oc.byId);      
  app.get('/oc/byCliente/:cliente_id', Auth.restrict, routes.oc.byCliente);    
  app.get('/oc/activa', Auth.restrict, routes.oc.getActiva);
//ot
  app.get('/ot', Auth.restrict, routes.ot.get);  
  app.get('/ot/numero', Auth.restrict, routes.ot.numero);  
  app.get('/ot/byNumero/:numero', Auth.restrict, routes.ot.byNumero);    
  app.get('/ot/byOt/:numero', Auth.restrict, routes.ot.byOt);    
  app.post('/ot', Auth.restrict, routes.ot.post);  
  app.post('/ot/ie', Auth.restrict, routes.ot.postie);    
  app.get('/ot/otTarea/:id', Auth.restrict, routes.ot.otTarea);
  app.put('/ot/:id', Auth.restrict, routes.ot.put);
  app.put('/ot/ie/:id', Auth.restrict, routes.ot.putie);  
  app.put('/ot/reprogramar/:id', Auth.restrict, routes.ot.reprogramar);    
  app.post('/ot/delete/:id',Auth.restrict, routes.ot.delete);    
  app.post('/ot/conclude/:id',Auth.restrict, routes.ot.conclude);      
  app.post('/ot/desconclude/:id',Auth.restrict, routes.ot.desconclude);     
//otHistory
  app.get('/otHistory', Auth.restrict, routes.otHistory.get);  
//tarea 
  app.get('/tarea', Auth.restrict, routes.tarea.get);
  app.post('/tarea', Auth.restrict, routes.tarea.post);  
  app.put('/tarea/:id', Auth.restrict, routes.tarea.put);
  app.post('/tarea/delete/:id',Auth.restrict, routes.tarea.delete);  
//comunicacion
  app.get('/comunicacion', Auth.restrict, routes.comunicacion.get);
//cierre  
  app.get('/cierre', Auth.restrict, routes.cierre.get);
//cuentacorriente 
  app.get('/cuentaCorriente', Auth.restrict, routes.cuentaCorriente.get);
  app.get('/cuentaCorriente/byCliente/:cuentaCorriente_id', Auth.restrict, routes.cuentaCorriente.byCliente);
  app.get('/cuentaCorriente/monto/:cliente_id', Auth.restrict, routes.cuentaCorriente.monto);  
//pago
  app.put('/pago', Auth.restrict, routes.pago.put);
  app.post('/pago', Auth.restrict, routes.pago.post);
//pagoCompensacion  
  app.put('/pagoCompensacion', Auth.restrict, routes.pagoCompensacion.put);
//clienteDocumentacion
  app.get('/clienteDocumentacion', Auth.restrict, routes.clienteDocumentacion.get);  
//Documentacion
  app.get('/documentacion/:cliente_id', Auth.restrict, routes.documentacion.get);    
  app.post('/documentacion', Auth.restrict, routes.documentacion.post);    
  app.put('/documentacion', Auth.restrict, routes.documentacion.put);        
//Historial
  app.get('/historial/:cliente_id', Auth.restrict, routes.historial.get);  
//deuda
  app.get('/deuda', Auth.restrict, routes.deuda.get);
  app.get('/deuda/byCliente/:id', Auth.restrict, routes.deuda.byCliente);  
//perfil 
  app.get('/perfil/:id', Auth.restrict, routes.perfil.get);
  app.put('/perfil/:id', Auth.restrict, routes.perfil.put);
  app.post('/perfil/changePassword', Auth.restrict, routes.perfil.changePassword);
//usuario 
  app.get('/usuario', Auth.restrict, routes.usuario.get);
  app.get('/usuario/currentAreaId', Auth.restrict, routes.usuario.currentAreaId);
  app.post('/usuario', Auth.restrict, routes.usuario.post);
  app.put('/usuario/:id', Auth.restrict, routes.usuario.put);
  app.post('/usuario/delete/:id', Auth.restrict, routes.usuario.delete); 
//rol 
  app.get('/rol', Auth.restrict, routes.rol.get);
//ajusteCaja
  app.get('/ajusteCaja', Auth.restrict, routes.ajusteCaja.get);   
  app.put('/ajusteCaja', Auth.restrict, routes.ajusteCaja.put);  
//revision
  app.post('/revision/aceptarRango', Auth.restrict, routes.revision.aceptarRango);
  app.post('/revision/realizarMovimientos', Auth.restrict, routes.revision.realizarMovimientos);
  app.get('/revision', Auth.restrict, routes.revision.get);  
  app.get('/revision/anularRecibo/:id', Auth.restrict, routes.revision.anularRecibo);
  app.get('/revision/detalleRango', Auth.restrict, routes.revision.detalleRango);
  app.get('/revision/getAllRecibos', Auth.restrict, routes.revision.getAllRecibos);
  app.put('/revision/:id', Auth.restrict, routes.revision.put);
//caja
  app.get('/caja', Auth.restrict, routes.caja.get);
  app.get('/caja/getAll', Auth.restrict, routes.caja.getAll);
//cBanco
  app.get('/cBanco', Auth.restrict, routes.cBanco.get);
//ctaCliente
  app.get('/ctaCliente', Auth.restrict, routes.ctaCliente.get);    
// area
  app.get('/area', Auth.restrict, routes.area.get);
  app.post('/area', Auth.restrict, routes.area.post);  
  app.put('/area/:id', Auth.restrict, routes.area.put);
  app.post('/area/delete/:id',Auth.restrict, routes.area.delete);  
//clasificacion  
  app.get('/clasificacion', Auth.restrict,routes.clasificacion.get);
  app.post('/clasificacion', Auth.restrict, routes.clasificacion.post);
  app.put('/clasificacion/:id', Auth.restrict, routes.clasificacion.put);
  app.post('/clasificacion/delete/:id', Auth.restrict, routes.clasificacion.delete);   
//concepto  
  app.get('/concepto', Auth.restrict,routes.concepto.get);
  app.post('/concepto', Auth.restrict, routes.concepto.post);
  app.put('/concepto/:id', Auth.restrict, routes.concepto.put);
  app.post('/concepto/delete/:id', Auth.restrict, routes.concepto.delete);     
//banco  
  app.get('/banco', Auth.restrict,routes.banco.get); 
  app.get('/banco/byId/:id', Auth.restrict,routes.banco.byId);  
  app.get('/banco/byIdNombre/:id', Auth.restrict,routes.banco.byIdNombre);  
  app.post('/banco', Auth.restrict, routes.banco.post);
  app.put('/banco/:id', Auth.restrict, routes.banco.put);
  app.post('/banco/delete/:id', Auth.restrict, routes.banco.delete);   
//empleado
  app.get('/empleado', Auth.restrict, routes.empleado.get);
  app.get('/empleado/byId/:id', Auth.restrict,routes.empleado.byId);    
  app.post('/empleado', Auth.restrict, routes.empleado.post);
  app.put('/empleado/:id', Auth.restrict, routes.empleado.put);
  app.post('/empleado/delete/:id', Auth.restrict, routes.empleado.delete);    
//rubro 
  app.get('/rubro', Auth.restrict, routes.rubro.get);
  app.post('/rubro', Auth.restrict, routes.rubro.post);  
  app.put('/rubro/:id', Auth.restrict, routes.rubro.put);
  app.post('/rubro/delete/:id',Auth.restrict, routes.rubro.delete);
//impuesto
  app.get('/impuesto', Auth.restrict, routes.impuesto.get);
  app.post('/impuesto', Auth.restrict, routes.impuesto.post);  
  app.put('/impuesto/:id', Auth.restrict, routes.impuesto.put);
  app.post('/impuesto/delete/:id',Auth.restrict, routes.impuesto.delete);  
  app.get('/impuesto/variable/',Auth.restrict, routes.impuesto.variable);
  app.get('/impuesto/filtrando/:cronograma_id',Auth.restrict, routes.impuesto.filtrando);  
//noCargado
  app.get('/noCargado', Auth.restrict, routes.noCargado.get);      
//cargado
  app.get('/cargado', Auth.restrict, routes.cargado.get);    
  app.put('/cargado/:vencimiento_id', Auth.restrict, routes.cargado.put);  
//listado
  app.get('/listado', Auth.restrict, routes.listado.get);      
//listDeuda
  app.get('/listDeuda', Auth.restrict, routes.listDeuda.get);     
//carga  
  app.get('/sindicato', Auth.restrict, routes.sindicato.get);
  app.post('/sindicato', Auth.restrict, routes.sindicato.post);  
  app.put('/sindicato/:id', Auth.restrict, routes.sindicato.put);
  app.post('/sindicato/delete/:id',Auth.restrict, routes.sindicato.delete);    
//carga  
  app.get('/carga', Auth.restrict, routes.carga.get);
  app.post('/carga', Auth.restrict, routes.carga.post);  
  app.put('/carga/:id', Auth.restrict, routes.carga.put);
  app.post('/carga/delete/:id',Auth.restrict, routes.carga.delete);    
  app.get('/carga/repetirMesAnterior/:nombre', Auth.restrict, routes.carga.repetirMesAnterior);
//cargaFijo  
  app.get('/cargaFijo', Auth.restrict, routes.cargaFijo.get);
  app.post('/cargaFijo', Auth.restrict, routes.cargaFijo.post);  
  app.put('/cargaFijo/:id', Auth.restrict, routes.cargaFijo.put);
  app.post('/cargaFijo/delete/:id',Auth.restrict, routes.cargaFijo.delete);  
//ajusteCta
  app.get('/ajusteCta', Auth.restrict, routes.ajusteCta.get);   
  app.post('/ajusteCta/:id', Auth.restrict, routes.ajusteCta.post);  
//asigPie
  app.get('/asigPie', Auth.restrict, routes.asigPie.get);   
  app.post('/asigPie', Auth.restrict, routes.asigPie.post);       
  app.put('/asigPie/:id', Auth.restrict, routes.asigPie.put);    
  app.post('/asigPie/delete/:id', Auth.restrict, routes.asigPie.delete);
//ottarea
  app.get('/otTarea/byOt/:cliente_id', Auth.restrict, routes.otTarea.byOt); 
  app.post('/otTarea/add', Auth.restrict, routes.otTarea.add);  
  app.get('/otTarea/all', Auth.restrict, routes.otTarea.all);    
  app.put('/otTarea/editCompleta/:id', Auth.restrict, routes.otTarea.editCompleta);  
  app.put('/otTarea/editIncompleta/:id', Auth.restrict, routes.otTarea.editIncompleta);  
  app.put('/otTarea/:id', Auth.restrict, routes.otTarea.put);  
  app.get('/otTarea/resources/:id', Auth.restrict, routes.otTarea.resources);    
  app.post('/otTarea/toggleTareaState/:id', Auth.restrict, routes.otTarea.complete);      
  app.post('/otTarea/toggleTareaStateJob/:id', Auth.restrict, routes.otTarea.continuar);      
  app.post('/otTarea/delete/:id',Auth.restrict, routes.otTarea.delete);        
//clienteImpuesto
  app.get('/clienteImpuesto/byCliente/:cliente_id', Auth.restrict, routes.clienteImpuesto.byCliente);
  app.post('/clienteImpuesto/:ids', Auth.restrict, routes.clienteImpuesto.post);
  app.get('/clienteImpuesto', Auth.restrict, routes.clienteImpuesto.get);
  app.post('/clienteImpuesto/delete/:id', Auth.restrict, routes.clienteImpuesto.delete);
//clienteClave
  app.get('/clienteClave/byCliente/:cliente_id', Auth.restrict, routes.clienteClave.byCliente);
  app.post('/clienteClave/:id', Auth.restrict, routes.clienteClave.post);
  app.get('/clienteClave', Auth.restrict, routes.clienteClave.get);
  app.post('/clienteClave/delete/:id', Auth.restrict, routes.clienteClave.delete);  
//cronograma
  app.get('/cronograma/queCumple', Auth.restrict, routes.cronograma.queCumple);
  app.get('/cronograma', Auth.restrict, routes.cronograma.get);
  app.post('/cronograma', Auth.restrict, routes.cronograma.post);  
  app.put('/cronograma/:id', Auth.restrict, routes.cronograma.put);
  app.post('/cronograma/delete/:id',Auth.restrict, routes.cronograma.delete);  
//cronogramaImpuesto
  app.get('/cronogramaImpuesto/:id', Auth.restrict, routes.cronogramaImpuesto.get);  
//gestAsignacion
  app.get('/gestAsignacion', Auth.restrict, routes.gestAsignacion.get);  
  app.post('/gestAsignacion', Auth.restrict, routes.gestAsignacion.post);   
//gestAviso
  app.get('/gestAviso', Auth.restrict, routes.gestAviso.get);  
  app.post('/gestAviso', Auth.restrict, routes.gestAviso.post);      
//gestAvisoTest
  app.get('/gestAvisoTest', Auth.restrict, routes.gestAvisoTest.get);  
  app.post('/gestAvisoTest', Auth.restrict, routes.gestAvisoTest.post);   
//gestAvisoPersonal
//  app.get('/gestAvisoPersonal', Auth.restrict, routes.gestAvisoPersonal.get);  
  app.post('/gestAvisoPersonal', Auth.restrict, routes.gestAvisoPersonal.post);     
//imprimir
  app.post('/imprimir/:id', Auth.restrict, routes.imprimir.post);       
//recepcion
  app.get('/recepcion', Auth.restrict, routes.recepcion.get);
  app.post('/recepcion', Auth.restrict, routes.recepcion.post);  
  app.put('/recepcion/:id', Auth.restrict, routes.recepcion.put);
  app.post('/recepcion/delete/:id',Auth.restrict, routes.recepcion.delete);    
//aviso
  app.get('/aviso', Auth.restrict, routes.aviso.get);
  app.post('/aviso', Auth.restrict, routes.aviso.post);  
  app.put('/aviso/:id', Auth.restrict, routes.aviso.put);
  app.post('/aviso/delete/:id',Auth.restrict, routes.aviso.delete);     
//asignacion
  app.get('/asignacion', Auth.restrict, routes.asignacion.get);
  app.post('/asignacion', Auth.restrict, routes.asignacion.post);  
  app.put('/asignacion/:id', Auth.restrict, routes.asignacion.put);
  app.post('/asignacion/delete/:id',Auth.restrict, routes.asignacion.delete);     
//auditarImpuesto
  app.get('/auditarImpuesto', Auth.restrict, routes.auditarImpuesto.get);
  app.post('/auditarImpuesto/:id', Auth.restrict, routes.auditarImpuesto.post);
//vencimiento
  app.post('/vencimiento/:id', Auth.restrict, routes.vencimiento.post);  
  app.put('/vencimiento/:id', Auth.restrict, routes.vencimiento.put);    
  app.get('/vencimiento/:id', Auth.restrict, routes.vencimiento.get);    
//pagoImp
  app.get('/pagoImp', Auth.restrict, routes.pagoImp.get);
  app.post('/pagoImp', Auth.restrict, routes.pagoImp.post);  
  app.get('/pagoImp/multiple/:ids', Auth.restrict, routes.pagoImp.multiple);  
//recepImp
  app.get('/recepImp', Auth.restrict, routes.recepImp.get);  
  app.post('/recepImp/:id', Auth.restrict, routes.recepImp.post);    
  app.get('/recepImp/byGroup/:id', Auth.restrict, routes.recepImp.byGroup); 
  app.post('/recepImp/edit/:id', Auth.restrict, routes.recepImp.editMonto);   
  app.post('/recepImp/print/:id', Auth.restrict, routes.recepImp.imprimirReciboRecep); 
//archImp
  app.get('/archImp', Auth.restrict, routes.archImp.get);  
  app.post('/archImp/:id', Auth.restrict, routes.archImp.post);   
  app.get('/archImp/err/:id', Auth.restrict, routes.archImp.err);  
//descImp
  app.get('/descImp', Auth.restrict, routes.descImp.get);  
  app.post('/descImp/:id', Auth.restrict, routes.descImp.post);   
  app.get('/descImp/err/:id', Auth.restrict, routes.descImp.err);    
//archivado
  app.get('/archivado', Auth.restrict, routes.archivado.get);  
}
