import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Container = styled.View`
    flex: 1;
    background: #F8F9FA;
`

export const TabContainer = styled.View`
    flex-direction: row;
    margin-horizontal: 25px;
    margin-top: 19px;
    border-bottom-width: 1px;
    border-bottom-color: #578C7A;
    width: 346px;
`

export const TabButton = styled.TouchableOpacity`
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

export const ActiveTab = styled.View`
    width: 168px;
    min-height: 40px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    overflow: hidden;
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

export const TabText = styled.Text`
    color: #578C7A;
    font-size: 12px;
    font-family: Inter-Medium;
    font-weight: 500;
    line-height: 20px;
    text-align-vertical: center;
    include-font-padding: false;
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

export const Content = styled.ScrollView`
    flex: 1;
    padding-horizontal: 23px;
    padding-top: 20px;
`

export const LoadsList = styled.View`
    gap: 20px;
    padding-bottom: 100px;
`

export const LoadCard = styled.View`
    padding: 15px;
    background: #DAE8E3;
    border-radius: 10px;
    border-width: 1px;
    border-color: rgba(59, 98, 85, 0.5);
    position: relative;
`

export const StatusBadge = styled.View`
    position: absolute;
    right: 10px;
    top: 10px;
    padding-horizontal: 10px;
    padding-vertical: 2px;
    background: #CBFFCE;
    border-radius: 100px;
`

export const StatusText = styled.Text`
    color: #0FA018;
    font-size: 9px;
    font-family: Inter-SemiBold;
    font-weight: 600;
    line-height: 20px;
    text-align-vertical: center;
    include-font-padding: false;
`

export const LoadInfo = styled.View`
    gap: 6px;
    margin-bottom: 16px;
`

export const CompanyText = styled.Text`
    color: #5F5F5F;
    font-size: 13px;
    font-family: Poppins-Regular;
    font-weight: 400;
    text-align-vertical: center;
    include-font-padding: false;
`

export const DateText = styled.Text`
    color: #5F5F5F;
    font-size: 11px;
    font-family: Poppins-Regular;
    font-weight: 400;
    text-align-vertical: center;
    include-font-padding: false;
`

export const LocationRow = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`

export const LocationText = styled.Text`
    flex: 1;
    color: #5F5F5F;
    font-size: 11px;
    font-family: Poppins-Regular;
    font-weight: 400;
    text-align-vertical: center;
    include-font-padding: false;
`

export const DetailRow = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`

export const DetailText = styled.Text`
    flex: 1;
    color: #5F5F5F;
    font-size: 11px;
    font-family: Poppins-Regular;
    font-weight: 400;
    text-align-vertical: center;
    include-font-padding: false;
`

export const DistanceText = styled.Text`
    color: #5F5F5F;
    font-size: 11px;
    font-family: Poppins-Regular;
    font-weight: 400;
    text-align-vertical: center;
    include-font-padding: false;
`

export const RateContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`

export const RateLabel = styled.Text`
    color: #5F5F5F;
    font-size: 11px;
    font-family: Poppins-Regular;
    font-weight: 400;
`

export const RateValue = styled.Text`
    color: #16A34A;
    font-size: 11px;
    font-family: Poppins-Regular;
    font-weight: 400;
`

export const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`

export const AcceptButton = styled.TouchableOpacity`
    flex: 1;
    height: 28px;
    border-radius: 8px;
    overflow: hidden;
`

export const RejectButton = styled.TouchableOpacity`
    flex: 1;
    height: 28px;
    border-radius: 8px;
    overflow: hidden;
`

export const AcceptButtonGradient = styled(LinearGradient).attrs({
    start: {x: 0, y: 0},
    end: {x: 1, y: 1}
})`
    flex: 1;
    height: 28px;
    padding-horizontal: 25px;
    padding-vertical: 9px;
    justify-content: center;
    align-items: center;
    gap: 11px;
    shadow-color: rgba(0, 0, 0, 0.25);
    shadow-offset: 0px 4px;
    shadow-opacity: 1;
    shadow-radius: 12px;
    elevation: 6;
`

export const RejectButtonGradient = styled(LinearGradient).attrs({
    start: {x: 0, y: 0},
    end: {x: 1, y: 1}
})`
    flex: 1;
    height: 28px;
    padding-horizontal: 25px;
    padding-vertical: 9px;
    justify-content: center;
    align-items: center;
    gap: 11px;
    shadow-color: rgba(0, 0, 0, 0.25);
    shadow-offset: 0px 4px;
    shadow-opacity: 1;
    shadow-radius: 12px;
    elevation: 6;
`

export const ButtonText = styled.Text`
    color: white;
    font-size: 13px;
    font-family: Poppins-SemiBold;
    font-weight: 600;
    text-align: center;
    text-align-vertical: center;
    line-height: 18px;
    include-font-padding: false;
`
