// Esta en: //RECEPIMP
generateRowDetails: function(e, t) {
    var n = this, r = e.fnGetData(t), i = r[0], s = '<div class="row_detail grupo_id_' + i + '" style="display:none;">';
    return this.getRecepImp(i, function(e) {
        var t, r, s;
        //Agrego:
        var flag = [0,0,0,0],
        relacion = [];
        e.length ? (n.appendRowDetailsHeaders(i), _.each(e, function(e) {
          //var monto = e.monto0+e.monto1+e.monto2+e.monto3;
            // AGREGO
            var monn = [e.monto0,e.monto1,e.monto2,e.monto3];
            var monto;
            ////
            if(monn[3] != 0 && flag[3] != 1){
              monto = monn[3];
              flag[3]=1;
            }else if(monn[2] != 0 && flag[2] != 1){
              monto = monn[2];
              flag[2]=1;
            }else if(monn[1] != 0 && flag[1] != 1){
              monto = monn[1];
              flag[1]=1;
            }else if(monn[0] != 0 && flag[0] != 1){
              monto = monn[0];
              flag[0]=1;
            }
            ////
            // FIN AGREGO
            t = $("<p>"), s = e.cliente.nombre + " - <span>" + e.impuesto.nombre + '</span><span class="movimiento_valor">$'+monto.toMoney()+'</span>', $(t).append(s),
            $(".grupo_id_" + i).append(t).fadeIn(), n.bindRenderRecepImpForm(t, e, !1)
        })) : $(".grupo_id_" + i).append("<p>Este Grupo de impuestos No Tiene Impuestos</p>").fadeIn();
    }), s += "</div>", s;
},
