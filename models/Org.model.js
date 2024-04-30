const { DataTypes } = require('sequelize');
module.exports={
	name:'Org',
	config:{
		// Specify the table name explicitly
		tableName: 'org',
		// timestamps: false,
		// id: false,

	},
	attributes:{
		name:{
			type:DataTypes.STRING,
			allowNull:false,
		},
		description:{ // some description about the organization
			type:DataTypes.STRING,
		},
		type:{ 
			type:DataTypes.STRING,
			isIn:[['personal','business']],
		},
		email:{ 
			type:DataTypes.STRING,
			unique:true,
		},
		is_active:{ 
			type:DataTypes.BOOLEAN,
			unique:true,
		},
		owner:{
			type:DataTypes.INTEGER,
		},
		details:{
			type:DataTypes.JSONB,
			defaultValue:{
				settings:{}, // org settings
				feature_flags:{} // feature flags enabled for the org
			}
		}
	},
}