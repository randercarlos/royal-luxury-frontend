$(document).ready(function() {
    if ($('#back_to_top').length) {
        var scrollTrigger = 100,
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back_to_top').addClass('active');
                } else {
                    $('#back_to_top').removeClass('active');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back_to_top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    if ($(window).width() < 992) {
        $('.rh-drop-menu').parent('li').addClass('rh-dropdown');
    }
    $(window).resize(function() {
        if ($(window).width() < 992) {
            $('.rh-drop-menu').parent('li').addClass('rh-dropdown');
        } else {
            $('.rh-drop-menu').parent('li').removeClass('rh-dropdown');
        }
    });
    $(".rh-dropdown > a").on("click", function(e) {
        e.preventDefault();
        $('.rh-dropdown').removeClass('active-rh');
        $(this).parent('li').addClass('active-rh');
        if (!$(this).parent("li").parent("ul").hasClass("open")) {
            $(".main-navbar li").find('.open').removeClass('open');
        }
        $(this).next(".rh-drop-menu").addClass('open');
    });
    $(function() {
        $("#arrivalDate,#departureDate").datepicker({
            minDate: +1,
            firstDay: 1,
            dateFormat: "mm - dd - yy",
            gotoCurrent: true,
            buttonImageOnly: true,
            numberOfMonths: 1,
            inline: true,
            changeMonth: true,
            changeYear: true,
            beforeShow: function customRange(input) {
                if (input.id == 'departureDate') {
                    var arrivalDate = jQuery('#arrivalDate').datepicker("getDate");
                    if (arrivalDate) {
                        arrivalDate.setDate(arrivalDate.getDate() + 1);
                        return {
                            minDate: arrivalDate
                        };
                    }
                }
            },
            onClose: function() {
                if ($(this).attr('id') == 'arrivalDate') {
                    $("#departureDate").datepicker("show");
                    $("#departureDate").focus();
                }
            }
        });
    });
    $(function() {
        $(".tabs-menu a").click(function(event) {
            event.preventDefault();
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            var tab = $(this).attr("href");
            $(".tab-content").not(tab).css("display", "none");
            $(tab).fadeIn();
        });
    });
    $(function() {
        $(".lazy").slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            lazyLoad: 'ondemand',
            infinite: true,
            arrows: false,
            responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    });
    $(function() {
        $(".regular").slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    });
    $(function() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            defaultDate: '2017-11-25',
            editable: true,
            events: [{
                title: '',
                start: '2017-11-02',
                constraint: 'Available',
                color: '#73E237'
            }, {
                title: '',
                start: '2017-11-05',
                constraint: 'Number of rooms/house left',
                color: '#F2B601'
            }, {
                title: '',
                start: '2017-11-17',
                constraint: 'Booking Closed',
                color: '#F06565'
            }, {
                title: '',
                start: '2017-11-22',
                constraint: 'Available',
                color: '#73E237'
            }, {
                title: '',
                start: '2017-11-24',
                constraint: 'Not Available',
                color: '#EEA4E8'
            }, {
                title: '',
                start: '2017-11-26',
                constraint: 'Booking Closed',
                color: '#F06565'
            }, {
                id: 'availableForMeeting',
                start: '2017-05-11T10:00:00',
                end: '2017-05-11T16:00:00',
                rendering: 'background'
            }, {
                id: 'availableForMeeting',
                start: '2017-05-13T10:00:00',
                end: '2017-05-13T16:00:00',
                rendering: 'background'
            }, ]
        });
    });
    $(function() {
        $('button').on('click', function(e) {
            $(this).closest('button').addClass('current').siblings().removeClass('current');
            if ($(this).hasClass('sort-by-grid')) {
                $('#sort-by #grid_list').removeClass('sort-by-list').addClass('sort-by-grid');
            } else if ($(this).hasClass('sort-by-list')) {
                $('#sort-by #grid_list').removeClass('sort-by-grid').addClass('sort-by-list');
            }
        });
    });
    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [0, 500],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
    });
    $(function() {
        var eventDates = {};
        eventDates[new Date('10/28/2017')] = 'selected';
        eventDates[new Date('10/29/2017')] = 'selected';
        eventDates[new Date('10/30/2017')] = 'selected';
        eventDates[new Date('10/31/2017')] = 'selected';
        eventDates[new Date('10/15/2017')] = 'unavailable';
        eventDates[new Date('11/05/2017')] = 'unavailable';
        eventDates[new Date('11/11/2017')] = 'unavailable';
        eventDates[new Date('11/10/2017')] = 'unavailable';
        eventDates[new Date('11/21/2017')] = 'unavailable';
        var cur = -1,
            prv = -1;
        $(".section-booking .date-picker-inline").datepicker({
            numberOfMonths: 2,
            beforeShowDay: function(date) {
                return [true, ((date.getTime() >= Math.min(prv, cur) && date.getTime() <= Math.max(prv, cur)) ? 'date-range-selected' : '')];
                var highlight = eventDates[date];
                if (highlight) {
                    return [true, 'css-class-to-highlight ' + highlight, ''];
                } else {
                    return [true, '', ''];
                }
            },
            onSelect: function(dateText, inst) {
                var d1, d2;
                prv = cur;
                cur = (new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay)).getTime();
                if (prv == -1 || prv == cur) {
                    prv = cur;
                    $('.section-booking .date-picker-inline').val(dateText);
                } else {
                    d1 = $.datepicker.formatDate('mm/dd/yy', new Date(Math.min(prv, cur)), {});
                    d2 = $.datepicker.formatDate('mm/dd/yy', new Date(Math.max(prv, cur)), {});
                    $('.section-booking .date-picker-inline').val(d1 + ' - ' + d2);
                }
            }
        });
        var now = new Date();
        $(".section-booking .date-picker-inline.second").datepicker("setDate", new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()))
        if ($('select').length > 0) {
            $('select').selectpicker({});
        }
    });
    jQuery('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    jQuery(document).ready(function() {
        jQuery('#characterLeft').text('140 characters left');
        jQuery('#message').keydown(function() {
            var max = 140;
            var len = $(this).val().length;
            if (len >= max) {
                jQuery('#characterLeft').text('You have reached the limit');
                jQuery('#characterLeft').addClass('red');
                jQuery('#btnSubmit').addClass('disabled');
            } else {
                var ch = max - len;
                jQuery('#characterLeft').text(ch + ' characters left');
                jQuery('#btnSubmit').removeClass('disabled');
                jQuery('#characterLeft').removeClass('red');
            }
        });
    });
});