import React from "react";
import { withExpoSnack } from "nativewind";
import { PaperProvider, Appbar, Card } from "react-native-paper";
import { Text, View } from "react-native";
import { styled } from "nativewind";
import Form from "./components/form";
import ShowData from "./components/ShowData";
import axios from 'axios';


const StyledView = styled(View);
const StyledText = styled(Text);

const App = () => {
  const [data, setData] = React.useState([]);
  console.log("🚀 ~ App ~ data:", data);

  const handleSubmit = async (input) => {
    // Handle form submission
    console.log("input :", input.namaSekolah);

    // POST addData
    try {
      const response = await axios.post('http://localhost:8000/server.php', {
        namaSekolah: input.namaSekolah,
        alamat: input.alamat,
        kodePos: input.kodePos,
        nomorTeleponSekolah: input.nomorTeleponSekolah,
        emailSekolah: input.emailSekolah,
        tipeSekolah: input.tipeSekolah,
        jumlahSiswa: input.jumlahSiswa,
        provinsi: input.provinsi,
        kota: input.kota
      });
      console.log('Response:', response.data);
      // Handle success response
    } catch (error) {
      console.error('Error:', error);
      // Handle error response
    }

    // Update state with input data
    setData(input);
  };
  return (
    <>
      <PaperProvider>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Data Sekolah" />
        </Appbar.Header>
        <Card className="bg-white">
          <Card.Content>
            <StyledView className="container-fluid h-screen bg-white items-center ">
              {data.success ? (
                <ShowData data={data} />
              ) : (
                <Form handleSubmit={handleSubmit} />
              )}
            </StyledView>
          </Card.Content>
        </Card>
      </PaperProvider>
    </>
  );
};

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);
