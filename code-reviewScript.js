const { exec } = require('child_process');

exec('cline "your prompt" -F json', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  
  // Parse JSON from stdout
  const lines = stdout.trim().split('\n');
  const jsonLine = lines.find(line => line.startsWith('{'));
  const result = JSON.parse(jsonLine);
  
  console.log(result);
});