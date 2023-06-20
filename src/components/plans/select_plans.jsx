import React from "react";
import AppTemplate from "../widgets/app_template";
import { Row, Text, Container, ListViewBuilder, Column } from "flutter_components/dist/flutter_components";
import * as Colors from "../../utils/colors"
import LanguageSelector from "../widgets/language_selector";
import Checkbox from "../widgets/check_box";
import { useScreenSize } from '../screen_size_context';



function SelectPlans() {
    const {isLargeScreen } = useScreenSize();

    const plans = [
        { name: 'Basic', price: '$9.99', discount: '20% off' },
        { name: 'Smart', price: '$19.99', discount: '10% off' },
        { name: 'VIP', price: '$29.99', discount: '15% off' },
    ];

    const renderPlanItem = (index) => {
        const plan = plans[index];

        return (
            <div
                style={{
                    backgroundColor: "white",
                    margin: "10px",
                    padding: "10px",
                    width: "400px",
                    height: "430px",
                    borderRadius: "5px",
                    border: "1px solid grey"

                }}
            >
                <Column>
                    <Container color={Colors.kPrimary} alignment="center" borderRadius="5px" height="300px">
                        <Column mainAxisAlignment="center" crossAxisAlignment="center">
                            <Text style={{ color: 'white' }}>TARIF</Text>
                            <Text fontWeight="900" fontSize="40px" style={{ color: 'white' }}>{plan.name}</Text>
                        </Column>
                    </Container>
                    <Container>
                        <Row mainAxisAlignment="spaceBetween" crossAxisAlignment="start">
                            <Text fontWeight="700" fontSize="20px" color={Colors.kPrimary}>{plan.name}</Text>
                            <Container width="35%" alignment="space-between">
                                <Text fontWeight="700" fontSize="20px" color={Colors.kDeepRed}>{plan.price}</Text>
                                <Text color="black" textDecoration="line-through">{plan.discount}</Text>
                            </Container>
                        </Row>
                    </Container>
                    <div style={{
                        border: "1px solid grey",
                        padding: "10px",
                        margin: "10px",
                        width: "90%"
                    }}>
                        <Row mainAxisAlignment="center">
                            <Checkbox width="30px" space="40px" />
                        </Row>
                    </div>
                </Column>
            </div>
        );
    };
    return (
        <AppTemplate cross="center">
            <div style={{ width: "95%" }}>
                <Row mainAxisAlignment="spaceBetween">
                    <Text
                        fontSize="20px"
                        fontWeight="700"
                        color={Colors.kPrimary}>
                        Plans
                    </Text>
                    <LanguageSelector />
                </Row>
            </div>

            <div style={{ borderColor: 'black', borderWidth: 1, margin: "10px", padding: "10px", borderRadius: "5px", width: "95%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "row" }}>

                <ListViewBuilder
                    itemCount={plans.length}
                    itemBuilder={renderPlanItem}
                    scrollDirection={isLargeScreen ? "horizontal" : "vertical"}
                    padding="10px"
                />
            </div>

        </AppTemplate>
    );
}

export default SelectPlans