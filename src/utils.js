import fs from 'fs';
import { promisify } from 'es6-promisify';

export const readFile = promisify(fs.readFile);
// export const writeFile = promisify(fs.writeFile);
export const stat = promisify(fs.stat);
export const isDir = name => stat(name).then( stats => stats.isDirectory() ).catch( () => false );
export const isFile = name => stat(name).then( stats => stats.isFile() ).catch( () => false );
