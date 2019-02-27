console.log()
var people = function (name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
   
}

people.prototype.info = function() {
    console.log("name: " + this.name + " Age: " + this.age + " occupation: " + this.occupation);
}

var alex = new People('Alex', 20, 'landscaping');

alex.info();


function print(){
    var p = document.createElement('p');
    var Text = document.createTextNode(alex.info);
    p.appendChild(Text);
    const pageBody = document.getElementsByClassName("people");
    pageBody[0].appendChild(p);

}











