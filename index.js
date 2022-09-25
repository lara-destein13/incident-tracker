import readXlsxFile from 'read-excel-file/node';
import process from 'process';

class Tracker {
    async run() {
        console.log("run");
        const filepath = '/Users/laradestein/git/incident-tracker/test-data/sfs.xlsx';
        const ret = await readXlsxFile(filepath);
        console.log(JSON.stringify(ret, null, 4));
    }
} 



const tracker = new Tracker();
tracker.run();