
var People = function (name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
   
}

People.prototype.info = function() {
    let info = ("name: " + this.name + " Age: " + this.age + " occupation: " + this.occupation);
    return info;
}

var alex = new People('Alex', 20, 'landscaping');



function print(){
    var p = document.createElement('p');
    var Text = document.createTextNode(alex.info());
    p.appendChild(Text);
    const pageBody = document.getElementsByClassName("people");
    pageBody[0].appendChild(p);

}











