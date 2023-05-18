const express = require('express');
const execSync = require('child_process').execSync;
const app = express();
const cors = require('cors');
app.use(cors({ origin: "*", }))
//app.use(express.json());

app.get('/leds/:id', function(req, res) {
    const output = execSync('monitor 0x40000030 ' + req.params.id, { encoding: 'utf-8' });
    console.log('LEDs changed to ' + req.params.id);
    res.send('LEDs changed to ' + req.params.id);
});

app.get('/leds/', function(req, res) {
    const output = execSync('monitor 0x40000030', { encoding: 'utf-8' });
    console.log('LEDs status is ' + output);
    res.send('LEDs status is ' + output);
});

app.get('/bash', (req, res) => {
    //res.send('Bash received by server');
    const text = req.query.text;
    console.log('1.BASH received by server')
    const output1 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output2 = execSync('monitor 0x40000030 1' , { encoding: 'utf-8' });
    const output3 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output = execSync(`${text}`);
});

app.get('/python', (req, res) => {
    //res.send('2.LEDs Python received by server');
    const text = req.query.text;
    console.log('2.LEDs Python received by server')
    const output1 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output2 = execSync('monitor 0x40000030 2' , { encoding: 'utf-8' });
    const output3 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output = execSync(`python3 -c '${text}'`);
});

app.get('/upload', (req, res) => {
    //res.send('Upload received by server');
    const text = req.query.text;
    console.log('3.UPLOAD WAVE received by server')
    const output1 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output2 = execSync('monitor 0x40000030 3' , { encoding: 'utf-8' });
    const output3 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output = execSync(`python3 -c '${text}'`);
});

app.get('/settings', (req, res) => {
    //res.send('SETTINGS received by server');
    const text = req.query.text;
    console.log('4.DAC SETTINGS received by server')
    const output1 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output2 = execSync('monitor 0x40000030 4' , { encoding: 'utf-8' });
    const output3 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output = execSync(`python3 -c '${text}'`);
});

app.get('/start_DAC', (req, res) => {
    //res.send('START DAC received by server');
    const text = req.query.text;
    console.log('6.START_DAC received by server')
    const output1 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output2 = execSync('monitor 0x40000030 6' , { encoding: 'utf-8' });
    const output3 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output = execSync(`python3 -c '${text}'`);
});

app.get('/stop_DAC', (req, res) => {
    const text = req.query.text;
    console.log('7.STOP DAC received by server')
    const output1 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output2 = execSync('monitor 0x40000030 7' , { encoding: 'utf-8' });
    const output3 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output = execSync(`${text}`);
    const output4 = execSync('killall python3 ' , { encoding: 'utf-8' });
    //const output = execSync('monitor 0x40200000 0x80' , { encoding: 'utf-8' });

});

app.get('/save', (req, res) => {
    //res.send('Save received by server');
    const text = req.query.text;
    console.log('5.SAVE received by server')
    const output1 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output2 = execSync('monitor 0x40000030 5' , { encoding: 'utf-8' });
    const output3 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output = execSync(`echo '${text}' > Arm_Trigger.py`);
});

app.listen(3000, () => {
    console.log('App Server is listening on port 3000');
});