var header =$('h1')
var tombol =$('#tombol')

tombol.click(function()
{
    // header.text("Mantap cuy")
    //pertama
    //header.first().text("Mantap cuy")
    //Kedua
    //header.last().text("Mantap cuy")
    $.getJSON("data.json",function(result){
        console.log(result)
        result.data.forEach((datum,key) => {
            console.log(datum)

            
            // var nama="<td>"+datum.Nama+"</td>"
            // var nim="<td>"+datum.Nim+"</td>"
            // var email="<td>"+datum.email+"</td>"
            // var kartu="<tr class='col-4 card'>"+nama+nim+email+"</div>"
            // $('#list').append(kartu)
            var id ="<td>"+(key+=1)+"</td>"
            var nama="<td>"+datum.Nama+"</td>"
            var nim="<td>"+datum.Nim+"</td>"
            var email="<td>"+datum.email+"</td>"
            var tr="<tr>"+id+nama+nim+email+"</tr>"
            $('#tbody').append(tr)
            
        });

    })
  tombol.click(function()
  {
      
  })  
})

var tambah=$('#tambah')
tambah.click(function(e)
{
    e.preventDefault()
    var nama=$('#nama').val()
    var nim=$('#nim').val()
    var email=$('#email').val()
    console.log(nama,nim,email)
    $.getJSON('data.json',)    
})

header.val('halo dunia')
console.log(header)