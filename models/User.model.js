const { DataTypes } = require('sequelize');
module.exports={
	name:'User',
	config:{
		// Specify the table name explicitly
		tableName: 'user',
		// timestamps: false,
		// id: false,

	},
	attributes:{
		name:{
			type:DataTypes.STRING,
			required:true,
		},
		email:{
			type:DataTypes.STRING,
			required:true,
			unique:true,
			isEmail: true
		},
		details:{ 
			type:DataTypes.JSONB,
			defaultValue:{
			}
		},
		password:{
			type:DataTypes.STRING,
			required:true,
		},
		is_verified:{
			type:DataTypes.BOOLEAN,
			defaultValue:false,
		},
		// memberships:{
		// 	type:DataTypes.INTEGER,
		// 	// via:'user',
		// },
		google_profile:{
			type:DataTypes.JSONB,
			// defaultValue:{}
		}
	},
}