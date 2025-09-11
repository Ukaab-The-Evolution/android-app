import * as React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import {
    Container,
    Title,
    TabContainer,
    ActiveTab,
    InactiveTab,
    ActiveTabGradient,
    ActiveTabText,
    InactiveTabText,
    FilterContainer,
    DropdownWrapper,
    DropdownHeader,
    DropdownHeaderText,
    DropdownArrow,
    DropdownList,
    OptionBox,
    OptionText,
    Content,
    ItemsGrid,
    ItemRow,
    ItemCard,
    TruckImageContainer,
    TruckImage,
    DriverImageContainer,
    AvatarPlaceholder,
    AvatarText,
    ItemInfo,
    ItemName,
    ItemSecondary,
    ConfirmButton,
    ConfirmButtonGradient,
    ConfirmButtonText,
} from "../styles/SelectPage.ts";

interface TruckData {
    id: string;
    name: string;
    capacity: string;
    plateNumber: string;
}

interface DriverData {
    id: string;
    name: string;
    driverId: string;
    avatar?: string;
}

const truckNames = [
    "Volvo FH16", "Scania R500", "Mercedes Actros", "MAN TGX", "DAF XF",
    "Kenworth W990", "Peterbilt 579", "Freightliner Cascadia", "Mack Anthem", "International LT",
    "Volvo VNL", "Western Star 5700", "Isuzu Giga", "Hino Profia", "Fuso Super Great"
];

const driverNames = [
    "Abdur Rehman", "Muhammad Ali", "Ahmed Khan", "Hassan Shah", "Omar Farooq",
    "Tariq Mahmood", "Rashid Ahmed", "Bilal Hussain", "Imran Malik", "Saeed Ahmad",
    "Waseem Akram", "Javaid Iqbal", "Nasir Khan", "Salman Ahmed", "Usman Ali"
];

const trucks: TruckData[] = Array.from({ length: 6 }, (_, i) => ({
    id: Math.floor(1000 + Math.random() * 9000).toString(),
    name: truckNames[i] || "Nisan Deasil",
    capacity: Math.floor(10000 + Math.random() * 50000).toString(),
    plateNumber: `NNH-${Math.floor(1000 + Math.random() * 9000)}`,
}));

const drivers: DriverData[] = Array.from({ length: 6 }, (_, i) => ({
    id: Math.floor(1000 + Math.random() * 9000).toString(),
    name: driverNames[i] || "Abdur Rehman",
    driverId: Math.floor(1000 + Math.random() * 9000).toString(),
}));

const distanceOptions = ["100km", "200km", "300km", "400km"];

