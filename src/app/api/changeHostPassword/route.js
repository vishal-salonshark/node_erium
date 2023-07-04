const { exec } = require('child_process');

export async function POST(req) {
  try {
    
    const username = os.hostname();
    const { currentPassword, newPassword } = await req.json();

  const command = `echo -e "${currentPassword}\n${newPassword}\n${newPassword}" | passwd ${username}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failed to change password: ${error.message}`);
      return new Response(JSON.stringify({ error: 'Failed to change password.'}), { status: 500 });
      // return res.status(500).json({ error: 'Failed to change password' });
    }
    if (stderr) {
      console.error(`STDERR: ${stderr}`);
      return new Response(JSON.stringify({ error: 'Failed to change password.'}), { status: 500 });
      // return res.status(500).json({ error: 'Failed to change password' });
    }

    console.log('Password changed successfully.');
    return new Response(JSON.stringify({ message: 'Password changed successfully'}), { status: 200 });
    // return res.json({ message: 'Password changed successfully' });
  });
  
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
