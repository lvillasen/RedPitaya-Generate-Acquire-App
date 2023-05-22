# RedPitaya Generate Acquire App
Web app to control the Red Pitaya board using Node.js which is a back-end JavaScript runtime environment to 
generate arbitrary signals with the fast DACs and acquire signals with the fast ADCs.


## Requisites

This project assumes the official ecosystem of the Red Pitaya is already installed and in addition it requires the installation of node.js,  express and cors on the Red Pitaya.

I used the following commands to install them:

    wget https://nodejs.org/dist/v17.9.1/node-v17.9.1-linux-armv7l.tar.gz
    tar -xvf node-v17.9.1-linux-armv7l.tar.gz
    cd node-v17.9.1-linux-armv7l 
    cp -R * /usr/local/
    npm install express
    npm install cors
    
 It also requires the Python module Periphery
 
    pip install python-periphery

## Usage

Clone the repository
    
Copy the files server_3000.js, server_3001.js, server_3002.js and start.sh to any folder of the Red Pitaya board
    
On a Red Pitaya terminal cd to that folder and make the bash script start.sh executable then type: 

    ./start.sh
    
Open the file index.html with any browser and type the IP or rp-xxxxxx.local address of your RedPitaya Board
    
Follow the instruccions on the web page

## Web Page

https://ciiec.buap.mx/RedPitaya-Generate-Acquire

## Credits

This app make extensive use of the Python module called Periphery: https://github.com/vsergeev/python-periphery
    
## License

[MIT](LICENSE)
