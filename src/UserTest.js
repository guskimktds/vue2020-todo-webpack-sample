class User {
  constructor(name, interests){
    this.name = name;
    this.interests = interests;
  }
  greeting(){
    console.log('Hi, I\'m '+this.name + '.');
  }
  get interestsCount(){
    return this.interests ? this.interests.length : 0;
  }
}

class TeamMember extends User {
  constructor(name, interests){
    super(name, interests);
    this._tasks = [];
    this._welcomeText = 'Welcome to the team!';
  }
  greeting(){
    console.log('I\'m ' + this.name + '. ' + this._welcomeText);
  }
  work(){
    console.log('I\'m working on ' + this._tasks.length + ' tasks.');
  }
  set tasks(tasks){
    let acceptedTasks = [];
    if(tasks.length > TeamMember.maxTasksCapacity()){
      acceptedTasks = tasks.slice(0, TeamMember.maxTasksCapacity());
      console.log('It\'s over max capacity. Can only take two.');
    }
    else{
      acceptedTasks = tasks;
    }
    this._tasks = this._tasks.concat(acceptedTasks);
  }
  static maxTasksCapacity(){
    return 2;
  }
}

let member = new TeamMember('Sunny', ['Traveling']);
member.greeting();
member.tasks = ['Buy three tickets', 'Book a hotel', 'Rent a car'];


User.prototype.eat = function() {
  console.log('What will I have for lunch?');
};
member.eat();




User.sleep = function() {
  console.log('Go to sleep');
};
member.sleep(); // User 에 sleep() 은 정적메소드로 member 에서는 접근하지 못한다. 오류발생
User.sleep();

//강화된 객체 리터럴
const advice = 'Stay hungry. Stay foolish.';

let advisor = {
  __proto__: new TeamMember('Adam', ['Consulting']),
  advice1,
  greeting(){
    super.greeting();
    console.log(this.advice1);
  },
  [advice1.split('.')[0]]: 'Always learn more'
}
