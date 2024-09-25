import React,{useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, CheckBox, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
export default function App() {
  const [password,setPassword]= useState('');
  const [length, setLength]=useState(8);
  const [includeLowercase, setIncludeLowercase]=useState(false);
  const [includeUppercase, setIncludeUppercase]=useState(false);
  const [includeNumbers, setIncludeNumbers]=useState(false);
  const [includeSymbols, setIncludeSymbols]=useState(false);
  //ham sinh mk 
  const generatePassword=()=> {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars= '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allChars='';
    if (includeLowercase) allChars +=lowercaseChars;
    if (includeUppercase) allChars+=uppercaseChars;
    if (includeNumbers) allChars+=numberChars;
    if (includeSymbols) allChars+=symbolChars;

    // neu ko co cai nao thi sinh chu thuong
    if (allChars === '') allChars = lowercaseChars;

    let generatePassword='';
    for(let i=0; i<length; i++){
      const randomIndex =Math.floor(Math.random() * allChars.length);
      generatePassword+=allChars[randomIndex];
    }
    //cap nhat mk moi vao state
    setPassword(generatePassword);
  }
  return (
    <SafeAreaView style={styles.container}>
     <LinearGradient
        colors={['#3B3B98', 'rgba(196, 196, 196, 0)']}
        style={styles.gradient}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        locations={[0.26, 0.87]} // Adjust this to control gradient stops
      />
      <View style={styles.page}>
        <View style={styles.flex1}>
          <Text style={{
            fontWeight:'bold',
            fontSize: 25,
            textAlign: 'center',
            color:'white'
          }}>
            PASSWORD{'\n'}GENERATOR
          </Text>
        </View>
        
        <View style={styles.flex1}>
          <TextInput 
          style={styles.passOutput}     
          editable={false}
          value={password}>
          </TextInput>
        </View>
       {/* thong tin mat khau */}
        <View style={styles.flex5}>
        {/* độ dài password */}
          <View style={styles.infoPassword}>
            <Text style={styles.textInfoPass}>
              Password length
            </Text>
            <TextInput 
              style={styles.textPasswordLength}
              keyboardType="numeric" // Chỉ cho phép nhập số
              onChangeText={(text) => {
                const value = parseInt(text); // Chuyển đổi giá trị nhập vào thành số
                if (!isNaN(value) && value > 0) { // Kiểm tra giá trị nhập có hợp lệ
                  setLength(value);
                } else {
                  setLength(8); // Đặt lại giá trị mặc định nếu nhập không hợp lệ
                }
              }}
              // value={length.toString()} // Hiển thị giá trị độ dài
            />
          </View>
        {/* chữ thường*/}
          <View style={styles.infoPassword}>
            <Text style={styles.textInfoPass}>
              Include lower case letters
            </Text>

            <CheckBox 
            value={includeLowercase}
            onValueChange={setIncludeLowercase}            
            style={styles.checkBox}/>
          </View>
        {/* chữ hoa */}
          <View style={styles.infoPassword}>
            <Text style={styles.textInfoPass}>
              Include upcase letters
            </Text>
            <CheckBox 
            value={includeUppercase} 
            onValueChange={setIncludeUppercase}
            style={styles.checkBox}/>
          </View>
        {/* kt số */}
          <View style={styles.infoPassword}>
            <Text style={styles.textInfoPass}>
              Include number
            </Text>
            <CheckBox 
            value={includeNumbers} 
            onValueChange={setIncludeNumbers}
            style={styles.checkBox}/>
          </View>
        {/* kí tự đặc biệt */}
          <View style={styles.infoPassword}>
            <Text style={styles.textInfoPass}>
              Include special symbol
            </Text>
            <CheckBox 
            value={includeSymbols} 
            onValueChange={setIncludeSymbols}
            style={styles.checkBox}/>
          </View>
        </View>
        
        <View style={styles.flex1}>
          <TouchableOpacity 
          onPress={generatePassword}
          style={styles.button}>
              <Text style={{
                fontWeight:'bold',
                fontSize: 18,
                textAlign: 'center',
                color:'white'
              }}>
                GENERATE PASSWORD
              </Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
    color:'white'
  },
  
  gradient: {
    flex:1,
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  page:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    backgroundColor: '#23235B',
    borderRadius:10,
    width: '95%',
    height: '95%'
  },
  flex1: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  passOutput:{
            backgroundColor: '#151537',
            color:'white',
            width: 300,
            height: '50%'
  },
  flex5:{
    flex:5,
    justifyContent:'center',
    alignItems:'center'
  },
  infoPassword:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 20,
    alignItems:'center',
    width:'90%'
  },
  textInfoPass:{
    flex:2,
    color: 'white',
    fontSize: 20,
    fontWeight:'bold'
  },
  textPasswordLength:{
    width:'40%',
    height: '40%',
    backgroundColor:'white'

  },
  checkBox: {
    alignSelf: 'center',
    width: 25,
    height: 25
  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#3B3B98',
    padding: 10,
    height: '60%',
  }
});
