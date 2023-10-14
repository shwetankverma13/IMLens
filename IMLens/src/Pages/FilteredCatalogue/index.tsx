import React, {useEffect} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Skeleton} from '@rneui/base';
import {Image} from 'react-native-elements';
import {
  Card,
  Button,
  PaperProvider,
  Title,
  Paragraph,
} from 'react-native-paper';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
const FilteredCatalogPage = ({navigation}: any) => {
  const route = useRoute();
  let data = route.params?.data;
  // data = [
  //   {
  //     Amt: '1,800/-',
  //     Category: 'Bath Fittings',
  //     Description:
  //       'Precision Showering Redefined: Where Technology Meets Your Daily Refresh.',
  //     Labels: 'Tap',
  //     Product_Name: 'IVAS MA-36015 SWAN NECK PILLAR COCK WITH SWINGING SPOUT',
  //     SKU: 'IM10037466',
  //     URL: 'https://www.ivas.homes/images/products/bath-fittings/faucets/matrix/IM10037466.webp',
  //   },
  // ];

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
              onPress={() => {
                navigation.navigate('Scanning');
              }}>
              <Title style={{color: 'white'}}>Scan-Again</Title>
            </Button>
          </View>
        </View>
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
        {data
          ? data?.map((item: any, index: any) => (
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

export default FilteredCatalogPage;
