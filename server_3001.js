const express   = require('express');
const fs = require('fs');

const execSync = require('child_process').execSync;
const app    = express();
const cors   = require('cors');
app.use(cors({origin:"*",}))
app.disable('etag');
app.disable('x-powered-by');



app.get('/arm_trig/:id',   function (req, res) {

    const filePath = '/root/Node-Express-App/daq.txt';

    console.log('8.ARM_TRIGGER received by server')
    const output = execSync('python3 Arm_Trigger.py 2 > daq.txt' + req.params.id, { encoding: 'utf-8' });
    fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      res.type('text/plain');
      res.send(data);
    }
  });
   }); 



app.listen(3001, () => {
    console.log('App Server is listening on port 3001');
});


