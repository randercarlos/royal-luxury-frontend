(function(e, t) {
    function r() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function i() {
        var e = new Date;
        return r(e.getFullYear(), e.getMonth(), e.getDate())
    }

    function s(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }

    function f(t, n) {
        function u(e, t) {
            return t.toLowerCase()
        }
        var r = e(t).data(),
            i = {},
            s, o = new RegExp("^" + n.toLowerCase() + "([A-Z])");
        n = new RegExp("^" + n.toLowerCase());
        for (var a in r)
            if (n.test(a)) {
                s = a.replace(o, u);
                i[s] = r[a]
            }
        return i
    }

    function l(t) {
        var n = {};
        if (!d[t]) {
            t = t.split("-")[0];
            if (!d[t]) return
        }
        var r = d[t];
        e.each(p, function(e, t) {
            if (t in r) n[t] = r[t]
        });
        return n
    }
    var n = e(window);
    var o = function() {
        var t = {
            get: function(e) {
                return this.slice(e)[0]
            },
            contains: function(e) {
                var t = e && e.valueOf();
                for (var n = 0, r = this.length; n < r; n++)
                    if (this[n].valueOf() === t) return n;
                return -1
            },
            remove: function(e) {
                this.splice(e, 1)
            },
            replace: function(t) {
                if (!t) return;
                if (!e.isArray(t)) t = [t];
                this.clear();
                this.push.apply(this, t)
            },
            clear: function() {
                this.splice(0)
            },
            copy: function() {
                var e = new o;
                e.replace(this);
                return e
            }
        };
        return function() {
            var n = [];
            n.push.apply(n, arguments);
            e.extend(n, t);
            return n
        }
    }();
    var u = function(t, n) {
        this.dates = new o;
        this.viewDate = i();
        this.focusDate = null;
        this._process_options(n);
        this.element = e(t);
        this.isInline = false;
        this.isInput = this.element.is("input");
        this.component = this.element.is(".date") ? this.element.find(".add-on, .input-group-addon, .btn") : false;
        this.hasInput = this.component && this.element.find("input").length;
        if (this.component && this.component.length === 0) this.component = false;
        this.picker = e(v.template);
        this._buildEvents();
        this._attachEvents();
        if (this.isInline) {
            this.picker.addClass("datepicker-inline").appendTo(this.element)
        } else {
            this.picker.addClass("datepicker-dropdown dropdown-menu")
        }
        if (this.o.rtl) {
            this.picker.addClass("datepicker-rtl")
        }
        this.viewMode = this.o.startView;
        if (this.o.calendarWeeks) this.picker.find("tfoot th.today").attr("colspan", function(e, t) {
            return parseInt(t) + 1
        });
        this._allow_update = false;
        this.setStartDate(this._o.startDate);
        this.setEndDate(this._o.endDate);
        this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
        this.fillDow();
        this.fillMonths();
        this._allow_update = true;
        this.update();
        this.showMode();
        if (this.isInline) {
            this.show()
        }
    };
    u.prototype = {
        constructor: u,
        _process_options: function(t) {
            this._o = e.extend({}, this._o, t);
            var n = this.o = e.extend({}, this._o);
            var r = n.language;
            if (!d[r]) {
                r = r.split("-")[0];
                if (!d[r]) r = h.language
            }
            n.language = r;
            switch (n.startView) {
                case 2:
                case "decade":
                    n.startView = 2;
                    break;
                case 1:
                case "year":
                    n.startView = 1;
                    break;
                default:
                    n.startView = 0
            }
            switch (n.minViewMode) {
                case 1:
                case "months":
                    n.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    n.minViewMode = 2;
                    break;
                default:
                    n.minViewMode = 0
            }
            n.startView = Math.max(n.startView, n.minViewMode);
            if (n.multidate !== true) {
                n.multidate = Number(n.multidate) || false;
                if (n.multidate !== false) n.multidate = Math.max(0, n.multidate);
                else n.multidate = 1
            }
            n.multidateSeparator = String(n.multidateSeparator);
            n.weekStart %= 7;
            n.weekEnd = (n.weekStart + 6) % 7;
            var i = v.parseFormat(n.format);
            if (n.startDate !== -Infinity) {
                if (!!n.startDate) {
                    if (n.startDate instanceof Date) n.startDate = this._local_to_utc(this._zero_time(n.startDate));
                    else n.startDate = v.parseDate(n.startDate, i, n.language)
                } else {
                    n.startDate = -Infinity
                }
            }
            if (n.endDate !== Infinity) {
                if (!!n.endDate) {
                    if (n.endDate instanceof Date) n.endDate = this._local_to_utc(this._zero_time(n.endDate));
                    else n.endDate = v.parseDate(n.endDate, i, n.language)
                } else {
                    n.endDate = Infinity
                }
            }
            n.daysOfWeekDisabled = n.daysOfWeekDisabled || [];
            if (!e.isArray(n.daysOfWeekDisabled)) n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/);
            n.daysOfWeekDisabled = e.map(n.daysOfWeekDisabled, function(e) {
                return parseInt(e, 10)
            });
            var s = String(n.orientation).toLowerCase().split(/\s+/g),
                o = n.orientation.toLowerCase();
            s = e.grep(s, function(e) {
                return /^auto|left|right|top|bottom$/.test(e)
            });
            n.orientation = {
                x: "auto",
                y: "auto"
            };
            if (!o || o === "auto");
            else if (s.length === 1) {
                switch (s[0]) {
                    case "top":
                    case "bottom":
                        n.orientation.y = s[0];
                        break;
                    case "left":
                    case "right":
                        n.orientation.x = s[0];
                        break
                }
            } else {
                o = e.grep(s, function(e) {
                    return /^left|right$/.test(e)
                });
                n.orientation.x = o[0] || "auto";
                o = e.grep(s, function(e) {
                    return /^top|bottom$/.test(e)
                });
                n.orientation.y = o[0] || "auto"
            }
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(e) {
            for (var n = 0, r, i, s; n < e.length; n++) {
                r = e[n][0];
                if (e[n].length === 2) {
                    i = t;
                    s = e[n][1]
                } else if (e[n].length === 3) {
                    i = e[n][1];
                    s = e[n][2]
                }
                r.on(s, i)
            }
        },
        _unapplyEvents: function(e) {
            for (var n = 0, r, i, s; n < e.length; n++) {
                r = e[n][0];
                if (e[n].length === 2) {
                    s = t;
                    i = e[n][1]
                } else if (e[n].length === 3) {
                    s = e[n][1];
                    i = e[n][2]
                }
                r.off(i, s)
            }
        },
        _buildEvents: function() {
            if (this.isInput) {
                this._events = [
                    [this.element, {
                        focus: e.proxy(this.show, this),
                        keyup: e.proxy(function(t) {
                            if (e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) this.update()
                        }, this),
                        keydown: e.proxy(this.keydown, this)
                    }]
                ]
            } else if (this.component && this.hasInput) {
                this._events = [
                    [this.element.find("input"), {
                        focus: e.proxy(this.show, this),
                        keyup: e.proxy(function(t) {
                            if (e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) this.update()
                        }, this),
                        keydown: e.proxy(this.keydown, this)
                    }],
                    [this.component, {
                        click: e.proxy(this.show, this)
                    }]
                ]
            } else if (this.element.is("div")) {
                this.isInline = true
            } else {
                this._events = [
                    [this.element, {
                        click: e.proxy(this.show, this)
                    }]
                ]
            }
            this._events.push([this.element, "*", {
                blur: e.proxy(function(e) {
                    this._focused_from = e.target
                }, this)
            }], [this.element, {
                blur: e.proxy(function(e) {
                    this._focused_from = e.target
                }, this)
            }]);
            this._secondaryEvents = [
                [this.picker, {
                    click: e.proxy(this.click, this)
                }],
                [e(window), {
                    resize: e.proxy(this.place, this)
                }],
                [e(document), {
                    "mousedown touchstart": e.proxy(function(e) {
                        if (!(this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length)) {
                            this.hide()
                        }
                    }, this)
                }]
            ]
        },
        _attachEvents: function() {
            this._detachEvents();
            this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(t, n) {
            var r = n || this.dates.get(-1),
                i = this._utc_to_local(r);
            this.element.trigger({
                type: t,
                date: i,
                dates: e.map(this.dates, this._utc_to_local),
                format: e.proxy(function(e, t) {
                    if (arguments.length === 0) {
                        e = this.dates.length - 1;
                        t = this.o.format
                    } else if (typeof e === "string") {
                        t = e;
                        e = this.dates.length - 1
                    }
                    t = t || this.o.format;
                    var n = this.dates.get(e);
                    return v.formatDate(n, t, this.o.language)
                }, this)
            })
        },
        show: function() {
            if (!this.isInline) this.picker.appendTo("body");
            this.picker.show();
            this.place();
            this._attachSecondaryEvents();
            this._trigger("show")
        },
        hide: function() {
            if (this.isInline) return;
            if (!this.picker.is(":visible")) return;
            this.focusDate = null;
            this.picker.hide().detach();
            this._detachSecondaryEvents();
            this.viewMode = this.o.startView;
            this.showMode();
            if (this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val())) this.setValue();
            this._trigger("hide")
        },
        remove: function() {
            this.hide();
            this._detachEvents();
            this._detachSecondaryEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
            if (!this.isInput) {
                delete this.element.data().date
            }
        },
        _utc_to_local: function(e) {
            return e && new Date(e.getTime() + e.getTimezoneOffset() * 6e4)
        },
        _local_to_utc: function(e) {
            return e && new Date(e.getTime() - e.getTimezoneOffset() * 6e4)
        },
        _zero_time: function(e) {
            return e && new Date(e.getFullYear(), e.getMonth(), e.getDate())
        },
        _zero_utc_time: function(e) {
            return e && new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
        },
        getDates: function() {
            return e.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return e.map(this.dates, function(e) {
                return new Date(e)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            return new Date(this.dates.get(-1))
        },
        setDates: function() {
            var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, t);
            this._trigger("changeDate");
            this.setValue()
        },
        setUTCDates: function() {
            var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, e.map(t, this._utc_to_local));
            this._trigger("changeDate");
            this.setValue()
        },
        setDate: s("setDates"),
        setUTCDate: s("setUTCDates"),
        setValue: function() {
            var e = this.getFormattedDate();
            if (!this.isInput) {
                if (this.component) {
                    this.element.find("input").val(e).change()
                }
            } else {
                this.element.val(e).change()
            }
        },
        getFormattedDate: function(n) {
            if (n === t) n = this.o.format;
            var r = this.o.language;
            return e.map(this.dates, function(e) {
                return v.formatDate(e, n, r)
            }).join(this.o.multidateSeparator)
        },
        setStartDate: function(e) {
            this._process_options({
                startDate: e
            });
            this.update();
            this.updateNavArrows()
        },
        setEndDate: function(e) {
            this._process_options({
                endDate: e
            });
            this.update();
            this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function(e) {
            this._process_options({
                daysOfWeekDisabled: e
            });
            this.update();
            this.updateNavArrows()
        },
        place: function() {
            if (this.isInline) return;
            var t = this.picker.outerWidth(),
                r = this.picker.outerHeight(),
                i = 10,
                s = n.width(),
                o = n.height(),
                u = n.scrollTop();
            var a = parseInt(this.element.parents().filter(function() {
                return e(this).css("z-index") !== "auto"
            }).first().css("z-index")) + 10;
            var f = this.component ? this.component.parent().offset() : this.element.offset();
            var l = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
            var c = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
            var h = f.left,
                p = f.top;
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom " + "datepicker-orient-right datepicker-orient-left");
            if (this.o.orientation.x !== "auto") {
                this.picker.addClass("datepicker-orient-" + this.o.orientation.x);
                if (this.o.orientation.x === "right") h -= t - c
            } else {
                this.picker.addClass("datepicker-orient-left");
                if (f.left < 0) h -= f.left - i;
                else if (f.left + t > s) h = s - t - i
            }
            var d = this.o.orientation.y,
                v, m;
            if (d === "auto") {
                v = -u + f.top - r;
                m = u + o - (f.top + l + r);
                if (Math.max(v, m) === m) d = "top";
                else d = "bottom"
            }
            this.picker.addClass("datepicker-orient-" + d);
            if (d === "top") p += l;
            else p -= r + parseInt(this.picker.css("padding-top"));
            this.picker.css({
                top: p,
                left: h,
                zIndex: a
            })
        },
        _allow_update: true,
        update: function() {
            if (!this._allow_update) return;
            var t = this.dates.copy(),
                n = [],
                r = false;
            if (arguments.length) {
                e.each(arguments, e.proxy(function(e, t) {
                    if (t instanceof Date) t = this._local_to_utc(t);
                    n.push(t)
                }, this));
                r = true
            } else {
                n = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val();
                if (n && this.o.multidate) n = n.split(this.o.multidateSeparator);
                else n = [n];
                delete this.element.data().date
            }
            n = e.map(n, e.proxy(function(e) {
                return v.parseDate(e, this.o.format, this.o.language)
            }, this));
            n = e.grep(n, e.proxy(function(e) {
                return e < this.o.startDate || e > this.o.endDate || !e
            }, this), true);
            this.dates.replace(n);
            if (this.dates.length) this.viewDate = new Date(this.dates.get(-1));
            else if (this.viewDate < this.o.startDate) this.viewDate = new Date(this.o.startDate);
            else if (this.viewDate > this.o.endDate) this.viewDate = new Date(this.o.endDate);
            if (r) {
                this.setValue()
            } else if (n.length) {
                if (String(t) !== String(this.dates)) this._trigger("changeDate")
            }
            if (!this.dates.length && t.length) this._trigger("clearDate");
            this.fill()
        },
        fillDow: function() {
            var e = this.o.weekStart,
                t = "<tr>";
            if (this.o.calendarWeeks) {
                var n = '<th class="cw">&nbsp;</th>';
                t += n;
                this.picker.find(".datepicker-days thead tr:first-child").prepend(n)
            }
            while (e < this.o.weekStart + 7) {
                t += '<th class="dow">' + d[this.o.language].daysMin[e++ % 7] + "</th>"
            }
            t += "</tr>";
            this.picker.find(".datepicker-days thead").append(t)
        },
        fillMonths: function() {
            var e = "",
                t = 0;
            while (t < 12) {
                e += '<span class="month">' + d[this.o.language].monthsShort[t++] + "</span>"
            }
            this.picker.find(".datepicker-months td").html(e)
        },
        setRange: function(t) {
            if (!t || !t.length) delete this.range;
            else this.range = e.map(t, function(e) {
                return e.valueOf()
            });
            this.fill()
        },
        getClassNames: function(t) {
            var n = [],
                r = this.viewDate.getUTCFullYear(),
                i = this.viewDate.getUTCMonth(),
                s = new Date;
            if (t.getUTCFullYear() < r || t.getUTCFullYear() === r && t.getUTCMonth() < i) {
                n.push("old")
            } else if (t.getUTCFullYear() > r || t.getUTCFullYear() === r && t.getUTCMonth() > i) {
                n.push("new")
            }
            if (this.focusDate && t.valueOf() === this.focusDate.valueOf()) n.push("focused");
            if (this.o.todayHighlight && t.getUTCFullYear() === s.getFullYear() && t.getUTCMonth() === s.getMonth() && t.getUTCDate() === s.getDate()) {
                n.push("today")
            }
            if (this.dates.contains(t) !== -1) n.push("active");
            if (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
                n.push("disabled")
            }
            if (this.range) {
                if (t > this.range[0] && t < this.range[this.range.length - 1]) {
                    n.push("range")
                }
                if (e.inArray(t.valueOf(), this.range) !== -1) {
                    n.push("selected")
                }
            }
            return n
        },
        fill: function() {
            var n = new Date(this.viewDate),
                i = n.getUTCFullYear(),
                s = n.getUTCMonth(),
                o = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                u = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                a = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                f = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                l = d[this.o.language].today || d["en"].today || "",
                c = d[this.o.language].clear || d["en"].clear || "",
                h;
            this.picker.find(".datepicker-days thead th.datepicker-switch").text(d[this.o.language].months[s] + " " + i);
            this.picker.find("tfoot th.today").text(l).toggle(this.o.todayBtn !== false);
            this.picker.find("tfoot th.clear").text(c).toggle(this.o.clearBtn !== false);
            this.updateNavArrows();
            this.fillMonths();
            var p = r(i, s - 1, 28),
                m = v.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
            p.setUTCDate(m);
            p.setUTCDate(m - (p.getUTCDay() - this.o.weekStart + 7) % 7);
            var g = new Date(p);
            g.setUTCDate(g.getUTCDate() + 42);
            g = g.valueOf();
            var y = [];
            var b;
            while (p.valueOf() < g) {
                if (p.getUTCDay() === this.o.weekStart) {
                    y.push("<tr>");
                    if (this.o.calendarWeeks) {
                        var w = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5),
                            E = new Date(Number(w) + (7 + 4 - w.getUTCDay()) % 7 * 864e5),
                            S = new Date(Number(S = r(E.getUTCFullYear(), 0, 1)) + (7 + 4 - S.getUTCDay()) % 7 * 864e5),
                            x = (E - S) / 864e5 / 7 + 1;
                        y.push('<td class="cw">' + x + "</td>")
                    }
                }
                b = this.getClassNames(p);
                b.push("day");
                if (this.o.beforeShowDay !== e.noop) {
                    var T = this.o.beforeShowDay(this._utc_to_local(p));
                    if (T === t) T = {};
                    else if (typeof T === "boolean") T = {
                        enabled: T
                    };
                    else if (typeof T === "string") T = {
                        classes: T
                    };
                    if (T.enabled === false) b.push("disabled");
                    if (T.classes) b = b.concat(T.classes.split(/\s+/));
                    if (T.tooltip) h = T.tooltip
                }
                b = e.unique(b);
                y.push('<td class="' + b.join(" ") + '"' + (h ? ' title="' + h + '"' : "") + ">" + p.getUTCDate() + "</td>");
                if (p.getUTCDay() === this.o.weekEnd) {
                    y.push("</tr>")
                }
                p.setUTCDate(p.getUTCDate() + 1)
            }
            this.picker.find(".datepicker-days tbody").empty().append(y.join(""));
            var N = this.picker.find(".datepicker-months").find("th:eq(1)").text(i).end().find("span").removeClass("active");
            e.each(this.dates, function(e, t) {
                if (t.getUTCFullYear() === i) N.eq(t.getUTCMonth()).addClass("active")
            });
            if (i < o || i > a) {
                N.addClass("disabled")
            }
            if (i === o) {
                N.slice(0, u).addClass("disabled")
            }
            if (i === a) {
                N.slice(f + 1).addClass("disabled")
            }
            y = "";
            i = parseInt(i / 10, 10) * 10;
            var C = this.picker.find(".datepicker-years").find("th:eq(1)").text(i + "-" + (i + 9)).end().find("td");
            i -= 1;
            var k = e.map(this.dates, function(e) {
                    return e.getUTCFullYear()
                }),
                L;
            for (var A = -1; A < 11; A++) {
                L = ["year"];
                if (A === -1) L.push("old");
                else if (A === 10) L.push("new");
                if (e.inArray(i, k) !== -1) L.push("active");
                if (i < o || i > a) L.push("disabled");
                y += '<span class="' + L.join(" ") + '">' + i + "</span>";
                i += 1
            }
            C.html(y)
        },
        updateNavArrows: function() {
            if (!this._allow_update) return;
            var e = new Date(this.viewDate),
                t = e.getUTCFullYear(),
                n = e.getUTCMonth();
            switch (this.viewMode) {
                case 0:
                    if (this.o.startDate !== -Infinity && t <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth()) {
                        this.picker.find(".prev").css({
                            visibility: "hidden"
                        })
                    } else {
                        this.picker.find(".prev").css({
                            visibility: "visible"
                        })
                    }
                    if (this.o.endDate !== Infinity && t >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth()) {
                        this.picker.find(".next").css({
                            visibility: "hidden"
                        })
                    } else {
                        this.picker.find(".next").css({
                            visibility: "visible"
                        })
                    }
                    break;
                case 1:
                case 2:
                    if (this.o.startDate !== -Infinity && t <= this.o.startDate.getUTCFullYear()) {
                        this.picker.find(".prev").css({
                            visibility: "hidden"
                        })
                    } else {
                        this.picker.find(".prev").css({
                            visibility: "visible"
                        })
                    }
                    if (this.o.endDate !== Infinity && t >= this.o.endDate.getUTCFullYear()) {
                        this.picker.find(".next").css({
                            visibility: "hidden"
                        })
                    } else {
                        this.picker.find(".next").css({
                            visibility: "visible"
                        })
                    }
                    break
            }
        },
        click: function(t) {
            t.preventDefault();
            var n = e(t.target).closest("span, td, th"),
                i, s, o;
            if (n.length === 1) {
                switch (n[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (n[0].className) {
                            case "datepicker-switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var u = v.modes[this.viewMode].navStep * (n[0].className === "prev" ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, u);
                                        this._trigger("changeMonth", this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, u);
                                        if (this.viewMode === 1) this._trigger("changeYear", this.viewDate);
                                        break
                                }
                                this.fill();
                                break;
                            case "today":
                                var a = new Date;
                                a = r(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0);
                                this.showMode(-2);
                                var f = this.o.todayBtn === "linked" ? null : "view";
                                this._setDate(a, f);
                                break;
                            case "clear":
                                var l;
                                if (this.isInput) l = this.element;
                                else if (this.component) l = this.element.find("input");
                                if (l) l.val("").change();
                                this.update();
                                this._trigger("changeDate");
                                if (this.o.autoclose) this.hide();
                                break
                        }
                        break;
                    case "span":
                        if (!n.is(".disabled")) {
                            this.viewDate.setUTCDate(1);
                            if (n.is(".month")) {
                                o = 1;
                                s = n.parent().find("span").index(n);
                                i = this.viewDate.getUTCFullYear();
                                this.viewDate.setUTCMonth(s);
                                this._trigger("changeMonth", this.viewDate);
                                if (this.o.minViewMode === 1) {
                                    this._setDate(r(i, s, o))
                                }
                            } else {
                                o = 1;
                                s = 0;
                                i = parseInt(n.text(), 10) || 0;
                                this.viewDate.setUTCFullYear(i);
                                this._trigger("changeYear", this.viewDate);
                                if (this.o.minViewMode === 2) {
                                    this._setDate(r(i, s, o))
                                }
                            }
                            this.showMode(-1);
                            this.fill()
                        }
                        break;
                    case "td":
                        if (n.is(".day") && !n.is(".disabled")) {
                            o = parseInt(n.text(), 10) || 1;
                            i = this.viewDate.getUTCFullYear();
                            s = this.viewDate.getUTCMonth();
                            if (n.is(".old")) {
                                if (s === 0) {
                                    s = 11;
                                    i -= 1
                                } else {
                                    s -= 1
                                }
                            } else if (n.is(".new")) {
                                if (s === 11) {
                                    s = 0;
                                    i += 1
                                } else {
                                    s += 1
                                }
                            }
                            this._setDate(r(i, s, o))
                        }
                        break
                }
            }
            if (this.picker.is(":visible") && this._focused_from) {
                e(this._focused_from).focus()
            }
            delete this._focused_from
        },
        _toggle_multidate: function(e) {
            var t = this.dates.contains(e);
            if (!e) {
                this.dates.clear()
            } else if (t !== -1) {
                this.dates.remove(t)
            } else {
                this.dates.push(e)
            }
            if (typeof this.o.multidate === "number")
                while (this.dates.length > this.o.multidate) this.dates.remove(0)
        },
        _setDate: function(e, t) {
            if (!t || t === "date") this._toggle_multidate(e && new Date(e));
            if (!t || t === "view") this.viewDate = e && new Date(e);
            this.fill();
            this.setValue();
            this._trigger("changeDate");
            var n;
            if (this.isInput) {
                n = this.element
            } else if (this.component) {
                n = this.element.find("input")
            }
            if (n) {
                n.change()
            }
            if (this.o.autoclose && (!t || t === "date")) {
                this.hide()
            }
        },
        moveMonth: function(e, n) {
            if (!e) return t;
            if (!n) return e;
            var r = new Date(e.valueOf()),
                i = r.getUTCDate(),
                s = r.getUTCMonth(),
                o = Math.abs(n),
                u, a;
            n = n > 0 ? 1 : -1;
            if (o === 1) {
                a = n === -1 ? function() {
                    return r.getUTCMonth() === s
                } : function() {
                    return r.getUTCMonth() !== u
                };
                u = s + n;
                r.setUTCMonth(u);
                if (u < 0 || u > 11) u = (u + 12) % 12
            } else {
                for (var f = 0; f < o; f++) r = this.moveMonth(r, n);
                u = r.getUTCMonth();
                r.setUTCDate(i);
                a = function() {
                    return u !== r.getUTCMonth()
                }
            }
            while (a()) {
                r.setUTCDate(--i);
                r.setUTCMonth(u)
            }
            return r
        },
        moveYear: function(e, t) {
            return this.moveMonth(e, t * 12)
        },
        dateWithinRange: function(e) {
            return e >= this.o.startDate && e <= this.o.endDate
        },
        keydown: function(e) {
            if (this.picker.is(":not(:visible)")) {
                if (e.keyCode === 27) this.show();
                return
            }
            var t = false,
                n, r, s, o = this.focusDate || this.viewDate;
            switch (e.keyCode) {
                case 27:
                    if (this.focusDate) {
                        this.focusDate = null;
                        this.viewDate = this.dates.get(-1) || this.viewDate;
                        this.fill()
                    } else this.hide();
                    e.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation) break;
                    n = e.keyCode === 37 ? -1 : 1;
                    if (e.ctrlKey) {
                        r = this.moveYear(this.dates.get(-1) || i(), n);
                        s = this.moveYear(o, n);
                        this._trigger("changeYear", this.viewDate)
                    } else if (e.shiftKey) {
                        r = this.moveMonth(this.dates.get(-1) || i(), n);
                        s = this.moveMonth(o, n);
                        this._trigger("changeMonth", this.viewDate)
                    } else {
                        r = new Date(this.dates.get(-1) || i());
                        r.setUTCDate(r.getUTCDate() + n);
                        s = new Date(o);
                        s.setUTCDate(o.getUTCDate() + n)
                    }
                    if (this.dateWithinRange(r)) {
                        this.focusDate = this.viewDate = s;
                        this.setValue();
                        this.fill();
                        e.preventDefault()
                    }
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation) break;
                    n = e.keyCode === 38 ? -1 : 1;
                    if (e.ctrlKey) {
                        r = this.moveYear(this.dates.get(-1) || i(), n);
                        s = this.moveYear(o, n);
                        this._trigger("changeYear", this.viewDate)
                    } else if (e.shiftKey) {
                        r = this.moveMonth(this.dates.get(-1) || i(), n);
                        s = this.moveMonth(o, n);
                        this._trigger("changeMonth", this.viewDate)
                    } else {
                        r = new Date(this.dates.get(-1) || i());
                        r.setUTCDate(r.getUTCDate() + n * 7);
                        s = new Date(o);
                        s.setUTCDate(o.getUTCDate() + n * 7)
                    }
                    if (this.dateWithinRange(r)) {
                        this.focusDate = this.viewDate = s;
                        this.setValue();
                        this.fill();
                        e.preventDefault()
                    }
                    break;
                case 32:
                    break;
                case 13:
                    o = this.focusDate || this.dates.get(-1) || this.viewDate;
                    this._toggle_multidate(o);
                    t = true;
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.setValue();
                    this.fill();
                    if (this.picker.is(":visible")) {
                        e.preventDefault();
                        if (this.o.autoclose) this.hide()
                    }
                    break;
                case 9:
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.fill();
                    this.hide();
                    break
            }
            if (t) {
                if (this.dates.length) this._trigger("changeDate");
                else this._trigger("clearDate");
                var u;
                if (this.isInput) {
                    u = this.element
                } else if (this.component) {
                    u = this.element.find("input")
                }
                if (u) {
                    u.change()
                }
            }
        },
        showMode: function(e) {
            if (e) {
                this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + e))
            }
            this.picker.find(">div").hide().filter(".datepicker-" + v.modes[this.viewMode].clsName).css("display", "block");
            this.updateNavArrows()
        }
    };
    var a = function(t, n) {
        this.element = e(t);
        this.inputs = e.map(n.inputs, function(e) {
            return e.jquery ? e[0] : e
        });
        delete n.inputs;
        e(this.inputs).datepicker(n).bind("changeDate", e.proxy(this.dateUpdated, this));
        this.pickers = e.map(this.inputs, function(t) {
            return e(t).data("datepicker")
        });
        this.updateDates()
    };
    a.prototype = {
        updateDates: function() {
            this.dates = e.map(this.pickers, function(e) {
                return e.getUTCDate()
            });
            this.updateRanges()
        },
        updateRanges: function() {
            var t = e.map(this.dates, function(e) {
                return e.valueOf()
            });
            e.each(this.pickers, function(e, n) {
                n.setRange(t)
            })
        },
        dateUpdated: function(t) {
            if (this.updating) return;
            this.updating = true;
            var n = e(t.target).data("datepicker"),
                r = n.getUTCDate(),
                i = e.inArray(t.target, this.inputs),
                s = this.inputs.length;
            if (i === -1) return;
            e.each(this.pickers, function(e, t) {
                if (!t.getUTCDate()) t.setUTCDate(r)
            });
            if (r < this.dates[i]) {
                while (i >= 0 && r < this.dates[i]) {
                    this.pickers[i--].setUTCDate(r)
                }
            } else if (r > this.dates[i]) {
                while (i < s && r > this.dates[i]) {
                    this.pickers[i++].setUTCDate(r)
                }
            }
            this.updateDates();
            delete this.updating
        },
        remove: function() {
            e.map(this.pickers, function(e) {
                e.remove()
            });
            delete this.element.data().datepicker
        }
    };
    var c = e.fn.datepicker;
    e.fn.datepicker = function(n) {
        var r = Array.apply(null, arguments);
        r.shift();
        var i;
        this.each(function() {
            var s = e(this),
                o = s.data("datepicker"),
                c = typeof n === "object" && n;
            if (!o) {
                var p = f(this, "date"),
                    d = e.extend({}, h, p, c),
                    v = l(d.language),
                    m = e.extend({}, h, v, p, c);
                if (s.is(".input-daterange") || m.inputs) {
                    var g = {
                        inputs: m.inputs || s.find("input").toArray()
                    };
                    s.data("datepicker", o = new a(this, e.extend(m, g)))
                } else {
                    s.data("datepicker", o = new u(this, m))
                }
            }
            if (typeof n === "string" && typeof o[n] === "function") {
                i = o[n].apply(o, r);
                if (i !== t) return false
            }
        });
        if (i !== t) return i;
        else return this
    };
    var h = e.fn.datepicker.defaults = {
        autoclose: false,
        beforeShowDay: e.noop,
        calendarWeeks: false,
        clearBtn: false,
        daysOfWeekDisabled: [],
        endDate: Infinity,
        forceParse: true,
        format: "mm/dd/yyyy",
        keyboardNavigation: true,
        language: "en",
        minViewMode: 0,
        multidate: false,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: false,
        startDate: -Infinity,
        startView: 0,
        todayBtn: false,
        todayHighlight: false,
        weekStart: 0
    };
    var p = e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    e.fn.datepicker.Constructor = u;
    var d = e.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    };
    var v = {
        modes: [{
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        }, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        },
        getDaysInMonth: function(e, t) {
            return [31, v.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(e) {
            var t = e.replace(this.validParts, "\0").split("\0"),
                n = e.match(this.validParts);
            if (!t || !t.length || !n || n.length === 0) {
                throw new Error("Invalid date format.")
            }
            return {
                separators: t,
                parts: n
            }
        },
        parseDate: function(n, i, s) {
            function w() {
                var e = this.slice(0, a[c].length),
                    t = a[c].slice(0, e.length);
                return e === t
            }
            if (!n) return t;
            if (n instanceof Date) return n;
            if (typeof i === "string") i = v.parseFormat(i);
            var o = /([\-+]\d+)([dmwy])/,
                a = n.match(/([\-+]\d+)([dmwy])/g),
                f, l, c;
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)) {
                n = new Date;
                for (c = 0; c < a.length; c++) {
                    f = o.exec(a[c]);
                    l = parseInt(f[1]);
                    switch (f[2]) {
                        case "d":
                            n.setUTCDate(n.getUTCDate() + l);
                            break;
                        case "m":
                            n = u.prototype.moveMonth.call(u.prototype, n, l);
                            break;
                        case "w":
                            n.setUTCDate(n.getUTCDate() + l * 7);
                            break;
                        case "y":
                            n = u.prototype.moveYear.call(u.prototype, n, l);
                            break
                    }
                }
                return r(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0)
            }
            a = n && n.match(this.nonpunctuation) || [];
            n = new Date;
            var h = {},
                p = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                m = {
                    yyyy: function(e, t) {
                        return e.setUTCFullYear(t)
                    },
                    yy: function(e, t) {
                        return e.setUTCFullYear(2e3 + t)
                    },
                    m: function(e, t) {
                        if (isNaN(e)) return e;
                        t -= 1;
                        while (t < 0) t += 12;
                        t %= 12;
                        e.setUTCMonth(t);
                        while (e.getUTCMonth() !== t) e.setUTCDate(e.getUTCDate() - 1);
                        return e
                    },
                    d: function(e, t) {
                        return e.setUTCDate(t)
                    }
                },
                g, y;
            m["M"] = m["MM"] = m["mm"] = m["m"];
            m["dd"] = m["d"];
            n = r(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0);
            var b = i.parts.slice();
            if (a.length !== b.length) {
                b = e(b).filter(function(t, n) {
                    return e.inArray(n, p) !== -1
                }).toArray()
            }
            if (a.length === b.length) {
                var E;
                for (c = 0, E = b.length; c < E; c++) {
                    g = parseInt(a[c], 10);
                    f = b[c];
                    if (isNaN(g)) {
                        switch (f) {
                            case "MM":
                                y = e(d[s].months).filter(w);
                                g = e.inArray(y[0], d[s].months) + 1;
                                break;
                            case "M":
                                y = e(d[s].monthsShort).filter(w);
                                g = e.inArray(y[0], d[s].monthsShort) + 1;
                                break
                        }
                    }
                    h[f] = g
                }
                var S, x;
                for (c = 0; c < p.length; c++) {
                    x = p[c];
                    if (x in h && !isNaN(h[x])) {
                        S = new Date(n);
                        m[x](S, h[x]);
                        if (!isNaN(S)) n = S
                    }
                }
            }
            return n
        },
        formatDate: function(t, n, r) {
            if (!t) return "";
            if (typeof n === "string") n = v.parseFormat(n);
            var i = {
                d: t.getUTCDate(),
                D: d[r].daysShort[t.getUTCDay()],
                DD: d[r].days[t.getUTCDay()],
                m: t.getUTCMonth() + 1,
                M: d[r].monthsShort[t.getUTCMonth()],
                MM: d[r].months[t.getUTCMonth()],
                yy: t.getUTCFullYear().toString().substring(2),
                yyyy: t.getUTCFullYear()
            };
            i.dd = (i.d < 10 ? "0" : "") + i.d;
            i.mm = (i.m < 10 ? "0" : "") + i.m;
            t = [];
            var s = e.extend([], n.separators);
            for (var o = 0, u = n.parts.length; o <= u; o++) {
                if (s.length) t.push(s.shift());
                t.push(i[n.parts[o]])
            }
            return t.join("")
        },
        headTemplate: "<thead>" + "<tr>" + '<th class="prev">&laquo;</th>' + '<th colspan="5" class="datepicker-switch"></th>' + '<th class="next">&raquo;</th>' + "</tr>" + "</thead>",
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: "<tfoot>" + "<tr>" + '<th colspan="7" class="today"></th>' + "</tr>" + "<tr>" + '<th colspan="7" class="clear"></th>' + "</tr>" + "</tfoot>"
    };
    v.template = '<div class="datepicker">' + '<div class="datepicker-days">' + '<table class=" table-condensed">' + v.headTemplate + "<tbody></tbody>" + v.footTemplate + "</table>" + "</div>" + '<div class="datepicker-months">' + '<table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table>" + "</div>" + "</div>";
    e.fn.datepicker.DPGlobal = v;
    e.fn.datepicker.noConflict = function() {
        e.fn.datepicker = c;
        return this
    };
    e(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) {
        var n = e(this);
        if (n.data("datepicker")) return;
        t.preventDefault();
        n.datepicker("show")
    });
    e(function() {
        e('[data-provide="datepicker-inline"]').datepicker()
    })
})(window.jQuery);
(function($) {
    $.fn.datepicker.dates['ar'] = {
        days: ["Ø§Ù„Ø£Ø­Ø¯", "Ø§Ù„Ø§Ø«Ù†ÙŠÙ†", "Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø§Ù„Ø®Ù…ÙŠØ³", "Ø§Ù„Ø¬Ù…Ø¹Ø©", "Ø§Ù„Ø³Ø¨Øª", "Ø§Ù„Ø£Ø­Ø¯"],
        daysShort: ["Ø£Ø­Ø¯", "Ø§Ø«Ù†ÙŠÙ†", "Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹Ø©", "Ø³Ø¨Øª", "Ø£Ø­Ø¯"],
        daysMin: ["Ø­", "Ù†", "Ø«", "Ø¹", "Ø®", "Ø¬", "Ø³", "Ø­"],
        months: ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"],
        monthsShort: ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"],
        today: "Ù‡Ø°Ø§ Ø§Ù„ÙŠÙˆÙ…",
        rtl: true
    };
}(jQuery));