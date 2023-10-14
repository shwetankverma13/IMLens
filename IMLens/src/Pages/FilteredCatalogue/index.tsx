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
  const data = route.params?.data;

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
          <View style={{marginBottom: '13.5%'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Scanning');
              }}
              style={styles.backButton}>
              <Image
                source={require('../../Assets/barcode-scanner.png')}
                style={{width: 20, height: 20}}
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
      <Title style={{marginBottom: 10, marginLeft: 10}}>Catalog Title</Title>
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
