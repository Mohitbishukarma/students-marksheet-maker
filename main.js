function generateMarksheet() {
    const body = document.getElementById("dataContainer");
    html2pdf()
        .from(body)
        .save();
}
