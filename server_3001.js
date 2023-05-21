const express   = require('express');
const execSync = require('child_process').execSync;
const app    = express();
const cors   = require('cors');
app.use(cors({origin:"*",}))
app.disable('etag');
app.disable('x-powered-by');



app.get('/arm_trig/:id',   function (req, res) {

    console.log('8.ARM_TRIGGER received by server')
    const output = execSync('python3 Arm_Trigger.py ' + req.params.id, { encoding: 'utf-8' });

      res.type('text/plain');
      res.send(data);
   }); 



app.listen(3001, () => {
    console.log('App Server is listening on port 3001');
});


