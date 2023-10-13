import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, removeItem} from '../../store/actions/cart';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Cart = ({navigation}: any) => {
  const total = useSelector((state: any) => state.CartReducer.globaltotal);
  const data = useSelector((state: any) => state.CartReducer);
  const dispatch = useDispatch();
  return (
    <>
      <ScrollView style={styles.white}>
        <View style={styles.cartHeader}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Image
                source={require('../../Assets/backbutton.png')}
                style={{width: 20, height: 20}}
              />
            </View>
            <View>
              <Button
                onPress={() => {
                  navigation.navigate('catalog');
                }}>
                {'Back'}
              </Button>
            </View>
          </View>
          <Text style={styles.heading}>Your Cart</Text>
        </View>
        <FlatList
          data={data.data}
          scrollEnabled={false}
          renderItem={({item}) => (
            <View style={styles.ListView}>
              <View style={styles.dos}>
                <View style={{backgroundColor: '#F6F6F6'}}>
                  <Image
                    source={{uri: `${item.image}`}}
                    style={{height: 32, width: 32}}
                  />
                </View>
                <View>
                  <Text>{item.title}</Text>
                  <Text style={styles.greyColor}>₹ {item.price}</Text>
                </View>
              </View>
              <View style={styles.rowView}>
                <View style={styles.counterbuttonview}>
                  <TouchableOpacity
                    style={styles.counterButtons}
                    onPress={() => {
                      dispatch(increment(item.id));
                    }}>
                    <Text style={styles.counterButtonText}>+</Text>
                  </TouchableOpacity>
                  <View style={styles.counterValue}>
                    <Text>{item.count}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.counterButtons}
                    onPress={() => {
                      dispatch(decrement(item.id));
                      if (data.data.length == 1 && item.count == 0) {
                        navigation.navigate('home');
                      }
                    }}>
                    <Text style={styles.counterButtonText}>-</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.pos}>
                  <View style={styles.totalBox}>
                    <Text style={styles.greyColor}>Total</Text>
                    <Text style={styles.weightedText}>₹ {item.total}</Text>
                  </View>
                  <AntDesign
                    size={20}
                    name="close"
                    color="tomato"
                    onPress={() => {
                      dispatch(decrement(item.id));
                      dispatch(removeItem(item.id, item.total, item.count));
                      if (data.data.length == 1) {
                        navigation.navigate('home'); //dispatch doesn't pause execution the next statements in your component. This means that any code that comes after the dispatch call will continue to execute immediately, and the component will re-render after the state update has completed.
                      }
                    }}
                  />
                </View>
              </View>
            </View>
          )}
        />
        <View style={styles.couponBox}>
          <View>
            <Text style={styles.weightedText}>WELCOME20</Text>
            <Text style={styles.greyColor}>Coupon Applied on the Bill</Text>
          </View>
          <Text style={styles.remove}>REMOVE</Text>
        </View>
        <View>
          <View style={styles.rowViewP}>
            <Text style={styles.weightedText}>Sub Total</Text>
            <Text style={styles.weightedText}>₹ {total}</Text>
          </View>
          <View style={styles.rowViewP}>
            <Text style={styles.greyColor}>Shipping</Text>
            <Text style={styles.greyColor}>₹ 500</Text>
          </View>
          <View style={styles.rowViewP}>
            <Text style={styles.greyColor}>Coupon Discount</Text>
            <Text style={styles.greyColor}>₹ 500</Text>
          </View>
        </View>
        <View style={styles.dottedLine} />
        <View style={styles.rowViewP}>
          <Text style={styles.weightedText}>Total Amount</Text>
          <Text style={styles.weightedText}>₹ {total}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.counterButtons}
        onPress={() => {
          navigation.navigate('successPage');
        }}>
        <Text>Place Order</Text>
      </TouchableOpacity>
    </>
  );
};
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
const styles = StyleSheet.create({
  rowViewP: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  counterButtons: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FEF2EE',
    borderRadius: 4,
  },
  counterbuttonview: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  totalBox: {
    gap: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  dos: {
    flexDirection: 'row',
    gap: 16,
  },
  couponBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 18,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  greyColor: {
    color: '#686868',
  },
  weightedText: {
    fontWeight: '600',
  },
  ListView: {
    padding: 16,
    gap: 15,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  dottedLine: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#686868',
    margin: 20,
  },
  cartHeader: {
    marginTop: 40,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    padding: 10,
    paddingBottom: 15,
  },
  remove: {
    fontSize: 13,
    fontWeight: '600',
    color: '#F15927',
  },
  heading: {
    fontWeight: '500',
    fontSize: 17,
  },
  counterValue: {
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderColor: '#D6D2D2',
    borderRadius: 4,
    borderWidth: 1,
  },
  counterButtonText: {
    color: 'tomato',
    fontWeight: '600',
  },
  white: {
    backgroundColor: 'white',
  },
});
export default Cart;
