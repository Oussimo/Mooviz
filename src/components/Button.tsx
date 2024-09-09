const Button = ({
	children,
	disabled,
}: {
	children: React.ReactNode;
	disabled?: boolean;
}) => {
	return (
		<button
			disabled={disabled}
			className={`text-white font-semibold px-4 py-2 rounded-md flex gap-2 items-center justify-center transition duration-500 ease-in-out w-full group ${disabled ? "hover:text-textPrimary hover:bg-gray-400 bg-gray-400 cursor-not-allowed" : "bg-primary hover:text-textSecondary hover:bg-secondary"}`}
		>
			{children}
		</button>
	);
};

export default Button;
