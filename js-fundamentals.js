const kg_per_pound = 0.45
const meter_per_inch = 0.0254

// create array with data

let clients = 
[ { 
    Name: "John",
    Weight: 186,
    Height: 80
    
}, 
          { 
    Name: "Sam",
    Weight: 205,
    Height: 82
          }
    ]

// define BMI function
function getBMI(client) {
  let wightInKg = client.Weight * kg_per_pound
  let heightInMeter = client.Height * meter_per_inch

  let bmi = wightInKg / heightInMeter 

  return bmi
}

// loop through array and call BMI function

for (let i = 0; i < clients.length; i++) {
  let client = clients[i];
  let bmi = getBMI(client)
  console.log(client.Name + ": " + bmi )
}

