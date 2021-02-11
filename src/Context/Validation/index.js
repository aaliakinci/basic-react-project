import { createContext, useState } from 'react';

const ValidationContext = createContext(null);

export const ValidationProvider = ({ children }) => {
	const [error, setError] = useState(1);
	const validation =async(fields) => {
			for (var key in fields) {
				if (fields.hasOwnProperty(key)) {
					if (fields[key].replace(/\s+/g,'') === '') {
						setError(0);
					}
				}
			}		
	};
	const validater = async(fields) => {
		await validation(fields);
		return error;
	}
	const values = {
		validater,
	};
	return <ValidationContext.Provider value={values}>{children}</ValidationContext.Provider>;
};
export default ValidationContext;
