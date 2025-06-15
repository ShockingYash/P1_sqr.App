function find(event)
{
    event.preventDefault();
    let num = document.getElementById("num");
    if(num.value==="")
    {
        alert("Please Enter Number");
        num.focus();
        return;
    }
    let n = parseFloat(num.value);
    let ans = n**2;
    localStorage.setItem("ans",ans);
    window.location.href="result.html";
}