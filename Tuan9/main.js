$(document).ready(function() {
    // xu ly tat ca 
    function ktraMa() {
        let maVal = $("#ma").val();
        let pattenMa = /^(BN)[0-9]{5}$/;
        let patten = /^([A-Z]{1}[a-z]*\s)+([A-Z]{1}[a-z]*){1}$/;
        if (pattenMa.test(maVal)) //dung
        {
            $("#ertenMa").html("*");
            $('#ma').removeClass('errorborder');
            $('#ertenMa').removeClass('error');

            return true;
        } else {
            $("#ertenMa").html("Ma theo mau BN12345");
            $("#ertenMa").addClass("error");
            $("#ma").addClass('errorborder');
            return false;
        }
    }
    $("#ma").blur(function(e) {
        // ktra ho ten dung
        ktraMa();
    });
    function ktraMatKhau() {
        let matKhauVal = $("#matKhau").val();
        let pattenMatKhau = /(.{6,})/;

        if(pattenMatKhau.test(matKhauVal)) {
            $('#ertenMatKhau').html('*');
            $('#maKhau').removeClass('errorborder');
            $('#ertenMatKhau').removeClass('error');
            return true;
        } else {
            $("#ertenMatKhau").html("Mat Khau phai tu 6 ky tu tro len");
            $("#ertenMatKhau").addClass("error");
            $("#maKhau").addClass('errorborder');
            return false;
        }
    }
    $("#matKhau").blur(function(e) {
        // ktra ho ten dung
        ktraMatKhau();
    });
    function ktraNgay() {
        let ngayKhamVal = $("#ngayKham").val();
        ngayKhamVal = new Date(ngayKhamVal);
        let ngayHienTai = new Date();

        if(ngayKhamVal < ngayHienTai) {
            $('#ertenNgayKham').html('*');
            $('#ngayKham').removeClass('errorborder');
            $('#ertenNgayKham').removeClass('error');
            return true;
        } else {
            $("#ertenNgayKham").html("Ngay kham phai truoc ngay hien tai");
            $("#ertenNgayKham").addClass("error");
            $("#ngayKham").addClass('errorborder');
            return false;
        }
    }
    $("#ngayKham").blur(function(e) {
        // ktra ho ten dung
        ktraNgay();
    });

    // $("#chuyenKhoa").change(function(e) {
    //     // lay value mon hoc luu vao text
    //     let chuyenK = $("#chuyenKhao option:selected").val();
    //     $("#chuyenKhoa").val(chuyenK);
    // });
    
    $("#btnDatLich").click(function(e) {
        //du lieu trong form -> lay du lieu add table
        // lay du lieu tren text
        let ma = $("#ma").val();
        let mk = $("#matKhau").val();
        let ngay = $("#ngayKham").val();
        let ngayK = new Date(ngay).getDate()
        let thangK = new Date(ngay).getMonth();
        let namK = new Date(ngay).getFullYear();

        let ngayKham = ngayK + "/" + (thangK+1) + "/" + namK;
        //lay value tren option trong select
        let chuyenKhoa = $("#chuyenKhoa option:selected").val();
        //lay text trong select  mon hoc 
        // let mon = $("# option:selected").text();
        // lay value cua text tin chi
        // let stc = $("#stc").val();

        //lay value radio: 1 value duy nhat
        // let loai = $("input[type='radio']:checked").val();
        // let loai=$("input[name='loai']:checked").val();

        // lay value checkbox: lay nhieu hon 1 value
        let loaiDichVu = [];
        $.each($("input[type='checkbox']:checked"), function() {
            loaiDichVu.push($(this).val());

        });

        if (ktraMa()) {
            let i = 1;
            let trnew = "<tr><td>" + (++i) + "</td><td>" + ma + "</td><td>" + mk + "</td><td>" + ngayKham + "</td><td>" + loaiDichVu + "</td><td>"  + chuyenKhoa + "</td></tr>";
            $("#table_body").append(trnew);

        }
    });

});


// fetch

var courseAPI = "http://localhost:3000/hospital";

function start() {
    getCourse(renderCourses);

    handelCreateFrom();
}

start();

//function

function getCourse(callback) {
    fetch(courseAPI).then((resopnse)=>{
        return resopnse.json();
    }).then(callback);
} 

function createCourse(data,callback) {
    var options = {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    };
    fetch(courseAPI,options).then((response)=>{
        response.json();
    }).then(callback)
}

function renderCourses(courses) {
    var listCourseBlock = document.querySelector("#table_body");
    var htmls = courses.map((course)=>{
        return `
        <tr>
        <td>${course.id}</td>
        <td>${course.name}</td>
        <td>${course.pass}</td>
        <td>${course.date}</td>
        <td>${course.dichVu}</td>
        <td>${course.chuyenKhoa}</td>
        </tr>
        `;
    });
    listCourseBlock.innerHTML = htmls.join("");
}
function handelCreateFrom() {
    // var createBtn = document.getElementById("#btnDatLich");

    $("#btnDatLich").click(function(e) {
        let ma = $("#ma").val();
        let mk = $("#matKhau").val();
        let ngay = $("#ngayKham").val();
        let ngayK = new Date(ngay).getDate()
        let thangK = new Date(ngay).getMonth();
        let namK = new Date(ngay).getFullYear();
        let ngayKham = ngayK + "/" + (thangK+1) + "/" + namK;
        let chuyenKhoa = $("#chuyenKhoa option:selected").val();
        let loaiDichVu = [];
        $.each($("input[type='checkbox']:checked"), function() {
            loaiDichVu.push($(this).val());

        });

        var formData = {
            name: ma,
            pass: mk,
            date: ngayKham,
            dichVu: loaiDichVu,
            chuyenKhoa: chuyenKhoa
        }

        createCourse(formData,()=>{
            getCourse(renderCourses); 
        })
    });
}
