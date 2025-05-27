process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (name) => {
  console.log(`Your name is: ${name}\n`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing\n');
});
