/*
_____________________________________________________________________________________________________________________
____________________________________BARRA__&_&_&_&__SEPARADORA_______________________________________________________
TODO
✓  Boton Ver mas en Ot/Seguimiento
✓  Ot-> modificar esquemas de colores (hoy ROSA, ayer ROJO, mañana BLANCO)
✓  Servicios mensuales, tiene que ir a descargar
✓  Hacer Historial de tareas
✓  Cuando Reprogramo vto de la ot en vencimiento aparece null
✓  fijate la ot 170 qe el vto sale invalid tarea | ver | Alejandro
✓  Que en el historial muestre al lado del cliente, el título de la OT, para poder consultas rápidas sin tener que entrar en cada una. | 2hs  | Noel
✓  OT-> Poder identificar si son para el abogado (juridicas) | 3hs | Noel
✓  IMP. Otros. tiene que ir desagrupados al momento de pagar | 4hs  | Noel
✓  Monotributo | ver | Noel
✓  las oc los saca del sistema por algun tipo de error
✓  OTTAREASHISTORIAL poder que sea Form en lugar de infocard y que los usuarios rol_id >= 3 puedan Guardar
✓  Cuando se cambia el vencimiento de la ot se manda de nuevo la tarea por mail solo lo deberia enviar cuando se asigna al principio cuando se finaliza o cuando se reprograma
✓  las oc deben tener el mismo formato que la ot pero con fondo verdecito en lugar de gris algo similar a #A9F5A9 (verde)
✓  Ajuste de CtaCte cuando pagan impuestos | ver | Noel
✓  Calendario | ver | Alejandro
✓  I/E documentacion era chico el lugar en la bbdd y se amplio
✓  En descripcion y observacion de las tareas era chico el lugar en la bbdd y se amplio
✓  Cambiar el usuario de Noel por un usuario Administrador
✓  Agregar el acceso al calendario de los usuarios administrador
✓  Cuando se cambia el vencimiento de la ot se manda de nuevo la tarea por mail
✓	Solo lo deberia enviar cuando se asigna al principio cuando se finaliza o cuando se reprograma
✓	Las oc los saca del sistema por algun tipo de error
✓	Las oc deben tener el mismo formato que la ot pero con fondo verdecito en lugar de gris algo similar a #A9F5A9
✓  Planes de Tareas y Tareas solo puedan ser administrador por "Administradores"
✓  Mostrar en la tabla de caja REVISION, el nombre del cliente
✓  MAIL-Cuando se reprograma una OT, debe decir REPROGRAMADO POR
✓  MAIL-Cuando se concluye debe decir quien la creo la tarea, no quien la concluyó
✓	MAIL-Cuando se concluye a veces aparece "Invalid date"
✓  reprogramar OT, que la observacion sea Obligatoria
✓  no poder concluir una ot que tiene tareas por realizar NUNCA
✓  NO poder reprograma una tarea más alla del vencimiento de la ot
✓  NO poder reprogramar una ot con vencimiento menor a las tareas
✓  Ajuste de CTA puso "undefined" y lo repitio 3 veces. Ver causante de error y solucionarlo
✓  Revisar que la info sea consistente en el calendario, debe ser la misma que en novedades
✓  historial de tareas -> mostrar tareas finalizadas, sin importar las OT
✓  VER DE UNIFICAR IMPUESTOS A CARGAR
✓  Agregar total de horas x empleado en el Calendario (horas por dia)
✓  Revisar porque las OT a veces toma el plan con vencimiento null
✓  Al actualizar los datos de la tarea no os muestra (aparece vacio NO ASIGNA ( SI GUARDA))
✓  Aceptar en la caja, debe haber rango
✓  Separar el nro de recibo y el total en cada movimiento de la caja
✓  Cuando se hace un movimientoCaja dee crear un recibo lerta "F"
✓  OT concluir editar mail
✓  Mails a los clientes cuando se solicita una OT: no aparece el nombre de quien ingresó la OT. Hay varias que figuran a mi nombre cuando estuve de vacaciones por lo que seguro fue Angela Ferrari.
✓  Fechas: tuvimos un problema con las fechas de concluidas las OT. Con relación a esto deberíamos saber si hay forma de recuperar las que están mal y confirmar que a partir de ahora no tener este problema. Teníamos al 15/12/2014: 76 OT que tiene en los reporte fecha de concluida anterior a la fecha de ingreso (además de que en muchos caso no se puede identificar si es ej. 11/12 ó 12/11). Esto me impide darle a Jorge reportes de cumplimiento. (HABLADO CON NOEL, APENAS TENGAMOS UN POCO DE TIEMPO SE RESUELVE LAS QUE TUBIERON ERROR ANTERIORMENTE)
✓  Calendario: faltaría que sumara los tiempos de cada persona.
✓  Ordenes de consulta: deberíamos tener un historial como las OT
✓  Cada vez que agrego un cliente me tira para afuera pero sí lo agrega, solo que no le agrega el "V"
✓  Por otra parte (algo no pedido nunca), se puede agregar la hora a los recibos de plata y documentación? para poder sacar estadísticas de horarios más cargados.
✓  Carga: tener la posibilidad de repetir la carga del mes anterior y hacer ajustes si correspondiera (ej: servicios mensuales).
✓  OC enviaba mails con undefined
✓  plan mis facilidades AFIP y ARBA (igual a monotributo)(VALERIA)
✓  Monotributo en la seccion gest de pagos se mostraba sin incrementar el cronograma
✓  Plan mis facilidades AFIP se vea igual al monotributo
✓  Plan de pagos ARBA se vea igual al monotributo
✓  Las claves solo se guardan en minusculas (hay qe diferenciar mayusc de minusc)
✓  Clientes: agregar un campo que diga activo/inactivo para poder sacar del listado vigente los clientes que se dan de baja y a su vez que cuando está inactivo el sistema le desasigne los impuestos. Estos clientes inactivos irían a un listado de historial clientes.
✓    //  ALTER TABLE  `cliente` ADD  `baja` INT( 1 ) NOT NULL DEFAULT  '0' AFTER  `observaciones`
✓  Ver superar el antispam de google
✓  Historial consultas
✓  Cuit en pantalla claves
✓  En "ver mas" no aparece arriba: el título, descripción y cliente, y tampoco al final la conclusión.
✓  Ver la posibilidad de que te avise si te pasas, así no guarda por la mitad
✓  Mostrar recibo ajuste de cuenta en la cuentas corrientes de los clientes.
✓  Baja cliente: que no borre lo que ya estaba escrito en la observación
✓  ANULAR RECIBO E-994
✓  Baja cliente: que no borre lo que ya estaba escrito en la observación.
✓  Fechas de los reportes de las OT: en historia de tareas están mal y en historia de OT están bien pero "al reves"
✓  Mostrar en los reportes de OT día y hora. el día ya lo muestra de cuando se completó la tarea
✓  Reportes tareas OT que muestre el sector.
✓  A descargar: que quede en archivados todos los servicios mensuales y en a archivar los impuestos.
  buscar anularRecibo: function() { y revision.js
  Recibos: que Jorge tenga la posibilidad de anular un recibo y por tanto se "deshagan" los movimientos de dinero.
  Caja, hacer eso raro de jorge
_____________________________________________________________________________________________________________________
____________________________________BARRA__&_&_&_&__SEPARADORA_______________________________________________________
*/
(function() {
    var e = function(t, n) {
        var r = e.resolve(t, n || "/"), i = e.modules[r];
        if (!i) throw new Error("Failed to resolve module " + t + ", tried " + r);
        var s = e.cache[r], o = s ? s.exports : i();
        return o;
    };
    e.paths = [], e.modules = {}, e.cache = {}, e.extensions = [ ".js", ".coffee" ], e._core = {
        assert: !0,
        events: !0,
        fs: !0,
        path: !0,
        vm: !0
    }, e.resolve = function() {
        return function(t, n) {
            function r(t) {
                t = u.normalize(t);
                if (e.modules[t]) return t;
                for (var n = 0; n < e.extensions.length; n++) {
                    var r = e.extensions[n];
                    if (e.modules[t + r]) return t + r;
                }
            }
            function i(t) {
                t = t.replace(/\/+$/, "");
                var n = u.normalize(t + "/package.json");
                if (e.modules[n]) {
                    var i = e.modules[n](), s = i.browserify;
                    if (typeof s == "object" && s.main) {
                        var o = r(u.resolve(t, s.main));
                        if (o) return o;
                    } else if (typeof s == "string") {
                        var o = r(u.resolve(t, s));
                        if (o) return o;
                    } else if (i.main) {
                        var o = r(u.resolve(t, i.main));
                        if (o) return o;
                    }
                }
                return r(t + "/index");
            }
            function s(e, t) {
                var n = o(t);
                for (var s = 0; s < n.length; s++) {
                    var u = n[s], a = r(u + "/" + e);
                    if (a) return a;
                    var f = i(u + "/" + e);
                    if (f) return f;
                }
                var a = r(e);
                if (a) return a;
            }
            function o(e) {
                var t;
                e === "/" ? t = [ "" ] : t = u.normalize(e).split("/");
                var n = [];
                for (var r = t.length - 1; r >= 0; r--) {
                    if (t[r] === "node_modules") continue;
                    var i = t.slice(0, r + 1).join("/") + "/node_modules";
                    n.push(i);
                }
                return n;
            }
            n || (n = "/");
            if (e._core[t]) return t;
            var u = e.modules.path();
            n = u.resolve("/", n);
            var a = n || "/";
            if (t.match(/^(?:\.\.?\/|\/)/)) {
                var f = r(u.resolve(a, t)) || i(u.resolve(a, t));
                if (f) return f;
            }
            var l = s(t, a);
            if (l) return l;
            throw new Error("Cannot find module '" + t + "'");
        };
    }(), e.alias = function(t, n) {
        var r = e.modules.path(), i = null;
        try {
            i = e.resolve(t + "/package.json", "/");
        } catch (s) {
            i = e.resolve(t, "/");
        }
        var o = r.dirname(i), u = (Object.keys || function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t;
        })(e.modules);
        for (var a = 0; a < u.length; a++) {
            var f = u[a];
            if (f.slice(0, o.length + 1) === o + "/") {
                var l = f.slice(o.length);
                e.modules[n + l] = e.modules[o + l];
            } else f === o && (e.modules[n] = e.modules[o]);
        }
    }, function() {
        var t = {};
        e.define = function(n, r) {
            e.modules.__browserify_process && (t = e.modules.__browserify_process());
            var i = e._core[n] ? "" : e.modules.path().dirname(n), s = function(t) {
                return e(t, i);
            };
            s.resolve = function(t) {
                return e.resolve(t, i);
            }, s.modules = e.modules, s.define = e.define, s.cache = e.cache;
            var o = {
                exports: {}
            };
            e.modules[n] = function() {
                return e.cache[n] = o, r.call(o.exports, s, o, o.exports, i, n, t), o.exports;
            };
        };
    }(), e.define("path", function(e, t, n, r, i, s) {
        function o(e, t) {
            var n = [];
            for (var r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
            return n;
        }
        function u(e, t) {
            var n = 0;
            for (var r = e.length; r >= 0; r--) {
                var i = e[r];
                i == "." ? e.splice(r, 1) : i === ".." ?(e.splice(r, 1), n++) :n && (e.splice(r, 1), n--);
            }
            if (t) for (; n--; n) e.unshift("..");
            return e;
        }
        var a = /^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;
        n.resolve = function() {
            var e = "", t = !1;
            for (var n = arguments.length; n >= -1 && !t; n--) {
                var r = n >= 0 ? arguments[n] : s.cwd();
                if (typeof r != "string" || !r) continue;
                e = r + "/" + e, t = r.charAt(0) === "/";
            }
            return e = u(o(e.split("/"), function(e) {
                return !!e;
            }), !t).join("/"), (t ? "/" : "") + e || ".";
        }, n.normalize = function(e) {
            var t = e.charAt(0) === "/", n = e.slice(-1) === "/";
            return e = u(o(e.split("/"), function(e) {
                return !!e;
            }), !t).join("/"), !e && !t && (e = "."), e && n && (e += "/"), (t ? "/" : "") + e;
        }, n.join = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return n.normalize(o(e, function(e, t) {
                return e && typeof e == "string";
            }).join("/"));
        }, n.dirname = function(e) {
            var t = a.exec(e)[1] || "", n = !1;
            return t ? t.length === 1 || n && t.length <= 3 && t.charAt(1) === ":" ? t : t.substring(0, t.length - 1) : ".";
        }, n.basename = function(e, t) {
            var n = a.exec(e)[2] || "";
            return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
        }, n.extname = function(e) {
            return a.exec(e)[3] || "";
        };
    }), e.define("__browserify_process", function(e, t, n, r, i, s) {
        var s = t.exports = {};
        s.nextTick = function() {
            var e = [], t = typeof window != "undefined" && window.postMessage && window.addEventListener;
            return t && window.addEventListener("message", function(t) {
                if (t.source === window && t.data === "browserify-tick") {
                    t.stopPropagation();
                    if (e.length > 0) {
                        var n = e.shift();
                        n();
                    }
                }
            }, !0), function(n) {
                t ? (e.push(n), window.postMessage("browserify-tick", "*")) : setTimeout(n, 0);
            };
        }(), s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.binding = function(t) {
            if (t === "evals") return e("vm");
            throw new Error("No such module. (Possibly not yet loaded)");
        }, function() {
            var t = "/", n;
            s.cwd = function() {
                return t;
            }, s.chdir = function(r) {
                n || (n = e("path")), t = n.resolve(r, t);
            };
        }();
    }), e.define("/F.backbone.js", function(e, t, n, r, i, s) {
        F.R.highlightCurrentModule = function(e) {
            $("#head a").removeClass("ui-state-active"), $("#tabs a").removeClass("active-tab");
            if (e !== !1) {
                $("#head a[href='/#/" + e.split("/")[0] + "']").addClass("ui-state-active"), $("#tabs a[href='/#/" + e + "']").addClass("active-tab");
            }
        };
    }), e.define("/F.basics.js", function(e, t, n, r, i, s) {
        F.doNothing = function() {}, F.log = function(e) {
            console ? console.log(e) : alert(e);
        }, F.objectSize = function(e) {
            var t = 0, n;
            for (n in e) e.hasOwnProperty(n) && t++;
            return t;
        }, F.concatObjects = function(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
        }, F.JSONValuesToArray = function(e) {
            var t = [];
            return _.each(e, function(e, n) {
                t.push(e);
            }), t;
        }, F.flipDateMonth = function(e) {
            var t = e.substr(0, 10);
            return t[3] + t[4] + t[5] + t[0] + t[1] + t[2] + t[6] + t[7] + t[8] + t[9] + e.substr(10, e.length);
        }, F.toHumanDate = function(e, t) {
            if (e === null) return null;
            var n = new Date(e), r = "";
            return n.setHours(n.getHours() + 3), r += (n.getDate() < 10 ? "0" : "") + n.getDate(), r += "/", r += (n.getMonth() + 1 < 10 ? "0" : "") + (n.getMonth() + 1), r += "/", r += n.getFullYear(), t === undefined && t === !0 && (r += " ", r += (n.getHours() < 10 ? "0" : "") + n.getHours(), r += ":", r += (n.getMinutes() < 10 ? "0" : "") + n.getMinutes(), r += ":", r += (n.getSeconds() < 10 ? "0" : "") + n.getSeconds()), r;
        }, F.capitalize = function(e) {
            return e.charAt(0).toUpperCase()+e.substr(1);
        }, $.fn.serializeObject = function() {
            var e = {}, t = this.serializeArray();
            return $.each(t, function() {
                e[this.name] ? (e[this.name].push || (e[this.name] = [ e[this.name] ]), e[this.name].push(this.value || "")) : e[this.name] = this.value || "";
            }), e;
        }, $.fn.getFields = function() {
            return $(this).find("input:text, input:checkbox, textarea, select");
        }, $.fn.dataTableExt.oSort["es_date-asc"] = function(e, t) {
            var n = new Date(e), r = new Date(t);
            return n < r ? -1 : n > r ? 1 : 0;
        }, $.fn.dataTableExt.oSort["es_date-desc"] = function(e, t) {
            var n = new Date(e), r = new Date(t);
            return n < r ? 1 : n > r ? -1 : 0;
        }, $.fn.dataTableExt.oApi.fnAddDataAndDisplay = function(e, t) {
            var n = this.oApi._fnAddData(e, t), r = e.aoData[n].nTr;
            this.oApi._fnReDraw(e);
            var i = -1;
            for (var s = 0, o = e.aiDisplay.length; s < o; s++) if (e.aoData[e.aiDisplay[s]].nTr == r) {
                i = s;
                break;
            }
            return i >= 0 && (e._iDisplayStart = Math.floor(s / e._iDisplayLength) * e._iDisplayLength, this.oApi._fnCalculateEnd(e)), this.oApi._fnDraw(e), {
                nTr: r,
                iPos: n
            };
        }, F.onSuccess = function(e, t, n) {
            var r = JSON.parse(e);
            r === !0 ? t(r) : n(r);
        }, F.getAllFromModel = function(e, t) {
            $.ajax({
                url: "/" + e,
                success: function(e) {
                    t(e);
                }
            });
        }, F.getAllClientesFromModel = function(e, t) {
            $.ajax({
                url: "/cliente/conCuenta",
                success: function(e) {
                    t(e);
                }
            });
        }, F.getOtNumero = function(e, t) {
            $.ajax({
                url: "/ot/numero",
                success: function(e) {
                    t(e);
                }
            });
        }, F.getOcNumero = function(e, t) {
            $.ajax({
                url: "/ieoc/numero",
                success: function(e) {
                    t(e);
                }
            });
        }, F.getOtCliente = function(e, t) {
            $.ajax({
                url: "/ot/otTarea/"+e,
                success: function(e) {
                    t(e); return e;
                }
            });
        }, F.getAllCronogramasFromModel = function(e, t) {
            $.ajax({
                url: "/cronograma/queCumple",
                success: function(e) {
                    t(e);
                }
            });
        }, F.getReciboMaxc = function(e, t) {
            $.ajax({
                url: "/recibo/maximoc",
                success: function(e) {
                    t(e);
                }
            });
        }, F.getReciboMaxd = function(e, t) {
            $.ajax({
                url: "/recibo/maximod",
                success: function(e) {
                    t(e);
                }
            });
        }, F.getReciboMaxe = function(e, t) {
            $.ajax({
                url: "/recibo/maximoe",
                success: function(e) {
                    t(e);
                }
            });
        }, F.getReciboMaxf = function(e, t) {
            $.ajax({
                url: "/recibo/maximof",
                success: function(e) {
                    t(e);
                }
            });
        }, F.getSaldoCuenta = function(e, t) {
            $.ajax({
                url: "/cuentaCorriente/monto/"+e,
                success: function(e) {
                    t(e);
                }
            });
        }, F.getOneFromModel = function(e, t, n) {
            $.ajax({
                url: "/" + e + "/" + t,
                success: function(e) {
                    n(e);
                }
            });
        }, F.getDataTableSelection = function(e) {
            var t = [], n = $(e).dataTable().fnGetNodes();
            for (var r = 0; r < n.length; r += 1) $(n[r]).hasClass("selected_row") && t.push(n[r]);
            return t;
        };
    }), e.define("/F.validations.js", function(e, t, n, r, i, s) {
        F.V.len = function(e) {
            return $(e).val().length > 0;
        }, F.V.equal = function(e, t) {
            return $(e).val() === $(t).val();
        }, F.V.alpha = function(e, t, n, r) {
            F.V.len($(t)) ? n() : r('El campo "' + e + '" no puede estar vacío');
        }, F.V.numeric = function(e, t, n, r) {
            try {
                Validate.Numericality(parseInt($(t).val())), n();
            } catch (i) {
                r('El campo "' + e + '" sólo acepta números');
            }
        }, F.V.integer = function(e, t, n, r) {
            try {
                Validate.Numericality(parseInt($(t).val()), {
                    onlyInteger: !0
                }), n();
            } catch (i) {
                r('El campo "' + e + '" sólo acepta números enteros');
            }
        }, F.V.range = function(e, t, n, r) {
            try {
                Validate.Numericality(parseInt($(t).val()), {
                    minimum: t.min,
                    maximum: t.max
                }), n();
            } catch (i) {
                r('El campo "' + e + '" sólo acepta números entre ' + t.min + " y " + t.max);
            }
        }, F.V.passwords = function(e, t, n, r) {
            return !F.V.len(e) || !F.V.len(t) ? (r("Las contraseñas son obligatorias"), !1) : F.V.equal(e, t) ? (n(), !0) : (r("Las contraseñas deben ser iguales"), !1);
        }, F.V.email = function(e, t, n, r) {
            try {
                Validate.Email($(t).val()), n();
            } catch (i) {
                r("El campo " + e + " es incorrecto");
            }
        }, F.V.cuit = function(e, t, n, r) {
            return !0;
        }, F.V.formSimple = function(e, t) {
            _.each(F.getFormFields(e), function(e) {
                var n = $(e).is("input:text") && !$(e).length, r = $(e).is("select") && $(e).val() === -1, i = $(e).is("textarea") && !$(e).length;
                (n || r || i) && t();
            });
        };
    }), e.define("/F.widgets.js", function(e, t, n, r, i, s) {
        F.withoutId = function(e) {
            return e.substr(0, e.length - 3);
        }, F.msg = function(e) {
            noty({
                text: e,
                layout: "topRight"
            });
        }, F.msgSticky = function(e) {
            noty({
                text: e,
                layout: "topRight",
                timeout: !1
            });
        }, F.msgOK = function(e) {
            noty({
                text: e,
                layout: "topRight",
                type: "success",
                closeOnSelfHover: !0
            });
        }, F.msgOKTop = function(e) {
            noty({
                text: e,
                layout: "top",
                type: "success",
                closeOnSelfHover: !0
            });
        }, F.msgError = function(e) {
            noty({
                text: e,
                layout: "topRight",
                type: "error",
                timeout: !1
            });
        }, F.msgErrorTop = function(e) {
            noty({
                text: e,
                layout: "top",
                type: "error",
                modal: !0,
                timeout: !1
            });
        }, F.msgConfirm = function(e, t, n) {
            noty({
                text: e,
                buttons: [ {
                    type: "button green",
                    text: "OK",
                    click: t
                }, {
                    type: "button black",
                    text: "Cancelar",
                    click: n || F.doNothing
                } ],
                modal: !0,
                closable: !1,
                closeOnSelfClick: !1,
                timeout: !1
            });
        }, F.renderAllChosen = function() {
            $(".chzn-select").chosen({
                allow_single_deselect: !0,
                no_results_text: "Nada coincide con:"
            });
        }, F.appendSelectionField = function(e) {
            $(e).append($("<input>", {
                type: "hidden",
                "class": "selection_id",
                value: 0
            }));
        }, F.appendTitle = function(e, t) {
            $(e).append('<h3 class="formtitle">' + t + "</h3>");
        }, F.createDataTable = function(e, t, n) {
            var r = $("<tr>"), i = $("<thead>").append(r), s = $("<tbody>"), o = [], u = [];
            _.each(e.headers, function(e) {
                $(r).append($("<th>").html(e));
            }), _.each(e.data.models, function(n) {
                var r = $("<tr>"), i = {};
                _.forEach(e.attrs, function(t, s) {
                    var a = t === "id" || t.search("_id") !== -1 || t.search("_list") !== -1 || t.search("password") !== -1 || _.indexOf(e.hidden_columns, t) !== -1;
                    a ? u.push({
                        bVisible: !1,
                        aTargets: [ s ]
                    }) : o.push(s), $(r).append($("<td>").html(n.attributes[t])), i[t] = n.attributes[t];
                }), $(s).append(r), e.rowHandler && e.rowHandler(r, n.attributes), $(r).on("click", function() {
                    var n = $("." + e.name + "_table").dataTable();
                    $("." + e.name + "_form .selection_id").val(n.fnGetData(this)[0]), $("." + e.name + "_infocard .selection_id").val(n.fnGetData(this)[0]), $("." + e.name + "_table tr").removeClass("selected_row"), $(this).addClass("selected_row"), $(".BUTTON_create").hide(), $(".BUTTON_save, .BUTTON_cancel, .BUTTON_delete").show(), t && t(i);
                });
            }), $("#" + e.name + "_left").append($("<table>", {
                "class": e.name + "_table"
            }).append(i).append(s));
            var a = F.concatObjects({
                aoColumnDefs: u,
                iDisplayLength: 500,
                sPaginationType: "full_numbers",
                bJQueryUI: !0,
                oLanguage: {
                    oPaginate: {
                        sFirst: "Inicio",
                        sPrevious: "Anterior",
                        sNext: "Siguiente",
                        sLast: "Final"
                    },
                    sEmptyTable: "No existen registros",
                    sInfo: "_START_ - _END_ de _TOTAL_",
                    sInfoEmpty: "",
                    sInfoFiltered: "(filtrando de _MAX_ en total)",
                    sInfoThousands: ".",
                    sLengthMenu: "Mostrar _MENU_ "+ Backbone.history.fragment.split("/")[Backbone.history.fragment.split("/").length-1],
                    sLoadingRecords: "Cargando...",
                    sProcessing: "Procesando...",
                    sSearch: "Buscar",
                    sZeroRecords: "No existen registros"
                },
                sDom: 'T<"clearTableTools"><"H"lfr>t<"F"ip>',
                oTableTools: {
                    sSwfPath: "/swf/copy_csv_xls_pdf.swf",
                    aButtons: [ {
                        sExtends: "copy",
                        mColumns: "all"
                    }, {
                        sExtends: "csv",
                        mColumns: "all"
                    }, {
                        sExtends: "xls",
                        mColumns: "all",
                        sFileName: "*.xls"
                    }, {
                        sExtends: "pdf",
                        mColumns: o
                    } ]
                }
            }, e.datatableOptions ? e.datatableOptions : {});
            e.datatable = $("." + e.name + "_table").dataTable(a), n && n($("." + e.name + "_table"), e.options.open_ot_number_on_start)
        }, F.resetForm = function(e) {
            $(e).each(function() {
                this.reset();
            });
        }, F.cleanForm = function(e) {
            $(e).find("input:text, input:password, textarea").val(null), $(e).find("input:checkbox").attr("checked", !1), $(e).find("select").val(-1);
        }, F.getFormFields = function(e) {
            return $(e).find("input:text, input:password, input:checkbox, select, textarea");
        }, F.assignValuesToForm = function(e, t) {
            var n = F.getFormFields(e), r;
            F.cleanForm(e), _.each(n, function(e, n) {
                r = $(e).attr("name");
                if ($(e).hasClass("chzn-select") && $(e).attr("multiple")) {
                    var i = t[r].split(",");
                    _.each(i, function(t, n) {
                        $(e).find("option[value=" + t + "]").attr("selected", !0);
                    });
                } else $(e).is(":checkbox") ? $(e).attr("checked", !!t[r]) : $(e).val(t[r]);
                $(e).trigger("liszt:updated");
            });
        }, F.appendFormButtons = function(e, t) {
            function n() {
                $(".BUTTON_save, .BUTTON_cancel, .BUTTON_delete").hide(), $(".BUTTON_create").show();
            }
            e.buttons || (e.buttons = {
                create: !0,
                save: !0,
                cancel: !0,
                delete: !0
            });
            var r = e.isCRUD ? " hidden" : "";
            e.buttons.create && $(t).append($("<input>", {
                type: "button",
                "class": "BUTTON_create",
                value: "Crear"
            })), e.buttons.save && $(t).append($("<input>", {
                type: "button",
                "class": "BUTTON_save" + r,
                value: "Guardar"
            })), e.buttons.cancel && $(t).append($("<input>", {
                type: "reset",
                "class": "BUTTON_cancel" + r,
                value: "Cancelar"
            }).on("click", function() {
                e.isCRUD && n(), $("." + e.name + "_table tr").removeClass("selected_row");
            })), e.buttons.delete && $(t).append($("<input>", {
                type: "button",
                "class": "BUTTON_delete" + r,
                value: "Eliminar"
            })), e.buttons.query && $(t).append($("<input>", {
                type: "button",
                "class": "BUTTON_query" + r,
                value: "Buscar"
            }));
        }, F.appendFormButtonsS = function(e, t) {
            function n() {
                $(".BUTTON_save, .BUTTON_cancel, .BUTTON_delete").hide(), $(".BUTTON_create").show();
            }
            e.buttons || (e.buttons = {
                create: !0,
                save: !0,
                cancel: !0,
                delete: !0
            });
            var r = e.isCRUD ? " hidden" : "";
            e.buttons.create && $(t).append($("<input>", {
                type: "button",
                "class": "BUTTON_create",
                value: "Crear"
            })), e.buttons.save && $(t).append($("<input>", {
                type: "button",
                "class": "BUTTON_save" + r,
                value: "Recibir"
            })), e.buttons.cancel && $(t).append($("<input>", {
                type: "reset",
                "class": "BUTTON_cancel" + r,
                value: "Cancelar"
            }).on("click", function() {
                e.isCRUD && n(), $("." + e.name + "_table tr").removeClass("selected_row");
            })), e.buttons.delete && $(t).append($("<input>", {
                type: "button",
                "class": "BUTTON_delete" + r,
                value: "Volver a Pagar"
            })), e.buttons.query && $(t).append($("<input>", {
                type: "button",
                "class": "BUTTON_query" + r,
                value: "Buscar"
            }));
        }, F.createForm = function(e, t, n) {
            var r = e.model.attributes, i = $("<form>", {
                "class": e.name
            }), s = $("<div>");
            F.cleanForm(i), F.appendTitle(i, e.title), F.appendSelectionField(i), _.each(e.fields, function(t, n) {
                var i = null, o, u = "", a = " ", f, l, c = null;
                t.placeholder !== undefined ? c = t.placeholder : t.label !== undefined ? c = t.label : t.label === undefined && (c = t), o = t.type == "select" || t.type == "selectmultiple" || t.type == "select_yn";
                if (t.force_label || t.type == "select_yn") i = "<label ", t.type === "checkbox" && (i += 'class="for_checkbox" '), i += 'for="' + n + '">' + t.label + "</label>";
                t.attrs !== undefined && _.each(t.attrs, function(e, t) {
                    a += t + '="' + e + '" ';
                }), a += 'placeholder="' + c + '" ', r[n] && r[n] !== null && (u = r[n]), t.value !== undefined && (u = t.value);
                switch (t.type) {
                  case "hidden":
                    f = $('<input type="hidden" name="' + n + '" value="' + u + '"' + a + "/>");
                    break;
                  case "select":
                    f = $('<select data-placeholder="Seleccione ' + c + '..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">'), $(f).append("<option value></option>"), _.each(e.relations[F.withoutId(n) + "s"], function(e) {
                        $(f).append('<option value="' + e.id + '">' + (e.name || e.nombre) + "</option>");
                    });
                    break;
                  case "select_conNombre":
                    f = $('<select data-placeholder="Seleccione ' + c + '..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">'), $(f).append("<option value></option>"), _.each(e.relations[F.withoutId(n) + "s"], function(e) {
                        $(f).append('<option value="' +(e.name || e.nombre)+ '">' + (e.name || e.nombre) + "</option>");
                    });
                    break;
                  case "selectmultiple":
                    f = $('<select data-placeholder="Seleccione ' + c + '..."' + ' multiple name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:91%;">'), $(f).append("<option value></option>"), _.each(e.relations[F.withoutId(n) + "s"], function(e) {
                        $(f).append('<option value="' + e.id + '">' + (e.name || e.nombre) + "</option>");
                    });
                    break;
                  case "select_ie":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                   var h, p;
                    t.default_value == "1" ? (h = ' selected="selected"', p = null) : (h = null, p = ' selected="selected"'), $(f).append("<option value></option>"), $(f).append('<option value="1"' + h + ">Ingreso</option>" + '<option value="0"' + p + ">Egreso</option>");
                    break;
                  case "select_yn":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    t.default_value == "y" ? (h = ' selected="selected"', p = null) : (h = null, p = ' selected="selected"'), $(f).append("<option value></option>"), $(f).append('<option value="1"' + h + ">Sí</option>" + '<option value="0"' + p + ">No</option>");
                    break;
                  case "select_110":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',$(f).append("<option value></option>"), $(f).append('<option value="1"' + p + ">1</option>" +'<option value="2"' + p + ">2</option>" +'<option value="3"' + p + ">3</option>" +'<option value="4"' + p + ">4</option>" +'<option value="5"' + p + ">5</option>" +'<option value="6"' + p + ">6</option>" +  '<option value="7"' + p + ">7</option>" +'<option value="8"' + p + ">8</option>" +'<option value="9"' + p + ">9</option>" +'<option value="10"' + p + ">10</option>");
                    break;
                  case "select_14":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',$(f).append("<option value></option>"), $(f).append('<option value="1"' + p + ">Urgente(1)</option>" +'<option value="2"' + p + ">Prioritario(2)</option>" +'<option value="3"' + p + ">Normal(3)</option>" +'<option value="4"' + p + ">Retrasable(4)</option>");
                    break;
                  case "select_pc":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',$(f).append("<option value></option>"), $(f).append('<option value="1"' + p + ">Profesional</option>" +'<option value="2"' + p + ">Colaborador</option>");
                    break;
                  case "select_conNombre":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',$(f).append("<option value></option>"), $(f).append('<option value="0"' + p + ">Concepto</option>" +'<option value="1"' + p + ">SubConcepto</option>");
                    break;
                  case "select_b11":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',$(f).append("<option value></option>"), $(f).append('<option value="1"' + p + ">1</option>" +'<option value="2"' + p + ">2</option>" +'<option value="3"' + p + ">3</option>" +'<option value="4"' + p + ">4</option>" +'<option value="5"' + p + ">5</option>" +'<option value="6"' + p + ">6</option>" +  '<option value="7"' + p + ">7</option>" +'<option value="8"' + p + ">8</option>" +'<option value="9"' + p + ">9</option>" +'<option value="10"' + p + ">10</option>"+'<option value="11"' + p + ">11</option>");
                    break;
                  case "select_month":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',
                    $(f).append("<option value></option>"),
                    $(f).append('<option value="1"' + p + ">Enero</option>" +'<option value="2"' + p + ">Febrero</option>" +'<option value="3"' + p + ">Marzo</option>" +'<option value="4"' + p + ">Abril</option>" +'<option value="5"' + p + ">Mayo</option>" +'<option value="6"' + p + ">Junio</option>" +  '<option value="7"' + p + ">Julio</option>" +'<option value="8"' + p + ">Agosto</option>" +'<option value="9"' + p + ">Septiembre</option>" +'<option value="10"' + p + ">Octubre</option>"+'<option value="11"' + p + ">Noviembre</option>"+'<option value="12"' + p + ">Diciembre</option>");
                    break;
                  case "select_year":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',
                    $(f).append("<option value></option>"),
                    $(f).append('<option value="2014"' + p + ">2014</option>" +'<option value="2015"' + p + ">2015</option>" +'<option value="2016"' + p + ">2016</option>" +'<option value="2017"' + p + ">2017</option>" +'<option value="2018"' + p + ">2018</option>" +'<option value="2019"' + p + ">2019</option>" +  '<option value="2020"' + p + ">2020</option>");
                    break;
                  case "textarea":
                    f = $('<textarea name="' + n + '"' + a + ">" + u + "</textarea>");
                    break;
                  case "password":
                    f = $('<input type="password" name="' + n + '" value="' + u + '"' + a + "/>");
                    break;
                  case "datetimepicker":
                    f = $('<input type="text" name="' + n + '" value="' + u + '"' + a + "/>"), $(f).datetimepicker(t.options || {});
                    break;
                  case "datepicker":
                    f = $('<input type="text" name="' + n + '" value="' + u + '"' + a + "/>"), $(f).datepicker(t.options || {});
                    break;
                  case "timepicker":
                    f = $('<input type="text" name="' + n + '" value="' + u + '"' + a + "/>"), $(f).timepicker(t.options || {});
                    break;
                  case "checkbox":
                    f = $('<input type="checkbox" name="' + n + '" value="' + u + '"' + a + "/>");
                    break;
                  default:
                    f = $('<input type="text" name="' + n + '" value="' + u + '"' + a + "/>");
                }
                l = $("<p>", {
                    "class": e.name + "_" + n
                }), $(l).append(i).append(f), $(s).append(l), t.required && t.required === !0 && $(n).attr("required", !0);
                if (t.check !== undefined) {
                    var d = null, v = null;
                    switch (t.check) {
                      case "alpha":
                        v = "[a-zA-Z]+";
                        break;
                      case "numeric":
                        v = "-?d+(.d{0,})?";
                        break;
                      case "integer":
                        v = "[0-9]+";
                        break;
                      case "date":
                        d = "date";
                        break;
                      case "email":
                        d = "email";
                        break;
                      case "url":
                        d = "url";
                        break;
                      case "cuit":
                        v = "[0-9]{2}-[0-9]{8}-[0-9]{1}";
                        break;
                      default:
                    }
                    d !== null && $(n).attr("type", d), (v !== null || v!== '') && $(n).attr("pattern", v);
                } else t.type === "select";
                t.callback && t.callback(s);
            }), $(i).append(s), F.appendFormButtons(e, i), t ? $(t).append(i) : $(e.el).append(i), F.renderAllChosen(), n && n(i);
        }, F.createFormS = function(e, t, n) {
            var r = e.model.attributes, i = $("<form>", {
                "class": e.name
            }), s = $("<div>");
            F.cleanForm(i), F.appendTitle(i, e.title), F.appendSelectionField(i), _.each(e.fields, function(t, n) {
                var i = null, o, u = "", a = " ", f, l, c = null;
                t.placeholder !== undefined ? c = t.placeholder : t.label !== undefined ? c = t.label : t.label === undefined && (c = t), o = t.type == "select" || t.type == "selectmultiple" || t.type == "select_yn";
                if (t.force_label || t.type == "select_yn") i = "<label ", t.type === "checkbox" && (i += 'class="for_checkbox" '), i += 'for="' + n + '">' + t.label + "</label>";
                t.attrs !== undefined && _.each(t.attrs, function(e, t) {
                    a += t + '="' + e + '" ';
                }), a += 'placeholder="' + c + '" ', r[n] && r[n] !== null && (u = r[n]), t.value !== undefined && (u = t.value);
                switch (t.type) {
                  case "hidden":
                    f = $('<input type="hidden" name="' + n + '" value="' + u + '"' + a + "/>");
                    break;
                  case "select":
                    f = $('<select data-placeholder="Seleccione ' + c + '..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">'), $(f).append("<option value></option>"), _.each(e.relations[F.withoutId(n) + "s"], function(e) {
                        $(f).append('<option value="' + e.id + '">' + (e.name || e.nombre) + "</option>");
                    });
                    break;
                  case "select_conNombre":
                    f = $('<select data-placeholder="Seleccione ' + c + '..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">'), $(f).append("<option value></option>"), _.each(e.relations[F.withoutId(n) + "s"], function(e) {
                        $(f).append('<option value="' +(e.name || e.nombre)+ '">' + (e.name || e.nombre) + "</option>");
                    });
                    break;
                  case "select_ie":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    t.default_value == "1" ? (h = ' selected="selected"', p = null) : (h = null, p = ' selected="selected"'), $(f).append("<option value></option>"), $(f).append('<option value="1"' + h + ">Ingreso</option>" + '<option value="0"' + p + ">Egreso</option>");
                    break;
                  case "select_yn":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    t.default_value == "y" ? (h = ' selected="selected"', p = null) : (h = null, p = ' selected="selected"'), $(f).append("<option value></option>"), $(f).append('<option value="1"' + h + ">Sí</option>" + '<option value="0"' + p + ">No</option>");
                    break;
                  case "selectmultiple":
                    f = $('<select data-placeholder="Seleccione ' + c + '..."' + ' multiple name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:91%;">'), $(f).append("<option value></option>"), _.each(e.relations[F.withoutId(n) + "s"], function(e) {
                        $(f).append('<option value="' + e.id + '">' + (e.name || e.nombre) + "</option>");
                    });
                    break;
                  case "select_110":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',$(f).append("<option value></option>"), $(f).append('<option value="1"' + p + ">1</option>" +'<option value="2"' + p + ">2</option>" +'<option value="3"' + p + ">3</option>" +'<option value="4"' + p + ">4</option>" +'<option value="5"' + p + ">5</option>" +'<option value="6"' + p + ">6</option>" +  '<option value="7"' + p + ">7</option>" +'<option value="8"' + p + ">8</option>" +'<option value="9"' + p + ">9</option>" +'<option value="10"' + p + ">10</option>");
                    break;
                  case "select_14":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',$(f).append("<option value></option>"), $(f).append('<option value="1"' + p + ">Urgente(1)</option>" +'<option value="2"' + p + ">Prioritario(2)</option>" +'<option value="3"' + p + ">Normal(3)</option>" +'<option value="4"' + p + ">Retrasable(4)</option>");
                    break;
                  case "select_pc":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',$(f).append("<option value></option>"), $(f).append('<option value="1"' + p + ">Profesional</option>" +'<option value="2"' + p + ">Colaborador</option>");
                    break;
                  case "select_conNombre":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',$(f).append("<option value></option>"), $(f).append('<option value="0"' + p + ">Concepto</option>" +'<option value="1"' + p + ">SubConcepto</option>");
                    break;
                  case "select_month":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',
                    $(f).append("<option value></option>"),
                    $(f).append('<option value="1"' + p + ">Enero</option>" +'<option value="2"' + p + ">Febrero</option>" +'<option value="3"' + p + ">Marzo</option>" +'<option value="4"' + p + ">Abril</option>" +'<option value="5"' + p + ">Mayo</option>" +'<option value="6"' + p + ">Junio</option>" +  '<option value="7"' + p + ">Julio</option>" +'<option value="8"' + p + ">Agosto</option>" +'<option value="9"' + p + ">Septiembre</option>" +'<option value="10"' + p + ">Octubre</option>"+'<option value="11"' + p + ">Noviembre</option>"+'<option value="12"' + p + ">Diciembre</option>");
                    break;
                  case "select_year":
                    f = $('<select data-placeholder="¿' + c + '?..." name="' + n + '"' + a + ' class="chzn-select" style="display:none; position:relative; width:89%;">');
                    var h, p;
                    p = null, h = ' selected="selected"',
                    $(f).append("<option value></option>"),
                    $(f).append('<option value="2014"' + p + ">2014</option>" +'<option value="2015"' + p + ">2015</option>" +'<option value="2016"' + p + ">2016</option>" +'<option value="2017"' + p + ">2017</option>" +'<option value="2018"' + p + ">2018</option>" +'<option value="2019"' + p + ">2019</option>" +  '<option value="2020"' + p + ">2020</option>");
                    break;
                  case "textarea":
                    f = $('<textarea name="' + n + '"' + a + ">" + u + "</textarea>");
                    break;
                  case "password":
                    f = $('<input type="password" name="' + n + '" value="' + u + '"' + a + "/>");
                    break;
                  case "datetimepicker":
                    f = $('<input type="text" name="' + n + '" value="' + u + '"' + a + "/>"), $(f).datetimepicker(t.options || {});
                    break;
                  case "datepicker":
                    f = $('<input type="text" name="' + n + '" value="' + u + '"' + a + "/>"), $(f).datepicker(t.options || {});
                    break;
                  case "timepicker":
                    f = $('<input type="text" name="' + n + '" value="' + u + '"' + a + "/>"), $(f).timepicker(t.options || {});
                    break;
                  case "checkbox":
                    f = $('<input type="checkbox" name="' + n + '" value="' + u + '"' + a + "/>");
                    break;
                  default:
                    f = $('<input type="text" name="' + n + '" value="' + u + '"' + a + "/>");
                }
                l = $("<p>", {
                    "class": e.name + "_" + n
                }), $(l).append(i).append(f), $(s).append(l), t.required && t.required === !0 && $(n).attr("required", !0);
                if (t.check !== undefined) {
                    var d = null, v = null;
                    switch (t.check) {
                      case "alpha":
                        v = "[a-zA-Z]+";
                        break;
                      case "numeric":
                        v = "-?d+(.d{0,})?";
                        break;
                      case "integer":
                        v = "[0-9]+";
                        break;
                      case "date":
                        d = "date";
                        break;
                      case "email":
                        d = "email";
                        break;
                      case "url":
                        d = "url";
                        break;
                      case "cuit":
                        v = "[0-9]{2}-[0-9]{8}-[0-9]{1}";
                        break;
                      default:
                    }
                    d !== null && $(n).attr("type", d), (v !== null || v!== '') && $(n).attr("pattern", v);
                } else t.type === "select";
                t.callback && t.callback(s);
            }), $(i).append(s), F.appendFormButtonsS(e, i), t ? $(t).append(i) : $(e.el).append(i), F.renderAllChosen(), n && n(i);
        }, F.appendInfocardTitle = function(e) {
            $(e).append('<h3 class="underlined">' + title + "</h3>");
        }, F.getInfoCardFields = function(e) {
            return $(e).find("span");
        }, F.cleanInfocard = function(e) {
            F.getInfoCardFields(e).text("");
        }, F.assignValuesToInfoCard = function(e, t, n) {
            var r = F.getInfoCardFields(e);
            _.each(r, function(e, n) {
                $(e).text(t[$(e).attr("name")]);
            }), n && n(e, t);
        }, F.createInfoCard = function(e, t, n) {
            var r = e.model.attributes, i = $("<div>", {
                "class": "infocard " + e.name
            });
            F.cleanInfocard(i), F.appendTitle(i, e.title), F.appendSelectionField(i), _.each(e.fieldnames, function(t, n) {
                r[n]=null,// r[n]=null lo agrego para obligar el if
                r[n] !== undefined && $(i).append('<p><label for="' + n + '">' + e.fieldnames[n] + "</label>: " + '<span name="' + n + '">' + (r[n] !== null ? r[n] : "") + "</span>" + "</p>");
            }), t ? $(t).append(i) : $("#" + e.name + "_right").append(i), n && n(i);
        }, F.createDataFeed = function(e, t, n) {
            $("#" + e.name + "_right").append($('<div class="feedtitle">' + t + "</div>")).append($("<div>", {
                "class": "feed datafeed_" + e.name
            }));
            var r = function() {
                e.data.fetch({
                    success: function(t, n) {
                        $(".datafeed_" + e.name).empty(), n.length ? ($(".datafeed_" + e.name).removeClass("no_news_to_report"), _.each(n, function(t, n) {
                            $(".datafeed_" + e.name).append("<h3>" + t.name + "</h3>" + "<p>" + t.description + "</h3>");
                        })) : ($(".datafeed_" + e.name).addClass("no_news_to_report"), $(".datafeed_" + e.name).append("Nada que reportar..."));
                    }
                });
            };
            r(), window.setInterval(function() {
                r();
            }, 5e3), n && n(e);
        };
    }),
//CODE WIDGETS
    e.define("/widgets/Novedades.js", function(e, t, n, r, i, s) {
        C.Widget.Novedades = {
            initialize: function() {
                $("#head #tabs").empty().append('<a href="/#/inicio/novedades">Novedades</a><a href="/#/inicio/novTarea">Tareas</a>'), $("#left .inner").empty().append('<div id="novedades_left"></div>'), $("#right .inner").empty().append('<div id="novedades_right"></div>');
            }
        };
    }),
    e.define("/widgets/Cliente.js", function(e, t, n, r, i, s) {
        C.Widget.Cliente = {
            initialize: function(e) {
                $("#head #tabs").empty().append('<a href="/#/cliente/nomina">Clientes</a><a href="/#/cliente/cuentaCorriente">Cuentas Corrientes</a><a href="/#/cliente/impuesto">Impuestos</a><a href="/#/cliente/clave">Claves</a><a href="/#/cliente/deuda">Deudas</a><a href="/#/cliente/listDeuda">List. Deudas</a><a href="/#/cliente/listado">List. Imp.</a><a href="/#/cliente/ajusteCta">Ajustes Ctas</a>'), $("#left .inner").empty().append('<div id="cliente_left"></div>'), $("#right .inner").empty().append('<div id="cliente_right"></div>');
            }
        };
    }),
    e.define("/widgets/Perfil.js", function(e, t, n, r, i, s) {
        C.Widget.Perfil = {
            initialize: function() {
                $("#head #tabs").empty().append('<a href="/#/opciones/perfil">Perfil</a>'),
                $("#left .inner").empty().append('<div id="perfil_left"></div>'),
                $("#right .inner").empty().append('<div id="perfil_right"></div>');
            }
        };
    }),
    e.define("/widgets/CRUD.js", function(e, t, n, r, i, s) {
        C.Widget.CRUD = {
            initialize: function(e) {
                $("#head #tabs").empty().append('<a href="/#/crud/empleado">Empleados</a><a href="/#/crud/usuario">Usuarios</a><a href="/#/crud/clasificacion">Clasificaciones</a><a href="/#/crud/banco">Bancos</a><a href="/#/crud/actividad">Actividades</a><a href="/#/crud/area">Areas</a><a href="/#/crud/rubro">Rubros</a><a href="/#/crud/impuesto">Impuestos</a><a href="/#/crud/clave">Claves</a><a href="/#/crud/concepto">Conceptos</a>'),
                $("#left .inner").empty().append('<div id="'+ (e || "crud" ) +'_left"></div>'),
                $("#right .inner").empty().append('<div id="'+ (e || "crud") +'_right"></div>');
            }
        };
    }),
    e.define("/widgets/OT.js", function(e, t, n, r, i, s) {
        C.Widget.OT = {
            initialize: function(e) {
                $("#head #tabs").empty().append('<a href="/#/ot/audit">Seguimiento</a><a href="/#/ot/admin">Administrar</a><a href="/#/ot/oc">Consultas</a><a href="/#/ot/plan">Planes</a><a href="/#/ot/tarea">Tareas</a><a href="/#/ot/history">Historial</a><a href="/#/ot/otTareaAll">Historial Tareas</a>'),
                $("#left .inner").empty().append('<div id="'+ (e || "ot" ) +'_left"></div>'),
                $("#right .inner").empty().append('<div id="'+ (e || "ot") +'_right"></div>');
            }
        };
    }),
    e.define("/widgets/Caja.js", function(e, t, n, r, i, s) {
        C.Widget.Caja = {
            initialize: function(e) {
                $("#head #tabs").empty().append('<a href="/#/caja/revision">Revision</a><a href="/#/caja/caja">Caja</a><a href="/#/caja/cBanco">Banco</a><a href="/#/caja/ctaCliente">Cuentas Clientes</a><a href="/#/caja/ajusteCaja">Ajustes</a>'),
                $("#left .inner").empty().append('<div id="'+ (e || "caja" ) +'_left"></div>'),
                $("#right .inner").empty().append('<div id="'+ (e || "caja") +'_right"></div>');
            }
        };
    }),
    e.define("/widgets/IE.js", function(e, t, n, r, i, s) {
        C.Widget.IE = {
            initialize: function(e) {
                $("#head #tabs").empty().append('<a href="/#/ie/clienteDocumentacion">Documentación</a><a href="/#/ie/clientePago">Pagos</a><a href="/#/ie/ieOt">OT</a><a href="/#/ie/ieOc">OC</a><a href="/#/ie/clienteHistorial">Historial de Pagos</a>'),
                $("#left .inner").empty().append('<div id="'+ (e || "ie" ) +'_left"></div>'),
                $("#right .inner").empty().append('<div id="'+ (e || "ie") +'_right"></div>');
            }
        };
    }),
    e.define("/widgets/Carga.js", function(e, t, n, r, i, s) {
        C.Widget.Carga = {
            initialize: function(e) {
                  //$("#head #tabs").empty().append('<a href="/#/carga/cargado">Imp. Sin Asignar</a><a href="/#/carga/noCargado">No Cargados</a> <a href="/#/carga/cargaFijo">Imp. Fijos</a> <a href="/#/carga/sindicato">Sindicatos</a><a href="/#/carga/otro">Otros</a>'),
                  $.ajax({
                    type: "GET",
                    url: "/impuesto/variable/",
                    success: function(t) {
                      var a = '';
                      t.forEach(function(imp){
                        a+='<li><a href="/#/carga/'+imp.nombre+'"> '+imp.nombreInterno+'</a></li>';
                      });
                      $("#head #tabs").empty().append('<div><ul id="menusi"><li>Impuestos<ul><li><a href="/#/carga/cargado">Imp. Sin Asignar</a></li><li><a href="/#/carga/noCargado">No Cargados</a></li><li><a href="/#/carga/cargaFijo">Imp. Fijos</a></li><li><a href="/#/carga/sindicato">Sindicatos</a></li><li><a href="/#/carga/otro">Otros</a></li>'+a+'</li></ul></ul>﻿</div>');
                    }
                  });
                  var carga;
                  if(e){
                    if(e=="cargado")
                      carga="cargado",console.log("CARGADO")
                    else{
                      if(e=="sindicato")
                        carga="sindicato",console.log("SINDICATO")
                      else
                        if(e=="noCargado")
                          carga="noCargado", console.log("NoCARGADO")
                        else
                          if(e=="otro")
                            carga="otro", console.log("Otro")
                          else
                            carga="carga",console.log("CARGA")
                    }
                  }else{
                    carga="cargaFijo",console.log("cargaFijo")
                  }
                  $("#left .inner").empty().append('<div id="'+carga+'_left"></div>'),
                  $("#right .inner").empty().append('<div id="'+carga+'_right"></div>');

            }
        };
    }),
    e.define("/widgets/Cronograma.js", function(e, t, n, r, i, s) {
        C.Widget.Cronograma = {
            initialize: function(e) {
                  $("#head #tabs").empty().append('<a href="/#/cronograma/asignacion">Asignación</a><a href="/#/cronograma/aviso">Aviso</a><a href="/#/cronograma/recepcion">Recepción</a><a href="/#/cronograma/vencimiento">Vencimiento</a>'),
                  $("#left .inner").empty().append('<div id="'+ (e || "cronograma" ) +'_left"></div>'),
                  $("#right .inner").empty().append('<div id="'+ (e || "cronograma" ) +'_right"></div>');

            }
        };
    }),
    e.define("/widgets/PagarImp.js", function(e, t, n, r, i, s) {
        C.Widget.PagarImp = {
            initialize: function(e) {
                  $("#head #tabs").empty().append('<a href="/#/pagarImp/pagoImp">A Pagar</a><a href="/#/pagarImp/recepImp">En Tránsito</a><a href="/#/pagarImp/descImp">A Descargar</a><a href="/#/pagarImp/archImp">A Archivar</a><a href="/#/pagarImp/archivado">Archivados</a>'),
                  $("#left .inner").empty().append('<div id="'+(e||"pagarImp")+'_left"></div>'),
                  $("#right .inner").empty().append('<div id="'+(e||"pagarImp")+'_right"></div>');

            }
        };
    }),
    e.define("/widgets/GestCrono.js", function(e, t, n, r, i, s) {
        C.Widget.GestCrono = {
            initialize: function(e) {
                  $("#head #tabs").empty().append('<a href="/#/gestCrono/asignacion">Asignación</a> <a href="/#/gestCrono/aviso">Aviso</a><a href="/#/gestCrono/avisoPersonal">Aviso Personal</a><a href="/#/gestCrono/avisoTest">Test Mail</a><a href="/#/gestCrono/asigPie">Pie E-Mail</a>'),
                  $("#left .inner").empty().append('<div id="'+ (e||"gestCrono" ) +'_left"></div>'),
                  $("#right .inner").empty().append('<div id="'+ (e||"gestCrono" ) +'_right"></div>');

            }
        };
    }),
//CODE MODELS
   e.define("/models/Novedades.js", function(e, t, n, r, i, s) {
        C.Model.Novedades = Backbone.Model.extend({
            urlRoot: "/novedades",
            defaults: function() {
                return {
		 /*DATOS DE LA NOVEDAD*/
		               id: null,
            		   novedad: null,
                   descripcion: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Novedadess = Backbone.Collection.extend({
            model: C.Model.Novedades,
            url: "/novedades",
            initialize: function(e, t) {}
        });
    }),
   e.define("/models/NovTarea.js", function(e, t, n, r, i, s) {
        C.Model.NovTarea = Backbone.Model.extend({
            urlRoot: "/novTarea",
            defaults: function() {
                return {
		 /*DATOS DE LA NOVTAREA*/
                  id: null,
                  area: null,
                  otNumero: null,
                  titulo: null,
                  descripcion: null,
                  vencimiento: null,
                  tiempoEstimado: null,
                  empleado: null,
                  cliente: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.NovTareas = Backbone.Collection.extend({
            model: C.Model.NovTarea,
            url: "/novTarea",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Cliente.js", function(e, t, n, r, i, s) {
        C.Model.Cliente = Backbone.Model.extend({
            urlRoot: "/cliente",
            defaults: function() {
                return {
		/*DATOS DEL CLIENTE*/
                   id: null,
                   clienteCuentaCorriente_id: null,
        		       cuentaCorriente_id: null,
                   clasificacion_id: null,
                   clasificacion: null,
                   comunicacion_id: null,
                   comunicacion: null,
                   actividad_id: null,
                   actividad: null,
                   catedral: null,
                   cuit:null,
                   nombre: null,
                   telefono: null,
                   celular: null,
              	   email: null,
              		 radio: null,
                   empleado: null,
                   cliente: null,
                   monto: null,
                   montoTramite: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Clientes = Backbone.Collection.extend({
            model: C.Model.Cliente,
            url: "/cliente",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/ListDeuda.js", function(e, t, n, r, i, s) {
        C.Model.ListDeuda = Backbone.Model.extend({
            urlRoot: "/listDeuda",
            defaults: function() {
                return {
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.ListDeudas = Backbone.Collection.extend({
            model: C.Model.ListDeuda,
            url: "/listDeuda",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Listado.js", function(e, t, n, r, i, s) {
        C.Model.Listado = Backbone.Model.extend({
            urlRoot: "/listado",
            defaults: function() {
                return {
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Listados = Backbone.Collection.extend({
            model: C.Model.Listado,
            url: "/listado",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/CuentaCorriente.js", function(e, t, n, r, i, s) {
        C.Model.CuentaCorriente = Backbone.Model.extend({
            urlRoot: "/cuentaCorriente",
            defaults: function() {
                return {
		/*DATOS DE LA CUENTA CORRIENTE*/
                   id: null,
                   observacion: null,
  	               monto: null,
                   montoTramite: null,
                   clienteNombre: null,
                   clienteComunicacion: null,
                   clienteActividad: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.CuentaCorrientes = Backbone.Collection.extend({
            model: C.Model.CuentaCorriente,
            url: "/cuentaCorriente",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/CuentaCorrienteMovimientos.js", function(e, t, n, r, i, s) {
        C.Model.CuentaCorrienteMovimientos = Backbone.Model.extend({
            defaults: function() {
                return {
		/*DATOS DEL CUENTACORRIENTEMOVIMIENTO*/
                    id: null,
                    tramite: null,
                    clienteNombre: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        });
    }),
    e.define("/models/Deuda.js", function(e, t, n, r, i, s) {
        C.Model.Deuda = Backbone.Model.extend({
            urlRoot: "/deuda",
            defaults: function() {
                return {
		/*DATOS DE DEUDA*/
                   id: null,
                   observacion: null,
  	               monto: null,
                   montoTramite: null,
                   clienteNombre: null,
                   clienteComunicacion: null,
                   clienteActividad: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Deudas = Backbone.Collection.extend({
            model: C.Model.Deuda,
            url: "/deuda",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/DeudaImpuesto.js", function(e, t, n, r, i, s) {
        C.Model.DeudaImpuesto = Backbone.Model.extend({
            defaults: function() {
                return {
		/*DATOS DE DeudaImpuesto*/
                    id: null,
                    tramite: null,
                    clienteNombre: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        });
    }),
    e.define("/models/ClienteClave.js", function(e, t, n, r, i, s) {
        C.Model.ClienteClave = Backbone.Model.extend({
            urlRoot: "/clienteClave",
            defaults: function() {
                return {
		/*DATOS DEL CLIENTECLAVE*/
                  pass: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.ClienteClaves = Backbone.Collection.extend({
            model: C.Model.ClienteClave,
            url: "/clienteClave",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/ClienteImpuesto.js", function(e, t, n, r, i, s) {
        C.Model.ClienteImpuesto = Backbone.Model.extend({
            urlRoot: "/clienteImpuesto",
            defaults: function() {
                return {
		/*DATOS DEL CLIENTEIMPUESTO*/
                  idClienteImpuesto: null,
                  idCliente: null,
                  idImpuesto: null,
                  nombre: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.ClienteImpuestos = Backbone.Collection.extend({
            model: C.Model.ClienteImpuesto,
            url: "/clienteImpuesto",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Impuesto.js", function(e, t, n, r, i, s) {
        C.Model.Impuesto = Backbone.Model.extend({
            urlRoot: "/impuesto",
            defaults: function() {
                return {
		/*DATOS DEL IMPUESTO*/
                   id: null,
                   observacion: null,
  	               monto: null,
                   montoTramite: null,
                   clienteNombre: null,
                   clienteComunicacion: null,
                   clienteActividad: null,
                   rubro_id: null,
                   rubro: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Impuestos = Backbone.Collection.extend({
            model: C.Model.Impuesto,
            url: "/impuesto",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/AjusteCta.js", function(e, t, n, r, i, s) {
        C.Model.AjusteCta = Backbone.Model.extend({
            urlRoot: "/ajusteCta",
            defaults: function() {
                return {
         //Datos para Ajustar Ctas Ctes
                   id: null,
                   catedral: null,
                   comunicacion: null,
                   nombre: null,
  	               monto: null,
                   montoTramite: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.AjusteCtas = Backbone.Collection.extend({
            model: C.Model.AjusteCta,
            url: "/ajusteCta",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/ClienteDocumentacion.js", function(e, t, n, r, i, s) {
        C.Model.ClienteDocumentacion = Backbone.Model.extend({
            urlRoot: "/clienteDocumentacion",
            defaults: function() {
                return {
		/*DATOS DE LA CUENTA CORRIENTE*/
  	                 id: null,
  	                 monto:null,
		             clienteCuentaCorriente_id: null,
          		     cuentaCorriente_id: null,
  	                 clasificacion_id: null,
  	                 clasificacion: null,
  	                 comunicacion_id: null,
  	                 comunicacion: null,
  	                 actividad_id: null,
  	                 actividad: null,
  	                 catedral: null,
  	                 cuit:null,
  	                 nombre: null,
  	                 telefono: null,
  	                 celular: null,
            		 email: null,
        		     radio: null,
	                 empleado: null,
	                 cliente: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.ClienteDocumentacions = Backbone.Collection.extend({
            model: C.Model.ClienteDocumentacion,
            url: "/clienteDocumentacion",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/ClientePago.js", function(e, t, n, r, i, s) {
        C.Model.ClientePago = Backbone.Model.extend({
            urlRoot: "/cliente/all",
            defaults: function() {
                return {
        /*DATOS DE LA CUENTA CORRIENTE*/
                     id: null,
                     monto:null,
                     clienteCuentaCorriente_id: null,
                     cuentaCorriente_id: null,
                     clasificacion_id: null,
                     clasificacion: null,
                     comunicacion_id: null,
                     comunicacion: null,
                     actividad_id: null,
                     actividad: null,
                     catedral: null,
                     cuit:null,
                     nombre: null,
                     telefono: null,
                     celular: null,
                     email: null,
                     radio: null,
                     empleado: null,
                     cliente: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.ClientePagos = Backbone.Collection.extend({
            model: C.Model.ClientePago,
            url: "/cliente/all",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/PagoImp.js", function(e, t, n, r, i, s) {
        C.Model.PagoImp = Backbone.Model.extend({
            urlRoot: "/pagoImp",
            defaults: function() {
                return {
                  id: null,
                  check: null,
                  impuesto_id: null,
                  impuestoNombre: null,
                  impuestoMonto: null,
                  impuestoBanco: null,
                  cronograma_id: null,
                  cronogramaFecha: null,
                  cliente_id: null,
                  clienteNombre: null,
                  // AGREGO
                  monto0: null,
                  monto1: null,
                  monto2: null,
                  monto3: null,
                  monto4: null,
                  // FIN AGREGO
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.PagoImps = Backbone.Collection.extend({
            model: C.Model.PagoImp,
            url: "/pagoImp",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/RecepImp.js", function(e, t, n, r, i, s) {
        C.Model.RecepImp = Backbone.Model.extend({
            urlRoot: "/recepImp",
            defaults: function() {
                return {
                  id: null,
                  banco_id: null,
                  bancoNombre: null,
                  empleado_id: null,
                  empleadoNombre: null,
                  total: null,
                  diaDePago: null,
                  /* AGREGO
                  monto0: null,
                  monto1: null,
                  monto2: null,
                  monto3: null,
                  monto4: null,
                  /* FIN AGREGO */
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.RecepImps = Backbone.Collection.extend({
            model: C.Model.RecepImp,
            url: "/recepImp",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/DescImp.js", function(e, t, n, r, i, s) {
        C.Model.DescImp = Backbone.Model.extend({
            urlRoot: "/descImp",
            defaults: function() {
                return {
                  id: null,
//DESCIMPMODEL

                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.DescImps = Backbone.Collection.extend({
            model: C.Model.DescImp,
            url: "/descImp",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/ArchImp.js", function(e, t, n, r, i, s) {
        C.Model.ArchImp = Backbone.Model.extend({
            urlRoot: "/archImp",
            defaults: function() {
                return {
                  id: null,
//ARCHIMPMODEL

                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.ArchImps = Backbone.Collection.extend({
            model: C.Model.ArchImp,
            url: "/archImp",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Archivado.js", function(e, t, n, r, i, s) {
        C.Model.Archivado = Backbone.Model.extend({
            urlRoot: "/archivado",
            defaults: function() {
                return {
                  id: null,
//ARCHIVADOMODEL
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Archivados = Backbone.Collection.extend({
            model: C.Model.Archivado,
            url: "/archivado",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Perfil.js", function(e, t, n, r, i, s) {
        C.Model.Perfil = Backbone.Model.extend({
            urlRoot: "/perfil",
            defaults: function() {
                return {
		/*DATOS DEL PERFIL*/
                    usuario_id: null,
                    usuario: null,
                    pass1: null,
                    pass2: null,
                    rol_id: null,
                    area_id: null,
                    empleado_id: null,
                    nombre: null,
                    apellido: null,
                    telefono: null,
                    dni: null,
                    mail: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Perfils = Backbone.Collection.extend({
            model: C.Model.Perfil,
            url: function() {
                return "/perfil/" + $("#session_user_id").html();
            },
            initialize: function(e, t) {
                this.usuario_id = $("#session_usuario_id").html(), this.usuario = $("#session_usuario").html();
            }
        });
    }),
    e.define("/models/Empleado.js", function(e, t, n, r, i, s) {
        C.Model.Empleado = Backbone.Model.extend({
            urlRoot: "/empleado",
            defaults: function() {
                return {
		/*DATOS DEL EMPLEADO*/
                    nombre: null,
                    apellido: null,
                    telefono: null,
                    dni: null,
                    mail: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Empleados = Backbone.Collection.extend({
            model: C.Model.Empleados,
            url: "/empleado",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Usuario.js", function(e, t, n, r, i, s) {
        C.Model.Usuario = Backbone.Model.extend({
            urlRoot: "/usuario",
            defaults: function() {
                return {
		/*DATOS DEL USUARIO*/
                    usuario: null,
                    empledo: null,
                    empleado_id: null,
                    rol: null,
                    rol_id: null,
                    area: null,
                    area_id: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Usuarios = Backbone.Collection.extend({
            model: C.Model.Usuario,
            url: "/usuario",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Clasificacion.js", function(e, t, n, r, i, s) {
        C.Model.Clasificacion = Backbone.Model.extend({
            urlRoot: "/clasificacion",
            defaults: function() {
                return {
		/*DATOS DEL CLASIFICACION*/
                    nombre: null,
                    observacion: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Clasificacions = Backbone.Collection.extend({
            model: C.Model.Clasificacion,
            url: "/clasificacion",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Concepto.js", function(e, t, n, r, i, s) {
        C.Model.Concepto = Backbone.Model.extend({
            urlRoot: "/concepto",
            defaults: function() {
                return {
		/*DATOS DEL Concepto*/
                    nombre: null,
                    sub: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Conceptos = Backbone.Collection.extend({
            model: C.Model.Concepto,
            url: "/concepto",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Banco.js", function(e, t, n, r, i, s) {
        C.Model.Banco = Backbone.Model.extend({
            urlRoot: "/banco",
            defaults: function() {
                return {
                    nombre: null,
                    observacion: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Bancos = Backbone.Collection.extend({
            model: C.Model.Banco,
            url: "/banco",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Area.js", function(e, t, n, r, i, s) {
        C.Model.Area = Backbone.Model.extend({
            urlRoot: "/area",
            defaults: function() {
                return {
		/*DATOS DEL Area*/
                    nombre: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Areas = Backbone.Collection.extend({
            model: C.Model.Area,
            url: "/area",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Actividad.js", function(e, t, n, r, i, s) {
        C.Model.Actividad = Backbone.Model.extend({
            urlRoot: "/actividad",
            defaults: function() {
                return {
		/*DATOS DEL ACTIVIDAD*/
                    idFormularioAfip: null,
                    nombre: null,
                    observacion: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Actividads = Backbone.Collection.extend({
            model: C.Model.Actividad,
            url: "/actividad",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Clave.js", function(e, t, n, r, i, s) {
        C.Model.Clave = Backbone.Model.extend({
            urlRoot: "/clave",
            defaults: function() {
                return {
		/*DATOS DE LA CLAVE*/
                    nombre: null,
                    descripcion: null,
                    pagina: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Claves = Backbone.Collection.extend({
            model: C.Model.Clave,
            url: "/clave",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Tarea.js", function(e, t, n, r, i, s) {
        C.Model.Tarea = Backbone.Model.extend({
            urlRoot: "/tarea",
            defaults: function() {
                return {
		    /*DATOS DE LA TAREA*/
	                id: null,
	                otNumero: null,
	                titulo: null,
                  descripcion: null,
                  vencimiento: null,
                  tiempoEstimado: null,
                  empleado: null,
                  area: null,
                  cliente: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Tareas = Backbone.Collection.extend({
            model: C.Model.Tarea,
            url: "/tarea",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Plan.js", function(e, t, n, r, i, s) {
        C.Model.Plan = Backbone.Model.extend({
            urlRoot: "/plan",
            defaults: function() {
                return {
		            /*DATOS DEL PLAN*/
		              id: null,
		              nombre: null,
		              descripcion: null,
		              tarea_id: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Plans = Backbone.Collection.extend({
            model: C.Model.Plan,
            url: "/plan",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Ot.js", function(e, t, n, r, i, s) {
        C.Model.Ot = Backbone.Model.extend({
            urlRoot: "/ot",
            defaults: function() {
                return {
                  creada: null,
                  id: null,
                  estado: null,
                  numero: null,
                  cliente_id: null,
                  clienteNombre: null,
                  fechaVencimiento: null,
                  plan_id: null,
                  notificarCliente: null,
                  honorarios: null,
                  prioridad: null,
                  coordinador:null,
                  descripcion: null,
                  conclusion: null,
                  consulta: null,
                  titulo: null,
                  ingreso: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Ots = Backbone.Collection.extend({
            model: C.Model.Ot,
            url: "/ot",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/IeOt.js", function(e, t, n, r, i, s) {
        C.Model.IeOt = Backbone.Model.extend({
            urlRoot: "/ieot",
            defaults: function() {
                return {
                  id: null,
                  estado: null,
                  numero: null,
                  cliente_id: null,
                  clienteNombre: null,
                  fechaVencimiento: null,
                  plan_id: null,
                  notificarCliente: null,
                  honorarios: null,
                  prioridad: null,
                  coordinador:null,
                  descripcion: null,
                  conclusion: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.IeOts = Backbone.Collection.extend({
            model: C.Model.IeOt,
            url: "/ieot",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/IeOc.js", function(e, t, n, r, i, s) {
        C.Model.IeOc = Backbone.Model.extend({
            urlRoot: "/ieoc",
            defaults: function() {
                return {
                  id: null,
                  numero: null,
                  fechaVencimiento: null,
                  titulo: null,
                  consulta: null,
                  solucion: null,
                  notificarCliente: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.IeOcs = Backbone.Collection.extend({
            model: C.Model.IeOc,
            url: "/ieoc",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Oc.js", function(e, t, n, r, i, s) {
        C.Model.Oc = Backbone.Model.extend({
            urlRoot: "/oc",
            defaults: function() {
                return {
                  id: null,
                  numero: null,
                  fechaVencimiento: null,
                  titulo: null,
                  consulta: null,
                  solucion: null,
                  notificarCliente: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Ocs = Backbone.Collection.extend({
            model: C.Model.Oc,
            url: "/oc",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Rubro.js", function(e, t, n, r, i, s) {
        C.Model.Rubro = Backbone.Model.extend({
            urlRoot: "/rubro",
            defaults: function() {
                return {
		/*DATOS DEL RUBRO*/
                  nombre: null,
                  observacion: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Rubros = Backbone.Collection.extend({
            model: C.Model.Rubro,
            url: "/rubro",
            initialize: function(e, t) {}
        });
    }),
   e.define("/models/Carga.js", function(e, t, n, r, i, s) {
        C.Model.Carga = Backbone.Model.extend({
            urlRoot: "/carga",
            defaults: function() {
                return {
                  cliCatedral: null,
                  cliNombre: null,
                  cliComunicacion:null,
                  impNombre: null,
                  impObservacion: null,
                  impFijo: null,
                  impMonto0: null,
                  impMonto1: null,
                  impMonto2: null,
                  impMonto3: null,
                  impTotal: null,
                  impId: null,
                  cliId: null,
                  cronnId: null,
                  mensaje: false
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Cargas = Backbone.Collection.extend({
            model: C.Model.Carga,
            url: "/carga",
            initialize: function(e, t) {
            }
        });
    }),
   e.define("/models/Sindicato.js", function(e, t, n, r, i, s) {
        C.Model.Sindicato = Backbone.Model.extend({
            urlRoot: "/sindicato",
            defaults: function() {
                return {
                  cliCatedral: null,
                  cliNombre: null,
                  cliComunicacion:null,
                  impNombre: null,
                  impObservacion: null,
                  impFijo: null,
                  impMonto0: null,
                  impMonto1: null,
                  impMonto2: null,
                  impMonto3: null,
                  impTotal: null,
                  impId: null,
                  cliId: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Sindicatos = Backbone.Collection.extend({
            model: C.Model.Sindicato,
            url: "/sindicato",
            initialize: function(e, t) {
            }
        });
    }),
   e.define("/models/Otro.js", function(e, t, n, r, i, s) {
        C.Model.Otro = Backbone.Model.extend({
            urlRoot: "/otro",
            defaults: function() {
                return {
                  cliente_id: null,
                  cronograma_id: null,
                  impuesto: null,
                  vtoImpuesto: null,
                  monto: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Otros = Backbone.Collection.extend({
            model: C.Model.Otro,
            url: "/otro",
            initialize: function(e, t) {
            }
        });
    }),
   e.define("/models/CargaFijo.js", function(e, t, n, r, i, s) {
        C.Model.CargaFijo = Backbone.Model.extend({
            urlRoot: "/cargaFijo",
            defaults: function() {
                return {
                  all: null,
                  nombre: null,
                  observacion: null,
                  fijo: null,
                  monto0: null,
                  monto1: null,
                  monto2: null,
                  monto3: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.CargaFijos = Backbone.Collection.extend({
            model: C.Model.CargaFijo,
            url: "/cargaFijo",
            initialize: function(e, t) {}
        });
   }),
   e.define("/models/NoCargado.js", function(e, t, n, r, i, s) {
        C.Model.NoCargado = Backbone.Model.extend({
            urlRoot: "/noCargado",
            defaults: function() {
                return {
                  id: null,
                  cliente: null,
                  impuesto: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.NoCargados = Backbone.Collection.extend({
            model: C.Model.NoCargado,
            url: "/noCargado",
            initialize: function(e, t) {}
        });
   }),
   e.define("/models/Cargado.js", function(e, t, n, r, i, s) {
        C.Model.Cargado = Backbone.Model.extend({
            urlRoot: "/cargado",
            defaults: function() {
                return {
                  id: null,
                  cliente: null,
                  impuesto: null,
                  cronograma: null,
                  monto: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Cargados = Backbone.Collection.extend({
            model: C.Model.Cargado,
            url: "/cargado",
            initialize: function(e, t) {}
        });
   }),
   e.define("/models/Cronograma.js", function(e, t, n, r, i, s) {
        C.Model.Cronograma = Backbone.Model.extend({
            urlRoot: "/cronograma",
            defaults: function() {
                return {
                   mes: null,
                   año: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Cronogramas = Backbone.Collection.extend({
            model: C.Model.Cronograma,
            url: "/cronograma",
            initialize: function(e, t) {}
        });
   }),
   e.define("/models/Recepcion.js", function(e, t, n, r, i, s) {
        C.Model.Recepcion = Backbone.Model.extend({
            urlRoot: "/recepcion",
            defaults: function() {
                return {
                   mes: null,
                   año: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Recepcions = Backbone.Collection.extend({
            model: C.Model.Recepcion,
            url: "/recepcion",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Aviso.js", function(e, t, n, r, i, s) {
        C.Model.Aviso = Backbone.Model.extend({
            urlRoot: "/aviso",
            defaults: function() {
                return {
                   mes: null,
                   año: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Avisos = Backbone.Collection.extend({
            model: C.Model.Aviso,
            url: "/aviso",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Asignacion.js", function(e, t, n, r, i, s) {
        C.Model.Asignacion = Backbone.Model.extend({
            urlRoot: "/asignacion",
            defaults: function() {
                return {
                   mes: null,
                   año: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Asignacions = Backbone.Collection.extend({
            model: C.Model.Asignacion,
            url: "/asignacion",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/AuditarImpuesto.js", function(e, t, n, r, i, s) {
        C.Model.AuditarImpuesto = Backbone.Model.extend({
            urlRoot: "/auditarImpuesto",
            defaults: function() {
                return {
                   mes: null,
                   año: null,
                   auditado: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.AuditarImpuestos = Backbone.Collection.extend({
            model: C.Model.AuditarImpuesto,
            url: "/auditarImpuesto",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/GestAsignacion.js", function(e, t, n, r, i, s) {
        C.Model.GestAsignacion = Backbone.Model.extend({
            urlRoot: "/gestAsignacion",
            defaults: function() {
                return {
                   id: null,
                   mes: null,
                   año: null,
                   nombreMes: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.GestAsignacions = Backbone.Collection.extend({
            model: C.Model.GestAsignacion,
            url: "/gestAsignacion",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/AsigPie.js", function(e, t, n, r, i, s) {
        C.Model.AsigPie = Backbone.Model.extend({
            urlRoot: "/asigPie",
            defaults: function() {
                return {
		/*DATOS DEL AsigPie*/
                    observacion: null
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.AsigPies = Backbone.Collection.extend({
            model: C.Model.AsigPie,
            url: "/asigPie",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/GestAviso.js", function(e, t, n, r, i, s) {
        C.Model.GestAviso = Backbone.Model.extend({
            urlRoot: "/gestAviso",
            defaults: function() {
                return {
                   id: null,
                   mes: null,
                   año: null,
                   nombreMes: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.GestAvisos = Backbone.Collection.extend({
            model: C.Model.GestAviso,
            url: "/gestAviso",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/GestAvisoTest.js", function(e, t, n, r, i, s) {
        C.Model.GestAvisoTest = Backbone.Model.extend({
            urlRoot: "/gestAvisoTest",
            defaults: function() {
                return {
                   id: null,
                   mes: null,
                   año: null,
                   nombreMes: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.GestAvisoTests = Backbone.Collection.extend({
            model: C.Model.GestAvisoTest,
            url: "/gestAvisoTest",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/GestAvisoPersonal.js", function(e, t, n, r, i, s) {
        C.Model.GestAvisoPersonal = Backbone.Model.extend({
            urlRoot: "/cliente",
            defaults: function() {
                return {
		/*DATOS DEL CLIENTE*/
                   id: null,
                   clienteCuentaCorriente_id: null,
        		       cuentaCorriente_id: null,
                   clasificacion_id: null,
                   clasificacion: null,
                   comunicacion_id: null,
                   comunicacion: null,
                   actividad_id: null,
                   actividad: null,
                   catedral: null,
                   cuit:null,
                   nombre: null,
                   telefono: null,
                   celular: null,
              	   email: null,
              		 radio: null,
                   empleado: null,
                   cliente: null,
                   monto: null,
                   montoTramite: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.GestAvisoPersonals = Backbone.Collection.extend({
            model: C.Model.GestAvisoPersonal,
            url: "/cliente",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/OtTarea.js", function(e, t, n, r, i, s) {
        C.Model.OtTarea = Backbone.Model.extend({
            defaults: function() {
                return {
                    nombre: null,
                    descripcion: null,
                    ot_id: null,
                    area_id: null,
                    empleado_id: null,
                    observacion: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        });
    }),
    e.define("/models/OtHistory.js", function(e, t, n, r, i, s) {
        C.Model.OtHistory = Backbone.Model.extend({
            urlRoot: "/othistory",
            defaults: function() {
                return {
                  id: null,
                  tInsumido: null,
                  numero: null,
                  estado: null,
                  cliente_id: null,
                  clienteNombre: null,
                  ingreso: null,
                  fechaVencimiento: null,
                  juridica: null,
                  concluida: null,
                  plan_id:null,
                  notificarCliente: null,
                  honorarios: null,
                  prioridad: null,
                  coordinador: null,
                  titulo: null,
                  descripcion: null,
                  conclusion: null,
                  consulta: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.OtHistorys = Backbone.Collection.extend({
            model: C.Model.OtHistory,
            url: "/othistory",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/OtTareaAll.js", function(e, t, n, r, i, s) {
        C.Model.OtTareaAll = Backbone.Model.extend({
            urlRoot: "/otTarea/all",
            defaults: function() {
                return {
                  id: null,
                  area: null,
                  ot: null,
                  fechaCompleta: null,
                  fechaVencimiento: null,
                  nombre: null,
                  descripcion: null,
                  observacion: null,
                  conclusion: null,
                  tiempoEstimado: null,
                  tiempoInsumido: null,
                  empleado: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.OtTareaAlls = Backbone.Collection.extend({
            model: C.Model.OtTareaAll,
            url: "/otTarea/all",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Revision.js", function(e, t, n, r, i, s) {
        C.Model.Revision = Backbone.Model.extend({
            urlRoot: "/revision",
            defaults: function() {
                return {
          /*DATOS DEL REVISION*/
                  id: null,
                  observacion: null,
                  concepto:null,
                  subConcepto: null,
                  rSubConcepto: null,
                  monto: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Revisions = Backbone.Collection.extend({
            model: C.Model.Revision,
            url: "/revision",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/Caja.js", function(e, t, n, r, i, s) {
        C.Model.Caja = Backbone.Model.extend({
            urlRoot: "/caja",
            defaults: function() {
                return {
          /*DATOS DEL CAJA*/
                  id: null,
                  montoTotal: null,
                  observacion: null,
                  concepto:null,
                  subConcepto: null,
                  rSubConcepto: null,
                  monto: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.Cajas = Backbone.Collection.extend({
            model: C.Model.Caja,
            url: "/caja",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/CBanco.js", function(e, t, n, r, i, s) {
        C.Model.CBanco = Backbone.Model.extend({
            urlRoot: "/cBanco",
            defaults: function() {
                return {
          /*DATOS DEL CBanco*/
                  id: null,
                  montoTotal: null,
                  observacion: null,
                  concepto:null,
                  subConcepto: null,
                  rSubConcepto: null,
                  monto: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.CBancos = Backbone.Collection.extend({
            model: C.Model.CBanco,
            url: "/cBanco",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/CtaCliente.js", function(e, t, n, r, i, s) {
        C.Model.CtaCliente = Backbone.Model.extend({
            urlRoot: "/ctaCliente",
            defaults: function() {
                return {
          /*DATOS DEL CtaCliente*/
                  id: null,
                  montoTotal: null,
                  observacion: null,
                  concepto:null,
                  subConcepto: null,
                  rSubConcepto: null,
                  monto: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.CtaClientes = Backbone.Collection.extend({
            model: C.Model.CtaCliente,
            url: "/ctaCliente",
            initialize: function(e, t) {}
        });
    }),
    e.define("/models/AjusteCaja.js", function(e, t, n, r, i, s) {
        C.Model.AjusteCaja = Backbone.Model.extend({
            urlRoot: "/ajusteCaja",
            defaults: function() {
                return {
         //Datos para Ajustar Cajas
                   id: null,
                   caja_id: null,
                   monto: null,
                   observacion: null,
                   concepto: null,
                   subConcepto: null,
                   rSubConcepto: null,
                };
            },
            initialize: function() {
                this.bind("error", function(e, t) {
                    F.log(t);
                });
            }
        }), C.Collection.AjusteCajas = Backbone.Collection.extend({
            model: C.Model.AjusteCaja,
            url: "/ajusteCaja",
            initialize: function(e, t) {}
        });
    }),
//CODE VIEWS
//NOVEDADES
    e.define("/views/novedades/Novedades.js", function(e, t, n, r, i, s) {
        C.View.Novedades = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.novedadess = new C.Collection.Novedadess(null, {
                    view: this
                }), this.novedadess.fetch({
                    success: function(t, n) {
                        t.forEach(function(nove){
                          nove.attributes.created_at = moment(nove.attributes.created_at).format("DD/MM/YYYY")
                        })
                        e.novedades_table = new C.View.NovedadesTable({
                            el: $("#novedades_left"),
                            collection: t
                        }), e.novedades_infocard = new C.View.NovedadesInfoCard({
                            el: $("#novedades_right"),
                            model: e.model,
                            collection: t,
                            novedades_table: e.novedades_table
                        });
                    }
                });
            }
        });
    }), e.define("/views/novedades/NovedadesTable.js", function(e, t, n, r, i, s) {
        C.View.NovedadesTable = Backbone.View.extend({
            name: "novedades",
            headers: ["ID", "Novedad" ,"Descripcion", "Fecha" ],
            attrs: ["id", "novedad"  ,"descripcion", "created_at"],
            hidden_columns: ["ID"],
            data: null,
            datatableOptions: {
                aoColumns: [null, null , null, null ],
                aaSorting: [],
                iDisplayLength: 500,
            },
            initialize: function() {//MARCELITO
              this.data = this.options.collection, F.createDataTable(this, function(e) {
                F.assignValuesToInfoCard($(".novedades_infocard"), e);
                $(".novedades_infocard").empty().append('<H3>Detalle de la Novedad</H3><br />\
                <span class="bold">Novedad:</span> '+e.novedad+'<br />\
                <span class="bold">Descripción:</span> '+e.descripcion+'<br />\
                <input type="button" class="BUTTON_proceed righty button" value="Descartar"/><br /><br />')
                $(".novedades_infocard .BUTTON_proceed").on("click", function() {
                  $.ajax({
                    type: "POST",
                    url: "/novedades/"+e.id,
                    success: function() {
                      F.msgOK("Se ha descartado la novedad")
                      window.setTimeout(function(){location.reload()},1e3)
                    }
                  })
                })
              });
            },
            events: {
                "click .novedades_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }), e.define("/views/novedades/NovedadesInfoCard.js", function(e, t, n, r, i, s) {
        C.View.NovedadesInfoCard = Backbone.View.extend({
            name: "novedades_infocard",
            title: "Detalle de la Novedad",
            fieldnames: {
                novedad: "Novedad",
                descripcion: "Descripción",
            },
            initialize: function() {
                var e = this;
                F.createInfoCard(this, $("#novedades_right"));
            },
            getTable: function() {
                return this.options.novedades_table;
            },
            getDataTable: function() {
                return this.getTable().datatable;
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            },
            getSelectionRow: function() {
                return this.getTable().selected_row;
            }
        });
    }),
//NOVTAREA
    e.define("/views/novedades/NovTarea.js", function(e, t, n, r, i, s) {
        C.View.NovTarea = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.novTareas = new C.Collection.NovTareas(null, {
                    view: this
                }), this.novTareas.fetch({
                    success: function(t, n) {
                        e.novedades_table = new C.View.NovTareaTable({
                            el: $("#novedades_left"),
                            collection: t
                        }), e.novTarea_infocard = new C.View.NovTareaInfoCard({
                            el: $("#novedades_right"),
                            model: e.model,
                            collection: t,
                            novTarea_table: e.novTarea_table
                        });
                    }
                });
            }
        });
    }), e.define("/views/novedades/NovTareaTable.js", function(e, t, n, r, i, s) {
        C.View.NovTareaTable = Backbone.View.extend({
            name: "novedades",
            headers: ["ID", "O/T", "Título", "Descripción", "Vencimiento", "Tiempo Estimado", "Empleado", "Area", "Cliente" ],
            attrs: ["id", "otNumero", "titulo", "descripcion", "vencimiento", "tiempoEstimado", "empleado", "area", "cliente" ],
            //hidden_columns: ["otNumero"],
            data: null,
            datatableOptions: {
                aoColumns: null,
                aaSorting: [],
                iDisplayLength: 500,
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(e) {
                F.assignValuesToInfoCard($(".novedades_infocard"), e)
              });
            },
            events: {
                "click .novTarea_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }), e.define("/views/novedades/NovTareaInfoCard.js", function(e, t, n, r, i, s) {
        C.View.NovTareaInfoCard = Backbone.View.extend({
            name: "novedades_infocard",
            title: "Detalle de las Tareas",
            fieldnames: {
              cliente: "Cliente",
              titulo: "Título",
              descripcion: "Descripción",
              vencimiento: "Vencimiento",
              tiempoEstimado: "Tiempo Estimado",
              empleado: "Empleado",
            },
            initialize: function() {
                var e = this;
                F.createInfoCard(this, $("#novedades_right"));
            },
            getTable: function() {
                return this.options.novTarea_table;
            },
            getDataTable: function() {
                return this.getTable().datatable;
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            },
            getSelectionRow: function() {
                return this.getTable().selected_row;
            }
        });
    }),
//CLIENTES
  //CLIENTES
    e.define("/views/cliente/Cliente.js", function(e, t, n, r, i, s) {
        C.View.Cliente = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.clientes = new C.Collection.Clientes(null, {
                    view: this
                }), this.clientes.fetch({
                    success: function(t, n) {
                        e.cliente_table = new C.View.ClienteTable({
                            el: $("#cliente_left"),
                            collection: t
                        }), $("#right").bind("cliente_form_loaded", function(t, n) {
                            $(".right_options").remove(), e.cliente_options = new C.View.ClienteOptions({
                                el: $("#cliente_left .fg-toolbar")[0],
                                cliente_table: e.cliente_table,
                                cliente_form: n
                            });
                        }), e.cliente_form = new C.View.ClienteForm({
                            el: $("#cliente_right"),
                            model: e.model,
                            collection: t,
                            cliente_table: e.cliente_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/cliente/ClienteTable.js", function(e, t, n, r, i, s) {
        C.View.ClienteTable = Backbone.View.extend({
            name: "cliente",
            headers: [ "id", "IdCatedral", "Cuit", "Nombre","Comunicacion", "Contacto", "Saldo Cuenta", "MontoTramite",  "Clasificacion_id", "Clasificacion", "Comunicacion_id",  "Actividad_id", "Actividad",  "Telefono", "Celular", "Radio", "Email", "Empleados", "Observaciones", "cierre_id" , "clienteCuentaCorriente_id", "cuentaCorriente_id", "negocio", "cliente_id", "direccion", "rubro_id" ],
            attrs: [ "id", "catedral", "cuit", "nombre", "comunicacion", "contacto", "monto", "montoTramite",  "clasificacion_id", "clasificacion", "comunicacion_id","actividad_id", "actividad", "telefono", "celular", "radio", "email", "empleado", "observaciones", "cierre_id", "clienteCuentaCorriente_id", "cuentaCorriente_id", "negocio" , "cliente_id", "direccion", "rubro_id"],
            hidden_columns: [ "cuit", "clasificacion_id", "montoTramite", "comunicacion_id", "actividad_id", "telefono", "celular", "radio", "email", "clasificacion", "actividad", "empleado", "observaciones", "cierre_id", "clienteCuentaCorriente_id", "cuentaCorriente_id", "negocio" , "cliente_id", "direccion", "rubro_id"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [ 3, "asc" ] ],
                iDisplayLength: 500,
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".cliente_form"), e);
                });
            },
            events: {
                "click .cliente_table tr": "selectRow",
                "dblclick .cliente_table tr": "redirecToOtAudit"
            },
            redirecToOtAudit: function(e){
              location.reload()
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
   }),
   e.define("/views/cliente/ClienteForm.js", function(e, t, n, r, i, s) {
        C.View.ClienteForm = Backbone.View.extend({
            name: "cliente_form",
            title: "Datos del Cliente",
            fields: {
                cuentaCorriente_id: {
                    type: "hidden"
                },
                clienteCuentaCorriente_id: {
                    type: "hidden"
                },
                catedral: {
                    label: "IdCatedral"
                },
                cuit: {
                    label: "Cuit/Cuil",
                    check: "cuit"
                },
                nombre: {
                    label: "Nombre"
                },
                direccion: {
                    label: "Dirección",
                    type: "textarea"
                },
                telefono: {
                    label: "Teléfono (ej.:(0221) 455-5555)"
                },
                celular: {
                    label: "Celular (ej.:(0221) 15-555-5555)"
                },
                radio: {
                    label: "Radio"
                },
                email: {
                    label: "E-mail",
                    placeholder: "E-mail (ej.: usuario@epressacco.com.ar)",
                    check: "email"
                },
                empleado: {
                    label: "Empleados",
                    type: "select_yn",
                    default_value: "n"
                },
                negocio: {
                    label: "Local a la Calle",
                    type: "select_yn",
                    default_value: "n"
                },
                monto: {
                    label: "Monto de la Cuenta Corriente"
                },
                montoTramite: {
                    label: "Monto de la Cuenta Corriente para realizar Trámites"
                },
                cierre_id: {
                    label: "Cierre de Ejercicio",
                    type: "select"
                },
                comunicacion_id: {
                    label: "Comunicacion",
                    type: "select"
                },
                cliente_id: {
                    label: "Principal de la Cuenta Corriente",
                    type: "select"
                },
                actividad_id: {
                    label: "Actividad",
                    type: "select"
                },
                clasificacion_id: {
                    label: "Clasificacion",
                    type: "select"
                },
                contacto: {
                    label: "Contacto",
                    type: "textarea"
                },
                observaciones: {
                    label: "Observaciones",
                    type: "textarea"
                },
                rubro_id: {
                    label: "Rubro(s)",
                    type: "selectmultiple"
                }
            },
            isCRUD: !0,
            relations: {
                actividads: null,
                comunicacions: null,
                clasificacions: null,
                cierres: null,
                rubros: null
            },
            buttons: {
                create: !0,
                save: !0,
                cancel: !0,
                "delete": !0
            },
            initialize: function() {
              var e = this;
              F.getAllFromModel("actividad", function(t) {
                e.relations.actividads = t, F.getAllFromModel("comunicacion", function(t) {
                  e.relations.comunicacions = t, F.getAllFromModel("clasificacion", function(t) {
                    e.relations.clasificacions = t, F.getAllFromModel("cierre", function(t) {
                      e.relations.cierres = t, F.getAllClientesFromModel("cliente", function(t) {
                        e.relations.clientes = t, F.getAllFromModel("rubro", function(t) {
                          e.relations.rubros = t, F.createForm(e);
                        })
                      });
                    });
                  });
                });
              });
            },
            events: {
              "click .cliente_form .BUTTON_create": "addCliente",
              "click .cliente_form .BUTTON_save": "editCliente",
              "click .cliente_form .BUTTON_delete": "delCliente",
              "click .cliente_form .BUTTON_cancel": "cancelCliente"
            },
            getTable: function() {
                return this.options.cliente_table;
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
            cancelCliente: function(){
              location.reload();
            },
            addCliente: function() {
              var e = this;
              if(($(".cliente_form").serializeObject().nombre.replace(/\s/g, "") != '')
              && ($(".cliente_form").serializeObject().email != '')
              && ($(".cliente_form").serializeObject().actividad_id != '')
              && ($(".cliente_form").serializeObject().comunicacion_id != '')
              && ($(".cliente_form").serializeObject().clasificacion_id != '')
              ){
              var error=!1
              switch (($(".cliente_form").serializeObject().comunicacion_id)) {
                case "1": error= $(".cliente_form").serializeObject().telefono != '';
                        break;
                case "2": error= $(".cliente_form").serializeObject().celular != '';
                        break;
                case "3": error= $(".cliente_form").serializeObject().radio != '';
                        break;
                case "4": error= $(".cliente_form").serializeObject().email != '';
                        break;
              }
              if(error){
                $.ajax({
                      type: "POST",
                      url: "/cliente/",
                      data: $(".cliente_form").serialize(),
                      success: function() {
                          F.msgOK("Cliente creado exitosamente")
	                        this.clientes = new C.Collection.Clientes(null, {
                            view: this
                          }), this.clientes.fetch({
                           success: function(t, n) {
                             $("#cliente_left").empty()
                             e.cliente_table = new C.View.ClienteTable({
                               el: $("#cliente_left"),
                               collection: t
                             })
                           }
                         });
                      }
               })
              }else{
                F.msgError("El método de Comunicación Preferido debe estar Cargado");
              }
             }else{
                F.msgError("El campo 'Nombre', 'E-Mail', 'Comunicacion', 'Clasificacion' y 'Actividad' SON OBLIGATORIOS");
             }
            },
            editCliente: function() {
                if(($(".cliente_form").serializeObject().nombre.replace(/\s/g, "") != '')
                && ($(".cliente_form").serializeObject().email != '')
                && ($(".cliente_form").serializeObject().actividad_id != '')
                && ($(".cliente_form").serializeObject().comunicacion_id != '')
                && ($(".cliente_form").serializeObject().clasificacion_id != '')
                ){
                var cumple= (1==2);
                switch ($(".cliente_form").serializeObject().comunicacion_id) {
                  case "1": cumple= $(".cliente_form").serializeObject().telefono != '';
                          break;
                  case "2": cumple= $(".cliente_form").serializeObject().celular != '';
                          break;
                  case "3": cumple= $(".cliente_form").serializeObject().radio != '';
                          break;
                  case "4": cumple= $(".cliente_form").serializeObject().email != '';
                          break;
                }
                if(cumple){
                    $.ajax({
                          type: "PUT",
                          url: "/cliente/"+this.getSelectionID(),
                          data: $(".cliente_form").serialize(),
                          success: function() {
                              F.msgOK("Cliente editado exitosamente")
    		                      this.clientes = new C.Collection.Clientes(null, {
                                view: this
                              }), this.clientes.fetch({
                               success: function(t, n) {
                                 $("#cliente_left").empty()
                                 e.cliente_table = new C.View.ClienteTable({
                                   el: $("#cliente_left"),
                                   collection: t
                                 })
                               }
                             });
                          }
                     })
                }else{
                  F.msgError("El método de Comunicación Preferido debe estar Cargado");
                }
               }else{
                  F.msgError("El campo 'Nombre', 'E-Mail', 'Comunicacion', 'Clasificacion' y 'Actividad' SON OBLIGATORIOS");
               }
            },
            delCliente: function() {
                var e = this;
                F.msgConfirm("¿Desea dar de baja a este Cliente?", function() {
                    console.log(e.getSelectionID())
                  $.ajax({
                        type: "POST",
                        url: "/cliente/delete/"+e.getSelectionID(),
                        data: $(".cliente_form").serialize(),
                        success: function() {
                            F.msgOK("Cliente eliminado Satisfactoriamente")
                            setTimeout(function(){location.reload()},1e3)
                        }
                   })
                });
            }
        });
  }),
  //LISTDEUDA
  e.define("/views/cliente/ListDeuda.js", function(e, t, n, r, i, s) {
        C.View.ListDeuda = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
              var e = this;
              this.listDeudas = new C.Collection.ListDeudas(null, {
                view: this
              }), this.listDeudas.fetch({
                success: function(t, n) {
                  e.cliente_table = new C.View.ListDeudaTable({
                    el: $("#cliente_left"),
                    collection: t
                  });
                }
              });
            }
        });
    }),
    e.define("/views/cliente/ListDeudaTable.js", function(e, t, n, r, i, s) {
        C.View.ListDeudaTable = Backbone.View.extend({
            name: "cliente",
            headers: [ "ID", "Cliente", "Cronograma", "Impuesto", "Vto", "Monto"],
            attrs: [ "id", "cliente", "cronograma", "impuesto", "vto", "monto"],
            hidden_columns: [],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this)
            },
            events: {
                "click .cliente_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            },
        });
    }),
  //LISTADO
    e.define("/views/cliente/Listado.js", function(e, t, n, r, i, s) {
        C.View.Listado = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.listados = new C.Collection.Listados(null, {
                    view: this
                }), this.listados.fetch({
                    success: function(t, n) {
                        e.cliente_table = new C.View.ListadoTable({
                            el: $("#cliente_left"),
                            collection: t
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/cliente/ListadoTable.js", function(e, t, n, r, i, s) {
        C.View.ListadoTable = Backbone.View.extend({
            name: "cliente",
            headers: [ "id", "cliente", "impuesto"],
            attrs: [ "id", "cliente", "impuesto"],
            hidden_columns: [],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this)
            },
            events: {
                "click .cliente_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            },
        });
    }),
  //Cuentas Corrientes
  e.define("/views/cliente/CuentaCorriente.js", function(e, t, n, r, i, s) {
        C.View.CuentaCorriente = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.cuentaCorrientes = new C.Collection.CuentaCorrientes(null, {
                    view: this
                }), this.cuentaCorrientes.fetch({
                    success: function(t, n) {
                        e.cliente_table = new C.View.CuentaCorrienteTable({
                            el: $("#cliente_left"),
                            collection: t
                        }), e.cliente_infocard = new C.View.CuentaCorrienteInfoCard({
                            el: $("#cliente_right"),
                            model: e.model,
                            collection: t,
                            cliente_table: e.cliente_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/cliente/CuentaCorrienteTable.js", function(e, t, n, r, i, s) {
        C.View.CuentaCorrienteTable = Backbone.View.extend({
            name: "cliente",
            headers: ["id", "monto", "montoTramite", "Nombre", "Comunicacion", "Actividad"],
            attrs: ["id", "monto", "montoTramite", "clienteNombre", "clienteComunicacion", "clienteActividad"],
            hidden_columns: ["id", "monto", "montoTramite", "clienteActividad"],
            data: null,
            datatableOptions: {
              aoColumns: [ null, null, null, null, null ],
              aaSorting: [ [ 3, "asc" ] ],
              iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToInfoCard($(".cliente_infocard"), e);
                }, function() {
                    var t = $(".cliente_table").dataTable();
                    $(".cliente_table tbody tr").on("click", function() {
                        t.fnIsOpen(this) ? t.fnClose(this) : t.fnOpen(this, e.generateRowDetails(t, this), "details");
                    });
                });
            },
            events: {
                "click .cliente_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget), $("#cliente_right .cliente_add_tarea");
            },
            //21 - Cuentas corrientes
            generateRowDetails: function(e, t) {
                var n = this, r = e.fnGetData(t), i = r[0], s = '<div class="row_detail cliente_id_' + i + '" style="display:none;">';
                return this.getCuentaMovimientos(i, function(e) {
                    var t, r, s;
                    e.length ? (n.appendRowDetailsHeaders(i), _.each(e, function(e) {
                        t = $("<p>"), s =  e.fecha +"  - <span>" + e.tramite + '</span><span class="movimiento_valor"', e.ingreso? s+='style="color:#262";>$'+e.monto : s+='style="color:#622";>$'+e.monto ,s+='</span>', $(t).append(s),
                        $(".cliente_id_" + i).append(t).fadeIn(), n.bindRenderCuentaCorrienteMovimientoForm(t, e, !1);
                    })) : $(".cliente_id_" + i).append("<p>Esta Cuenta Corriente no posee Movimientos aún</p>").fadeIn();
                }), s += "</div>", s;
            },
            getCuentaMovimientos: function(e, t) {
                $.ajax({
                    url: "/cuentaCorriente/byCliente/" + e,
                    success: function(e) {
                        t(e);
                    }
                });
            },
            appendRowDetailsHeaders: function(e) {
                $(".cliente_id_" + e).append('<p class="row_details_headers">Fecha - Concepto<span>Monto</span></p>');
            },
            bindRenderCuentaCorrienteMovimientoForm: function(e, t, n) {
                var r = this;
                $(e).on("click", function() {
                    $(".row_detail p").removeClass("selected_cuentaCorrienteMovimientos"),
                    $(this).addClass("selected_cuentaCorrienteMovimientos"),
                    $(".movimiento_form").remove(),
                    new C.View.CuentaCorrienteMovimientosForm({
                        el: $("#cliente_right"),
                        model: new C.Model.CuentaCorrienteMovimientos,
                        table: r,
                        movimiento: t
                    }), $(".row_subdetail").remove()
                });
            },
        });
    }),
    e.define("/views/cliente/CuentaCorrienteInfoCard.js", function(e, t, n, r, i, s) {
        C.View.CuentaCorrienteInfoCard = Backbone.View.extend({
            name: "cliente_infocard",
            title: "Datos de la Cuenta Corriente",
            fieldnames: {
                 clienteNombre: "Nombre",
                 monto: "Monto",
                 montoTramite: "Monto para Trámites",
                 clienteActividad: "Actividad",
                 clienteComunicacion: "Comunicacion"
            },
            initialize: function() {
                var e = this;
                F.createInfoCard(e, $("#cliente_right"));
            }
        });
    }),
    e.define("/views/Movimiento/CuentaCorrienteMovimientosForm.js", function(e, t, n, r, i, s) {
        C.View.CuentaCorrienteMovimientosForm = Backbone.View.extend({
            name: "movimiento_form",
            title: "Detalle del Movimiento",
            fields: {
              id: "ID",
              tramite: "Tramite",
              clienteNombre: "Cliente"
            },
            isCRUD: !1,
            buttons: {
            },
            relations: {
            },
            initialize: function() {
                var e = this;
                F.createForm(e);
                var n = e.getMovimiento(),
                r = $(".movimiento_form"),
                i = $(r).getFields(), s;
                $(r).append($('<input>', {
                  type: 'hidden',
                  value: n.id,
                  class: 'selection_movimiento_id'
                })),
                $(i).each(function() {
                  s = $(this).attr("name");
                  $(this).val(n[s])
                });
            },
            getMovimiento: function() {
                return this.options.movimiento;
            },
            getDataTable: function() {
                return $(this.table).dataTable();
            },
            getSelectionRow: function() {
                return $(".movimiento_" + this.getMovimiento().id).parent();
            },
            getSelectionID: function() {
                return parseInt($(".movimiento_form .selection_cuentaCorrienteMovimiento_id").val());
            }
        });
    }),
  //DEUDAS
  e.define("/views/cliente/Deuda.js", function(e, t, n, r, i, s) {
        C.View.Deuda = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.deudas = new C.Collection.Deudas(null, {
                    view: this
                }), this.deudas.fetch({
                    success: function(t, n) {
                        e.cliente_table = new C.View.DeudaTable({
                            el: $("#cliente_left"),
                            collection: t
                        }), e.cliente_infocard = new C.View.DeudaInfoCard({
                            el: $("#cliente_right"),
                            model: e.model,
                            collection: t,
                            cliente_table: e.cliente_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/cliente/DeudaTable.js", function(e, t, n, r, i, s) {
        C.View.DeudaTable = Backbone.View.extend({
            name: "cliente",
            headers: ["id", "monto", "montoTramite", "Nombre", "Comunicacion", "Actividad"],
            attrs: ["id", "monto", "montoTramite", "clienteNombre", "clienteComunicacion", "clienteActividad"],
            hidden_columns: ["id", "monto", "montoTramite", "clienteActividad"],
            data: null,
            datatableOptions: {
              aoColumns: [ null, null, null, null, null ],
              aaSorting: [ [ 3, "asc" ] ],
              iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToInfoCard($(".cliente_infocard"), e);
                }, function() {
                    var t = $(".cliente_table").dataTable();
                    $(".cliente_table tbody tr").on("click", function() {
                        t.fnIsOpen(this) ? t.fnClose(this) : t.fnOpen(this, e.generateRowDetails(t, this), "details");
                    });
                });
            },
            events: {
                "click .cliente_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget), $("#cliente_right .cliente_add_tarea");
            },
            generateRowDetails: function(e, t) {
                var n = this, r = e.fnGetData(t), i = r[0], s = '<div class="row_detail cliente_id_' + i + '" style="display:none;">';
                return this.getDeudaImpuesto(i, function(e) {
                    var t, r, s;
                    e.length ? (n.appendRowDetailsHeaders(i), _.each(e, function(e) {
                        t = $("<p>"), s = e.vencimiento + "-" + e.cronograma + " - <span>" + e.impuestoNombre + '</span><span class="movimiento_valor" style="color:#622";>$'+e.montoTotal+ '</span>', $(t).append(s),
                        $(".cliente_id_" + i).append(t).fadeIn(), n.bindRenderDeudaImpuestoForm(t, e, !1);
                    }))
                      : $(".cliente_id_" + i).append("<p>Este Cliente no tiene Impuestos por pagar</p>").fadeIn();
                }), s += "</div>", s;
            },
            getDeudaImpuesto: function(e, t) {
                $.ajax({
                    url: "/Deuda/byCliente/" + e,
                    success: function(e) {
                        t(e);
                    }
                });
            },
            appendRowDetailsHeaders: function(e) {
                $(".cliente_id_" + e).append('<p class="row_details_headers">Vto - Cronograma - Impuesto<span>Monto</span></p>');
            },
            bindRenderDeudaImpuestoForm: function(e, t, n) {
                var r = this;
                $(e).on("click", function() {
                    $(".row_detail p").removeClass("selected_deudaImpuesto"),
                    $(this).addClass("selected_deudaImpuesto"),
                    $(".deudaImpuesto_form").remove(),
                    new C.View.DeudaImpuestoForm({
                        el: $("#cliente_right"),
                        model: new C.Model.DeudaImpuesto,
                        table: e,
                        deudaImpuesto: t
                    }), $(".row_subdetail").remove()
                });
            },
        });
    }),
    e.define("/views/cliente/DeudaInfoCard.js", function(e, t, n, r, i, s) {
        C.View.DeudaInfoCard = Backbone.View.extend({
            name: "cliente_infocard",
            title: "Datos del Cliente",
            fieldnames: {
                 clienteNombre: "Nombre",
                 clienteActividad: "Actividad",
                 clienteComunicacion: "Comunicacion"
            },
            initialize: function() {
                var e = this;
                F.createInfoCard(e, $("#cliente_right"));
            }
        });
    }),
    e.define("/views/cliente/DeudaImpuestoForm.js", function(e, t, n, r, i, s) {
        C.View.DeudaImpuestoForm = Backbone.View.extend({
            name: "deudaImpuesto_form",
            title: "Edición del Impuesto",
            fields: {
              cronograma: {
                label: "Cronograma",
                attrs: {
                  disabled: "disabled"
                }
              },
              impuestoNombre: {
                label: "Impuesto",
                attrs: {
                  disabled: "disabled"
                }
              },
              liquida: {
                  label: "Liquidable?",
                  type: "select_yn",
                  default_value: "y"
              },
              anticipo: {
                  label: "Anticipo",
                  type: "select_b11",
              },
              monto0: "Monto0",
              monto1: "Monto1",
              monto2: "Monto2",
              monto3: "Monto3",
              monto4: "Monto Propio(4)",

            },
            isCRUD: !1,
            buttons: {
                create: !1,
                cancel: !0,
                save: !0,
                "delete": !1
            },
            relations: {
            },
            initialize: function() {
                var e = this;
                F.createForm(e);
                var n = e.getDeudaImpuesto(),
                r = $(".deudaImpuesto_form");
                $(".deudaImpuesto_form input:hidden.selection_id").remove();
                var n = e.getDeudaImpuesto(), r = $(".deudaImpuesto_form"), i = $(r).getFields(), s;
                $(r).append($("<input>", {
                    type: "hidden",
                    value: n.id,
                    "class": "selection_deudaImpuesto_id"
                })), $(i).each(function() {
                    s = $(this).attr("name"), $(this).val(n[s]), s === "fechaVencimiento" ? $(this).val(moment(n[s]).format("DD/MM/YYYY")) : s === "anticipo" && $(this).trigger("liszt:updated");
                }),
                $(".deudaImpuesto_form input:hidden.selection_id").remove();
                var n = e.getDeudaImpuesto(), r = $(".deudaImpuesto_form"), i = $(r).getFields(), s;
                $(r).append($("<input>", {
                    type: "hidden",
                    value: n.id,
                    "class": "selection_deudaImpuesto_id"
                })), $(i).each(function() {
                    s = $(this).attr("name"), $(this).val(n[s]), s === "fechaVencimiento" ? $(this).val(moment(n[s]).format("DD/MM/YYYY")) : s === "liquida" && $(this).trigger("liszt:updated");
                });
            },
            events:{
                "click .deudaImpuesto_form .BUTTON_save": "editDeudaImpuesto",
            },
            editDeudaImpuesto: function() {
              f=this;
              $.ajax({
                  type: "PUT",
                  url: "/vencimiento/"+f.getSelectionID(),
                  data: $(".deudaImpuesto_form").serialize(),
                  success: function() {
                    F.msgOK("Impuesto Editado");
                    window.setTimeout(function() { location.reload() }, 1e3)
                 }
              });
            },
            getDeudaImpuesto: function() {
                return this.options.deudaImpuesto;
            },
            getDataTable: function() {
                return $(this.table).dataTable();
            },
            getSelectionRow: function() {
                return $(".deudaImpuesto_" + this.getDeudaImpuesto().id).parent();
            },
            getSelectionID: function() {
                return parseInt($(".deudaImpuesto_form .selection_deudaImpuesto_id").val());
            }
        });
    }),
//CLIENTECLAVE
  e.define("/views/cliente/ClienteClave.js", function(e, t, n, r, i, s) {
        C.View.ClienteClave = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.clienteClaves = new C.Collection.ClienteClaves(null, {
                    view: this
                }), this.clienteClaves.fetch({
                    success: function(t, n) {
                        e.cliente_table = new C.View.ClienteClaveTable({
                            el: $("#cliente_left"),
                            collection: t
                        }), e.cliente_form = new C.View.ClienteClaveForm({
                            el: $("#cliente_right"),
                            model: e.model,
                            collection: t,
                            cliente_table: e.cliente_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/cliente/ClienteClaveTable.js", function(e, t, n, r, i, s) {
        C.View.ClienteClaveTable = Backbone.View.extend({
            name: "cliente",
            headers: [ "id", "IdCatedral", "Cuit", "Nombre","Comunicacion", "Contacto"],
            attrs: [ "id", "catedral", "cuit", "nombre", "comunicacion", "contacto"],
            hidden_columns: [ "cuit"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null ],
                aaSorting: [ [ 3, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(t) {
                  e.showDetails(t);
                });
            },
            events: {
                "click .cliente_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            },
            showDetails: function(e) {
                var t = this;
                $.ajax({
                    url: "/clienteClave/byCliente/"+e.id,
                    success: function(e) {
                        $('.clienteClave_form').empty(), t.renderDetails(e);
                    }
                });
            },
          renderDetails: function(el) {
            var p;
            $('.clienteClave_form').append(
              '<h3 class="formtitle"> Claves del Cliente</h3><br /><h2>CUIL/CUIT: '+el[0].cuit+'</h2><br />'
            );
            var cliente_id= null;
            _.each(el, function(e) {
              console.log(e)
              cliente_id = e.idCliente
              $('.clienteClave_form').append('<span class="hidden" id="id" value='+e.idClienteClave+'::'+e.idClave+' data-id="' + e.id + '"></span><span class="element_name">'+ e.nombre + '</span><br /><input type="text" name="'+e.idClienteClave+'::'+e.idClave+'" value="'+e.pass+'"></input><br />');
            });
            $('.clienteClave_form').append('<input type="button" id="cancelarClave" class="BUTTON_cancel lefty button" value="Cancelar" />'+'<input type="button" id="cargarClave" class="BUTTON_create righty button" value="Guardar" /><br /><br />');
            $('.clienteClave_form .BUTTON_cancel').on('click', function() {
              location.reload()
            })
            $('.clienteClave_form .BUTTON_create').on('click', function() {
              //CLIENTE CLAVE AJAX
              var pass = $('.clienteClave_form').serializeObject();
              $.ajax({
                  type: "POST",
                  url: "/clienteClave/"+cliente_id,
                  data: pass,
                  success: function(e) {
                    F.msgOK("Claves Agregadas")
                    setTimeout(function(){location.reload()},1e3)
                  }
              });
            })
          }
        });
    }),
    e.define("/views/cliente/ClienteClaveForm.js", function(e, t, n, r, i, s) {
        C.View.ClienteClaveForm = Backbone.View.extend({
            name: "clienteClave_form",
            title: "Claves del Cliente",
            initialize: function() {
                F.createForm(this, $("#cliente_right"));
            },
            isCRUD: !1,
            buttons: {
                create: !1,
                save: !1,
                cancel: !1,
                "delete": !1
            },
        });
    }),
//CLIENTE IMPUESTO
  e.define("/views/cliente/ClienteImpuesto.js", function(e, t, n, r, i, s) {
        C.View.ClienteImpuesto = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.clienteImpuestos = new C.Collection.ClienteImpuestos(null, {
                    view: this
                }), this.clienteImpuestos.fetch({
                    success: function(t, n) {
                        e.cliente_table = new C.View.ClienteImpuestoTable({
                            el: $("#cliente_left"),
                            collection: t
                        }), e.cliente_infoCard = new C.View.ClienteImpuestoInfoCard({
                            el: $("#cliente_right"),
                            model: e.model,
                            collection: t,
                            cliente_table: e.cliente_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/cliente/ClienteImpuestoTable.js", function(e, t, n, r, i, s) {
        C.View.ClienteImpuestoTable = Backbone.View.extend({
            name: "cliente",
            headers: [ "id", "IdCatedral", "Cuit", "Nombre","Comunicacion", "Contacto", "Saldo Cuenta", "MontoTramite",  "Clasificacion_id", "Clasificacion", "Comunicacion_id",  "Actividad_id", "Actividad",  "Telefono", "Celular", "Radio", "Email", "Empleados", "Observaciones", "cierre_id" , "clienteCuentaCorriente_id", "cuentaCorriente_id"],
            attrs: [ "id", "catedral", "cuit", "nombre", "comunicacion", "contacto", "monto", "montoTramite",  "clasificacion_id", "clasificacion", "comunicacion_id","actividad_id", "actividad", "telefono", "celular", "radio", "email", "empleado", "observaciones", "cierre_id", "clienteCuentaCorriente_id", "cuentaCorriente_id"],
            hidden_columns: [ "cuit", "clasificacion_id", "montoTramite", "comunicacion_id", "actividad_id", "telefono", "celular", "radio", "email", "clasificacion", "actividad", "empleado", "observaciones", "cierre_id", "clienteCuentaCorriente_id", "cuentaCorriente_id"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [ 3, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(t) {
                  e.showDetails(t);
                });
            },
            events: {
                "click .cliente_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            },
            showDetails: function(e) {
                var t = this;
                $.ajax({
                    url: "/clienteImpuesto/byCliente/"+e.id,
                    success: function(e) {
                        $(".clienteImpuesto_infocard").empty(), t.renderDetails(e);
                    }
                });
            },
          renderDetails: function(el) {
            var el_id, checkbox, p;
            $('.clienteImpuesto_infocard').append(
              '<h3 class="formtitle"> Impuestos del Cliente</h3>'
            );
            _.each(el, function(e) {
              checkbox = $('<input>', { type: 'checkbox', checked: e.matchea });
              $(checkbox).on('click', function() {
                e.matchea=!e.matchea
                if(e.matchea){
                F.msgConfirm("¿Está seguro de asignar este Impuesto al Cliente seleccionado?", function(){
                  $('body').append(
                    '<div id="clienteImpuesto_window" style="display:none;">' +
                    '<h1 class="bold" style="font-size:20px;color:#FF6666;">Seleccione el modo de pago</h1><br /><br />'+
                    '<select name="metodo_de_pago"><option value="Paga el Estudio">"Paga el Estudio"</option><option value="Paga Cliente - Envío por mail vep">"Paga Cliente - Envío por mail vep"</option><option value="Paga Cliente - Envío por mail formulario">"Paga Cliente - Envío por mail formulario"</option><option value="Paga Cliente - Retira formulario">"Paga Cliente - Retira formulario"</option><option value="Paga Cliente - Contra solicitud">"Paga Cliente - Contra solicitud"</option></select><br /><br />'+
                    '<input type="button" class="BUTTON_cancel lefty button" value="Cancelar" />'+
                    '<input type="button" class="BUTTON_create righty button" value="Aceptar" />' +
                    '</div>'
                  )
                  $('#clienteImpuesto_window .BUTTON_cancel').on('click', function() {
                    $.unblockUI(), window.setTimeout(function() {$("#clienteImpuesto_window").remove()}, 1e3);
                  })
                  $('#clienteImpuesto_window .BUTTON_create').on('click', function() {
                    if(/Monotributo/.test(e.nombre)){
                      var detalle="";
                      var checkbox;
                      var ar= e.nombre.split(" ");
                      if(ar[1]<= "I"){
                        detalle+='<input name="checkLoc" id="checkLoc" type="checkbox">'
                        detalle+='Locaciones y/o prestaciones de servicios<br />'
                      }
                      if(ar[1]>= "C"){
                        detalle+='<input name="checkVent" id="checkVent" type="checkbox">'
                        detalle+='Venta de Cosas Mueble<br />'
                      }
                      detalle+='<input name="checkSip" id="checkSip" type="checkbox">'
                      detalle+='Aportes al Sipa<br />'
                      detalle+='<input name="checkOs" id="checkOs" type="checkbox">'
                      detalle+='Aportes Obra Social<br />Adherentes:<input type=text label="Cant"  value="0" id= "cantidad" class="cantidad" size="4"><br /><br /><br />'

                      $('body').append(
                        '<div id="monotributo_window" style="display:none;">' +
                        '<h1 class="bold" style="font-size:20px;color:#FF6666;">Detalles del Monotributo</h1><br /><br />'+
                        detalle+
                        '<input type="button" class="BUTTON_cancel lefty button" value="Cancelar" />'+
                        '<input type="button" class="BUTTON_create righty button" value="Aceptar" />' +
                        '</div>'
                      )
                      $('#monotributo_window .BUTTON_cancel').on('click', function() {
                        $.unblockUI(), window.setTimeout(function() {$("#monotributo_window").remove(); location.reload() }, 1e3);
                      })
                      $('#monotributo_window .BUTTON_create').on('click', function() {
                        var test= $("#monotributo_window input:checked").serializeObject();
                        var paga= 0;
                        var adherentes;
                        if(test.checkLoc){
                          paga += 8
                        }if(test.checkVent){
                          paga += 4
                        }if(test.checkSip){
                          paga += 2
                        }if(test.checkOs){
                          paga += 1
                        }if(($("#monotributo_window .cantidad").val() != '')
                          &&($("#monotributo_window .cantidad").val() >=0)
                          &&($("#monotributo_window .cantidad").val() <=100)){
                         adherentes = $("#monotributo_window .cantidad").val()
                        }
                        //MARCELITOMARCELITO
                        /*ANOTACIONES*/
                        // Loc  1000 = 8
                        // VENT 0100 = 4
                        // Sipa 0010 = 2
                        // Os   0001 = 1
                        //casos -> 11, 10, 9, 8
                        //      -> 7, 6, 5, 4
                        if(paga!=0){
                          if(paga < 12){
                          //si checkea OS (REVISAR NRO SINO MANDAR 1 EN EL ULTIMO PARAMETRO
                            if(test.checkOs){
                              if((adherentes)&&(adherentes >= 0)){
                                $.ajax({
                                    type: "POST",
                                    url: "/clienteImpuesto/"+e.idCliente+":"+e.idImpuesto+":"+paga+":"+(parseInt(adherentes)+parseInt(1)),
                                    data: {detalle: $('#clienteImpuesto_window select[name=metodo_de_pago]').val()},
                                    success: function(e) {
                                      F.msgOK("Impuesto Agregado")
                                      setTimeout(function(){location.reload()},1000)
                                    }
                                });
                              }else{
                                F.msgError('Si carga "Aportes Obra Social" debe seleccionar la cantidad de adherentes')
                              }

                            }else{
                                $.ajax({
                                    type: "POST",
                                    url: "/clienteImpuesto/"+e.idCliente+":"+e.idImpuesto+":"+paga+":"+1,
                                    data: {detalle: $('#clienteImpuesto_window select[name=metodo_de_pago]').val()},
                                    success: function(e) {
                                      F.msgOK("Impuesto Agregado")
                                      setTimeout(function(){location.reload()},1000)
                                    }
                                });
                            }
                          }else{
                            F.msgError("No puede seleccionar 'Locaciones y/o prestaciones de servicios' y 'Venta de Cosas Mueble' para un mismo cliente")
                          }
                        }else{
                          F.msgError("Debe seleccionar al menos uno")
                        }
                      })
                      $.blockUI({
                        message: $('#monotributo_window'),
                        css: {
                          top: '10%',
                          left: '30%',
                          width: '38%',
                          border: 'none',
                          padding: '1%',
                          cursor: 'default'
                        }
                      });
                    }else{
                      $.ajax({
                          type: "POST",
                          url: "/clienteImpuesto/"+e.idCliente+":"+e.idImpuesto+":"+0+":"+1,
                          data: {detalle: $('#clienteImpuesto_window select[name=metodo_de_pago]').val()},
                          success: function(e) {
                            F.msgOK("Impuesto Agregado")
                            setTimeout(function(){location.reload()},1000)
                          }
                      });
                    }
                  });
                  $.blockUI({
                    message: $('#clienteImpuesto_window'),
                    css: {
                      top: '10%',
                      left: '30%',
                      width: '38%',
                      border: 'none',
                      padding: '1%',
                      cursor: 'default'
                    }
                  });
                })
                }else{
                F.msgConfirm("¿Está seguro de DESasignar este Impuesto al Cliente seleccionado?", function(){
                  $.ajax({
                    type: "POST",
                    url: "/clienteImpuesto/delete/"+e.idClienteImpuesto,
                    success: function(e){
                      F.msgOK("Impuesto Eliminado");
                      setTimeout(function(){location.reload()},1000)
                    }
                  })
                })
                }

              });
              p = $('<p>');
              $(p).append('<span class="hidden" data-id="' + e.id + '"></span>');
              $(p).append(checkbox);
              $(p).append('<span class="element_name">' + e.nombre + '</span><br />');
              $('.clienteImpuesto_infocard').append(p);
            });
          }
        });
    }),
    e.define("/views/cliente/ClienteImpuestoInfoCard.js", function(e, t, n, r, i, s) {
        C.View.ClienteImpuestoInfoCard = Backbone.View.extend({
            name: "clienteImpuesto_infocard",
            title: "Impuestos del Cliente",
            initialize: function() {
                F.createInfoCard(this, $("#cliente_right"));
            },
        });
    }),
//IE
  //DOCUMENTACION
    e.define("/views/ie/ClienteDocumentacion.js", function(e, t, n, r, i, s) {
        C.View.ClienteDocumentacion = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.clienteDocumentacions = new C.Collection.ClienteDocumentacions(null, {
                    view: this
                }), this.clienteDocumentacions.fetch({
                    success: function(t, n) {
                        e.clienteDocumentacion_table = new C.View.ClienteDocumentacionTable({
                            el: $("#clienteDocumentacion_left"),
                            collection: t
                        }), e.clienteDocumentacion_infocard = new C.View.ClienteDocumentacionInfoCard({
                            el: $("#clienteDocumentacion_right"),
                            model: e.model,
                            collection: t,
                            clienteDocumentacion_table: e.clienteDocumentacion_table
                        }), e.clientedocumentacion_form = new C.View.DocumentacionForm({
                            el: $("#clienteDocumentacion_right"),
                            model: e.model,
                            collection: t,
                            documentacion_table: e.documentacion_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/ie/ClienteDocumentacionTable.js", function(e, t, n, r, i, s) {
        C.View.ClienteDocumentacionTable = Backbone.View.extend({
           name: "clienteDocumentacion",
           headers: [ "id", "cliente_id", "IdCatedral", "Cuit", "Nombre","Comunicacion", "Contacto", "Clasificacion_id", "Clasificacion", "Comunicacion_id",  "Actividad_id", "Actividad",  "Telefono", "Celular", "Radio", "Email", "Empleados", "Observaciones", "cierre_id" ],
            attrs: [ "id", "cliente_id", "catedral", "cuit", "nombre", "comunicacion", "contacto",  "clasificacion_id", "clasificacion", "comunicacion_id","actividad_id", "actividad", "telefono", "celular", "radio", "email", "empleado", "observaciones", "cierre_id"],
            hidden_columns: [ "cliente_id", "cuit", "clasificacion_id", "comunicacion_id", "actividad_id", "telefono", "celular", "radio", "email", "clasificacion", "actividad", "empleado", "observaciones", "cierre_id"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,  ],
                aaSorting: [ [ 4, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToInfoCard($(".clienteDocumentacion_infocard"), e),
                    F.assignValuesToForm($(".documentacion_form"), e)
                }, function() {
                    var t = $(".clienteDocumentacion_table").dataTable();
                    $(".clienteDocumentacion_table tbody tr").on("click", function() {
                        t.fnIsOpen(this) ? t.fnClose(this) : t.fnOpen(this, e.generateRowDetails(t, this), "details");
                    });
                });
            },
            generateRowDetails: function(e, t) {
                var n = this, r = e.fnGetData(t), i = r[0], s = '<div class="row_detail documentacion_id_' + i + '" style="display:none;">';
                return this.getDocumentacion(i, function(e) {
                    var t, r, s;
                    e.length ? (n.appendRowDetailsHeaders(i), _.each(e, function(e) {
                        t = $("<p>"), s = e.recepcion + " - <span>" + e.documentacionNombre + '</span><span class="movimiento_valor">'+e.reciboNro+'</span>', $(t).append(s),
                        $(".documentacion_id_" + i).append(t).fadeIn()//, n.bindRenderDocumentacionForm(t, e, !1);
                    })) : $(".documentacion_id_" + i).append("<p>Este Cliente no tiene Documentación</p>").fadeIn();
                }), s += "</div>", s;
            },
            getDocumentacion: function(e, t) {
                $.ajax({
                    url: "/documentacion/" + e,
                    success: function(e) {
                        t(e);
                    }
                });
            },
            appendRowDetailsHeaders: function(e) {
                $(".documentacion_id_" + e).append('<p class="row_details_headers">Fecha - Documentación ingresada<span>Recibo Nº</span></p>');
            },
            bindRenderDocumentacionForm: function(e, t, n) {
                var r = this;
                $(e).on("click", function() {
                    $(".row_detail p").removeClass("selected_documentacion"),
                    $(this).addClass("selected_documentacion"),
                    $(".row_subdetail").remove(),
                   F.assignValuesToForm($(".documentacion_form"),t);
                });
            },
            events: {
                "click .clienteDocumentacion_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/ie/ClienteDocumentacionInfoCard.js", function(e, t, n, r, i, s) {
        C.View.ClienteDocumentacionInfoCard = Backbone.View.extend({
            name: "clienteDocumentacion_infocard",
            title: "Datos del Cliente",
            fieldnames: {
                 nombre: "Nombre",
                 actividad: "Actividad",
                 comunicacion: "Comunicacion"
            },
            initialize: function() {
                var e = this;
                F.createInfoCard(e, $("#clienteDocumentacion_right"));
            }
        });
    }),
    e.define("/views/ie/DocumentacionForm.js", function(e, t, n, r, i, s) {
        C.View.DocumentacionForm = Backbone.View.extend({
            name: "documentacion_form",
            title: "Ingreso/Egreso de Documentación",
            fields: {
                cliente_id: {
                    label: "Cliente",
                    type: "select"
                },
                iedoc_id: {
                    label: "Ingreso-Egreso",
                    type: "select"
                },
                documentacionNombre: {
                  label: "Documentación Ingresada",
                  type: "textarea"
                }
            },
            isCRUD: !0,
            buttons: {
              create: !0,
              save: !0
            },
            events: {
                "click .documentacion_form .BUTTON_create": "addEditDocumentacion",
                "click .documentacion_form .BUTTON_save": "addEditDocumentacion",
            },
            relations: {
                clientes: null,
                iedocs: null
            },
            initialize: function() {
              var e = this;
              F.getAllFromModel("cliente", function(t) {
              var c = [{id: "Ingreso", nombre: "Ingreso"},{id:"Egreso", nombre: "Egreso"}];
                e.relations.clientes = t;
                e.relations.iedocs = c,
                F.createForm(e);
              })
            },
            addEditDocumentacion: function(){
                var e = this;
                if(($(".documentacion_form").serializeObject().iedoc_id != '')
                && ($(".documentacion_form").serializeObject().cliente_id != '')
                && ($(".documentacion_form").serializeObject().documentacionNombre != '')
                ){
                  $.ajax({
                        type: "POST",
                        url: "/documentacion",
                        data: $(".documentacion_form").serialize(),
                        success: function(e) {
                              var recibod=
                                '<div id="imprimir" style="display:none; text-align: left;">' +
                                    '<div style="width: 600px; padding: 6px">'+
                                        '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                                '<span style="font-size:20px; "><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span><span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221)452-2523<br /></center></span>'+
                                        '</div>'+
                                        '<div style="border:solid thin; border-radius: 7px; width:36%; float:right; padding: 6px">'+
                                            '<span style="font-weight:bold;">Recibo Nº D-'+e.nro+'</span><br />'+
                                            'Movimiento: '+$(".documentacion_form").serializeObject().iedoc_id+' de Documentación <br  />'+
                                            'Fecha: '+e.hora+
                                        '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                                        '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                '<span style="font-weight:bold;"> Razón social del cliente: '+e.receptor+'<br  />'+
                                                'Domicilio:  </span>'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                '<span style="font-weight:bold;"> Descripción del movimiento: </span>'+$(".documentacion_form").serializeObject().iedoc_id+' de Documentación por parte del cliente'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: 120px;">'+
                                                e.concepto+
                                            '</div>'+
                                        '</div>'+
                                        '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                            '<span style="font-weight:bold;"> Operador: </span>'+ e.operador+
                                        '</div>'+
                                        '<div style="text-align:center; border:solid thin; border-radius: 7px; width:36%; float:right; padding: 6px;">'+
                                            '<br  />'+
                                            '-------------------------------------------<br />'+
                                            '<br  />'+
                                            '<p><span style="font-weight:bold;">'+e.receptor+'</span></p><br  />'+
                                        '</div>'+
                                    '</div>'+
                                    '<br /><br /><br /><br /><br /><br /><br /><br /><H1 style="font-weight:bold;"> RECIBO NO VÁLIDO COMO CONSTANCIA DE ENTREGA DE DINERO</H1><br />-----------✂---------------------✂------------✂---------------------✂------------'+
                                    '<div style="width: 600px; padding: 6px">'+
                                        '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                                '<span style="font-size:20px; "><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span><span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221)452-2523<br /></center></span>'+
                                        '</div>'+
                                        '<div style="border:solid thin; border-radius: 7px; width:36%; float:right; padding: 6px">'+
                                            '<span style="font-weight:bold;">Recibo Nº D-'+e.nro+'</span><br />'+
                                            'Movimiento: '+$(".documentacion_form").serializeObject().iedoc_id+' de Documentación <br  />'+
                                            'Fecha: '+e.hora+
                                        '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                                        '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                '<span style="font-weight:bold;"> Razón social del cliente: '+e.receptor+'<br  />'+
                                                'Domicilio:  </span>'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                '<span style="font-weight:bold;"> Descripción del movimiento: </span>'+$(".documentacion_form").serializeObject().iedoc_id+' de Documentación por parte del cliente'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: 120px;">'+
                                                e.concepto+
                                            '</div>'+
                                        '</div>'+
                                        '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                            '<span style="font-weight:bold;"> Operador: </span>'+ e.operador+
                                        '</div>'+
                                        '<div style="text-align:center; border:solid thin; border-radius: 7px; width:36%; float:right; padding: 6px;">'+
                                            '<br  /><br  /><br  />'+
                                            '-------------------------------------------<br />'+
                                            'Firma del operador<br  />'+
                                            ''+
                                        '</div><H1 style="font-weight:bold;"> RECIBO NO VÁLIDO COMO CONSTANCIA DE ENTREGA DE DINERO</H1>'+
                                    '</div>'+
                                '</div>';
                              $('body').append(recibod)
                              $.ajax({
                                  type:  "POST",
                                  url: "/imprimir/D-"+e.nro,
                                  data: {recibo: recibod}
                              });
                              $.blockUI({
                                message: $('#imprimir'),
                                css: {
                                  top: '0%',
                                  left: '0%',
                                  width: '100%',
                                  height: '100%',
                                  border: '1px',
                                  padding: '0%',
                                  cursor: 'default'
                                }
                              });
                        }
                 })
               }else{
                  F.msgError("Todos los Campos son OBLIGATORIOS");
               }
            },
            getDocumentacion: function() {
                return this.options.documentacion;
            },
            getDataTable: function() {
                return $(this.table).dataTable();
            },
        });
    }),
  //PAGO
    e.define("/views/ie/ClientePago.js", function(e, t, n, r, i, s) {
        C.View.ClientePago = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.clientePagos = new C.Collection.ClientePagos(null, {
                    view: this
                }), this.clientePagos.fetch({
                    success: function(t, n) {
                        e.clientePago_table = new C.View.ClientePagoTable({
                            el: $("#clientePago_left"),
                            collection: t
                        }), e.clientePago_infocard = new C.View.ClientePagoInfoCard({
                            el: $("#clientePago_right"),
                            model: e.model,
                            collection: t,
                            clientePago_table: e.clientePago_table
                        }), e.pago_infocard = new C.View.PagoInfoCard({
                            el: $("#clientePago_right"),
                            model:e.model,
                            collection: t,
                            clientePago_table: e.clientePago_table
                        });
                    }
                });
            }
        });
    }),
    Number.prototype.toMoney = function(places, symbol, thousand, decimal) {
	places = !isNaN(places = Math.abs(places)) ? places : 2;
	symbol = symbol !== undefined ? symbol : "";
	thousand = thousand || ".";
	decimal = decimal || ",";
	var number = this,
	    negative = number < 0 ? "-" : "",
	    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
	    j = (j = i.length) > 3 ? j % 3 : 0;
	return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};
//I/E->PAGOS / Pagos del cliente
    e.define("/views/ie/ClientePagoTable.js", function(e, t, n, r, i, s) {
        C.View.ClientePagoTable = Backbone.View.extend({
            name: "clientePago",
           headers: [ "id", "cliente_id", "IdCatedral", "Cuit", "Nombre","Comunicacion", "Contacto", "Clasificacion_id", "Clasificacion", "Comunicacion_id",  "Actividad_id", "Actividad",  "Telefono", "Celular", "Radio", "Email", "Empleados", "Observaciones", "cierre_id" , "monto"],
            attrs: [ "id", "cliente_id", "catedral", "cuit", "nombre", "comunicacion", "contacto",  "clasificacion_id", "clasificacion", "comunicacion_id","actividad_id", "actividad", "telefono", "celular", "radio", "email", "empleado", "observaciones", "cierre_id", "monto"],
            hidden_columns: [ "cliente_id", "cuit", "clasificacion_id", "comunicacion_id", "actividad_id", "telefono", "celular", "radio", "email", "clasificacion", "actividad", "empleado", "observaciones", "cierre_id", "monto"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [ 4, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(t) {
                  F.assignValuesToInfoCard($(".clientePago_infocard"), t);
                  e.showDetails(t);
                });
            },
            events: {
                "click .clientePago_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            },
            showDetails: function(e) {
                $('.pago_infocard').empty()
                var t = this;
                var id= e.id
                $.ajax({
                    url: "/vencimiento/"+id,
                    success: function(e) {
                        /*$(".pago_infocard").empty(),*/ t.renderDetails(e, id);
                    }
                });
            },
            renderDetails: function(el, superId) {
              var sup= this;
              var el_id, checkbox, p;
              var diccionario=[];
              var cliente;
              $('.pago_infocard').append('<h3 class="formtitle"> Pagos del Cliente</h3>');
              if(el.length != 0){
                $('.pago_infocard').append('<span style="text-align:center;color:#CC4444;font-size:16px;"> Monto - Vto - Impuesto - Cronograma</span>');
                _.each(el, function(e) {
                  cliente= e.cliente_id
                  checkbox = $('<input>', {type: 'checkbox'});
                  $(checkbox).on('click', function() {
                    if(this.checked){
                      if(!e.liquida){
                        F.msgError('No esta liquidado este impuesto, No se incluirá en los impuestos a pagar');
                        this.checked = !0;
                      }
                      diccionario[e.id]=$('.pago_infocard input:text[name='+e.id+']').val()
                    }else{
                      diccionario.splice(e.id,1);
                    }

                  });
                  //Mis vars
                  miVar = function (action)
                  {
                    var devuelve;

                    switch (action) {
                      case 'id':
                        devuelve = e.id;
                        break;
                      case 'total':
                        devuelve = (e.monto1 + e.monto2 + e.monto3 + e.monto4 + e.monto0).toFixed(2);
                        break;
                      case 'nombre':
                        devuelve = e.impuesto.nombre;
                        break;
                      case 'idImp':
                        devuelve = e.impuesto.id;
                        break;
                      case 'mes':
                        devuelve = e.cronograma.mes;
                        break;
                      case 'anio':
                        devuelve = e.cronograma.año;
                        break;
                      case 'cronoId':
                        devuelve = e.cronograma_id;
                        break;
                    }

                    return devuelve;
                  }
                  //Fin Mis vars
                  //ACA TRAE LA DATA Y LA MUESTRA
                  p = $('<p>');
                  $(p).append('<span class="hidden" data-id="' + e.id + '"></span>');
                  $(p).append(checkbox);
                  var total= e.monto1 + e.monto2 + e.monto3 + e.monto4 + e.monto0;
                  $(p).append('$<input type=text name="'+e.id+'" style="background:#DDDDDD; text-align:center; border-radius: 8px; width: 75px;"value="'+total.toFixed(2)+'">')
                  $(p).append('<span class="element_name"> - ' + e.impuesto.nombre +"</span>");
                  $(p).append(' - ' + e.cronograma.mes+"/"+e.cronograma.año);
                  $('.pago_infocard').append(p);
                });
                $('.pago_infocard').append($("<input>", {
                    type: "button",
                    style: "background-color: Green; background-image: none; color: White;",
                    "class": "BUTTON_create",
                    value: "Pagar"
                }).on("click",function(){
                  F.getReciboMaxe("recibo", function(t){
                    F.getSaldoCuenta(cliente, function(cuentaCorriente){
                      var montoCC = cuentaCorriente.monto;
                      var sumImp=0;
                      diccionario.forEach(function(d){
                        if(d!='')
                          sumImp+=parseFloat(d);
                      })
                      $('body').append(
                        '<div id="pago_window" style="display:none; background-color: #A7ECA9">' +
                        '<h1 class="bold" style="font-size:20px;color:#FF6666;">Realizar Pago</h1><br /><br />'+
                        '<span style="float:left">Recibo:<input  type="text" disabled value=E-'+t.maxi+'></span>'+
                        'Cta/Cte:<input  type="text" disabled value=$'+montoCC.toMoney()+'>'+
                        '<span style="float:right"><input align=right type="text" disabled value=$'+
                        sumImp.toMoney()+'> </span><br /><br />'+
                        '<span ><input name="checkefectivo" type="checkbox">Efectivo:<input name="efectivo" type=text> <br /><br /></span>'+
                        '<span ><input name="checkcheque" type="checkbox">Cheque:<input name="cheque" type=text> <br /><br /></span>'+
                        '<input name="ncheque" type=text placeholder="nº Cheque"> <input name="banco" type=text placeholder="Banco"> <input name="titular" type=text placeholder="Titular"><br /><br />'+
                        '<input name="fechaemision" type=date placeholder="Fecha de Emisión"><input name="fechacobro" type=date placeholder="Fecha de Cobro"><br /><br />'+
                       // '<a class="BUTTON_cancel lefty">Cancelar</a>' +
                        '<input type="button" class="BUTTON_cancel lefty button" value="Cancelar" />'+
                        '<input type="button" class="BUTTON_create righty button" value="Aceptar" />' +
                        '</div>'
                      )
                      $('#pago_window .BUTTON_cancel').on('click', function() {
                        $.unblockUI(), window.setTimeout(function() {$("#pago_window").remove()}, 1e3);
                      })
                      $('#pago_window .BUTTON_create').on('click', function() {
                        var cheque= parseFloat($("#pago_window input:text[name=cheque]").val()) || 0;
                        var efectivo= parseFloat($("#pago_window input:text[name=efectivo]").val()) || 0;
                        var tPago= cheque + efectivo
                        var diccion=[];
                        diccionario.forEach(function(impuesto, indice){
                          diccion.push({
                            id: indice,
                            monto: impuesto
                          })
                        });
                        var query= {
                            cuentaCorriente_id: cuentaCorriente.id,
                            fechaEmision: $("#pago_window input:[name=fechaemision]").val(),
                            fechaCobro: $("#pago_window input:[name=fechacobro]").val(),
                            chequeMonto: cheque,
                            chequeBanco: $("#pago_window input:text[name=banco]").val(),
                            chequeNumero: $("#pago_window input:text[name=ncheque]").val(),
                            chequeTitular: $("#pago_window input:text[name=titular]").val(),
                            chequeFechaEmi: $("#pago_window input:text[name=fechaemision]").val(),
                            chequeFechaCobro: $("#pago_window input:text[name=fechacobro]").val(),
                            cliente_id: cliente,
                            efectivoMonto: efectivo,
                            impuestos:diccion,
                            reciboNumero: t.maxi,
                            montoCC: montoCC,
                            sumImp: sumImp,
                            totalPago: tPago
                        };
                        if(parseFloat(tPago) + parseFloat(montoCC) >=sumImp){
                          $.unblockUI(), window.setTimeout(function() {$("#pago_window").remove()},1e3);
                          if(query.impuestos.length == 0){//sumImp==0
                            F.msgError("No hay Impuestos por Pagar")
                          }else{
                            $.ajax({
                              type: "POST",
                              url: "/pago",
                              data: query,
                              success: function(e){
                                var imp=''
                                e.impuestos.forEach(function(i){
                                  imp+=i+'<br />'
                                })
                                var reciboe =
                                  '<div id="imprimirRecibo" style="display:none; text-align: left;">' +
                                      '<div style="width: 600px; padding: 6px">'+
                                          '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                              '<span style="font-size:20px; "><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span>'+'<span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221) 452-2523<br /></center></span>'+
                                          '</div>'+
                                          '<div style="border:solid thin; height:85px; border-radius: 7px; width:36%; float:right; padding: 6px">'+
                                              '<span style="font-weight:bold"><br />Recibo Nº E-'+e.recibo.e+'</span><br />'+
                                              '<span style="font-weight:bold">Movimiento:</span>Pago de obligaciones por cuenta y orden de terceros<br  />'+
                                              '<span style="font-weight:bold">Fecha:</span> '+e.reciboFecha+
                                          '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                                          '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                  '<p><span style="font-weight:bold"> Razón social del cliente:</span> '+e.receptor+'<br  /></p>'+
                                                  '<span style="font-weight:bold"> Domicilio:  </span>'+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                  '<span style="font-weight:bold">Descripción del movimiento: </span>Recepción para pagos por parte del Cliente'+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: 60px;">'+'<h3><span style="font-weight:bold">'+
                                                  e.recibo.concepto+ '</h3></span>'+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: auto">'+
                                                  '<span style="font-size: 16px; font-weight:bold">IMPUTACIONES:</span> <br />'+
                                                  imp+
                                                  '<span style="float:right; font-weight:bold; text"> Total Ingresado:$'+e.total+'<br />Saldo en Cuenta Corriente:$'+e.saldo+'</span><br /><br />'+
                                              '</div>'+
                                          '</div>'+
                                          '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                          '<span style="font-weight:bold">Operador: </span>'+ e.operador+
                                          '</div>'+
                                          '<div style="text-align:center; border:solid thin; border-radius: 7px; width:40%; float:right; padding: 6px;">'+
                                              '<br  /><br  />'+
                                              '-------------------------------------------<br />'+
                                              'Firma del operador'+
                                              ''+
                                        '</div>'+
                                  '<br /><br /><br /><br /><br />-----------✂---------------------✂------------✂---------------------✂------------✂---------------------✂-------<br />'+
                                          '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                              '<span style="font-size:20px; bold"><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span>'+'<span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221) 452-2523<br /></center></span>'+
                                          '</div>'+
                                          '<div style="border:solid thin; height:85px; border-radius: 7px; width:36%; float:right; padding: 6px">'+
                                              '<span style="font-weight:bold"><br />Recibo Nº E-'+e.recibo.e+'</span><br />'+
                                              '<span style="font-weight:bold">Movimiento:</span> Pago de obligaciones por cuenta y orden de terceros <br  />'+
                                              '<span style="font-weight:bold">Fecha:</span> '+e.reciboFecha+
                                          '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                                          '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                  '<span style="font-weight:bold"> Razón social del cliente:</span> '+e.receptor+'<br  />'+
                                                  '<span style="font-weight:bold"> Domicilio:  </span>'+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                  '<span style="font-weight:bold">Descripción del movimiento: </span>Recepción para pagos por parte del Cliente'+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: 60px;">'+
                                                  e.recibo.concepto+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: auto;">'+
                                                  '<span style="font-size: 16px; font-weight:bold">IMPUTACIONES:</span> <br />'+
                                                  imp+
                                                  '<span style="float:right; font-weight:bold; text"> Total Ingresado:$'+e.total+'<br />Saldo en Cuenta Corriente:$'+e.saldo+'</span><br /><br />'+
                                              '</div>'+
                                          '</div>'+
                                          '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                          '<span style="font-weight:bold">Operador: </span>'+ e.operador+
                                          '</div>'+
                                          '<div style="text-align:center; border:solid thin; border-radius: 7px; width:40%; float:right; padding: 6px;">'+
                                              '<br  /><br  />'+
                                              '-------------------------------------------<br />'+
                                              'Firma del operador'+
                                        '</div>'+
                                      '</div>'+
                                  '</div>'
  ;
                                $('body').append(reciboe)
                                $.ajax({
                                    type:  "POST",
                                    url: "/imprimir/E-"+e.recibo.e,
                                    data: {recibo: reciboe}
                                });
                                $.blockUI({
                                  message: $('#imprimirRecibo'),
                                  css: {
                                    top: '0%',
                                    left: '0%',
                                    width: '100%',
                                    height: '100%',
                                    border: '1px',
                                    padding: '0%',
                                    cursor: 'default'
                                  }
                                });

                              sup.showDetails({id: superId})
                              }
                            })
                          }
                        }else{
                          F.msgConfirm("Saldo Insuficiente, Cancele algunos Impuestos por favor. ¿Pagar de todas Formas??", function(){
                            $.ajax({
                              type: "PUT",
                              url: "/pago",
                              data: query,
                              success: function(e){
                                var imp=''
                                e.impuestos.forEach(function(i){
                                  imp+=i+'<br />'
                                })
                                var reciboee =
                                  '<div id="imprimirRecibo" style="display:none; text-align: left;">' +
                                    '<div style="width: 600px; padding: 6px">'+
                                       '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                            '<span style="font-size:20px; bold"><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span>'+'<span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221) 452-2523<br /></center></span>'+
                                        '</div>'+
                                        '<div style="border:solid thin; height:85px; border-radius: 7px; width:36%; float:right; padding: 6px">'+
                                            '<span style="font-weight:bold"><br />Recibo Nº E-'+e.recibo.e+'</span><br />'+
                                            '<span style="font-weight:bold">Movimiento:</span> Pago de obligaciones por cuenta y orden de terceros <br  />'+
                                            '<span style="font-weight:bold">Fecha:</span> '+e.reciboFecha+
                                          '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                                          '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                  '<span style="font-weight:bold"> Razón social del cliente:</span> '+e.receptor+'<br  />'+
                                                  '<span style="font-weight:bold"> Domicilio:  </span>'+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                  '<span style="font-weight:bold">Descripción del movimiento: </span>Recepción para pagos por parte del Cliente'+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: 60px;">'+
                                                  e.recibo.concepto+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: auto;">'+
                                                  '<span style="font-size: 16px; font-weight:bold">IMPUTACIONES:</span> <br />'+
                                                  imp+
                                                  '<span style="float:right; font-weight:bold; text"> Total Ingresado:'+e.total+'<br />Saldo en Cuenta Corriente:'+e.saldo+'</span><br /><br />'+
                                              '</div>'+
                                          '</div>'+
                                          '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                          '<span style="font-weight:bold">Operador: </span>'+ e.operador+
                                          '</div>'+
                                          '<div style="text-align:center; border:solid thin; border-radius: 7px; width:40%; float:right; padding: 6px;">'+
                                              '<br  /><br  /><br  />'+
                                              '-------------------------------------------<br />'+
                                              'Firma del operador'+
                                              '<br  />'+
                                          '</div>'+
                                  '<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />-----------✂---------------------✂------------✂---------------------✂------------✂---------------------✂-------<br />'+
                                    '<div style="width: 600px; padding: 6px">'+
                                       '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                            '<span style="font-size:20px; bold"><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span>'+'<span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221) 452-2523<br /></center></span>'+
                                        '</div>'+
                                        '<div style="border:solid thin; height:85px; border-radius: 7px; width:36%; float:right; padding: 6px">'+
                                            '<span style="font-weight:bold"><br />Recibo Nº E-'+e.recibo.e+'</span><br />'+
                                            '<span style="font-weight:bold">Movimiento:</span> Pago de obligaciones por cuenta y orden de terceros <br  />'+
                                            '<span style="font-weight:bold">Fecha:</span> '+e.reciboFecha+
                                          '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                                          '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                  '<span style="font-weight:bold"> Razón social del cliente:</span> '+e.receptor+'<br  />'+
                                                  '<span style="font-weight:bold"> Domicilio:  </span>'+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                  '<span style="font-weight:bold">Descripción del movimiento: </span>Recepción para pagos por parte del Cliente'+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: 60px;">'+
                                                  e.recibo.concepto+
                                              '</div>'+
                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: auto;">'+
                                                  '<span style="font-size: 16px; font-weight:bold">IMPUTACIONES:</span> <br />'+
                                                  imp+
                                                  '<span style="float:right; font-weight:bold; text"> Total Ingresado:'+e.total+'<br />Saldo en Cuenta Corriente:'+e.saldo+'</span><br /><br />'+
                                              '</div>'+
                                          '</div>'+
                                          '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                          '<span style="font-weight:bold">Operador: </span>'+ e.operador+
                                          '</div>'+
                                          '<div style="text-align:center; border:solid thin; border-radius: 7px; width:40%; float:right; padding: 6px;">'+
                                              '<br  /><br  /><br  />'+
                                              '-------------------------------------------<br />'+
                                              'Firma del operador'+
                                              '<br  />'+
                                          '</div>'+
                                     '</div>'+
                                  '</div>'
                                  ;

                                $('body').append(reciboee)
                                $.ajax({
                                    type:  "POST",
                                    url: "/imprimir/E-"+e.recibo.e,
                                    data: {recibo: reciboee}
                                });
                                $.blockUI({
                                  message: $('#imprimirRecibo'),
                                  css: {
                                    top: '0%',
                                    left: '0%',
                                    width: '100%',
                                    height: '100%',
                                    border: '1px',
                                    padding: '0%',
                                    cursor: 'default'
                                  }
                                });
                              sup.showDetails({id: superId})
                              }
                            })
                          })
                        }

                      })
                      $.blockUI({
                        message: $('#pago_window'),
                        css: {
                          top: '10%',
                          left: '30%',
                          width: '38%',
                          border: 'none',
                          padding: '1%',
                          cursor: 'default'
                        }
                      });
                    })
                  })
              })),
              $('.pago_infocard').append($("<input>", {
                  type: "button",
                  style: "background-color: Orange; background-image: none; color: White;",
                  "class": "BUTTON_save",
                  value: 'Cargar Pago'
              }).on("click",function(){
                  F.getReciboMaxc("recibo", function(t){
                      var sumImp=0;
                      diccionario.forEach(function(d){if(d!='')sumImp+=parseFloat(d)})
                      $('body').append(
                        '<div id="pago_window" style="display:none; background-color: #FDC9A2">' +
                        '<h1 class="bold" style="font-size:20px;color:#FF6666;">Realizar Pago</h1><br /><br />'+
                        '<span style="float:left">Recibo:<input  type="text" disabled value=C-'+t.maxi+'></span>'+
                        '<span style="float:right"><input align=right type="text" disabled value=$'+sumImp+'> </span><br /><br />'+
                        '<span>Compensación:<input name="compensacion" type=text> <br /><br /></span>'+
                        '<span>Pago el Cliente:<input name="pCliente" type=text><br /><br /></span>'+
                        '<input name="comprobante" type=text placeholder="Nº Comprobante">'+
                        '<input type="button" class="BUTTON_cancel lefty button" value="Cancelar" />'+
                        '<input type="button" class="BUTTON_create righty button" value="Aceptar" />' +
                        '</div>'
                      )
                      $('#pago_window .BUTTON_cancel').on('click', function() {
                        $.unblockUI(), window.setTimeout(function() {$("#pago_window").remove()}, 1e3);
                      })
                      $('#pago_window .BUTTON_create').on('click', function() {
                        var pCliente= parseFloat($("#pago_window input:text[name=pCliente]").val()) || 0;
                        var compensacion= parseFloat($("#pago_window input:text[name=compensacion]").val()) || 0;
                        var tPago= pCliente + compensacion
                        var diccion=[];
                        diccionario.forEach(function(impuesto, indice){
                          diccion.push({
                            id: indice,
                            monto: impuesto
                          })
                        });
                        $.unblockUI(),window.setTimeout(function(){$("#pago_window").remove()}, 1e3);
                        console.log($("#pago_window input:text[name=comprobante]").val())
                        var query= {
                            clienteComprobante: $("#pago_window input:text[name=comprobante]").val(),
                            cliente_id: cliente,
                            compensacionMonto: compensacion,
                            clienteMonto: pCliente,
                            impuestos:diccion,
                            reciboNumero: t.maxi,
                            totalPago: tPago
                        };
                        if(query.impuestos.length == 0){
                          F.msgError("No hay Impuestos por Pagar")
                        }else{
                          $.ajax({
                            type: "PUT",
                            url: "/pagoCompensacion",
                            data: query,
                            success: function(e){
                              var imp=''
                              e.impuestos.forEach(function(i){
                                imp+=i+'<br />'
                              })
                              var reciboc=
                                '<div id="imprimirRecibo" style="display:none; text-align: left;">' +
                                    '<div style="width: 600px; padding: 6px">'+
                                        '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                            '<span style="font-size:20px; "><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span>'+'<span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221)452-2523<br /></center></span>'+
                                        '</div>'+
                                        '<div style="border:solid thin; height:85px; border-radius: 7px; width:36%; float:right; padding: 6px">'+
                                            '<span style="font-weight:bold">Recibo Nº C-'+e.recibo.c+'</span><br />'+
                                            '<span style="font-weight:bold">Movimiento:</span> Pagos realizados por Cliente/Compensación <br  />'+
                                            '<span style="font-weight:bold">Fecha:</span> '+e.reciboFecha+
                                        '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                                        '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                '<span style="font-weight:bold"> Razón social del cliente:</span> '+e.receptor+'<br  />'+
                                                '<span style="font-weight:bold"> Domicilio:  </span>'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                '<span style="font-weight:bold">Descripción del movimiento: </span>Recepción para pagos por parte del Cliente'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: 60px;">'+
                                                e.recibo.concepto+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: 120px;">'+
                                                '<span style="font-size: 16px; font-weight:bold">IMPUTACIONES:</span> <br />'+
                                                imp+
                                            '</div>'+
                                        '</div>'+
                                        '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                        '<span style="font-weight:bold">Operador: </span>'+ e.operador+
                                        '</div>'+
                                        '<div style="text-align:center; border:solid thin; border-radius: 7px; width:40%; float:right; padding: 6px;">'+
                                            '<br  />'+
                                            '-------------------------------------------<br />'+
                                            '<br  />'+
                                            '<p><span style="font-weight:bold;">'+e.receptor+'</span></p>'+
                                        '</div>'+
                                '<br /><H1 style="font-weight:bold;">RECIBO NO VÁLIDO COMO CONSTANCIA DE ENTREGA DE DINERO</H1><br />-----------✂---------------------✂------------✂---------------------✂------------✂---------------------✂-------<br />'+
                                        '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                            '<span style="font-size:20px; "><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span>'+'<span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221)452-2523<br /></center></span>'+
                                        '</div>'+
                                        '<div style="border:solid thin; height:85px; border-radius: 7px; width:36%; float:right; padding: 6px">'+
                                            '<span style="font-weight:bold">Recibo Nº C-'+e.recibo.c+'</span><br />'+
                                            '<span style="font-weight:bold">Movimiento:</span> Pagos realizados por Cliente/Compensación <br  />'+
                                            '<span style="font-weight:bold">Fecha:</span> '+e.reciboFecha+
                                        '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                                        '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                '<span style="font-weight:bold"> Razón social del cliente:</span> '+e.receptor+'<br  />'+
                                                '<span style="font-weight:bold"> Domicilio:  </span>'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                '<span style="font-weight:bold">Descripción del movimiento: </span>Recepción para pagos por parte del Cliente'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: 60px;">'+
                                                e.recibo.concepto+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: 120px;">'+
                                                '<span style="font-size: 16px; font-weight:bold">IMPUTACIONES:</span> <br />'+
                                                imp+
                                            '</div>'+
                                        '</div>'+
                                        '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                        '<span style="font-weight:bold">Operador: </span>'+ e.operador+
                                        '</div>'+
                                        '<div style="text-align:center; border:solid thin; border-radius: 7px; width:40%; float:right; padding: 6px;">'+
                                            '<br  />'+
                                            '-------------------------------------------<br />'+
                                            '<br  />'+
                                            '<p><span style="font-weight:bold;">Estudio Integral Pressacco & Asoc.</span></p><br  />'+
                                        '</div>'+
                                    '</div><H1 style="font-weight:bold;">RECIBO NO VÁLIDO COMO CONSTANCIA DE ENTREGA DE DINERO</H1>'+
                                '</div>'
  ;
                              $('body').append(reciboc)
                              $.ajax({
                                  type:  "POST",
                                  url: "/imprimir/C-"+e.recibo.c,
                                  data: {recibo: reciboc}
                              });
                              $.blockUI({
                                message: $('#imprimirRecibo'),
                                css: {
                                  top: '0%',
                                  left: '0%',
                                  width: '100%',
                                  height: '100%',
                                  border: '1px',
                                  padding: '0%',
                                  cursor: 'default'
                                }
                              });
                              sup.showDetails({id: superId})
                            }
                         })
                          }
                       })

                      $.blockUI({
                        message: $('#pago_window'),
                        css: {
                          top: '10%',
                          left: '30%',
                          width: '38%',
                          border: 'none',
                          padding: '1%',
                          cursor: 'default'
                        }
                     })
                  });
              }));
              $('.pago_infocard').append($("<input>", {
                  type: "button",
                  "class": "BUTTON_delete",
                  value: "Cancelar"
              }).on("click", function() {
                  $(".clientePago_table tr").removeClass("selected_row");
                  $(".pago_infocard ").empty().append('<h3 class="formtitle"> Pagos del Cliente</h3>');
              }));
             }else{
              $('.pago_infocard').append('<span style="text-align:center;color:#CC4444;font-size:16px;">El cliente No posee Deudas</span>')
             }
            }
        });
    }),
    e.define("/views/ie/PagoInfoCard.js", function(e, t, n, r, i, s) {
        C.View.PagoInfoCard = Backbone.View.extend({
            name: "pago_infocard",
            title: "Pagos del Cliente",
            initialize: function() {
                F.createInfoCard(this, $("#clientePago_right"));
            },
        });
    }),
    e.define("/views/ie/ClientePagoInfoCard.js", function(e, t, n, r, i, s) {
        C.View.ClientePagoInfoCard = Backbone.View.extend({
            name: "clientePago_infocard",
            title: "Datos del Cliente",
            fieldnames: {
                 nombre: "Nombre",
                 actividad: "Actividad",
                 comunicacion: "Comunicacion",
                 monto: "Saldo en Cuenta"

            },
            initialize: function() {
                var e = this;
                F.createInfoCard(e, $("#clientePago_right"));
            }
        });
    }),
//ajusteCta
    e.define("/views/cliente/AjusteCta.js", function(e, t, n, r, i, s) {
        C.View.AjusteCta = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.ajusteCtas = new C.Collection.AjusteCtas(null, {
                    view: this
                }), this.ajusteCtas.fetch({
                    success: function(t, n) {
                        e.cliente_table = new C.View.AjusteCtaTable({
                            el: $("#cliente_left"),
                            collection: t
                        }), e.cliente_form = new C.View.AjusteCtaForm({
                            el: $("#cliente_right"),
                            model: e.model,
                            collection: t,
                            cliente_table: e.ajusteCta_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/cliente/AjusteCtaTable.js", function(e, t, n, r, i, s) {
        C.View.AjusteCtaTable = Backbone.View.extend({
        /*
    	    id: cc.id,
    	    catedral: cc.clienteCuentaCorriente.cliente.catedral,
    	    monto: cc.monto || 0.00,
    	    montoTramite: cc.montoTramite || 0.00,
    	    nombre: cc.clienteCuentaCorriente.cliente.nombre,
    	    comunicacion: com,
        */
            name: "cliente",
            headers: [ "id", "IdCatedral", "Nombre", "Comunicación", "Saldo Cuenta", "MontoTramite"],
            attrs: [ "id", "catedral", "nombre", "comunicacion", "monto", "montoTramite"],
            hidden_columns: ["monto", "montoTramite"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null ],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500,
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".cliente_form"), e);
                });
            },
            events: {
                "click .cliente_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
   }),
   e.define("/views/cliente/AjusteCtaForm.js", function(e, t, n, r, i, s) {
        C.View.AjusteCtaForm = Backbone.View.extend({
            name: "cliente_form",
            title: "Datos del AjusteCta",
            fields: {
                catedral: {
                    label: "IdCatedral",
                    attrs: {
                      disabled: "disabled"
                    }
                },
                nombre: {
                    label: "Nombre",
                    attrs: {
                      disabled: "disabled"
                    }
                },
                comunicacion: {
                    label: "Comunicación",
                    attrs: {
                      disabled: "disabled"
                    }
                },
                monto: {
                    label: "Saldo CtaCte",
                    attrs: {
                      disabled: "disabled",
                    },
                    force_label: !0
                },/*
                montoTramite: {
                    label: "Monto Trámites",
                    attrs: {
                      disabled: "disabled",
                    },
                    force_label: !0
                },*/
                iedoc_id: {
                    label: "Ingreso-Egreso",
                    type: "select"
                },
                montoNuevo: {
                    label: "Monto Cuenta Corriente",
                },
                observacion: {
                    label: "Observacion (Motivo del movimiento)",
                    type: "textarea"
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
                iedocs: null
            },
            initialize: function() {
              var e = this;
              var c = [{id: "Ingreso", nombre: "Ingreso"},{id:"Egreso", nombre: "Egreso"}];
                e.relations.iedocs = c,
                F.createForm(e);
            },
            events: {
                "click .cliente_form .BUTTON_save": "editAjusteCta",
            },
            getTable: function() {
                return this.options.ajusteCta_table;
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
            editAjusteCta: function() {
              var e = this;
              if(!isNaN($(".cliente_form").serializeObject().montoNuevo.replace(",","."))
              && ($(".cliente_form").serializeObject().iedoc_id != '')
              && ($(".cliente_form").serializeObject().observacion != '')
              ){
                $.ajax({
                  type: "POST",
                  url: "/ajusteCta/"+this.getSelectionID(),
                  data: $(".cliente_form").serialize(),
                  success: function(e) {
                    var recibog=
                    '<div id="imprimirPago" style="display:none; text-align: left;">' +
                        '<div style="width: 600px; height: padding: 6px">'+
                            '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                '<span style="font-size:20px; "><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span><span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221)452-2523<br /></center></span>'+
                            '</div>'+
                            '<div style="border:solid thin; border-radius: 7px; width:36%; float:right; height:85px; padding: 6px">'+
                                '<br /><span style="font-weight:bold;"> Recibo Nº G-'+e.recibo.g+'</span><br />'+
                                'Fecha: '+e.reciboFecha+
                            '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                            '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                    '<span style="font-weight:bold;"> Descripción del movimiento: </span>Ajuste de Cuenta Corriente por parte del Estudio'+
                                '</div>'+
                                '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: auto;">'+//30px
                                    e.detalle+
                                '</div>'+
                                '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: auto;">'+//130px
                                    '<span style="float:right; font-weight:bold; text"> TOTAL EN CUENTA:'+e.total+'<br /></span><br />'+
                                '</div>'+
                            '</div>'+
                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                '<span style="font-weight:bold;"> Operador: </span>'+ e.operador+
                            '</div>'+
                            '<div style="text-align:center; border:solid thin; border-radius: 7px; width:36%; float:left; padding: 6px;">'+
                                '<br  />'+
                                '-------------------------------------------<br />'+
                                'Firma del responsable'+
                                '<br  /><br  />'+
                                '<p><span style="font-weight:bold;">'+e.operador+'</span></p><br  />'+
                            '</div>'+
                            '<div style="text-align:center; border:solid thin; border-radius: 7px; width:36%; float:right; padding: 6px;">'+
                                '<br  />'+
                                '-------------------------------------------<br />'+
                                'Firma del receptor por el mismo'+
                                '<br  /><br  />'+
                                '<p><span style="font-weight:bold;">'+e.receptor+'</span></p><br  />'+
                            '</div>'+
                        '</div><H1 style="font-weight:bold;"><br /><br /><br /><br /><br /><br /><br /><br />'+// RECIBO NO VÁLIDO COMO CONSTANCIA DE ENTREGA DE DINERO</H1>
                    '</div>'
                  ;
                  $('body').append(recibog)
                  $.ajax({
                      type:  "POST",
                      url: "/imprimir/G-"+e.recibo.g,
                      data: {recibo: recibog}
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
              }else{
                F.msgError("Todos los campos son obligatorios")
              }
            }
        });
   }),
//HISTORIAL
    e.define("/views/ie/ClienteHistorial.js", function(e, t, n, r, i, s) {
        C.View.ClienteHistorial = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.clienteDocumentacions = new C.Collection.ClienteDocumentacions(null, {
                    view: this
                }), this.clienteDocumentacions.fetch({
                    success: function(t, n) {
                        e.clienteHistorial_table = new C.View.ClienteHistorialTable({
                            el: $("#clienteHistorial_left"),
                            collection: t
                        }), e.clienteHistorial_infocard = new C.View.ClienteHistorialInfoCard({
                            el: $("#clienteHistorial_right"),
                            model: e.model,
                            collection: t,
                            clienteHistorial_table: e.clienteHistorial_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/ie/ClienteHistorialTable.js", function(e, t, n, r, i, s) {
        C.View.ClienteHistorialTable = Backbone.View.extend({
           name: "clienteHistorial",
           headers: [ "id", "cliente_id", "IdCatedral", "Cuit", "Nombre","Comunicacion", "Contacto", "Clasificacion_id", "Clasificacion", "Comunicacion_id",  "Actividad_id", "Actividad",  "Telefono", "Celular", "Radio", "Email", "Empleados", "Observaciones", "cierre_id" ],
            attrs: [ "id", "cliente_id", "catedral", "cuit", "nombre", "comunicacion", "contacto",  "clasificacion_id", "clasificacion", "comunicacion_id","actividad_id", "actividad", "telefono", "celular", "radio", "email", "empleado", "observaciones", "cierre_id"],
            hidden_columns: [ "cliente_id", "cuit", "clasificacion_id", "comunicacion_id", "actividad_id", "telefono", "celular", "radio", "email", "clasificacion", "actividad", "empleado", "observaciones", "cierre_id"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [ 4, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToInfoCard($(".clienteHistorial_infocard"), e);
                }, function() {
                    var t = $(".clienteHistorial_table").dataTable();
                    $(".clienteHistorial_table tbody tr").on("click", function() {
                        t.fnIsOpen(this) ? t.fnClose(this) : t.fnOpen(this, e.generateRowDetails(t, this), "details");
                    });
                });
            },
            //21 HISTORIAL DE PAGOS
            generateRowDetails: function(e, t) {
                var n = this, r = e.fnGetData(t), i = r[0], s = '<div class="row_detail historial_id_' + i + '" style="display:none;">';
                return this.getHistorial(i, function(e) {
                    var t, r, s;
                    e.length ? (n.appendRowDetailsHeaders(i), _.each(e, function(e) {
                        t = $("<p>"), s = e.fecha + " - <span>" + e.impuesto +'</span><span  style="color:#622; float: right;">$'+e.monto+'</span>', $(t).append(s),
                        $(".historial_id_" + i).append(t).fadeIn()
                    })) : $(".historial_id_" + i).append("<p>Este Cliente no tiene Pagos Realizados</p>").fadeIn();
                }), s += "</div>", s;
            },
            getHistorial: function(e, t) {
                $.ajax({
                    url: "/historial/" + e,
                    success: function(e) {
                        t(e);
                    }
                });
            },
            appendRowDetailsHeaders: function(e) {
                $(".historial_id_" + e).append('<p class="row_details_headers">Fecha - Impuesto (Detalle) <span>Monto</span></p>');
            },
            events: {
                "click .clienteHistorial_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/ie/ClienteHistorialInfoCard.js", function(e, t, n, r, i, s) {
        C.View.ClienteHistorialInfoCard = Backbone.View.extend({
            name: "clienteHistorial_infocard",
            title: "Datos del Cliente",
            fieldnames: {
                 nombre: "Nombre",
                 actividad: "Actividad",
                 comunicacion: "Comunicacion"
            },
            initialize: function() {
                var e = this;
                F.createInfoCard(e, $("#clienteHistorial_right"));
            }
        });
    }),
//PERFIL
    e.define("/views/perfil/Perfil.js", function(e, t, n, r, i, s) {
        C.View.Perfil = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.perfil = new C.Collection.Perfils(null, {
                    view: this
                }), this.perfil.fetch({
                    success: function(t, n) {
                        var r = t.models[0], i = {
                            model: r,
                            el: $("#perfil_left")
                        };
                        $("#left").css({
                            paddingTop: "10px",
                            textAlign: "left"
                        }),
                        e.perfil_empleado_data = new C.View.PerfilEmpleadoInfoCard(i),
                        e.perfil_form = new C.View.PerfilForm(i),
                        e.perfil_password_form = new C.View.PerfilPasswordForm(i);
                    }
                });
            },
            events: {}
        });
    }),
    e.define("/views/perfil/PerfilEmpleadoInfoCard.js", function(e, t, n, r, i, s){
      C.View.PerfilEmpleadoInfoCard = Backbone.View.extend({
        name: "perfil_empleado_infocard",
        title: "Datos de Empleado",
        fieldnames: {
          area: "Área",
          rol: "Rol"
        },
        initialize: function() {
          F.createInfoCard(this, $("#perfil_right"));
        }
      });
    }),
    e.define("/views/perfil/PerfilForm.js", function(e, t, n, r, i, s){
        C.View.PerfilForm = Backbone.View.extend({
            name: "perfil_form",
            title: "Mis Datos",
            fields: {
                usuario: {
                    label: "Usuario",
                    attrs: {
                        disabled: "disabled"
                    }
                },
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                apellido: {
                    label: "Apellido",
                    check: "alpha"
                },
                telefono: {
                    label: "Teléfono",
                    check: "integer"
                },
                email: {
                    label: "E-mail",
                    check: "email"
                }
            },
            buttons: {
                cancel: !0,
                save: !0
            },
            initialize: function() {
                F.createForm(this, $("#perfil_left"));
            },
            events: {
                "click .perfil_form .BUTTON_save": "savePerfil"
            },
            savePerfil: function() {
                F.V.email("E-mail", $(".perfil_form input:text[name=email]"), function() {
                    $.ajax({
                        type: "PUT",
                        url: "/perfil/"+$("#session_user_id").html(),
                        data: $(".perfil_form").serialize(),
                        success: function() {
                            F.msgOK("Datos actualizados exitosamente");
                        }
                    });
                }, function(e) {
                    F.msgError(e);
                });
            }
        });
    }), e.define("/views/perfil/PerfilPasswordForm.js", function(e, t, n, r, i, s) {
        C.View.PerfilPasswordForm = Backbone.View.extend({
            name: "perfil_password_form",
            title: "Cambiar Contraseña",
            fields: {
                pass1: {
                    label: "Contraseña",
                    type: "password"
                },
                pass2: {
                    label: "Contraseña (repetir)",
                    type: "password"
                }
            },
            buttons: {
                cancel: !0,
                save: !0
            },
            initialize: function() {
                F.createForm(this, $("#perfil_left"));
            },
            events: {
                "click .perfil_password_form .BUTTON_save": "savePass"
            },
            savePass: function() {
                var e = $(".perfil_password_form input:password[name=pass1]"), t = $(".perfil_password_form input:password[name=pass2]");
                F.V.passwords(e, t, function() {
                    $.ajax({
                        type: "POST",
                        url: "/perfil/changePassword",
                        data: $(".perfil_password_form").serialize(),
                        success: function() {
                            F.msgOK("Contraseña actualizada exitosamente");
                        }
                    });
                }, function(e) {
                    F.msgError(e);
                });
            }
        });
    }),
//ieOt
    e.define("/views/ie/IeOt.js", function(e, t, n, r, i, s) {
        C.View.IeOt = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.ieOts = new C.Collection.IeOts(null, {
                    view: this
                }), this.ieOts.fetch({
                    success: function(t, n) {
                        e.ieOt_table = new C.View.IeOtTable({
                            el: $("#ieOt_left"),
                            collection: t
                        }), e.ieOt_form = new C.View.IeOtForm({
                            el: $("#ieOt_right"),
                            model: e.model,
                            collection: t,
                            ieOt_table: e.ieOt_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/ie/IeOtTable.js", function(e, t, n, r, i, s) {
        C.View.IeOtTable = Backbone.View.extend({
           name: "ieOt",
           headers: [ "ID", "Número", "estado", "cliente_id", "Cliente", "Ingreso", "Vencimiento", "plan_id", "notificarCliente", "honorarios", "prioridad", "coordinador", "Título", "Descripción", "conclusion", "prioridad", "comunicacion_id", "oc_id", "ocs", "reservado"],
            attrs: [ "id", "numero", "estado", "cliente_id", "clienteNombre", "ingreso", "fechaVencimiento", "plan_id", "notificarCliente", "honorarios", "prioridad", "coordinador", "titulo", "descripcion", "conclusion", "prioridad", "comunicacion_id", "oc_id", "ocs", "reservado"],
            hidden_columns: ["estado", "cliente_id", "plan_id", "notificarCliente", "honorarios",  "coordinador", "descripcion", "conclusion", "prioridad", "comunicacion_id", "oc_id", "ocs", "reservado"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [ 1, "desc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".ieOt_form"), e);
                    $(".ieOt_form .BUTTON_delete").val("Ver Tareas")
                });
            },
            events: {
                "click .clienteHistorial_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
   e.define("/views/ie/IeOtForm.js", function(e, t, n, r, i, s) {
        C.View.IeOtForm = Backbone.View.extend({
            name: "ieOt_form",
            title: "Datos de la Orden de Trabajo",
            fields: {
                numero: {
                    label: "O/T Nº",
                    force_label: !0,
                    value: null,
                    attrs: {
                        disabled: "disabled",
                        style: "margin-top:-1em 0 1em;"
                    }
                },
                cliente_id: {
                    label: "Cliente",
                    type: "select"
                },
                titulo: {
                  label: "Título estimativo del trabajo a realizar",
                },
                descripcion: {
                  label: "Descripción (explicación de que se debe hacer para que lo pueda revisar el cliente)",
                  type: "textarea",
                  attrs: {
                        style: "height:150px;"
                    }
                },
                comunicacion_id: {
                    label: "Comunicacion",
                    type: "select"
                },
                oc_id: {
                    label: "OC(s)",
                    force_label: !0,
                    type: "selectmultiple",
                },
                ocs: {
                  force_label: !0,
                  label: "Titulos de las OC(s) seleccionadas",
                  type: "textarea",
                  attrs: {
                        disabled: "disabled",
                    }
                },
                notificarCliente: {
                    label: "Notificar eventos al cliente",
                    type: "select_yn",
                    default_value: "n"
                },
                reservado: {
                    label: "Reservado",
                    type: "select_yn",
                    default_value: "n"
                },
            },
            buttons: {
                create: !0,
                save: !1,
                cancel: !0,
                "delete": !0
            },
            isCRUD: !0,
            relations: {
                clientes: null,
                comunicacions: null,
            },
            initialize: function() {
              var e = this;
              F.getOtNumero("ot",function(t) {
                e.fields.numero.value = t.maxi, F.getAllFromModel("cliente/nombre", function(t) {
                  e.relations.clientes = t, F.getAllFromModel("comunicacion", function(t) {
                    e.relations.comunicacions = t,  F.getAllFromModel("oc/activa", function(t) {
                      e.relations.ocs = t, F.createForm(e)
                    })
                  })
                });
              });
            },
            events: {
                "click .ieOt_form .BUTTON_create": "addOt",
                "click .ieOt_form .BUTTON_delete": "ver_mas",
            },
            getTable: function() {
                return this.options.ot_table;
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
            addTableRow: function(e) {
                var t = F.JSONValuesToArray($(".ot_form").serializeObject());
                t.unshift(e), this.getDataTable().fnAddData(t);
            },
            editTableRow: function(e) {},
            ver_mas: function() {
              var e = this, i= e.getSelectionID();
              if(!isNaN(i)){
                $("body").append('<div id="ver_mas_window" style="display:none;"><h1 class="bold"style="font-size:20px;color:#FF6666; text-align:center">Tareas de la O/T Nº'+i+'</h1>' + '<form id="ver_mas_form">' + "<br /><br />" + "</form>" + '<input type="button" class="BUTTON_cancel lefty button" onclick=location.reload() value="Salir" />'+ "</div>"),
                $.blockUI({
                  message: $("#ver_mas_window"),
                  css: {
                    "text-align": "left",
                    width: "70%",
                    top: "3%",
                    left: "3%",
                    botton: "3%",
                    height: "85%",
                    border: "none",
                    overflow: "auto",
                    padding: "1%",
                    cursor: "default",
                  }
                });
                $.ajax({
                  type: "GET",
                  url: "/ot/byOt/"+i,
                  success: function(ot){
                    $.ajax({
                      type: "GET",
                      url: "/otTarea/byOt/"+i,
                      success: function(t) {
                        if(ot){
                            if($.isArray(t)){
                              $("#ver_mas_form").append('<span  style= "font-weight: bold">'+ot.clienteNombre+'</span><br /><span  style= "font-weight: bold">Ingreso:</span>'+ot.ingreso+'<br /><hr style="color: #0056b2;" /><p><span  style= "font-weight: bold">Titulo OT:</span>'+ot.titulo+'<br /><span  style= "font-weight: bold">Descripción OT:</span>'+ot.descripcion+'<hr style="color: #0056b2;" /></p>')
                              t.forEach(function(q){
                                 var nombre = q.nombre || "Sin Nombre",
                                 descripcion = q.descripcion || "Sin Descripción" ,
                                 observacion = q.observacion || "Sin Observación" ;
                                 $("#ver_mas_form").append(
                                  '<p><h3>Titulo: '+nombre+'</h3></p>'+
                                  '<p><span style= "font-weight: bold">Descripcion: </span>'+ descripcion +'</p>'+
                                  '<p><span style= "font-weight: bold">Observacion: </span>'+ observacion +'</p><hr style="color: #0056b2;" />');
                              })
                              $("#ver_mas_form").append('<p><span  style= "font-weight: bold" >Conclusión OT:</span>'+ot.conclusion+'</p>')
                            }
                        }
                      }
                    })
                  }
                })
              }
            },
            addOt: function() {
              if((C.Session.getUser().area_id == 8)||(C.Session.getUser().rol_id > 3)){
                var e = this;
                if(($(".ieOt_form").serializeObject().cliente_id != '')
                && ($(".ieOt_form").serializeObject().notificarCliente != '')
                && ($(".ieOt_form").serializeObject().titulo != '')
                && ($(".ieOt_form").serializeObject().comunicacion_id != '')
                ){
                  $.ajax({
                    type: "POST",
                    url: "/ot/ie/",
                    data: $(".ieOt_form").serialize(),
                    success: function() {
                      F.msgOK("O/T creada exitosamente");
                      setTimeout(function(){location.reload()},1e3)
                    }
                 })
                }else{
                  F.msgError('Los campos cliente, título, comunicación y Notificar Eventos son obligatorios');
                }
              }else{
                F.msgError("No tiene los permisos necesarios")
              }
            },
            editOt: function() {
              var e = this;
              if(($(".ot_form").serializeObject().cliente_id != '')
              && ($(".ieOt_form").serializeObject().notificarCliente != '')
              && ($(".ieOt_form").serializeObject().titulo != '')
              && ($(".ieOt_form").serializeObject().comunicacion_id != '')
              ){
                $.ajax({
                  type: "PUT",
                  url: "/ot/ie/"+e.getSelectionID(),
                  data: $(".ieOt_form").serialize(),
                  success: function() {
                    F.msgOK("O/T editada exitosamente");
                    setTimeout(function(){location.reload()},1e3)
                  }
               })
             }else{
                F.msgError('Los campos cliente, título, comunicación y Notificar Eventos son obligatorios');
             }
            }
        });
    }),
//ieOc
    e.define("/views/ie/IeOc.js", function(e, t, n, r, i, s) {
        C.View.IeOc = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.ieOcs = new C.Collection.IeOcs(null, {
                    view: this
                }), this.ieOcs.fetch({
                    success: function(t, n) {
                        e.ieOc_table = new C.View.IeOcTable({
                            el: $("#ieOc_left"),
                            collection: t
                        }), e.ieOc_form = new C.View.IeOcForm({
                            el: $("#ieOc_right"),
                            model: e.model,
                            collection: t,
                            ieOc_table: e.ieOc_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/ie/IeOcTable.js", function(e, t, n, r, i, s) {
        C.View.IeOcTable = Backbone.View.extend({
           name: "ieOc",
           headers: [ "ID", "Número", "cliente_id",  "Cliente", "fechaVencimiento", "Título", "Consulta", "Solución", "comunicacion_id", "empleado_id", "notificarCliente", "activa", "ot_id" ],
            attrs: [ "id", "numero", "cliente_id", "clienteNombre", "fechaVencimiento", "titulo", "consulta", "solucion", "comunicacion_id", "empleado_id", "notificarCliente", "activa", "ot_id" ],
            hidden_columns: [ "cliente_id", "consulta", "solucion", "comunicacion_id", "empleado_id", "notificarCliente", "activa", "ot_id" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null, null, null ],
                iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".ieOc_form"), e);
                });
            },
            events: {
                "click .clienteHistorial_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
   e.define("/views/ie/IeOcForm.js", function(e, t, n, r, i, s) {
        C.View.IeOcForm  = Backbone.View.extend({
            name: "ieOc_form",
            title: "Datos de la Orden de Consulta",
            fields: {
                numero: {
                    label: "O/C Nº",
                    force_label: !0,
                    value: null,
                    attrs: {
                        disabled: "disabled",
                        style: "margin-top:-1em 0 1em;"
                    }
                },
                cliente_id: {
                    label: "Cliente",
                    type: "select"
                },
                fechaVencimiento: {
                    label: "Fecha de Vencimiento",
                    type: "datepicker"
                },
                titulo: {
                  label: "Título estimativo del trabajo a realizar",
                },
                consulta: {
                  label: "Consulta",
                  type: "textarea",
                  attrs: {
                        style: "height:150px;"
                    }
                },
                solucion: {
                  label: "Solución",
                  type: "textarea",
                  attrs: {
                        style: "height:150px;"
                    }
                },
                comunicacion_id: {
                    label: "Comunicación",
                    type: "select"
                },
                activa: {
                    label: "Activa",
                    type: "select_yn",
                    default_value: "y"
                },
                ot_id: {
                  label: "Orden de trabajo asociada",
                },
                empleado_id: {
                    label: "Empleado",
                    type: "select"
                },
                notificarCliente: {
                    label: "Notificar al cliente",
                    type: "select_yn",
                    default_value: "n"
                },
            },
            buttons: {
                create: !0,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            isCRUD: !0,
            relations: {
                clientes: null,
                comunicacions: null,
                empleados: null,
            },
            initialize: function() {
              var e = this;
              F.getOcNumero("ieoc",function(t) {
                e.fields.numero.value = t.maxi, F.getAllFromModel("cliente", function(t) {
                  e.relations.clientes = t, F.getAllFromModel("comunicacion", function(t) {
                    e.relations.comunicacions = t,  F.getAllFromModel("empleado", function(t) {
                      e.relations.empleados = t, F.createForm(e)
                    })
                  })
                });
              });
            },
            events: {
                "click .ieOc_form .BUTTON_create": "addOc",
                "click .ieOc_form .BUTTON_save": "editOc"
            },
            getTable: function() {
                return this.options.oc_table;
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
            addTableRow: function(e) {
                var t = F.JSONValuesToArray($(".oc_form").serializeObject());
                t.unshift(e), this.getDataTable().fnAddData(t);
            },
            editTableRow: function(e) {},
            addOc: function() {
              var e = this;

              if(($(".ieOc_form").serializeObject().cliente_id != '')
              && ($(".ieOc_form").serializeObject().notificarCliente != '')
              && ($(".ieOc_form").serializeObject().titulo != '')
              && ($(".ieOc_form").serializeObject().comunicacion_id != '')
              ){
                $.ajax({
                  type: "POST",
                  url: "/ieoc/",
                  data: $(".ieOc_form").serialize(),
                  success: function() {
                    F.msgOK("O/C creada exitosamente");
                    setTimeout(function(){location.reload()},1e3)
                  }
               })
             }else{
                F.msgError('Los campos cliente, título, comunicación y Notificar al Cliente son obligatorios');
             }
            },
            editOc: function(){
              var e = this;
              if(C.Session.getUser().rol_id > 1){ //operadores no
                if(($(".ieOc_form").serializeObject().cliente_id != '')
                && ($(".ieOc_form").serializeObject().notificarCliente != '')
                && ($(".ieOc_form").serializeObject().titulo != '')
                && ($(".ieOc_form").serializeObject().comunicacion_id != '')
                ){
                  $.ajax({
                    type: "PUT",
                    url: "/ieoc/"+e.getSelectionID(),
                    data: $(".ieOc_form").serialize(),
                    success: function() {
                      F.msgOK("O/C editada exitosamente");
                      setTimeout(function(){location.reload()},1e3)
                    }
                 })
               }else{
                  F.msgError('Los campos cliente, título, comunicación y Notificar Eventos son obligatorios');
               }
             }else{
                F.msgError("No tiene los permisos necesarios")
             }
            }
        });
    }),
//PERFIL
    e.define("/views/perfil/Perfil.js", function(e, t, n, r, i, s) {
        C.View.Perfil = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.perfil = new C.Collection.Perfils(null, {
                    view: this
                }), this.perfil.fetch({
                    success: function(t, n) {
                        var r = t.models[0], i = {
                            model: r,
                            el: $("#perfil_left")
                        };
                        $("#left").css({
                            paddingTop: "10px",
                            textAlign: "left"
                        }),
                        e.perfil_empleado_data = new C.View.PerfilEmpleadoInfoCard(i),
                        e.perfil_form = new C.View.PerfilForm(i),
                        e.perfil_password_form = new C.View.PerfilPasswordForm(i);
                    }
                });
            },
            events: {}
        });
    }),
    e.define("/views/perfil/PerfilEmpleadoInfoCard.js", function(e, t, n, r, i, s) {
        C.View.PerfilEmpleadoInfoCard = Backbone.View.extend({
            name: "perfil_empleado_infocard",
            title: "Datos de Empleado",
            fieldnames: {
                area: "Área",
                rol: "Rol"
            },
            initialize: function() {
                F.createInfoCard(this, $("#perfil_right"));
            }
        });
    }),
    e.define("/views/perfil/PerfilForm.js", function(e, t, n, r, i, s) {
        C.View.PerfilForm = Backbone.View.extend({
            name: "perfil_form",
            title: "Mis Datos",
            fields: {
                usuario: {
                    label: "Usuario",
                    attrs: {
                        disabled: "disabled"
                    }
                },
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                apellido: {
                    label: "Apellido",
                    check: "alpha"
                },
                telefono: {
                    label: "Teléfono",
                    check: "integer"
                },
                email: {
                    label: "E-mail",
                    check: "email"
                }
            },
            buttons: {
                cancel: !0,
                save: !0
            },
            initialize: function() {
                F.createForm(this, $("#perfil_left"));
            },
            events: {
                "click .perfil_form .BUTTON_save": "savePerfil"
            },
            savePerfil: function() {
                F.V.email("E-mail", $(".perfil_form input:text[name=email]"), function() {
                    $.ajax({
                        type: "PUT",
                        url: "/perfil/"+$("#session_user_id").html(),
                        data: $(".perfil_form").serialize(),
                        success: function() {
                            F.msgOK("Datos actualizados exitosamente");
                        }
                    });
                }, function(e) {
                    F.msgError(e);
                });
            }
        });
    }), e.define("/views/perfil/PerfilPasswordForm.js", function(e, t, n, r, i, s) {
        C.View.PerfilPasswordForm = Backbone.View.extend({
            name: "perfil_password_form",
            title: "Cambiar Contraseña",
            fields: {
                pass1: {
                    label: "Contraseña",
                    type: "password"
                },
                pass2: {
                    label: "Contraseña (repetir)",
                    type: "password"
                }
            },
            buttons: {
                cancel: !0,
                save: !0
            },
            initialize: function() {
                F.createForm(this, $("#perfil_right"));
            },
            events: {
                "click .perfil_password_form .BUTTON_save": "savePass"
            },
            savePass: function() {
                var e = $(".perfil_password_form input:password[name=pass1]"), t = $(".perfil_password_form input:password[name=pass2]");
                F.V.passwords(e, t, function() {
                    $.ajax({
                        type: "POST",
                        url: "/perfil/changePassword",
                        data: $(".perfil_password_form").serialize(),
                        success: function() {
                            F.msgOK("Contraseña actualizada exitosamente");
                        }
                    });
                }, function(e) {
                    F.msgError(e);
                });
            }
        });
    }),
//EMPLEADO
    e.define("/views/crud/Empleado.js", function(e, t, n, r, i, s) {
        C.View.Empleado = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.empleados = new C.Collection.Empleados(null, {
                    view: this
                }), this.empleados.fetch({
                    success: function(t, n) {
                        e.empleado_table = new C.View.EmpleadoTable({
                            el: $("#empleado_left"),
                            collection: t
                        }), e.empleado_form = new C.View.EmpleadoForm({
                            el: $("#empleado_right"),
                            model: e.model,
                            collection: t,
                            empleado_table: e.empleado_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/crud/EmpleadoTable.js", function(e, t, n, r, i, s) {
        C.View.EmpleadoTable = Backbone.View.extend({
            name: "empleado",
            headers: [ "ID", "Legajo", "Nombre", "Apellido", "Teléfono", "E-mail","DNI", "pc" ],
            attrs: [ "id", "legajo", "nombre", "apellido", "telefono", "mail", "dni", "pc" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null],
                aaSorting: [ [ 3, "asc" ] ],
                iDisplayLength: 500
            },
            hidden_columns: [ "id", "dni", "mail", "pc" ],
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".empleado_form"), e);
                });
            },
            events: {
                "click .empleado_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/crud/EmpleadoForm.js", function(e, t, n, r, i, s) {
        C.View.EmpleadoForm = Backbone.View.extend({
            name: "empleado_form",
            title: "Datos del Empleado",
            fields: {
                legajo: {
                    label: "Legajo"
                },
                nombre: {
                    label: "Nombre",
                    required: !0,
                    check: "alpha"
                },
                apellido: {
                    label: "Apellido",
                    required: !0,
                    check: "alpha"
                },
                telefono: {
                    label: "Teléfono"
                },
                dni: {
                    label: "DNI"
                },
                mail: {
                    label: "E-mail",
                    placeholder: "E-mail (ej.: usuario@epressacco.com.ar)",
                    required: !0,
                    check: "email"
                },
                pc: {
                    label: "Profesional/Colaborador",
                    type: "select_pc"
                }
            },
            isCRUD: !0,
            initialize: function() {
                F.createForm(this);
            },
            events: {
                "click .empleado_form .BUTTON_create": "addEmpleado",
                "click .empleado_form .BUTTON_save": "editEmpleado",
                "click .empleado_form .BUTTON_delete": "delEmpleado"
            },
            getTable: function() {
                return this.options.empleado_table;
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
            addEmpleado: function() {
                var e = this;
                if(($(".empleado_form").serializeObject().nombre != '')
	            	&& ($(".empleado_form").serializeObject().apellido != '')
	            	&& ($(".empleado_form").serializeObject().legajo != '')
                ){
                  $.ajax({
                    type: "POST",
                    url: "/empleado/",
                    data: $(".empleado_form").serialize(),
                    success: function() {
                      F.msgOK("Empleado creado exitosamente")
                      window.setTimeout(function(){location.reload()},1e3);
                    }
                  })
               }else{
                F.msgError("Los Campos Legajo, Nombre y Apellido son OBLIGATORIOS")
               }
            },
            editEmpleado: function() {
                var e = this;
                if(($(".empleado_form").serializeObject().nombre != '')
	            	&& ($(".empleado_form").serializeObject().apellido != '')
	            	&& ($(".empleado_form").serializeObject().legajo != '')
                ){
                  $.ajax({
                    type: "PUT",
                    url: "/empleado/"+this.getSelectionID(),
                    data: $(".empleado_form").serialize(),
                    success: function() {
                      F.msgOK("Empleado editado exitosamente")
                      window.setTimeout(function() { location.reload() }, 1e3);
                    }
                  })
               }else{
                F.msgError("Los Campos Legajo, Nombre, Apellido y Email son OBLIGATORIOS")
               }
            },
            delEmpleado: function() {
              var e = this;
              F.msgConfirm("¿Desea eliminar a este Empleado?", function() {
                $.ajax({
                  type: "POST",
                  url: "/empleado/delete/"+e.getSelectionID(),
                  data: $(".empleado_form").serialize(),
                  success: function() {
                    F.msgOK("El Empleado ha sido eliminado");
                    window.setTimeout(function() { location.reload() }, 1e3);
                  }
                });
              });
          }
        });
    }),
//CONCEPTO
    e.define("/views/crud/Concepto.js", function(e, t, n, r, i, s) {
        C.View.Concepto = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.conceptos = new C.Collection.Conceptos(null, {
                    view: this
                }), this.conceptos.fetch({
                    success: function(t, n) {
                        e.concepto_table = new C.View.ConceptoTable({
                            el: $("#concepto_left"),
                            collection: t
                        }), e.concepto_form = new C.View.ConceptoForm({
                            el: $("#concepto_right"),
                            model: e.model,
                            collection: t,
                            concepto_table: e.concepto_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/crud/ConceptoTable.js", function(e, t, n, r, i, s) {
        C.View.ConceptoTable = Backbone.View.extend({
            name: "concepto",
            headers: [ "ID", "Nombre" ],
            attrs: [ "id", "nombre" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500
            },
            hidden_columns: [],
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".concepto_form"), e);
                });
            },
            events: {
                "click .concepto_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/crud/ConceptoForm.js", function(e, t, n, r, i, s) {
        C.View.ConceptoForm = Backbone.View.extend({
            name: "concepto_form",
            title: "Datos del Concepto",
            fields: {
                nombre: {
                    label: "Nombre",
                    required: !0,
                    check: "alpha"
                }
            },
            isCRUD: !0,
            buttons: {
                create: !0,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            initialize: function() {
                F.createForm(this);
            },
            events: {
                "click .concepto_form .BUTTON_create": "addConcepto",
                "click .concepto_form .BUTTON_save": "editConcepto",
            },
            getTable: function() {
                return this.options.concepto_table;
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
            addConcepto: function() {
                var e = this;
                if($(".concepto_form").serializeObject().nombre != ''){
                  $.ajax({
                    type: "POST",
                    url: "/concepto/",
                    data: $(".concepto_form").serialize(),
                    success: function() {
                      F.msgOK("Concepto creado exitosamente")
                      window.setTimeout(function(){location.reload()},1e3);
                    }
                  })
               }else{
                F.msgError("El campo Nombre es OBLIGATORIO")
               }
            },
            editConcepto: function() {
                var e = this;
                if($(".empleado_form").serializeObject().nombre != ''){
                  $.ajax({
                    type: "PUT",
                    url: "/concepto/"+this.getSelectionID(),
                    data: $(".concepto_form").serialize(),
                    success: function() {
                      F.msgOK("Concepto editado exitosamente")
                      window.setTimeout(function() { location.reload() }, 1e3);
                    }
                  })
               }else{
                F.msgError("El campo Nombre es OBLIGATORIO")
               }
            },
        });
    }),
//USUARIO
    e.define("/views/crud/Usuario.js", function(e, t, n, r, i, s) {
        C.View.Usuario = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.usuarios = new C.Collection.Usuarios(null, {
                    view: this
                }), this.usuarios.fetch({
                    success: function(t, n) {
                        e.usuario_table = new C.View.UsuarioTable({
                            el: $("#usuario_left"),
                            collection: t
                        }), e.usuario_form = new C.View.UsuarioForm({
                            el: $("#usuario_right"),
                            model: e.model,
                            collection: t,
                            usuario_table: e.usuario_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/crud/UsuarioTable.js", function(e, t, n, r, i, s) {
        C.View.UsuarioTable = Backbone.View.extend({
            name: "usuario",
            headers: [ "ID", "Usuario", "ID Empleado", "Empleado", "ID Rol", "Rol", "ID Area", "Area" ],
            attrs: [ "id", "usuario", "empleado_id", "empleado", "rol_id", "rol", "area_id", "area" ],
            hidden_columns: ["rol", "area"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".usuario_form"), e);
                });
            },
            events: {
                "click .usuario_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/crud/UsuarioForm.js", function(e, t, n, r, i, s) {
        C.View.UsuarioForm = Backbone.View.extend({
            name: "usuario_form",
            title: "Datos del Usuario",
            fields: {
                usuario: {
                    label: "Usuario  (sin espacios)",
                    check: "alpha"
                },
                empleado_id: {
                    label: "Empleado",
                    type: "select"
                },
                empleado: {
                    type: "hidden"
                },
                rol_id: {
                    label: "Rol",
                    type: "select"
                },
                rol: {
                    type: "hidden"
                },
                area_id: {
                    label: "Area",
                    type: "select"
                },
                area: {
                    type: "hidden"
                }
            },
            isCRUD: !0,
            relations: {
                empleados: null,
                roles: null,
                areas: null
            },
            initialize: function() {
                var e = this;
                F.getAllFromModel("empleado", function(t) {
                    e.relations.empleados = t, F.getAllFromModel("rol", function(t) {
                        e.relations.rols = t, F.getAllFromModel("area", function(t) {
                            e.relations.areas = t, F.createForm(e);
                        });
                    });
                });
            },
            events: {
                "click .usuario_form .BUTTON_create": "addUsuario",
                "click .usuario_form .BUTTON_save": "editUsuario",
                "click .usuario_form .BUTTON_delete": "delUsuario",
	              "click .usuario_form .BUTTON_cancel": "cancelUsuario"
            },
            getTable: function() {
                return this.options.usuario_table;
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
            cancelUsuario: function(){
              location.reload();
            },
            addUsuario: function() {
             var e = this;
             if(($(".usuario_form").serializeObject().usuario != '')
	            &&($(".usuario_form").serializeObject().rol_id != '')
            	&&($(".usuario_form").serializeObject().area_id != '')
	            &&($(".usuario_form").serializeObject().empleado_id != '')
	           ){
                 $.ajax({
                        type: "POST",
                        url: "/usuario/",
                        data: $(".usuario_form").serialize(),
                        success: function(ans) {
                            (ans===true)?F.msgOK("Usuario creado exitosamente"):F.msgError(ans);
  		                      this.usuarios = new C.Collection.Usuarios(null, {
                              view: this
                            }), this.usuarios.fetch({
                             success: function(t, n) {
                               $("#usuario_left").empty()
                               e.usuario_table = new C.View.UsuarioTable({
                                 el: $("#usuario_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                })
             }else{
               F.msgError("Todos los campos son OBLIGATORIOS");
             }
            },
            editUsuario: function() {
             var e = this;
             if(  ($(".usuario_form").serializeObject().usuario != '')
             		&&($(".usuario_form").serializeObject().rol_id != '')
	        	    &&($(".usuario_form").serializeObject().area_id != '')
            		&&($(".usuario_form").serializeObject().empleado_id != '')
      	     ){
                $.ajax({
                  type: "PUT",
                  url: "/usuario/"+this.getSelectionID(),
                  data: $(".usuario_form").serialize(),
                  success: function() {
                      F.msgOK("Usuario editado exitosamente")
            this.usuarios = new C.Collection.Usuarios(null, {
                        view: this
                      }), this.usuarios.fetch({
                       success: function(t, n) {
                         $("#usuario_left").empty()
                         e.usuario_table = new C.View.UsuarioTable({
                           el: $("#usuario_left"),
                           collection: t
                         })
                       }
                     });
                  }
                })
             }else{
               F.msgError("Todos los campos son OBLIGATORIOS");
             }
            },
            delUsuario: function() {
                var e = this;
                F.msgConfirm("¿Desea eliminar a este Usuario?", function() {
                  $.ajax({
                    type: "POST",
                    url: "/usuario/delete/"+e.getSelectionID(),
                    data: $(".usuario_form").serialize(),
                    success: function() {
                        this.usuarios = new C.Collection.Usuarios(null, {
                        view: this
                      }), this.usuarios.fetch({
                       success: function(t, n) {
                         $("#usuario_left").empty(), $("#usuario_right").empty(),
                         e.usuario_table = new C.View.UsuarioTable({
                           el: $("#usuario_left"),
                           collection: t
                         }), e.usuario_form = new C.View.UsuarioForm({
                         el: $("#usuario_right"),
                         model: e.model,
                         collection: t,
                         usuario_table: e.usuario_table
                         });
                       }
                     }), F.msgOK("El Usuario ha sido eliminado");
                    }
                  });
                });
            }
        });
    }),
//CLASIFICACION
    e.define("/views/crud/Clasificacion.js", function(e, t, n, r, i, s) {
        C.View.Clasificacion = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.clasificacions = new C.Collection.Clasificacions(null, {
                    view: this
                }), this.clasificacions.fetch({
                    success: function(t, n) {
                        e.clasificacion_table = new C.View.ClasificacionTable({
                            el: $("#clasificacion_left"),
                            collection: t
                        }), e.clasificacion_form = new C.View.ClasificacionForm({
                            el: $("#clasificacion_right"),
                            model: e.model,
                            collection: t,
                            clasificacion_table: e.clasificacion_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/crud/ClasificacionTable.js", function(e, t, n, r, i, s) {
        C.View.ClasificacionTable = Backbone.View.extend({
            name: "clasificacion",
            headers: [ "ID", "Nombre", "Observación"],
            attrs: [ "id", "nombre", "observacion" ],
            hidden_columns: [ "observacion"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".clasificacion_form"), e);
                });
            },
            events: {
                "click .clasificacion_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/crud/ClasificacionForm.js", function(e, t, n, r, i, s) {
        C.View.ClasificacionForm = Backbone.View.extend({
            name: "clasificacion_form",
            title: "Detalle de la Clasificación",
            fields: {
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                observacion: {
                    label: "Observación",
                    check: "alpha",
                     type: "textarea"
                },
            },
            isCRUD: !0,
            initialize: function() {
                F.createForm(this);
            },
            events: {
                "click .clasificacion_form .BUTTON_create": "addClasificacion",
                "click .clasificacion_form .BUTTON_save": "editClasificacion",
                "click .clasificacion_form .BUTTON_delete": "delClasificacion"
            },
            getTable: function() {
                return this.options.clasificacion_table;
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
            addClasificacion: function() {
                var e = this;
                if(  $(".clasificacion_form").serializeObject().nombre.replace(/\s/g, "") != '' ){
                  $.ajax({
                    type: "POST",
                    url: "/clasificacion/",
                    data: $(".clasificacion_form").serialize(),
                    success: function() {
                      F.msgOK("Clasificación creada exitosamente")
                      this.clasificacions = new C.Collection.Clasificacions(null, {
                        view: this
                      }), this.clasificacions.fetch({
                       success: function(t, n) {
                         $("#clasificacion_left").empty()
                         e.clasificacion_table = new C.View.ClasificacionTable({
                           el: $("#clasificacion_left"),
                           collection: t
                         })
                       }
                     });
                    }
                })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            editClasificacion: function() {
                var e = this;
                if(  ($(".clasificacion_form").serializeObject().nombre.replace(/\s/g, "") != '') ){
                  $.ajax({
                        type: "PUT",
                        url: "/clasificacion/"+this.getSelectionID(),
                        data: $(".clasificacion_form").serialize(),
                        success: function() {
                            F.msgOK("Clasificación editada exitosamente")
  		                      this.clasificacions = new C.Collection.Clasificacions(null, {
                              view: this
                            }), this.clasificacions.fetch({
                             success: function(t, n) {
                               $("#clasificacion_left").empty()
                               e.clasificacion_table = new C.View.ClasificacionTable({
                                 el: $("#clasificacion_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            delClasificacion: function() {
                var e = this;
                F.msgConfirm("¿Desea eliminar a esta Clasificación?", function() {
                    $.ajax({
                        type: "POST",
                        url: "/clasificacion/delete/"+e.getSelectionID(),
                        data: $(".clasificacion_form").serialize(),
                        success: function() {
            		            this.clasificacions = new C.Collection.Clasificacions(null, {
                              view: this
                            }), this.clasificacions.fetch({
                             success: function(t, n) {
                               $("#clasificacion_left").empty(), $("#clasificacion_right").empty(),
                               e.clasificacion_table = new C.View.ClasificacionTable({
                                 el: $("#clasificacion_left"),
                                 collection: t
                               }), e.clasificacion_form = new C.View.ClasificacionForm({
                               el: $("#clasificacion_right"),
                               model: e.model,
                               collection: t,
                               clasificacion_table: e.clasificacion_table
                               });
                             }
                           }), F.msgOK("La Clasificación ha sido eliminada");
                        }
                    });
                });
            }
        });
    }),
//BANCO
    e.define("/views/crud/Banco.js", function(e, t, n, r, i, s) {
        C.View.Banco = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.bancos = new C.Collection.Bancos(null, {
                    view: this
                }), this.bancos.fetch({
                    success: function(t, n) {
                        e.banco_table = new C.View.BancoTable({
                            el: $("#banco_left"),
                            collection: t
                        }), e.banco_form = new C.View.BancoForm({
                            el: $("#banco_right"),
                            model: e.model,
                            collection: t,
                            banco_table: e.banco_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/crud/BancoTable.js", function(e, t, n, r, i, s) {
        C.View.BancoTable = Backbone.View.extend({
            name: "banco",
            headers: [ "ID", "Prioridad", "Nombre", "Horario", "Direccion" ],
            attrs: [ "id",  "puntaje",  "nombre", "rangoHorario", "direccion" ],
            hidden_columns: ["id", "puntaje"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null ],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".banco_form"), e);
                });
            },
            events: {
                "click .banco_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/crud/BancoForm.js", function(e, t, n, r, i, s) {
        C.View.BancoForm = Backbone.View.extend({
            name: "banco_form",
            title: "Detalle del Banco",
            fields: {
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                rangoHorario: {
                    label: "RangoHorario",
                    check: "alpha"
                },
                direccion: {
                    label: "Dirección",
                    check: "alpha"
                },
                puntaje: {
                    label: "Prioridad 1-10",
                    type: "select_110"
                }
            },
            isCRUD: !0,
            initialize: function() {
                F.createForm(this);
            },
            events: {
                "click .banco_form .BUTTON_create": "addBanco",
                "click .banco_form .BUTTON_save": "editBanco",
                "click .banco_form .BUTTON_delete": "delBanco"
            },
            getTable: function() {
                return this.options.banco_table;
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
            addBanco: function() {
                var e = this;
                if(  $(".banco_form").serializeObject().nombre.replace(/\s/g, "") != ''
                  && $(".banco_form").serializeObject().direccion.replace(/\s/g, "") != ''
                  && $(".banco_form").serializeObject().puntaje != ''
                ){
                  $.ajax({
                        type: "POST",
                        url: "/banco/",
                        data: $(".banco_form").serialize(),
                        success: function() {
                            F.msgOK("Banco creado exitosamente")
  		                      this.bancos = new C.Collection.Bancos(null, {
                              view: this
                            }), this.bancos.fetch({
                             success: function(t, n) {
                               $("#banco_left").empty()
                               e.banco_table = new C.View.BancoTable({
                                 el: $("#banco_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                })
               }else{
                  F.msgError("Los campos 'Nombre', 'Direccion' y 'Prioridad' son OBLIGATORIOS");
               }
            },
            editBanco: function() {
                var e = this;
                if(  $(".banco_form").serializeObject().nombre.replace(/\s/g, "") != ''
                  && $(".banco_form").serializeObject().direccion.replace(/\s/g, "") != ''
                  && $(".banco_form").serializeObject().puntaje != ''
                ){
                  $.ajax({
                        type: "PUT",
                        url: "/banco/"+this.getSelectionID(),
                        data: $(".banco_form").serialize(),
                        success: function() {
                            F.msgOK("Banco editado exitosamente")
  		                      this.bancos = new C.Collection.Bancos(null, {
                              view: this
                            }), this.bancos.fetch({
                             success: function(t, n) {
                               $("#banco_left").empty()
                               e.banco_table = new C.View.BancoTable({
                                 el: $("#banco_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("Los campos 'Nombre', 'Direccion' y 'Prioridad' son OBLIGATORIOS");
               }
            },
            delBanco: function() {
                var e = this;
                F.msgConfirm("¿Desea eliminar a este Banco?", function() {
                    $.ajax({
                        type: "POST",
                        url: "/banco/delete/"+e.getSelectionID(),
                        data: $(".banco_form").serialize(),
                        success: function() {
            		            this.bancos = new C.Collection.Bancos(null, {
                              view: this
                            }), this.bancos.fetch({
                             success: function(t, n) {
                               $("#banco_left").empty(), $("#banco_right").empty(),
                               e.banco_table = new C.View.BancoTable({
                                 el: $("#banco_left"),
                                 collection: t
                               }), e.banco_form = new C.View.BancoForm({
                               el: $("#banco_right"),
                               model: e.model,
                               collection: t,
                               banco_table: e.banco_table
                               });
                             }
                           }), F.msgOK("El Banco ha sido eliminado");
                        }
                    });
                });
            }
        });
    }),
//ACTIVIDAD
    e.define("/views/crud/Actividad.js", function(e, t, n, r, i, s) {
        C.View.Actividad = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.actividads = new C.Collection.Actividads(null, {
                    view: this
                }), this.actividads.fetch({
                    success: function(t, n) {
                        e.actividad_table = new C.View.ActividadTable({
                            el: $("#actividad_left"),
                            collection: t
                        }), e.actividad_form = new C.View.ActividadForm({
                            el: $("#actividad_right"),
                            model: e.model,
                            collection: t,
                            actividad_table: e.actividad_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/crud/ActividadTable.js", function(e, t, n, r, i, s) {
        C.View.ActividadTable = Backbone.View.extend({
            name: "actividad",
            headers: [ "ID", "Nº Afip", "Nombre", "Observación"],
            attrs: [ "id", "idFormularioAfip", "nombre", "observacion" ],
            data: null,
            hidden_columns: [ "observacion"],
            datatableOptions: {
                aoColumns: [ null, null, null, null],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".actividad_form"), e);
                });
            },
            events: {
                "click .actividad_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/crud/ActividadForm.js", function(e, t, n, r, i, s) {
        C.View.ActividadForm = Backbone.View.extend({
            name: "actividad_form",
            title: "Detalle de la Actividad",
            fields: {
                idFormularioAfip: {
                    label: "Nº Afip",
                    check: "alpha"
                },
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                observacion: {
                    label: "Observación",
                    check: "alpha",
                    type: "textarea",
                    attrs: {
                        style: "height:100px;"
                    }
                },
            },
            isCRUD: !0,
            initialize: function() {
                F.createForm(this);
            },
            events: {
                "click .actividad_form .BUTTON_create": "addActividad",
                "click .actividad_form .BUTTON_save": "editActividad",
                "click .actividad_form .BUTTON_delete": "delActividad"
            },
            getTable: function() {
                return this.options.actividad_table;
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
            addActividad: function() {
                var e = this;
                if(($(".actividad_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  $.ajax({
                        type: "POST",
                        url: "/actividad/",
                        data: $(".actividad_form").serialize(),
                        success: function() {
                            F.msgOK("Actividad creada exitosamente")
  		                      this.actividads = new C.Collection.Actividads(null, {
                              view: this
                            }), this.Actividads.fetch({
                             success: function(t, n) {
                               $("#actividad_left").empty()
                               e.actividad_table = new C.View.ActividadTable({
                                 el: $("#actividad_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            editActividad: function() {
                var e = this;
                if(($(".actividad_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  $.ajax({
                        type: "PUT",
                        url: "/actividad/"+this.getSelectionID(),
                        data: $(".actividad_form").serialize(),
                        success: function() {
                            F.msgOK("Actividad editada exitosamente")
  		                      this.actividads = new C.Collection.Actividads(null, {
                              view: this
                            }), this.actividads.fetch({
                             success: function(t, n) {
                               $("#actividad_left").empty()
                               e.actividad_table = new C.View.ActividadTable({
                                 el: $("#actividad_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            delActividad: function() {
                var e = this;
                F.msgConfirm("¿Desea eliminar a esta Actividad?", function() {
                    $.ajax({
                        type: "POST",
                        url: "/actividad/delete/"+e.getSelectionID(),
                        data: $(".actividad_form").serialize(),
                        success: function() {
            		            this.actividads = new C.Collection.Actividads(null, {
                              view: this
                            }), this.actividads.fetch({
                             success: function(t, n) {
                               $("#actividad_left").empty(), $("#actividad_right").empty(),
                               e.actividad_table = new C.View.ActividadTable({
                                 el: $("#actividad_left"),
                                 collection: t
                               }), e.actividad_form = new C.View.ActividadForm({
                               el: $("#actividad_right"),
                               model: e.model,
                               collection: t,
                               actividad_table: e.actividad_table
                               });
                             }
                           }), F.msgOK("La Actividad ha sido eliminada");
                        }
                    });
                });
            }
        });
    }),
//CLAVE
    e.define("/views/crud/Clave.js", function(e, t, n, r, i, s) {
        C.View.Clave = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.claves = new C.Collection.Claves(null, {
                    view: this
                }), this.claves.fetch({
                    success: function(t, n) {
                        e.clave_table = new C.View.ClaveTable({
                            el: $("#clave_left"),
                            collection: t
                        }), e.clave_form = new C.View.ClaveForm({
                            el: $("#clave_right"),
                            model: e.model,
                            collection: t,
                            clave_table: e.clave_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/crud/ClaveTable.js", function(e, t, n, r, i, s) {
        C.View.ClaveTable = Backbone.View.extend({
            name: "clave",
            headers: [ "ID", "Nombre", "Descripción", "Página"],
            attrs: [ "id", "nombre", "descripcion", "pagina" ],
            data: null,
            hidden_columns: [ "descripcion"],
            datatableOptions: {
                aoColumns: [ null, null, null, null],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".clave_form"), e);
                });
            },
            events: {
                "click .clave_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/crud/ClaveForm.js", function(e, t, n, r, i, s) {
        C.View.ClaveForm = Backbone.View.extend({
            name: "clave_form",
            title: "Detalle de la Clave",
            fields: {
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                pagina: {
                    label: "Página",
                    check: "alpha"
                },
                descripcion: {
                    label: "Descripción",
                    check: "alpha",
                    type: "textarea",
                    attrs: {
                        style: "height:100px;"
                    }
                },
            },
            isCRUD: !0,
            initialize: function() {
                F.createForm(this);
            },
            events: {
                "click .clave_form .BUTTON_create": "addClave",
                "click .clave_form .BUTTON_save": "editClave",
                "click .clave_form .BUTTON_delete": "delClave"
            },
            getTable: function() {
                return this.options.clave_table;
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
            addClave: function() {
                var e = this;
                if(($(".clave_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  $.ajax({
                        type: "POST",
                        url: "/clave/",
                        data: $(".clave_form").serialize(),
                        success: function() {
                            F.msgOK("Clave creada exitosamente")
  		                      this.claves = new C.Collection.Claves(null, {
                              view: this
                            }), this.claves.fetch({
                             success: function(t, n) {
                               $("#clave_left").empty()
                               e.clave_table = new C.View.ClaveTable({
                                 el: $("#clave_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            editClave: function() {
                var e = this;
                if(($(".clave_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  $.ajax({
                        type: "PUT",
                        url: "/clave/"+this.getSelectionID(),
                        data: $(".clave_form").serialize(),
                        success: function() {
                            F.msgOK("Clave editada exitosamente")
  		                      this.claves = new C.Collection.Claves(null, {
                              view: this
                            }), this.claves.fetch({
                             success: function(t, n) {
                               $("#clave_left").empty()
                               e.clave_table = new C.View.ClaveTable({
                                 el: $("#clave_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            delClave: function() {
                var e = this;
                F.msgConfirm("¿Desea eliminar a esta Clave?", function() {
                    $.ajax({
                        type: "POST",
                        url: "/clave/delete/"+e.getSelectionID(),
                        data: $(".clave_form").serialize(),
                        success: function() {
            		            this.claves = new C.Collection.Claves(null, {
                              view: this
                            }), this.claves.fetch({
                             success: function(t, n) {
                               $("#clave_left").empty(), $("#clave_right").empty(),
                               e.clave_table = new C.View.ClaveTable({
                                 el: $("#clave_left"),
                                 collection: t
                               }), e.clave_form = new C.View.ClaveForm({
                               el: $("#clave_right"),
                               model: e.model,
                               collection: t,
                               clave_table: e.clave_table
                               });
                             }
                           }), F.msgOK("La Clave ha sido eliminada");
                        }
                    });
                });
            }
        });
    }),
//AREA
    e.define("/views/crud/Area.js", function(e, t, n, r, i, s) {
        C.View.Area = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.areas = new C.Collection.Areas(null, {
                    view: this
                }), this.areas.fetch({
                    success: function(t, n) {
                        e.area_table = new C.View.AreaTable({
                            el: $("#area_left"),
                            collection: t
                        }), e.area_form = new C.View.AreaForm({
                            el: $("#area_right"),
                            model: e.model,
                            collection: t,
                            area_table: e.area_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/crud/AreaTable.js", function(e, t, n, r, i, s) {
        C.View.AreaTable = Backbone.View.extend({
            name: "area",
            headers: [ "ID", "Nombre", "Observación"],
            attrs: [ "id", "nombre", "observacion" ],
            data: null,
            hidden_columns: [ "observacion"],
            datatableOptions: {
                aoColumns: [ null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".area_form"), e);
                });
            },
            events: {
                "click .area_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/crud/AreaForm.js", function(e, t, n, r, i, s) {
        C.View.AreaForm = Backbone.View.extend({
            name: "area_form",
            title: "Detalle del Area",
            fields: {
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                observacion: {
                    label: "Observación",
                    check: "alpha",
                    type: "textarea",
                    attrs: {
                        style: "height:100px;"
                    }
                },
            },
            isCRUD: !0,
            initialize: function() {
                F.createForm(this);
            },
            events: {
                "click .area_form .BUTTON_create": "addArea",
                "click .area_form .BUTTON_save": "editArea",
                "click .area_form .BUTTON_delete": "delArea"
            },
            getTable: function() {
                return this.options.area_table;
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
            addArea: function() {
                var e = this;
                if(($(".area_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  $.ajax({
                        type: "POST",
                        url: "/area/",
                        data: $(".area_form").serialize(),
                        success: function() {
                            F.msgOK("Area creada exitosamente")
  		                      this.areas = new C.Collection.Areas(null, {
                              view: this
                            }), this.Areas.fetch({
                             success: function(t, n) {
                               $("#area_left").empty()
                               e.area_table = new C.View.AreaTable({
                                 el: $("#area_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            editArea: function() {
                var e = this;
                if(($(".area_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  $.ajax({
                        type: "PUT",
                        url: "/area/"+this.getSelectionID(),
                        data: $(".area_form").serialize(),
                        success: function() {
                            F.msgOK("Area editada exitosamente")
  		                      this.areas = new C.Collection.Areas(null, {
                              view: this
                            }), this.areas.fetch({
                             success: function(t, n) {
                               $("#area_left").empty()
                               e.area_table = new C.View.AreaTable({
                                 el: $("#area_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            delArea: function() {
                var e = this;
                F.msgConfirm("¿Desea eliminar a esta Area?", function() {
                    $.ajax({
                        type: "POST",
                        url: "/area/delete/"+e.getSelectionID(),
                        data: $(".area_form").serialize(),
                        success: function() {
            		            this.areas = new C.Collection.Areas(null, {
                              view: this
                            }), this.areas.fetch({
                             success: function(t, n) {
                               $("#area_left").empty(), $("#area_right").empty(),
                               e.area_table = new C.View.AreaTable({
                                 el: $("#area_left"),
                                 collection: t
                               }), e.area_form = new C.View.AreaForm({
                               el: $("#area_right"),
                               model: e.model,
                               collection: t,
                               area_table: e.area_table
                               });
                             }
                           }), F.msgOK("El Area ha sido eliminada");
                        }
                    });
                });
            }
        });
    }),
//RUBRO
    e.define("/views/crud/Rubro.js", function(e, t, n, r, i, s) {
        C.View.Rubro = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.rubros = new C.Collection.Rubros(null, {
                    view: this
                }), this.rubros.fetch({
                    success: function(t, n) {
                        e.rubro_table = new C.View.RubroTable({
                            el: $("#rubro_left"),
                            collection: t
                        }), e.rubro_form = new C.View.RubroForm({
                            el: $("#rubro_right"),
                            model: e.model,
                            collection: t,
                            rubro_table: e.rubro_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/crud/RubroTable.js", function(e, t, n, r, i, s) {
        C.View.RubroTable = Backbone.View.extend({
            name: "rubro",
            headers: ["ID", "Nombre", "Observacion"],
            attrs: [ "id", "nombre", "observacion"],
            hidden_columns: ["observacion"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".rubro_form"), e);
                });
            },
            events: {
                "click .rubro_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/crud/RubroForm.js", function(e, t, n, r, i, s) {
        C.View.RubroForm = Backbone.View.extend({
            name: "rubro_form",
            title: "Detalle del Rubro <br /><h4>no sirve todavia</h4>",
            fields: {
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                observacion: {
                    label: "Observación",
                    type: "textarea"
                }
            },
            isCRUD: !0,
            initialize: function() {
                F.createForm(this);
            },
            events: {
                "click .rubro_form .BUTTON_create": "addRubro",
                "click .rubro_form .BUTTON_save": "editRubro",
                "click .rubro_form .BUTTON_delete": "delRubro"
            },
            getTable: function() {
                return this.options.rubro_table;
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
            addRubro: function() {
                var e = this;
                if(($(".rubro_form").serializeObject().nombre.replace(/\s/g, "")!='')){
                  $.ajax({
                        type: "POST",
                        url: "/rubro",
                        data: $(".rubro_form").serialize(),
                        success: function() {
                            F.msgOK("Rubro creado exitosamente")
  		                      this.rubros = new C.Collection.Rubros(null, {
                              view: this
                            }), this.rubros.fetch({
                             success: function(t, n) {
                               $("#rubro_left").empty()
                               e.rubro_table = new C.View.RubroTable({
                                 el: $("#rubro_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            editRubro: function() {
                var e = this;
                if(($(".rubro_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  $.ajax({
                        type: "PUT",
                        url: "/rubro/" + e.getSelectionID(),
                        data: $(".rubro_form").serialize(),
                        success: function() {
                            F.msgOK("Rubro editado exitosamente")
  		                      this.rubros = new C.Collection.Rubros(null, {
                              view: this
                            }), this.rubros.fetch({
                             success: function(t, n) {
                               $("#rubro_left").empty()
                               e.rubro_table = new C.View.RubroTable({
                                 el: $("#rubro_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            delRubro: function() {
                var e = this;
                F.msgConfirm("¿Desea eliminar este Rubro?", function() {
                    $.ajax({
                        type: "POST",
                        url: "/rubro/delete/"+e.getSelectionID(),
                        data: $(".rubro_form").serialize(),
                        success: function() {
            		            this.rubros = new C.Collection.Rubros(null, {
                              view: this
                            }), this.rubros.fetch({
                             success: function(t, n) {
                               $("#rubro_left").empty(), $("#rubro_right").empty(),
                               e.rubro_table = new C.View.RubroTable({
                                 el: $("#rubro_left"),
                                 collection: t
                               }), e.rubro_form = new C.View.RubroForm({
                               el: $("#rubro_right"),
                               model: e.model,
                               collection: t,
                               rubro_table: e.rubro_table
                               });
                             }
                           }), F.msgOK("El Rubro ha sido eliminado");
                        }
                    });
                });
            }
        });
    }),
//IMPUESTO
    e.define("/views/crud/Impuesto.js", function(e, t, n, r, i, s) {
        C.View.Impuesto = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.impuestos = new C.Collection.Impuestos(null, {
                    view: this
                }), this.impuestos.fetch({
                    success: function(t, n) {
                        e.impuesto_table = new C.View.ImpuestoTable({
                            el: $("#impuesto_left"),
                            collection: t
                        }), e.impuesto_form = new C.View.ImpuestoForm({
                            el: $("#impuesto_right"),
                            model: e.model,
                            collection: t,
                            impuesto_table: e.impuesto_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/crud/ImpuestoTable.js", function(e, t, n, r, i, s) {
        C.View.ImpuestoTable = Backbone.View.extend({
            name: "impuesto",
            headers: ["ID", "Nombre", "Nombre Interno", "Observacion" ,"fijo", "monto0", "monto1", "monto2", "monto3", "banco_id" ],
            attrs: [ "id", "nombre", "nombreInterno", "observacion", "fijo", "monto0", "monto1", "monto2", "monto3", "banco_id" ],
            hidden_columns: ["observacion", "fijo","monto0", "monto1", "monto2", "monto3", "banco_id" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".impuesto_form"), e);
                });
            },
            events: {
                "click .impuesto_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/crud/ImpuestoForm.js", function(e, t, n, r, i, s) {
        C.View.ImpuestoForm = Backbone.View.extend({
            name: "impuesto_form",
            title: "Detalle del Impuesto",
            fields: {
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                nombreInterno: {
                    label: "Nombre interno",
                    check: "alpha"
                },
                observacion: {
                    label: "Observación",
                    type: "textarea"
                },
                monto0: {
                    label: "Monto0",
                    check: "numeric"
                },
                monto1: {
                    label: "Monto1",
                    check: "numeric"
                },
                monto2: {
                    label: "Monto2",
                    check: "numeric"
                },
                monto3: {
                    label: "Monto3",
                    check: "numeric"
                },
                fijo: {
                    label: "Monto Fijo",
                    type: "select_yn",
                    default_value: "n"
                },
                banco_id: {
                    label: "Banco(s)",
                    type: "selectmultiple"
                }
            },
            isCRUD: !0,

            relations: {
                bancos: null
            },

            initialize: function() {
                var e = this, t = [];
                F.getAllFromModel("banco", function(t) {
                    e.relations.bancos = t, F.createForm(e);
                });
            },
            events: {
                "click .impuesto_form .BUTTON_create": "addImpuesto",
                "click .impuesto_form .BUTTON_save": "editImpuesto",
                "click .impuesto_form .BUTTON_delete": "delImpuesto"
            },
            getTable: function() {
                return this.options.impuesto_table;
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
            addImpuesto: function() {
                var e = this;
                if(($(".impuesto_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  if( !isNaN($(".impuesto_form").serializeObject().monto1.replace(",","."))
                   && !isNaN($(".impuesto_form").serializeObject().monto2.replace(",","."))
                   && !isNaN($(".impuesto_form").serializeObject().monto0.replace(",","."))
                   && !isNaN($(".impuesto_form").serializeObject().monto3.replace(",","."))
                  ){
                    $.ajax({
                          type: "POST",
                          url: "/impuesto",
                          data: $(".impuesto_form").serialize(),
                          success: function(e) {
                              if(e)
                                F.msgOK("Impuesto creado exitosamente")
    		                      this.impuestos = new C.Collection.Impuestos(null, {
                                view: this
                              }), this.impuestos.fetch({
                               success: function(t, n) {
                                 $("#impuesto_left").empty()
                                 e.impuesto_table = new C.View.ImpuestoTable({
                                   el: $("#impuesto_left"),
                                   collection: t
                                 })
                               }
                             });
                          }
                   })
                 }else{
                    F.msgError('Los Montos deben ser Números separando los decimales por "."(punto), además debe seleccionar un Cronograma');
                 }
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            editImpuesto: function() {
                var e = this;
                if(($(".impuesto_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  if( !isNaN($(".impuesto_form").serializeObject().monto1.replace(",","."))
                   && !isNaN($(".impuesto_form").serializeObject().monto2.replace(",","."))
                   && !isNaN($(".impuesto_form").serializeObject().monto0.replace(",","."))
                   && !isNaN($(".impuesto_form").serializeObject().monto3.replace(",","."))
                  ){
                    $.ajax({
                          type: "PUT",
                          url: "/impuesto/" + e.getSelectionID(),
                          data: $(".impuesto_form").serialize(),
                          success: function(e) {
                              if(e)
                                F.msgOK("Impuesto editado exitosamente")
    		                      this.impuestos = new C.Collection.Impuestos(null, {
                                view: this
                              }), this.impuestos.fetch({
                               success: function(t, n) {
                                 $("#impuesto_left").empty()
                                 e.impuesto_table = new C.View.ImpuestoTable({
                                   el: $("#impuesto_left"),
                                   collection: t
                                 })
                               }
                             });
                          }
                   })
                 }else{
                    F.msgError( 'Los Montos deben ser Números separando los decimales por "."(punto), además debe seleccionar un Cronograma' );
                 }
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            delImpuesto: function() {
                var e = this;
                F.msgConfirm("¿Desea eliminar este Impuesto?", function() {
                    $.ajax({
                        type: "POST",
                        url: "/impuesto/delete/"+e.getSelectionID(),
                        data: $(".impuesto_form").serialize(),
                        success: function() {
            		            this.impuestos = new C.Collection.Impuestos(null, {
                              view: this
                            }), this.impuestos.fetch({
                             success: function(t, n) {
                               $("#impuesto_left").empty(), $("#impuesto_right").empty(),
                               e.impuesto_table = new C.View.ImpuestoTable({
                                 el: $("#impuesto_left"),
                                 collection: t
                               }), e.impuesto_form = new C.View.ImpuestoForm({
                               el: $("#impuesto_right"),
                               model: e.model,
                               collection: t,
                               impuesto_table: e.impuesto_table
                               });
                             }
                           }), F.msgOK("El Impuesto ha sido eliminado");
                        }
                    });
                });
            }
        });
    }),
//CARGA
    e.define("/views/carga/Carga.js", function(e, t, n, r, i, s) {
        C.View.Carga = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.cargas = new C.Collection.Cargas(null, {
                    view: this
                }), this.cargas.fetch({
                    success: function(t, n) {
                        var vector = [];
                        t.models.forEach(function(valor, indice){
                          if(valor.attributes.impNombre == Backbone.history.fragment.substring(7))
                            vector.push(valor);
                        });
                        t.models = vector;
                        e.carga_table = new C.View.CargaTable({
                            el: $("#carga_left"),
                            collection: t
                        }), e.carga_form = new C.View.CargaForm({
                            el: $("#carga_right"),
                            model: e.model,
                            collection: t,
                            carga_table: e.carga_table
                        }), e.carga_options = new C.View.CargaOptions({
                            el: $("#carga_left .fg-toolbar")[0],
                            carga_table: e.carga_table,
                            carga_form: n
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/caja/CargaOptions.js", function(e, t, n, r, i, s) {
        C.View.CargaOptions = Backbone.View.extend({
            initialize: function() {
                this.render();
            },
            render: function() {
                return $(this.el).append(this.template()), this;
            },
            template: function() {
                var e = $("<div>", {
                    "class": "right_options"
                });
                return $(e).append($("<input>", {
                    type: "button",
                    "class": "asignar_anterior",
                    value: "Cargar IGUAL mes anterior",
                    style: "background-color: #F6CECE",
                })), e;
            },
            events: {
                "click #carga_left .asignar_anterior": "asignarAnterior"
            },
            getForm: function() {
                return this.options.carga_form;
            },
            getTable: function() {
                return this.options.carga_table;
            },
            getSelectedRow: function() {
                return this.options.carga_table.selected_row;
            },
            //CARGAR IGUAL MES ANTERIOR
            asignarAnterior: function() {
              var t = this;

              //console.log();

              if(C.Session.roleID() < 3){
                F.msgError("No tiene los permisos necesarios")
              }else{
                /*if($(".carga_form").serializeObject().cronograma_id != '')
                {*/
                  // LA CONDICION
                  /*if(($(".carga_form").serializeObject().cronograma_id)
                  {*/
                    F.msgConfirm("¿Seguro desea cargar igual al mes anterior?", function(){
                       $.ajax({
                          url: "/carga/repetirMesAnterior/"+Backbone.history.fragment.split("/")[Backbone.history.fragment.split("/").length-1],
                          success: function(model,res,options) {
                            if(model[0].mensaje)
                            {
                              F.msgOK("Todos los impuestos se cargaron Existosamente");
                              setTimeout(function(){location.reload()},1e3)
                            }
                            else
                            {
                              F.msgError("El cronograma que quiere asignar NO existe!");
                            }
                          }
                       })
                    });
                  /*}CLOSE OTHER IF
                  else
                  {
                    F.msgError("El cronograma seleccionado no es el correspondiente.");
                  }*/
                /*}//CLOSE MY IF
                else
                {
                  F.msgError("Seleccione el cronograma.");
                }*/
              }
            }
        });
    }),
    e.define("/views/carga/CargaTable.js", function(e, t, n, r, i, s) {
        C.View.CargaTable = Backbone.View.extend({
            name: "carga",
            headers: [ "ID", "IdCatedral", "Nombre", "Comunicación", "Impuesto", "Observacion", "impFijo", "impId", "cliId", "impMonto0", "impMonto1", "impMonto2", "impMonto3", "impTotal", "all", "liquida"],
            attrs: [ "id", "cliCatedral", "cliNombre", "cliComunicacion", "impNombre", "impObservacion", "impFijo", "impId", "cliId", "impMonto0", "impMonto1", "impMonto2", "impMonto3", "impTotal", "all", "liquida"],
            hidden_columns: [ "impNombre", "impObservacion", "impFijo", "impId", "cliId", "impMonto0", "impMonto1", "impMonto2", "impMonto3", "impTotal", "all", "liquida","mensaje"],//Agrego mensaje
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection; F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".carga_form"), e);
                });
            },
            events: {
                "click .carga_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/carga/CargaForm.js", function(e, t, n, r, i, s) {
        C.View.CargaForm = Backbone.View.extend({
            name: "carga_form",
            title: "Carga de Impuestos Variables",
            fields: {
                cliNombre: {
                    label: "Nombre",
                    attrs: {
                        disabled: "disabled",
                        style: "margin-top:-1em 0 1em;"
                    }
                },
                impNombre: {
                    label: "Nombre(Impuesto)",
                    attrs: {
                        disabled: "disabled",
                        style: "margin-top:-1em 0 1em;"
                    }
                },
                impObservacion: {
                    label: "Observacion(Impuesto)",
                    attrs: {
                        disabled: "disabled",
                        style: "margin-top:-1em 0 1em;"
                    }
                },
                liquida: {
                    label: "Liquidable?",
                    type: "select_yn",
                    default_value: "y"
                },
                impMonto0: {
                    label: "Monto0",
                },
                impMonto1: {
                    label: "Monto1",
                },
                impMonto2: {
                    label: "Monto2",
                },
                impMonto3: {
                    label: "Monto3",
                },
                impMonto4: {
                    label: "Monto Propio",
                },
                anticipo: {
                    label: "Anticipo",//Marcelito
                    type: "select_b11",
                },
                cronograma_id: { // SELECCIONE CRONOGRAMA
                    label: "Cronograma",
                    type: "select"
                },
                cronograma: {
                    type: "hidden"
                },
                impuesto_id:{
                    type: "hidden"
                },
                mensaje: {
                  type:"hidden"
                },
            },
            isCRUD: !0,
            buttons: {
                create: !1,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            relations: {
                cronogramas: null,
            },
            initialize: function() {
                var e= this;
                F.getAllCronogramasFromModel("cronograma", function(t) {
                  e.relations.cronogramas = t, F.createForm(e);
                  //Agrego:
                  idCronos = e.relations.cronogramas;

                });
            },
            events: {
                "click .carga_form .BUTTON_save": "editCarga",
            },
            getTable: function() {
                return this.options.impuesto_table;
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
            editCarga: function() {
                var e = this;

                if( !isNaN($(".carga_form").serializeObject().impMonto1.replace(",","."))
                 && !isNaN($(".carga_form").serializeObject().impMonto2.replace(",","."))
                 && !isNaN($(".carga_form").serializeObject().impMonto0.replace(",","."))
                 && !isNaN($(".carga_form").serializeObject().impMonto3.replace(",","."))
                 && !isNaN($(".carga_form").serializeObject().impMonto4.replace(",","."))
                 && ($(".carga_form").serializeObject().cronograma_id != '') //ACA VALIDO EL CRONOGRAMA_ID
                ){
                  if($(".carga_form").serializeObject().anticipo != '')
                    $(".carga_form").serializeObject().anticipo = " ";
                  $.ajax({
                    type: "PUT",
                    url: "/carga/" + e.getSelectionID(),
                    data: $(".carga_form").serializeObject(),
                    success: function(e) {
                      if(e==true)
                        F.msgOK("Monto Editado con éxito")
                      else
                        if(e=='No esta cargada la fecha de vencimiento')
                          F.msgError(e)
                        else
                          F.msgError("Impuesto ya cargado")
                      setTimeout(function(){location.reload()},1000)
                   }
                  })
               }else{
                  F.msgError('Los Montos deben ser Números separando los decimales por "."(punto), además debe seleccionar un Cronograma'); // CARGA DE IMPUESTOS VARIABLES
               }
            }
        });
    })
//SINDICATO
    e.define("/views/carga/Sindicato.js", function(e, t, n, r, i, s) {
        C.View.Sindicato = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.sindicatos = new C.Collection.Sindicatos(null, {
                    view: this
                }), this.sindicatos.fetch({
                    success: function(t, n) {
                        e.sindicato_table = new C.View.SindicatoTable({
                            el: $("#sindicato_left"),
                            collection: t
                        }), e.sindicato_form = new C.View.SindicatoForm({
                            el: $("#sindicato_right"),
                            model: e.model,
                            collection: t,
                            sindicato_table: e.sindicato_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/carga/SindicatoTable.js", function(e, t, n, r, i, s) {
        C.View.SindicatoTable = Backbone.View.extend({
            name: "sindicato",
            headers: ["ID","IdCatedral", "Nombre", "Comunicación", "Impuesto", "Observacion", "impFijo", "impId", "cliId", "impMonto0", "impMonto1", "impMonto2", "impMonto3", "impTotal", "all", "liquida"],
            attrs: ["id","cliCatedral", "cliNombre", "cliComunicacion", "impNombre", "impObservacion", "impFijo", "impId", "cliId", "impMonto0", "impMonto1", "impMonto2", "impMonto3", "impTotal", "all", "liquida"],
            hidden_columns: [ "impObservacion", "impFijo", "impId", "cliId", "impMonto0", "impMonto1", "impMonto2", "impMonto3", "impTotal", "all", "liquida"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection; F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".sindicato_form"), e);
                });
            },
            events: {
                "click .sindicato_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/carga/SindicatoForm.js", function(e, t, n, r, i, s) {
        C.View.SindicatoForm = Backbone.View.extend({
            name: "sindicato_form",
            title: "Carga de Sindicatos",
            fields: {
                cliNombre: {
                    label: "Nombre",
                    attrs: {
                        disabled: "disabled",
                        style: "margin-top:-1em 0 1em;"
                    }
                },
                impNombre: {
                    label: "Nombre(Impuesto)",
                    attrs: {
                        disabled: "disabled",
                        style: "margin-top:-1em 0 1em;"
                    }

                },
                impObservacion: {
                    label: "Observacion(Impuesto)",
                    attrs: {
                        disabled: "disabled",
                        style: "margin-top:-1em 0 1em;"
                    }
                },
                liquida: {
                    label: "Liquidable?",
                    type: "select_yn",
                    default_value: "y"
                },
                impMonto0: {
                    label: "Monto0",
                },
                impMonto1: {
                    label: "Monto1",
                },
                impMonto2: {
                    label: "Monto2",
                },
                impMonto3: {
                    label: "Monto3",
                },
                impMonto4: {
                    label: "Monto Propio",
                },
                anticipo: {
                    label: "Anticipo",//Marcelito
                    type: "select_b11",
                },
                cronograma_id: {
                    label: "Cronograma",
                    type: "select"
                },
                cronograma: {
                    type: "hidden"
                },
                impuesto_id:{
                    type: "hidden"
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
                cronogramas: null,
            },
            initialize: function() {
                var e= this;
                F.getAllCronogramasFromModel("cronograma", function(t) {
                  e.relations.cronogramas = t, F.createForm(e);
                });
            },
            events: {
                "click .sindicato_form .BUTTON_save": "editSindicato",
            },
            getTable: function() {
                return this.options.impuesto_table;
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
            editSindicato: function() {
                var e = this;
                if( !isNaN($(".sindicato_form").serializeObject().impMonto1.replace(",","."))
                 && !isNaN($(".sindicato_form").serializeObject().impMonto2.replace(",","."))
                 && !isNaN($(".sindicato_form").serializeObject().impMonto0.replace(",","."))
                 && !isNaN($(".sindicato_form").serializeObject().impMonto3.replace(",","."))
                 && !isNaN($(".sindicato_form").serializeObject().impMonto4.replace(",","."))
                 && ($(".sindicato_form").serializeObject().cronograma_id != '')
                ){
                  if($(".sindicato_form").serializeObject().anticipo != '')
                    $(".sindicato_form").serializeObject().anticipo = " ";
                  $.ajax({
                    type: "PUT",
                    url: "/sindicato/" + e.getSelectionID(),
                    data: $(".sindicato_form").serializeObject(),
                    success: function(e) {
                      if(e==true)
                        F.msgOK("Monto Editado con éxito")
                      else
                        if(e=='No esta cargada la fecha de vencimiento')
                          F.msgError(e)
                        else
                          F.msgError("Impuesto ya cargado")
                      setTimeout(function(){location.reload()},1000)
                    }
                  })
               }else{
                  if($(".sindicato_form").serializeObject().cronograma_id != '')
                    F.msgError('El campo "CRONOGRAMA" se encuentra en blanco')
                  else
                    F.msgError('Los Montos deben ser Números separando los decimales por "."(punto)');
               }
            }
        });
    })
//OTRO
    e.define("/views/carga/Otro.js", function(e, t, n, r, i, s) {
        C.View.Otro = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.otros = new C.Collection.Otros(null, {
                    view: this
                }), this.otros.fetch({
                    success: function(t, n) {
                        e.otro_form = new C.View.OtroForm({
                            el: $("#otro_right"),
                            model: e.model,
                            collection: t,
                            otro_table: e.otro_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/carga/OtroForm.js", function(e, t, n, r, i, s) {
        C.View.OtroForm = Backbone.View.extend({
            name: "otro_form",
            title: "Carga de Otros",
            fields: {
              cliente_id: {
                  label: "Cliente",
                  type: "select"
              },
              cronograma_id: {
                  label: "Cronograma",
                  type: "select"
              },
              impuesto: {
                  label: "Impuesto (EJ: Balance 2014 )",
              },
              vtoImpuesto: {
                label: "Dia De Pago",
                type: "datepicker",
              },
              monto0: {
                  label: "Gasto a pagar",
              },
              monto1: {
                  label: "Honorarios",
              },
              anticipo: {
                  label: "Anticipo",
                  type: "select_b11",
              }
            },
            isCRUD: !0,
            buttons: {
                create: !0,
                save: !1,
                cancel: !0,
                "delete": !1
            },
            relations: {
                cronogramas: null,
                clientes: null,
            },
            initialize: function() {
                var e= this;
                F.getAllFromModel("cliente", function(t) {
                  e.relations.clientes = t, F.getAllCronogramasFromModel("cronograma", function(t) {
                    e.relations.cronogramas = t,  F.createForm(e);
                  });
                })
            },
            events: {
                "click .otro_form .BUTTON_create": "createOtro",
            },
            getTable: function() {
                return this.options.impuesto_table;
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
            createOtro: function() {
                var e = this;
                if( ( $('.otro_form').serializeObject().cliente_id !='')
                 && ( $('.otro_form').serializeObject().cronograma_id !='')
                 && ( $('.otro_form').serializeObject().impuesto !='')
                 && ( $('.otro_form').serializeObject().vtoImpuesto !='')
                 && ( ( $('.otro_form').serializeObject().monto0 !='')
                      ||( $('.otro_form').serializeObject().monto0 !='')
                    )
                ){
                  if($(".otro_form").serializeObject().anticipo != '')
                    $(".otro_form").serializeObject().anticipo = ' ';
                  $.ajax({
                    type: "POST",
                    url: "/otro",
                    data: $(".otro_form").serializeObject(),
                    success: function(e) {
                      F.msgOK("Vencimiento creado con éxito")
                      window.setTimeout(function() { location.reload() }, 1e3);
                    }
                  })
                }else{
                  F.msgError('Todos los campos deben estar completos');
                }
            }
        });
    })
//CARGA FIJO
    e.define("/views/carga/CargaFijo.js", function(e, t, n, r, i, s) {
        C.View.CargaFijo = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.cargaFijos = new C.Collection.CargaFijos(null, {
                    view: this
                }), this.cargaFijos.fetch({
                    success: function(t, n) {
                        e.cargaFijo_table = new C.View.CargaFijoTable({
                            el: $("#cargaFijo_left"),
                            collection: t
                        }), e.cargaFijo_form = new C.View.CargaFijoForm({
                            el: $("#cargaFijo_right"),
                            model: e.model,
                            collection: t,
                            cargaFijo_table: e.cargaFijo_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/carga/CargaFijoTable.js", function(e, t, n, r, i, s) {
        C.View.CargaFijoTable = Backbone.View.extend({
            name: "cargaFijo",
            headers: ["ID", "Nombre", "Observacion", "Fijo", "monto0", "Monto1", "Monto2", "Monto3"],
            attrs: ["id", "nombre", "observacion", "fijo", "monto0", "monto1", "monto2", "monto3"],
            hidden_columns: ["fijo", "monto0", "monto1", "monto2", "monto3"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".cargaFijo_form"), e);
                });
            },
            events: {
                "click .cargaFijo_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/carga/CargaFijoForm.js", function(e, t, n, r, i, s) {
        C.View.CargaFijoForm = Backbone.View.extend({
            name: "cargaFijo_form",
            title: "Carga de Imp. Fijos",
            fields: {
                impFijo: {
                    label: "Imp. Fijo",
                    attrs: {
                        disabled: "disabled",
                    },
                },
                nombre: {
                    label: "Nombre",
                    check: "alpha",
                    attrs: {
                        disabled: "disabled"
                    }
                },
                observacion: {
                    label: "Observación",
                    type: "textarea",
                    attrs: {
                        disabled: "disabled"
                    }
                },
                monto0: {
                    label: "Monto0",
                    check: "numeric",
                },
                monto1: {
                    label: "Monto1",
                    check: "numeric",
                },
                monto2: {
                    label: "Monto2",
                    check: "numeric",
                },
                monto3: {
                    label: "Monto3",
                    check: "numeric",
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
                cronogramas: null,
            },
            initialize: function() {
                var e= this;
                F.getAllCronogramasFromModel("cronograma", function(t) {
                  e.relations.cronogramas = t, F.createForm(e);
                });
            },
            events: {
                "click .cargaFijo_form .BUTTON_save": "editCargaFijo",
            },
            getTable: function() {
                return this.options.cargaFijo_table;
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
            editCargaFijo: function() {
                var e = this;
                if( !isNaN($(".cargaFijo_form").serializeObject().monto1.replace(",","."))
                 && !isNaN($(".cargaFijo_form").serializeObject().monto2.replace(",","."))
                 && !isNaN($(".cargaFijo_form").serializeObject().monto0.replace(",","."))
                 && !isNaN($(".cargaFijo_form").serializeObject().monto3.replace(",","."))
                ){
                    $.ajax({
                          type: "PUT",
                          url: "/cargaFijo/" + e.getSelectionID(),
                          data: $(".cargaFijo_form").serialize(),
                          success: function() {
                              F.msgOK("Monto Editado con éxito")
    		                      this.cargaFijos = new C.Collection.CargaFijos(null, {
                                view: this
                              }), this.cargaFijos.fetch({
                               success: function(t, n) {
                                 $("#cargaFijo_left").empty()
                                 e.cargaFijo_table = new C.View.CargaFijoTable({
                                   el: $("#cargaFijo_left"),
                                   collection: t
                                 })
                               }
                             });
                          }
                    })
                }else{
                    F.msgError('Los Montos deben ser Números separando los decimales por "."(punto), además debe seleccionar un Cronograma');
                }
            },
        });
    }),
//NOCARGADO
    e.define("/views/carga/NoCargado.js", function(e, t, n, r, i, s) {
        C.View.NoCargado = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.noCargados = new C.Collection.NoCargados(null, {
                    view: this
                }), this.noCargados.fetch({
                    success: function(t, n) {
                        e.noCargado_table = new C.View.NoCargadoTable({
                            el: $("#noCargado_left"),
                            collection: t
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/carga/NoCargadoTable.js", function(e, t, n, r, i, s) {
        C.View.NoCargadoTable = Backbone.View.extend({
            name: "noCargado",
            headers: ["ID", "Cliente", "Impuesto"],
            attrs: ["id", "cliente", "impuesto"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null ],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".noCargado_form"), e);
                });
            },
            events: {
                "click .noCargado_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
//CARGADO
    e.define("/views/carga/Cargado.js", function(e, t, n, r, i, s) {
        C.View.Cargado = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.cargados = new C.Collection.Cargados(null, {
                    view: this
                }), this.cargados.fetch({
                    success: function(t, n) {
                        e.cargado_table = new C.View.CargadoTable({
                            el: $("#cargado_left"),
                            collection: t
                        }), e.cargado_form = new C.View.CargadoForm({
                            el: $("#cargado_right"),
                            model: e.model,
                            collection: t,
                            cargado_table: e.cargado_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/carga/CargadoTable.js", function(e, t, n, r, i, s) {
        C.View.CargadoTable = Backbone.View.extend({
            name: "cargado",
            headers: ["ID", "Cliente", "Impuesto", "Cronograma", "monto", "monto0", "monto1", "monto2", "monto3", "monto4", "liquida"],
            attrs: ["id", "cliente", "impuesto", "cronograma", "monto", "monto0", "monto1", "monto2", "monto3", "monto4", "liquida"],
            hidden_columns: ["monto", "monto0", "monto1", "monto2", "monto3", "monto4", "liquida"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".cargado_form"), e);
                });
            },
            events: {
                "click .cargado_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/carga/CargadoInfoCard.js", function(e, t, n, r, i, s) {
        C.View.CargadoForm = Backbone.View.extend({
            name: "cargado_form",
            title: "Edición de Vencimiento",
            fields: {
                cliente: {
                    label: "Cliente",
                    attrs: {
                        disabled: "disabled",
                    },
                },
                impuesto: {
                    label: "Impuesto",
                    attrs: {
                        disabled: "disabled"
                    }
                },
                cronograma: {
                    label: "Cronograma",
                    attrs: {
                        disabled: "disabled"
                    }
                },
                liquida: {
                    label: "Liquidable?",
                    type: "select_yn",
                    default_value: "y"
                },
                monto0: {
                    label: "Monto0",
                    check: "numeric",
                },
                monto1: {
                    label: "Monto1",
                    check: "numeric",
                },
                monto2: {
                    label: "Monto2",
                    check: "numeric",
                },
                monto3: {
                    label: "Monto3",
                    check: "numeric",
                },
                monto4: {
                    label: "Monto4",
                    check: "numeric",
                },
                anticipo: {
                    label: "Anticipo",
                    type: "select_b11",
                },
                monto: {
                    label: "total",
                    attrs: {
                        disabled: "disabled"
                    }
                },
            },
            isCRUD: !0,
            buttons: {
                create: !1,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            initialize: function() {
                var e= this;
                F.createForm(e);
            },
            events: {
                "click .cargado_form .BUTTON_save": "editCargado",
            },
            getTable: function() {
                return this.options.cargaFijo_table;
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
            editCargado: function() {
              $.ajax({
                type: "PUT",
                url: "/cargado/"+parseInt($(".selection_id").val()),
                data: $('.cargado_form').serialize(),
                success: function(){
                  F.msgOK("Impuesto editado con exito");
                  this.cargados = new C.Collection.Cargados(null, {
                      view: this
                  }), this.cargados.fetch({
                      success: function(t, n) {
                          $("#cargado_left").empty()
                          e.cargado_table = new C.View.CargadoTable({
                              el: $("#cargado_left"),
                              collection: t
                          });
                      }
                  });


                }
              })
            },
        });
    }),
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
                      //disabled: "disabled"
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
//RECEPIMP
    e.define("/views/pagarImp/RecepImp.js", function(e, t, n, r, i, s) {
        C.View.RecepImp = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.recepImps = new C.Collection.RecepImps(null, {
                    view: this
                }), this.recepImps.fetch({
                    success: function(t, n) {
                        e.recepImp_table = new C.View.RecepImpTable({
                            el: $("#recepImp_left"),
                            collection: t
                        }), e.pago_form = new C.View.RecepImpForm({
                            el: $("#recepImp_right"),
                            model: e.model,
                            collection: t,
                            recepImp_table: e.recepImp_table
                        });
                    }
                });
            }
        });
    }),
    //trabajo
    e.define("/views/pagarImp/RecepImpTable.js", function(e, t, n, r, i, s) {
        C.View.RecepImpTable = Backbone.View.extend({
            name: "recepImp",
            headers: ["ID", "Número", "Dia Pago", "Empleado", "Banco", "Total", "banco_id", "empleado_id" ],
            attrs: ["id", "numero", "diaDePago", "empleadoNombre", "bancoNombre", "total", "banco_id", "empleado_id"],
            hidden_columns: ["empleado_nombre", "banco_id", "empleado_id"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null,  ],
                aaSorting: [ [ 1, "desc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".recepImp_form"), e);
                }, function() {
                    var t = $(".recepImp_table").dataTable();
                    $(".recepImp_table tbody tr").on("click", function() {
                        t.fnIsOpen(this) ? t.fnClose(this) : t.fnOpen(this, e.generateRowDetails(t, this), "details");
                    });
                });
            },
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
            bindRenderRecepImpForm: function(e, t, n) {
                var r = this;
                $(e).on("click", function() {
                    $(".row_detail p").removeClass("selected_recepImp"),
                    $(this).addClass("selected_recepImp"),
                    ($(".vto_form .BUTTON_cancel").remove(),
                     $(".vto_form .BUTTON_proceed").remove(),
                     $(".vto_form").remove(),
                     $(".vto_form").unbind(),
                     console.log("ME EJECUTAN"),
                     r.vto_form = new C.View.VtoForm({
                        el: $("#recepImp_right"),
                        model: new C.Model.Deuda,
                        table: r,
                        vto: t
                    }), $(".row_subdetail").remove())
                });
            },

            appendRowDetailsHeaders: function(e) {
                $(".grupo_id_" + e).append('<p class="row_details_headers">Cliente - Impuesto <span>Monto</span></p>');
            },
            getRecepImp: function(e, t) {
                $.ajax({
                    url: "/recepImp/byGroup/" + e,
                    success: function(e) {
                        t(e);
                    }
                });
            },
            events: {
                "click .recepImp_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/pagarImp/RecepImpForm.js", function(e, t, n, r, i, s) {
        C.View.RecepImpForm = Backbone.View.extend({
            name: "recepImp_form",
            title: "Recepción del Grupo de Impuestos",
            fields: {
              numero: {
                label: "Número",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              diaDePago: {
                label: "Dia De Pago",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              empleadoNombre: {
                label: "Empleado",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              bancoNombre: {
                label: "Banco",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              total: {
                label: "Total",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
            },
            isCRUD: !0,
            buttons: {
                create: !1,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            relations: {
            },
            initialize: function() {
                var e= this;
                F.createFormS(e);
            },
            events: {
                "click .recepImp_form .BUTTON_save": "addRecepImp",
            },
            getTable: function() {
                return this.options.recepImp_table;
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
            addRecepImp: function() {
              var e = this
              $.ajax({//ACA DEBO LEVANTAR UN NUEVO RECIBO diciendo que es el posta posta e.getSelectionID() hago un get de todos los detalles del grupo
                type: "POST",
                url: "/recepImp/"+e.getSelectionID(),
                success: function(t) {
                  F.msgOK("Impuestos Recibidos exitosamente")
                  this.recepImps = new C.Collection.RecepImps(null, {
                    view: this
                  }), this.recepImps.fetch({
                    success: function(t, n) {
                      $("#recepImp_left").empty()
                      e.recepImp_table = new C.View.RecepImpTable({
                      el: $("#recepImp_left"),
                      collection: t
                      })
                    }
                  });
                }
              })
            }
        })
    }),
    e.define("/views/pagarImp/VtoForm.js", function(e, t, n, r, i, s) {
      C.View.VtoForm = Backbone.View.extend({
        name: "vto_form",
        title: "Edición de Impuestos",
        fields: {
          id: {
            type: "hidden",
          },
          monto0: {
            label: "Total",
            type: "text",
          },
          monto1: {
            label: "Total",
            type: "text",
          },
          monto2: {
            label: "Total",
            type: "text",
          },
          monto3: {
            label: "Total",
            type: "text",
          },
          monto3: {
            label: "Total",
            type: "text",
          },
        },
        isCRUD: !1,
        buttons: {
            create: !1,
            save: !1,
            cancel: !1,
            "delete": !1
        },
        initialize: function() {
            var e = this;
            F.createForm(e);
            var n = e.getVto(),
            r = $(".vto_form"),
            i = $(r).getFields(), s;
            $(r).append('<input type="button" id="noRepite" class="BUTTON_cancel lefty button" value="Repagar"  /><input type="button" id="imprimirRecibo" class="BUTTON_proceed_print center button" value="Imprimir" /><input type="button" id="tampoco" class="BUTTON_proceed righty button" value="Editar" /><br /> <br />');
            $(r).append($('<input>', {
              type: 'hidden',
              value: n.id,
              class: 'selection_recepImp_id'
            })),
            $(i).each(function() {
              s = $(this).attr("name");
              $(this).val(n[s])
            });

        },
        getVto: function() {
            return this.options.vto;
        },

        events: {
            "click .vto_form .BUTTON_proceed": "addVto",
            "click .vto_form .BUTTON_proceed_print": "imprimirRecibo",
            "click .vto_form .BUTTON_cancel": "editVto"
        },
        getTable: function() {
            return this.options.recepImp_table;
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
        editVto: function() {
          var e = this;
          if($(".selection_recepImp_id").val()>0){
            $.ajax({
              type: "GET",
              url: "/descImp/err/"+$(".selection_recepImp_id").val(),
              success: function(t) {
                if(t){
                  F.msgOK('El Impuesto se envio a la lista "A Pagar" de manera correcta')
                  setTimeout(function(){location.reload()}, 1e3 );
                }else{
                  F.msgError('Hubo un Error')
                  setTimeout(function(){location.reload()}, 1e3 );
                }
              }
            })
          }
        },
        addVto: function() {
        //Edita el monto del vencimiento
          var e = this;
          event.preventDefault();
          if($(".selection_recepImp_id").val()){
            $.ajax({
              type: "POST",
              url: "/recepImp/edit/"+$(".selection_recepImp_id").val(),
              data: $(".vto_form").serialize(),
              success: function(){
                F.msgOK("Recibo modificado exitosamente");
                setTimeout(function(){location.reload()}, 1e3 );
              }
            })
          }
        },
        imprimirRecibo: function() {
        //Edita el monto del vencimiento
          var e = this;
          event.preventDefault();
          if($(".selection_recepImp_id").val()){
            $.ajax({
              type: "POST",
              url: "/recepImp/print/"+$(".selection_recepImp_id").val(),
              data: $(".vto_form").serialize(),
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
                              'Movimiento: Edición Pago (G.I.Nº:'+e.pagoNumero+')<br  />'+
                              'Fecha: '+e.reciboFecha+
                          '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                          '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                  'Dia de Edicion: '+moment().format('DD/MM/YYYY')+"<br />"+
                              '</div>'+
                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                  '<span style="font-weight:bold;"> Descripción del movimiento: </span>Pago de impuestos por parte del Estudio'+
                              '</div>'+
                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: auto;">'+
                                  e.recibo.concepto+
                              '</div>'+
                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: auto;">'+
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
                              //e.receptor o e.creador
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
          }
        }
      })
    }),
//descIMP
    e.define("/views/pagarImp/DescImp.js", function(e, t, n, r, i, s) {
        C.View.DescImp = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.descImps = new C.Collection.DescImps(null, {
                    view: this
                }), this.descImps.fetch({
                    success: function(t, n) {
                        e.descImp_table = new C.View.DescImpTable({
                            el: $("#descImp_left"),
                            collection: t
                        }), e.pago_form = new C.View.DescImpForm({
                            el: $("#descImp_right"),
                            model: e.model,
                            collection: t,
                            descImp_table: e.descImp_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/pagarImp/DescImpTable.js", function(e, t, n, r, i, s) {
        C.View.DescImpTable = Backbone.View.extend({
            name: "descImp",
            headers: ["ID", "Grupo Impuesto", "Cliente", "Cronograma", "Impuesto", "Total", "Banco","DiaDePago"],
            attrs: ["id", "grupoNumero", "clienteNombre", "cronograma", "impuestoNombre", "total", "bancoNombre", "diaDePago"],
            hidden_columns: ["bancoNombre", "diaDePago"],
            data: null,
            datatableOptions: {
                aoColumns: [null, null, null, null, null, null, null],
                aaSorting: [ [ 1, "desc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".descImp_form"), e);
                });
            },
            events: {
                "click .descImp_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/pagarImp/DescImpForm.js", function(e, t, n, r, i, s) {
        C.View.DescImpForm = Backbone.View.extend({
            name: "descImp_form",
            title: "Descargar Impuestos",
            fields: {
              grupoNumero: {
                label: "Grupo de Impuestos Número",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              clienteNombre: {
                label: "Cliente",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              diaDePago:{
                label: "Dia De Pago",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              cronograma: {
                label: "Cronograma",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              impuestoNombre: {
                label: "Impuesto",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              bancoNombre: {
                label: "Banco",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              total: {
                label: "Total",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
            },
            isCRUD: !0,
            buttons: {
                create: !1,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            relations: {
            },
            initialize: function() {
                var e= this;
                F.createFormS(e);
            },
            events: {
                "click .descImp_form .BUTTON_save": "addDescImp",
               // "click .descImp_form .BUTTON_delete": "delDescImp",
            },
            getTable: function() {
                return this.options.descImp_table;
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
            delDescImp: function() {
              var e = this
              $.ajax({
                type: "GET",
                url: "/descImp/err/"+e.getSelectionID(),
                success: function(t) {
                  F.msgOK("El Impuesto esta en la lista para Pagar nuevamente")
                  this.descImps = new C.Collection.DescImps(null, {
                    view: this
                  }), this.descImps.fetch({
                    success: function(t, n) {
                      $("#descImp_left").empty()
                      e.descImp_table = new C.View.DescImpTable({
                      el: $("#descImp_left"),
                      collection: t
                      })
                    }
                  });
                }
              })
            },
            addDescImp: function() {
              var e = this
              $.ajax({
                type: "POST",
                url: "/descImp/"+e.getSelectionID(),
                success: function(t) {
                  F.msgOK("Impuestos Recibidos exitosamente")
                  this.descImps = new C.Collection.DescImps(null, {
                    view: this
                  }), this.descImps.fetch({
                    success: function(t, n) {
                      $("#descImp_left").empty()
                      e.descImp_table = new C.View.DescImpTable({
                      el: $("#archImp_left"),
                      collection: t
                      })
                    }
                  });
                }
              })
            }
        })
    }),
//ARCHIMP
    e.define("/views/pagarImp/ArchImp.js", function(e, t, n, r, i, s) {
        C.View.ArchImp = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.archImps = new C.Collection.ArchImps(null, {
                    view: this
                }), this.archImps.fetch({
                    success: function(t, n) {
                        e.archImp_table = new C.View.ArchImpTable({
                            el: $("#archImp_left"),
                            collection: t
                        }), e.pago_form = new C.View.ArchImpForm({
                            el: $("#archImp_right"),
                            model: e.model,
                            collection: t,
                            archImp_table: e.archImp_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/pagarImp/ArchImpTable.js", function(e, t, n, r, i, s) {
        C.View.ArchImpTable = Backbone.View.extend({
            name: "archImp",
            headers: ["ID", "Grupo","Cliente", "Cronograma", "Impuesto", "Total", "Banco","DiaDePago"],
            attrs: ["id", "grupoNumero", "clienteNombre", "cronograma", "impuestoNombre", "total", "bancoNombre", "diaDePago"],
            hidden_columns: ["bancoNombre", "diaDePago"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 100
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".archImp_form"), e);
                });
            },
            events: {
                "click .archImp_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/pagarImp/ArchImpForm.js", function(e, t, n, r, i, s) {
        C.View.ArchImpForm = Backbone.View.extend({
            name: "archImp_form",
            title: "Archivar Impuestos",
            fields: {
              grupoNumero:{
                label: "Grupo de impuestos Número",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              clienteNombre: {
                label: "Cliente",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              diaDePago:{
                label: "Dia De Pago",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              cronograma: {
                label: "Cronograma",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              impuestoNombre: {
                label: "Impuesto",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              bancoNombre: {
                label: "Banco",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
              total: {
                label: "Total",
                type: "text",
                attrs: {
                  disabled: "disabled"
                }
              },
            },
            isCRUD: !0,
            buttons: {
                create: !1,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            relations: {
            },
            initialize: function() {
                var e= this;
                F.createFormS(e);
            },
            events: {
                "click .archImp_form .BUTTON_save": "addArchImp",
                "click .archImp_form .BUTTON_delete": "delArchImp",
            },
            getTable: function() {
                return this.options.archImp_table;
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
            delArchImp: function() {
              var e = this
              $.ajax({
                type: "GET",
                url: "/archImp/err/"+e.getSelectionID(),
                success: function(t) {
                  F.msgOK("El Impuesto esta en la lista para Pagar nuevamente")
                  this.archImps = new C.Collection.ArchImps(null, {
                    view: this
                  }), this.archImps.fetch({
                    success: function(t, n) {
                      $("#archImp_left").empty()
                      e.archImp_table = new C.View.ArchImpTable({
                      el: $("#archImp_left"),
                      collection: t
                      })
                    }
                  });
                }
              })
            },
            addArchImp: function() {
              var e = this
              $.ajax({
                type: "POST",
                url: "/archImp/"+e.getSelectionID(),
                success: function(t) {
                  F.msgOK("Impuestos Recibidos exitosamente")
                  this.archImps = new C.Collection.ArchImps(null, {
                    view: this
                  }), this.archImps.fetch({
                    success: function(t, n) {
                      $("#archImp_left").empty()
                      e.archImp_table = new C.View.ArchImpTable({
                      el: $("#archImp_left"),
                      collection: t
                      })
                    }
                  });
                }
              })
            }
        })
    }),
//ARCHIVADO
    e.define("/views/pagarImp/Archivado.js", function(e, t, n, r, i, s) {
        C.View.Archivado = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.archivados = new C.Collection.Archivados(null, {
                    view: this
                }), this.archivados.fetch({
                    success: function(t, n) {
                        e.archivado_table = new C.View.ArchivadoTable({
                            el: $("#archivado_left"),
                            collection: t
                        }), e.archivado_infocard = new C.View.ArchivadoInfoCard({
                            el: $("#archivado_right"),
                            model: e.model,
                            collection: t,
                            archivado_table: e.archivado_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/pagarImp/ArchivadoTable.js", function(e, t, n, r, i, s) {
        C.View.ArchivadoTable = Backbone.View.extend({
            name: "archivado",
            headers: ["ID", "Cronograma", "Cliente", "Impuesto", "Banco", "diaDePago", "Total" ],
            attrs: ["id", "cronograma", "clienteNombre", "impuestoNombre", "bancoNombre", "diaDePago", "impMonto"],
            hidden_columns: [ "bancoNombre", "diaDePago" ],
            data: null,
            datatableOptions: {
                aoColumns: null,
                aaSorting: [ [ 2, "desc" ] ],
                iDisplayLength: 100
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToInfoCard($(".archivado_infocard"), e);
                });
            },
            events: {
                "click .archivado_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/pagarImp/ArchivadoInfoCard.js", function(e, t, n, r, i, s) {
        C.View.ArchivadoInfoCard = Backbone.View.extend({
            name: "archivado_infocard",
            title: "Detalle del Impuesto Archivado",
            fieldnames: {
              diaDePago: "Dia De Pago",
              clienteNombre: "Cliente",
              cronograma: "Cronograma",
              impuestoNombre: "Impuesto",
              bancoNombre: "Banco",
              impMonto: "Valor"
            },
            initialize: function() {
                var e = this;
                F.createInfoCard(e, $("#archivado_right"));
            }
        })
    }),
//CRONOGRAMA
  //CRONOGRAMA VENCIMIENTOS
    e.define("/views/cronograma/Cronograma.js", function(e, t, n, r, i, s) {
        C.View.Cronograma = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.cronogramas = new C.Collection.Cronogramas(null, {
                    view: this
                }), this.cronogramas.fetch({
                    success: function(t, n) {
                        e.cronograma_table = new C.View.CronogramaTable({
                            el: $("#cronograma_left"),
                            collection: t
                        }), e.cronograma_form = new C.View.CronogramaForm({
                            el: $("#cronograma_right"),
                            model: e.model,
                            collection: t,
                            cronograma_table: e.cronograma_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/cronograma/CronogramaTable.js", function(e, t, n, r, i, s) {
        C.View.CronogramaTable = Backbone.View.extend({
            name: "cronograma",
            headers: ["ID", "Año", "mes", "Mes" ],
            attrs: ["id", "año", "mes", "nombreMes" ],
            hidden_columns: [ "mes"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(t) {
                F.getOneFromModel("cronogramaImpuesto", t.id , function(i) {
                var msg={}
                i.forEach(function(ci){
                  msg[ci.impuesto.nombre+"_id"]=ci.id;
                  if(ci.vtoImpuesto){
                    msg[ci.impuesto.nombre]=moment(ci.vtoImpuesto).format('DD/MM/YYYY');
                  }

                })
                $.extend(t, msg);
                F.assignValuesToForm($(".cronograma_form"), t);
                })
              });
            },
            events: {
                "click .cronograma_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/cronograma/CronogramaForm.js", function(e, t, n, r, i, s) {
        C.View.CronogramaForm = Backbone.View.extend({
            name: "cronograma_form",
            title: "Carga de Vencimiento",
            relations: {
                impuestos: null,
            },
            isCRUD: !0,
            buttons: {
                create: !0,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            initialize: function(e) {
              var e = this;
              F.getAllFromModel("impuesto", function(t) {
                var objeto={};
                var base={};
                objeto={mes:{type:'select_month', label:'Mes Del Vencimiento'}};
                $.extend(base, objeto);
                objeto={año:{type:'select_year', label:'Año Del Vencimiento'}};
                $.extend(base, objeto);
                t.forEach(function(impuesto){
                  var nombre = impuesto.nombre;
                  objeto[nombre+"_id"]={type:'hidden'};
                  objeto[nombre]={type:'datepicker', label: impuesto.nombre, force_label: !0};
                  $.extend(base, objeto);
                })
                e.fields=base;
                F.createForm(e, $("#cronograma_right"));
              })
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            },
            events: {
                "click .cronograma_form .BUTTON_cancel": "cancelCronograma",
                "click .cronograma_form .BUTTON_create": "addCronograma",
                "click .cronograma_form .BUTTON_save": "editCronograma",
            },
            cancelCronograma: function(){
              location.reload();
            },
            addCronograma: function() {
              var e = this;
              if(($(".cronograma_form").serializeObject().mes != '')&&($(".cronograma_form").serializeObject().año != '')){
                var objetos= $(".cronograma_form").serializeObject();
                $.ajax({
                  type: "POST",
                  url: "/cronograma",
                  data: $(".cronograma_form").serialize(),
                  success: function() {
                    F.msgOK("Cronograma creado exitosamente")
                    this.cronogramas = new C.Collection.Cronogramas(null, {
                      view: this
                    }), this.cronogramas.fetch({
                     success: function(t, n) {
                       $("#cronograma_left").empty()
                       e.cronograma_table = new C.View.CronogramaTable({
                         el: $("#cronograma_left"),
                         collection: t
                       })
                     }
                   });
                  }
               })
              }else{
                 F.msgError("Los campos 'Año' y 'Mes' son OBLIGATORIOS");
              }
            },
            editCronograma: function(){
              var e = this;
              if(($(".cronograma_form").serializeObject().mes != '')&&($(".cronograma_form").serializeObject().año != '')){
                var objetos= $(".cronograma_form").serializeObject();
                $.ajax({
                  type: "PUT",
                  url: "/cronograma/"+ e.getSelectionID(),
                  data: $(".cronograma_form").serialize(),
                  success: function() {
                    F.msgOK("Cronograma editado exitosamente")
                    this.cronogramas = new C.Collection.Cronogramas(null, {
                      view: this
                    }), this.cronogramas.fetch({
                     success: function(t, n) {
                       $("#cronograma_left").empty()
                       e.cronograma_table = new C.View.CronogramaTable({
                         el: $("#cronograma_left"),
                         collection: t
                       })
                     }
                   });
                  }
                })
              }else{
                 F.msgError("Los campos 'Año' y 'Mes' son OBLIGATORIOS");
              }
            }
        })
    }),
//CRONOGRAMA RECEPCION
    e.define("/views/cronograma/Recepcion.js", function(e, t, n, r, i, s) {
        C.View.Recepcion = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.recepcions = new C.Collection.Recepcions(null, {
                    view: this
                }), this.recepcions.fetch({
                    success: function(t, n) {
                      e.recepcion_table = new C.View.RecepcionTable({
                          el: $("#recepcion_left"),
                          collection: t
                      }), e.recepcion_form = new C.View.RecepcionForm({
                          el: $("#recepcion_right"),
                          model: e.model,
                          collection: t,
                          recepcion_table: e.recepcion_table
                      });
                    }
                });
            }
        });
    }),
    e.define("/views/cronograma/RecepcionTable.js", function(e, t, n, r, i, s) {
        C.View.RecepcionTable = Backbone.View.extend({
            name: "recepcion",
            headers: ["ID", "Año", "mes", "Mes" ],
            attrs: ["id", "año", "mes", "nombreMes" ],
            hidden_columns: [ "mes"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(t) {
                F.getOneFromModel("cronogramaImpuesto", t.id , function(i) {
                var msg={}
                i.forEach(function(ci){
                  msg[ci.impuesto.nombre+"_id"]=ci.id;
                  if(ci.vtoRecepcion){
                    msg[ci.impuesto.nombre]=moment(ci.vtoRecepcion).format('DD/MM/YYYY');
                  }
                })
                $.extend(t, msg);
                F.assignValuesToForm($(".recepcion_form"), t);
                })
              });
            },
            events: {
                "click .recepcion_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/cronograma/RecepcionForm.js", function(e, t, n, r, i, s) {
        C.View.RecepcionForm = Backbone.View.extend({
            name: "recepcion_form",
            title: "Carga de Recepción",
            relations: {
                impuestos: null,
            },
            isCRUD: !0,
            buttons: {
                create: !0,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            initialize: function(e) {
              var e = this;
              F.getAllFromModel("impuesto", function(t) {
                var objeto={};
                var base={};
                objeto={mes:{type:'select_month', label:'Mes Del Vencimiento'}};
                $.extend(base, objeto);
                objeto={año:{type:'select_year', label:'Año Del Vencimiento'}};
                $.extend(base, objeto);
                t.forEach(function(impuesto){
                  var nombre = impuesto.nombre;
                  objeto[nombre+"_id"]={type:'hidden'};
                  objeto[nombre]={type:'datepicker', label:impuesto.nombre, force_label: !0};
                  $.extend(base, objeto);
                })
                e.fields=base;
                F.createForm(e, $("#recepcion_right"));
              })
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            },
            events: {
                "click .recepcion_form .BUTTON_cancel": "cancelRecepcion",
                "click .recepcion_form .BUTTON_create": "addRecepcion",
                "click .recepcion_form .BUTTON_save": "editRecepcion",
            },
            cancelRecepcion: function(){
              location.reload();
            },
            addRecepcion: function() {
                var e = this;
                if(($(".recepcion_form").serializeObject().mes != '')&&($(".recepcion_form").serializeObject().año != '')){
                  var objetos= $(".recepcion_form").serializeObject();
                    $.ajax({
                          type: "POST",
                          url: "/recepcion",
                          data: $(".recepcion_form").serialize(),
                          success: function() {
                              F.msgOK("Recepción creada exitosamente")
    		                      this.recepcions = new C.Collection.Recepcions(null, {
                                view: this
                              }), this.recepcions.fetch({
                               success: function(t, n) {
                                 $("#recepcion_left").empty()
                                 e.recepcion_table = new C.View.RecepcionTable({
                                   el: $("#recepcion_left"),
                                   collection: t
                                 })
                               }
                             });
                          }
                   })
               }else{
                  F.msgError("Los campos 'Año' y 'Mes' son OBLIGATORIOS");
               }
            },
            editRecepcion: function(){
                var e = this;
                if(($(".recepcion_form").serializeObject().mes != '')&&($(".recepcion_form").serializeObject().año != '')){
                  var objetos= $(".recepcion_form").serializeObject();
                    $.ajax({
                          type: "PUT",
                          url: "/recepcion/"+ e.getSelectionID(),
                          data: $(".recepcion_form").serialize(),
                          success: function() {
                              F.msgOK("Recepción editada exitosamente")
    		                      this.recepcions = new C.Collection.Recepcions(null, {
                                view: this
                              }), this.recepcions.fetch({
                               success: function(t, n) {
                                 $("#recepcion_left").empty()
                                 e.recepcion_table = new C.View.RecepcionTable({
                                   el: $("#recepcion_left"),
                                   collection: t
                                 })
                               }
                             });
                          }
                    })
                }else{
                   F.msgError("Los campos 'Año' y 'Mes' son OBLIGATORIOS");
                }
            }
        })
    }),
// CRONOGRAMA VTOAviso
    e.define("/views/cronograma/Aviso.js", function(e, t, n, r, i, s) {
        C.View.Aviso = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.avisos = new C.Collection.Avisos(null, {
                    view: this
                }), this.avisos.fetch({
                    success: function(t, n) {
                        e.aviso_table = new C.View.AvisoTable({
                            el: $("#aviso_left"),
                            collection: t
                        }), e.aviso_form = new C.View.AvisoForm({
                            el: $("#aviso_right"),
                            model: e.model,
                            collection: t,
                            aviso_table: e.aviso_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/cronograma/AvisoTable.js", function(e, t, n, r, i, s) {
        C.View.AvisoTable = Backbone.View.extend({
            name: "aviso",
            headers: ["ID", "Año", "mes", "Mes" ],
            attrs: ["id", "año", "mes", "nombreMes" ],
            hidden_columns: [ "mes"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(t) {
                F.getOneFromModel("cronogramaImpuesto", t.id , function(i) {
                var msg={}
                i.forEach(function(ci){
                  msg[ci.impuesto.nombre+"_id"]=ci.id;
                  if(ci.vtoAviso){
                    msg[ci.impuesto.nombre]=moment(ci.vtoAviso).format('DD/MM/YYYY');
                  }
                })
                $.extend(t, msg);
                F.assignValuesToForm($(".aviso_form"), t);
                })
              });
            },
            events: {
                "click .aviso_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/cronograma/AvisoForm.js", function(e, t, n, r, i, s) {
        C.View.AvisoForm = Backbone.View.extend({
            name: "aviso_form",
            title: "Carga de Aviso",
            relations: {
                impuestos: null,
            },
            isCRUD: !0,
            buttons: {
                create: !0,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            initialize: function(e) {
              var e = this;
              F.getAllFromModel("impuesto", function(t) {
                var objeto={};
                var base={};
                objeto={mes:{type:'select_month', label:'Mes Del Vencimiento'}};
                $.extend(base, objeto);
                objeto={año:{type:'select_year', label:'Año Del Vencimiento'}};
                $.extend(base, objeto);
                t.forEach(function(impuesto){
                  var nombre = impuesto.nombre;
                  objeto[nombre+"_id"]={type:'hidden'};
                  objeto[nombre]={type:'datepicker', label:impuesto.nombre, force_label: !0};
                  $.extend(base, objeto);
                })
                e.fields=base;
                F.createForm(e, $("#aviso_right"));
              })
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            },
            events: {
                "click .aviso_form .BUTTON_cancel": "cancelAviso",
                "click .aviso_form .BUTTON_create": "addAviso",
                "click .aviso_form .BUTTON_save": "editAviso",
            },
            cancelAviso: function(){
              location.reload();
            },
            addAviso: function() {
                var e = this;
                if(($(".aviso_form").serializeObject().mes != '')&&($(".aviso_form").serializeObject().año != '')){
                  var objetos= $(".aviso_form").serializeObject();
                    $.ajax({
                          type: "POST",
                          url: "/aviso",
                          data: $(".aviso_form").serialize(),
                          success: function() {
                              F.msgOK("Aviso creado exitosamente")
    		                      this.avisos = new C.Collection.Avisos(null, {
                                view: this
                              }), this.avisos.fetch({
                               success: function(t, n) {
                                 $("#aviso_left").empty()
                                 e.aviso_table = new C.View.AvisoTable({
                                   el: $("#aviso_left"),
                                   collection: t
                                 })
                               }
                             });
                          }
                   })
               }else{
                  F.msgError("Los campos 'Año' y 'Mes' son OBLIGATORIOS");
               }
            },
            editAviso: function(){
                var e = this;
                if(($(".aviso_form").serializeObject().mes != '')&&($(".aviso_form").serializeObject().año != '')){
                  var objetos= $(".aviso_form").serializeObject();
                    $.ajax({
                          type: "PUT",
                          url: "/aviso/"+ e.getSelectionID(),
                          data: $(".aviso_form").serialize(),
                          success: function() {
                              F.msgOK("Aviso editado exitosamente")
    		                      this.avisos = new C.Collection.Avisos(null, {
                                view: this
                              }), this.avisos.fetch({
                               success: function(t, n) {
                                 $("#aviso_left").empty()
                                 e.aviso_table = new C.View.AvisoTable({
                                   el: $("#aviso_left"),
                                   collection: t
                                 })
                               }
                             });
                          }
                    })
                }else{
                   F.msgError("Los campos 'Año' y 'Mes' son OBLIGATORIOS");
                }
            }
        })
    }),
// CRONOGRAMA VTOAsignacion
    e.define("/views/cronograma/Asignacion.js", function(e, t, n, r, i, s) {
        C.View.Asignacion = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.asignacions = new C.Collection.Asignacions(null, {
                    view: this
                }), this.asignacions.fetch({
                    success: function(t, n) {
                        e.asignacion_table = new C.View.AsignacionTable({
                            el: $("#asignacion_left"),
                            collection: t
                        }), e.signacion = new C.View.AsignacionForm({
                            el: $("#asignacion_right"),
                            model: e.model,
                            collection: t,
                            asignacion_table: e.asignacion_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/cronograma/AsignacionTable.js", function(e, t, n, r, i, s) {
        C.View.AsignacionTable = Backbone.View.extend({
            name: "asignacion",
            headers: ["ID", "Año", "mes", "Mes" ],
            attrs: ["id", "año", "mes", "nombreMes" ],
            hidden_columns: [ "mes"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(t) {
                F.getOneFromModel("cronogramaImpuesto", t.id , function(i) {
                var msg={}
                i.forEach(function(ci){
                  msg[ci.impuesto.nombre+"_id"]=ci.id;
                  if(ci.vtoAsignacion){
                    msg[ci.impuesto.nombre]=moment(ci.vtoAsignacion).format('DD/MM/YYYY');
                  }
                })
                $.extend(t, msg);
                F.assignValuesToForm($(".asignacion_form"), t);
                })
              });
            },
            events: {
                "click .asignacion_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/cronograma/AsignacionForm.js", function(e, t, n, r, i, s) {
        C.View.AsignacionForm = Backbone.View.extend({
            name: "asignacion_form",
            title: "Carga de Asignacion",
            relations: {
                impuestos: null,
            },
            isCRUD: !0,
            buttons: {
                create: !0,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            initialize: function(e) {
              var e = this;
              //IMPRIMO
              //console.log(moment(n[s]).format("YYYY"));//"DD/MM/YYYY"
              //console.log(Number($(".asignacion_form").serializeObject().mes));
              F.getAllFromModel("impuesto", function(t) {
                var objeto={};
                var base={};
                objeto={mes:{type:'select_month', label:'Mes Del Vencimiento'}};
                $.extend(base, objeto);
                objeto={año:{type:'select_year', label:'Año Del Vencimiento'}};
                $.extend(base, objeto);
                t.forEach(function(impuesto){
                  var nombre = impuesto.nombre;
                  objeto[nombre+"_id"]={type:'hidden'};
                  objeto[nombre]={type:'datepicker', label:impuesto.nombre, force_label: !0};
                  $.extend(base, objeto);
                })
                e.fields=base;
                F.createForm(e, $("#asignacion_right"));
              })
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            },
            events: {
                "click .asignacion_form .BUTTON_cancel": "cancelAsignacion",
                "click .asignacion_form .BUTTON_create": "addAsignacion",
                "click .asignacion_form .BUTTON_save": "editAsignacion",
            },
            cancelAsignacion: function(){
              location.reload();
            },
            addAsignacion: function() {
              //////
              /*F.msgConfirm("¿Está seguro?",
              function(){
              })*/
              //////
                var e = this;
                if(($(".asignacion_form").serializeObject().mes != '')&&($(".asignacion_form").serializeObject().año != '')){
                  //AGREGO MI CONDICION
                    if(
                    //Mes
                    (Number($(".asignacion_form").serializeObject().mes) == Number(moment(n[s]).format("MM")) ||
                    Number($(".asignacion_form").serializeObject().mes) == Number(moment(n[s]).format("MM"))+1) &&
                    //Año
                       (Number($(".asignacion_form").serializeObject().año) == Number(moment(n[s]).format("YYYY")))
                       || (Number($(".asignacion_form").serializeObject().mes) == 1 &&
                       Number($(".asignacion_form").serializeObject().año) == Number(moment(n[s]).format("YYYY")) + 1)
                     )
                    {
                    var objetos= $(".asignacion_form").serializeObject();
                      $.ajax({
                            type: "POST",
                            url: "/asignacion",
                            data: $(".asignacion_form").serialize(),
                            success: function() {
                                F.msgOK("Asignacion creado exitosamente")
                                    this.asignacions = new C.Collection.Asignacions(null, {
                                  view: this
                                }), this.asignacions.fetch({
                                 success: function(t, n) {
                                   $("#asignacion_left").empty()
                                   e.asignacion_table = new C.View.AsignacionTable({
                                     el: $("#asignacion_left"),
                                     collection: t
                                   })
                                 }
                               });
                            }
                     })
                  }
                  else
                  {
                    F.msgError("No puede cargar. Revise el mes y año.");
                  }
               }else{
                  F.msgError("Los campos 'Año' y 'Mes' son OBLIGATORIOS");
               }
            },
            editAsignacion: function(){
                var e = this;
                if(($(".asignacion_form").serializeObject().mes != '')&&($(".asignacion_form").serializeObject().año != '')){
                  //MI CONDICION
                  if(
                     (Number($(".asignacion_form").serializeObject().año) == Number(moment(n[s]).format("YYYY"))
                   || Number($(".asignacion_form").serializeObject().año) == Number(moment(n[s]).format("YYYY"))-1)
                     || (Number($(".asignacion_form").serializeObject().mes) == 1 &&
                     Number($(".asignacion_form").serializeObject().año) == Number(moment(n[s]).format("YYYY")) + 1
                     && Number($(".asignacion_form").serializeObject().mes) == 12)
                   )
                   {
                  var objetos= $(".asignacion_form").serializeObject();
                    $.ajax({
                          type: "PUT",
                          url: "/asignacion/"+ e.getSelectionID(),
                          data: $(".asignacion_form").serialize(),
                          success: function() {
                              F.msgOK("Asignacion editado exitosamente")
                                  this.asignacions = new C.Collection.Asignacions(null, {
                                view: this
                              }), this.asignacions.fetch({
                               success: function(t, n) {
                                 $("#asignacion_left").empty()
                                 e.asignacion_table = new C.View.AsignacionTable({
                                   el: $("#asignacion_left"),
                                   collection: t
                                 })
                               }
                             });
                          }
                    })
                  }
                  else
                  {
                    F.msgError("No puede cargar. Revise el mes y año.");
                  }
                }else{
                   F.msgError("Los campos 'Año' y 'Mes' son OBLIGATORIOS");
                }
            }
        })
    }),
//CRONOGRAMA AuditarImpuesto
    e.define("/views/cronograma/AuditarImpuesto.js", function(e, t, n, r, i, s) {
        C.View.AuditarImpuesto = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.auditarImpuestos = new C.Collection.AuditarImpuestos(null, {
                    view: this
                }), this.auditarImpuestos.fetch({
                    success: function(t, n) {
                        e.auditarImpuesto_table = new C.View.AuditarImpuestoTable({
                            el: $("#auditarImpuesto_left"),
                            collection: t
                        }), e.auditarImpuesto_form = new C.View.AuditarImpuestoInfoCard({
                            el: $("#auditarImpuesto_right"),
                            model: e.model,
                            collection: t,
                            auditarImpuesto_table: e.auditarImpuesto_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/cronograma/AuditarImpuestoTable.js", function(e, t, n, r, i, s) {
        C.View.AuditarImpuestoTable = Backbone.View.extend({
            name: "auditarImpuesto",
            headers: ["ID", "Año", "mes", "Mes" , "Auditado" ],
            attrs: ["id", "año", "mes", "nombreMes", "auditado" ],
            hidden_columns: [ "mes"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null],
                aaSorting: [ [ 4, "desc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(t) {
                F.assignValuesToInfoCard($(".auditarImpuesto_infocard"), t);
                $(".auditarImpuesto_infocard").empty().append('<h3 class="formtitle"> Auditar Impuestos</h3>');
                $(".auditarImpuesto_infocard").append('<h3 align="right">'+t.nombreMes+"-"+t.año+"</h3><br />");
                if(t.auditado == 'Sin Auditar')
                  $(".auditarImpuesto_infocard ").append('<input type="button" class="BUTTON_proceed righty button" value="Auditar"/><br /><br />'),
                  $(".auditarImpuesto_infocard .BUTTON_proceed").on("click", function() {
                    F.msgConfirm("¿Está seguro de AUDITAR "+t.nombreMes+"-"+t.año+"?",
                    function(){
                      $.ajax({
                        type: "POST",
                        url: "/auditarImpuesto/"+ t.id,
                        success: function() {
                          F.msgOK("Los Impuestos han sido asignados a los Clientes")
          		            this.auditarImpuestos = new C.Collection.AuditarImpuestos(null, {
                            view: this
                          }), this.auditarImpuestos.fetch({
                            success: function(t, n) {
                              $("#auditarImpuesto_left").empty()
                              e.auditarImpuesto_table = new C.View.AuditarImpuestoTable({
                                el: $("#auditarImpuesto_left"),
                                collection: t
                              })
                            }
                          });
                        }
                      })
                    })
                  })
              });
            },
            events: {
                "click .auditarImpuesto_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/cronograma/AuditarImpuestoInfoCard.js", function(e, t, n, r, i, s) {
        C.View.AuditarImpuestoInfoCard = Backbone.View.extend({
            name: "auditarImpuesto_infocard",
            title: "Auditar Impuestos",
            initialize: function(e) {
              var e = this;
              F.createInfoCard(e, $("#auditarImpuesto_right"));
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            }
        })
    }),
//AsigPie
    e.define("/views/crud/AsigPie.js", function(e, t, n, r, i, s) {
        C.View.AsigPie = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.asigPies = new C.Collection.AsigPies(null, {
                    view: this
                }), this.asigPies.fetch({
                    success: function(t, n) {
                        e.asigPie_table = new C.View.AsigPieTable({
                            el: $("#asigPie_left"),
                            collection: t
                        }), e.asigPie_form = new C.View.AsigPieForm({
                            el: $("#asigPie_right"),
                            model: e.model,
                            collection: t,
                            asigPie_table: e.asigPie_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/crud/AsigPieTable.js", function(e, t, n, r, i, s) {
        C.View.AsigPieTable = Backbone.View.extend({
            name: "asigPie",
            headers: [ "ID", "Observación"],
            attrs: [ "id", "observacion" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null],
                aaSorting: [ [ 2, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".asigPie_form"), e);
                });
            },
            events: {
                "click .asigPie_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/crud/AsigPieForm.js", function(e, t, n, r, i, s) {
        C.View.AsigPieForm = Backbone.View.extend({
            name: "asigPie_form",
            title: "Detalle de Pie del E-Mail",
            fields: {
                observacion: {
                    label: "Observación",
                    check: "alpha",
                    type: "textarea",
                    attrs: {
                        style: "height:300px;"
                    }
                },
            },
            isCRUD: !0,
            buttons: {
                create: !1,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            initialize: function() {
                F.createForm(this);
            },
            events: {
                "click .asigPie_form .BUTTON_save": "editAsigPie",
            },
            getTable: function() {
                return this.options.asigPie_table;
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
            addAsigPie: function() {
                var e = this;
                if(($(".asigPie_form").serializeObject().observacion.replace(/\s/g, "") != '')){
                  $.ajax({
                        type: "PUT",
                        url: "/asigPie/"+this.getSelectionID(),
                        data: $(".asigPie_form").serialize(),
                        success: function() {
                            F.msgOK("Pie del E-Mail editado exitosamente")
  		                      this.asigPies = new C.Collection.AsigPies(null, {
                              view: this
                            }), this.asigPies.fetch({
                             success: function(t, n) {
                               $("#asigPie_left").empty()
                               e.asigPie_table = new C.View.AsigPieTable({
                                 el: $("#asigPie_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo es OBLIGATORIO");
               }
            },
            editAsigPie: function() {
                var e = this;
                if(($(".asigPie_form").serializeObject().observacion.replace(/\s/g, "") != '')){
                  $.ajax({
                        type: "PUT",
                        url: "/asigPie/"+this.getSelectionID(),
                        data: $(".asigPie_form").serialize(),
                        success: function() {
                            F.msgOK("Pie del E-Mail editado exitosamente")
  		                      this.asigPies = new C.Collection.AsigPies(null, {
                              view: this
                            }), this.asigPies.fetch({
                             success: function(t, n) {
                               $("#asigPie_left").empty()
                               e.asigPie_table = new C.View.AsigPieTable({
                                 el: $("#asigPie_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                $.ajax({
                        type: "PUT",
                        url: "/asigPie/"+this.getSelectionID(),
                        data: "&nbsp;",
                        success: function() {
                            F.msgOK("Pie del E-Mail editado exitosamente")
  		                      this.asigPies = new C.Collection.AsigPies(null, {
                              view: this
                            }), this.asigPies.fetch({
                             success: function(t, n) {
                               $("#asigPie_left").empty()
                               e.asigPie_table = new C.View.AsigPieTable({
                                 el: $("#asigPie_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }
            },
            delAsigPie: function() {
                var e = this;
                F.msgConfirm("¿Desea eliminar a este Pie de E-Mail?", function() {
                    $.ajax({
                        type: "POST",
                        url: "/asigPie/delete/"+e.getSelectionID(),
                        data: $(".asigPie_form").serialize(),
                        success: function() {
            		            this.asigPies = new C.Collection.AsigPies(null, {
                              view: this
                            }), this.asigPies.fetch({
                             success: function(t, n) {
                               $("#asigPie_left").empty(), $("#asigPie_right").empty(),
                               e.asigPie_table = new C.View.AsigPieTable({
                                 el: $("#asigPie_left"),
                                 collection: t
                               }), e.asigPie_form = new C.View.AsigPieForm({
                               el: $("#asigPie_right"),
                               model: e.model,
                               collection: t,
                               asigPie_table: e.asigPie_table
                               });
                             }
                           }), F.msgOK("El Pie de E-Mail ha sido eliminado");
                        }
                    });
                });
            }
        });
    }),
//gestAsignacion
    e.define("/views/gestCrono/GestAsignacion.js", function(e, t, n, r, i, s) {
        C.View.GestAsignacion = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.gestAsignacions = new C.Collection.GestAsignacions(null, {
                    view: this
                }), this.gestAsignacions.fetch({
                    success: function(t, n) {
                        e.gestAsignacion_table = new C.View.GestAsignacionTable({
                            el: $("#gestAsignacion_left"),
                            collection: t
                        }), e.gestAsignacion = new C.View.GestAsignacionInfoCard({
                            el: $("#gestAsignacion_right"),
                            model: e.model,
                            collection: t,
                            gestAsignacion_table: e.gestAsignacion_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/gestCrono/GestAsignacionTable.js", function(e, t, n, r, i, s) {
        C.View.GestAsignacionTable = Backbone.View.extend({
            name: "gestAsignacion",
            headers: [ "ID", "Año", "mes", "Mes" ],
            attrs: ["id", "año", "mes", "nombreMes" ],
            hidden_columns: [ "mes" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null ],
                aaSorting: [ [ 1, "desc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(t) {
                F.assignValuesToInfoCard($(".gestAsignacion_infocard"), t);
                $(".gestAsignacion_infocard").empty().append('<h3 class="formtitle"> Asignar Impuestos</h3>');
                $(".gestAsignacion_infocard").append('<h3 align="right">'+t.nombreMes+"-"+t.año+"</h3>");
                $(".gestAsignacion_infocard").append('<input type="button" style="border-style: solid; background-color: #FDC9A2" class="BUTTON_concluir righty button" value="Concluir " /><br />');
                $('.gestAsignacion_infocard .BUTTON_concluir').on('click', function() {
                  F.msgConfirm("¿Está seguro de Concluir "+t.nombreMes+"-"+t.año+"?",
                    function(){
                      $.ajax({
                        type: "POST",
                        url: "/auditarImpuesto/"+ t.id,
                        success: function() {
                          F.msgOK("Los Impuestos han sido asignados a los Clientes")
                          $("#gestAsignacion_left").empty()
                          e.gestAsignacion_table = new C.View.GestAsignacionTable({
                              el: $("#gestAsignacion_left"),
                              collection: t
                          })
                        }
                      })
                  })
                })
                var p;
                F.getAllFromModel("impuesto/filtrando/"+t.id, function(te) {
                  te.forEach(function(impuesto){
                    var checkbox = $('<input>', { type: 'checkbox', checked: e.matchea });
                    $(checkbox).on('click', function() {

                      if(this.checked){
                        F.msgConfirm("¿Está seguro de asignar este impuesto a los clientes?",function(){
                          $.ajax({
                            type: "POST",
                            url: "/gestAsignacion",
                            data:{
                                cronograma_id: t.id,
                                impuesto_id: impuesto.id,
                            },
                            success: function(res) {
                                if(res){
                                  F.msgOK("El Impuesto '"+impuesto.nombre+"' han sido asignados a los Clientes");
                                  setTimeout(function(){location.reload()}, 1e3 );
                                }else{
                                  F.msgError("El Impuesto '"+impuesto.nombre+"' aún no esta completamente cargado")
                                }
                            }
                          })
                        },function(){
                          //descheck!
                        })
                      }else{
                        F.msgError('No se puede deshacer');
                      }
                    })
                    p= $('<p>');
                    $(p).append('<span class="hidden" data-id="' + impuesto.id + '"></span>');
                    $(p).append(checkbox);
                    $(p).append('<span class="element_name">' + impuesto.nombre + '</span><br />');
                    $(".gestAsignacion_infocard").append(p)
                  })
                })
              });
            },
            events: {
                "click .gestAsignacion_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });


    }),
    e.define("/views/gestCrono/GestAsignacionInfoCard.js", function(e, t, n, r, i, s) {
        C.View.GestAsignacionInfoCard = Backbone.View.extend({
            name: "gestAsignacion_infocard",
            title: "Asignar Impuestos",
            initialize: function(e) {
              var e = this;
              F.createInfoCard(e, $("#gestAsignacion_right"));
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            }
        })
    }),
//gestAviso
    e.define("/views/gestCrono/GestAviso.js", function(e, t, n, r, i, s) {
        C.View.GestAviso = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.gestAvisos = new C.Collection.GestAvisos(null, {
                    view: this
                }), this.gestAvisos.fetch({
                    success: function(t, n) {
                        e.gestAviso_table = new C.View.GestAvisoTable({
                            el: $("#gestAviso_left"),
                            collection: t
                        }), e.gestAviso = new C.View.GestAvisoInfoCard({
                            el: $("#gestAviso_right"),
                            model: e.model,
                            collection: t,
                            gestAviso_table: e.gestAviso_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/gestCrono/GestAvisoTable.js", function(e, t, n, r, i, s) {
        C.View.GestAvisoTable = Backbone.View.extend({
            name: "gestAviso",
            headers: [ "ID", "Año", "mes", "Mes" ],
            attrs: ["id", "año", "mes", "nombreMes" ],
            hidden_columns: [ "mes" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null ],
                aaSorting: [ [ 1, "desc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(t) {
                F.assignValuesToInfoCard($(".gestAviso_infocard"), t);
                $(".gestAviso_infocard").empty().append('<h3 class="formtitle"> Avisar Impuestos</h3>');
                $(".gestAviso_infocard").append('<h3 align="right">'+t.nombreMes+"-"+t.año+"</h3><br />");
                var p;
                F.getAllFromModel("rubro", function(te) {
                  te.forEach(function(impuesto){
                    var checkbox = $('<input>', { type: 'checkbox', checked: e.matchea });
                    $(checkbox).on('click', function() {
                      if(this.checked){
                        F.msgConfirm("¿Está seguro de enviar el aviso a todos los Clientes?",function(){
                          $.ajax({
                            type: "POST",
                            url: "/gestAviso",
                            data:{
                                cronograma_id: t.id,
                                rubro_id: impuesto.id,
                            },
                            success: function(res) {
                              if(res)
                                F.msgOK("Se ha enviado el mail a los clientes con rubro '"+impuesto.nombre +"' ")
                            }
                          })
                        })
                      }else{
                        F.msgError('No se puede deshacer');
                      }
                    })
                    p= $('<p>');
                    $(p).append('<span class="hidden" data-id="' + impuesto.id + '"></span>');
                    $(p).append(checkbox);
                    $(p).append('<span class="element_name">' + impuesto.nombre + '</span><br />');
                    $(".gestAviso_infocard").append(p)
                  })
                })
              });
            },
            events: {
                "click .gestAviso_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/gestCrono/GestAvisoInfoCard.js", function(e, t, n, r, i, s) {
        C.View.GestAvisoInfoCard = Backbone.View.extend({
            name: "gestAviso_infocard",
            title: "Avisar Impuestos",
            initialize: function(e) {
              var e = this;
              F.createInfoCard(e, $("#gestAviso_right"));
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            }
        })
    }),
//gestAvisoPersonal
    e.define("/views/gestCrono/GestAvisoPersonal.js", function(e, t, n, r, i, s) {
        C.View.GestAvisoPersonal = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.gestAvisoPersonals = new C.Collection.GestAvisoPersonals(null, {
                    view: this
                }), this.gestAvisoPersonals.fetch({
                    success: function(t, n) {
                        e.gestAvisoPersonal_table = new C.View.GestAvisoPersonalTable({
                            el: $("#gestAvisoPersonal_left"),
                            collection: t
                        }), e.gestAvisoPersonal = new C.View.GestAvisoPersonalInfoCard({
                            el: $("#gestAvisoPersonal_right"),
                            model: e.model,
                            collection: t,
                            gestAvisoPersonal_table: e.gestAvisoPersonal_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/gestCrono/GestAvisoPersonalTable.js", function(e, t, n, r, i, s) {
        C.View.GestAvisoPersonalTable = Backbone.View.extend({
            name: "gestAvisoPersonal",
           headers: [ "id", "cliente_id", "IdCatedral", "Cuit", "Nombre","Comunicacion", "Contacto", "Clasificacion_id", "Clasificacion", "Comunicacion_id",  "Actividad_id", "Actividad",  "Telefono", "Celular", "Radio", "Email", "Empleados", "Observaciones", "cierre_id" ],
            attrs: [ "id", "cliente_id", "catedral", "cuit", "nombre", "comunicacion", "contacto",  "clasificacion_id", "clasificacion", "comunicacion_id","actividad_id", "actividad", "telefono", "celular", "radio", "email", "empleado", "observaciones", "cierre_id"],
            hidden_columns: [ "cliente_id", "cuit", "clasificacion_id", "comunicacion_id", "actividad_id", "telefono", "celular", "radio", "email", "clasificacion", "actividad", "empleado", "observaciones", "cierre_id"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [ 4, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(t) {
                F.assignValuesToInfoCard($(".gestAvisoPersonal_infocard"), t);
                $(".gestAvisoPersonal_infocard").empty().append('<h3 class="formtitle"> Avisar Deudas</h3><br /><p class="bold">Cliente:</p>'+t.nombre)
                $(".gestAvisoPersonal_infocard").append('<br /><input type="button" class="BUTTON_proceed righty button" value="Enviar" /><br /><br />');
                $('.gestAvisoPersonal_infocard .BUTTON_proceed').on('click', function() {
                  F.msgConfirm("¿Realmente desea Enviar el mail al cliente?", function() {
                    $.ajax({
                      type: "POST",
                      url: "/gestAvisoPersonal",
                      data:{
                          cliente_id: t.id,
                          cliente: t,
                      },
                      success: function(res) {
                        if(res)
                          F.msgOK("Se ha enviado el mail al cliente:"+t.nombre)
                      }
                    })
                  });
                })
              });
            },
            events: {
                "click .gestAvisoPersonal_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/gestCrono/GestAvisoPersonalInfoCard.js", function(e, t, n, r, i, s) {
        C.View.GestAvisoPersonalInfoCard = Backbone.View.extend({
            name: "gestAvisoPersonal_infocard",
            title: "Avisar Impuestos",
            initialize: function(e) {
              var e = this;
              F.createInfoCard(e, $("#gestAvisoPersonal_right"));
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            }
        })
    }),
//gestAvisoTest
    e.define("/views/gestCrono/GestAvisoTest.js", function(e, t, n, r, i, s) {
        C.View.GestAvisoTest = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.gestAvisoTests = new C.Collection.GestAvisoTests(null, {
                    view: this
                }), this.gestAvisoTests.fetch({
                    success: function(t, n) {
                        e.gestAvisoTest_table = new C.View.GestAvisoTestTable({
                            el: $("#gestAvisoTest_left"),
                            collection: t
                        }), e.gestAvisoTest = new C.View.GestAvisoTestInfoCard({
                            el: $("#gestAvisoTest_right"),
                            model: e.model,
                            collection: t,
                            gestAvisoTest_table: e.gestAvisoTest_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/gestCrono/GestAvisoTestTable.js", function(e, t, n, r, i, s) {
        C.View.GestAvisoTestTable = Backbone.View.extend({
            name: "gestAvisoTest",
            headers: [ "ID", "Año", "mes", "Mes" ],
            attrs: ["id", "año", "mes", "nombreMes" ],
            hidden_columns: [ "mes" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null ],
                aaSorting: [ [ 1, "desc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(t) {
                F.assignValuesToInfoCard($(".gestAvisoTest_infocard"), t);
                $(".gestAvisoTest_infocard").empty().append('<h3 class="formtitle"> Enviar Mail Ficticio</h3>');
                $(".gestAvisoTest_infocard").append('<h3 align="right">'+t.nombreMes+"-"+t.año+"</h3><br />");
                var p;
                F.getAllFromModel("rubro", function(te) {
                  te.forEach(function(impuesto){
                    var checkbox = $('<input>', { type: 'checkbox', checked: e.matchea });
                    $(checkbox).on('click', function() {
                      if(this.checked){
                          $.ajax({
                            type: "POST",
                            url: "/gestAvisoTest",
                            data:{
                                cronograma_id: t.id,
                                rubro_id: impuesto.id,
                            },
                            success: function(res) {
                              if(res)
                                F.msgOK("Se ha enviado el mail ficticio a 2014estudiocontable@gmail.com")
                            }
                          })
                      }
                    })
                    p= $('<p>');
                    $(p).append('<span class="hidden" data-id="' + impuesto.id + '"></span>');
                    $(p).append(checkbox);
                    $(p).append('<span class="element_name">' + impuesto.nombre + '</span><br />');
                    $(".gestAvisoTest_infocard").append(p)
                  })
                })
              });
            },
            events: {
                "click .gestAvisoTest_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/gestCrono/GestAvisoTestInfoCard.js", function(e, t, n, r, i, s) {
        C.View.GestAvisoTestInfoCard = Backbone.View.extend({
            name: "gestAvisoTest_infocard",
            title: "Enviar Mail Ficticio",
            initialize: function(e) {
              var e = this;
              F.createInfoCard(e, $("#gestAvisoTest_right"));
            },
            getSelectionID: function() {
                return parseInt($(".selection_id").val());
            }
        })
    }),
//OT
  //OTTAREAALL
    e.define("/views/ot/OtTareaAll.js", function(e, t, n, r, i, s) {
        C.View.OtTareaAll = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                e.otTareaAlls = new C.Collection.OtTareaAlls(null, {
                    view: this
                }), e.otTareaAlls.fetch({
                    success: function(t, n) {
                        e.otTareaAll_table = new C.View.OtTareaAllTable({
                            el: $("#otTareaAll_left"),
                            collection: t
                        }), e.otTareaAll_form = new C.View.OtTareaAllForm({
                            el: $("#otTareaAll_right"),
                            model: e.model,
                            collection: t,
                            otTareaAll_table: e.otTareaAll_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/ot/OtTareaAllTable.js", function(e, t, n, r, i, s) {
        C.View.OtTareaAllTable = Backbone.View.extend({
            name: "otTareaAll",
            headers: [ "ID", "Número", "Buscar", "fechaCompleta", "fechaVencimiento", "Título", "Descripción", "observacion", "conclusion", "tiempoEstimado", "tiempoInsumido", "Empleado" , "Area" ],
            attrs: [ "id", "ot", "ot_numero", "fechaCompleta", "fechaVencimiento", "nombre", "descripcion", "observacion", "conclusion", "tiempoEstimado", "tiempoInsumido", "empleado", "area" ],
            hidden_columns: [  "ot_numero",/* "fechaCompleta", */"fechaVencimiento", "observacion", "conclusion", /*"tiempoEstimado", "tiempoInsumido"*/ ],
            data: null,
            datatableOptions: {
                aoColumns: null,
                aaSorting: [[ 1, "desc" ]],
                iDisplayLength: 13, //antes: 10
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(e) {
                  F.assignValuesToForm($(".otTareaAll_form"), e);
              });
            },
            events: {
              "click .otTareaAll_table tr": "selectRow"
            },
            selectRow: function(e) {
              this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/ot/OtTareaAllForm.js", function(e, t, n, r, i, s) {
      C.View.OtTareaAllForm = Backbone.View.extend({
            name: "otTareaAll_form",
            title: "Datos de la Tarea",
            fields: {
                ot: {
                    label: "O/T Nº",
                    force_label: !0,
                    value: "Indefinido",
                    attrs: {
                        disabled: "disabled",
                        style: "margin-top:-1em 0 1em;"
                    }
                },
                fechaCompleta: {
                    label: "Fecha de Finalización",
                    type: "datepicker",
                    force_label: !0,
                },
                fechaVencimiento: {
                    label: "Fecha de Vencimiento",
                    type: "datepicker",
                    force_label: !0,
                },
                nombre: {
                  label: "Título",
                },
                descripcion: {
                  label: "Descripción",
                  type: "textarea",
                },
                observacion: {
                  label: "Observación",
                  type: "textarea",
                },
                conclusion: {
                  label: "Conclusión",
                  type: "textarea",
                },
                tiempoEstimado: {
                  label: "T/Estimado",
                  force_label: !0,
                },
                tiempoInsumido: {
                  label: "T/Insumido",
                  force_label: !0,
                },
            },
            buttons: {
                create: !1,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            isCRUD: !0,
            initialize: function() {
              var e = this;
              F.createForm(e)
            },
            events: {
                "click .otTareaAll_form .BUTTON_save": "editOtTareaAll"
            },
            getTable: function() {
                return this.options.ot_table;
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
            addTableRow: function(e) {
                var t = F.JSONValuesToArray($(".ot_form").serializeObject());
                t.unshift(e), this.getDataTable().fnAddData(t);
            },
            editTableRow: function(e) {},
            editOtTareaAll: function() {
              var e = this;
              if(C.Session.getUser().rol_id >= 3){
                //revisar Formato
                if(($(".otTareaAll_form").serializeObject().fechaVencimiento != 'Sin F/Finalización')
                && ($(".otTareaAll_form").serializeObject().fechaCompleta != 'Sin F/Vencimiento')
                && ($(".otTareaAll_form").serializeObject().nombre != 'Sin Nombre')
                && ($(".otTareaAll_form").serializeObject().tiempoEstimado != 'Sin T/Estimado')
                ){
                  if($(".otTareaAll_form").serializeObject().tiempoInsumido != 'Sin T/Insumido'){
                  //ERA UNA OT COMPLETADA
                    if(($(".otTareaAll_form").serializeObject().tiempoEstimado[2] == ':')
                    && ($(".otTareaAll_form").serializeObject().tiempoInsumido[2] == ':')
                    ){
                      $.ajax({
                        type: "PUT",
                        url: "/otTarea/editCompleta/"+e.getSelectionID(),
                        data: $(".otTareaAll_form").serialize(),
                        success: function() {
                          F.msgOK("Tarea editada exitosamente");
                          setTimeout(function(){location.reload()},1e3)
                        }
                      })
                    }else{
                      F.msgError('Respete el formato de HH:SS en el tiempo estimado y el insumido')
                    }
                  }else{
                    console.log($(".otTareaAll_form").serializeObject())
                    console.log($(".otTareaAll_form").serializeObject().tiempoEstimado)
                    console.log($(".otTareaAll_form").serializeObject().tiempoEstimado[2])
                    if($(".otTareaAll_form").serializeObject().tiempoEstimado[2] == ':'){
                     //ERA UNA OT INCOMPLETA
                      $.ajax({
                        type: "PUT",
                        url: "/otTarea/editIncompleta/"+e.getSelectionID(),
                        data: $(".otTareaAll_form").serialize(),
                        success: function() {
                          F.msgOK("Tarea editada exitosamente");
                          setTimeout(function(){location.reload()},1e3)
                        }
                      })
                    }else{
                      F.msgError('Respete el formato de HH:SS en el tiempo estimado')
                    }
                  }
               }else{
                  F.msgError('Los campos Nombre, Fecha de Vencimiento, Fecha de Culminación y Tiempo Estimado son obligatorios');
               }
              }else{
                F.msgError('No tiene los permisos Necesarios')
              }
            }
        });
    }),
  //ADMIN
    e.define("/views/ot/OtAdmin.js", function(e, t, n, r, i, s) {
        C.View.OtAdmin = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                e.ots = new C.Collection.Ots(null, {
                    view: this
                }), e.ots.fetch({
                    success: function(t, n) {
                        e.ot_table = new C.View.OtAdminTable({
                            el: $("#ot_left"),
                            collection: t
                        }), e.ot_options = new C.View.OtAdminOptions({
                                el: $("#ot_left .fg-toolbar")[0],
                                ot_table: e.ot_table,
                                ot_form: n
                        }),
                        /*$("#right").bind("ot_form_loaded", function(t, n) {
                            $(".right_options").remove(), e.ot_options = new C.View.OtAdminOptions({
                                el: $("#ot_left .fg-toolbar")[0],
                                ot_table: e.ot_table,
                                ot_form: n
                            });
                        }), */
                e.ot_form = new C.View.OtAdminForm({
                            el: $("#ot_right"),
                            model: e.model,
                            collection: t,
                            ot_table: e.ot_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/ot/OtAdminConcludeForm.js", function(e, t, n, r, i, s) {
        C.View.OtAdminConcludeForm = Backbone.View.extend({
            name: "ot_conclude_form",
            initialize: function() {
                this.render();
            },
            render: function() {
                var e = this;
                $("#ot_conclude_window").length || ($(this.el).append(this.template()), $("#ot_conclude_window .BUTTON_cancel").on("click", function() {
                    e.cancelConcludeOt();
                }), $("#ot_conclude_window .BUTTON_proceed").on("click", function() {
                    e.performConcludeOt();
                })), $.blockUI({
                    message: $("#ot_conclude_window"),
                    css: {
                        top: "25%",
                        left: "30%",
                        width: "38%",
                        border: "none",
                        padding: "1%",
                        cursor: "default"
                    }
                });
            },
            template: function() {
                $("body").append('<div id="ot_conclude_window" style="display:none;"><h1>¿Está seguro de querer concluir la O/T Nº '+this.options.ot_number+"?</h1>" + "<br /><br />" + '<p class="rednote">Esta operación es IRREVERSIBLE (OT Nº'+this.options.ot_number+')</p>' + "<br /><br />" + "<p>En caso afirmativo redacte una observación final que recibirá el Cliente:</p>" + "<br /><br />" + '<form id="conclude_ot_form">' + "<br /><br />" +'Observaciones<br /><textarea name="observation" style="width:100%; height:50px;"></textarea>'+ "</form>" + "<br /><br />" +
                '<input type="button" class="BUTTON_cancel lefty button" value="Cancelar" />'+
                '<input type="button" class="BUTTON_proceed righty button" value="Proceder" />' + "</div>");
            },
            cleanModals: function(e) {
                $.unblockUI(), window.setTimeout(function() {
                    $("#ot_conclude_window").remove(), e && e();
                }, 1e3);
            },
            performConcludeOt: function() {
                if($("#conclude_ot_form").serializeObject().observation != ''){
                  //ACA LIMITA A 6000 CARACTERES
                  if($("#conclude_ot_form").serializeObject().observation.length <= 6000){
                    $.ajax({
                      type: "POST",
                      url: "/ot/conclude/" + this.options.ot_number,
                      data: $("#conclude_ot_form").serialize(),
                      success: function(n) {
                      	if(n){
      		                F.msgOK("La O/T ha sido concluída");
      		                setTimeout(function(){location.reload()}, 1e3);
      		              }else{
      		                F.msgError("La O/T tiene Tareas Pendientes");
      		                setTimeout(function(){location.reload()}, 1e3);
      		              }
                      }
                    });
                  }else{
                    F.msgError('Demasiados caracteres (más de 6000) si cree que es necesario ampliar comuníquese con el administrador')
                  }
                }else{
                    F.msgError('El campo observación es obligatorio')
                }
            },
            cancelConcludeOt: function() {
                this.cleanModals();
            }
        });
    }), e.define("/views/ot/OtAdminTable.js", function(e, t, n, r, i, s) {
        C.View.OtAdminTable = Backbone.View.extend({
            name: "ot",
            headers: [ "ID", "Número", "prioridad", "Prioridad", "estado", "cliente_id", "Cliente", "Ingreso", "Vencimiento", "plan_id", "notificarCliente", "honorarios",  "coordinador", "Título", "descripcion", "conclusion",  "comunicacion_id", "oc_id", "ocs", "reservado", "Vidente", "Última", "juridica", "Creada"],
            attrs: [ "id", "numero", "prioridad", "com", "estado", "cliente_id", "clienteNombre", "ingreso", "fechaVencimiento", "plan_id", "notificarCliente", "honorarios",  "coordinador", "titulo", "descripcion", "conclusion",  "comunicacion_id", "oc_id", "ocs", "reservado", "vidente", "ultima", "juridica", "creada"],
            hidden_columns: [  "prioridad", "estado", "cliente_id",  "plan_id", "notificarCliente", "honorarios",  "coordinador", "descripcion", "conclusion", "comunicacion_id" , "oc_id", "ocs", "reservado", "juridica" ],
            data: null,
            datatableOptions: {
                aoColumns: null,
                aaSorting: [ [ 1, "desc" ] ],
            },
            initialize: function() {
              this.data = this.options.collection, F.createDataTable(this, function(e) {
                  F.assignValuesToForm($(".ot_form"), e);
              });
            },
            events: {
              "click .ot_table tr": "selectRow"
            },
            selectRow: function(e) {
              this.selected_row = $(e.currentTarget), $("#ot_left .ot_conclude").attr("disabled", !1);
            }
        });
    }), e.define("/views/ot/OtAdminForm.js", function(e, t, n, r, i, s) {
        C.View.OtAdminForm = Backbone.View.extend({
            name: "ot_form",
            title: "Datos de la Orden de Trabajo",
            fields: {
                numero: {
                    label: "O/T Nº",
                    force_label: !0,
                    value: null,
                    attrs: {
                        disabled: "disabled",
                        style: "margin-top:-1em 0 1em;"
                    }
                },
                cliente_id: {
                    label: "Cliente",
                    type: "select"
                },
                ingreso:{
                    label: "Fecha Ingreso",
                    attrs: {
                      disabled: "disabled",
                    },
                },
                oc_id: {
                    label: "OC(s)",
                    type: "selectmultiple",
                    force_label: !0,
                },
                ocs: {
                    force_label: !0,
                  label: "Titulos de las OC(s) seleccionadas",
                  type: "textarea",
                  attrs: {
                        disabled: "disabled",
                    }
                },
                fechaVencimiento: {
                    label: "Fecha de Vencimiento",
                    type: "datepicker",
                    force_label: !0,
                },
                plan_id: {
                    label: "Plan de Tareas (inicial/tentativo)",
                    type: "select"
                },
                comunicacion_id: {
                    label: "Comunicacion",
                    type: "select"
                },
                notificarCliente: {
                    label: "Notificar eventos al cliente",
                    type: "select_yn",
//                    default_value: "n"
                },
                honorarios: {
                    label: "Generará honorarios?",
                    type: "select_yn",
                    default_value: "n"
                },
                prioridad: {
                    label: "Prioridad",
                    type: "select_14",
//                    default_value: "3"
                },
                juridica: {
                    label: "OT Jurídica",
                    type: "select_yn",
                    default_value: "n"
                },
                coordinador: {
                    label: "SÓLO la puede concluir el Coordinador?",
                    type: "select_yn",
                    default_value: "n"
                },
                reservado: {
                    label: "Reservado",
                    type: "select_yn",
                    default_value: "n"
                },
                titulo: {
                  label: "Título estimativo del trabajo a realizar",
                },
                descripcion: {
                  label: "Descripción (explicación de que se debe hacer para que lo pueda revisar el cliente)",
                  type: "textarea",
                  attrs: {
                        style: "height:150px;"
                    }
                },
            },
            buttons: {
                create: !0,
                save: !0,
                cancel: !0,
                "delete": !1
            },
            isCRUD: !0,
            relations: {
                clientes: null,
                plans: null,
                comunicacions: null,
                ocs: null,
            },
            initialize: function() {
              var e = this;
              F.getOtNumero("ot",function(t) {
                e.fields.numero.value = t.maxi, F.getAllFromModel("cliente/nombre", function(t) {
                  e.relations.clientes = t, F.getAllFromModel("plan", function(t) {
                    e.relations.plans = t, F.getAllFromModel("comunicacion", function(t) {
                      e.relations.comunicacions = t, F.getAllFromModel("oc/activa", function(t) {
                        e.relations.ocs = t, F.createForm(e)
                      })
                    })
                  });
                });
              });
            },
            events: {
                "click .ot_form .BUTTON_create": "addOt",
                "click .ot_form .BUTTON_save": "editOt"
            },
            getTable: function() {
                return this.options.ot_table;
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
            addTableRow: function(e) {
                var t = F.JSONValuesToArray($(".ot_form").serializeObject());
                t.unshift(e), this.getDataTable().fnAddData(t);
            },
            editTableRow: function(e) {},
            addOt: function() {
              var e = this;
              if($(".ot_form").serializeObject().cliente_id != ''
              && $(".ot_form").serializeObject().fechaVencimiento != ''
              //&& ($(".ot_form").serializeObject().plan_id != '')
              && ($(".ot_form").serializeObject().prioridad != '')
              && ($(".ot_form").serializeObject().comunicacion != '')
              ){
                $.ajax({
                  type: "POST",
                  url: "/ot/",
                  data: $(".ot_form").serialize(),
                  success: function(model,res,options) {
                    F.msgOK("O/T creada exitosamente");
                    console.log(model)
                    setTimeout(function(){location.reload()},1e3)
                  }
               })
             }else{
                F.msgError('Los campos cliente, fecha de Vencimiento , prioridad y comunicación son obligatorios');
             }
            },
            editOt: function() {
              var e = this;
              if($(".ot_form").serializeObject().cliente_id != ''
              && $(".ot_form").serializeObject().fechaVencimiento != ''
              //&& ($(".ot_form").serializeObject().plan_id != '') //esto estaba comentado
              && ($(".ot_form").serializeObject().prioridad != '')
              && ($(".ot_form").serializeObject().comunicacion != '')
              ){
                $.ajax({
                  type: "PUT",
                  url: "/ot/"+e.getSelectionID(),
                  data: $(".ot_form").serialize(),
                  success: function(mensaje,res,options) {

                    //Agrego condicion para que avise si tiene tareas la OT
                    console.log(mensaje[0].mensaje);
                    if(mensaje[0].mensaje)
                    {
                      F.msgOK("O/T editada exitosamente");
                      setTimeout(function(){location.reload()},1e3);
                    }
                    else
                    {
                      F.msgConfirm("La OT que esta por editar tiene tareas asignadas. ¿Desea continuar?", function(){
                        F.msgOK("O/T editada exitosamente");
                        setTimeout(function(){location.reload()},1e3);
                       });
                    }
                  }
                })
             }else{
                F.msgError('Los campos cliente, fecha de Vencimiento, prioridad y comunicación son obligatorios');
             }
            }
        });
    }), e.define("/views/ot/OtAdminOptions.js", function(e, t, n, r, i, s) {
        C.View.OtAdminOptions = Backbone.View.extend({
            initialize: function() {
                this.render();
            },
            render: function() {
                return $(this.el).append(this.template()), this;
            },
            template: function() {
                var e = $("<div>", {
                    "class": "right_options"
                });
                return $(e).append($("<input>", {
                    type: "button",
                    "class": "ot_conclude",
                    value: "Concluir O/T",
                    style: "background-color: #F3F5A6",
                    disabled: "disabled"
                })), e;
            },
            events: {
                "click #ot_left .ot_conclude": "concludeOt"
            },
            getForm: function() {
                return this.options.ot_form;
            },
            getTable: function() {
                return this.options.ot_table;
            },
            getSelectedRow: function() {
                return this.options.ot_table.selected_row;
            },
            concludeOt: function() {
                var e = this, t = $(".ot_table"), n = F.getDataTableSelection(t)[0], r = $(t).dataTable().fnGetData(n)[0], i = $(".ot_table").dataTable().fnGetData(n)[1];
                var coordinador = $(".ot_table").dataTable().fnGetData(n)[10]
                if(C.Session.getUser().rol_id >= 3){
                  if(C.Session.getUser().rol_id == 4){
                   F.msgConfirm("¿Realmente desea concluir la Orden de Trabajo Nº  "+i+"?", function(){
                      new C.View.OtAdminConcludeForm({
                          el: $("body"),
                          ot_number: i,
                      });
                    });
                  }else{
                    if(coordinador == 1){
                      if(C.Session.getUser().area_id == 4){
                        F.msgConfirm("¿Realmente desea concluir la Orden de Trabajo Nº "+i+"?",function(){
                          new C.View.OtAdminConcludeForm({
                              el: $("body"),
                              ot_number: i,
                          });
                        });
                      }else{
                        F.msgError("No tiene los permisos necesarios")
                      }
                    }else{
                      F.msgConfirm("¿Realmente desea concluir la Orden de Trabajo Nº "+i+"?", function(){
                        new C.View.OtAdminConcludeForm({
                            el: $("body"),
                            ot_number: i,
                        });
                      });
                    }
                  }
                }else{
                  F.msgError("No tiene los permisos necesarios")
                }
            }
        });
    }),
    e.define("/views/ot/OtHistoryOptions.js", function(e, t, n, r, i, s) {
        C.View.OtHistoryOptions = Backbone.View.extend({
            initialize: function() {
                this.render();
            },
            render: function() {
                return $(this.el).append(this.template()), this;
            },
            template: function() {
                var e = $("<div>", {
                    "class": "right_options"
                });
                return $(e).append($("<input>", {
                    type: "button",
                    "class": "ot_desconclude",
                    value: "ReHabilitar O/T",
                    disabled: "disabled",
                    title: "Vuelve la OT a la pantalla de seguimiento y administracion, como si nunca se hubiera concluido."
                })), e;
            },
            events: {
                "click #ot_left .ot_desconclude": "desconcludeOt"
            },
            getForm: function() {
                return this.options.ot_form;
            },
            getTable: function() {
                return this.options.ot_table;
            },
            getSelectedRow: function() {
                return this.options.ot_table.selected_row;
            },
            desconcludeOt: function() {
              var e = this, t = $(".ot_table"), n = F.getDataTableSelection(t)[0], r = $(t).dataTable().fnGetData(n)[0], i = $(".ot_table").dataTable().fnGetData(n)[1];
              if(C.Session.getUser().rol_id >= 3){
                F.msgConfirm("¿Realmente desea rehabilitar la Orden de Trabajo Nº "+r+"?", function(){
                  $.ajax({
                    type: "POST",
                    url: "/ot/desconclude/" +r,
                    success: function(n) {
                      F.msgOK("La O/T ha sido desConcluída");
                      setTimeout(function(){location.reload()}, 1e3);
                    }
                  })
                });
              }else
                F.msgError("No tiene los permisos necesarios")
            }
        });
    }),
  //AUDIT
    e.define("/views/ot/OtAudit.js", function(e, t, n, r, i, s) {
        C.View.OtAudit = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.ots = new C.Collection.Ots(null, {
                    view: this
                }), this.ots.fetch({
                    success: function(t, n) {
                        e.collection = t, $.ajax({
                            type: "GET",
                            url: "/usuario/currentAreaId",
                            success: function(t) {
                                e.area_id = t.area_id, e.render();
                            }
                        });
                    }
                });
            },
            render: function(e) {
                var t = this;
                this.ot_table = new C.View.OtAuditTable({
                    el: $("#ot_left"),
                    collection: this.collection,
                    open_ot_number_on_start: this.options.open_ot_number_on_start,
                }), $("#right").bind("ot_infocard_loaded", function(e, n) {
                    $(".right_options").remove(), t.ot_options = new C.View.OtAuditOptions({
                        el: $("#ot_left .fg-toolbar")[0],
                        ot_table: t.ot_table,
                        ot_infocard: n
                    });
                }), this.ot_infocard = new C.View.OtAuditInfoCard({
                    el: $("#ot_right"),
                    model: this.model,
                    collection: this.collection,
                    ot_table: this.ot_table
                });
            }
        });
    }), e.define("/views/ot/OtAuditAddTarea.js", function(e, t, n, r, i, s) {
        C.View.OtAuditAddTarea = Backbone.View.extend({
            name: "ot_add_tarea_window",
            empleados: null,
            areas: null,
            initialize: function() {
              var e = this;
              console.log(e.options);
              $(document).bind("empleados_loaded", function(t) {
                $(document).bind("areas_loaded", function() {
                  e.render();
                }), e.getAreas();
              }), e.getEmpleados();
            },
            getAreas: function() {
                var e = this;
                $.ajax({
                    type: "GET",
                    url: "/area",
                    success: function(t) {
                        e.areas = t, $(document).trigger("areas_loaded");
                    }
                });
            },
            getEmpleados: function() {
                var e = this;
                $.ajax({
                    type: "GET",
                    url: "/empleado",
                    success: function(t) {
                        e.empleados = t, $(document).trigger("empleados_loaded");
                    }
                });
            },
            render: function() {
                var e = this;
                $("#ot_add_tarea_window").length || (this.template(), $("#ot_add_tarea_window .BUTTON_cancel").on("click", function() {
                    e.cancelAddTarea();
                }), $("#ot_add_tarea_window .BUTTON_proceed").on("click", function() {
                    e.performAddTarea();
                })), $.blockUI({
                    message: $("#ot_add_tarea_window"),
                    css: {
                        top: "15%",
                        left: "30%",
                        width: "38%",
                        border: "none",
                        padding: "1%",
                        cursor: "default"
                    }
                });
            },
            template: function() {
                $("body").append('<div id="ot_add_tarea_window" style="display:none; overflow: auto; height: 500px"><h1 class="bold">Ingrese los datos de la nueva Tarea:</h1><br /><br /><div style="overflow: auto"><form id="add_tarea_ot_form1" ><label for="nombre">Nombre</label><input type="text" name="nombre" /><label for="descripcion">Descripción</label><textarea name="descripcion" style="height:100px;"></textarea><label for="pos">Posición:</label><input type="text" name="posicion"/><label for="tie">Tiempo Estimado:</label><input type="tie" name="tiempoEstimado" placeholder="HH:MM" size="5" /><br /><form></div><br /><br />'+'<input type="button" class="BUTTON_cancel lefty button"  value="Cancelar" />'+
                	'<a href= "'+'http://'+window.location.hostname+":3001"+'" class="BUTTON_scheduler center button" target="_blank">Calendario</a>'+
                	'<input type="button" class="BUTTON_proceed righty button" value="Agregar Tarea" /></div><br /><br /><br /><br />'),
                          $("#add_tarea_ot_form1").append('Vencimiento:<br /><input type="date" name="vto">'),
                          $("#add_tarea_ot_form1").append(this.buildEmpleadosList("empleado_id")[0], this.buildAreasList("area_id")[0], this.buildHeader()),
                          $(".button").button();
              //Imprimo
              //console.log($("#ot_right"));
              //console.log(String($("#add_tarea_ot_form1")[0].vto.value));
              //console.log($("#add_tarea_ot_form1").serializeObject().vto[0]);
              //console.log("Ahora: "+moment(n[s]).format("YYYY-MM-DD"));

            },
            buildEmpleadosList: function(e) {
                var t = $("<select>", {
                    name: e
                });
                return $(t).append($("<option>", {
                    value: 0
                }).text("Seleccione el Empleado...")), _.each(this.empleados, function(e) {
                    $(t).append($("<option>", {
                        value: e.id
                    }).text(e.name));
                }), t;
            },
            buildHeader: function(e) {
             var ot_numero = F.getDataTableSelection($(".ot_table"))[0].innerText.split("	")[0];
             if(ot_numero.indexOf("Ot_") > -1){//ot_numero[0]=='O'
                ot_numero = ot_numero.replace(/Ot_*/,'')
             }
             $.ajax({
                type: "GET",
                url: "/ot/byNumero/"+ot_numero,//F.getDataTableSelection($(".ot_table"))[0].innerText.split("	")[0],
                success: function(t) {
                  $("#add_tarea_ot_form1").append('<span style="font-weight: bold;">Título: </span>'+t.titulo+'<br /><span style="font-weight: bold;">Descripción: </span>'+t.descripcion+'<br /> <span style="font-weight: bold;"> Vto: </span>'+t.vto);
                }
              })
              $.ajax({
                type: "GET",
                url: "/otTarea/byOt/"+ot_numero,
                success: function(t) {
                  if($.isArray(t)){
                    $("#add_tarea_ot_form1").append('<br /><span align="center" style="font-weight: bold;">Tareas:</span><br />')
                    t.forEach(function(q){
                       $("#add_tarea_ot_form1").append(q.nombre+'<br />');
                    })
                  }
                }
              })
            },
            buildAreasList: function(e) {
                var t = $("<select>", {
                    name: e
                });
                return $(t).append($("<option>", {
                    value: 0
                }).text("Seleccione el Área...")), _.each(this.areas, function(e) {
                    $(t).append($("<option>", {
                        value: e.id
                    }).text(e.nombre));
                }), t;
            },
            cleanModals: function(e) {
                $.unblockUI(), window.setTimeout(function() {
                    $("#ot_add_tarea_window").remove(), e && e();
                }, 1e3);
            },
            performAddTarea: function() {
              //Agrego-imprimo
              var fech =  F.getDataTableSelection($(".ot_table"))[0].innerText.split("	")[4];//
              var aanio = Number(fech[0]+fech[1]+fech[2]+fech[3]);
              var mmes = Number(fech[5]+fech[6]);
              var ddia = Number(fech[8]+fech[9]);
              /*console.log("Dia: "+ddia);
              console.log("Mes: "+mmes);
              console.log("Año: "+aanio);*/
              //FIn agrego
              var ann = Number($("#add_tarea_ot_form1").serializeObject().vto[0]+$("#add_tarea_ot_form1").serializeObject().vto[1]+$("#add_tarea_ot_form1").serializeObject().vto[2]+$("#add_tarea_ot_form1").serializeObject().vto[3]);
              var mess = Number($("#add_tarea_ot_form1").serializeObject().vto[5]+$("#add_tarea_ot_form1").serializeObject().vto[6]);
              var diaa = Number($("#add_tarea_ot_form1").serializeObject().vto[8]+$("#add_tarea_ot_form1").serializeObject().vto[9]);
              //CONDICION AGREGAR TAREA
                if(
                ($("#add_tarea_ot_form1").serializeObject().nombre!='')
                && ($("#add_tarea_ot_form1").serializeObject().empleado_id!='0')
                && ($("#add_tarea_ot_form1").serializeObject().tiempoEstimado[2]==':')
                ){
                  //MI CONDICION
                  if(fech == "" || ((ann == aanio) && (mess <= mmes) && (diaa <= ddia))

                  ){
                    this.options.addNewTarea({
                        data: $("#add_tarea_ot_form1").serializeObject(),
                    }, this.cleanModals);
                  }
                  else
                  {
                    F.msgError('La fecha que ingresó es posterior a la fecha de vencimiento.');
                  }
                }else{
                 F.msgError('El campo "Nombre", el empleado responsable y el tiempo estimado (HH:MM)son OBLIGATORIOS')
                }
            },
            cancelAddTarea: function() {
                this.cleanModals();
            }
        });
    }), e.define("/views/ot/OtAuditToggleTareaState.js", function(e, t, n, r, i, s) {
        C.View.OtAuditToggleTareaState = Backbone.View.extend({
            name: "ot_toggle_tarea_state",
            employees: null,
            initialize: function() {
                if (!this.options.currentTareaState) {
                    var e = this;
                    e.render(this.options.idsat);
                } else this.performToggleState();
            },
            getEmployees: function() {
                var e = this;
                $.ajax({
                    type: "GET",
                    url: "/empleado",
                    success: function(t) {
                        e.employees = t, $(document).trigger("employees_loaded");
                    }
                });
            },
            template: function(a) {
                var rta= null;
                if(a){
                 rta = '<div id="ot_toggle_tarea_state_windowq" style="display:none; max-height:700px; overflow: auto"><h1 class="bold">Ingrese los datos pertinentes:</h1><br /><br /><div><form id="ot_toggle_tarea_form1" >'+
                    '<label for="obsInt">Observación:</label>'+
                    '<textarea name="obsInt" style="height:100px;"></textarea>'+
                    '<label for="obs">Observación al Cliente:</label>'+
                    '<textarea name="obs" style="height:100px;"></textarea>'+
                    '<label for="tie">Tiempo Insumido:</label>'+
                    '<input type="tie" name="tiempo" placeholder="HH:MM" size="5" />'+
                  '<form></div><br /><br /><input type="button" class="BUTTON_cancel lefty button" value="Cancelar" /><input type="button" class="BUTTON_proceed righty button" value="Completar Tarea" /><input type="button" class="BUTTON_proceed_job righty button" value="Continuar Trabajando" /></div>'
                }else{
                 rta ='<div id="ot_toggle_tarea_state_windowq" style="display:none; max-height:700px; overflow: auto"><h1 class="bold">Ingrese los datos pertinentes:</h1><br /><br /><div><form id="ot_toggle_tarea_form1" >'+
                    '<label for="obsInt">Observación:</label>'+
                    '<textarea name="obsInt" style="height:100px;"></textarea>'+
                    '<label for="tie">Tiempo Insumido:</label>'+
                    '<input type="tie" name="tiempo" placeholder="HH:MM" size="5" />'+
                  '<form></div><br /><br /><input type="button" class="BUTTON_cancel lefty button" value="Cancelar" /><input type="button" class="BUTTON_proceed righty button" value="Completar Tarea" /><input type="button" class="BUTTON_proceed_job righty button" value="Continuar Trabajando" /></div>'
                }
                $("body").append(rta),$(".button").button()

            },
            render: function(m) {
                var e = this;
                F.getOtCliente(m, function(a){
                  $("#ot_toggle_tarea_state_windowq").length || e.template(a)
                  , $("#ot_toggle_tarea_state_windowq .BUTTON_cancel").on("click", function() {
                      e.cancelToggleState();
                  }), $("#ot_toggle_tarea_state_windowq .BUTTON_proceed").on("click", function() {
                      e.performToggleState();
                  }), $("#ot_toggle_tarea_state_windowq .BUTTON_proceed_job").on("click", function() {
                      e.performToggleStateJob();
                  }), $.blockUI({
                      message: $("#ot_toggle_tarea_state_windowq"),
                      css: {
                          top: "0",
                          left: "30%",
                          width: "38%",
                          height: "100%",
                          border: "none",
                          padding: "1%",
                          cursor: "default"
                      }
                  });
                })
            },
            cleanModals: function(e) {
                $.unblockUI(), window.setTimeout(function() {
                    $("#toggle_tarea_state_window").remove(), e && e();
                }, 1e3);
            },
            buildToolsList: function(e) {
                return "";
            },
            buildEmployeesList: function(e) {
                var t = $("<select>", {
                    nombre: e
                });
                return $(t).append($("<option>", {
                    value: 0
                }).text("Seleccione empleado...")), _.each(this.empleados, function(e) {
                    $(t).append($("<option>", {
                        value: e.id
                    }).text(e.nombre));
                }), t;
            },
            performToggleState: function() {
                this.options.performToggleTareaState();
            },
            performToggleStateJob: function() {
                this.options.performToggleTareaState("asd", !0);
            },
            cancelToggleState: function() {
                //$(this.options.checkbox).attr("checked", !1), this.cleanModals();
                location.reload()
            }
        });
    }), e.define("/views/ot/OtAuditForm.js", function(e, t, n, r, i, s) {
        C.View.OtAuditForm = Backbone.View.extend({
            name: "ot_form",
            title: "Datos de la Orden de Trabajo",
            fields: {},
            isCRUD: !0,
            relations: {
                clientes: null
            },
            initialize: function() {
                var e = this;
                F.getOtNumero(function(t) {
                  e.fields.numero.value = t.maxi, F.getAllFromModel("cliente", function(t) {
                    e.relations.clientes = t, F.createForm(e);
                  });
                });
            },
            events: {
                "click .ot_form .BUTTON_create": "addOt",
                "click .ot_form .BUTTON_save": "editOt"
            },
            getTable: function() {
                return this.options.person_table;
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
            addTableRow: function(e) {
                var t = F.JSONValuesToArray($(".ot_form").serializeObject());
                t.unshift(e), this.getDataTable().fnAddData(t);
            },
            editTableRow: function(e) {},
            addOt: function(){
                var e = this;
            },
            editOt: function(){
                var e = this;
            }
        });
    }),
    e.define("/views/ot/OtAuditInfoCard.js", function(e, t, n, r, i, s) {
        C.View.OtAuditInfoCard = Backbone.View.extend({
            name: "ot_infocard",
            title: "Datos de la O/T",
            fieldnames: {
                numero: "O/T Nº",
                clienteNombre: "Cliente",
                ingreso: "Ingreso",
                fechaVencimiento: "Vencimiento",
                titulo: "Titulo",
                descripcion: "Descripción",
                notificarCliente: "Notificar Cliente"
            },
            initialize: function() {
                var e = this;
                $(".ot_infocard").remove(), F.createInfoCard(this, $("#ot_right"), function() {
                    $("#right").trigger("ot_infocard_loaded", [ e ]);
                });
                $(".ot_infocard").append($("<input>", {
                    type: "button",
                    "class": "ot_ver_mas",
                    value: "Ver Más",
                    style: "background-color: #F8E4FF;",
                    title: "Muestra en detalle la Orden, junto con todas sus Tareas."
                }));
            },
            events: {
              "click .ot_ver_mas": "ver_mas",
            },
            ver_mas: function() {
              var e = this, t = $(".ot_table"), n = F.getDataTableSelection(t)[0], i = $(".ot_table").dataTable().fnGetData(n)[1];
              if(!isNaN(i)){
                $("body").append('<div id="ver_mas_window" style="display:none;"><h1 class="bold"style="font-size:20px;color:#FF6666; text-align:center">Tareas de la O/Tfede1 Nº'+i+'</h1>' + '<form id="ver_mas_form">' + "<br /><br />" + "</form>" + '<input type="button" class="BUTTON_cancel center button" onclick=location.reload() value="Salir" />'+ "</div>"),
                $.blockUI({
                  message: $("#ver_mas_window"),
                  css: {
                    "text-align": "left",
                    width: "70%",
                    top: "3%",
                    left: "3%",
                    botton: "3%",
                    height: "85%",
                    border: "none",
                    overflow: "auto",
                    padding: "1%",
                    cursor: "default",
                  }
                });
                $.ajax({
                  type: "GET",
                  url: "/ot/byOt/"+i,
                  success: function(ot){
                    $.ajax({
                      type: "GET",
                      url: "/otTarea/byOt/"+i,
                      success: function(t) {
                        if(ot){
                            if($.isArray(t)){
                              $("#ver_mas_form").append('<span  style= "font-weight: bold">'+ot.clienteNombre+'</span><br /><span  style= "font-weight: bold">Ingreso:</span>'+ot.ingreso+'<br /><hr style="color: #0056b2;" /><p><span  style= "font-weight: bold">Titulo OT:</span>'+ot.titulo+'<br /><span  style= "font-weight: bold">Descripción OT:</span>'+ot.descripcion+'<hr style="color: #0056b2;" /></p>')
                              t.forEach(function(q){
                                 var nombre = q.nombre || "Sin Nombre",
                                 descripcion = q.descripcion || "Sin Descripción" ,
                                 observacion = q.observacion || "Sin Observación" ;
                                 $("#ver_mas_form").append(
                                  '<p><h3>Titulo: '+nombre+'</h3></p>'+
                                  '<p><span style= "font-weight: bold">Descripcion: </span>'+ descripcion +'</p>'+
                                  '<p><span style= "font-weight: bold">Observacion: </span>'+ observacion +'</p><hr style="color: #0056b2;" />');
                              })
                              $("#ver_mas_form").append('<p><span  style= "font-weight: bold" >Conclusión OT:</span>'+ot.conclusion+'</p>')
                            }
                        }
                      }
                    })
                  }
                })
              }
            },
        });
    }),
    e.define("/views/ot/OtAuditOptions.js", function(e, t, n, r, i, s) {
        C.View.OtAuditOptions = Backbone.View.extend({
            initialize: function() {
                //location.reload();
                this.render();
                //ACA LIMPIABA FORM
                //$("#reprogramar_ot_form").serializeObject().closest('form').find("#reprogramar_ot_form").val(""); //LIMPIO LOS FORMULARIOS
                //$("#reprogramar_ot_form").serializeObject().empty();


            },
            render: function() {
                return $(this.el).append(this.template()), this;
            },
            template: function() {
                var e = $("<div>", {
                    "class": "right_options"
                });
                return $(e).append($("<input>", {
                    type: "button",
                    "class": "ot_add_tarea",
                    value: "Agregar Tarea",
                    disabled: "disabled",
                    style: "background-color: #CCFCC7",
                    title: "Agrega una Tarea al final ó debajo de la seleccionada actualmente."
                }),$("<input>", {
                    type: "button",
                    "class": "ot_conclude",
                    value: "Concluir O/T",
                    style: "background-color: #F3F5A6",
                    disabled: "disabled"
                }),$("<input>", {
                    type: "button",
                    "class": "ot_reprogramar",
                    value: "Reprogramar VTO",
                    style: "background-color: #FFB9B9",
                    disabled: "disabled"
                })
                ), e;
            },
            events: {
                "click #ot_left .ot_reprogramar": "reprogramarOt",
                "click #ot_left .ot_conclude": "concludeOt",
                "click #ot_left .ot_add_tarea": "addTarea",
                "click #ot_left .ot_rework_tarea": "reworkTarea"
            },
            getInfoCard: function() {
                return this.options.ot_infocard;
            },
            getSelectedRow: function() {
                return this.options.ot_table.selected_row;
            },
            reloadRowDetails: function() {
                $("tr.selected_row").next().css({
                    opacity: .5
                }), $("tr.selected_row").click(), window.setTimeout(function() {
                    $("tr.selected_row").click();
                }, 500);
            },
            concludeOt: function() {
                var e = this, t = $(".ot_table"), n = F.getDataTableSelection(t)[0], r = $(t).dataTable().fnGetData(n)[0], i = $(".ot_table").dataTable().fnGetData(n)[1];
                var coordinador = $(".ot_table").dataTable().fnGetData(n)[10];
                if($(".ot_table").dataTable().fnGetData(n)[9]!= " "){
                    if(C.Session.getUser().rol_id >= 3){
                      if(C.Session.getUser().rol_id == 4 ){
                        //ESTE ES EL MENSAJE DE CONFIRMACION PARA CONCLUIR EN OT->SEGUIMIENTO
                        F.msgConfirm("¿Realmente desea concluir la Orden de Trabajo Nº "+i+"?", function(){
                          new C.View.OtAdminConcludeForm({
                              el:$("body"),
                              ot_number: i,
                          });
                        });
                      }else{
                        if(coordinador == 1){
                          if(C.Session.getUser().area_id == 4){
                            F.msgConfirm("¿Realmente desea concluir la Orden de Trabajo Nº "+i+"?",function(){
                              new C.View.OtAdminConcludeForm({
                                  el: $("body"),
                                  ot_number: i,
                              });
                            });
                          }else{
                            F.msgError("No tiene los permisos necesarios")
                          }
                        }else{
                          F.msgConfirm("¿Realmente desea concluir la Orden de Trabajo Nº "+i+"?", function(){
                            new C.View.OtAdminConcludeForm({
                                el: $("body"),
                                ot_number: i,
                            });
                          });
                        }
                      }
                    }else{
                      F.msgError("No tiene los permisos necesarios")
                    }
                }else{
                    F.msgError("La OT no tiene fecha de vencimiento, Cárguela y luego la podrá concluir")
                }
            },
            addTarea: function() {
                var e = this;
                new C.View.OtAuditAddTarea({
                    addNewTarea: function(t, n) {
                        var r = $(".ot_table").dataTable(), i = F.getDataTableSelection($(".ot_table"))[0], s = 0
                        $(".selected_otTarea").length && (s = parseInt($(".selected_otTarea").attr("data-position"))), t.data['ot_id']= parseInt(r.fnGetData(i)[0]),$.ajax({
                            url: "/otTarea/add",
                            type: "POST",
                            data: t.data,
                            success: function(t) {
                              t === !0 && (n(), e.reloadRowDetails());
                            }
                        });
                    }
                });
            },
            // OT-> Seguimiento -> Reprogramar VTO
            reprogramarOt: function(){
              var e = this, t = $(".ot_table"),
              n = F.getDataTableSelection(t)[0],
              r = $(t).dataTable().fnGetData(n)[0],
              i = $(".ot_table").dataTable().fnGetData(n)[1];
                (this.templatet(),
                 $("#ot_reprogramar_window .BUTTON_cancel").on("click", function() {
                    location.reload()
                }), $("#ot_reprogramar_window .BUTTON_proceed").on("click", function() {
                    //var sacomani = true;
                    repForm = $("#reprogramar_ot_form").serializeObject();
                    if((repForm.fechaVto!='')
                    && (repForm.observation!='')){
                      F.msgConfirm("Está seguro de Reprogramar la OT?", function() {
                        $.ajax({
                          type: "PUT",
                          url: "/ot/reprogramar/"+i,
                          data: repForm,//$("#reprogramar_ot_form").serialize(),
                          success: function(nia) {
                          	if(nia){
		                        	F.msgOK("O/T reprogramada exitosamente");
		                          setTimeout(function(){location.reload()},1e3)
                          	}else{
		                        	F.msgError("La O/T tiene tareas posteriores al vencimiento seleccionado");
		                          setTimeout(function(){location.reload()},1e3)
                          	}
                          }
                        })
                      });
                    }else{
                      F.msgError("Todos los campos son obligatorios") // OT->SEGUIMIENTO REPGROGRAMAR VTO
                    }
                }))
            },
            templatet: function() {
              var e = this, t = $(".ot_table"), n = F.getDataTableSelection(t)[0], r = $(t).dataTable().fnGetData(n)[0], i = $(".ot_table").dataTable().fnGetData(n)[1];
              /* FORM REPROGRAMAR VTO */
              $("body").append('<div id="ot_reprogramar_window" style="display:none;"><h1 class="bold">¿Está seguro de querer Reprogramar la O/T Nº '+i+"?</h1>" + '<form id="reprogramar_ot_form" >' + "<br /><br />" +'<input id="tess" name="fechaVto" type="date" placeholder="Fecha Vto nueva"><br /><br />'+'Observaciones: <br /><textarea id="tesss" name="observation" style="width:100%; height:50px;"></textarea>'+ "</form>" + '<input type="button" class="BUTTON_cancel lefty button" value="Cancelar" />'+ '<input type="button" class="BUTTON_proceed righty button" value="Proceder" />' + "</div>"),
              /* FIN FORM REPGROGRAMAR VTO */
              $.blockUI({
                message: $("#ot_reprogramar_window"),
                css: {
                  top: "15%",
                  left: "30%",
                  width: "38%",
                  border: "none",
                  padding: "1%",
                  cursor: "default"
                }
              });
            },
            reworkTarea: function() {
                var e = this, t = $(".selection_otTarea_id").val();
                F.msgConfirm("Esta opreación RETRABAJARÁ la Tarea.", function() {
                    var n = parseInt($(".selected_otTarea").attr("data-position"));
                    $.ajax({
                        url: "/otTarea/rework/" + t + "/after/" + n,
                        success: function(t) {
                            t === !0 && e.reloadRowDetails();
                        }
                    });
                });
            }
        });
    }),
    e.define("/views/ot/OtAuditTable.js", function(e, t, n, r, i, s) {
        C.View.OtAuditTable = Backbone.View.extend({
            name: "ot",
            headers: [ "ID", "Número","Buscar", "Número", "Prioridad", "estado", "cliente_id", "Cliente", "Ingreso", "Vencimiento", "plan_id", "notificarCliente", "honorarios", "prioridad", "coordinador", "Título", "Descripción", "conclusion", "Creada" ],
            attrs: [ "id", "ot_numero", "ot_numero_busqueda", "numero", "com", "estado", "cliente_id", "clienteNombre", "ingreso", "fechaVencimiento", "plan_id", "notificarCliente", "honorarios", "prioridad", "coordinador", "titulo", "descripcion", "conclusion", "creada"],
            hidden_columns: [ "ot_numero_busqueda", "numero", "estado", "cliente_id", "plan_id", "notificarCliente", "honorarios", "prioridad",  "coordinador", "descripcion", "conclusion"],
            data: null,
            datatableOptions: {
                aoColumns: null,
                aaSorting: [],
                iDisplayLength: 500
            },
            initialize: function() {
                function e(e, n) {
                  var r = $(e).dataTable();
                  $(".ot_table tbody tr").on("click", function() {
                    r.fnIsOpen(this) ? ($(".tarea_form").fadeOut("slow", function() {
                        $(this).remove();
                    }), $("#ot_left .ot_rework_tarea").attr("disabled", !0).css({
                        color: "graytext"
                    }), r.fnClose(this)) : r.fnOpen(this, t.generateRowDetails(r, this), "details");
                  });
                  if (n !== undefined) {
                    var i = $(".ot_table tbody tr td:contains('" + n + "')").parent();
                    $(i).addClass("selected_row"), $(i).click();
                  }
                }
                var t = this;
                this.data = this.options.collection,
                this.area_id = this.options.area_id,
                F.createDataTable(this, function(e) {
                    F.assignValuesToInfoCard($(".ot_infocard"), e);
                }, e);
                (t.options.open_ot_number_on_start &&  $('.dataTables_filter input').val(t.options.open_ot_number_on_start).keyup())
            },
            events: {
                "click .ot_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget), $("#ot_left .ot_add_tarea").attr("disabled", !1),
                 $("#ot_left .ot_conclude").attr("disabled", !1), $("#ot_left .ot_reprogramar").attr("disabled", !1);
            },
            generateRowDetails: function(e, t) {
              var n = -1, r = -1, i = this, s = e.fnGetData(t), o = s[0], u = '<div class="row_detail ot_id_' + o + '" style="display:none;">', a, f = 0;
              return this.getOtTareas(o, function(e) {
                  var r, s, u;
                  if(e.length){
                      var l = !0, c = 1;
                      i.appendRowDetailsHeaders(o),
                      e.forEach( function(e) {
                            var insumido= e.tiempoInsumido || "00:00"
                            r = $('<p data-position="' + c + '">'), c += 1, s = $("<input>", {
                                type: "checkbox",
                                "class": "complete_task_" + e.id
                            }), u = "<span>" + e.posicion +"-"+e.nombre +" - </span>"+e.descripcion+" <span>"+ e.empleado.nombre+" "+e.empleado.apellido+"</span> "+insumido+" de "+e.tiempoEstimado, u += '<span class="task_completed_date" style="color:#A33;">' + F.toHumanDate(e.fechaVencimiento, !1) + "</span>",
                             e.completa ?
                              u += '<span class="task_completed_date">' + F.toHumanDate(e.fechaCompleta, !1) + "</span>" :
                               u += '<span class="task_completed_date" style="color:#555;">Incompleta</span>', C.Session.roleID() >= 1 && $(r).append(s), $(r).append(u);
                             var t = C.Session.getUser().rol_id, h = t == 4, p = t == 3 && i.area_id == e.area_id, d = i.area_id != e.area_id || t != 1 || t != 2 || t != 5;
                            e.completa == 1 && ($(s).attr("checked", !0), $(s).parent().addClass("crossed"), a = e.id, f += 1), $(".ot_id_" + o).append(r).fadeIn(), i.bindRenderOtTareaForm(r, e, d), i.bindEnableTareaActions(r, e, d), $('input:checkbox[class="complete_task_' + e.id + '"]').on("click", function() {
                                var t = this, n = null, r = F.doNothing, s = null, a=!0;
                                C.Session.getUser().rol_id != 4 && e.empleado_id != C.Session.getUser().empleado_id ? (r = "Solo el usuario Responsable puede completar la tarea", i = function() {
                                    $(t).attr("checked", !1);
                                }, s = !0, F.msgError(r, function() {
                                    i();
                                })) : ($(t).is(":checked") ? (n = "Esta operación COMPLETARÁ la Tarea.", r = function() {
                                    $(t).attr("checked", !1);
                                }, s = !1) : ($(t).attr("checked", !0),a=false, n = "Esta operación convertirá en INCOMPLETA la Tarea.", r = function() {

                                    $(t).attr("checked", !1);
                                }, s = !0), console.log(a),a?F.msgConfirm(n, function() {
                                    i.toggleTareaState(t, e.id, s, function(e) {
                                        e === !0 && $(t).is(":checked") ? ($(t).parent().addClass("crossed"), $($(t).parent().next().children()[0]).attr("disabled", !1), $(t).parent().next().css({
                                            opacity: 1
                                        })) : $(t).is(":checked") || ($(t).parent().removeClass("crossed"), $($(t).parent().next().children()[0]).attr("disabled", !0), $(t).parent().next().css({
                                            opacity: .5
                                        }));
                                    });
                                }, function() {
                                    r();
                                }):F.msgError('No se puede convertir en incompleta una tarea.'));
                            }), l = !1,(!e.completa && n == -1 || e.posicion == n) ? n = e.posicion : e.completa || ($(s).attr("disabled", !0), $(r).css({
                                opacity: .5
                            }));
                        });
                  } else $(".ot_infocard .ot_percentage").remove(), $(".ot_id_" + o).append("<p>Esta O/T no posee un Plan de Tareas asociado</p>").fadeIn();
                  var h = i.calculateCompletitionPercentage(e), p = "peity_pie_" + o;
                  $("span." + p).remove(), $($(t).children()[0]).append('<span class="' + p + '">' + h.toString() + "/100</span>"), $("span." + p).css({
                      position: "relative",
                      top: "3px",
                      left: "10px"
                  }), $("span." + p).peity("pie"), h > 0 || $("#tareasCompletitionPercentage").remove();
              }), u += "</div>", u;
            },
            calculateCompletitionPercentage: function(e) {
                var t, n = 0;
                return _.each(e, function(e) {
                    e.completa == 1 && (n += 1);
                }), t = n / e.length * 100, t.toString().substr(0, 2);
            },
            drawPercentageLoader: function(e, t, n) {
                var r = t / 100, t = 0;
                $("#tareasCompletitionPercentage").remove(), $("#right .inner").append('<div id="tareasCompletitionPercentage">');
                var i = $("#right .inner #tareasCompletitionPercentage").percentageLoader({
                    width: 150,
                    height: 150,
                    controllable: !1,
                    value: n + " / " + e.length,
                    progress: 0
                }), s = function() {
                    t += .01, i.setProgress(t);
                    if (!(t < r)) return;
                    window.setTimeout(s, 25);
                };
                window.setTimeout(s, 25);
            },
            appendRowDetailsHeaders: function(e) {
                $(".ot_id_" + e).append('<p class="row_details_headers">Nombre - Descripción - Empleado - T/Estimado - T/Insumido<span>Estado - Vencimiento</span></p>');
            },
            bindRenderOtTareaForm: function(e, t, n) {
                var r = this;
                $(e).on("click", function() {
                    $(".row_detail p").removeClass("selected_otTarea"), $(this).addClass("selected_otTarea"), ($("#tareasCompletitionPercentage").remove(), $(".tarea_form").remove(), r.otTarea_form = new C.View.OtTareaForm({
                        el: $("#ot_right"),
                        model: new C.Model.OtTarea,
                        table: r,
                        tarea: t
                    }), $(e).find(".row_subdetail").length ? $(".row_subdetail").remove() : r.renderOtTareaResources(e, t));
                });
            },
            renderOtTareaResources: function(e, t) {
                t.completa && new C.View.OtTareaResources({
                    tarea_row: e,
                    tarea: t,
                });
            },
            bindEnableTareaActions: function(e, t, n) {
                $(e).on("click", function() {
                    $("#ot_left .ot_rework_tarea").attr("disabled", !1).css({
                        color: "darkred"
                    });
                });
            },
            getOtTareas: function(e, t) {
                $.ajax({
                    url: "/otTarea/byOt/" + e,
                    success: function(e) {
                        t(e);
                    }
                });
            },
            reloadRowDetails: function() {
                $("tr.selected_row").next().css({
                    opacity: .5
                }), $("tr.selected_row").click(), window.setTimeout(function() {
                    $("tr.selected_row").click();
                }, 500);
            },
            toggleTareaState: function(e, t, n, r) {
                var i = this;
                new C.View.OtAuditToggleTareaState({
                    el: $("body"),
                    checkbox: e,
                    currentTareaState: n,
                    performToggleTareaState: function(e, n) {
                        var s;
                        if($("#ot_toggle_tarea_form1").serializeObject().tiempo[2] == ":"){
                         if(n){
                          $.ajax({
                            type: "POST",
                            url: "/otTarea/toggleTareaStateJob/" + t,
                            data: $("#ot_toggle_tarea_form1").serialize(),
                            success: function(t) {
                              F.onSuccess(t, function(t) {
                                F.msgOK("Cambios realizados exitosamente")
                                setTimeout(function(){location.reload()},1e3)
                              }, function(e) {
                                F.msgError("Ocurrió un error al completar la Tarea");
                              }), r(t);
                            }
                          });
                         }else{
                           $.ajax({
                              type: "POST",
                              url: "/otTarea/toggleTareaState/" + t,
                              data: $("#ot_toggle_tarea_form1").serialize(),
                              success: function(t) {
                                  F.onSuccess(t, function(t) {
                                    F.msgOK("Cambios realizados exitosamente")
                                    setTimeout(function(){location.reload()},1e3)
                                  }, function(e) {
                                      F.msgError("Ocurrió un error al completar la Tarea");
                                  }), r(t);
                              }
                           });
                         }
                        }else
                          F.msgError("El tiempo Insumido debe ir en formato HH:MM EJ: 00:15")
                    },
                    idsat:t,
                });
            }
        });
    }),
    e.define("/views/ot/OtHistory.js", function(e, t, n, r, i, s) {
        C.View.OtHistory = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.ots = new C.Collection.OtHistorys(null, {
                    view: this
                }), this.ots.fetch({
                    success: function(t, n) {
                        e.ot_table = new C.View.OtHistoryTable({
                            el: $("#ot_left"),
                            collection: t
                        }), e.ot_infocard = new C.View.OtHistoryInfoCard({
                            el: $("#ot_right"),
                            model: e.model,
                            collection: t,
                            ot_table: e.ot_table
                        }), e.ot_options = new C.View.OtHistoryOptions({
                        el: $("#ot_left .fg-toolbar")[0],
                        ot_table: t.ot_table,
                        ot_infocard: n
                      });
                    }
                });
            }
        });
    }), e.define("/views/ot/OtHistoryTable.js", function(e, t, n, r, i, s) {
        C.View.OtHistoryTable = Backbone.View.extend({
            name: "ot",
            headers: [ "ID", "Nro", "estado", "cliente_id", "Cliente", "Ingreso", "Vencimiento", "Concluida", "plan_id", "notificarCliente", "Tiempo", "Honorarios", "Juridica", "prioridad", "coordinador", "Título", "descripcion", "conclusion", "consulta" ],
            attrs: [ "id", "numero",  "estado", "cliente_id", "clienteNombre", "ingreso", "fechaVencimiento", "concluida", "plan_id", "notificarCliente", "tInsumido", "honorarios", "juridica", "prioridad", "coordinador", "titulo", "descripcion", "conclusion", "consulta" ],
            hidden_columns: ["estado", "cliente_id", "plan_id", "notificarCliente", "prioridad", "coordinador", "descripcion", "conclusion", "consulta" ],
            data: null,
            datatableOptions: {
                aoColumns: null,
                aaSorting: [ [ 1, "desc" ] ]
            },
            iDisplayLength: 500,
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToInfoCard($(".ot_infocard"), e);
                }, function() {
                    var t = $(".ot_table").dataTable();
                    $(".ot_table tbody tr").on("click", function() {
                        t.fnIsOpen(this) ? t.fnClose(this) : t.fnOpen(this, e.generateRowDetails(t, this), "details");
                    });
                });
            },
            events: {
                "click .ot_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget), $(".ot_desconclude").attr("disabled", !1);
            },
            generateRowDetails: function(e, t) {
                var n = this, r = e.fnGetData(t), i = r[0], s = '<div class="row_detail ot_id_' + i + '" style="display:none;">';
                return this.getOtTasks(i, function(e) {
                    var t, r, s;
                    e.length ? (n.appendRowDetailsHeaders(i), _.each(e, function(e) {
                        var y = " ";
                        if(e.completed_date){
                          var x = e.completed_date
                          y = x[8]+x[9]+x[7]+x[5]+x[6]+x[4]+x[0]+x[1]+x[2]+x[3]
                        }
                        var tiempoInsumido =e.tiempoInsumido || "00:00";
                        var tiempoEstimado = e.tiempoEstimado || "00:00";
                        var pc = e.empleado.pc == 2? "Colaborador":"Profesional"
                        t = $("<p>"), r = $("<input>", {
                            type: "checkbox",
                            "class": "complete_task_" + e.id
                        }), s = "<span>" +e.nombre + " - </span>"+e.descripcion+ " - "+ tiempoInsumido+" "+pc, s += '<span class="task_completed_date" style="color:#A33;"><span class="task_completed_date">' + F.toHumanDate(e.fechaCompleta, !1) + "</span>" + F.toHumanDate(e.fechaVencimiento, !1)+" - " ,
                         $(t).append(r).append(s), e.completa && ($(r).attr("checked", !0), $(r).parent().addClass("crossed")), $(".ot_id_" + i).append(t).fadeIn(), n.bindRenderOtTaskForm(t, e, !1), $('input:checkbox[class="complete_task_' + e.id + '"]').on("click", function() {
                            return !1;
                        });
                    })) : $(".ot_id_" + i).append("<p>Esta O/T no posee un Plan de Tareas asociado</p>").fadeIn();
                }), s += "</div>", s;
            },
            getOtTasks: function(e, t) {
              $.ajax({
                url: "/otTarea/byOt/" + e,
                success: function(e) {
                  t(e);
                }
              });
            },
            appendRowDetailsHeaders: function(e) {
              $(".ot_id_" + e).append('<p class="row_details_headers">Nombre - Descripción<span class="task_completed_date" style="color:#A33;"><span class="task_completed_date">Completada</span><span>Vencimiento - </span></p>');
            },
            bindRenderOtTaskForm: function(e, t, n) {
              var r = this;
              $(e).on("click", function() {
                $(".row_detail p").removeClass("selected_ottask"), $(this).addClass("selected_ottask"),
                 C.Session.roleID() >= 1 && ($("#tasksCompletitionPercentage").remove(),
                  $(".tarea_form").remove(), new C.View.OtTareaForm({
                    el: $("#ot_right"),
                    model: new C.Model.OtTarea,
                    table: r,
                    task: t
                }), $(e).find(".row_subdetail").length ? $(".row_subdetail").remove() : r.renderOtTaskResources(e, t));
              });
            },
            renderOtTaskResources: function(e, t) {
              C.Session.roleID() >= 1 && new C.View.OtTareaResources({
                task_row: e,
                task: t
              });
            }
        });
    }), e.define("/views/ot/OtHistoryInfoCard.js", function(e, t, n, r, i, s) {
        C.View.OtHistoryInfoCard = Backbone.View.extend({
            name: "ot_infocard",
            title: "Datos de la O/T",
            fieldnames: {
                numero: "O/T Nº",
                clienteNombre: "Cliente",
                juridica: "Jurídica",
                titulo: "Título",
                descripcion: "Descripción",
                notificarCliente: "Notificar Cliente",
                conclusion: "Conclusión",
                consulta: "Consulta",
            },
            initialize: function() {

                var e = this;
                F.createInfoCard(e, $("#ot_right"));
                $(".ot_infocard").append($("<input>", {
                    type: "button",
                    "class": "ot_ver_mas",
                    value: "Ver Más",
                    style: "background-color: #F8E4FF;",
                    title: "Muestra en detalle la Orden, junto con todas sus Tareas."
                }));

                //$("#reprogramar_ot_form").serializeObject().closest('form').find("#reprogramar_ot_form").val("");
                $("#reprogramar_ot_form").serializeObject().empty();// LIMPIO
            },
            events: {
              "click .ot_ver_mas": "ver_mas",
            },
            //18
            //19
            ver_mas: function() {
              var e = this, t = $(".ot_table"), n = F.getDataTableSelection(t)[0], i = $(".ot_table").dataTable().fnGetData(n)[1];
              if(!isNaN(i)){
                $("body").append('<div id="ver_mas_window" style="display:none;"><h1 class="bold"style="font-size:20px;color:#FF6666; text-align:center">Tareas de la O/T Nº'+i+'</h1>' + '<form id="ver_mas_form">' + "<br /><br />" + "</form>" + '<input type="button" class="BUTTON_cancel lefty button" onclick=location.reload() value="Salir" /><input type="button" class="BUTTON_cancel righty button" onclick="window.print();" value="imprimir"/>'+ "</div>"),
                $.blockUI({
                  message: $("#ver_mas_window"),
                  css: {
                    "text-align": "left",
                    width: "70%",
                    top: "3%",
                    left: "3%",
                    botton: "3%",
                    height: "85%",
                    border: "none",
                    overflow: "auto",
                    padding: "1%",
                    cursor: "default",
                  }
                });
                $.ajax({
                  type: "GET",
                  url: "/ot/byOt/"+i,
                  success: function(ot){
                    $.ajax({
                      type: "GET",
                      url: "/otTarea/byOt/"+i,
                      success: function(t) {
                        if(ot){
                            if($.isArray(t)){
                              $("#ver_mas_form").append('<span  style= "font-weight: bold">'+ot.clienteNombre+'</span><br /><span  style= "font-weight: bold">Ingreso:</span>'+ot.ingreso+'<br /><hr style="color: #0056b2;" /><p><span  style= "font-weight: bold">Titulo OT:</span>'+ot.titulo+'<br /><span  style= "font-weight: bold">Descripción OT:</span>'+ot.descripcion+'<hr style="color: #0056b2;" /></p>')
                              t.forEach(function(q){
                                 var nombre = q.nombre || "Sin Nombre",
                                 descripcion = q.descripcion || "Sin Descripción" ,
                                 observacion = q.observacion || "Sin Observación" ;
                                 $("#ver_mas_form").append(
                                  '<p><h3>Titulo: '+nombre+'</h3></p>'+
                                  '<p><span style= "font-weight: bold">Descripcion: </span>'+ descripcion +'</p>'+
                                  '<p><span style= "font-weight: bold">Observacion: </span>'+ observacion +'</p>'
                                  // AGREGO
                                  +'<p><span style= "font-weight: bold">Empleado: </span>'+ ot.empleado +'</p>'+
                                  '<p><span style= "font-weight: bold">Tiempo estimado: </span>'+ ot.tiempoEstimado +'</p>'+
                                  '<p><span style= "font-weight: bold">Tiempo insumido: </span>'+ ot.tiempoInsumido +'</p>'+
                                  '<p><span style= "font-weight: bold">Cliente: </span>'+ ot.clienteNombre +'</p>'+
                                  // FIN AGREGO
                                  '<hr style="color: #0056b2;" />');
                              })
                              $("#ver_mas_form").append('<p><span  style= "font-weight: bold" >Conclusión OT:</span>'+ot.conclusion+'</p>')
                            }
                        }
                      }
                    })
                  }
                })
              }
            },
        });
    }),
    e.define("/views/otTarea/OtTareaResources.js", function(e, t, n, r, i, s) {
        C.View.OtTareaResources = Backbone.View.extend({
            name: "ottarea_resource",
            initialize: function() {
                this.getResources();
            },
            render: function(e) {
                var t = $("<div>", {
                    "class": "row_subdetail"
                }), n = $("<table>");
                _.each(e, function(e) {
                    $(n).append('<tr><td width="15%">' + e.empleado + "</td>" + '<td width="15%">' + e.horas + " hs.</td></tr>");
                }), $(t).append(n), $(this.options.tarea_row).append(t);
            },
            getResources: function() {
                var e = this;
                console.log(e.options);
                $.ajax({
                    url: "/otTarea/resources/" + e.options.tarea.id,
                    success: function(t) {
                        t.result === !0 ? e.render(t.resources) : F.msgError("Ocurrió un error al buscar los Recursos de la Tarea");
                    }
                });
            }
        });
    }),
//OC
    e.define("/views/ot/Oc.js", function(e, t, n, r, i, s) {
        C.View.Oc = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.ocs = new C.Collection.Ocs(null, {
                    view: this
                }), this.ocs.fetch({
                    success: function(t, n) {
                        e.oc_table = new C.View.OcTable({
                            el: $("#oc_left"),
                            collection: t
                        }), e.oc_form = new C.View.OcForm({
                            el: $("#oc_right"),
                            model: e.model,
                            collection: t,
                            oc_table: e.ieOc_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/ot/OcTable.js", function(e, t, n, r, i, s) {
        C.View.OcTable = Backbone.View.extend({
           name: "oc",
           headers: [ "ID", "Número", "cliente_id",  "Cliente", "fechaVencimiento", "Título", "Empleado", "Consulta", "Solución", "comunicacion_id", "empleado_id", "notificarCliente"],
            attrs: [ "id", "numero", "cliente_id", "clienteNombre", "fechaVencimiento", "titulo", "empleadoNombre", "consulta", "solucion", "comunicacion_id", "empleado_id", "notificarCliente" ],
            hidden_columns: [ "cliente_id", "consulta", "solucion", "comunicacion_id", "empleado_id", "notificarCliente" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null, null ],
                iDisplayLength: 500
            },
            initialize: function() {
                var e = this;
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".oc_form"), e);
                });
            },
            events: {
                "click .oc_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
   e.define("/views/ot/OcForm.js", function(e, t, n, r, i, s) {
      C.View.OcForm  = Backbone.View.extend({
          name: "oc_form",
          title: "Datos de la Orden de Consulta",
          fields: {
              numero: {
                  label: "O/T Nº",
                  force_label: !0,
                  attrs: {
                      disabled: "disabled",
                      style: "margin-top:-1em 0 1em;"
                  }
              },
              cliente_id: {
                  label: "Cliente",
                  type: "select",
                  attrs: {
                      disabled: "disabled"
                  }
              },
              titulo: {
                label: "Título de la consulta",
                attrs: {
                      disabled: "disabled"
                  }
              },
              empleadoNombre: {
                label: "EmpleadoDesignado",
                attrs: {
                      disabled: "disabled"
                  }
              },
              consulta: {
                label: "Consulta",
                type: "textarea",
                attrs: {
                      style: "height:150px;",
                      disabled: "disabled"
                  }
              },
              solucion: {
                label: "Solución/Respuesta",
                type: "textarea",
                attrs: {
                      style: "height:150px;"
                  }
              },
              notificarCliente: {
                  label: "Notificar eventos al cliente",
                  type: "select_yn",
                  default_value: "n"
              },
          },
          buttons: {
              create: !1,
              save: !0,
              cancel: !0,
              "delete": !1
          },
          isCRUD: !0,
          relations: {
              clientes: null,
          },
          initialize: function() {
           var e = this;
           F.getAllFromModel("cliente", function(t) {
              e.relations.clientes = t,   F.createForm(e)
           });
          },
          events: {
              "click .oc_form .BUTTON_save": "editOtOc"
          },
          getTable: function() {
              return this.options.oc_table;
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
          editTableRow: function(e) {},
          editOtOc: function(){
           var e = this;
           $.ajax({
              url: "/oc/byId/"+e.getSelectionID(),
              success: function(t) {
                if(C.Session.roleID()>=3
                  || t.empleado_id == C.Session.empleadoID()){
                  if(($(".ieOc_form").serializeObject().cliente_id != '')
                  && ($(".ieOc_form").serializeObject().solucion != '')
                  ){
                    $.ajax({
                      type: "PUT",
                      url: "/oc/"+e.getSelectionID(),
                      data: $(".oc_form").serialize(),
                      success: function() {
                        F.msgOK("O/C editada exitosamente");
                        setTimeout(function(){location.reload()},1e3)
                      }
                   })
                 }else{
                    F.msgError('El campo Solución/Respuesta es obligatorio');
                 }
              }else
                F.msgError("No tiene los permisos necesarios (La respuesta solo la puede dar el Empleado Designado o un Supervisor)")
              }
            })
          }
       })
    }),
    //OTTAREA
    e.define("/views/ottarea/OtTareaForm.js", function(e, t, n, r, i, s) {
        C.View.OtTareaForm = Backbone.View.extend({
            name: "tarea_form",
            title: "Datos de la Tarea",
            fields: {
                posicion: {
                    label: "Posicion",
                    force_label: !0
                },
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                descripcion: {
                    label: "Descripción",
                    type: "textarea",
                    attrs: {
                      style: "height:150px;"
                    }
                },
                fechaVencimiento: {
                    label: "Vencimiento",
                    type: "datepicker"
                },
                area_id: {
                    label: "Área",
                    type: "select"
                },
                empleado_id: {
                    label: "Empleado",
                    type: "select"
                },
                observacion: {
                    label: "Observación",
                    type: "textarea",
                    attrs: {
                      style: "height:150px;"
                    }
                }
            },
            isCRUD: !1,
            buttons: {
                save: !0,
                "delete": !0,
                cancel: !0
            },
            relations: {
                areas: null,
                empleados: null,
            },
            initialize: function() {
                var e = this;
                //Imprimo si la tarea esta completa
                //console.log(e.options.tarea.completa);

                //CONDICION PARA NO EDITAR TAREAS COMPLETAS
                if(Number(e.options.tarea.completa) == 1)
                {
                  //DISABLED
                }
                else
                {
                  var n =
                  F.getAllFromModel("area", function(t) {
                   e.relations.areas = t, F.getAllFromModel("empleado", function(t) {
                      e.relations.empleados = t, F.createForm(e),
                      $(".tarea_form input:hidden.selection_id").remove();
                      var n = e.options.task || e.options.tarea , r = $(".tarea_form"), i = $(r).getFields(), s;
                      $(r).append($("<input>", {
                          type: "hidden",
                          value: n.id,
                          "class": "selection_ottarea_id"
                      })), $(i).each(function() {
                          s = $(this).attr("name"), $(this).val(n[s]), s === "fechaVencimiento" ? $(this).val(moment(n[s]).format("DD/MM/YYYY")) : s === "area_id" && $(this).trigger("liszt:updated");
                      }),
                      $(".tarea_form input:hidden.selection_id").remove();
                      var n = e.options.task || e.options.tarea, r = $(".tarea_form"), i = $(r).getFields(), s;
                      $(r).append($("<input>", {
                          type: "hidden",
                          value: n.id,
                          "class": "selection_ottarea_id"
                      })), $(i).each(function() {
                          s = $(this).attr("name"), $(this).val(n[s]), s === "fechaVencimiento" ? $(this).val(moment(n[s]).format("DD/MM/YYYY")) : s === "empleado_id" && $(this).trigger("liszt:updated");
                      });
                   });
                 });
                }
            },
            events: {
                "click .tarea_form .BUTTON_save": "editTarea",
                "click .tarea_form .BUTTON_delete": "delTarea",
                "click .tarea_form .BUTTON_cancel": "cancelEditTarea"
            },
            getTarea: function() {
                return this.options.tarea;
            },
            getDataTable: function() {
                return $(this.table).dataTable();
            },
            getSelectionRow: function() {
                return $(".complete_task_" + this.getTarea().id).parent();
            },
            getSelectionID: function() {
                return parseInt($(".tarea_form .selection_ottarea_id").val());
            },
            reloadOtRowDetails: function() {
                $("tr.selected_row").next().css({
                    opacity: .5
                }), $("tr.selected_row").click(), window.setTimeout(function() {
                    $("tr.selected_row").click();
                }, 500);
            },
            editTarea: function() {
                var e = this;
                if( $(".tarea_form").serializeObject().area_id != ''
                &&  $(".tarea_form").serializeObject().empleado_id != ''
                &&  $(".tarea_form").serializeObject().nombre != ''
                ){
                  if(C.Session.roleID()<3){
                    F.msgError("No tiene los permisos necesarios")
                  }else{
                		$.ajax({
                        type: "PUT",
                        url: "/ottarea/" + e.getSelectionID(),
                        data: $(".tarea_form").serializeObject(),
                        success: function(t) {
                        	if(t)
                            t !== !1 && e.reloadOtRowDetails();
                          else{
					                  F.msgError("Fecha invalida, debe ser anterior al vencimiento de la OT")
                          }
                        }
                    })
                  }
                }else{
                  F.msgError('Los Campos Area, Empleado y Nombre son Obligatorios')
                }
            },
            delTarea: function() {
                var e = this;
                if(C.Session.roleID()<3){
                  F.msgError("No tiene los permisos necesarios")
                }else{
                 F.msgConfirm("¿Desea eliminar esta Tarea?", function() {
                    $.ajax({
                        type: "POST",
                        url: "/ottarea/delete/" + e.getSelectionID(),
                        success: function(t) {
                            $(e.getSelectionRow()).fadeOut("slow", function() {
                                $(this).remove(), e.reloadOtRowDetails();
                            });
                        }
                    });
                })
                // LIMPIO FORM PARA QUE NO APAREZCA MUCHAS VECES EL CARTEL DE CONFIRMACION
                $("#reprogramar_ot_form").serializeObject().empty();
               }
            },
            cancelEditTarea: function() {
                $(".tarea_form").fadeOut("slow", function() {
                    $(this).remove();
                });
            }
        });
    }),
  //TAREA
    e.define("/views/ot/Tarea.js", function(e, t, n, r, i, s) {
        C.View.Tarea = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.tareas = new C.Collection.Tareas(null, {
                    view: this
                }), this.tareas.fetch({
                    success: function(t, n) {
                        e.tarea_table = new C.View.TareaTable({
                            el: $("#tarea_left"),
                            collection: t
                        }), e.tarea_form = new C.View.TareaForm({
                            el: $("#tarea_right"),
                            model: e.model,
                            collection: t,
                            tarea_table: e.tarea_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/ot/TareaTable.js", function(e, t, n, r, i, s) {
        C.View.TareaTable = Backbone.View.extend({
            name: "tarea",
            headers: [ "ID",  "Nombre", "Posición", "Descripción", "area_id", "Tiempo Estimado", "empleado_id"],
            attrs: [ "id", "nombre", "posicion", "descripcion", "area_id", "tiempoEstimado", "empleado_id"],
            data: null,
            hidden_columns: [ "posicion", "descripcion", "area_id", "empleado_id" ],
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".tarea_form"), e);
                });
            },
            events: {
                "click .tarea_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/ot/TareaForm.js", function(e, t, n, r, i, s) {
        C.View.TareaForm = Backbone.View.extend({
            name: "tarea_form",
            title: "Detalle de la Tarea",
            fields: {
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                posicion: {
                    label: "Posición",
                    check: "alpha",
                },
                tiempoEstimado:{
                    label: "Tiempo Estimado",
                    type: "text",
                    placeholder: "HH:MM",
                    force_label: !0
                },
                descripcion: {
                    label: "Descripción",
                    check: "alpha",
                    type: "textarea",
                    attrs: {
                        style: "height:100px;"
                    }
                },
                area_id: {
                    label: "Área Responsable",
                    type: "select",
                },
                empleado_id:{
                    label: "Empleado Responsable",
                    type: "select",
                },
            },
            isCRUD: !0,
            relations: {
                area_id: null,
                empleado_id: null
            },
            initialize: function() {
                var e= this;
                F.getAllFromModel("empleado", function(t) {
                  e.relations.empleados = t, F.getAllFromModel("area", function(t) {
                    e.relations.areas = t, F.createForm(e);
                  })
                });
            },
            events: {
                "click .tarea_form .BUTTON_create": "addTarea",
                "click .tarea_form .BUTTON_save": "editTarea",
                "click .tarea_form .BUTTON_delete": "delTarea"
            },
            getTable: function() {
                return this.options.tarea_table;
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
            addTarea: function() {
                var e = this;
//                if(($(".tarea_form").serializeObject().posicion == ''))
                if(($(".tarea_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  if($(".tarea_form").serializeObject().tiempoEstimado!=''){
                    if($(".tarea_form").serializeObject().tiempoEstimado[2] !=':')
                      F.msgError("El formato del Tiempo Estimado debe ser 'HH:MM'");
                    else{
                          $.ajax({
                            type: "POST",
                            url: "/tarea/",
                            data: $(".tarea_form").serialize(),
                            success: function() {
                                F.msgOK("Tarea creada exitosamente");
        		                    this.tareas = new C.Collection.Tareas(null, {
                                  view: this
                                }), this.tareas.fetch({
                                 success: function(t, n) {
                                   $("#tarea_left").empty()
                                   e.tarea_table = new C.View.TareaTable({
                                     el: $("#tarea_left"),
                                     collection: t
                                   })
                                 }
                               });
                            }
                     })
                    }
                  }else{
                    $.ajax({
                          type: "POST",
                          url: "/tarea/",
                          data: $(".tarea_form").serialize(),
                          success: function() {
                              F.msgOK("Tarea creada exitosamente");
	    		                    this.tareas = new C.Collection.Tareas(null, {
                                view: this
                              }), this.tareas.fetch({
                               success: function(t, n) {
                                 $("#tarea_left").empty()
                                 e.tarea_table = new C.View.TareaTable({
                                   el: $("#tarea_left"),
                                   collection: t
                                 })
                               }
                             });
                          }
                   })
                 }
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            editTarea: function() {
                var e = this;
                if(($(".tarea_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  if($(".tarea_form").serializeObject().tiempoEstimado!=''){
                    if($(".tarea_form").serializeObject().tiempoEstimado[2] !=':'){
                      F.msgError("El formato del Tiempo Estimado debe ser 'HH:MM'");
                    }else{
                      $.ajax({
                        type: "PUT",
                        url: "/tarea/"+this.getSelectionID(),
                        data: $(".tarea_form").serialize(),
                        success: function() {
                          F.msgOK("Tarea editada exitosamente")
		                      this.tareas = new C.Collection.Tareas(null, {
                            view: this
                          }), this.tareas.fetch({
                            success: function(t, n) {
                              $("#tarea_left").empty()
                              e.tarea_table = new C.View.TareaTable({
                                el: $("#tarea_left"),
                                collection: t
                              })
                            }
                          });
                        }
                      })
                    }
                  }else{
                    $.ajax({
                      type: "PUT",
                      url: "/tarea/"+this.getSelectionID(),
                      data: $(".tarea_form").serialize(),
                      success: function() {
                          F.msgOK("Tarea editada exitosamente")
	                        this.tareas = new C.Collection.Tareas(null, {
                            view: this
                          }), this.tareas.fetch({
                           success: function(t, n) {
                             $("#tarea_left").empty()
                             e.tarea_table = new C.View.TareaTable({
                               el: $("#tarea_left"),
                               collection: t
                             })
                           }
                         });
                      }
                   })
                 }
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
            },
            delTarea: function() {
                var e = this;
                F.msgConfirm("¿Desea eliminar a esta Tarea?", function() {
                    $.ajax({
                        type: "POST",
                        url: "/tarea/delete/"+e.getSelectionID(),
                        data: $(".tarea_form").serialize(),
                        success: function() {
                          F.msgOK("La Tarea ha sido eliminada");
          		            setTimeout(function(){location.reload()},1e3)
                        }
                    });
                });
            }
        });
    }),
  //PLAN
    e.define("/views/ot/Plan.js", function(e, t, n, r, i, s) {
        C.View.Plan = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.plans = new C.Collection.Plans(null, {
                    view: this
                }), this.plans.fetch({
                    success: function(t, n) {
                        e.plan_table = new C.View.PlanTable({
                            el: $("#plan_left"),
                            collection: t
                        }), e.plan_form = new C.View.PlanForm({
                            el: $("#plan_right"),
                            model: e.model,
                            collection: t,
                            plan_table: e.plan_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/ot/PlanTable.js", function(e, t, n, r, i, s) {
        C.View.PlanTable = Backbone.View.extend({
            name: "plan",
            headers: [ "ID",  "Nombre", "Descripción", "tarea_id"],
            attrs: [ "id", "nombre", "descripcion", "tarea_id" ],
            data: null,
            hidden_columns: [ "tarea_id"],
            datatableOptions: {
                aoColumns: [ null, null, null, null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".plan_form"), e);
                });
            },
            events: {
                "click .plan_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/ot/PlanForm.js", function(e, t, n, r, i, s) {
        C.View.PlanForm = Backbone.View.extend({
            name: "plan_form",
            title: "Detalle del Plan",
            fields: {
                nombre: {
                    label: "Nombre",
                    check: "alpha"
                },
                descripcion: {
                    label: "Descripción",
                    check: "alpha",
                    type: "textarea",
                    attrs: {
                        style: "height:100px;"
                    }
                },
                tarea_id: {
                    label: "Tarea(s)",
                    type: "selectmultiple"
                },
            },
            isCRUD: !0,

            relations: {
                tarea_id: null
            },
            initialize: function() {
                var e= this;
                F.getAllFromModel("tarea", function(t) {
                  e.relations.tareas = t, F.createForm(e);
                });
            },
            events: {
                "click .plan_form .BUTTON_create": "addPlan",
                "click .plan_form .BUTTON_save": "editPlan",
                "click .plan_form .BUTTON_delete": "delPlan"
            },
            getTable: function() {
                return this.options.plan_table;
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
            addPlan: function() {
              var e = this;
              if(C.Session.roleID() < 3){
                F.msgError("No tiene los permisos necesarios")
              }else{
                if(($(".plan_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  $.ajax({
                        type: "POST",
                        url: "/plan/",
                        data: $(".plan_form").serialize(),
                        success: function() {
                            F.msgOK("Plan creado exitosamente");
	  		            this.plans = new C.Collection.Plans(null, {
                              view: this
                            }), this.plans.fetch({
                             success: function(t, n) {
                               $("#plan_left").empty()
                               e.plan_table = new C.View.PlanTable({
                                 el: $("#plan_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
              }
            },
            editPlan: function() {
              var e = this;
 			        if(C.Session.roleID() < 3){
                F.msgError("No tiene los permisos necesarios")
              }else{
                if(($(".plan_form").serializeObject().nombre.replace(/\s/g, "") != '')){
                  $.ajax({
                        type: "PUT",
                        url: "/plan/"+this.getSelectionID(),
                        data: $(".plan_form").serialize(),
                        success: function() {
                            F.msgOK("Plan editado exitosamente")
  		                      this.plans = new C.Collection.Plans(null, {
                              view: this
                            }), this.plans.fetch({
                             success: function(t, n) {
                               $("#plan_left").empty()
                               e.plan_table = new C.View.PlanTable({
                                 el: $("#plan_left"),
                                 collection: t
                               })
                             }
                           });
                        }
                 })
               }else{
                  F.msgError("El campo 'Nombre' es OBLIGATORIO");
               }
             }
            },
            delPlan: function() {
              var e = this;
              if(C.Session.roleID() < 3){
                F.msgError("No tiene los permisos necesarios")
              }else{
                F.msgConfirm("¿Desea eliminar a este Plan?", function() {
                    $.ajax({
                        type: "POST",
                        url: "/plan/delete/"+e.getSelectionID(),
                        data: $(".plan_form").serialize(),
                        success: function() {
            		            this.plans = new C.Collection.Plans(null, {
                              view: this
                            }), this.plans.fetch({
                             success: function(t, n) {
                               $("#plan_left").empty(), $("#plan_right").empty(),
                               e.plan_table = new C.View.PlanTable({
                                 el: $("#plan_left"),
                                 collection: t
                               }), e.plan_form = new C.View.PlanForm({
                               el: $("#plan_right"),
                               model: e.model,
                               collection: t,
                               plan_table: e.plan_table
                               });
                             }
                           }), F.msgOK("El Plan ha sido eliminado");
                        }
                    });
                });
              }
            }
        });
    }),
//CAJA
//Revision
    e.define("/views/caja/Revision.js", function(e, t, n, r, i, s) {
        C.View.Revision = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.revisions = new C.Collection.Revisions(null, {
                    view: this
                }), this.revisions.fetch({
                    success: function(t, n) {
                        e.revision_table = new C.View.RevisionTable({
                            el: $("#revision_left"),
                            collection: t
                        }), e.revision_form = new C.View.RevisionForm({
                            el: $("#revision_right"),
                            model: e.model,
                            collection: t,
                            revision_table: e.revision_table
                        }), e.revision_options = new C.View.RevisionOptions({
                                el: $("#revision_left .fg-toolbar")[0],
                                revision_table: e.revision_table,
                                revision_form: n
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/caja/RevisionTable.js", function(e, t, n, r, i, s) {
        C.View.RevisionTable = Backbone.View.extend({
            name: "revision",
            headers: [ "ID(BD)", "Recibo", "Total", "Movimiento", "Monto", "Caja", "Concepto", "SubConcepto", "R-SubConcepto", "I/E", "Fecha"],
            attrs: [ "id", "recibo", "montoTotal", "observacion", "monto", "caja", "concepto", "subConcepto", "rSubConcepto", "ie", "creado"],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [ 8, "asc" ] ],
                iDisplayLength: 500
            },
            hidden_columns: [ "subConcepto", "rSubConcepto"],
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToForm($(".revision_form"), e);
                });
            },
            events: {
                "click .revision_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    //MarceloAssain
    e.define("/views/caja/RevisionOptions.js", function(e, t, n, r, i, s) {
        C.View.RevisionOptions = Backbone.View.extend({
            initialize: function() {
                this.render();
            },
            render: function() {
                return $(this.el).append(this.template()), this;
            },
            template: function() {
                var e = $("<div>", {
                    "class": "right_options"
                });
                return $(e).append($("<input>", {
                    type: "button",
                    "class": "caja_rango",
                    value: "Aceptar Rango",
                    style: "background-color: #E6A188",
                }),$("<input>", {
                    type: "button",
                    "class": "caja_anula",
                    value: "Anular Recibo",
                    style: "background-color: #AAE688",
                })) ,e;
            },
            events: {
                "click #revision_left .caja_aceptar": "aceptarTodo",
                "click #revision_left .caja_rango": "aceptarRango",
                "click #revision_left .caja_anula": "anularRecibo"
            },
            getForm: function() {
                return this.options.ot_form;
            },
            getTable: function() {
                return this.options.ot_table;
            },
            getSelectedRow: function() {
                return this.options.ot_table.selected_row;
            },
            listaEmpleados: function(h) {
                var t = $("<select name= empleado_id>", {
                    name: e
                });
                return $(t).append($("<option>", {
                  value: 0
                }).text("Seleccione el Empleado...")), _.each(h, function(e) {
                  $(t).append($("<option>", {
                      value: e.id
                  }).text(e.name));
                }), t;

            },
            listaRecibos: function(h) {
              var t = $("<select name= recibo_id>", {
                  name: e
              });
              return $(t).append($("<option>", {
                value: 0
              }).text("Seleccione el Recibo...")), _.each(h, function(e) {
                $(t).append($("<option>", {
                    value: e.id
                }).text(e.recibo));
              }), t;
            },
            anularRecibo: function() {
              var suthis= this;
              if(C.Session.roleID() < 4){
                F.msgError("No tiene los permisos necesarios")
              }else{
                $.ajax({
                  type: "GET",
                  url: "/revision/getAllRecibos",
                  success: function(recibos) {
                    $("body").append(
                      '<div id="caja_anular_window" style="display:none;">'+
                      '<h1 class="bold"style="font-size:20px;color:#FF6666; text-align:center">Seleccione el recibo a Anular</h1>'+
                      '<form id="anular_form" align="center">' +
                      '</form>' +
                      "</div>"
                    ),
                    $("#anular_form").append(suthis.listaRecibos(recibos)),
                    $("#anular_form").append('<input type="button" class="BUTTON_cancel lefty button" onclick=location.reload() value="Salir" /><input type="button" class="BUTTON_proceed_mov righty button" value="Anular Recibo" />');
                    $("#caja_anular_window .BUTTON_proceed_mov").on("click", function() {
                      if($("#anular_form").serializeObject().recibo_id != 0){
                        F.msgConfirm("¿Esta seguro de Anular el recibo?", function(){
                           console.log($("#anular_form").serializeObject().recibo_id);//ï
                           $.ajax({
                              url: "/revision/anularRecibo/"+$("#anular_form").serializeObject().recibo_id,
                              success: function() {
                                F.msgOK("El recibo ha sido anulado");
                                setTimeout(function(){location.reload()},1e3)
                              }
                           })
                        });
                       }else{
                         F.msgError("Debe seleccionar el recibo")
                       }
                    }),
                    $.blockUI({
                      message: $('#caja_anular_window'),
                      css: {
                        top: "0",
                        left: "35%",
                        width: "28%",
                        border: "none",
                        padding: "1em",
                        cursor: "default"
                      }
                    })
                  }
                })
              }
            },
            aceptarRango: function(){
              var suthis= this;
              if(C.Session.roleID() < 4){
                F.msgError("No tiene los permisos necesarios")
              }else{
                $.ajax({
                    type: "GET",
                    url: "/revision/detalleRango",
                    success: function(rango) {
                        $.ajax({
                            type: "GET",
                            url: "/empleado",
                            success: function(h) {
                                var dias= "max="+rango.diaMax+" min="+rango.diaMin;
                                var recibos=  "max="+rango.reciboMax+" min="+rango.reciboMin;
                                var tabla= '<table > '+
                                  '<tr align="center"><td>Criterio</td><td>Fecha Desde </td><td></td> <td>Fecha Hasta</td></tr>'+
                                  '<tr align="center"><td><input type="checkbox" name="rangoDias"/></td><td><input type="date" name="fd" value="'+rango.diaMin+'" '+dias+'></td><td> - </td> <td><input type="date" name="fh" value="'+rango.diaMax+'" '+dias+'></td></tr>'+
                                  '<tr align="center"><td></td><td></td><td>O bien</td><td></td>'+
                                  '<tr align="center"><td></td><td>Recibo Minimo</td><td></td><td>Recibo Maximo</td>'+
                                  '<tr align="center"><td><input type="checkbox" name="rangoRecibos"/></td><td><input type="number" name="rmin" value="'+rango.reciboMin+'" '+recibos+'></td><td> - </td><td><input type="number" name="rmax" value="'+rango.reciboMax+'" '+recibos+'></td>'+ '</table>'
                                $("body").append(
                                  '<div id="caja_rango_window" style="display:none;">'+
                                  '<h1 class="bold"style="font-size:20px;color:#FF6666; text-align:center">Seleccione el rango a Guardar</h1>'+
                                  '<form id="ver_mas_form" align="center">' +
                                  '<br /><br /><br /></form>' +
                                  '<input type="button" class="BUTTON_cancel lefty button" onclick=location.reload() value="Salir" />'+
                                  '<input type="button" style="background-color:green"class="BUTTON_proceed_mov center button" value="Realizar Movimientos" />'+
                                  '<input type="button" style="background-color:red" class="BUTTON_proceed_impr righty button" value="imprimir" />'+
                                  "</div>"
                                ),
                                $("#ver_mas_form").empty().append(tabla),
                                $("#ver_mas_form").append(suthis.listaEmpleados(h)),
                                $("#caja_rango_window .BUTTON_proceed_mov").on("click", function() {
                                  var rta =$("#ver_mas_form").serializeObject();
                                  if(rta.rangoDias || rta.rangoRecibos){
                                    if(rta.empleado_id!=0){
                                     $.ajax({
                                        type: "POST",
                                        url: "/revision/realizarMovimientos",
                                        data: rta,
                                        success: function(e) {
                                            console.log(e)
                                            var row= '';
                                            e.movs.forEach(function(m){
                                                row+=
                                                    "<tr>"+
                                                    "<td>"+m.recibo+"</td>"+
                                                    "<td>"+m.fecha+"</td>"+
                                                    "<td>"+m.movimiento+"</td>"+
                                                    "<td>"+m.concepto+"</td>"+
                                                    "<td>"+m.caja+"</td>"+
                                                    "<td>"+m.ie+"</td>"+
                                                    '<td align="right">'+m.monto+"</td>"+
                                                    '<td align="right">'+m.monto_total+"</td>"+
                                                    "</tr>";
                                            })
                                            var finalRows=
                                                '<tr><td></td><td></td><td></td><td></td><td>Total</td><td align="right">'+e.total+'</td><td></td></tr>'+
                                                '<tr><td></td><td></td><td></td><td></td><td>Caja</td><td align="right">'+e.caja+'</td><td></td></tr>'+
                                                '<tr><td></td><td></td><td></td><td></td><td>Banco</td><td align="right">'+e.banco+'</td><td></td></tr>'+
                                                '<tr><td></td><td></td><td></td><td></td><td>CtaCte</td><td align="right">'+e.ctaCte+'</td><td></td></tr>';
                                            var tabla=
                                                '<table  style="border:1px solid font-size:10px;>'+
                                                '<tr align="center"><td>Recibo</td><td>Fecha</td><td>Detalle</td>'+
                                                '<td>Concepto</td><td>Ing/Egr</td><td>Caja</td><td>Monto</td><td>Monto Total</td></tr>'+
                                                row+
                                                finalRows+
                                                '</table>'
                                            var reciboh=
                                                '<div id="imprimirCaja" style="display:none; text-align: left;">' +
                                                    '<div style="width: 670px; height: padding: 6px">'+
                                                        '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                                              '<span style="font-size:20px; "><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span><span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221)452-2523<br /></center></span>'+
                                                        '</div>'+
                                                        '<div style="border:solid thin; border-radius: 7px; width:36%; float:right; height:85px; padding: 6px">'+
                                                              '<br /><span style="font-weight:bold;"> Recibo Nº H-'+e.recibo+'</span><br />'+
                                                              'Fecha: '+e.fechaActual+
                                                        '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                                                        '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                              '</div>'+
                                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                                  '<span style="font-weight:bold;"> Descripción del movimiento: </span>Arqueo de Caja'+
                                                              '</div>'+
                                                        '</div>'+
                                                        '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                              '<span style="font-weight:bold;"> Operador: </span>'+ "Jorge Pressacco"+
                                                        '</div>'+
                                                        '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                              tabla+
                                                        '</div>'+
                                                         '<div style="text-align:center; border:solid thin; border-radius: 7px; width:36%; float:left; padding: 6px;">'+
                                                              '<br  /><br  /><br  />'+
                                                              '-------------------------------------------<br />'+
                                                              '<br  /><br  />'+
                                                              '<p><span style="font-weight:bold;">Jorge Pressacco</span></p><br  />'+
                                                        '</div>'+
                                                        '<div style="text-align:center; border:solid thin; border-radius: 7px; width:36%; float:right; padding: 6px;">'+
                                                              '<br  /><br  /><br  />'+
                                                              '-------------------------------------------<br />'+
                                                              '<br  /><br  />'+
                                                              '<p><span style="font-weight:bold;">'+e.empleado+'</span></p><br  />'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'
                                              ;
                                            $('body').append(reciboh)
                                            $.blockUI({
                                            message: $('#imprimirCaja'),
                                            css: {
                                                    top: '0%',
                                                    left: '0%',
                                                    width: '100%',
                                                    height: '100%',
                                                    border: '1px',
                                                    padding: '0%',
                                                    cursor: 'default'
                                                }
                                            });
                                        }
                                     })
                                    }else{
                                      F.msgError("El campo empleado es obligatorio");
                                    }
                                  }else{
                                    F.msgError("Tilde un criterio de búsqueda al menos");
                                  }
                                }),
                                $("#caja_rango_window .BUTTON_proceed_impr").on("click", function() {
                                  var rta=$("#ver_mas_form").serializeObject();
                                  if(rta.rangoDias || rta.rangoRecibos){
                                    if(rta.empleado_id!=0){
                                     $.ajax({
                                        type: "POST",
                                        url: "/revision/aceptarRango",
                                        data: rta,
                                        success: function(e) {
                                            var row= '';
                                            console.log(e)
                                            e.movs.forEach(function(m){
                                                row+=
                                                    "<tr>"+
                                                    "<td>"+m.recibo+"</td>"+
                                                    "<td>"+m.fecha+"</td>"+
                                                    "<td>"+m.movimiento+"</td>"+
                                                    "<td>"+m.concepto+"</td>"+
                                                    "<td>"+m.caja+"</td>"+
                                                    "<td>"+m.ie+"</td>"+
                                                    '<td align="right">'+m.monto+"</td>"+
                                                    '<td align="right">'+m.monto_total+"</td>"+
                                                    "</tr>";
                                            })
                                            var finalRows=
                                                '<tr><td></td><td></td><td></td><td></td><td>Total</td><td align="right">'+e.total+'</td><td></td></tr>'+
                                                '<tr><td></td><td></td><td></td><td></td><td>Caja</td><td align="right">'+e.caja+'</td><td></td></tr>'+
                                                '<tr><td></td><td></td><td></td><td></td><td>Banco</td><td align="right">'+e.banco+'</td><td></td></tr>'+
                                                '<tr><td></td><td></td><td></td><td></td><td>CtaCte</td><td align="right">'+e.ctaCte+'</td><td></td></tr>';
                                            var tabla=
                                                '<table  style="border:1px solid font-size:10px;>'+
                                                '<tr align="center"><td>Recibo</td><td>Fecha</td><td>Detalle</td>'+
                                                '<td>Concepto</td><td>Caja</td><td>Ing/Egr</td><td>Monto</td><td>Monto Total</td></tr>'+
                                                row+
                                                finalRows+
                                                '</table>'
                                            var reciboh=
                                                '<div id="imprimirCaja" style="display:none; text-align: left;">' +
                                                    '<div style="width: 670px; height: padding: 6px">'+
                                                        '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                                              '<span style="font-size:20px; "><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span><span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221)452-2523<br /></center></span>'+
                                                        '</div>'+
                                                        '<div style="border:solid thin; border-radius: 7px; width:36%; float:right; height:85px; padding: 6px">'+
                                                              '<br /><span style="font-weight:bold;"> Recibo Nº H-'+e.recibo+'</span><br />'+
                                                              'Fecha: '+e.fechaActual+'<br />'+
                                                              'Recibo Temporal'+
                                                        '</div> <br /><br /><br /><br /><br /><br /><br />'+
                                                        '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                              '</div>'+
                                                              '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                                  '<span style="font-weight:bold;"> Descripción del movimiento: </span>Arqueo de Caja'+
                                                              '</div>'+
                                                        '</div>'+
                                                        '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                              '<span style="font-weight:bold;"> Operador: </span>'+ "Jorge Pressacco"+
                                                        '</div>'+
                                                        '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                                              tabla+
                                                        '</div>'+
                                                         '<div style="text-align:center; border:solid thin; border-radius: 7px; width:36%; float:left; padding: 6px;">'+
                                                              '<br  /><br  /><br  />'+
                                                              '-------------------------------------------<br />'+
                                                              '<br  /><br  />'+
                                                              '<p><span style="font-weight:bold;">Jorge Pressacco</span></p><br  />'+
                                                        '</div>'+
                                                        '<div style="text-align:center; border:solid thin; border-radius: 7px; width:36%; float:right; padding: 6px;">'+
                                                              '<br  /><br  /><br  />'+
                                                              '-------------------------------------------<br />'+
                                                              '<br  /><br  />'+
                                                              '<p><span style="font-weight:bold;">'+e.empleado+'</span></p><br  />'+
                                                        '</div>'+
                                                    '</div>'+
                                                    '<H1 style="font-weight:bold;">NO VÁLIDO COMO RECIBO (Recibo Temporal)</H1><br />'+
                                                '</div>'
                                              ;
                                            $('body').append(reciboh)
                                            $.blockUI({
                                            message: $('#imprimirCaja'),
                                            css: {
                                                    top: '0%',
                                                    left: '0%',
                                                    width: '100%',
                                                    height: '100%',
                                                    border: '1px',
                                                    padding: '0%',
                                                    cursor: 'default'
                                                }
                                            });
                                        }
                                     })
                                    }else{
                                      F.msgError("El campo empleado es obligatorio");
                                    }
                                  }else{
                                    F.msgError("Tilde un criterio de búsqueda al menos");
                                  }
                                }),
                                $.blockUI({
                                  message: $("#caja_rango_window"),
                                  css: {
                                    "text-align": "left",
                                    width: "70%",
                                    top: "3%",
                                    left: "3%",
                                    botton: "3%",
                                    height: "85%",
                                    border: "none",
                                    overflow: "auto",
                                    padding: "1%",
                                    cursor: "default",
                                  }
                                })
                            }
                        })
                    }
                })
              }
            },
            aceptarTodo: function() {
              if(C.Session.roleID() < 4){
                F.msgError("No tiene los permisos necesarios")
              }else{
                F.msgConfirm("¿Esta seguro de realizar Enviar Todos los Movimientos a las Cajas?", function(){
                   $.ajax({
                      url: "/revision/aceptarTodo",
                      success: function() {
                        F.msgOK("Todos los movimientos se realizaron Existosamente");
                        setTimeout(function(){location.reload()},1e3)
                      }
                   })
                });
              }
            }
        });
    }),
    e.define("/views/caja/RevisionForm.js", function(e, t, n, r, i, s) {
        C.View.RevisionForm = Backbone.View.extend({
            name: "revision_form",
            title: "Movimientos a Revisar",
            fields: {
                observacion: {
                    label: "Detalle",
                    attrs: {
                      disabled: "disabled"
                    }
                },
                concepto: {
                    label: "Concepto",
                    attrs: {
                      disabled: "disabled"
                    }
                },
                subConcepto: {
                    label: "SubConcepto",
                    attrs: {
                      disabled: "disabled"
                    }
                },
                rSubConcepto: {
                    label: "R-SubConcepto",
                    attrs: {
                      disabled: "disabled"
                    }
                },
                ie: {
                    label: "I/E",
                    attrs: {
                      disabled: "disabled"
                    }
                },
                monto: {
                    label: "Monto",
                    attrs: {
                      disabled: "disabled"
                    }
                },
            },

            isCRUD: !0,

            buttons: {
                create: !1,
                save: !0,
                cancel: !1,
                "delete": !1
            },

            initialize: function() {
                var e= this;
                F.createForm(e);
            },
            events: {
                "click .revision_form .BUTTON_save": "editRevision",
            },
            getTable: function() {
                return this.options.plan_table;
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
            editRevision: function() {
                var e = this;
                $.ajax({
                    type: "PUT",
                    url: "/revision/"+e.getSelectionID(),
                    success: function() {
                        F.msgOK("SE ENVIO AL LUGAR CORRESPONDIENTE");
                        setTimeout(function(){location.reload()},1e3)
                    }
                 })
            },
        });
    }),
//Caja
    e.define("/views/caja/Caja.js", function(e, t, n, r, i, s) {
        C.View.Caja = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.cajas = new C.Collection.Cajas(null, {
                    view: this
                }), this.cajas.fetch({
                    success: function(t, n) {
                        e.caja_table = new C.View.CajaTable({
                            el: $("#caja_left"),
                            collection: t
                        }), e.caja_infoCard = new C.View.CajaInfoCard({
                            el: $("#caja_right"),
                            model: e.model,
                            collection: t,
                            caja_table: e.caja_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/caja/CajaTable.js", function(e, t, n, r, i, s) {
        C.View.CajaTable = Backbone.View.extend({
            name: "caja",
            headers: [ "ID", "MontoTotal", "Movimiento", "Concepto", "SubConcepto", "R-SubConcepto", "Monto", "I/E", "Creado", "Guardado"],
            attrs: [ "id", "montoTotal", "observacion", "concepto", "subConcepto", "rSubConcepto", "monto", "ie", "creado", "recibido" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [9, "asc"] ],
                iDisplayLength: 500
            },
            hidden_columns: [ "montoTotal", "concepto", "subConcepto", "rSubConcepto"],
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToInfoCard($(".caja_infocard"), e);
                });
            },
            events: {
                "click .caja_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/caja/CajaInfoCard.js", function(e, t, n, r, i, s) {
        C.View.CajaInfoCard = Backbone.View.extend({
            name: "caja_infocard",
            title: "Datos de la Caja",
            fieldnames: {
                montoTotal: "Monto Total",
                observacion: "Detalle",
                concepto: "Concepto",
                subConcepto: "SubConcepto",
                rSubConcepto: "R-SubConcepto",
                creado: "Creado",
                recibido: "Recibido",
                ie: "I/E",
                monto: "Monto (Movimiento)",
            },
            initialize: function() {
                var e = this;
                F.createInfoCard(e, $("#caja_right"));
            }
        });
    }),
//CBanco
    e.define("/views/caja/CBanco.js", function(e, t, n, r, i, s) {
        C.View.CBanco = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.cBancos = new C.Collection.CBancos(null, {
                    view: this
                }), this.cBancos.fetch({
                    success: function(t, n) {
                        e.cBanco_table = new C.View.CBancoTable({
                            el: $("#cBanco_left"),
                            collection: t
                        }), e.cBanco_infoCard = new C.View.CBancoInfoCard({
                            el: $("#cBanco_right"),
                            model: e.model,
                            collection: t,
                            cBanco_table: e.cBanco_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/caja/CBancoTable.js", function(e, t, n, r, i, s) {
        C.View.CBancoTable = Backbone.View.extend({
            name: "cBanco",
            headers: [ "ID", "MontoTotal", "Movimiento", "Concepto", "SubConcepto", "R-SubConcepto", "Monto", "I/E", "Creado", "Guardado"],
            attrs: [ "id", "montoTotal", "observacion", "concepto", "subConcepto", "rSubConcepto", "monto", "ie", "creado", "recibido" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [9, "asc"] ],
                iDisplayLength: 500
            },
            hidden_columns: [ "montoTotal", "concepto", "subConcepto", "rSubConcepto"],
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToInfoCard($(".cBanco_infocard"), e);
                });
            },
            events: {
                "click .cBanco_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/caja/CBancoInfoCard.js", function(e, t, n, r, i, s) {
        C.View.CBancoInfoCard = Backbone.View.extend({
            name: "cBanco_infocard",
            title: "Datos del Banco",
            fieldnames: {
                montoTotal: "Monto Total",
                observacion: "Detalle",
                concepto: "Concepto",
                subConcepto: "SubConcepto",
                rSubConcepto: "R-SubConcepto",
                creado: "Creado",
                recibido: "Recibido",
                ie: "I/E",
                monto: "Monto (Movimiento)",
            },
            initialize: function() {
                var e = this;
                F.createInfoCard(e, $("#cBanco_right"));
            }
        });
    }),
//CtaCliente
    e.define("/views/caja/CtaCliente.js", function(e, t, n, r, i, s) {
        C.View.CtaCliente = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.ctaClientes = new C.Collection.CtaClientes(null, {
                    view: this
                }), this.ctaClientes.fetch({
                    success: function(t, n) {
                        e.ctaCliente_table = new C.View.CtaClienteTable({
                            el: $("#ctaCliente_left"),
                            collection: t
                        }), e.ctaCliente_infoCard = new C.View.CtaClienteInfoCard({
                            el: $("#ctaCliente_right"),
                            model: e.model,
                            collection: t,
                            ctaCliente_table: e.ctaCliente_table
                        });
                    }
                });
            }
        });
    }),
    e.define("/views/caja/CtaClienteTable.js", function(e, t, n, r, i, s) {
        C.View.CtaClienteTable = Backbone.View.extend({
            name: "ctaCliente",
            headers: [ "ID", "MontoTotal", "Movimiento", "Concepto", "SubConcepto", "R-SubConcepto", "Monto", "I/E", "Creado", "Guardado"],
            attrs: [ "id", "montoTotal", "observacion", "concepto", "subConcepto", "rSubConcepto", "monto", "ie", "creado", "recibido" ],
            data: null,
            datatableOptions: {
                aoColumns: [ null, null, null, null, null, null, null, null, null, null ],
                aaSorting: [ [9, "asc"] ],
                iDisplayLength: 500
            },
            hidden_columns: [ "montoTotal", "concepto", "subConcepto", "rSubConcepto"],
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                    F.assignValuesToInfoCard($(".ctaCliente_infocard"), e);
                });
            },
            events: {
                "click .ctaCliente_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/caja/CtaClienteInfoCard.js", function(e, t, n, r, i, s) {
        C.View.CtaClienteInfoCard = Backbone.View.extend({
            name: "ctaCliente_infocard",
            title: "Datos de CtaCliente",
            fieldnames: {
                montoTotal: "Monto Total",
                observacion: "Detalle",
                concepto: "Concepto",
                subConcepto: "SubConcepto",
                rSubConcepto: "R-SubConcepto",
                creado: "Creado",
                recibido: "Recibido",
                ie: "I/E",
                monto: "Monto (Movimiento)",
            },
            initialize: function() {
                var e = this;
                F.createInfoCard(e, $("#ctaCliente_right"));
            }
        });
    }),
    e.define("/views/caja/AjusteCajaOptions.js", function(e, t, n, r, i, s) {
        C.View.AjusteCajaOptions = Backbone.View.extend({
            initialize: function() {
                this.render();
            },
            render: function() {
                return $(this.el).append(this.template()), this;
            },
            template: function() {
                var e = $("<div>", {
                    "class": "right_options"
                });
                return $(e).append($("<input>", {
                    type: "button",
                    "class": "mostrar_arqueo",
                    value: "Arqueo",
                    style: "background-color: #E6A188",
                })) ,e;
            },
            events: {
                "click #ajusteCaja_left .mostrar_arqueo": "mostrar_arqueo"
            },
            getForm: function() {
                return this.options.ot_form;
            },
            getTable: function() {
                return this.options.ot_table;
            },
            getSelectedRow: function() {
                return this.options.ot_table.selected_row;
            },
            mostrar_arqueo: function() {
              if(C.Session.roleID() < 4){
                F.msgError("No tiene los permisos necesarios")
              }else{
                $.ajax({
                    type: "GET",
                    url: "/caja/getAll",
                    success: function(mo) {
                        var arqueo= '<div id="arqueoDiv" style="display:none;">'+
                                    '<div style="width: 600px; padding: 6px">'+
                                        '<div style="border:solid 3px; height:85px; border-radius: 7px; width:56%; float:left; padding: 6px">'+
                                                '<span style="font-size:20px; "><span style="font-weight:bold;"><center> ESTUDIO INTEGRAL <br />PRESSACCO & ASOC.</center></span></span><span style="font-size:4px;"><br /></span><span style="font-size:10px;"><center>Diag 75 Nº 689 e/20 Y 21 - La Plata - (0221)452-2523<br /></center></span>'+
                                        '</div>'+
                                        '<div style="border:solid thin; border-radius: 7px; width:36%; float:right; padding: 6px">'+
                                            '<span style="font-weight:bold;">DETALLE DEL RECIBO</span><br /><br /><br />'+
                                            mo.detalleFecha+'<br /><br /><br />'+
                                        '</div> <br /><br /><br  /><br  /><br  /><br  /><br  />'+
                                        '<div style="border:solid thin; border-radius: 7px; width:100%">'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                            '</div>'+
                                            '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px; height: 120px;">'+
                                                mo.caja+'<--caja<br />'+
                                                mo.banco+'<--banco<br />'+
                                                mo.ctaCliente+'<--ctaCliente<br />'+
                                                mo.cajaP+'<--cajaP<br />'+
                                                mo.bancoP+'<--bancoP<br />'+
                                                mo.ctaClienteP+'<--ctaCliente<br />'+
                                            '</div>'+
                                        '</div>'+
                                        '<div style="border:solid thin; border-radius: 7px; width:98%; padding: 6px">'+
                                            '<span style="font-weight:bold; align:left ">Operador: '+mo.operador+'</span>'+
                                        '</div>'+
                                        '<div style="text-align:center; border:solid thin; border-radius: 7px; width:36%; float:right; padding: 6px;">'+
                                            '<br  />'+
                                            '-------------------------------------------<br />'+
                                            '<br  />'+
                                            '<p><span style="font-weight:bold;">Jorge Pressacco</span></p><br  />'+
                                        '</div>'+
                                    '</div>'+
                                '</div>';
                        $('body').append(arqueo)
                        $.blockUI({
                        message: $('#arqueoDiv'),
                        css: {
                                top: '0%',
                                left: '0%',
                                width: '100%',
                                height: '100%',
                                border: '1px',
                                padding: '0%',
                                cursor: 'default'
                            }
                        });
                    }
                })
              }
            }
        });
    }),
    e.define("/views/caja/AjusteCaja.js", function(e, t, n, r, i, s) {
        C.View.AjusteCaja = Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                var e = this;
                this.ajusteCajas = new C.Collection.AjusteCajas(null, {
                    view: this
                }), this.ajusteCajas.fetch({
                    success: function(t, n) {
                        e.ajusteCaja_table = new C.View.AjusteCajaTable({
                            el: $("#ajusteCaja_left"),
                            collection: t
                        }), e.ajusteCaja_form = new C.View.AjusteCajaForm({
                            el: $("#ajusteCaja_right"),
                            model: e.model,
                            collection: t,
                            ajusteCaja_table: e.ajusteCaja_table
                        }), e.ajusteCaja_options = new C.View.AjusteCajaOptions({
                                el: $("#ajusteCaja_left .fg-toolbar")[0],
                                ajusteCaja_table: e.ajusteCaja_table,
                                ajusteCaja_form: n
                        });;
                    }
                });
            }
        });
    }),
    e.define("/views/caja/AjusteCajaTable.js", function(e, t, n, r, i, s) {
        C.View.AjusteCajaTable = Backbone.View.extend({
            name: "ajusteCaja",
            headers: [ "ID",  "CAJA", "MONTO"],
            attrs: [ "id", "nombre", "monto"],
            data: null,
            hidden_columns: [],
            datatableOptions: {
                aoColumns: [ null, null,  null],
                aaSorting: [ [ 1, "asc" ] ],
                iDisplayLength: 500
            },
            initialize: function() {
                this.data = this.options.collection, F.createDataTable(this, function(e) {
                  //  F.assignValuesToForm($(".ajusteCaja_form"), e);
                });
            },
            events: {
                "click .ajusteCaja_table tr": "selectRow"
            },
            selectRow: function(e) {
                this.selected_row = $(e.currentTarget);
            }
        });
    }),
    e.define("/views/caja/AjusteCajaForm.js", function(e, t, n, r, i, s) {
        C.View.AjusteCajaForm = Backbone.View.extend({
            name: "ajusteCaja_form",
            title: "Ajustar Caja",
            fields: {
              ie: {
                  label: "I/E",
                  type: "select_ie"
              },
              monto: {
                  label: "Monto"
              },
              observacion: {
                  label: "Detalle",
                  check: "alpha",
                  type: "textarea",
                  attrs: {
                      style: "height:100px;"
                  }
              },
              caja_id: {
                  label: "Caja",
                  type: "select"
              },
              concepto_id: {
                  label: "Concepto",
                  type: "select_conNombre"
              },
              subConcepto_id: {
                  label: "SubConcepto",
                  type: "select_conNombre"
              },
              rSubConcepto_id: {
                  label: "R-SubConcepto",
                  type: "select_conNombre"
              },
            },
            isCRUD: !1,
            buttons: {
                create: !1,
                save: !0,
                cancel: !1,
                "delete": !1
            },
            relations: {
                concepto_id: null,
                subConcepto_id: null,
                rSubConcepto_id: null,
            },
            initialize: function() {
                var e= this;
                F.getAllFromModel("concepto", function(t) {
                  e.relations.conceptos = t, e.relations.subConceptos = t, e.relations.rSubConceptos = t,
                  F.getAllFromModel("ajusteCaja", function(t) {
                    e.relations.cajas = t, F.createForm(e);
                  })
                })
            },
            events: {
                "click .ajusteCaja_form .BUTTON_save": "addAjusteCaja",
            },
            getTable: function() {
                return this.options.ajusteCaja_table;
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
            addAjusteCaja: function() {
               var e = this;
               if(($(".ajusteCaja_form").serializeObject().nombre != '')
               && ($(".ajusteCaja_form").serializeObject().i/e != '' )
               && ($(".ajusteCaja_form").serializeObject().monto > 0 )
               && ($(".ajusteCaja_form").serializeObject().observacion != '')
               ){
                 $.ajax({
                    type: "PUT",
                    url: "/ajusteCaja",
                    data: $(".ajusteCaja_form").serialize(),
                    success: function() {
                      F.msgOK("Caja lista para actualizar, Recuerde ir a la pestaña revisión para que los cambios queden asentados en las cajas");
                      setTimeout(function(){location.reload()},1e3)
                    }
                 })
               }else{
                 F.msgError('Los Campos I/E, Monto, Detalle y Caja son Obligatorios')
               }
            },
        });
    }),
//FIN!!
     e.define("/Router.js", function(e, t, n, r, i, s) {
        $(function() {
            var e = Backbone.Router.extend({
                routes: {
//CODE ROUTE
                    "": "getNov",
                    "/": "getNov",
                    "/inicio/novedades": "getNov",
                    "/inicio/novTarea": "getNovTarea",
                    "/cliente": "getCliente",
                    "/cliente/nomina": "getCliente",
		                "/cliente/cuentaCorriente": "getClienteCuentaCorriente",
		                "/cliente/deuda": "getClienteDeuda",
		                "/cliente/impuesto": "getClienteImpuesto",
		                "/cliente/clave": "getClienteClave",
		                "/cliente/listado": "getClienteListado",
		                "/cliente/listDeuda": "getClienteListDeuda",
		                "/cliente/ajusteCta": "getAjusteCta",
                    "/opciones/perfil": "getPerfil",
                    "/crud": "getEmpleado",
                    "/crud/empleado": "getEmpleado",
                    "/crud/usuario": "getUsuario",
                    "/crud/clasificacion": "getClasificacion",
                    "/crud/concepto": "getConcepto",
                    "/crud/banco": "getBanco",
                    "/crud/actividad": "getActividad",
                    "/crud/clave": "getClave",
                    "/crud/area": "getArea",
                    "/crud/rubro": "getRubro",
                    "/crud/impuesto": "getImpuesto",
                    "/ot": "getOtAudit",
                    "/ot/tarea": "getTarea",
                    "/ot/plan": "getPlan",
                    "/ot/admin": "getOtAdmin",
                    "/ot/otTareaAll": "getOtTareaAll",
                    "/ot/audit": "getOtAudit",
                    "/ot/oc": "getOc",
                    "/ot/audit/:ot_number": "getOtAuditAt",
                    "/ot/history": "getOtHistory",
                    "/ie": "getClientePago",
                    "/ie/clienteDocumentacion": "getClienteDocumentacion",
                    "/ie/clienteHistorial": "getClienteHistorial",
                    "/ie/ieOt": "getIeOt",
                    "/ie/ieOc": "getIeOc",
                    "/ie/clientePago": "getClientePago",
                    "/caja": "getRevision",
                    "/caja/revision": "getRevision",
                    "/caja/caja": "getCaja",
                    "/caja/cBanco": "getCBanco",
                    "/caja/ctaCliente": "getCtaCliente",
                    "/caja/ajusteCaja": "getAjusteCaja",
                    "/pagarImp": "getPagarImp",
                    "/pagarImp/pagoImp": "getPagarImp",
                    "/pagarImp/recepImp": "getRecepImp",
                    "/pagarImp/descImp": "getDescImp",
                    "/pagarImp/archImp": "getArchImp",
                    "/pagarImp/archivado": "getArchivado",
                    "/gestCrono": "getGestAsignacion",
                    "/gestCrono/asignacion": "getGestAsignacion",
                    "/gestCrono/aviso": "getGestAviso",
                    "/gestCrono/avisoTest": "getGestAvisoTest",
                    "/gestCrono/avisoPersonal": "getGestAvisoPersonal",
                    "/gestCrono/asigPie": "getGestAsigPie",
                    "/cronograma": "getAsignacion",
                    "/cronograma/vencimiento": "getCronograma",
                    "/cronograma/recepcion": "getRecepcion",
                    "/cronograma/aviso": "getAviso",
                    "/cronograma/asignacion": "getAsignacion",
//                    "/cronograma/auditarImpuesto": "getAuditarImpuesto",
                    "/carga/cargado": "getCargado",
                    "/carga/noCargado": "getNoCargado",
                    "/carga": "getCargaFijo",
                    "/carga/cargaFijo": "getCargaFijo",
                    "/carga/sindicato": "getSindicato",
                    "/carga/otro": "getOtro",
                    "/carga/*undefined": "getCarga",
// ROUTES!!!
                    "*undefined": "notFound"
                },
//CODE GETS
                getNov: function() {
                    var e = function() {
                        document.title = C.TITLE + "Novedades", this.novedades_widget = C.Widget.Novedades.initialize(), this.novedades_view = new C.View.Novedades({
                            model: new C.Model.Novedades
                        }), F.R.highlightCurrentModule("inicio/novedades");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getNovTarea: function() {
                    var e = function() {
                        document.title = C.TITLE + "Tareas", this.novedades_widget = C.Widget.Novedades.initialize(), this.novTarea_view = new C.View.NovTarea({
                            model: new C.Model.NovTarea
                        }), F.R.highlightCurrentModule("inicio/novTarea");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getCliente: function() {
                    var e = function() {
                        document.title = C.TITLE + "Clientes", this.cliente_widget = C.Widget.Cliente.initialize(), this.cliente_view = new C.View.Cliente({
                            model: new C.Model.Cliente
                        }), F.R.highlightCurrentModule("cliente/nomina");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getClienteCuentaCorriente: function(){
                    var e = function() {
                        document.title = C.TITLE + "Cuentas Corrientes", this.cliente_widget = C.Widget.Cliente.initialize(), this.cuentaCorriente_view = new C.View.CuentaCorriente({
                            model: new C.Model.CuentaCorriente
                        }), F.R.highlightCurrentModule("cliente/cuentaCorriente");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
	     	        },
	     	        getClienteClave: function(){
                    var e = function() {
                        document.title = C.TITLE + "Claves", this.cliente_widget = C.Widget.Cliente.initialize(), this.clienteClave_view = new C.View.ClienteClave({
                            model: new C.Model.Cliente
                        }), F.R.highlightCurrentModule("cliente/clave");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
	     	        },
	     	        getClienteImpuesto: function(){
                    var e = function() {
                        document.title = C.TITLE + "Impuestos", this.cliente_widget = C.Widget.Cliente.initialize(), this.clienteImpuesto_view = new C.View.ClienteImpuesto({
                            model: new C.Model.Cliente
                        }), F.R.highlightCurrentModule("cliente/impuesto");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
	     	        },
                getClienteDeuda: function(){
                    var e = function() {
                        document.title = C.TITLE + "Deudas", this.cliente_widget = C.Widget.Cliente.initialize(), this.deuda_view = new C.View.Deuda({
                            model: new C.Model.Deuda
                        }), F.R.highlightCurrentModule("cliente/deuda");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
	     	        },
	     	        getClienteListado: function(){
                    var e = function() {
                        document.title = C.TITLE + "Listado", this.cliente_widget = C.Widget.Cliente.initialize(), this.listado_view = new C.View.Listado({
                            model: new C.Model.Listado
                        }), F.R.highlightCurrentModule("cliente/listado");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
	     	        },
	     	        getClienteListDeuda: function(){
                    var e = function() {
                        document.title = C.TITLE + "ListDeuda", this.cliente_widget = C.Widget.Cliente.initialize(), this.listDeuda_view = new C.View.ListDeuda({
                            model: new C.Model.ListDeuda
                        }), F.R.highlightCurrentModule("cliente/listDeuda");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
	     	        },
	     	        getAjusteCta: function(){
                    var e = function() {
                        document.title = C.TITLE + "AjusteCta", this.cliente_widget = C.Widget.Cliente.initialize(), this.ajusteCta_view = new C.View.AjusteCta({
                            model: new C.Model.AjusteCta
                        }), F.R.highlightCurrentModule("cliente/ajusteCta");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
	     	        },
	              getPerfil: function() {
                    var e = function() {
                        document.title = C.TITLE + "Perfil", this.perfil_widget = C.Widget.Perfil.initialize(), this.perfil_view = new C.View.Perfil({
                            model: new C.Model.Perfil
                        }), F.R.highlightCurrentModule("opciones/perfil");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getEmpleado: function(){
                    var e = function() {
                        document.title = C.TITLE + "Empleados", this.empleado_widget = C.Widget.CRUD.initialize("empleado"), this.empleado_view = new C.View.Empleado({
                            model: new C.Model.Empleado
                        }), F.R.highlightCurrentModule("crud/empleado");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getUsuario: function() {
                    var e = function() {
                        document.title = C.TITLE + "Usuarios", this.usuario_widget = C.Widget.CRUD.initialize("usuario"), this.usuario_view = new C.View.Usuario({
                            model: new C.Model.Usuario
                        }), F.R.highlightCurrentModule("crud/usuario");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getClasificacion: function() {
                    var e = function() {
                        document.title = C.TITLE + "Clasificaciones", this.clasificacion_widget = C.Widget.CRUD.initialize("clasificacion"), this.clasificacion_view = new C.View.Clasificacion({
                            model: new C.Model.Clasificacion
                        }), F.R.highlightCurrentModule("crud/clasificacion");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getConcepto: function() {
                    var e = function() {
                        document.title = C.TITLE + "Conceptos", this.concepto_widget = C.Widget.CRUD.initialize("concepto"), this.concepto_view = new C.View.Concepto({
                            model: new C.Model.Concepto
                        }), F.R.highlightCurrentModule("crud/concepto");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getBanco: function() {
                    var e = function() {
                        document.title = C.TITLE + "Bancos", this.banco_widget = C.Widget.CRUD.initialize("banco"), this.banco_view = new C.View.Banco({
                            model: new C.Model.Banco
                        }), F.R.highlightCurrentModule("crud/banco");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getActividad: function() {
                    var e = function() {
                        document.title = C.TITLE + "Actividades", this.actividad_widget = C.Widget.CRUD.initialize("actividad"), this.actividad_view = new C.View.Actividad({
                            model: new C.Model.Actividad
                        }), F.R.highlightCurrentModule("crud/actividad");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getClave: function() {
                    var e = function() {
                        document.title = C.TITLE + "Claves", this.clave_widget = C.Widget.CRUD.initialize("clave"), this.clave_view = new C.View.Clave({
                            model: new C.Model.Clave
                        }), F.R.highlightCurrentModule("crud/clave");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getArea: function() {
                    var e = function() {
                        document.title = C.TITLE + "Areas", this.area_widget = C.Widget.CRUD.initialize("area"), this.area_view = new C.View.Area({
                            model: new C.Model.Area
                        }), F.R.highlightCurrentModule("crud/area");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getRubro: function() {
                    var e = function() {
                        document.title = C.TITLE + "Rubros", this.rubro_widget = C.Widget.CRUD.initialize("rubro"), this.rubro_view = new C.View.Rubro({
                            model: new C.Model.Rubro
                        }), F.R.highlightCurrentModule("crud/rubro");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getImpuesto: function() {
                    var e = function() {
                        document.title = C.TITLE + "Impuestos", this.impuesto_widget = C.Widget.CRUD.initialize("impuesto"), this.impuesto_view = new C.View.Impuesto({
                            model: new C.Model.Impuesto
                        }), F.R.highlightCurrentModule("crud/impuesto");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getTarea: function() {
                    var e = function() {
                        document.title = C.TITLE + "Tareas", this.tarea_widget = C.Widget.OT.initialize("tarea"), this.tarea_view = new C.View.Tarea({
                            model: new C.Model.Tarea
                        }), F.R.highlightCurrentModule("ot/tarea");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getPlan: function() {
                    var e = function() {
                        document.title = C.TITLE + "Plan de Tareas", this.plan_widget = C.Widget.OT.initialize("plan"), this.plan_view = new C.View.Plan({
                            model: new C.Model.Plan
                        }), F.R.highlightCurrentModule("ot/plan");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getOtTareaAll: function() {
                    var e = function() {
                        document.title = C.TITLE + "Listado de Tareas", this.otTareaAll_widget = C.Widget.OT.initialize("otTareaAll"), this.otTareaAll_view = new C.View.OtTareaAll({
                            model: new C.Model.OtTareaAll
                        }), F.R.highlightCurrentModule("ot/otTareaAll");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getOtAdmin: function() {
                    var e = function() {
                        document.title = C.TITLE + "Órdenes de Trabajo", this.ot_widget = C.Widget.OT.initialize("ot"), this.ot_view = new C.View.OtAdmin({
                            model: new C.Model.Ot
                        }), F.R.highlightCurrentModule("ot/admin");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getOtAuditAt: function(y) {
                    var e = function() {
                        document.title = C.TITLE + "Órdenes de Trabajo", this.ot_widget = C.Widget.OT.initialize("ot"); this.ot_view = new C.View.OtAudit({
                            model: new C.Model.Ot,
                            open_ot_number_on_start: y
                        }), F.R.highlightCurrentModule("ots/audit");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                /* OT-> Seguimiento */
                getOtAudit: function() {
                    var e = function() {
                        document.title = C.TITLE + "Órdenes de Trabajo",  this.ot_widget = C.Widget.OT.initialize("ot"); this.ot_view = new C.View.OtAudit({
                            model: new C.Model.Ot
                        }), F.R.highlightCurrentModule("ot/audit");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                /*FIN OT-> Seguimiento */
                getOtHistory: function() {
                    var e = function() {
                        document.title = C.TITLE + "Historial",  this.ot_widget = C.Widget.OT.initialize(), this.ot_view = new C.View.OtHistory({
                            model: new C.Model.Ot
                        }), F.R.highlightCurrentModule("ot/history");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getOc: function() {
                    var e = function() {
                        document.title = C.TITLE + "OC",  this.ot_widget = C.Widget.OT.initialize("oc"), this.ot_view = new C.View.Oc({
                            model: new C.Model.Oc
                        }), F.R.highlightCurrentModule("ot/oc");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getRevision: function(){
                  var e = function(){
                    document.title = C.TITLE + "Revision", this.revision_widget = C.Widget.Caja.initialize("revision"), this.revision_view = new C.View.Revision({
                      model: new C.Model.Revision
                    }), F.R.highlightCurrentModule("caja/revision");
                  }.bind(this);
                  C.Session.doIfInRolesList([ 4 ], e);
                },
                getCaja: function(){
                  var e = function(){
                    document.title = C.TITLE + "Caja", this.caja_widget = C.Widget.Caja.initialize("caja"), this.caja_view = new C.View.Caja({
                      model: new C.Model.Caja
                    }), F.R.highlightCurrentModule("caja/caja");
                  }.bind(this);
                  C.Session.doIfInRolesList([ 4 ], e);
                },
                getCBanco: function(){
                  var e = function(){
                    document.title = C.TITLE + "Banco", this.cBanco_widget = C.Widget.Caja.initialize("cBanco"), this.cBanco_view = new C.View.CBanco({
                      model: new C.Model.CBanco
                    }), F.R.highlightCurrentModule("caja/cBanco");
                  }.bind(this);
                  C.Session.doIfInRolesList([ 4 ], e);
                },
                getCtaCliente: function(){
                  var e = function(){
                    document.title = C.TITLE + "Cuentas Clientes", this.ctaCliente_widget = C.Widget.Caja.initialize("ctaCliente"), this.ctaCliente_view = new C.View.CtaCliente({
                      model: new C.Model.CtaCliente
                    }), F.R.highlightCurrentModule("caja/ctaCliente");
                  }.bind(this);
                  C.Session.doIfInRolesList([ 4 ], e);
                },
                getAjusteCaja: function(){
                  var e = function(){
                    document.title = C.TITLE + "Ajuste de Cajas", this.ajusteCaja_widget = C.Widget.Caja.initialize("ajusteCaja"), this.ajusteCaja_view = new C.View.AjusteCaja({
                      model: new C.Model.AjusteCaja
                    }), F.R.highlightCurrentModule("caja/ajusteCaja");
                  }.bind(this);
                  C.Session.doIfInRolesList([ 4 ], e);
                },
                getClienteDocumentacion: function() {
                    var e = function() {
                        document.title = C.TITLE + "Documentación", this.clienteDocumentacion_widget = C.Widget.IE.initialize("clienteDocumentacion"), this.clienteDocumentacion_view = new C.View.ClienteDocumentacion({
                            model: new C.Model.ClienteDocumentacion
                        }), F.R.highlightCurrentModule("ie/clienteDocumentacion");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getClienteHistorial: function() {
                    var e = function() {
                        document.title = C.TITLE + "Historial", this.clienteHistorial_widget = C.Widget.IE.initialize("clienteHistorial"), this.clienteHistorial_view = new C.View.ClienteHistorial({
                            model: new C.Model.ClienteDocumentacion
                        }), F.R.highlightCurrentModule("ie/clienteHistorial");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getIeOt: function() {
                    var e = function() {
                        document.title = C.TITLE + "OT", this.ieOt_widget = C.Widget.IE.initialize("ieOt"), this.ieOt_view = new C.View.IeOt({
                            model: new C.Model.IeOt
                        }), F.R.highlightCurrentModule("ie/ieOt");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getIeOc: function() {
                    var e = function() {
                        document.title = C.TITLE + "OC", this.ieOc_widget = C.Widget.IE.initialize("ieOc"), this.ieOc_view = new C.View.IeOc({
                            model: new C.Model.IeOc
                        }), F.R.highlightCurrentModule("ie/ieOc");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getClientePago: function() {
                    var e = function() {
                        document.title = C.TITLE + "Pagos", this.clientePago_widget = C.Widget.IE.initialize("clientePago"), this.clientePago_view = new C.View.ClientePago({
                            model: new C.Model.ClientePago
                        }), F.R.highlightCurrentModule("ie/clientePago");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getPagarImp: function() {
                    var e = function() {
                        document.title = C.TITLE + "A Pagar", this.pagoImp_widget = C.Widget.PagarImp.initialize("pagoImp"), this.pagoImp_view = new C.View.PagoImp({
                            model: new C.Model.PagoImp
                        }), F.R.highlightCurrentModule("pagarImp/pagoImp");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getRecepImp: function() {
                    var e = function() {
                        document.title = C.TITLE + "Recepción", this.recepImp_widget = C.Widget.PagarImp.initialize("recepImp"), this.recepImp_view = new C.View.RecepImp({
                            model: new C.Model.RecepImp
                        }), F.R.highlightCurrentModule("pagarImp/recepImp");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getDescImp: function() {
                    var e = function() {
                        document.title = C.TITLE + "A Descargar", this.descImp_widget = C.Widget.PagarImp.initialize("descImp"), this.descImp_view = new C.View.DescImp({
                            model: new C.Model.DescImp
                        }), F.R.highlightCurrentModule("pagarImp/descImp");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getArchImp: function() {
                    var e = function() {
                        document.title = C.TITLE + "A Archivar", this.archImp_widget = C.Widget.PagarImp.initialize("archImp"), this.archImp_view = new C.View.ArchImp({
                            model: new C.Model.ArchImp
                        }), F.R.highlightCurrentModule("pagarImp/archImp");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getArchivado: function() {
                    var e = function() {
                        document.title = C.TITLE + "Archivados", this.archivado_widget = C.Widget.PagarImp.initialize("archivado"), this.archivado_view = new C.View.Archivado({
                            model: new C.Model.Archivado
                        }), F.R.highlightCurrentModule("pagarImp/archivado");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getCronograma: function() {
                    var e = function() {
                        document.title = C.TITLE + "Cronograma", this.cronograma_widget = C.Widget.Cronograma.initialize("cronograma"), this.cronograma_view = new C.View.Cronograma({
                            model: new C.Model.Cronograma
                        }), F.R.highlightCurrentModule("cronograma/vencimiento");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getRecepcion: function() {
                    var e = function() {
                        document.title = C.TITLE + "Recepcion", this.recepcion_widget = C.Widget.Cronograma.initialize("recepcion"), this.recepcion_view = new C.View.Recepcion({
                            model: new C.Model.Recepcion
                        }), F.R.highlightCurrentModule("cronograma/recepcion");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getAviso: function() {
                    var e = function() {
                        document.title = C.TITLE + "Aviso", this.aviso_widget = C.Widget.Cronograma.initialize("aviso"), this.aviso_view = new C.View.Aviso({
                            model: new C.Model.Aviso
                        }), F.R.highlightCurrentModule("cronograma/aviso");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getAsignacion: function() {
                    var e = function() {
                        document.title = C.TITLE + "Asignacion", this.asignacion_widget = C.Widget.Cronograma.initialize("asignacion"), this.asignacion_view = new C.View.Asignacion({
                            model: new C.Model.Asignacion
                        }), F.R.highlightCurrentModule("cronograma/asignacion");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getAuditarImpuesto: function() {
                    var e = function() {
                        document.title = C.TITLE + "Auditar Impuestos", this.auditarImpuesto_widget = C.Widget.Cronograma.initialize("auditarImpuesto"), this.auditarImpuesto_view = new C.View.AuditarImpuesto({
                            model: new C.Model.AuditarImpuesto
                        }), F.R.highlightCurrentModule("cronograma/auditarImpuesto");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getNoCargado: function() {
                    var e = function() {
                        document.title = C.TITLE + "No Cargados", this.carga_widget = C.Widget.Carga.initialize("noCargado"), this.noCargado_view = new C.View.NoCargado({
                            model: new C.Model.NoCargado
                        }), F.R.highlightCurrentModule("carga/noCargado");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getCargado: function() {
                    var e = function() {
                        document.title = C.TITLE + "Imp. Sin Asignar", this.carga_widget = C.Widget.Carga.initialize("cargado"), this.cargado_view = new C.View.Cargado({
                            model: new C.Model.Cargado
                        }), F.R.highlightCurrentModule("carga/cargado");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getCargaFijo: function() {
                    var e = function() {
                        document.title = C.TITLE + "Imp. Fijos", this.carga_widget = C.Widget.Carga.initialize(), this.cargaFijo_view = new C.View.CargaFijo({
                            model: new C.Model.CargaFijo
                        }), F.R.highlightCurrentModule("carga/cargaFijo");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getCarga: function() {
                    var e = function() {
                        var actualUrl= Backbone.history.fragment.substring(7)
                        document.title = C.TITLE + actualUrl, this.carga_widget = C.Widget.Carga.initialize(actualUrl), this.carga_view = new C.View.Carga({
                            model: new C.Model.Carga
                        }), F.R.highlightCurrentModule("carga/"+actualUrl);
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getSindicato: function() {
                    var e = function() {
                        document.title = C.TITLE + "Sindicatos", this.carga_widget = C.Widget.Carga.initialize("sindicato"), this.carga_view = new C.View.Sindicato({
                            model: new C.Model.Sindicato
                        }), F.R.highlightCurrentModule("carga/sindicato");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getOtro: function() {
                    var e = function() {
                        document.title = C.TITLE + "Otros", this.carga_widget = C.Widget.Carga.initialize("otro"), this.carga_view = new C.View.Otro({
                            model: new C.Model.Otro
                        }), F.R.highlightCurrentModule("carga/otro");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getGestAsignacion: function() {
                    var e = function() {
                        document.title = C.TITLE + "Gestión de Asignaciones", this.gestAsignacion_widget = C.Widget.GestCrono.initialize("gestAsignacion"), this.gestAsignacion_view = new C.View.GestAsignacion({
                            model: new C.Model.GestAsignacion
                        }), F.R.highlightCurrentModule("gestCrono/asignacion");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getGestAviso: function() {
                    var e = function() {
                        document.title = C.TITLE + "Gestión de Avisos", this.gestAviso_widget = C.Widget.GestCrono.initialize("gestAviso"), this.gestAviso_view = new C.View.GestAviso({
                            model: new C.Model.GestAviso
                        }), F.R.highlightCurrentModule("gestCrono/aviso");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getGestAsigPie: function() {
                    var e = function() {
                        document.title = C.TITLE + "Asig. Pie", this.asigPie_widget = C.Widget.GestCrono.initialize("asigPie"), this.asigPie_view = new C.View.AsigPie({
                            model: new C.Model.AsigPie
                        }), F.R.highlightCurrentModule("gestCrono/asigPie");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getGestAvisoTest: function() {
                    var e = function() {
                        document.title = C.TITLE + "Test Avisos", this.gestAvisoTest_widget = C.Widget.GestCrono.initialize("gestAvisoTest"), this.gestAvisoTest_view = new C.View.GestAvisoTest({
                            model: new C.Model.GestAvisoTest
                        }), F.R.highlightCurrentModule("gestCrono/avisoTest");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
                getGestAvisoPersonal: function() {
                    var e = function() {
                        document.title = C.TITLE + "Aviso Personal", this.gestAvisoPersonal_widget = C.Widget.GestCrono.initialize("gestAvisoPersonal"), this.gestAvisoPersonal_view = new C.View.GestAvisoPersonal({
                            model: new C.Model.GestAvisoPersonal
                        }), F.R.highlightCurrentModule("gestCrono/avisoPersonal");
                    }.bind(this);
                    C.Session.doIfInRolesList([ 0 ], e);
                },
//DEMAS
                notFound: function() {
                    $("body").append('<div id="not_found_modal_window" style="display:none;"><h1 class="title">Ruta Inexistente</h1><br /><p class="margined">La ruta a la que está tratando de acceder es inválida.</p><p class="margined">Si ingresó manualmente la ruta, revísela detenidamente.</p><p class="margined">En caso de haber recibido esta notificación por otra razón, intente recargar el módulo en el que estaba trabajando ó volver al Inicio.</p><br /><a href="/" class="BUTTON_proceed lefty">Inicio</a><input type="button" class="BUTTON_cancel righty button" value="Cerrar" /></div>'), $(".button").button(), $("#not_found_modal_window .BUTTON_cancel").on("click", function() {
                        $.unblockUI();
                    }), $.blockUI({
                        message: $("#not_found_modal_window"),
                        css: {
                            top: "0",
                            left: "35%",
                            width: "28%",
                            border: "none",
                            padding: "1em",
                            cursor: "default"
                        },
                        onUnblock: function() {
                            $("#not_found_modal_window").remove();
                        }
                    });
                },
                notAllowed: function() {
                    var e = "";
                    C.Session.roleID() != 1 && (e = '<a href="/" class="BUTTON_proceed lefty">Inicio</a>'), $("body").append('<div id="not_allowed_modal_window" style="display:none;"><h1 class="title">No posee permisos</h1><br /><p class="margined">Su usuario no está habilitado para visualizar la ruta a la que está tratando de acceder.</p><br />' + e + '<input type="button" class="BUTTON_cancel righty button" value="Cerrar" /></div>'), $(".button").button(), $("#not_allowed_modal_window .BUTTON_cancel").on("click", function() {
                        $.unblockUI();
                    }), $.blockUI({
                        message: $("#not_allowed_modal_window"),
                        css: {
                            top: "0",
                            left: "35%",
                            width: "28%",
                            border: "none",
                            padding: "1em",
                            cursor: "default"
                        },
                        onUnblock: function() {
                            $("#not_allowed_modal_window").remove();
                        }
                    });
                }
//FIN
            })
            C.Router = new e, Backbone.history.start();
        })
    }), e.define("/UI.js", function(e, t, n, r, i, s) {
        $(function() {
            var cierre = window.setInterval(function() {
                 window.location = "/logout";
            }, 8*60*60*1000) //eso es igual a 8hs
            $(document).on("keyup", function(e){
              clearTimeout( cierre )
              cierre = window.setInterval(function() {
                 window.location = "/logout";
              }, 8*60*60*1000) //eso es igual a 8hs
            }),  $(document).on("click", function(e){
              clearTimeout( cierre )
              cierre = window.setInterval(function() {
                 window.location = "/logout";
              }, 8*60*60*1000) //eso es igual a 8hs
            }), $(document).on("keyup", function(e){
              if(e.which == 27)
                location.reload()//$.unblockUI();//
            }), $(document).ajaxError(function(e, t, n) {
                setTimeout(F.msgErrorTop("Error de servidor.<br />Recargue la aplicación e intente nuevamente"), 3);
            }),/*
            MODIFICADO POR UN LOCATION RELOAD
             $(document).on("keyup", function(e) {
                e.which == 27 && $.unblockUI();
            }),*/ $("#logout_button").on("click", function() {
                F.msgConfirm("¿Realmente desea salir?", function() {
                    window.location = "/logout";
                });
            }), window.setInterval(function() {
                $("#date").text(moment().format("DD/MM/YYYY - HH:mm:ss"));
            }), $("#expandup").on("click", function() {
                $("#head").css("display") === "block" ? ($("#head").css({
                    display: "none"
                }), $("#left, #right").css({
                    top: 0
                }), $("#expandup").attr("src", "/images/expanddown.gif")) : ($("#head").css({
                    display: "block"
                }), $("#left, #right").css({
                    top: "85px"
                }), $("#expandup").attr("src", "/images/expandup.gif"));
            }), $("#expandright").on("click", function() {
                $("#right").css("display") === "block" ? ($("#right").css({
                    display: "none"
                }), $("#left").css({
                    width: "100%"
                }), $("#expandright").attr("src", "/images/expandleft.gif")) : ($("#right").css({
                    display: "block"
                }), $("#left").css({
                    width: "75%"
                }), $("#expandright").attr("src", "/images/expandright.gif"));
            }), $("#scheduler").on("click", function(){
							document.getElementById('scheduler').href= "http://"+window.location.hostname+":3001";
            });
        });
    }), e.define("/main.js", function(e, t, n, r, i, s) {
        window.F = {
            V: {},
            R: {},
            M: {}
        }, window.C = {
            TITLE: "Estudio Integral | ",
            LOADING_MSG: "Cargando...",
            Session: {
                userID: function() {
                    return parseInt($("#session_user_id").html());
                },
                username: function() {
                    return $("#session_user").html();
                },
                roleID: function() {
                    return parseInt($("#session_role_id").html());
                },
                areaID: function() {
                    return parseInt($("#session_area_id").html());
                },
                empleadoID: function() {
                    return parseInt($("#session_empleado_id").html());
                },
                getUser: function() {
                    return {
                        id: C.Session.userID(),
                        usuario: C.Session.username,
                        rol_id: C.Session.roleID(),
                        empleado_id: C.Session.empleadoID(),
                        area_id: C.Session.areaID()
                    };
                },
                isSysadmin: function() {
                    return C.Session.getUser().rol_id == 4;
                },
                isAdmin: function() {
                    return C.Session.getUser().rol_id == 3;
                },
                isSupervisor: function() {
                    return C.Session.getUser().rol_id == 2;
                },
                isOperator: function() {
                    return C.Session.getUser().rol_id == 1;
                },
                doIfSysadmin: function(e) {
                    C.Session.isSysadmin() && e(C.Session.getUser());
                },
                doIfAdmin: function(e) {
                    C.Session.isAdmin() && e(C.Session.getUser());
                },
                doIfSupervisor: function(e) {
                    C.Session.isSupervisor() && e(C.Session.getUser());
                },
                doIfOperator: function(e) {
                    C.Session.isOperator() && e(C.Session.getUser());
                },
                doIfInRolesList: function(e, t, n) {
                    if (_.indexOf(e, 0) != -1) t(); else {
                        var r = !1, i = [ null, "isOperator", "isSupervisor", "isAdmin", "isSysadmin"];
                        _.each(e, function(e) {
                            r = r || C.Session[i[e]]();
                        }), r ? t() : C.Router.notAllowed();
                    }
                }
            },
            Dataset: {},
            Model: {},
            Collection: {},
            View: {},
            Widget: {},
            Router: null
        }; e("./F.backbone"), e("./F.basics"), e("./F.validations"), e("./F.widgets"), e("./widgets/Novedades"), e("./widgets/Cliente"), e("./widgets/Perfil"), e("./widgets/CRUD"), e("./widgets/IE"), e("./widgets/Carga"), e("./widgets/Caja"), e("./widgets/Cronograma"), e("./widgets/PagarImp"), e("./widgets/OT"), e("./widgets/GestCrono"), e("./models/Novedades"), e("./models/NovTarea"), e("./models/Cliente"), e("./models/PagoImp"), e("./models/Ot"), e("./models/RecepImp"), e("./models/DescImp"), e("./models/ArchImp"), e("./models/Archivado"), e("./models/CuentaCorriente"), e("./models/ClienteDocumentacion"), e("./models/ClientePago"), e("./models/ClienteImpuesto"), e("./models/ClienteClave"), e("./models/Listado"),e("./models/ListDeuda"), e("./models/CuentaCorrienteMovimientos"), e("./models/Deuda"), e("./models/DeudaImpuesto"), e("./models/Perfil"), e("./models/Empleado"), e("./models/Usuario"), e("./models/Concepto"), e("./models/Clasificacion"), e("./models/Banco"), e("./models/Actividad"), e("./models/Clave"), e("./models/Tarea"), e("./models/Plan"), e("./models/Area"), e("./models/Rubro"), e("./models/Impuesto"), e("./models/Carga"), e("./models/Sindicato"),  e("./models/Otro"), e("./models/NoCargado"), e("./models/Cargado"), e("./models/CargaFijo"), e("./models/Cronograma"), e("./models/Recepcion"), e("./models/Aviso"), e("./models/Asignacion"), e("./models/GestAsignacion"), e("./models/GestAviso"), e("./models/AsigPie"), e("./models/GestAvisoTest"), e("./models/GestAvisoPersonal"), e("./models/AuditarImpuesto"), e("./models/OtTarea"), e("./models/IeOt"), e("./models/IeOc"), e("./models/Oc"), e("./models/OtHistory"), e("./models/OtTareaAll"), e("./models/AjusteCta"), e("./models/Revision"), e("./models/Caja"), e("./models/AjusteCaja"), e("./models/CBanco"), e("./models/CtaCliente"), e("./views/novedades/Novedades"), e("./views/novedades/NovedadesTable"), e("./views/novedades/NovedadesInfoCard"), e("./views/novedades/NovTarea"), e("./views/novedades/NovTareaTable"), e("./views/novedades/NovTareaInfoCard"), e("./views/cliente/Cliente"), e("./views/cliente/ClienteTable"), e("./views/cliente/ClienteForm"), e("./views/cliente/CuentaCorriente"), e("./views/cliente/CuentaCorrienteTable"), e("./views/cliente/CuentaCorrienteInfoCard"), e("./views/cliente/Deuda"), e("./views/cliente/DeudaTable"), e("./views/cliente/DeudaInfoCard"), e("./views/cliente/DeudaImpuestoForm"), e("./views/cliente/ClienteImpuesto"), e("./views/cliente/ClienteImpuestoTable"), e("./views/cliente/ClienteImpuestoInfoCard"), e("./views/cliente/ClienteClave"), e("./views/cliente/ClienteClaveTable"), e("./views/cliente/ClienteClaveForm"), e("./views/cliente/Listado"), e("./views/cliente/ListadoTable"), e("./views/cliente/ListDeuda"), e("./views/cliente/ListDeudaTable"), e("/views/ie/ClienteDocumentacion"), e("/views/ie/ClienteDocumentacionTable"), e("/views/ie/ClienteDocumentacionInfoCard"), e("/views/ie/IeOt"), e("/views/ie/IeOtTable"), e("/views/ie/IeOtForm"), e("/views/ie/IeOc"), e("/views/ie/IeOcTable"), e("/views/ie/IeOcForm"), e("./views/ie/DocumentacionForm"), e("/views/ie/ClienteHistorial"), e("/views/ie/ClienteHistorialTable"), e("/views/ie/ClienteHistorialInfoCard"), e("./views/ie/ClientePago"), e("./views/ie/ClientePagoTable"), e("./views/ie/ClientePagoInfoCard"), e("./views/ie/PagoInfoCard"), e("./views/Movimiento/CuentaCorrienteMovimientosForm"), e("./views/perfil/Perfil"), e("./views/perfil/PerfilEmpleadoInfoCard"), e("./views/perfil/PerfilForm"), e("./views/perfil/PerfilPasswordForm"), e("./views/crud/Empleado"), e("./views/crud/EmpleadoTable"), e("./views/crud/EmpleadoForm"), e("./views/crud/Usuario"), e("./views/crud/UsuarioTable"), e("./views/crud/UsuarioForm"), e("./views/crud/Clasificacion"), e("./views/crud/ClasificacionTable"), e("./views/crud/ClasificacionForm"), e("./views/crud/Banco"), e("./views/crud/BancoTable"), e("./views/crud/BancoForm"), e("./views/crud/Actividad"), e("./views/crud/ActividadTable"), e("./views/crud/ActividadForm"), e("./views/crud/Clave"), e("./views/crud/ClaveTable"), e("./views/crud/ClaveForm"), e("./views/ot/Tarea"), e("./views/ot/TareaTable"), e("./views/ot/TareaForm"), e("./views/ot/Plan"), e("./views/ot/PlanTable"), e("./views/ot/PlanForm"), e("./views/crud/Area"), e("./views/crud/AreaTable"), e("./views/crud/AreaForm"), e("./views/crud/Rubro"), e("./views/crud/RubroTable"), e("./views/crud/RubroForm"), e("./views/crud/Impuesto"), e("./views/crud/ImpuestoTable"), e("./views/crud/ImpuestoForm"), e("./views/carga/Carga"), e("./views/caja/CargaOptions"), e("./views/carga/CargaTable"), e("./views/carga/CargaForm"), e("./views/carga/Otro"), e("./views/carga/OtroForm"), e("./views/carga/Sindicato"), e("./views/carga/SindicatoTable"), e("./views/carga/SindicatoForm"), e("./views/carga/CargaFijo"), e("./views/carga/CargaFijoTable"), e("./views/carga/CargaFijoForm"), e("./views/carga/NoCargado"), e("./views/carga/NoCargadoTable"), e("./views/carga/Cargado"), e("./views/carga/CargadoTable"), e("./views/carga/CargadoInfoCard"), e("./views/cronograma/Cronograma"), e("./views/cronograma/CronogramaTable"), e("./views/cronograma/CronogramaForm"), e("./views/cronograma/Recepcion"), e("./views/cronograma/RecepcionTable"), e("./views/cronograma/RecepcionForm"), e("./views/cronograma/Aviso"), e("./views/cronograma/AvisoTable"), e("./views/cronograma/AvisoForm"), e("./views/cronograma/Asignacion"), e("./views/cronograma/AsignacionTable"), e("./views/cronograma/AsignacionForm"), e("./views/cronograma/AuditarImpuesto"), e("./views/cronograma/AuditarImpuestoTable"), e("./views/cronograma/AuditarImpuestoInfoCard"), e("./views/pagarImp/PagoImp"), e("./views/pagarImp/PagoImpForm"), e("./views/pagarImp/PagoImpTable"), e("./views/pagarImp/RecepImp"), e("./views/pagarImp/RecepImpForm"), e("./views/pagarImp/RecepImpTable"), e("./views/pagarImp/DescImp"), e("./views/pagarImp/DescImpForm"), e("./views/pagarImp/DescImpTable"), e("./views/pagarImp/ArchImp"), e("./views/pagarImp/ArchImpForm"), e("./views/pagarImp/ArchImpTable"), e("./views/pagarImp/Archivado"), e("./views/pagarImp/ArchivadoInfoCard"), e("./views/pagarImp/ArchivadoTable"), e('/views/pagarImp/VtoForm'), e("/views/gestCrono/GestAsignacion"), e("/views/gestCrono/GestAsignacionTable"), e("/views/gestCrono/GestAsignacionInfoCard"), e("/views/gestCrono/GestAviso"), e("/views/gestCrono/GestAvisoTable"), e("/views/gestCrono/GestAvisoInfoCard"), e("/views/gestCrono/GestAvisoTest"), e("/views/gestCrono/GestAvisoTestTable"), e("/views/gestCrono/GestAvisoTestInfoCard"), e("/views/gestCrono/GestAvisoPersonal"), e("/views/gestCrono/GestAvisoPersonalTable"), e("/views/gestCrono/GestAvisoPersonalInfoCard"), e("./views/crud/AsigPie"), e("./views/crud/AsigPieTable"), e("./views/crud/AsigPieForm"), e('/views/ot/OtAdmin'), e('/views/ot/OtAdminConcludeForm'), e('/views/ot/OtAdminTable'), e('/views/ot/OtAdminForm'), e('/views/ot/OtAdminOptions'),  e("./views/ot/OtAudit"), e("./views/ot/OtAuditAddTarea"), e("./views/ot/OtAuditToggleTareaState"), e("./views/ot/OtAuditForm"), e("./views/ot/OtAuditInfoCard"), e("./views/ot/OtAuditOptions"), e("./views/ot/OtAuditTable"), e("./views/ottarea/OtTareaForm"), e("./views/otTarea/OtTareaResources"), e("./views/ot/OtHistory"), e("./views/ot/OtHistoryTable"), e("./views/ot/OtHistoryOptions"), e("./views/ot/OtHistoryInfoCard"), e("/views/ot/Oc"), e("/views/ot/OcTable"), e("/views/ot/OcForm"), e("./views/cliente/AjusteCta"), e("./views/cliente/AjusteCtaTable"), e("./views/cliente/AjusteCtaForm"), e("./views/crud/Concepto"), e("./views/crud/ConceptoTable"), e("./views/crud/ConceptoForm"), e("./views/caja/Revision"), e("./views/caja/RevisionTable"), e("./views/caja/RevisionForm"), e("./views/caja/RevisionOptions"), e("./views/caja/Caja"), e("./views/caja/CajaTable"), e("./views/caja/CajaInfoCard"), e("./views/caja/CBanco"), e("./views/caja/CBancoTable"), e("./views/caja/CBancoInfoCard"), e("./views/caja/CtaCliente"), e("./views/caja/CtaClienteTable"), e("./views/caja/CtaClienteInfoCard"), e("./views/caja/AjusteCaja"), e("./views/caja/AjusteCajaTable"), e("./views/caja/AjusteCajaForm"), e("./views/caja/AjusteCajaOptions"), e("./views/ot/OtTareaAll"), e("./views/ot/OtTareaAllTable"), e("./views/ot/OtTareaAllForm"), e("./Router"), e("./UI");
    }), e("./main.js");
})();
