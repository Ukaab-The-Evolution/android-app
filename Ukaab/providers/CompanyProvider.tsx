import {createContext, PropsWithChildren, useContext, useMemo} from "react";
import CompanyService, {CompanyInterface} from "../services/CompanyService.ts";

export const CompanyContext = createContext<CompanyInterface | null>(null)


const CompanyProvider = ({children}: PropsWithChildren) => {
    const companyService = useMemo(() => new CompanyService(), []);
    return <CompanyContext.Provider value={companyService}>{children}</CompanyContext.Provider>;
}


export const useCompany = () => {
    return useContext(CompanyContext)
};


export default CompanyProvider