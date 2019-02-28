class People{
    constructor(name, age, occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation; 
    } 
    info() {
        let info = ("Name: " + this.name + ", Age: " + this.age + ", Occupation: " + this.occupation);
        return info;
    }
}


class Family extends People{
    constructor(name, age, occupation, relation){
        super(name, age, occupation);
        this.relation = relation;          
    }
    info() {
        let info = super.info() + ", Relation: "+ this.relation;
    return info;
    }

}


var alex = new People('Alex', 20, 'landscaping');
var leanna = new Family('leanna', 47, 'facility services manager', 'Mother');
var cody = new Family('Cody', 25, 'USAF Hospital administrator', 'brother-in-law');
var brentan = new People('Brentan', 20, 'safeway clerk');



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

function printBrentan(){
    var p = document.createElement('p');
    var Text = document.createTextNode(brentan.info());
    p.appendChild(Text);
    const pageBody = document.getElementsByClassName("people");
    pageBody[0].appendChild(p);

}












