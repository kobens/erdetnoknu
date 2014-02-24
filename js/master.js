eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('r.E.W=7(c,d){c=c||".";d=q d=="7"?d:7(){};6.K(7(e){g a=e.i?e.i:e.h?e.h:0;2(a==k&&6.N.J()=="G"){5 3}f 2(a==k){5 j}g b=j;2((e.4&&a==y)||(e.4&&a==v))5 3;2((e.4&&a==t)||(e.4&&a==u))5 3;2((e.4&&a==V)||(e.4&&a==S))5 3;2((e.4&&a==R)||(e.4&&a==Q))5 3;2((e.4&&a==P)||(e.4&&a==O)||(e.L&&a==p))5 3;2(a<I||a>H){2(a==p&&6.l.F==0)5 3;2(a==c.n(0)&&6.l.o(c)!=-1){b=j}2(a!=8&&a!=9&&a!=k&&a!=D&&a!=C&&a!=M&&a!=B&&a!=A){b=j}f{2(q e.i!="z"){2(e.h==e.m&&e.m!=0){b=3}f 2(e.h!=0&&e.i==0&&e.m==0){b=3}}}2(a==c.n(0)&&6.l.o(c)==-1){b=3}}f{b=3}5 b}).x(7(){g a=r(6).w();2(a!=""){g b=T U("^\\\\d+$|\\\\d*"+c+"\\\\d+");2(!b.s(a)){d.X(6)}}});5 6}',60,60,'||if|true|ctrlKey|return|this|function||||||||else|var|keyCode|charCode|false|13|value|which|charCodeAt|indexOf|45|typeof|jQuery|exec|120|88|65|val|blur|97|undefined|46|39|36|35|fn|length|input|57|48|toLowerCase|keypress|shiftKey|37|nodeName|86|118|90|122|67|new|RegExp|99|numeric|apply'.split('|'),0,{}))

$(function() {

    $(".lix").hide();
    $(".counterlink").addClass("active");
    $(".lixlink").click(function() {
        $(this).addClass("active");
        $(".counterlink").removeClass("active");
        $(".counter").hide();
        $(".lix").show();
        return false;
    });
    $(".counterlink").click(function() {
        $(this).addClass("active");
        $(".lixlink").removeClass("active");
        $(".counter").show();
        $(".lix").hide();
        return false;
    });

    $("#number").numeric();
    var initValue = $("#number").val();
    $("#number").blur(function() {
        if ($(this).val() === "") {
            $(this).val(initValue);
        } else {
            tempValue = $(this).val();
        }
    });
    $("#number").focus(function() {
        if ($(this).val() == initValue) {
            $(this).val('');
        } else {

        }
    });

    $(document).keydown(function(e) {
        if (e.which > 48 && e.which < 57) {
            $("#number").focus();
            if ($("#number").val() == initValue || $("#number").val() == tempValue) {
                $("#number").val('');
            }
        }
    });

    $.fn.moveCharacter = function(level) {
        var positions = [-1760, -1401, -1042, -683, -324, 35];
        return $(this).css({
            backgroundPosition: '0 ' + positions[level] + 'px'
        });
    };

    function calculate() {
        var divider = 2400;
        var number = $("#number").val();
        var result = number / divider;
        var rounded = Math.round((result) * 10) / 10;
        var level = 0;
        if ($("#number").val() != initValue) {
            $('#result').html(rounded);
        }

        if (result > 0 && result < 2) {
            level = 0;
        } else if (result > 2 && result < 4) {
            level = 1;
        } else if (result > 4 && result < 6) {
            level = 2;
        } else if (result > 6 && result < 8) {
            level = 3;
        } else if (result > 8 && result < 9) {
            level = 4;
        } else if (result > 9) {
            level = 5;
        }
        $("#character").moveCharacter(level);
    }

    function lix() {
        var text = $("#lix").val();
        var trimmed = $.trim(text);
        var words = trimmed.split(" ").length;
        var sentences = trimmed.match(/[\?!;:.]+/g).length;
        var biggerThanSeven = trimmed.match(/[a-zA-Z]{7}/g).length;
        var lixNum = Math.round(((words / sentences) + ((biggerThanSeven / words) * 100)));
        var hut = "";

        if (lixNum < 24) {
            hut = "et barn";
        } else if (lixNum > 24 && lixNum < 35) {
            hut = "en ugebladsskribent";
        } else if (lixNum >= 35 && lixNum < 45) {
            hut = "en journalist";
        } else if (lixNum >= 45 && lixNum < 55) {
            hut = "en akademiker";
        } else if (lixNum >= 55) {
            hut = "en ombudsmand";
        }

        if (sentences > 4) {
            $("#hut").html(hut);
            $("#lixtal").html(lixNum);
            $("#langeord").html(biggerThanSeven);
            $("#satninger").html(sentences);
            $(".data").show();
        } else {
            $("#error").show();
        }

    }

    $(".error").click(function() {
        $("#error").hide();
        return false;
    });
    $(".close").click(function() {
        $(".data").hide();
        return false;
    });
    $("#lixcalc").click(function() {
        lix();
        return false;
    });
    $("#number").keyup(function() {
        calculate();
    });
    $("#lix").click(function() {
        $(this).select();
    });
});