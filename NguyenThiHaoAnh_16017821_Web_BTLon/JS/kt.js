$(document).ready(function () 
{
    var i = 1;
    
    //kiểm tra một trường bắt buộc nhập và theo một biểu thức quy tắc
    // JavaScript source code
    $(document).ready(function () 
    {
        var i = 1;
        
        //kiểm tra một trường bắt buộc nhập và theo một biểu thức quy tắc
        function KiemtraBatBuoc_RegularExpression(txt,re,tb, mess) 
        {        
            if (txt.val() == "") 
            {
                tb.html("* bắt buộc nhập");
                return false;
            }
            if (!re.test(txt.val())) 
            {
                tb.html(mess);
                return false;
            }
            tb.html("*");
            return true;
        }
        //Kiểm tra họ tên bắt buộc nhập và ít nhất 2 từ, viết hoa đầu mỗi từ
        $("#txtHT").blur(function () 
        {
            KiemtraBatBuoc_RegularExpression($("#txtHT"), /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,$("#tbHT"),"Họ tên ít nhất 2 từ, viết hoa đầu mỗi từ")
        });
        //kiem tra email bắt buộc nhập và theo mẫu địa chỉ gmail: 
        $("#txtEmail").blur(function () 
        {
            KiemtraBatBuoc_RegularExpression($("#txtEmail"), /^[A-Za-z]\w*@gmail.com$/, $("#tbEmail"), "Phải đúng địa chỉ email của gmail.com (ví dụ: minh@gmail.com)")
        });
        //kiem tra số điện thoại theo mẫu: "000-0000000" 
        $("#txtCMND").blur(function () 
        {
            KiemtraBatBuoc_RegularExpression($("#txtDT"), /^\d{3}\-\d{6}$/, $("#tbDT"), "CMND từ 9 ->12 số")
        });
        //kiểm tra ngày ngày sinh Khách hàng phải >=18 tuổi
        function KiemtraNgaySinh() 
        {
            if ($("#txtNgay").val() == "") 
            {
                $("#tbNgay").html("* bắt buộc nhập");
                return false;
            }
            var day = new Date($("#txtNgay").val());
            var today = new Date();
            //today.setDate(today.getDate() + 30);
            if (today.getFullYear()-day.getFullYear()<10) 
            {
                $("#tbNgay").html("* Khách hàng phải >=10 tuổi");
                return false;
            }
            $("#tbNgay").html("*");
            return true;
        }
        $("#txtNgay").blur(KiemtraNgaySinh);
    });
    var bt_contact=document.getElementById("btnSave");
    bt_contact.onclick=function()
    {
        var hoten = $("#txtHT").val();
        var email = $("#txtEmail").val();
        var ngaysinh = $("#txtNgay").val();
        var cm = $("#txtCMND").val();  
        var cmt = $("#cmt").val();  
        alert('Họ Tên: '+hoten+"\n"+"Ngày Sinh: "+ngaysinh+"\n"+"CMND: "+cm+"\n"+"Email: "+email+"\n"+"Ý Kiến Của Khách Hàng: "+cmt);
    }
})
