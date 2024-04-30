import _ from 'lodash';
import fs from 'fs';
// const Sequelize = require('sequelize');
import { Sequelize } from 'sequelize';
import * as pg from 'pg';

var loadModels = function(){
	const fileList = fs.readdirSync('./models');
	// console.log('\n\n\n\n-----------');
	// console.log(fileList);
	// console.log('---');


	const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
		host: process.env.DB_HOST,
		dialect: 'postgres',
		dialectModule: pg,
		dialectOptions: {
			ssl: {
				require: true, // This will force the SSL requirement
				rejectUnauthorized: false // This is to avoid errors due to self-signed certificates
			}
		},
		logging: false,
	});

	var models = {
		sequelize:sequelize,
	};
	fileList.forEach(function(file){
		var m=require('/Users/alex/ec2code/imgears/costing-next/models/'+file);
		models[m.name]=sequelize.define(m.name,m.attributes,m.config)
		// console.log(model_def);
	})


	return models;
}
var models=loadModels();



export default models