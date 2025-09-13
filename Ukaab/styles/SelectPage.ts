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
    margin-bottom: 20px;
`

export const TabContainer = styled.View`
    flex-direction: row;
    margin-horizontal: 25px;
    margin-top: 5px;
    border-bottom-width: 1px;
    border-bottom-color: #578C7A;
    width: 346px;
    gap: 6px;
`

export const ActiveTab = styled.View`
    width: 168px;
    min-height: 40px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    overflow: hidden;
`

export const InactiveTab = styled.TouchableOpacity`
    flex: 1;
    min-height: 40px;
    padding-horizontal: 12px;
    padding-vertical: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`

export const ActiveTabGradient = styled(LinearGradient).attrs({
    start: {x: 0, y: 0},
    end: {x: 1, y: 1}
})`
    flex: 1;
    padding-horizontal: 12px;
    padding-vertical: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

export const ActiveTabText = styled.Text`
    color: white;
    font-size: 12px;
    font-family: Inter-Medium;
    font-weight: 500;
    line-height: 20px;
    text-align-vertical: center;
    include-font-padding: false;
`

export const InactiveTabText = styled.Text`
    color: #578C7A;
    font-size: 12px;
    font-family: Inter-Medium;
    font-weight: 500;
    line-height: 20px;
    text-align-vertical: center;
    include-font-padding: false;
`

export const FilterContainer = styled.View`
    margin-horizontal: 25px;
    margin-top: 20px;
    margin-bottom: 28px;
    position: relative;
`

export const DropdownWrapper = styled.View`
    width: 100%;
    position: relative;
`

export const DropdownHeader = styled.TouchableOpacity`
    width: 100%;
    padding-vertical: 6px;
    padding-horizontal: 18px;
    background-color: rgba(178, 215, 202, 0.23);
    border-radius: 6px;
    border-width: 1.3px;
    border-color: #578C7A;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const DropdownHeaderText = styled.Text`
    color: #3B6255;
    font-size: 14px;
    font-family: Poppins-Regular;
`

export const DropdownArrow = styled.Text`
    color: #3B6255;
    font-size: 16px;
`

export const DropdownList = styled.View`
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    background-color: #D9DFDD;
    border-color: #3B6255;
    border-width: 1px;
    border-top-width: 0px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    overflow: hidden;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 4px;
    elevation: 3;
    z-index: 999;
`

export const OptionBox = styled.TouchableOpacity`
    width: 100%;
    height: 31px;
    justify-content: center;
    padding-left: 11px;
    border-bottom-width: 1px;
    border-bottom-color: #3B6255;
`

export const OptionText = styled.Text`
    color: rgba(59, 98, 85, 0.72);
    font-size: 16px;
    font-family: Poppins-Regular;
    font-weight: 400;
`

export const Content = styled.ScrollView`
    flex: 1;
    padding-horizontal: 20px;
    z-index: 1;
    elevation: 1;
`

export const ItemsGrid = styled.View`
    gap: 28px;
    margin-bottom: 28px;
`

export const ItemRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    gap: 4px;
`

export const ItemCard = styled.TouchableOpacity`
    align-items: center;
    gap: 4px;
`

export const TruckImageContainer = styled.View`
    width: 110px;
    height: 120px;
    padding: 8px;
    background: #FFFFFF;
    border-radius: 10px;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-color: #000;
    elevation: 3;
    shadow-radius: 4px;
    justify-content: center;
    align-items: center;
`

export const TruckImage = styled.Image`
    width: 110px;
    height: 100px;
`

export const DriverImageContainer = styled.View`
    width: 100px;
    height: 120px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 4px;
    border-color: #E5E7EB;
    elevation: 3;
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

export const ItemInfo = styled.View`
    align-items: center;
    gap: 2px;
`

export const ItemName = styled.Text`
    color: #223931;
    font-size: 12px;
    font-family: Poppins-Bold;
    font-weight: bold;
    text-align: center;
`

export const ItemSecondary = styled.Text`
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
