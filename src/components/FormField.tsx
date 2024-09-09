import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { firstToUpper } from "../utils/firstToUpper";
import { Params, Name } from "../types/types";

type FormFieldProps = {
	preferance: string[];
	name: Name;
	onChange: React.Dispatch<React.SetStateAction<Params>>;
	params: Params;
};

const FormField = ({ preferance, name, onChange, params }: FormFieldProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange((prev) => ({ ...prev, [name]: e.target.value }));
	};

	return (
		<div className=" inline-block w-full">
			<label htmlFor={name} className="block text-base text-textPrimary mb-2">
				{firstToUpper(name)}
			</label>
			<div className="relative">
				<select
					required
					value={params[name]}
					id={name}
					onChange={handleChange}
					className="block appearance-none w-full bg-white border border-primary text-textSecondary px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
				>
					{preferance.map((pref, index) => {
						return (
							<option key={index} value={pref}>
								{pref === "" ? `- Select ${firstToUpper(name)} -` : pref}
							</option>
						);
					})}
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-textSecondary">
					<IoMdArrowDropdown />
				</div>
			</div>
		</div>
	);
};
export default FormField;
