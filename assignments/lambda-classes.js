// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


class Instructor extends Person{
    constructor(instructoratt){
        super(instructoratt);
        this.specialty = instructoratt.specialty
        this.favLanguage = instructoratt.favLanguage
        this.catchPhrase = instructoratt.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }

}

class Student extends Person{
    constructor(StuAttributes){
        super(StuAttributes);
        this.previousBackground = StuAttributes.previousBackground
        this.className = StuAttributes.className
        this.favSubject = StuAttributes.favSubject
    }
    listsSubject(){
        return this.favSubject
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallange(subject){
        return `${this.name} has begun sprint challange on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(ProAttributes){
        super(ProAttributes);
        this.gradeClassName = ProAttributes.gradeClassName
        this.favInstrutor = ProAttributes.favInstrutor
    }
    standUp(channel){
       return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }

}







const Bayron = new Person({
    name: 'Bayron',
    age: 22,
    location: 'Houston',
})

const John = new Instructor({
    name: 'John',
    age: 34,
    location: 'Spring',
    specialty: 'Python',
    favLanguage: 'CSS',
    catchPhrase: `Hang in there`
})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't forget the homies`
  });

  const Andy = new Student({
    name: 'Andy',
    location: 'New Jersey',
    age: 22,
    previousBackground: `Went to Texas A&M University`,
    className: 'CS132',
    favSubject: ['Html', 'CSS', 'JavaScript']
  });

  const Joy = new Student({
    name: 'Joy',
    location: 'Spain',
    age: 27,
    previousBackground: `Worked in retail`,
    className: 'CS132',
    favSubject: ['Html', 'CSS', 'JavaScript']
  });

  const Lane = new ProjectManager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't forget the homies`,
    gradeClassName: 'CS1',
    favInstrutor: 'Andy'
  });
  const Frank = new ProjectManager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't forget the homies`,
    gradeClassName: 'CS1',
    favInstrutor: 'Joy'

  });
  


console.log(Bayron.speak());
console.log(John.demo("Javascript"));
console.log(fred.catchPhrase);
console.log(John.grade(Joy, "Advance CSS"))
console.log(Andy.PRAssignment("HTML"));
console.log(Joy.sprintChallange("Advance CSS"));
console.log(Joy.listsSubject());
console.log(Lane.standUp("IS1908"));
console.log(Frank.debugsCode("Andy", "JavaScript"));

