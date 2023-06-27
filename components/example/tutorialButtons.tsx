// Library
import { Text, View, Image, Platform, StyleSheet } from 'react-native';
import { REACT_APP_NAME } from 'env';
// Assets
import ReactPNG from '../../assets/images/react.png';
import ReactSVG from '../../assets/svgs/react.svg';
import OverlordPNG from '../../assets/images/logo_white.png';
import OverlordSVG from '../../assets/svgs/logo.svg';
import AwsPNG from '../../assets/images/aws.png';
import AwsSVG from '../../assets/svgs/aws.svg';
import ePanelPNG from '../../assets/images/epanel.png';
import ePanelSVG from '../../assets/svgs/epanel.svg';
// Components
import LinkBtn from '../buttons/link';


const Tutorial = () => <>
  <View style={tutorial.headerSection}>
    <View style={{ marginLeft: 18, marginRight: 18 }}>
      <Text style={tutorial.welcomeText}>Welcome to your new Overlord Native Client,</Text>
      <Text style={tutorial.clientName}>{REACT_APP_NAME}</Text>
    </View>
  </View>
  <View style={tutorial.container}>
    <LearnBtn
      text="Learn Native"
      png={ReactPNG}
      svg={ReactSVG}
      link="https://reactnative.dev/docs/getting-started"
    />
    <LearnBtn
      text="Learn Overlord"
      png={OverlordPNG}
      svg={OverlordSVG}
      link="https://easter.company/overlord/getting_started"
    />
    <LearnBtn
      text="Learn AWS"
      png={AwsPNG}
      svg={AwsSVG}
      link="https://aws.amazon.com/free/compute/lightsail-vs-ec2/"
    />
    <LearnBtn
      text="Learn ePanel"
      png={ePanelPNG}
      svg={ePanelSVG}
      link="https://easter.company/overlord/epanel"
    />
  </View>
</>;


const LearnBtn = ({ text, link, png, svg } : any) => <LinkBtn
  link={link}
  style={tutorial.linkBtn}
  onHover={{backgroundColor: 'rgba(175,175,175,0.2)'}}
  onPress={{opacity: '25%'}}
>
  <Image source={Platform.OS === 'web' ? svg : png} style={tutorial.image}/>
  <Text style={tutorial.text}>{text}</Text>
</LinkBtn>


const tutorial = StyleSheet.create({

  headerSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 32
  },

  welcomeText: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 18,
  },

  clientName: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },

  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  linkBtn: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 16,
    padding: 16,
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(245,245,245,0.25)'
  },

  text: {
    color: '#ffff',
    marginTop: 16,
    textAlign: 'center'
  },

  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain'
  }

})

export default Tutorial;
