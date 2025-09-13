import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Container = styled.View`
    flex: 1;
    background: #F8F9FA;
`

export const Title = styled.Text`
    text-align: center;
    color: #223931;
    font-size: 24px;
    font-family: Poppins-Bold;
    font-weight: bold;
    margin-top: 24px;
    margin-bottom: 28px;
`

export const TabSection = styled.View`
    gap: 12px;
    margin-bottom: 28px;
    padding-horizontal: 16px;
`

export const TabContainer = styled.View`
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-color: #578C7A;
    flex-direction: row;
`

export const InactiveTab = styled.TouchableOpacity`
    width: 168px;
    min-height: 40px;
    padding-horizontal: 12px;
    padding-vertical: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

export const ActiveTab = styled.View`
    flex: 1;
    min-height: 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
`

export const ActiveTabGradient = styled(LinearGradient).attrs({
    start: {x: 0, y: 0},
    end: {x: 0, y: 1}
})`
    flex: 1;
    padding-horizontal: 12px;
    padding-vertical: 12px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const ActiveTabText = styled.Text`
    color: white;
    font-size: 12px;
    font-family: Inter-Medium;
    font-weight: 500;
`

export const InactiveTabText = styled.Text`
    color: #578C7A;
    font-size: 12px;
    font-family: Inter-Medium;
    font-weight: 500;
`

export const FilterContainer = styled.View`
    width: 100%;
    height: 36px;
    background: #D4E6E0;
    border-radius: 8px;
    border-width: 1px;
    border-color: #223931;
    flex-direction: row;
    align-items: center;
    padding-horizontal: 20px;
`

export const FilterText = styled.Text`
    color: #223931;
    font-size: 14px;
    font-family: Poppins-Regular;
    font-weight: 400;
`

export const Content = styled.ScrollView`
    flex: 1;
    padding-horizontal: 16px;
`

export const DriversGrid = styled.View`
    gap: 28px;
    margin-bottom: 28px;
`

export const DriverRow = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 6px;
`

export const DriverCard = styled.TouchableOpacity`
    align-items: center;
    gap: 4px;
`

export const DriverImageContainer = styled.View`
    width: 96px;
    height: 136px;
    background: white;
    border-radius: 8px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 4px;
    elevation: 3;
    border-width: 1px;
    border-color: #E5E7EB;
`

export const AvatarPlaceholder = styled.View`
    width: 80px;
    height: 80px;
    background: #578C7A;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`

export const AvatarText = styled.Text`
    color: white;
    font-size: 18px;
    font-family: Poppins-Bold;
    font-weight: bold;
`

export const DriverInfo = styled.View`
    align-items: center;
    gap: 2px;
`

export const DriverName = styled.Text`
    color: #223931;
    font-size: 12px;
    font-family: Poppins-Bold;
    font-weight: bold;
    text-align: center;
`

export const DriverId = styled.Text`
    color: #5F5F5F;
    font-size: 11px;
    font-family: Poppins-Medium;
    font-weight: 500;
`

export const ConfirmButton = styled.TouchableOpacity`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 40px;
`

export const ConfirmButtonGradient = styled(LinearGradient).attrs({
    start: {x: 0, y: 0},
    end: {x: 1, y: 1}
})`
    padding-horizontal: 24px;
    padding-vertical: 4px;
    justify-content: center;
    align-items: center;
    shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 12px;
    elevation: 6;
`

export const ConfirmButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-family: Poppins-SemiBold;
    font-weight: 600;
`
