import { Text, SafeAreaView, StyleSheet,View,Image, TouchableOpacity, TextInput } from 'react-native';

import React, {useState} from 'react'


export default function App() {
  //dung state ql sl va gia tien
  const [quantity, setQuantity] = useState(1);
  const pricePerItem=141800;
  // thanh tien: 
  const subtotal = quantity * pricePerItem;
  // ham dinh dang so tien theo tien viet nam
  const formattedPrice = (price) => new Intl.NumberFormat('vi-VN').format(price)+'d';
  // xu li so luong
  const handleQuantityChange =(action) => {
    if (action==='increase'){
      setQuantity(quantity+1);
    } else if (action === 'decrease' && quantity>1){
      setQuantity(quantity-1);
    }
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.product}>
        
        <View style={styles.productInfo}>
          <View style={styles.productImg}>
          <Image source={require('./book.png')}/>    
          </View>
          <View style={styles.info}>
            <Text style={styles.textTitle}>Nguyên hàm tích phân và ứng dụng</Text>
              
            <Text style={styles.textDes}>Cung cấp bởi Tiki Trading</Text>

            <Text style={styles.textDiscount}>141.800 đ</Text>
            
            <Text style={styles.textPrice}>141.800 đ</Text>

            <View style={styles.inde}>
              <View style={styles.quantityLine}>

                <TouchableOpacity style={styles.button} onPress={()=>handleQuantityChange('decrease')}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>                
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>handleQuantityChange('increase')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={{
                  color:'#134FEC',
                  fontWeight:'bold',
                  fontSize: 12
                }}>
                  Mua sau
              </Text>
            </View>
        
          </View>
        
    
        </View>
        <View style={styles.discountCode}>
          <View style={styles.saveCodeLine}>
            <Text style={{
              paddingRight: 15,
              color: '#011627',
              fontWeight: 'bold',
              fontSize: 12,
              

            }}>
              Mã giảm giá đã lưu
            </Text>
            <Text style={{
              fontSize: 12,
              color: '#134FEC',
              fontWeight: 'bold'

            }}>
              Xem tại đây
            </Text>
          </View>
          <View style={styles.applyDiscount}>
            <View style={styles.inputContainer}>
              <View style={styles.yellowBox}>

              </View>
              <TextInput
                placeholder='Mã giảm giá'
                style={{
                  fontWeight: 'bold',
                  fontSize: 18
                }}

              />
            </View>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                fontSize: 20
              }}>
                Áp dụng
              </Text>
            </TouchableOpacity>
            
            
          </View>
      
        </View>
    
      </View>
      
      <View style={{
        flex:2,
       
      }}>
         {/* Gift code section */}
      <View style={styles.giftCodeContainer}>
        <Text style={styles.giftCodeText}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?{' '}
          <Text style={styles.highlight}>Nhập tại đây?</Text>
        </Text>
      </View>

      {/* Subtotal section */}
      <View style={styles.subtotalContainer}>
        <Text style={styles.label}>Tạm tính</Text>
        <Text style={styles.price}>{formattedPrice(subtotal)}</Text>
      </View>

      {/* Total section */}
      <View style={styles.totalContainer}>
        <Text style={styles.label}>Thành tiền</Text>
        <Text style={styles.price}>{formattedPrice(subtotal)}</Text>
      </View>

      {/* Place order button */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  product:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    paddingTop: 100
  },
  productInfo:{
    flex: 1,
    flexDirection: 'row'
  },
  productImg:{
    flex:1,
    padding:10
  },
  info:{
    padding: 10,
    flex:2
  },
  textTitle:{
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: 12
    
  },
  textDes: {
    fontWeight:'bold',
    fontSize: 12,
  },
  textDiscount: {
    color:'red',
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 9
  },
  textPrice: {
    color: '#808080',
    fontSize: 12,
    paddingBottom: 9,
    textDecorationLine: 'line-through',
  },  

  inde: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  button: {
    width: 14,
    height: 16,
    backgroundColor: '#ccc',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  quantity: {
    flexDirection:'row',
    fontSize: 15,
    marginHorizontal:7 ,
    fontWeight: 'bold',
  },
  quantityLine:{
    flexDirection:'row',
    fontSize: 12,
    fontWeight: 'bold'
  },
  discountCode:{
    flex:1,
  },
  saveCodeLine: {
    flex:1,
    flexDirection: 'row',
    paddingLeft: 10
  },
  applyDiscount: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  yellowBox:{
    backgroundColor:'#F2DD1B',
    width: 32,
    height:16,
    marginRight: 10
  },
  inputContainer: {
    flex: 2,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 208,
    height:45,
  },
  applyButton: {
    width: 99,
    height:45,
    backgroundColor: '#0A5EB7',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  giftCodeContainer: {
    marginBottom: 20,
  },
  giftCodeText: {
    fontSize: 14,
    color: '#000',
  },
  highlight: {
    color: '#007bff', // Blue color for the link
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  price: {
    fontSize: 16,
    color: '#e60000', // Red color for the price
  },
  orderButton: {
    backgroundColor: '#e60000',
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }

  
});
