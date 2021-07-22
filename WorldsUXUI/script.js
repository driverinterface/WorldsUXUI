document.querySelectorAll('.story-btn').forEach(btn=>
{
  btn.addEventListener('click',()=>
    {
       btn.classList.toggle('change');
       btn.nextElementSibling.classList.toggle('change');
    })
})
function validation()
{
  var name=document.getElementById("name").value;
  var mail=document.getElementById("email").value;
  var phone=document.getElementById("mobile").value;
  var comp=document.getElementById("company").value;
  var comments=document.getElementById("message").value;
  var eMsg=document.getElementById("error-message");
  var btn=document.getElementById("submit");
  var msg;
  eMsg.style.padding="10px";
  if(name.length<5)
  {
    msg="please enter your name";
    eMsg.innerHTML=msg;
    return false;
  }
  if(mail.indexOf("@")==-1)
  {
    msg="please enter a valid email";
    eMsg.innerHTML=msg;
    return false;
  }
  if(isNaN(phone)||phone.length<10)
  {
    msg="please enter a valid phone number";
    eMsg.innerHTML=msg;
    return false;
  }
  if(comp==="")
  {
    msg="company name cannot be empty";
    eMsg.innerHTML=msg;
    return false;
  }
  if(comments.length<1)
  {
    msg="message cannot be empty";
    eMsg.innerHTML=msg;
    return false;
  }
  btn.removeAttribute("disabled");
  // alert("thank you our team will get back to you shortly");
  return true;
}
// length
