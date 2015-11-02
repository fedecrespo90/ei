//PAGARIMP 0v
    e.define("/views/pagarImp/PagoImp.js", function(e, t, n, r, i, s) {
        C.View.PagoImp = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.pagoImps = new C.Collection.PagoImps(null, {
                    view: this
                }), this.pagoImps.fetch({
                    success: function(t, n) {
                        e.pagoImp_form = new C.View.PagoImpForm({
                            el: $("#pagoImp_right"),
                            model: e.model,
                            collection: t,
                            pagoImp_table: e.pagoImp_table
                        }), e.pagoImp_table = new C.View.PagoImpTable({
                            el: $("#pagoImp_left"),
                            collection: t
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/pagarImp/PagoImpTable.js", function(e, t, n, r, i, s) {
        C.View.PagoImpTable = Backbone.View.extend({
            name: "pagoImp",
            headers: ["ID", "Pagar", "cronograma_id", "Cronograma",  "cliente_id", "Cliente", "Banco", "impuesto_id", "Impuesto", "Monto" ],
            attrs: ["id", "check", "cronograma_id" , "cronogramaFecha", "cliente_id", "clienteNombre", "impuestoBanco", "impuesto_id", "impuestoNombre", "impuestoMonto"],
            hidden_columns: [ "cronograma_id", "cliente_id", "impuesto_id" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [ 3, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                var me = this;
                var arreglo=null;
                arreglo=[];
                var total=0;
                this.collection.models.forEach(function(e){
                  e.attributes.check=($('<input>', { type: 'checkbox', id: e.attributes.id}).on('click', function(u) {
                     total=0;
                    if(this.checked){
                      arreglo.push(e);
                      $('.pagoImp_form [name="arreglo"]')[0].value=null
                      arreglo.forEach(function(a){
                        console.log(a.attributes)
                        total=parseFloat(a.attributes.impuestoMonto)+parseFloat(total)
                        $('.pagoImp_form [name="arreglo"]')[0].value+="id:"+a.attributes.id
                      })
                      $(".pagoImp_form input:text[name:totalImp]")[0].value=total.toFixed(2)
                    }else{
                      var indice= arreglo.indexOf(e)
                      arreglo.splice(indice,1)
                      $('.pagoImp_form [name="arreglo"]')[0].value=null
                      arreglo.forEach(function(a){
                        total=parseFloat(a.attributes.impuestoMonto)+parseFloat(total)
                        $('.pagoImp_form [name="arreglo"]')[0].value+="id:"+a.attributes.id
                      })
                      $(".pagoImp_form input:text[name:totalImp]")[0].value=total.toFixed(2)
                    }
                  }))
                })
                this.data = this.options.collection, F.createDataTable(this)
            },
            events: {
                "click .pagoImp_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/pagarImp/PagoImpForm.js", function(e, t, n, r, i, s) {
        C.View.PagoImpForm = Backbone.View.extend({
            name: "pagoImp_form",
            title: "Pago de Impuestos",
            fields: {
              arreglo: {
                type:"hidden",
                name: "arreglo",
              },
              montoImp: {
                label: "Total De Impuestos",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              banco_id: {
                label:"Banco",
                type: "select"
              },
              diaDePago: {
                label: "Dia De Pago",
                type: "datepicker",
              },
              empleado_id: {
                label: "Empleado",
                type: "select"
              }
            },
            isCRUD: !0,
            buttons: {
                create: !1,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            relations: {
                banco_id: null,
                empleado_id: null
            },
            initialize: function() {
                var e= this;
                F.getAllFromModel("empleado", function(t) {
                    e.relations.empleados = t, F.getAllFromModel("banco", function(t) {
                        e.relations.bancos = t, F.createForm(e);
                    })
                })
            },
            events: {
                "click .pagoImp_form .BUTTON_save": "addPagoImp",
                "change .pagoImp_form_banco_id": "selectBanco",
            },
            getTable: function() {
                return this.options.pagoImp_table;
            },
            getDataTable: function() {
                return this.getTable().datatable;
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            },
            getSelectionRow: function() {

                return this.getTable().selected_row;
            },

            selectBanco: function() {
              $.ajax({
                type: "GET",
                url: '/banco/byIdNombre/'+$('.pagoImp_form').serializeObject().banco_id,
                success: function(e){
                  $('.dataTables_filter input').val(e).keyup();
                }
              })
            },
            addPagoImp: function() {
              var sup = this
              var ids = $('.pagoImp_form [name="arreglo"]')[0].value.split("id:")
              var arreglo=[]
              ids.forEach(function(id){
                if(id!="")
                  arreglo.push(id)
              })
              if(($(".pagoImp_form input:text[name:totalImp]")[0].value!=0)
              && ($('.pagoImp_form').serializeObject().empleado_id !='')
              && ($('.pagoImp_form').serializeObject().banco_id !='')
              && ($('.pagoImp_form').serializeObject().diaDePago !='')
              ){
                F.getOneFromModel("pagoImp/multiple", arreglo, function(vi){
                    var vencimientosImp=''
                    var vencimientosConfirm=''
                    vi.forEach(function(vto){
                      var suma= parseFloat(vto.monto1)+ parseFloat(vto.monto2)+  parseFloat(vto.monto3)+  parseFloat(vto.monto4)+ parseFloat(vto.monto0)
                      vencimientosConfirm+='Cliente: "'+vto.cliente.nombre+'" Impuesto: "'+vto.impuesto.nombre+'"-"'+vto.cronograma.mes+'/'+vto.cronograma.año+'"<br />'
                      vencimientosImp+='Cliente: "'+vto.cliente.nombre+'" Impuesto: "'+vto.impuesto.nombre+'<br />'
                    })
                    vencimientosConfirm+="Por un total de: $"+ $(".pagoImp_form input:text[name:totalImp]")[0].value;
                    F.msgConfirm("¿Está seguro de Enviar a Pagar los Impuestos seleccionados?", function(){
                        F.getReciboMaxf("recibo", function(t){
                          F.getOneFromModel("banco/byId", $('.pagoImp_form').serializeObject().banco_id , function(b) {
                            F.getOneFromModel("empleado/byId", $('.pagoImp_form').serializeObject().empleado_id, function(empleado){
                              var query = {
                                vi: vi,
                                diaDePago: $('.pagoImp_form').serializeObject().diaDePago,
                                banco_id: $('.pagoImp_form').serializeObject().banco_id,
                                empleado_id: $('.pagoImp_form').serializeObject().empleado_id,
                                total: $(".pagoImp_form input:text[name:totalImp]")[0].value
                              };
                              $.ajax({
                                type: "POST",
                                url: "/pagoImp",
                                data: query,
                                success: function(e){
                                  var tabla='<table class="dataTable"><tr><th>Cliente</th><th>Impuesto</th><th>Periodo</th><th>Importe</th></tr>';
                                  var contador= 0;
                                  e.impuestos.forEach(function(v){
                                    contador ++;
                                    tabla+='<tr><td>'
                                    tabla+=v.cliente+"</td><td>"
                                    tabla+=v.impuesto+"</td><td>"
                                    tabla+=v.periodo+"</td><td>"
                                    tabla+=v.importe+"</td></tr>"
                                  })
                                  tabla+="</table>"
                                  var recibof=
                                    '<div id="imprimirPago" style="display:none; text-align: left;">' +
                                        '<div style="width: 600px; height: padding: 6px">'+
                                            '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                                '<span style="font-size:20px; "><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span><span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221)452-2523<br /></center></span>'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:36%; float:right; height:85px; padding: 6px">'+
                                                '<br /><span style="font-weight:bold;"> Recibo Nº F-'+e.recibo.f+'</span><br />'+
                                                'Movimiento: Pago (G.I.Nº:'+e.pagoNumero+')<br  />'+
                                                'Fecha: '+e.reciboFecha+
                                            '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                                            '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                                '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                    'Empleado Asignado: '+e.receptor+'<br  />'+
                                                    'Banco: '+b+ "<br />"+
                                                    'Dia de Pago: '+$('.pagoImp_form').serializeObject().diaDePago+"<br />"+
                                                '</div>'+
                                                '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                    '<span style="font-weight:bold;"> Descripción del movimiento: </span>Pago de impuestos por parte del Estudio'+
                                                '</div>'+
                                                '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: auto;">'+//30px
                                                    e.recibo.concepto+
                                                '</div>'+
                                                '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: auto;">'+//130px
                                                    tabla+
                                                    '<span style="float:right; font-weight:bold; text"> TOTAL:'+e.total+'<br /></span><br />'+
                                                '</div>'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                '<span style="font-weight:bold;"> Operador: </span>'+ e.creador+
                                            '</div>'+
                                            '<div style="text-align:left; width:50%; float:left; padding: 6px;">'+
                                            'Fecha: <br /> Hora: <br /> Monto: <br />  <span style="font-weight:bold;">Comprobante y dinero entregado a Jorge</span> <br />  Fecha: <br />  Hora: <br /> Monto:<br /> '+
                                            '</div>'+
                                            '<div style="text-align:center; border:solid thin; border-radius: 7px; width:36%; float:right; padding: 6px;">'+
                                                '<br  />'+
                                                '-------------------------------------------<br />'+
                                                'Firma del responsable por el mismo'+
                                                '<br  /><br  />'+
                                                '<p><span style="font-weight:bold;">'+e.receptor+'</span></p><br  />'+
                                            '</div>'+
                                        '</div><H1 style="font-weight:bold;"><br /><br /><br /><br /><br /><br /><br /><br /> RECIBO NO VÁLIDO COMO CONSTANCIA DE ENTREGA DE DINERO</H1>'+
                                    '</div>'
;
                                  $('body').append(recibof)
                                  $.ajax({
                                      type:  "POST",
                                      url: "/imprimir/F-"+e.recibo.f,
                                      data: {recibo: recibof}
                                  });
                                  $.blockUI({
                                    message: $('#imprimirPago'),
                                    css: {
                                      top: '0%',
                                      left: '0%',
                                      width: '100%',
                                      height: '100%',
                                      border: '50px',
                                      cursor: 'default'
                                    }
                                  })
                                }
                              })
                            })
                          })
                        })
                      }
                    )
                })
              }else{
                F.msgError('Todos los campos son OBLIGATORIOS');
              }
            }
      })
    }),
