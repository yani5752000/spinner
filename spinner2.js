let ar = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 100;
for (let i = 0; i <= 8; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${ar[i]}   `); 
  }, delay);

  delay += 200;
}