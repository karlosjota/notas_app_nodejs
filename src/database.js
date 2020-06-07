// conexion con la base de datos de mรกquina ionos
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kation:J0p4pjTm8UNi@tank-nf-20-zabf7.gcp.mongodb.net/test?retryWrites=true&w=majority', {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false
})
	.then(db => console.log('La BB.DD. estรก conectada!'))
    .catch(err => console.error(err));