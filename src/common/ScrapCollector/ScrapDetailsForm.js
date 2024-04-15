import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const categories = ['Plastic', 'Metal', 'Paper', 'Electronic', 'Car'];

const MyForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');

  const handleImageUpload = image => {
    // Handle image upload here
    setImages([...images, image]);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted!');
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
        <View style={styles.uploadContainer}>
          <TouchableOpacity onPress={handleImageUpload}>
            <Text>Upload Images</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          {/* Display selected images here */}
        </View>
        {/* Display uploaded images here */}
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          multiline
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <Button title="Submit" onPress={handleSubmit} />
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
    borderColor: 'black',
    borderWidth: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  textArea: {
    height: 100,
  },
  common: {
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'gray',
  },
  uploadContainer: {
    marginBottom: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius: 10, // A large number for a full round border
    borderColor: 'gray',
    width: '100%', // Adjust as needed
    height: 80, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default MyForm;
