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
const items = [
  {
    id: '1',
    title: 'Item 1',
    image: require('IMLens/src/Assets/418QpEn9JKL._AC_UF894,1000_QL80_DpWeblab_.jpg'),
    description: 'Description for Item 1',
  },
  {
    id: '2',
    title: 'Item 2',
    image: require('IMLens/src/Assets/418QpEn9JKL._AC_UF894,1000_QL80_DpWeblab_.jpg'),
    description: 'Description for Item 2',
  },
  {
    id: '3',
    title: 'Item 3',
    image: require('IMLens/src/Assets/418QpEn9JKL._AC_UF894,1000_QL80_DpWeblab_.jpg'),
    description: 'Description for Item 3',
  },
  {
    id: '4',
    title: 'Item 4',
    image: require('IMLens/src/Assets/418QpEn9JKL._AC_UF894,1000_QL80_DpWeblab_.jpg'),
    description: 'Description for Item 4',
  },
  {
    id: '5',
    title: 'Item 5',
    image: require('IMLens/src/Assets/418QpEn9JKL._AC_UF894,1000_QL80_DpWeblab_.jpg'),
    description: 'Description for Item 5',
  },
  {
    id: '6',
    title: 'Item 6',
    image: require('IMLens/src/Assets/418QpEn9JKL._AC_UF894,1000_QL80_DpWeblab_.jpg'),
    description: 'Description for Item 6',
  },
  // Add more items as needed
];
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
              source={require('IMLens/src/Assets/barcode-scanner.png')}
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
        {items.map(item => (
          <Card key={item.id} style={{width: '45%', margin: 5}}>
            <Card.Cover source={item.image} />
            <Card.Content>
              <Title>{item.description}</Title>
              <Paragraph>Additional information or details go here.</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </PaperProvider>
  );
};

export default CatalogPage;
