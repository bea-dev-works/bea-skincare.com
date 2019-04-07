$(document).ready(function () {
    if ($("#ingredients").length > 0) {
        $("<select class='selector' id='ingridient-select'></select>").insertBefore("#ingredients h4:first");

        $("#ingredients h4").each(function () {
            var that = $(this);
            var title = that.text(), desc = that.next("p").text();
            var className = title.toLowerCase().replace(/\s/g, "-");
            that.next("p").addClass(className);
            that.remove();
            $("#ingridient-select").append("<option value='" + className + "'>" + title + "</option>");
        });
        $("#ingridient-select").change(function () {
            $("#ingredients p[class]").removeClass("activated");
            $("." + $(this).val()).addClass("activated");
        });
        $("#ingredients p[class]:first").addClass("activated");
    }
})