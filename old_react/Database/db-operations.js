import { enablePromise, openDatabase } from 'react-native-sqlite-storage';
import { initExerciseTable } from './exercises';

enablePromise(true);

const currentVersion = '0.0.0';

export const getDbConnection = async () =>
    await openDatabase({ name: 'weights.db', location: 'default' });

export const deleteTable = async (db, tableName) =>
    await db.executeSql(`drop table ${tableName}`);

export const init = async () => {
    let db = await getDbConnection();
    
    await db.executeSql(`CREATE TABLE IF NOT EXISTS versions (
        version TEXT NOT NULL
        comment TEXT NULL
    )`);
    const version = await db.executeSql(`SELECT TOP 1 version FROM versions`);
    if (version) return db;

    await initExerciseTable(db);

    return db;
}