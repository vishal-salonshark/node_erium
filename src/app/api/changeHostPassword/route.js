const { exec } = require('child_process');
const readline = require('readline');
// Connect to WiFi network
// function changeHostPassword(ssid, password) {
//   return new Promise((resolve, reject) => {
//     wifi.connect({ ssid, password }, (error) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve();
//       }
//     });
//   });
// }

export async function POST(req) {
  try {
    
    const { username, password } = req.body;

    const command = `echo "${username}:${password}" | sudo chpasswd`;
  
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        // return res.status(500).json({ error: 'An error occurred while changing the password.' });
        return new Response(JSON.stringify({ error: 'An error occurred while changing the password.'}), { status: 500 });
      } else if (stderr) {
        console.error(`Command execution failed: ${stderr}`);
        // return res.status(500).json({ error: 'An error occurred while changing the password.' });
        return new Response(JSON.stringify({ error: 'An error occurred while changing the password.'}), { status: 500 });
      } else {
        console.log(`Password for ${username} has been changed successfully.`);
        return new Response(JSON.stringify({ message: 'Password changed successfully.' }), { status: 200 });
      }
    });

    // return new Response(
    //   JSON.stringify({ message: "Successfully connected to WiFi." }),
    //   { status: 200 }
    // );
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
