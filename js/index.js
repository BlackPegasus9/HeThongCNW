$(document).ready(function() {
    var i = 1;
    $("#btnDK").click(function() {
        $("#myModal").modal();
    });

    function kiemTraTen() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraSoCMNDcu() {
        var mauKT = /^\d*$/;
        if ($("#SCMND").val() == "") {
            $("#tbSCMND").html("Không để trống");
            return false;
        }

        $("#tbSCMND").html("*");
        return true;
    }

    $("#SCMND").blur(kiemTraSoCMNDcu);

    function kiemTraDiaChi() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Hometown").val() == "") {
            $("#tbHometown").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Hometown").val())) {
            $("#tbHometown").html("Mỗi ký tự đầu viết hoa");
            return true;
        }
        $("#tbHometown").html("*");
        return true;
    }

    $("#Hometown").blur(kiemTraDiaChi);

    function kiemTraSDT() {
        var i = 1;
        let mauKT = /^0\d{3}-\d{3}-]\d{3}$/;
        if ($("#Tel").val() == "") {
            $("#tbTel").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Tel").val())) {
            $("#tbTel").html("Theo Dạng 0xxx-xxx-xxx trong đó x là số");
            return true;
        }
        $("#tbTel").html("*");
        return true;
    }

    $("#Hometown").blur(kiemTraSDT);


    $("#Save").click(function() {
        if (kiemTraTen() == true && kiemTraSoCMNDcu() == true && kiemTraDiaChi() == true && kiemTraSDT() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#SCMND").val() + "</th>";
            row += "<th>" + $("#Hometown").val() + "</th>";
            row += "<th>" + $("#Tel").val() + "</th>";
            row += "<th>" + $("#Ava").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
})