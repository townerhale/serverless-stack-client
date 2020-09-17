import { useContext, createContext} from "react";
//used for saving session data and applying to al containers
export const AppContext = createContext(null);

export function useAppContext() {
    return useContext(AppContext);
}