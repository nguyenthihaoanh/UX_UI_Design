
var b2=document.getElementById('id2');
if(b2!=null)
b2.onclick=function()
{
    var gt1=document.getElementById('id1').value;
    var gt2=document.getElementById('id3').value;
    if(document.form.id3.value=="")
    {
        alert("Vui lòng Nhập Tên Để Có Thể Comment");
    }
    else
    {
        document.getElementById('output').innerHTML+="<p>"+gt2+": "+gt1+"</p>";
    }
}
