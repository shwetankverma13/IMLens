import React, {useEffect} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {Image} from 'react-native-elements';
import {
  Card,
  Button,
  FAB,
  PaperProvider,
  Title,
  Paragraph,
  IconButton,
  MD3Colors,
} from 'react-native-paper';
import {getProductDetails} from '../../Actions/GetProdcutDetails';
import {getProductDetailsRequest} from '../../Constants/AxiosRequest';
import {useDispatch, useSelector} from 'react-redux';
const CatalogPage = ({navigation}) => {
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

  return (
    <PaperProvider>
      <View style={{padding: 10}}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image
              source={require('../../Assets/barcode-scanner.png')}
              style={{width: 20, height: 20}}
            />
            {/* <IconButton
              icon="thumbs-up"
              iconColor={MD3Colors.error50}
              size={20}
            /> */}
          </View>
          <View>
            <Button
              onPress={() => {
                navigation.navigate('productDescription');
              }}>
              Scan-Again
            </Button>
          </View>
        </View>
        <Title>Catalog Title</Title>
      </View>
      <ScrollView
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {DATA.data &&
          DATA?.data?.map(item => (
            <Card
              key={item.id}
              style={{width: '45%', margin: 5}}
              onPress={() =>
                navigation.navigate('productDescription', {data: item})
              }>
              <Card.Cover source={{uri: `${item.URL}`}} />
              <Card.Content>
                <Title>{item.ProductName}</Title>
                <Paragraph>{item.Description}</Paragraph>
              </Card.Content>
            </Card>
          ))}
      </ScrollView>
    </PaperProvider>
  );
};

export default CatalogPage;
