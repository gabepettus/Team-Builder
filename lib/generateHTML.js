const generateCard = require("./generateCardHTML");

module.exports = function generateHTML(team) {

  // dynamically build team from list provided
  let teamListHtml = ""; 

  // loop though list of teams
  for (let i = 0; i < team.length; i += 1) {
    // keep track of new row for setting row div and /div
    let isNewRow = true;
    // loop through each team
    for (let j = 0; j < team[i].length; j += 1) {
      // grab employee out of team list in list of teams
      const empl = team[i][j];

      //if it should new row add row tag
      if (isNewRow) { 
        teamListHtml += `<div class="row">`;
      }
      // each col only has one element so each needs a col div
      teamListHtml += `<div class="col-sm-6">`;
      // generate card for employee
      teamListHtml += generateCard(empl);

      // checks for end of row or last empl in team  to close row 
      if ( !isNewRow || j === (team[i].length-1) ) { 
        teamListHtml += `</div>`; 
        isNewRow = true;
      } else {
        // in row so sets to false so new row is not created
        isNewRow = false;
      }

      teamListHtml += `</div>`; 
    }
  }

  const HTML = `
  <!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
<!--        <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap" rel="stylesheet"> -->
        <title>Rostor</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: #879CDF;
           padding-top: 100px;
           }
           body {
           background-image: url('./images/background.jpg');
           -webkit-print-color-adjust: exact !important;
           font-family: 'Open Sans Condensed', sans-serif;
           }
           main {
           background-color: #FECFC7;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           }
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: #FF8374;
           color: black;
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid #FEE24C;
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }

           .container {
           padding: 20px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 10px;
           }
  
           .card {
             padding: 10px;
             border-radius: 6px;
             background-color: #FF8374;
             color: black;
             margin: 20px;
             text-align: left;
           }

           .card-header-Engineer {
             background-color: #F2CA7E;
             padding: 5px;
           }
           .card-header-Intern {
             background-color: #F2B3C4;
             padding: 5px;
           }
           .card-header-Manager {
             background-color: #F2C1AE;
             padding: 5px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
        </head>
  <body class="wrapper">
  <div class="photo-header">
    <img src="./images/artdecologo.jpg" alt="image by rockwell kent" />
    <h2>Welcome to the Company Employee Roster!</h2>
    <h5> This employee roster in generated using and interactive CLI (4 simple steps to fun!) </h5>
    <p>
      <ol>
        <li> clone respository "git clone git@github.com:gabepettus/Team-Builder.git" to pull the code</li>
        <li> run "npm i" to install the library dependencies</li>
        <li> run "node ./app.js" to see the AWESOME CLI</li>
        <li> use your favorite browser (not IE not tested) to view your roster</li>
      </ol>
    </p>
  </div>
  </div
  </div>
  <!--end photo-header-->
</div>
  <main class="container">
  ${teamListHtml}
  </main>
<footer>
<div style="height: 300px">
</div>
</footer>

</body>
</html>
`;

  return HTML;
};