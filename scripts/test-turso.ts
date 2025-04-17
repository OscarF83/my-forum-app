// test-turso.js
import { createClient } from '@libsql/client';


async function main() {
  /*const client = createClient({
    url: "libsql://turso-forum-db-oscarf83.aws-eu-west-1.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NDQ4MjY2MzUsImlkIjoiYzc0MzBhMzQtYmE2NC00OTQ3LTg1NDctN2FiMGFiMjE5ZDMxIiwicmlkIjoiMjAxNDZhODctNjQ4ZS00Y2I0LTlmMmMtZTU3YzAyZTg4ZjA2In0.tH1VCnO_WR-O9QoH0nf3hLwEjjS9_x3cnMqfKKijbquos54LjpIRGYmkZDE_V65mUmnANQzKeV8Rw8Lyh0cRCA",
  adminUrl: "https://turso-forum-db-oscarf83.aws-eu-west-1.turso.io",
  });*/
  const config = {
    url: "libsql://turso-forum-db-oscarf83.aws-eu-west-1.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDQ4MzEwMTksImlkIjoiYzc0MzBhMzQtYmE2NC00OTQ3LTg1NDctN2FiMGFiMjE5ZDMxIiwicmlkIjoiMjAxNDZhODctNjQ4ZS00Y2I0LTlmMmMtZTU3YzAyZTg4ZjA2In0.YKhEj5QiDKSyn6jN5QYaZS741EO-F1hxC9Zt-CEHxtM0iaLNqDVZk1EflOp733hXh0yoe8NRakT9K9V9vdm0Dg",
  //adminUrl: "https://turso-forum-db-oscarf83.aws-eu-west-1.turso.io",
  } as any;
  
  const client = createClient(config);

  try {
    // SELECT sencillo para probar la conexión
    const result = await client.execute('SELECT datetime("now") AS now;');
    console.log('✅ Conectado. Hora del servidor:', result.rows[0].now);
  } catch (err) {
    console.error('❌ Error conectando a Turso:', err);
  }
}

main();