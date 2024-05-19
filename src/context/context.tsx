import { useState } from 'react';
import { createContext } from 'react';

type TrackContextType = {
    navUserBtn1: boolean,
    setNavUserBtn1: any,
    navUserBtn2: boolean,
    setNavUserBtn2: any,
}

const contextObj: TrackContextType = {
    navUserBtn1: true,
    setNavUserBtn1: () => {},
    navUserBtn2: false,
    setNavUserBtn2: () => {}
}

const TrackContext = createContext(contextObj);

function TrackContextProvider({children}: {children: React.ReactNode}){

  /* Button aside btn */
  const [navUserBtn1, setNavUserBtn1] = useState(true);
  const [navUserBtn2, setNavUserBtn2] = useState(false);

  return(
    <TrackContext.Provider value={{
      navUserBtn1,
      setNavUserBtn1,
      navUserBtn2,
      setNavUserBtn2
    }}>
      {children}
    </TrackContext.Provider>
  )
}

export { TrackContext, TrackContextProvider }