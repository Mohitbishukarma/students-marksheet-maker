//getting data of student detials

const myMarksheet=() =>{

    //students details
    var student_name = document.getElementById('student_name').value;
    var grade = document.getElementById('class').value;
    var roll = document.getElementById('roll.no').value;
    var father_name = document.getElementById('father').value;
    var mother_name = document.getElementById('mother').value;
    
     //students marks getting
    var english=document.getElementById("english").value;
    var nepali=document.getElementById("nepali").value;
    var math=document.getElementById("math").value;
    var science=document.getElementById("science").value;
    var social=document.getElementById("social").value;
    var eph=document.getElementById("eph").value;
    var optmath=document.getElementById("optmath").value;
    var education=document.getElementById("education").value;
    //students details filling
    document.getElementById('fill_name').innerHTML = student_name;
    document.getElementById('fill_class').innerHTML = grade;
    document.getElementById('fill_roll.no').innerHTML = roll;
    document.getElementById('fill_father_name').innerHTML = father_name;
    document.getElementById('fill_mother_name').innerHTML = mother_name;

   
    
    //students marks filling
    document.getElementById('english_marks').innerHTML =english;
    document.getElementById('nepali_marks').innerHTML=nepali;
    document.getElementById('math_marks').innerHTML =math;
    document.getElementById('science_marks').innerHTML =science;
    document.getElementById('social_marks').innerHTML =social;
    document.getElementById('eph_marks').innerHTML =eph;
    document.getElementById('opt1_marks').innerHTML =optmath;
    document.getElementById('opt2_marks').innerHTML =education;



}
//((document.getElementById("cal_option")||{}).value)||"";




function generateMarksheet() {
    const body = document.getElementById("dataContainer");

    var file = document.getElementById("student_name").value

    var opt = {
        margin: 1,
        filename: file,
        image: { type: 'jpeg', quality: 0.86 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'p' }
    };
    html2pdf()
        .from(body)
        .set(opt)
        .save();
}