import Config from "react-native-config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface CompanyInterface {
    fetchDetails: (token: string) => Promise<any>
}

export interface DriverRegister {
    name: string;
    fatherName: string;
    cnicNumber: string;
    dateOfBirth: Date;
    address: string;
    contactNumber: string;
    alternateContactNumber: string;
}


export interface DriverDocuments {
    cnic: {
        front: string;
        back: string;
    }
    license: {
        front: string;
        back: string;
    }
}

export interface TruckRegister {
    name: string;
    manufacturer: string;
    year: number;
    type: string;
    capacity: number;
    registration: number;
}


export interface TruckDocuments {
    smartCard: {
        front: string;
        back: string;
    }
    truck: {
        front: string;
        back: string;
        left: string;
        right: string;
    }
}

class CompanyService implements CompanyInterface {
    fetchDetails = async (token: string) => {
        let data = null
        AsyncStorage.getItem("Company Details").then((json) => {
            if (json) {
                data = JSON.parse(json)
            }
        }).catch(() => {
            data = null
        });

        if (data){
            return data
        }

        const response = await fetch(`${Config.API_URL}/api/v1/profile`, {
            headers: {"Authorization": `Bearer ${token}`},
        })
        if (!response.ok) {
            throw response
        }
        data = await response.json()
        await AsyncStorage.setItem("Company Details", JSON.stringify(data))
        return data
    }

    registerDriver = (driver: DriverRegister) => {

    }

    uploadDriverDocuments = (documents: DriverDocuments) => {

    }

    registerTruck = (truck: TruckRegister) => {

    }

    uploadTruckDocuments = (documents: TruckDocuments) => {

    }

}


export default CompanyService;