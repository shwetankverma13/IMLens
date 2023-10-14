import React, {useEffect} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {Skeleton} from '@rneui/base';
import {Image} from 'react-native-elements';
import {
  Card,
  Button,
  PaperProvider,
  Title,
  Paragraph,
} from 'react-native-paper';
import {getProductDetails} from '../../Actions/GetProdcutDetails';
import {getProductDetailsRequest} from '../../Constants/AxiosRequest';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
const CatalogPage = ({navigation}: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = async () => {
      const res = await getProductDetailsRequest('lang');
      // console.log(lang);
      dispatch(getProductDetails(res.data));
    };
    data();
  }, []);

  const DATA = useSelector(
    (state: any) => state.getProductData.getProductDetailsData,
  );
  console.log(DATA, 'abc');

  const NODATA = [{}, {}, {}, {}];

  return (
    <PaperProvider>
      <View style={styles.header}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{marginBottom: '14.5%'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Scanning');
              }}
              style={styles.backButton}>
              <Image
                source={require('../../Assets/barcode-scanner.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'white',
                  marginBottom: 55,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: '10%', marginTop: '2%'}}>
            <Button
              textColor="white"
              onPress={() => {
                navigation.navigate('Scanning');
              }}>
              <Title
                style={{
                  color: 'white',
                }}>
                Scan-Again
              </Title>
            </Button>
          </View>
        </View>
      </View>
      <View>
        <Text>No matching products found. Here are some other products</Text>
      </View>
      <Title
        style={{
          marginBottom: 10,
          marginLeft: '35%',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Catalogue
      </Title>
      <ScrollView
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {DATA.data
          ? DATA?.data?.map((item: any, index: any) => (
              <Card
                key={index}
                style={{width: '45%', margin: 5}}
                onPress={() =>
                  navigation.navigate('productDescription', {data: item})
                }>
                <Card.Cover source={{uri: `${item.URL}`}} />
                <Card.Content>
                  <Title>{item.Product_Name}</Title>
                  <Paragraph>{item.Description}</Paragraph>
                </Card.Content>
              </Card>
            ))
          : NODATA?.map((item: any, index: any) => (
              <Card key={index} style={{width: '45%', margin: 5}}>
                <Card.Content>
                  <Skeleton width={130} height={120} animation="pulse" />
                  <View style={{marginTop: 20}}>
                    <Skeleton width={80} height={10} animation="pulse" />
                  </View>
                  <View style={{marginTop: 10}}>
                    <Skeleton width={80} height={10} animation="pulse" />
                  </View>
                </Card.Content>
              </Card>
            ))}
      </ScrollView>
    </PaperProvider>
  );
};

export default CatalogPage;
