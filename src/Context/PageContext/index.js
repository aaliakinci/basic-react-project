import {createContext,useState} from 'react';

const PageContext = createContext(null);

export const PageProvider = ({children}) => {
  const [selectedPage, setSelectedPage] = useState("");

	const values = {
	 selectedPage,
	 setSelectedPage
	}

	return <PageContext.Provider value={values}>{children}</PageContext.Provider>
}
export default PageContext