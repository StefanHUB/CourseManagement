var sqlite3 = require('sqlite3').verbose()

// open the database
let db = new sqlite3.Database('Modules.db', (err) => {
    if (err) {
      console.error(err.message);
      throw err
    }
    console.log('Connected to the Modules database.');
  });


  // create table 'module'
  const sql='CREATE TABLE module(Name text,StartDate text,EndDate text,Tutor text, Grade text)';
  db.run(sql, (err) => {
    if (err) {
        // Table already created
        console.log('Table already created.');
    }else{
      console.log('Table created.');
      
      // First time Table created, insert some rows
      console.log('First time Table created, creating some rows.');
      
      var insert = 'INSERT INTO module(Name, StartDate, EndDate, Tutor, Grade) VALUES(?,?,?,?,?)';
      db.run(insert, ['JavaScript Programming','17/02/2020','18/09/2021','Johnny Doe','80']);
      db.run(insert, ['React with Hooks','17/02/2020','18/09/2021','Jane Doe','75']);
    }
  });


// export as module, called db
module.exports = db
