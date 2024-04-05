// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
    constructor(data) {
      //data can either be a string or an array of numbers
      if (typeof data === "string") {
        this.data = str.split(",").map((number) => number * 1);
      } else {
        this.data = data;
      }
    }
    count() {
        console.log(this.data)
        return(this.data.length)
      //return the count of numbers in data
    }
    printNumbers() {
        console.log(this.data)
      //print the numbers in data
    }
    odds() {
      const numbers = (this.data)
      const odds = numbers.filter((num) => num % 2 === 1);
      console.log(odds);
      //return the odd numbers in data
    }
    evens() {
        const numbers = (this.data)
        const evens = numbers.filter((num) => num % 2 === 0 );
        console.log(evens); 
      //return the even numbers in data
    }
    sum() {
        const arr = (this.data)
        const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        console.log(sum);
      //return the sum of the numbers
    }
    product() {
        const arr = (this.data)
        const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        console.log(sum);
      //return the product of the numbers
    }
    greaterThan(target) {
        let greaterThanTarget = this.data.filter(num => num >target);
        return greaterThanTarget

      //return the numbers greater than the target
    }
    howMany(target) {
        let count = 0;
        for(let idx of this.data){
        if(idx == target)
        count++;
        }
    return count
      //return the count of a given number
    }
  }
  
  //Prompt the user for a list of integers separated by commas
  const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");
  
  //create an instance of numbers
  const n1 = new Numbers(str);
  console.log(n1.count()); //returns count of numbers
  n1.printNumbers(); //prints the number along with their indexes
  console.log(n1.odds()); //returns odd numbers
  console.log(n1.evens()); //returns even numbers
  console.log(n1.sum()); //returns sum of numbers
  console.log(n1.product()); //returns product of numbers
  console.log(n1.greaterThan(3)); //returns numbers greater than another number
  console.log(n1.howMany(3)); //return the count of a specific number