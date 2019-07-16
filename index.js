const express = require('express');
const app = express();
const path = require('path')
const PORT =process.env.PORT || 3000;
	

			

	 app.use(express.static(path.join( __dirname,'public')));

	app.listen(PORT,(err)=>{
		if(err) {console.log('ERROR')}
			else{console.log('Server is running')}
		});


