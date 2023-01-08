import { useState } from "react";
import { Button, DateInput, Select, TextArea, TextInput } from ".";
import { accountType, genderOptions } from "@/utils/data";

// images
import photoUploadIcon from "@/assets/icons/upload-photo.svg";

const EditProfileForm = ({handleClose}) => {
	const intialFormData = {
		profilePhoto: "",
		accountType: "user",
		specialization: "",
		fullName: "",
		email: "",
		phoneNumber: "",
		dob: "",
		gender: "",
		city: "",
		country: "",
		maritalStatus: "single",
		bio: ""
	};

	const [formData, setFormData] = useState(intialFormData);

	const handleTextChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};
	return (
		<form onSubmit={handleSubmit} className="">
			{/* upload photo */}
			<div className="w-[120px] h-[120px] border border-dashed rounded-[5px] border-[#0089ED] bg-[rgba(230,243,253,0.4)] flex items-center justify-center">
				<img src={photoUploadIcon} alt="" />
			</div>
			<p className="text-[#49497D] text-base leading-[18px] mt-6">
				Profile photo
			</p>

			<div className="space-y-6 mt-6">
				<Select
					label="Select account type"
					value={formData.accountType}
					data={accountType}
					handleSelectOption={(option) =>
						setFormData({ ...formData, accountType: option })
					}
				/>
				<TextInput
					label="full name"
					id="fullName"
					name="fullName"
					placeholder="eg. John Doe"
					handleTextChange={handleTextChange}
				/>
				<div className="grid grid-cols-2 gap-x-4 gap-y-6">
					<TextInput
						label="email"
						id="email"
						name="email"
						placeholder="Email"
						handleTextChange={handleTextChange}
					/>
					<TextInput
						label="phone Number"
						id="phoneNumber"
						name="phoneNumber"
						placeholder="Phone Number"
						handleTextChange={handleTextChange}
					/>
					{/* dob */}
					<DateInput
						label="date of birth"
						name="dob"
						handleDateChange={handleTextChange}
					/>
					{/* gender */}
					<Select
						label="gender"
						value={formData.gender}
						title="gender"
						data={genderOptions}
						handleSelectOption={(option) =>
							setFormData({ ...formData, gender: option })
						}
					/>
					<TextInput
						label="city"
						id="city"
						name="city"
						placeholder="city"
						handleTextChange={handleTextChange}
					/>
					<TextInput
						label="country"
						id="country"
						name="country"
						placeholder="country"
						handleTextChange={handleTextChange}
					/>
				</div>
				{/* marital status */}
				<Select
					label="marital status"
					value={formData.maritalStatus}
					data={["single", "married", "widowed", "divorced"]}
					handleSelectOption={(option) =>
						setFormData({ ...formData, maritalStatus: option })
					}
				/>
				{/* bio */}
				<TextArea
					label="describe yourself"
					name="bio"
					placeholder="Enter Description"
					handleTextChange={handleTextChange}
				/>
			</div>

			<div className="flex items-center justify-between mt-[33px]">
				<Button
					title="Cancel"
					onClick={handleClose}
					className="bg-[#EBEEF2] text-[#49497D] w-[95px]"
				/>
				<Button title="Save" className="bg-[#0089ED] w-[95px]" />
			</div>
		</form>
	);
};

export default EditProfileForm;
