const axios = require('axios');
var moment = require('moment-timezone');
moment.tz.setDefault('UTC');
const express = require('express')
const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all domains (not recommended for production)
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
  console.log(moment().format('HH:mm:ss'));

  app.get('/:time', async (req, res) => {
  const time = req.params.time
    try {
        let fuck;
        let jsonArray
        main();
        async function imTired() {
            try {
                const response = await axios.get(`http://localhost/output_${moment().format('YYYYMMDD')}_${moment(time, 'HH').format('HH')}.json`);
                if (response.status === 200) {
                    // Assign the response data directly
                    fuck = response.data;
                }
            } catch (error) {
                console.error(error);
            }
        }
        
        async function main() {
            await imTired();
            const output = new Set();

            // Make sure fuck is a string before processing
            if (typeof fuck === 'string') {
                const lines = fuck.trim().split('\n');
                const jsonArrayString = '[' + lines.join(',') + ']';
        
                try {
                    const jsonArray = JSON.parse(jsonArrayString);
                    output.add(jsonArray);

                    

                    for (let i = 0; i < jsonArray.length; i++) {
                        const message = jsonArray[i];
                        const choiceLabel = message;
                
                        if (choiceLabel !== undefined) {
                            

                        }
                    }
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
                
            } else {
                console.error('Invalid data in the "fuck" variable.');
            }
            const elOutput = Array.from(output);
            res.json(elOutput);
        }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.listen(6968, () => {
    console.log('Server is running on port 6968');
  });
