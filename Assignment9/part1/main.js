
var People = function (name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
   
}

People.prototype.info = function() {
    let info = ("Name: " + this.name + ", Age: " + this.age + ", Occupation: " + this.occupation);
    return info;
}

var alex = new People('Alex', 20, 'landscaping');
var leanna = new People('leanna', 47, 'facility services manager');
var cody = new People('Cody', 25, 'USAF Hospital administrator');



function printAlex(){
    var p = document.createElement('p');
    var Text = document.createTextNode(alex.info());
    p.appendChild(Text);
    const pageBody = document.getElementsByClassName("people");
    pageBody[0].appendChild(p);

}


function printLeanna(){
    var p = document.createElement('p');
    var Text = document.createTextNode(leanna.info());
    p.appendChild(Text);
    const pageBody = document.getElementsByClassName("people");
    pageBody[0].appendChild(p);

}

function printCody(){
    var p = document.createElement('p');
    var Text = document.createTextNode(cody.info());
    p.appendChild(Text);
    const pageBody = document.getElementsByClassName("people");
    pageBody[0].appendChild(p);

}












