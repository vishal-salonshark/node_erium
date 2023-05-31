import { exec } from 'child_process'

// Function to reset Wi-Fi password
function resetWifiPassword(ssid, newPassword) {
    return new Promise((resolve, reject) => {
      const cmd = `nmcli connection modify "${ssid}" wifi-sec.psk ${newPassword}`;
      exec(cmd, (error, stdout, stderr) => {
        if (error || stderr) {
          reject(error || stderr);
          return;
        }
        resolve(`Successfully reset Wi-Fi password for SSID: ${ssid}`);
      });
    });
  }
  
  // API endpoint to change Wi-Fi password
//   app.post('/change-password', async (req, res) => {
//     try {
//       const { ssid, newPassword } = req.body;
//       const result = await resetWifiPassword(ssid, newPassword);
//       res.json({ message: result });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

export async function POST(req){
    try {
        const { ssid, newPassword } = await req.json();
        const result = await resetWifiPassword(ssid, newPassword);
        // res.json({ message: result });

        return new Response({ message: result }, {status: 200})
    } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 500})
    }
}