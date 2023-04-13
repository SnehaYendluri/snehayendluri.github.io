console.log("hello there"); 

console.log("Question 1"); 

let employees = '{"employees": [' + 
'{"firstname":"Sam" , "department":"Tech" , "designation":"Manager" , "salary": 40000 , "raise_eligible": true},' + 
'{"firstname":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary": 18500 , "raise_eligible": true},' + 
'{"firstname":"Bill" , "department":"HR" , "designation":"Executive" , "salary": 21200 , "raise_eligible": false}' + 
']}';

const emp_obj = JSON.parse(employees); 
console.log("Current employees", employees); 
console.log("Current employees JSON Object",emp_obj);

console.log("Question 2"); 
let company = '{"companyName":"Tech Stars",' + '"website":"www.techstars.site",' + '"employees": ' + JSON.stringify(emp_obj["employees"]) + '}';

// console.log(company); 
const comp_obj = JSON.parse(company); 

console.log("Current company",company);
console.log("Current company JSON Object",comp_obj);

console.log("Question 3"); 

let new_emp = {"firstname":"Anna" , "department":"Tech" , "designation":"Executive" , "salary": 25600 , "raise_eligible": false};
emp_obj["employees"].push(new_emp); //adding the employee to the employees array

comp_obj.employees.push(new_emp); // adding it to the company array 

console.log("Employees", emp_obj); 
console.log("Company", comp_obj);

console.log("Question 4"); 

let result = 0; 
for (let i = 0; i < comp_obj.employees.length; i++)
{
    result = result += comp_obj.employees[i]["salary"]
}

console.log("Total Salary of the employees in the company: ", result);

console.log("Question 5"); 

let iseligible = 0; 
let increase = 0; 
for (let i = 0; i < comp_obj.employees.length; i++)
{
    if(comp_obj.employees[i]["raise_eligible"])
    {
        comp_obj.employees[i]["salary"] = comp_obj.employees[i]["salary"] * 1.1;
        comp_obj.employees[i]["raise_eligible"] = false;
    }
    else{
        comp_obj.employees[i]["raise_eligible"] = true;
    }
}

console.log(comp_obj)

console.log("Question 6");

let working_from_home = ['Anna', 'Sam'];

for (let i = 0; i < comp_obj.employees.length; i++)
{
    comp_obj.employees[i]["wfh"] = false;
    for (let j = 0; j < working_from_home.length; j++)
    {
        if (comp_obj.employees[i]["firstname"] == working_from_home[j])
        {
            comp_obj.employees[i]["wfh"] = true;
        }
    }
}

console.log(comp_obj)

