const submitText = document.getElementById("submit-text");
if (sessionStorage.getItem("modalshow") === null) {
    setTimeout(function() {
        $("#signupmodal").modal();
    },10000);
    sessionStorage.setItem("modalshow", true);
}
document.getElementById('locationForm').onsubmit = () => {
    const sv = document.getElementById("locationsearch").value.replace(" ", "+");
    let url = `https://www.google.com/maps/search/chibib+burgers+${sv}`;
    window.open(url, '_blank');
    return false;
}
function submitform(e) {
    if (e == "signup") {
        submitText.innerText = "Thank you for signing up. You will be notified every time a new deal pops up.";
        $("#signupmodal").modal('hide');
        $("#thank-you-modal").modal();
        return
    }
    submitText.innerText = "Thank you for providing feedback or giving an inquiry. Our team will carefully look at it and listen to our fanbase.";
    $("#inquire-feedback").modal('hide');
    $("#thank-you-modal").modal();
    return false;
}