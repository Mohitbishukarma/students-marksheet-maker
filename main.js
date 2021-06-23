
//getting data of student detials

function myMarksheet() {
    
    var student_name=document.getElementById('student_name').value
    var grade=document.getElementById('class').value
    var roll=document.getElementById('roll.no').value
    var father_name=document.getElementById('father').value
    var mother_name=document.getElementById('mother').value
    
    document.getElementById('fill_name').innerHTML=student_name;
    document.getElementById('fill_class').innerHTML=grade;
    document.getElementById('fill_roll.no').innerHTML=roll;
    document.getElementById('fill_father_name').innerHTML=father_name;
    document.getElementById('fill_mother_name').innerHTML=mother_name;

}



function generateMarksheet() {
    const body = document.getElementById("dataContainer");
    
    var file=document.getElementById("student_name").value

    var opt = {
 margin:       1,
 filename:file,
image:        { type: 'jpeg', quality: 0.86 },
html2canvas:  { scale: 2},
 jsPDF:        { unit: 'in', format: 'a4', orientation: 'p' }
};
    html2pdf()
        .from(body)
        .set(opt)
        .save();
}
