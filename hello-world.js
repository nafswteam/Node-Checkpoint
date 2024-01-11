// Task one - console logging HELLO WORLD in the console
console.log("HELLO WORLD");

// Task two - Creating a Server
const http = require("http");
const fs = require("fs");
const generator = require('generate-password');
var nodemailer = require('nodemailer');

const server = http.createServer((req, res) => {
    res.write("<h1>Hello Node!!!</h1>")
    res.end();
});

// Server listening on port 3000;
server.listen(3000, console.log("Server is running on port 3000"));


// Task 3 - creating a file called welcome.txt and append data into it
fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if(err) throw new Error(error);
    console.log("welcome.txt has been successfully created.")
});

// Task 4 - Creating a file called password-generator then logging a random password to the console.
fs.writeFile("password-generator", "", (err) => {
    if(err) throw new Error(error);
    console.log("password-generator created.")
});


// Task 4 B - A function that generate a random password and console log it.
function generateRandPassword() {
    const password = generator.generate({
        length: 10,
        numbers: true
    });
    console.log(password, " is a random password that has been generated");
    return password;
}

generateRandPassword();

// Task 5 - create a file named email-sender
fs.writeFile("email-sender", "", (err) => {
    if(err) throw new Error("error");
    console.log("email-sender successfully created.")
});


// Sending email to myself
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'arigbedeomobolaji@gmail.com',
      pass: 'I don commot my password'
    }
  });
  
  var mailOptions = {
    from: 'arigbedeomobolaji@gmail.com',
    to: 'ariscopauliana@gmail.com',
    subject: 'Sending Email using Node.js',
    html: `
    <html>
    <body>
    <div>
    <h1>A message of ❤</h1>
    <p> ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ I send this message with alot of Love❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤.</p>
    <button>I hope this message meet you with ❤❤❤❤❤❤</button>
</div>
    </body>
    </html>
   
    `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });