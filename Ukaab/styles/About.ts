import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px;
`

export const ColumnContainer = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
`

export const ProfilePhotoPlaceholder = styled.View`
    width: 104px;
    height: 104px;
    border-radius: 100%;
    background-color: #578C7A;
`
export const ProfilePhotoImage = styled.Image`
    width: 104px;
    height: 104px;
    border-radius: 200px;
    background-color: #578C7A;
`

export const ProfilePhotoContainer = styled.View`
    position: relative;
`

export const EditProfilePhotoButton = styled.View`
    position: absolute;
    bottom: 2px;
    right: 2px;
    border-radius: 100%;
    padding: 8px;
    background-color: white;
`

export const EditIcon = styled.Image`
    width: 14px;
    height: 14px;
`

export const SubTitle = styled.Text`
    font-size: 16px;
    align-self: start;
    color: #A3A3A3;
    font-family: Poppins-Medium;
`

export const TextFieldContainer = styled.View`
    display: flex;
    padding: 0 16px;
    gap: 6px;
    flex-direction: column;
    width: 100%;

`

export const Label = styled.Text`
    font-size: 14px;
    color: #3B6255;
    font-family: Poppins-Medium;
`

export const TextField = styled.TextInput`
    background-color: #B2D7CA3B;
    border: 1px solid #578C7A;
    color: #3B6255;
    font-size: 14px;
    border-radius: 8px;
    padding: 10px 12px;
    width: 100%;
`

export const SocialIcon = styled.Image`
    width: 32px;
    height: 32px;
`