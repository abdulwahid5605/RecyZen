import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import SuccessPopup from './SuccessPopUp';

const categories = ['Plastic', 'Metal', 'Paper', 'Electronic', 'Car'];

const MyForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [images, setImages] = useState([]);

  const handleImageUpload = image => {
    // Handle image upload here
    setImages([...images, image]);
  };

  const handleSubmit = () => {
    // Handle form submission here
    setShowSuccessPopup(true);
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Enter Scrap Details</Text>
      </View>
      <View style={styles.formContainer}>
        <Picker
          style={styles.common}
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCategory(itemValue)
          }>
          <Picker.Item label="Select Category" value="" style={styles.picker} />
          {categories.map((category, index) => (
            <Picker.Item key={index} label={category} value={category} />
          ))}
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Estimated Weight of  Scrap"
          value={input1}
          onChangeText={text => setInput1(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="City/Area"
          value={input2}
          onChangeText={text => setInput2(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={input3}
          onChangeText={text => setInput3(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Contact Number"
          value={input4}
          onChangeText={text => setInput4(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={input5}
          onChangeText={text => setInput5(text)}
        />
        <View style={styles.uploadContainer}>
          <TouchableOpacity
            onPress={handleImageUpload}
            style={styles.uploadbutton}>
            <Text style={styles.uploadbuttonText}>Upload Images</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          {/* Display selected images here */}
        </View>
        {/* Display uploaded images here */}
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        {showSuccessPopup && <SuccessPopup onClose={handleClosePopup} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6F0EC',
    height: '100%',
  },
  headingContainer: {
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heading: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
  },
  formContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
  },

  common: {
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'gray',
    marginBottom: 10,
  },
  uploadContainer: {
    marginBottom: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#50C2C9',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: 'bold',
  },

  uploadbutton: {
    backgroundColor: '#50C2C9',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 30,
    width: 140,
  },
  uploadbuttonText: {
    letterSpacing: 0,
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default MyForm;
