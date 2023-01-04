export const doctorsList = new Array(20).fill(
	{
		name: "sarah john",
		specialization: "dentist",
		available: ["12:30 PM", "3:30 PM"]
	},
	{
		name: "peter parker",
		specialization: "surgeon",
		available: []
	}
);

export const patientList = new Array(20).fill({
	name: "andrew liver",
	condition: "stooling and votiming",
	appointment: [
		{
			schedule: "10/02/2022 12:00 PM"
		},
		{
			schedule: "11/02/2022 3:30PM"
		}
	]
});

export const patientDetails = [
	{
		title: "date of birth",
		description: "23/04/1994"
	},
	{
		title: "phone number",
		description: "+234643372892"
	},
	{
		title: "gender",
		description: "male"
	},
	{
		title: "insurance",
		description: "yes"
	},
	{
		title: "marital status",
		description: "single"
	},
	{
		title: "address",
		description: "paris, France"
	},
	{
		title: "registered on",
		description: "3 oct,2023"
	},
	{
		title: "date of birth",
		description: "23/04/1994"
	}
];

export const patientMedicalRecord = [
	{
		title: "date",
		description: "10/02/2022"
	},
	{
		title: "diagnosis",
		description: "Fever"
	},
	{
		title: "specialist",
		description: "10/02/2022"
	},
];

export const scheduleDetails = [
	{
		amount: "$40",
		time: "10:00AM - 11:20PM"
	},
	{
		amount: "$30",
		time: "03:30PM - 04:25PM"
	},
	{
		amount: "$18",
		time: "08:00PM -08:30PM"
	}
];

export const patientDocuments = [
	"ECG report.jpg",
	"medical prescription.pdf",
	"X-ray scan.pdf"
];
