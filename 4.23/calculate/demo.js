var PerformanceS = function() {
    
}
PerformanceS.prototype.calculate = function(salary) {
    return salary * 5;
}

var PerformanceA = function() {
    
}
PerformanceA.prototype.calculate = function(salary) {
    return salary * 4;
}

var PerformanceB = function() {
    
}
PerformanceB.prototype.calculate = function(salary) {
    return salary * 3;
}


var Bounce = function(salary) {
    this.salary = salary;
}
Bounce.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function() {
    return this.strategy.calculate(this.salary);   
}

var bounce = new Bounce(4000);
bounce.setStrategy(new PerformanceS());
console.log(bounce.getBounce());

var bounce2 = new Bounce(5000);
bounce2.setStrategy(new PerformanceB());
console.log(bounce2.getBounce());

