import React from 'react';
import CustomButton, {num, greetings} from '../comps/CustomButton';

export default {
    title:"Custom Button",
    component:CustomButton,
}; 


export const MyCustomButton = () => <CustomButton />
export const Pagewithcustombuttons = () => <div>
    <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick} />

    <CustomButton
    color="#3F5"
    text="Ok"
    onClick={OkClick}/>

    <CustomButton
    color="#F3F"
    text="Submit"
    onClick={SubmitClick} />

    <CustomButton
    color="#"
    text="Menu"
    onClick={MenuClick}/>
</div>

function CancelClick() {
    alert("Cancel")
}

function OkClick() {
    alert("OK")
}

function SubmitClick() {
    alert("Submit")
}

function MenuClick() {
    alert("Menu")
}