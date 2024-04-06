import React from "react";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const ShowData = ({ data }) => {
  return (
    <Card style={{ backgroundColor: "white" }}>
      <Card.Content>
      <StyledText className="text-xl font-bold text-center">BERHASIL TAMBAH DATA</StyledText>
        <StyledView>
        {Object.entries(data).map(([key, value], index) => {
            return (
              <View key={index}>
                <StyledText>
                  {key === "success" ? "" : `${key}: ${value}`}
                </StyledText>
              </View>
            );
          })}
        </StyledView>
      </Card.Content>
    </Card>
  );
};

export default ShowData;
