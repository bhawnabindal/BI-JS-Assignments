let filename = document.getElementById("filename");
let previewing = document.getElementById("previewing");
let url;

filename.addEventListener("change", function(event) {
    if (event.target.files.length == 0) {
        return;
    }
    url = URL.createObjectURL(event.target.files[0]);
    previewing.setAttribute("src", url);
});
function report(){
    var a = document.getElementById("name").value;
    var b = document.getElementById("college").value;
    var c = document.getElementById("location").value;
    let name1 = document.getElementById("name1").innerHTML;
    let college_name = document.getElementById("college_name").innerHTML;
    let location_name = document.getElementById("location_name").innerHTML;
    let image = document.getElementById("image");
    if (a.length == "") {
        alert("Enter the name")
    } 
    else if (b.length == "") {
        alert("Enter the college name")
    } 
    else if (c.length == "") {
        alert("Enter the location")
    }
    name1 = a;
    college_name = b;
    location_name = c;
    document.getElementById("name1").innerHTML = "Name : " +name1;
    document.getElementById("college_name").innerHTML = "College : " +college_name;
    document.getElementById("location_name").innerHTML = "Location : " +location_name;
    image.setAttribute("src", url);    
}