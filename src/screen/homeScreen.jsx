import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import { styles } from "./homeScreen.style";

const HomeScreen = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);
  const resultRef = useRef();

  const calculateLove = () => {
    // Simple calculation logic for demonstration purposes
    const lovePercentage = Math.floor(Math.random() * 101);
    setResult(`Love Percentage: ${lovePercentage}%`);
    setName1("");
    setName2("");
    setButtonDisabled(true);
  };

  const handleName1Change = (text) => {
    setName1(text);
    setButtonDisabled(text === "" || name2 === "");
    setResult("");
  };

  const handleName2Change = (text) => {
    setName2(text);
    setButtonDisabled(text === "" || name1 === "");
    setResult("");
  };

  const togglePrivacyModal = () => {
    setPrivacyModalVisible(!privacyModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Love Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first person name"
        onChangeText={handleName1Change}
        value={name1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second person name"
        onChangeText={handleName2Change}
        value={name2}
      />
      <TouchableOpacity
        style={[styles.button, buttonDisabled && styles.disabledButton]}
        onPress={calculateLove}
        disabled={buttonDisabled}
      >
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.privacyButton}
        onPress={togglePrivacyModal}
      >
        <Text style={styles.privacyButtonText}>Privacy Policy</Text>
      </TouchableOpacity>
      {result !== "" && (
        <View style={styles.resultContainer} ref={resultRef}>
          <Text style={styles.result}>{result}</Text>
        </View>
      )}

      <Modal
        visible={privacyModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Privacy Policy</Text>
            <Text style={styles.modalText}>
              This Love Calculator is for entertainment purposes only. The
              results provided are randomly generated and should not be taken
              seriously. We do not collect or store any personal information.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={togglePrivacyModal}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
