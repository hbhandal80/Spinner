process.stdout.write('hello from spinner1.js... \rheyyy\n');
let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n']
let delay = 100;

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delay);
  delay += 200;
}