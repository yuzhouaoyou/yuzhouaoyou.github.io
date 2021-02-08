const fs = require('fs')

const server = require('http').createServer(handler);

function handler(req,res){
	if(req.method !== 'GET' || req.url !== '/')return res.end();
	

	fs.readdir('.',(err,files)=>{
		for(name of files){
			res.write(name+'\n');
		}
		res.end()
	})
}

server.listen(8080,()=>{
	console.log('listen...')
})