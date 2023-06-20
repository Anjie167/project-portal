import React from "react";
import { Column, Row, Text } from "flutter_components/dist/flutter_components";
import LanguageSelector from "../widgets/language_selector";
import AppTemplate from "../widgets/app_template";
import * as Colors from "../../utils/colors"
import TextField from "../widgets/text_field"
import CustomButton from "../widgets/custom_button";
import Checkbox from "../widgets/check_box";
import { Link } from "react-router-dom";
import { useScreenSize } from '../screen_size_context';

function LoginScreen() {

    const { isSmallScreen, isMediumScreen, isLargeScreen } = useScreenSize();

    return (
        <AppTemplate>
            <div style={{ width: isSmallScreen ? "100%" : "95%" }}>
                <Row mainAxisAlignment="end">
                    {/* <Text
                        fontSize="20px"
                        fontWeight="700"
                        color={Colors.kPrimary}>
                        Anmelden
                    </Text> */}
                    <LanguageSelector />
                </Row>
            </div>
            <div style={{
                width: isSmallScreen ? "760px" : isMediumScreen ? "1024px" : "100%",
                display: "flex",
                justifyContent: "center",
            }}>
                <Column crossAxisAlignment="start">
                    <Row mainAxisAlignment={isSmallScreen ? "start" : isMediumScreen ? "start" : "center"}>
                        <Column crossAxisAlignment={isLargeScreen ? "center" : "start"}>
                            <Text fontSize="30px" color={Colors.kPrimary} fontWeight="500">Login</Text>
                            <Text fontSize="20px" color="grey">Enter your email and password</Text>
                        </Column>
                    </Row>
                    <TextField inputLength={isSmallScreen ? "500px" : isMediumScreen ? "1000px" : "100%"} />
                    <TextField inputLength={isSmallScreen ? "500px" : isMediumScreen ? "1000px" : "100%"} hintText="Enter Password" />
                    <Text color={Colors.kPrimary}>Password Vergessen?</Text>
                    <Checkbox />
                    <Link to="/client_portal" style={{ width: isSmallScreen ? "500px" : isMediumScreen ? "1000px" : "100%" }}>
                        <CustomButton width={isSmallScreen ? "100%" : isMediumScreen ? "70%" : "100%"} />
                    </Link>

                </Column>
            </div>
        </AppTemplate>
    );
}

export default LoginScreen