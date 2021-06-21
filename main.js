//Assignment:  Create a determineExperienceLevel function.  It's goal it to take in the number of years someone has been coding and return a value stating their experience level.  
//For this exercise, < 2 years is a "Newbie."  Between 2 and 5 years is "Intermediate".  Between 5 and 7 years is "Senior".  
//Between 7 and 15 years is "Advanced."  And more than 15 years is "Guru."  
//Call your function 10 times and log the result to the console as follows:  "Programmer with (X) years of experience:  (result)." 
console.log('');
console.log('** FUNCTIONS ASSIGNMENT **');
var numYears = 1;
var experienceLevel = determineExperienceLevel(numYears);
var arrayForMessage = ['Programmer with ', numYears, ' year(s) of experience: ', experienceLevel, '.'];
console.log(arrayForMessage.join(""));

numYears = 3;
experienceLevel = determineExperienceLevel(numYears);
arrayForMessage = ['Programmer with ', numYears, ' year(s) of experience: ', experienceLevel, '.'];
console.log(arrayForMessage.join(""));

numYears = 5;
experienceLevel = determineExperienceLevel(numYears);
arrayForMessage = ['Programmer with ', numYears, ' year(s) of experience: ', experienceLevel, '.'];
console.log(arrayForMessage.join(""));

numYears = 7;
experienceLevel = determineExperienceLevel(numYears);
arrayForMessage = ['Programmer with ', numYears, ' year(s) of experience: ', experienceLevel, '.'];
console.log(arrayForMessage.join(""));

numYears = 9;
experienceLevel = determineExperienceLevel(numYears);
arrayForMessage = ['Programmer with ', numYears, ' year(s) of experience: ', experienceLevel, '.'];
console.log(arrayForMessage.join(""));

numYears = 10;
experienceLevel = determineExperienceLevel(numYears);
arrayForMessage = ['Programmer with ', numYears, ' year(s) of experience: ', experienceLevel, '.'];
console.log(arrayForMessage.join(""));

numYears =11;
experienceLevel = determineExperienceLevel(numYears);
arrayForMessage = ['Programmer with ', numYears, ' year(s) of experience: ', experienceLevel, '.'];
console.log(arrayForMessage.join(""));

numYears = 13;
experienceLevel = determineExperienceLevel(numYears);
arrayForMessage = ['Programmer with ', numYears, ' year(s) of experience: ', experienceLevel, '.'];
console.log(arrayForMessage.join(""));

numYears = 15;
experienceLevel = determineExperienceLevel(numYears);
arrayForMessage = ['Programmer with ', numYears, ' year(s) of experience: ', experienceLevel, '.'];
console.log(arrayForMessage.join(""));

numYears = 21;
experienceLevel = determineExperienceLevel(numYears);
arrayForMessage = ['Programmer with ', numYears, ' year(s) of experience: ', experienceLevel, '.'];
console.log(arrayForMessage.join(""));

function determineExperienceLevel(numberOfYears)
{
    switch(true)
    {
        //Note:  Don't have to do > 2 and < 5 because if we go in order with our cases, it will exit when it hits the first match
        case (numberOfYears < 2):
            return 'Newbie';
            break;
        case (numberOfYears < 5):
            return 'Intermediate';
            break;
        case (numberOfYears < 7):
            return 'Senior';
            break;
        case (numberOfYears < 15):
            return 'Advanced';
            break;
        case (numberOfYears >= 15):
            return 'Guru';
            break;
        default:
            return 'Unable to determine';
            break;
    }
}

//Assignment:  Create an => arrow function that accepts a firstName and lastName and returns a concatenated "firstName lastName".  
//Call the function 5 times and write the results to the console each time.
console.log('');
console.log('** ARROW => FUNCTIONS ASSIGNMENT **');
const concatName = (firstName, lastName) => 
{
    arrayName = [firstName, ' ', lastName];
    return arrayName.join("");
}

console.log(concatName('Tony','Stark'));
console.log(concatName('Wanda','Maximoff'));
console.log(concatName('The','Vision'));
console.log(concatName('Bruce','Banner'));
console.log(concatName('Peter','Parker'));

//Assignment:  Create a new constructor function for DisneyCharacter.  It should contain their name, movie, and status (hero/villain/other).  
//Create a method within the prototype of that function called getBlurb.  It will return a one-sentence blurb about the character in this format:  
//"(Character) from (movie) is a (status)."  And yes, that'll look weird with the other status, but it's fine.  
//Create 5 objects.  Then log all 5 out to the console.  Then call the getBlurb method for all 5 and write the result out to the console.
console.log('');
console.log('** CONSTRUCTOR FUNCTIONS ASSIGNMENT **');
function DisneyCharacter(name, movie, status)
{
    this.name = name;
    this.movie = movie;
    this.status = status;
}
DisneyCharacter.prototype.getBlurb = function()
{
    var arrayForBlurb = [this.name, ' from ', this.movie, ' is a ', this.status, '.'];
    return(arrayForBlurb.join(""));
}
//Instantiate the objects
const character1 = new DisneyCharacter('Aladdin', 'Aladdin', 'hero');
const character2 = new DisneyCharacter('Elsa', 'Frozen', 'hero');
const character3 = new DisneyCharacter('Maleficent', 'Sleeping Beauty', 'villain');
const character4 = new DisneyCharacter('Darth Maul', 'Star Wars', 'villain');
const character5 = new DisneyCharacter('Luke Skywalker', 'Star Wars', 'hero');

//Log the characters and their blurbs
console.log(character1);
console.log(character1.getBlurb());
console.log(character2);
console.log(character2.getBlurb());
console.log(character3);
console.log(character3.getBlurb());
console.log(character4);
console.log(character4.getBlurb());
console.log(character5);
console.log(character5.getBlurb());

//Assignment:  Convert the DisneyCharacter constructor function we made earlier into a Class.  getBlurb will become a method within that class.  
//Instantiate 5 objects of that class.  Log all 5 out to the console.  Then call the getBlurb method for all 5 and write the resulting blurb out to the console.
console.log('');
console.log('** CLASSES ASSIGNMENT **');
class DisneyChar
{
    constructor(name, movie, status)
    {
        this.name = name;
        this.movie = movie;
        this.status = status;
    }
    getBlurb()
    {
        var arrayForBlurb2 = [this.name, ' from ', this.movie, ' is a ', this.status, '.'];
        return(arrayForBlurb2.join(""));
    }
}

//Instantiate the objects
const char1 = new DisneyCharacter('Aladdin', 'Aladdin', 'hero');
const char2 = new DisneyCharacter('Elsa', 'Frozen', 'hero');
const char3 = new DisneyCharacter('Maleficent', 'Sleeping Beauty', 'villain');
const char4 = new DisneyCharacter('Darth Maul', 'Star Wars', 'villain');
const char5 = new DisneyCharacter('Luke Skywalker', 'Star Wars', 'hero');

//Log the characters and their blurbs
console.log(char1);
console.log(char1.getBlurb());
console.log(char2);
console.log(char2.getBlurb());
console.log(char3);
console.log(char3.getBlurb());
console.log(char4);
console.log(char4.getBlurb());
console.log(char5);
console.log(char5.getBlurb());