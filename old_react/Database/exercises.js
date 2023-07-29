enablePromise(true);

export const initExerciseTable = async (db) => {
    await db.executeSql(`CREATE TABLE IF NOT EXISTS exercises (
        name TEXT NOT NULL,
        tags TEXT NULL
    )`);

    await upsertExercise(db, {  })
}

export const upsertExercise = async (db, e) =>
    await db.executeSql(`INSERT OR REPLACE INTO exercises (
            rowId, ...
        ) VALUES (
            ${e.id}, ...
        )`);

export const deleteExercise = async (db, { id }) =>
    await db.executeSql(`DELETE FROM exercises WHERE rowId = ${id}`);

export const getExercises = async (db) => {
    const exercises = [];
    const results = await db.executeSql(`SELECT ... FROM exercises`);
    results.forEach(result => {
        for (let i = 0; i < result.rows.length; i++) {
            exercises.push(result.rows.item(i));
        }
    });
    
    return exercise;
}

export const getExercise = async (db, { id }) => {
    var result = await db.executeSql(`SELECT ... FROM exercises WHERE rowId = ${id}`);
    return result.rows.item(0);
}