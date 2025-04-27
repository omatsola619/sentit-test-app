import React, {useState} from 'react';
import tw from 'twrnc';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import EmailField from '../components/EmailField';
import PasswordField from '../components/PasswordField';
import AuthButton from '../components/AuthButton';
import logo from '../assets/newDesign/logo-white.png';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [generalError, setGeneralError] = useState('');

  const handleLogin = () => {
    // Here you can add your login logic
    // For now, we'll just navigate to the home screen
    navigation.navigate('HomeStack');
  };

  return (
    <View>
      <View style={tw`bg-[#1F1B57] ios:pt-[30px] rounded-b-[30px]`}>
        <Image
          source={logo}
          style={tw`w-[50px] h-[50px] mt-[45px] self-center`}
        />

        <Text
          style={tw.style('text-[24px] text-[#FFFFFF] pt-[54px] pl-[29px]', {
            fontFamily: 'Sora-Bold',
          })}>
          Welcome back!
        </Text>
        <Text
          style={tw.style('text-[14px] text-[#D7E6F1] pl-[29px] pr-[170px]', {
            fontFamily: 'Sora-Regular',
          })}>
          Sign in to your account
        </Text>
        <View style={tw`mt-[20px] mx-[28px]`} testID="email-field-login">
          {generalError && (
            <Text
              style={tw`text-[12px] text-red-500 font-medium pb-[10px]`}
              testID="login-error-label">
              {generalError}
            </Text>
          )}
          <EmailField value={email} setValue={setEmail} />
        </View>
        {isEmailValid ? null : (
          <Text
            style={tw`text-[12px] text-[#F5B300] font-medium pt-[8px] mx-28px`}>
            {emailError}
          </Text>
        )}

        <View style={tw`mt-[4px] mx-[28px]`} testID="password-field-login">
          <PasswordField value={password} setValue={setPassword} />
        </View>
        {isPasswordValid ? null : (
          <Text
            style={tw`text-[12px] text-[#F5B300] font-medium pt-[8px] mx-[28px]`}>
            {passwordError}
          </Text>
        )}

        <View style={tw`flex-row mt-[20px] mb-[120px] ml-[28px]`}>
          <Text
            style={tw.style('text-[14px] text-[#D7E6F1] pr-[5px]', {
              fontFamily: 'Sora-Regular',
            })}>
            Not yet registered?
          </Text>
          <Pressable style={tw`h-[30px] w-[90px]`}>
            <Text
              testID="signup-login-scr"
              style={tw.style('text-[14px] text-[#01D6DC]', {
                fontFamily: 'Sora-Regular',
              })}>
              Sign up
            </Text>
          </Pressable>
        </View>

        <AuthButton name={'LOGIN'} testID="login-btn" onPress={handleLogin} />
      </View>

      <View
        testID="termsID"
        style={tw`mt-[70px] pt-[36px] mx-[20px] mb-[64px]`}>
        <Text
          style={tw.style(`text-[12px] text-[#4C4B63]  text-center `, {
            fontFamily: 'Sora-Regular',
          })}>
          By continuing, you confirm that you agree with our
        </Text>
        <Pressable onPress={() => {}}>
          <Text
            style={tw.style(
              `text-[12px] text-[#00B3FF]  text-center pt-[3px]`,
              {
                fontFamily: 'Sora-Regular',
              },
            )}>
            Terms and Conditions
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen; 