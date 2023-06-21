import { useState } from "react";
import AppTemplate from "../widgets/app_template";
import { Column, Row, Container } from "flutter_components"
import DropDown from "../widgets/dropdown";
import { kLightGrey } from "../../utils/colors";
import ImagePicker from "../widgets/image_picker";
import MyDatePicker from "../widgets/date_picker";
import TextField from "../widgets/text_field";
import CustomButton from "../widgets/custom_button";
import { Link } from "react-router-dom";
import { selectPlan } from "../../utils/routes";
import { useScreenSize } from '../screen_size_context';



function ApplicationScreen() {

    const titleOptions = [
        { value: "mr", label: "Mr." },
        { value: "mrs", label: "Mrs." },
    ];

    const formAddressOptions = [
        { value: "a", label: "Option 1" },
        { value: "b", label: "Option 2" },
    ];
    const teleOptions = [
        { value: "GER", label: "+966" },
        { value: "NG", label: "+234" },
        { value: "IN", label: "+91" },
    ];

    const countryOptions = [
        { value: "GER", label: "Germany" },
        { value: "ENG", label: "England" },
    ];

    const sexOptions = [
        { value: "m", label: "Male" },
        { value: "f", label: "Female" },
        { value: "none", label: "Other" },
    ];

    const trainingOptions = [
        { value: "a", label: "Option 1" },
        { value: "b", label: "Option 2" },
    ];

    const maritalOptions = [
        { value: "a", label: "Married" },
        { value: "b", label: "Dating" },
        { value: "c", label: "Single" },
    ];

    const [title, setTitle] = useState("");
    const [c_o, setC_o] = useState("");
    const [formOfAddress, setFormOfAddress] = useState("");
    const [streetHouseNo, setStreetHouseNo] = useState("");
    const [firstName, setFirstName] = useState("");
    const [streetOptional, setStreetOptional] = useState("");
    const [otherName, setOtherName] = useState("");
    const [postCode, setPostCode] = useState("");
    const [surname, setSurname] = useState("");
    const [town, setTown] = useState("");
    const [telephone, setTelephone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [nativeTown, setNativeTown] = useState("");
    const [country, setCountry] = useState("");
    const [sex, setSex] = useState("");
    const [training, setTraining] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");


    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    const { isSmallScreen, isMediumScreen, isLargeScreen } = useScreenSize();


    return (
        <AppTemplate width={"1700px"}>
            <div style={{ justifyContent: "center", width: isSmallScreen ? "760px" : isMediumScreen ? "1000px" : "100%" }}>
                <form onSubmit={handleSubmit}>
                    {/* Personal Details Section */}
                    <h2 style={{ paddingLeft: "2%" }}>Personal Details</h2>
                    <Container height={isLargeScreen ? "500px" : "800px"} borderRadius="10px" width={isSmallScreen ? "700px" : isMediumScreen ? "900px" : "92%"} margin="2%" padding="2%">
                        {isLargeScreen
                            ? (<Column mainAxisAlignment="spaceBetween">
                                <Row mainAxisAlignment="spaceBetween">
                                    <DropDown label="Title" value={title} onChange={setTitle} options={titleOptions} />
                                    <TextField label="C/O" value={c_o} onChange={(e) => setC_o(e)} />
                                </Row>
                                <Row mainAxisAlignment="spaceBetween">
                                    <DropDown
                                        label="Form of Address"
                                        value={formOfAddress}
                                        onChange={setFormOfAddress}
                                        options={formAddressOptions}
                                    />
                                    <TextField label="Street and House No" value={streetHouseNo} onChange={(e) => setStreetHouseNo(e)} />


                                </Row>

                                <Row mainAxisAlignment="spaceBetween">
                                    <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e)} />
                                    <TextField label="Street (Optional)" value={streetOptional} onChange={(e) => setStreetOptional(e)} />

                                </Row>

                                <Row mainAxisAlignment="spaceBetween">
                                    <TextField label="Other Name" value={otherName} onChange={(e) => setOtherName(e)} />
                                    <TextField label="Post Code" value={postCode} onChange={(e) => setPostCode(e)} />

                                </Row>

                                <Row mainAxisAlignment="spaceBetween">
                                    <TextField label="Surname" value={surname} onChange={(e) => setSurname(e)} />
                                    <TextField label="Town" value={town} onChange={(e) => setTown(e)} />

                                </Row>

                                <Row mainAxisAlignment="start">
                                    <DropDown align="" space="25%" label="Telephone" value={telephone} onChange={setTelephone} options={teleOptions} width="300px" />
                                    <TextField value={c_o} onChange={(e) => setC_o(e)} hintText="Enter phone number" width="540px" />
                                </Row>

                            </Column>) :
                            (
                                <Column mainAxisAlignment="spaceBetween">
                                    <DropDown label="Title" value={title} onChange={setTitle} options={titleOptions} />
                                    <TextField label="C/O" value={c_o} onChange={(e) => setC_o(e)} />
                                    <DropDown
                                        label="Form of Address"
                                        value={formOfAddress}
                                        onChange={setFormOfAddress}
                                        options={formAddressOptions}
                                    />
                                    <TextField label="Street and House No" value={streetHouseNo} onChange={(e) => setStreetHouseNo(e)} />
                                    <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e)} />
                                    <TextField label="Street (Optional)" value={streetOptional} onChange={(e) => setStreetOptional(e)} />
                                    <TextField label="Other Name" value={otherName} onChange={(e) => setOtherName(e)} />
                                    <TextField label="Post Code" value={postCode} onChange={(e) => setPostCode(e)} />
                                    <TextField label="Surname" value={surname} onChange={(e) => setSurname(e)} />
                                    <TextField label="Town" value={town} onChange={(e) => setTown(e)} />
                                    <Row>
                                        <DropDown align="" space="25%" label="Telephone" value={telephone} onChange={setTelephone} options={teleOptions} width="300px" />
                                        <TextField value={c_o} onChange={(e) => setC_o(e)} hintText="Enter phone number" width="540px" />
                                    </Row>
                                </Column>
                            )
                        }
                    </Container>


                    {/* Additional Details Section */}
                    <h2 style={{ paddingLeft: "2%" }}>Additional Details</h2>
                    {isLargeScreen
                        ? (<Row>
                            <Container color={kLightGrey} height="500px" borderRadius="10px" width={isSmallScreen ? "700px" : isMediumScreen ? "1000px" : "70%"} margin="2%" padding="2%">
                                <Column mainAxisAlignment="end">
                                    <MyDatePicker value={birthday} onChange={setBirthday} />
                                    <TextField label="Native Town" value={nativeTown} onChange={(e) => setNativeTown(e)} />
                                    <DropDown
                                        label="Country"
                                        value={country}
                                        onChange={setCountry}
                                        options={countryOptions}
                                    />
                                    <DropDown label="Sex" value={sex} onChange={setSex} options={sexOptions} />
                                    <DropDown label="Training" value={training} onChange={setTraining} options={trainingOptions} />
                                    <DropDown
                                        label="Marital Status"
                                        value={maritalStatus}
                                        onChange={setMaritalStatus}
                                        options={maritalOptions}
                                    />

                                </Column>
                            </Container>

                            <ImagePicker />

                        </Row>)
                        : (
                            (<Column crossAxisAlignment="center">
                                <ImagePicker />

                                <Container color={kLightGrey} height="500px" borderRadius="10px" width={isSmallScreen ? "700px" : isMediumScreen ? "1000px" : "70%"} margin="2%" padding="2%">
                                    <Column mainAxisAlignment="end">
                                        <MyDatePicker value={birthday} onChange={setBirthday} />
                                        <TextField label="Native Town" value={nativeTown} onChange={(e) => setNativeTown(e)} />
                                        <DropDown
                                            label="Country"
                                            value={country}
                                            onChange={setCountry}
                                            options={countryOptions}
                                        />
                                        <DropDown label="Sex" value={sex} onChange={setSex} options={sexOptions} />
                                        <DropDown label="Training" value={training} onChange={setTraining} options={trainingOptions} />
                                        <DropDown
                                            label="Marital Status"
                                            value={maritalStatus}
                                            onChange={setMaritalStatus}
                                            options={maritalOptions}
                                        />

                                    </Column>
                                </Container>

                            </Column>)
                        )
                    }


                    {/* Continue Button */}
                    <Row mainAxisAlignment="center">
                        <Link to={selectPlan} style={{ width: "50%", marginBottom: "20px" }}>
                            <CustomButton label="Continue" width="100%" />
                        </Link>

                    </Row>
                </form>
            </div>
        </AppTemplate >
    );
}

export default ApplicationScreen