const SelectPage = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = React.useState('Truck');
    const [selectedDistance, setSelectedDistance] = React.useState('100km');
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const handleConfirm = () => {
        navigation.goBack();
    };

    const switchToTruck = () => {
        setActiveTab('Truck');
    };

    const switchToDriver = () => {
        setActiveTab('Driver');
    };

    // Truck Icon Component
    const TruckIcon = ({ color }: { color: string }) => (
        <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <Path
                d="M1 3h15v13H1V3zm16 5h4l2 2v6h-6V8z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );

    // Driver Icon Component
    const DriverIcon = ({ color }: { color: string }) => (
        <Svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <Path
                d="M13 21H6C3.2 21 2.5 20 2.5 16V8C2.5 4 3.2 3 6 3H13C15.8 3 16.5 4 16.5 8V16C16.5 20 15.8 21 13 21Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9.50043 11.2899C10.5001 11.2899 11.3104 10.4796 11.3104 9.47992C11.3104 8.48029 10.5001 7.66992 9.50043 7.66992C8.50079 7.66992 7.69043 8.48029 7.69043 9.47992C7.69043 10.4796 8.50079 11.2899 9.50043 11.2899Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13 16.3298C12.86 14.8798 11.71 13.7398 10.26 13.6098C9.76 13.5598 9.25 13.5598 8.74 13.6098C7.29 13.7498 6.14 14.8798 6 16.3298"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );

    const renderTruckCard = (truck: TruckData) => (
        <ItemCard key={truck.id}>
            <TruckImageContainer>
                <TruckImage
                    source={require("../assets/trucks/Nisan-Deasil.png")}
                    resizeMode="contain"
                />
            </TruckImageContainer>
            <ItemInfo>
                <ItemName>{truck.name}</ItemName>
                <ItemSecondary>{truck.plateNumber}</ItemSecondary>
                <ItemSecondary>Capacity {truck.capacity}kg</ItemSecondary>
            </ItemInfo>
        </ItemCard>
    );

    const renderDriverCard = (driver: DriverData) => (
        <ItemCard key={driver.id}>
            <DriverImageContainer>
                <AvatarPlaceholder>
                    <AvatarText>
                        {driver.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </AvatarText>
                </AvatarPlaceholder>
            </DriverImageContainer>
            <ItemInfo>
                <ItemName>{driver.name}</ItemName>
                <ItemSecondary>ID: {driver.driverId}</ItemSecondary>
            </ItemInfo>
        </ItemCard>
    );

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

            {/* Title */}
            <Title>Select</Title>

            {/* Tab Navigation */}
            <TabContainer>
                {activeTab === 'Truck' ? (
                    <ActiveTab>
                        <ActiveTabGradient colors={["#223931", "#578C7A"]}>
                            <TruckIcon color="white" />
                            <ActiveTabText>Truck</ActiveTabText>
                        </ActiveTabGradient>
                    </ActiveTab>
                ) : (
                    <InactiveTab onPress={switchToTruck}>
                        <TruckIcon color="#578C7A" />
                        <InactiveTabText>Truck</InactiveTabText>
                    </InactiveTab>
                )}

                {activeTab === 'Driver' ? (
                    <ActiveTab>
                        <ActiveTabGradient colors={["#223931", "#578C7A"]}>
                            <DriverIcon color="white" />
                            <ActiveTabText>Driver</ActiveTabText>
                        </ActiveTabGradient>
                    </ActiveTab>
                ) : (
                    <InactiveTab onPress={switchToDriver}>
                        <DriverIcon color="#578C7A" />
                        <InactiveTabText>Driver</InactiveTabText>
                    </InactiveTab>
                )}
            </TabContainer>

            {/* Distance Filter Dropdown - RoleSelection Style */}
            <FilterContainer>
                <DropdownWrapper>
                    <DropdownHeader onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <DropdownHeaderText>In City</DropdownHeaderText>
                        <DropdownArrow>{isDropdownOpen ? "▲" : "▼"}</DropdownArrow>
                    </DropdownHeader>

                    {isDropdownOpen && (
                        <DropdownList>
                            {distanceOptions.map((option, index) => (
                                <OptionBox
                                    key={option}
                                    onPress={() => {
                                        setSelectedDistance(option);
                                        setIsDropdownOpen(false);
                                    }}
                                    style={{
                                        borderBottomWidth: index === distanceOptions.length - 1 ? 0 : 1
                                    }}
                                >
                                    <OptionText>{option}</OptionText>
                                </OptionBox>
                            ))}
                        </DropdownList>
                    )}
                </DropdownWrapper>
            </FilterContainer>

            {/* Content */}
            <Content showsVerticalScrollIndicator={false}>
                <ItemsGrid>
                    {/* First Row */}
                    <ItemRow>
                        {activeTab === 'Truck'
                            ? trucks.slice(0, 3).map(renderTruckCard)
                            : drivers.slice(0, 3).map(renderDriverCard)
                        }
                    </ItemRow>

                    {/* Second Row */}
                    <ItemRow>
                        {activeTab === 'Truck'
                            ? trucks.slice(3, 6).map(renderTruckCard)
                            : drivers.slice(3, 6).map(renderDriverCard)
                        }
                    </ItemRow>
                </ItemsGrid>

                {/* Confirm Button */}
                <ConfirmButton onPress={handleConfirm}>
                    <ConfirmButtonGradient colors={["#223931", "#578C7A"]}>
                        <ConfirmButtonText>Confirm</ConfirmButtonText>
                    </ConfirmButtonGradient>
                </ConfirmButton>
            </Content>
        </Container>
    );
};

export default SelectPage;
