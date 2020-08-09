import config from './config'
import path from 'path';
import express from 'express';
import serverRender from './serverRender';
import sassMiddleware from 'node-sass-middleware';

import { request } from 'http';
import apiRouter from './api';
const server = express();


server.use('/api',apiRouter);
server.use(express.static('public'));
server.set('view engine','ejs');

server.use(sassMiddleware({
  src: path.join(__dirname,'sass'),
  dest: path.join(__dirname,'public'),
  debug: true,

}));



server.get(['/'],(req,res)=>{
serverRender()
.then(({initialMarkup,initialData})=>{
    res.render('index',{initialMarkup,initialData}
    );
})
.catch(console.error);
});


server.listen(config.port,config.hostname, () => { 
    console.log(`Server running at http://${config.host}:${config.port}/`); 
}); 