const env = process.env;
export const nodeEnv = env.NODE_ENV || 'development';
var db_name = env.DB_NAME;
var db_collection = env.DB_COLLECTION
var db_url = env.DB_URL
export default{
    dbname: db_name,
    collection: db_collection,
    mongodbUri: db_url,
    port: env.PORT || 3000,
    host:env.HOST || '0.0.0.0',
    get serverUrl(){
      return `http://${this.host}:${this.port}`;
    }
  };


  
