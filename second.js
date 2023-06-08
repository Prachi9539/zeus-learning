document.getElementById("Btn").addEventListener('click',function(e){
    e.preventDefault();
    var Nam=document.getElementById('Name').value;
    var Comm=document.getElementById('Comment').value;
    var Mal=document.getElementById('Male').checked;
    var Femal=document.getElementById('Female').checked;

if((Nam.trim()===' ')||(Comm.trim()===' ')||(!Mal && !Femal)){
        alert("All fields are compulsory");
    
    if(Nam.trim()===' '){
        document.getElementById('Name').focus();
    }
    else if(Comm.trim()===' '){
        document.getElementById('Comment').focus();
    }
    else{
    document.getElementById('Male').focus();
}
}
else{
    document.getElementById('Form').submit();

}
})