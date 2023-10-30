process.stdout.write('hello from sprinner1.js... \rheyyy\n');

// personal test

setTimeout(() => {process.stdout.write('\rG   ');}, 100);

setTimeout(() => {process.stdout.write('\rE   ');}, 300);

setTimeout(() => {process.stdout.write('\rR   ');}, 500);

setTimeout(() => {process.stdout.write('\rA   ');}, 700);

setTimeout(() => {process.stdout.write('\rL   ');}, 900);

setTimeout(() => {process.stdout.write('\rD   ');}, 1100);

setTimeout(() => {process.stdout.write('\r\\   '); }, 1300);
