function js_Load(){
    console.log("loaded")
    document.body.style.visibility='visible';
}

function loadHome(){
    document.getElementById("content").innerHTML =`<section>
    <header>
        <h2>NEW JERSEY DEFENSE ATTORNEY</h2>
    </header>
    <p>James Fennessy, Esq. is an experienced criminal, DWI/DUI, and municipal court defense attorney in New Jersey, whose practice is concentrated on criminal defense, drunk driving defense (DWI/DUI), and municipal court matters (such as traffic tickets, ordinances and municipal code violations.)</p>
    <p>Prior to opening his own practice, James Fennessy served as a municipal prosecutor in 23 municipalities in Ocean and Monmouth counties, New Jersey. His experience in criminal defense and law enforcement helps provide the best possible defense to your criminal charge, DWI/DUI or traffic ticket. He is also a retired New Jersey State Trooper.</p>
    <p>Many people feel that they can handle violations such as criminal, DWI/DUI or other traffic offenses in New Jersey on their own, and sometimes the consequences later affect them in ways that they had not imagined. Even “minor” traffic convictions can negatively impact your driver’s license and insurance rates.</p>							
    <p>There is no fee for an initial consultation. James Fennessy, Esq., will work aggressively to provide you with quality legal services and protect your rights, while keeping you informed of your options at every stage of the process. Evening and weekend appointments are available when necessary to meet your schedule.</p>
    <p><strong>Call Jim today to schedule your appointment.</Strong> Someone from the office will get back to you as soon as possible, if he is not immediately available. We look forward to meeting with you and establishing a personalized attorney-client relationship based upon your unique concerns and issues.</p>
    <br>
    <span class="tag">James Fennessy, Esq.</span>
    <p><strong>Bey Lea Commons
    <br>
    Suite 204
    <br>
    40 Bey Lea Road
    <br>
    Toms River, N.J. 08753</strong></p>

    <p><strong>Phone:</strong> 732-505-8808 <br>
    <strong>Fax:</strong> 866-251-1621</p>
</section>`
$("#content").show();
}

function loadContact(){
    // $("#content").empty();
var content = document.getElementById("content");
while (content.firstChild) {
    content.removeChild(content.firstChild);
}
content.innerHTML=`<section>
    <header align="center">
        <h2>Contact Us</h2><br>
    </header>
    <div align="center">
    
        <strong><label for="name">Name:</label></strong><br>
        <input type="text" id="name" size="30" required><br>
        <strong><label for="email">Email:</label></strong> <br>
        <input type="text" id="email" size="30" required><br>
        <strong><label for="phone">Phone Number:</label></strong><br>
        <input type="text" id="phone" size="30" required><br>
        <strong><label for="message">Message:</label></strong><br>
        <textarea name="message" id="message" cols="50" rows="10" required></textarea><br>
       <button id="submit">Submit Button</button>
    
</div>
<div align="center">
    <br>
    <span class="tag">James Fennessy, Esq.</span>
    <p><strong>Bey Lea Commons
    <br>
    Suite 204
    <br>
    40 Bey Lea Road
    <br>
    Toms River, N.J. 08753</strong></p>

    <p><strong>Phone:</strong> 732-505-8808 <br>
    <strong>Fax:</strong> 866-251-1621</p>
</div>
</section>`;
// $("#content").show();
content.style.display = 'none';
content.style.display = 'block';
document.getElementById("submit").onclick=function(){
    console.log("Posted")
    var name= $("#name").val()
    console.log(name)
    $.ajax({
        method: "POST",
        url: "/contact",
    
        })
        .done(function( data ) {
            console.log(data)
            loadThankYou()
        });
}

}

function loadThankYou(){
    console.log("loading thank you")
    document.getElementById("content").innerHTML = `<section>
    <header>
        <h2>Thank you for sending us a message.</h2>
    </header>
    <p>Someone from Jim's Office will be in touch with you soon.</p>
    <br>
    <br>
    <br>
    <br>
    <span class="tag">James Fennessy, Esq.</span>
    <p><strong>Bey Lea Commons
    <br>
    Suite 204
    <br>
    40 Bey Lea Road
    <br>
    Toms River, N.J. 08753</strong></p>

    <p><strong>Phone:</strong> 732-505-8808 <br>
    <strong>Fax:</strong> 866-251-1621</p>
</section>`;
$("#content").show();
}



