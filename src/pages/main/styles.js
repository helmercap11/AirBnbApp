import styled from 'styled-components';

import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const AnnotationContainer = styled.View`
  alignitems: center;
  justifycontent: center;
  backgroundcolor: #fc6663;
  borderradius: 5;
  padding: 5px;
`;

export const AnnotationText = styled.Text`
  fontsize: 14px;
  color: #fff;
`;

export const NewButtonContainer = styled.TouchableHighlight`
  position: absolute;
  bottom: 54;
  left: 20;
  right: 20;
  alignself: center;
  borderradius: 5px;
  paddingvertical: 20px;
  backgroundcolor: #fc6663;
`;

export const ButtonsWrapper = styled.View`
  position: absolute;
  bottom: 54;
  left: 20;
  right: 20;
`;

export const CancelButtonContainer = styled.TouchableHighlight`
  alignself: stretch;
  borderradius: 5px;
  paddingvertical: 20px;
  backgroundcolor: #555;
  margintop: 20px;
`;

export const SelectButtonContainer = styled.TouchableHighlight`
  alignself: stretch;
  borderradius: 5px;
  paddingvertical: 20px;
  backgroundcolor: #fc6663;
`;

export const ButtonText = styled.Text`
  color: #fff;
  fontsize: 16px;
  textalign: center;
  fontweight: bold;
`;

export const Marker = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  alignself: center;
  top: ${Dimensions.get('window').height / 2 - 60};
`;

export const ModalContainer = styled.View`
  flex: 1;
  backgroundcolor: #fff;
`;

export const ModalImagesListContainer = styled.View``;

export const ModalImagesList = styled.ScrollView`
  paddinghorizontal: 20px;
  paddingtop: 20px;
`;

export const ModalImageItem = styled.Image`
  height: 100px;
  width: 100px;
  marginright: 10px;
`;

export const ModalButtons = styled.View`
  paddinghorizontal: 10px;
  paddingvertical: 5px;
  flexdirection: row;
  justifycontent: space-between;
`;

export const CameraButtonContainer = styled.TouchableHighlight`
  paddingvertical: 20px;
  paddinghorizontal: 40px;
`;

export const CancelButtonText = styled.Text`
  color: #333;
  fontsize: 18px;
  fontweight: bold;
`;

export const ContinueButtonText = styled.Text`
  color: #fc6663;
  fontsize: 18px;
  fontweight: bold;
`;

export const TakePictureButtonContainer = styled.TouchableHighlight`
  position: absolute;
  alignself: center;
  bottom: 20;
  width: 60px;
  height: 60px;
  backgroundcolor: #fff;
  borderradius: 30px;
  alignitems: center;
  justifycontent: center;
`;

export const TakePictureButtonLabel = styled.View`
  width: 52px;
  height: 52px;
  borderradius: 26px;
  backgroundcolor: #fc6663;
`;

export const DataButtonsWrapper = styled.View`
  flex: 1;
  alignitems: center;
  justifycontent: center;
  paddinghorizontal: 20px;
`;

export const MarkerContainer = styled.View`
  width: 30px;
  height: 30px;
  alignitems: center;
  justifycontent: center;
  backgroundcolor: #fff;
  borderradius: 15px;
`;

export const MarkerLabel = styled.View`
  width: 24px;
  height: 24px;
  borderradius: 12px;
  backgroundcolor: #7159c1;
`;

export const Form = styled.View`
  flex: 1;
  margintop: 20px;
`;

export const Input = styled.TextInput`
  paddinghorizontal: 20px;
  paddingvertical: 10px;
  borderradius: 5px;
  backgroundcolor: #fff;
  alignself: stretch;
  marginbottom: 10px;
  marginhorizontal: 20px;
  fontsize: 14px;
  borderwidth: 1px;
  bordercolor: #ccc;
`;

export const DetailsModalFirstDivision = styled.View`
  flex: 3;
  alignitems: center;
  justifycontent: center;
`;

export const DetailsModalSecondDivision = styled.View`
  flex: 4;
  alignitems: center;
  justifycontent: center;
`;

export const DetailsModalThirdDivision = styled.View`
  flex: 3;
  alignitems: center;
  justifycontent: center;
`;

export const DetailsModalBackButton = styled.Text`
  color: #fc6663;
  fontsize: 18px;
  fontweight: bold;
`;

export const DetailsModalRealtyTitle = styled.Text`
  fontsize: 28px;
  fontweight: bold;
  textalign: center;
  marginbottom: 15px;
  marginhorizontal: 40px;
`;

export const DetailsModalRealtySubTitle = styled.Text`
  fontsize: 22px;
  textalign: center;
  marginbottom: 15px;
  marginhorizontal: 40px;
`;

export const DetailsModalRealtyAddress = styled.Text`
  fontsize: 18px;
  color: #999;
  textalign: center;
  marginhorizontal: 60px;
`;

export const DetailsModalPrice = styled.Text`
  color: #fc6663;
  fontsize: 28px;
  fontweight: bold;
`;
