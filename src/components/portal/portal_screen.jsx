import React from "react";
import * as Icon from '@mui/icons-material';
import { Container, Row, Text } from "flutter_components/dist/flutter_components";
import LanguageSelector from "../widgets/language_selector";
import AppTemplate from "../widgets/app_template";
import GridWithContainer from "../widgets/grid_container";


function PortalScreen() {

    return (
        <AppTemplate>
            {/* Application Section */}
            <Container width="95%" padding="0px 0px 0px 20px" height="10%">
                <Row mainAxisAlignment="spaceBetween">
                    <Text fontSize="20px" fontWeight="500">Application</Text>
                    <Row mainAxisSize="min" crossAxisAlignment="center">
                        <Icon.Settings />
                        <LanguageSelector />
                        <Icon.LogoutOutlined />
                    </Row>
                </Row>
            </Container>

            <GridWithContainer />

        </AppTemplate>
    );
}

export default PortalScreen