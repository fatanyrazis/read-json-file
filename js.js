var header =$('h1')
var tombol =$('#tombol')

tombol.click(function(){    
    
    $('#id1').css("color", "white")
    $('#id1').css("background-color", "blue")
    $('#id1').html("Data Mahasiswa")
    
    console.log('clicked')
    $.getJSON("data.json",function(result){
        console.log(result)
        result.data.forEach((datum,key) => {
                var id ="<td>"+(key+=1)+"</td>"
                var nama="<td>"+datum.Nama+"</td>"
                var nim="<td>"+datum.Nim+"</td>"
                var email="<td>"+datum.email+"</td>"
                var jumlah="<td>"+datum.jumlah+"</td>"
                var matkul = ""
                datum.matakuliah.forEach((item) => {
                    matkul += "<li>"+item+"</li>"
                });
                console.log(matkul)
                var matakuliah = "<td><ol>"+matkul+ "</ol></td>"
            var tr="<tr>"+id+nama+nim+email+jumlah+matakuliah+"</tr>"  
            $('#tbody').append(tr)
        });

    })
   
})
