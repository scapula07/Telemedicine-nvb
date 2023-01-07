import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { EditProfileForm } from "../input";

// images
import closeIcon from "@/assets/icons/circle-close.svg";

const EditProfile = ({ showEditProfile, setShowEditProfile }) => {
	const handleClose = () => setShowEditProfile(false);
	return (
		<Transition appear show={showEditProfile} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-[999999]"
				onClose={handleClose}
			>
				<div className="fixed inset-0 overflow-y-auto">
					<div className="min-h-screen text-center">
						<Dialog.Overlay className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-75 z-[999999]" />
						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<div className="inline-block w-11/12 text-left align-middle transition-all z-[999999999] relative shadow-xl bg-white max-w-[709px] px-6 py-6 rounded-[10px]">
							<Dialog.Title
								as="div"
								className="flex justify-between items-center"
							>
								<h1 className="text-[#101828] font-bold text-2xl leading-[27px] capitalize mb-[38px]">
									edit profile
								</h1>
								<img src={closeIcon} alt="" onClick={handleClose} />
							</Dialog.Title>
							<EditProfileForm handleClose={handleClose} />
						</div>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default EditProfile;
