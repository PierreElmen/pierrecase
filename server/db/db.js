const dataArray = [
	{
		offices: [
			{
				id: 1,
				name: 'CodeRight',
				timestamp: new Date().getTime(),
				rooms: [
					{
						id: 1,
						name: 'Lounge',
						smartObjects: {
							lamps: [
								{
									id: 1,
									name: 'lamp1',
									lumen: 1000,
									mode: 'cozy',
								},
								{ id: 2, name: 'lamp2', lumen: 0, mode: 'off' },
								{
									id: 3,
									name: 'lamp3',
									lumen: 1400,
									mode: 'daylight',
								},
							],
							temp: 24.0,
						},
					},
					{
						id: 2,
						name: 'Office 1',
						smartObjects: {
							lamps: [
								{
									id: 1,
									name: 'lamp1',
									lumen: 1600,
									mode: 'concentrate',
								},
								{
									id: 2,
									name: 'lamp2',
									lumen: 1500,
									mode: 'bright',
								},
								{
									id: 3,
									name: 'lamp3',
									lumen: 1000,
									mode: 'cozy',
								},
								{
									id: 4,
									name: 'lamp4',
									lumen: 1000,
									mode: 'cozy',
								},
							],
							temp: 24.0,
						},
					},
				],
			},
		],
	},
];

module.exports.getFullDB = function () {
	return dataArray;
};
