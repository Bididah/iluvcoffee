import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  buildProject() {
    return new Promise((resolve, reject) => {
      exec(
        'cd /Users/hanfihamza/Desktop/3r && git checkout main && git pull origin main',
        (error, stdout, stderr) => {
          if (error) {
            console.log(error.message);
            reject(error.message);
            return;
          }
          if (stderr) {
            console.log('here');
            reject(stderr);
            return;
          }
          resolve(stdout);
        },
      );
    });
  }
}
