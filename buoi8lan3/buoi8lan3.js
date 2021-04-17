//add Row
var rIndex,table = document.getElementById("table");
var reader=""
function checkInput(){
name = document.getElementById("itemName").value;
//check name
if(name.length >= 10 || Number(name[0])) {
            document.getElementById("invalid").innerHTML="Name is invalid";
            return false;
        }
        else if(name.length < 1){
            document.getElementById("invalid").innerHTML="Name is required";
            return false;
        }
        category = document.getElementById("Category").value;
        //check category
        if(category=="Category 0"){
            document.getElementById("invalid2").innerHTML="Category is required";
            return false;
        }
        return true;
    }
function readURL(input) {
    let img=document.getElementById("idimg");
    if (input.files && input.files[0]) {
    reader = new FileReader();
    reader.onload = function (e) {
        img.src=e.target.result;
        img.width=200;
        img.height=150;
    };
        reader.readAsDataURL(input.files[0]);
}
}

function addHTMLTableRow(){
if (checkInput()) {
        const item = {
        _name : name,
        _category   : category,
        _img : reader.result
        }
        let table = document.getElementById("table"),
            newRow=table.insertRow(table.length),
            cell0=newRow.insertCell(0)
            cell1=newRow.insertCell(1);
            cell2=newRow.insertCell(2);
            cell3=newRow.insertCell(3);
            name = document.getElementById("itemName").value;
            category = document.getElementById("Category").value;

            cell0.innerHTML= "#";
            cell1.innerHTML= name;
            cell2.innerHTML= category;
            cell3.innerHTML= `
                <img id="idimg" src="" alt=" "> 
            `;

            selectedRowToInput();
}
}
function selectedRowToInput()
    {
        
        for(let i = 1; i < table.rows.length; i++)
        {
            table.rows[i].onclick = function()
            {
              console.log(rIndex);
              rIndex = this.rowIndex;
              
              document.getElementById("itemName").value = this.cells[1].innerHTML;
              document.getElementById("Category").value = this.cells[2].innerHTML;
              document.getElementById("idimg").value = this.cells[3].innerHTML;
            };
        }
    }
    selectedRowToInput();

function editHtmlTbleSelectedRow()
    {
        let name = document.getElementById("itemName").value,
            category = document.getElementById("Category").value;
            
       
            table.rows[rIndex].cells[0].innerHTML = "#";
            table.rows[rIndex].cells[1].innerHTML = name;
            table.rows[rIndex].cells[2].innerHTML = category;
            table.rows[rIndex].cells[3].innerHTML = readURL(input);
      
    }
function removeSelectedRow() {
            table.deleteRow(rIndex);
            document.getElementById("itemName").value="";
            document.getElementById("Category").value="";
            document.getElementById("idimg").value="";
}
