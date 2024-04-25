import { MongoClient } from 'mongodb';

let uri=`mongodb://${process.env.HOST}:${process.env.DBPORT}`

const client=new MongoClient(uri)
let conn;
try {
    conn = await client.connect()
}
catch(e) {
    console.log(e)
}
let db=conn.db(process.env.DBNAME)

export {db}