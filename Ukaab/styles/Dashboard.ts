import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Container = styled.View`
    flex: 1;
    background: #F8F9FA;
`;

export const HeaderContainer = styled.View`
    width: 100%;
    height: 69px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
`;

export const HeaderGradient = styled(LinearGradient)`
    width: 100%;
    height: 69px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.10);
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 22px;
    padding-top: 14.56px;
    padding-bottom: 14.56px;
`;

export const LogoContainer = styled.View`
    width: 296px;
    height: 35.88px;
    flex-direction: row;
    align-items: center;
    gap: 6px;
`;

export const LogoPlaceholder = styled.View`
    width: 56px;
    height: 38px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
`;

export const MenuButton = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
`;

export const MenuIcon = styled.View`
    position: absolute;
    left: 6.25px;
    top: 7.75px;
    flex-direction: column;
`;

export const ContentContainer = styled.View`
    padding-horizontal: 28px;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    gap: 23px;
`;

export const StatsContainer = styled.View`
    width: 100%;
    flex-direction: column;
    gap: 10px;
`;

export const StatCard = styled.View<{ height: number }>`
    width: 100%;
    height: ${props => props.height}px;
    padding-horizontal: 14px;
    padding-vertical: 19px;
    border-radius: 10px;
    overflow: hidden;
    shadow-color: rgba(0, 0, 0, 0.25);
    shadow-offset: 0px 4px;
    shadow-opacity: 1;
    shadow-radius: 4px;
    elevation: 4;
`;

export const StatCardGradient = styled(LinearGradient)`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`;

export const StatFrame90 = styled.View`
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
    flex-direction: row;
`;

export const StatIconContainer = styled.View`
    width: 70px;
    height: 65px;
    background: white;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const StatIconPlaceholder = styled.View`
    width: 48px;
    height: 48px;
    background-color: #3B6255;
    border-radius: 24px;
    position: absolute;
`;

export const StatTextContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 13px;
`;

export const StatTitle = styled.Text`
    color: white;
    font-size: 20px;
    font-family: Inter-Regular;
    font-weight: 400;
`;

export const StatNumber = styled.Text`
    color: white;
    font-size: 40px;
    font-family: Inter-Bold;
    font-weight: 700;
`;

export const ChartContainer = styled.View`
    width: 100%;
    height: 198px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: white;
    border-radius: 10px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    shadow-color: rgba(0, 0, 0, 0.33);
    shadow-offset: 0px 4px;
    shadow-opacity: 1;
    shadow-radius: 4px;
    elevation: 4;
`;

export const ChartHeader = styled.View`
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`;

export const ChartTitle = styled.Text`
    text-align: center;
    color: #223931;
    font-size: 12px;
    font-family: Poppins-Bold;
    font-weight: 700;
`;

export const WeekIndicator = styled.View`
    width: 22px;
    height: 19px;
    background: rgba(34, 57, 49, 0.36);
    border-radius: 5px;
`;

export const ChartContent = styled.View`
    width: 100%;
    height: 149px;
    position: relative;
    overflow: hidden;
`;

export const ChartLabel = styled.Text`
    position: absolute;
    text-align: center;
    color: black;
    font-size: 12px;
    font-family: Inter-Regular;
    font-weight: 400;
`;

export const ChartYAxisLabel = styled.Text`
    position: absolute;
    text-align: right;
    color: black;
    font-size: 12px;
    font-family: Inter-Regular;
    font-weight: 400;
`;

export const ChartArea = styled.View`
    width: 277.05px;
    height: 95.36px;
    position: absolute;
    left: 30.11px;
    top: 3.73px;
    border: 0.5px solid #269C0B;
`;

export const DriverStatusContainer = styled.View`
    width: 100%;
    height: 280px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: white;
    border-radius: 10px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    shadow-color: rgba(0, 0, 0, 0.33);
    shadow-offset: 0px 4px;
    shadow-opacity: 1;
    shadow-radius: 4px;
    elevation: 4;
`;

export const DriverStatusHeader = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const DriverStatusChart = styled.View`
    width: 277px;
    height: 240px;
    position: relative;
    overflow: hidden;
`;

export const DriverStatusSegment = styled.View`
    position: absolute;
`;

export const DriverStatusLabel = styled.Text`
    position: absolute;
    text-align: right;
    color: black;
    font-size: 12px;
    font-family: Inter-Regular;
    font-weight: 400;
`;
