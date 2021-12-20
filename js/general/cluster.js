var cluster = require('cluster');

if (cluster.isMaster) {

    console.log('I am a master');

    worker1 = cluster.fork();
    worker2 = cluster.fork(); 

    worker1.on('exit', (code, signal) => {
        if (signal) {
          console.log(`worker was killed by signal: ${signal}`);
        } else if (code !== 0) {
          console.log(`worker exited with error code: ${code}`);
        } else {
          console.log('worker success!');
        }
      });

      worker2.on('exit', (code, signal) => {
        if (signal) {
          console.log(`worker was killed by signal: ${signal}`);
        } else if (code !== 0) {
          console.log(`worker exited with error code: ${code}`);
        } else {
          console.log('worker success!');
        }
      });

} else if (cluster.isWorker) {
    console.log('I am a worker hey');
    process.exit(0);
} 