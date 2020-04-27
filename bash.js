process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pdw') {
    console.log(process.cwd());

    process.stdout.write('\nprompt >');
    return;
  }
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt >');
});
