import React, {createContext, useState} from 'react';

export const ClipsContext = createContext();

export const ClipsProvider = ({children}) => {
	const [clips, setClips] = useState(50);
	return (
		<ClipsContext.Provider value={{clips, setClips}}>
			{children}
		</ClipsContext.Provider>
	);
};
