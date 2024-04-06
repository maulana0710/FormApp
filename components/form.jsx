import React from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);
const StyledText = styled(Text);

const Form = ({ handleSubmit }) => {
  const [input, setInput] = React.useState({});
  const [provinceModalVisible, setProvinceModalVisible] = React.useState(false);
  const [cityModalVisible, setCityModalVisible] = React.useState(false);
  const [provinceError, setProvinceError] = React.useState(false);
  const [cityError, setCityError] = React.useState(false);
  const [schoolTypeError, setSchoolTypeError] = React.useState(false);
  const [schoolNameError, setSchoolNameError] = React.useState(false);
  const [addressError, setAddressError] = React.useState(false);
  const [postalCodeError, setPostalCodeError] = React.useState(false);
  const [schoolPhoneNumberError, setSchoolPhoneNumberError] =
    React.useState(false);
  const [schoolEmailError, setSchoolEmailError] = React.useState(false);
  const [studentsTotalError, setStudentsTotalError] = React.useState(false);

  const handleChange = (name, value) => {
    setInput({ ...input, [name]: value });
    if (name === "province") {
      setProvinceModalVisible(false);
      setProvinceError(false);
    } else if (name === "city") {
      setCityModalVisible(false);
      setCityError(false);
    }
  };

  const handleValidation = () => {
    let isValid = true;
    if (!input.tipeSekolah) {
      setSchoolTypeError(true);
      isValid = false;
    }
    if (!input.namaSekolah) {
      setSchoolNameError(true);
      isValid = false;
    }
    if (!input.alamat) {
      setAddressError(true);
      isValid = false;
    }
    if (!input.kodePos) {
      setPostalCodeError(true);
      isValid = false;
    }
    if (!input.provinsi) {
      setProvinceError(true);
      isValid = false;
    }
    if (!input.kota) {
      setCityError(true);
      isValid = false;
    }
    if (!input.nomorTeleponSekolah) {
      setSchoolPhoneNumberError(true);
      isValid = false;
    }
    if (!input.emailSekolah) {
      setSchoolEmailError(true);
      isValid = false;
    }
    if (!input.jumlahSiswa) {
      setStudentsTotalError(true);
      isValid = false;
    }
    return isValid;
  };

  const handleSubmitForm = () => {
    if (handleValidation()) {
      handleSubmit({...input, success: true});
      Alert.alert(
        'Berhasil Tambah data', // Alert title
        'Tambah pengguna baru berhasil dilakukan', // Alert message
        [
          {
            text: 'OK', // Button text
            onPress: () => console.log('OK Pressed'), // Action when OK is pressed
          },
        ],
        { cancelable: false } // Prevent dismissing by tapping outside the alert
      );
    }
  };

  return (
    <StyledView
      className="container-fluid"
      style={{ maxWidth: "50em", width: "100%" }}
    >
      {/* Tipe Sekolah */}
      <StyledView className="flex flex-row flex-wrap">
        <StyledText className="text-lg basis-1/2">Tipe Sekolah:*</StyledText>
        <StyledView>
          <StyledView className="flex flex-row flex-wrap">
            <RadioButton.Item
              className="basis-1/2"
              labelStyle={{ color: "black" }}
              color="black"
              label="Swasta"
              value="swasta"
              status={input.tipeSekolah === "swasta" ? "checked" : "unchecked"}
              onPress={() => handleChange("tipeSekolah", "swasta")}
            />
          </StyledView>
          <StyledView className="flex flex-row flex-wrap">
            <RadioButton.Item
              className="basis-1/2"
              labelStyle={{ color: "black" }}
              color="black"
              label="Negeri"
              value="negeri"
              status={input.tipeSekolah === "negeri" ? "checked" : "unchecked"}
              onPress={() => handleChange("tipeSekolah", "negeri")}
            />
          </StyledView>
        </StyledView>
        {schoolTypeError && (
          <Text style={{ color: "red" }}>Pilih Salah Satu!</Text>
        )}
      </StyledView>

      {/* Nama Sekolah */}
      <StyledView className="flex flex-row flex-wrap">
        <StyledText className="text-lg basis-1/2">Nama Sekolah:*</StyledText>
        <StyledTextInput
          className="border-2"
          style={{ width: "22rem" }}
          placeholder="Contoh: SMK Negeri 1 Bandung [untuk negeri]."
          value={input.namaSekolah}
          onChangeText={(text) => handleChange("namaSekolah", text)}
        />
        {schoolNameError && (
          <Text style={{ color: "red" }}>Nama Sekolah harus diisi</Text>
        )}
      </StyledView>

      {/* Alamat */}
      <StyledView className="flex flex-row flex-wrap">
        <StyledText className="text-lg basis-1/2">Alamat:*</StyledText>
        <StyledTextInput
          className="border-2"
          style={{ width: "22rem" }}
          placeholder=""
          value={input.alamat}
          onChangeText={(text) => handleChange("alamat", text)}
        />
        {addressError && (
          <Text style={{ color: "red" }}>Alamat harus diisi</Text>
        )}
      </StyledView>

      {/* Kode Pos */}
      <StyledView className="flex flex-row flex-wrap">
        <StyledText className="text-lg basis-1/2">Kode Pos:*</StyledText>
        <StyledTextInput
          className="border-2"
          style={{ width: "22rem" }}
          maxLength={5}
          placeholder=""
          value={input.kodePos}
          onChangeText={(text) => handleChange("kodePos", text)}
        />
        {postalCodeError && (
          <Text style={{ color: "red" }}>Kode Pos harus diisi</Text>
        )}
      </StyledView>

      {/* Province Dropdown */}
      <StyledView>
        <StyledView style={styles.dropdownContainer}>
          <Text style={styles.label}>Provinsi:*</Text>
          <TouchableOpacity
            onPress={() => setProvinceModalVisible(true)}
            style={styles.dropdownButton}
          >
            <Text>{input.provinsi || "Pilih Provinsi"}</Text>
          </TouchableOpacity>
        </StyledView>
        <Modal visible={provinceModalVisible} transparent animationType="slide">
          <StyledView style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => setProvinceModalVisible(false)}
              style={styles.overlay}
            ></TouchableOpacity>
            <StyledView style={styles.dropdownModal}>
              <TouchableOpacity
                onPress={() => handleChange("provinsi", "Jawa Barat")}
                style={styles.dropdownItem}
              >
                <Text>Jawa Barat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleChange("provinsi", "Jawa Tengah")}
                style={styles.dropdownItem}
              >
                <Text>Jawa Tengah</Text>
              </TouchableOpacity>
            </StyledView>
          </StyledView>
        </Modal>
        {provinceError && (
          <Text style={{ color: "red" }}>Provinsi harus diisi</Text>
        )}
      </StyledView>

      {/* Kota/Kabupaten Dropdown */}
      <StyledView>
        <StyledView style={styles.dropdownContainer}>
          <Text style={styles.label}>Kota/Kabupaten:*</Text>
          <TouchableOpacity
            onPress={() => setCityModalVisible(true)}
            style={styles.dropdownButton}
          >
            <Text>{input.kota || "Pilih kota/kabupaten"}</Text>
          </TouchableOpacity>
        </StyledView>
        <Modal visible={cityModalVisible} transparent animationType="slide">
          <StyledView style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => setCityModalVisible(false)}
              style={styles.overlay}
            ></TouchableOpacity>
            <StyledView style={styles.dropdownModal}>
              <TouchableOpacity
                onPress={() => handleChange("kota", "Depok")}
                style={styles.dropdownItem}
              >
                <Text>Depok</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleChange("kota", "Solo")}
                style={styles.dropdownItem}
              >
                <Text>Solo</Text>
              </TouchableOpacity>
            </StyledView>
          </StyledView>
        </Modal>
        {cityError && (
          <Text style={{ color: "red" }}>Kota/Kabupaten harus diisi</Text>
        )}
      </StyledView>

      {/* No Telepon Sekolah */}
      <StyledView className="flex flex-row flex-wrap">
        <StyledText className="text-lg basis-1/2">
          No Telepon Sekolah:*
        </StyledText>
        <StyledTextInput
          className="border-2"
          style={{ width: "22rem" }}
          placeholder="62"
          value={input.nomorTeleponSekolah}
          onChangeText={(text) => {
            // Check if the input is a valid integer
            if (/^\d+$/.test(text)) {
              // If it's valid, update the state
              handleChange("nomorTeleponSekolah", text);
            }
          }}
          keyboardType="numeric" // Set keyboardType to numeric to show the numeric keyboard
        />
        {schoolPhoneNumberError && (
          <Text style={{ color: "red" }}>
            Nomor Telepon Sekolah harus diisi
          </Text>
        )}
      </StyledView>

      {/* Email Sekolah */}
      <StyledView className="flex flex-row flex-wrap">
        <StyledText className="text-lg basis-1/2">Email Sekolah:*</StyledText>
        <StyledTextInput
          className="border-2"
          style={{ width: "22rem" }}
          placeholder=""
          value={input.emailSekolah}
          onChangeText={(text) => handleChange("emailSekolah", text)}
        />
        {schoolEmailError && (
          <Text style={{ color: "red" }}>Email Sekolah harus diisi</Text>
        )}
      </StyledView>

      {/* Facebook */}
      <StyledView className="flex flex-row flex-wrap">
        <StyledText className="text-lg basis-1/2">Facebook:</StyledText>
        <StyledTextInput
          className="border-2"
          style={{ width: "22rem" }}
          placeholder=""
          value={input.facebook}
          onChangeText={(text) => handleChange("facebook", text)}
        />
      </StyledView>

      {/* Jumlah Siswa */}
      <StyledView className="flex flex-row flex-wrap">
        <StyledText className="text-lg basis-1/2">Jumlah Siswa:*</StyledText>
        <StyledTextInput
          className="border-2"
          style={{ width: "22rem" }}
          placeholder=""
          value={input.jumlahSiswa}
          onChangeText={(text) => {
            // Convert the input to a number
            const number = parseInt(text);
            // Check if the input is a number and within the range of 1 to 100
            if (!isNaN(number) && number >= 1 && number <= 100) {
              // If it's valid, update the state
              handleChange("jumlahSiswa", number.toString());
            }
          }}
          keyboardType="numeric" // Set keyboardType to numeric to show the numeric keyboard
        />
        <StyledText className="text-sm opacity-50 basis-1/2">isi angka 1 - 100</StyledText>
        {studentsTotalError && (
          <Text style={{ color: "red" }}>Jumlah Siswa harus diisi</Text>
        )}
      </StyledView>

      {/* Submit button */}
      <StyledButton title="Submit" onPress={handleSubmitForm} color="#007AFF" />
    </StyledView>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "black",
    paddingBottom: 5,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dropdownModal: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
export default Form;
