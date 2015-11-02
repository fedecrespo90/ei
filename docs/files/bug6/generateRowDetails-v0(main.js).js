//Esta en: //RECEPIMP
generateRowDetails: function(e, t) {
    var n = this, r = e.fnGetData(t), i = r[0], s = '<div class="row_detail grupo_id_' + i + '" style="display:none;">';
    return this.getRecepImp(i, function(e) {
        var t, r, s;
        e.length ? (n.appendRowDetailsHeaders(i), _.each(e, function(e) {
            var monto = e.monto0+e.monto1+e.monto2+e.monto3
            t = $("<p>"), s = e.cliente.nombre + " - <span>" + e.impuesto.nombre + '</span><span class="movimiento_valor">$'+monto.toMoney()+'</span>', $(t).append(s),
            $(".grupo_id_" + i).append(t).fadeIn(), n.bindRenderRecepImpForm(t, e, !1)
        })) : $(".grupo_id_" + i).append("<p>Este Grupo de impuestos No Tiene Impuestos</p>").fadeIn();
    }), s += "</div>", s;
},
