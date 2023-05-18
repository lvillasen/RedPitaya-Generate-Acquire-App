const express = require('express');
const execSync = require('child_process').execSync;
const app = express();
const cors = require('cors');
app.use(cors({ origin: "*", }))
//app.use(express.json());

app.get('/stop_DAC', (req, res) => {
    //const text = req.query.text;
    console.log('7.STOP DAC received by server')
    const output1 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    const output2 = execSync('monitor 0x40000030 6' , { encoding: 'utf-8' });
    const output3 = execSync('monitor 0x40000030 0' , { encoding: 'utf-8' });
    //const output = execSync(`${text}`);
    const output4 = execSync('killall python3 ' , { encoding: 'utf-8' });
    //const output = execSync('monitor 0x40200000 0x80' , { encoding: 'utf-8' });

});

app.listen(3002, () => {
    console.log('App Server is listening on port 3002');
});