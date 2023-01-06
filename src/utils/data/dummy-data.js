import avatarOne from '@/assets/avatar/1.svg'
import avatarTwo from '@/assets/avatar/2.svg'
import avatarThree from '@/assets/avatar/3.svg'
import avatarFour from '@/assets/avatar/4.svg'

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

export const chatInbox = [
	{
		name: 'Desirae Kenter',
		time: '5m ago',
		lastMessage: 'I am in Mechanical Dept.',
		numberOfMessages: 10,
		isOnline: true,
		avatar:avatarOne,	
	},
	{
		name: 'Anika Vetrovs',
		time: '15m ago',
		lastMessage: 'Thank you',
		numberOfMessages: 1,
		isOnline: false,
		avatar:avatarTwo,
	},
	{
		name: 'Ahmad Gouse',
		time: '1hr ago',
		lastMessage: 'I have been waiting for you day and night',
		numberOfMessages: 0,
		isOnline: true,
		avatar:avatarThree,
	},
	{
		name: 'Makenna Geidt',
		time: '1hr ago',
		lastMessage: 'only a miracle can happen',
		numberOfMessages: 0,
		isOnline: false,
		avatar:avatarFour,
	},
	{
		name: 'Makenna Geidt',
		time: '1hr ago',
		lastMessage: 'only a miracle can happen',
		numberOfMessages: 0,
		isOnline: false,
		avatar:avatarFour,
	},
	{
		name: 'Makenna Geidt',
		time: '1hr ago',
		lastMessage: 'only a miracle can happen',
		numberOfMessages: 0,
		isOnline: false,
		avatar:avatarFour,
	},
	{
		name: 'Makenna Geidt',
		time: '1hr ago',
		lastMessage: 'only a miracle can happen',
		numberOfMessages: 0,
		isOnline: false,
		avatar:avatarFour,
	},
	{
		name: 'Makenna Geidt',
		time: '1hr ago',
		lastMessage: 'only a miracle can happen',
		numberOfMessages: 0,
		isOnline: false,
		avatar:avatarFour,
	},
	{
		name: 'Makenna Geidt',
		time: '1hr ago',
		lastMessage: 'only a miracle can happen',
		numberOfMessages: 0,
		isOnline: false,
		avatar:avatarFour,
	},
	{
		name: 'Makenna Geidt',
		time: '1hr ago',
		lastMessage: 'only a miracle can happen',
		numberOfMessages: 0,
		isOnline: false,
		avatar:avatarFour,
	},
	{
		name: 'Makenna Geidt',
		time: '1hr ago',
		lastMessage: 'only a miracle can happen',
		numberOfMessages: 0,
		isOnline: false,
		avatar:avatarFour,
	},
]

export const chatMessages = [
	{
		who: 'doctor',
		message: 'Hello Tatiana, I am Doctor Dr Uche michri',
		avatar: avatarOne
	},
	{
		who: 'me',
		message: 'Before, I couldn’t trust half the sites out there. Monito has helped me because it takes the hard part out of an already hard situation.',
		avatar: avatarTwo
	},
	{
		who: 'me',
		message: 'Monito has given me a complete and reliable summary to pick the best choice in providers.',
		avatar: avatarTwo
	},
	{
		who: 'me',
		message: 'Prime Restaurant is a steak and seafood experiential dining, that takes you on a journey of culinary excellence. The Bar and Lounge is designed for the discerning connoisseur of fine wines and spirits..',
		avatar: avatarTwo
	},
	{
		who: 'doctor',
		message: 'Looking ahead, the company’s ultimate goal is to become a crypto service that allows Africans to send remittances, make payments and protect the value of their wealth against the incessant currency devaluation in many African countries.',
		avatar: avatarOne
	},
	{
		who: 'me',
		message: 'Monito has given me a complete and reliable summary to pick the best choice in providers.',
		avatar: avatarTwo
	},
	{
		who: 'me',
		message: 'Prime Restaurant is a steak and seafood experiential dining, that takes you on a journey of culinary excellence. The Bar and Lounge is designed for the discerning connoisseur of fine wines and spirits..',
		avatar: avatarTwo
	},

]