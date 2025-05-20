import { themeColors } from '@/theme/index';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
    const router = useRouter();

    
    return (
        <SafeAreaView className='flex-1' style={{backgroundColor: themeColors.bgColor(1)}}>
            <View className='flex-1 flex justify-around my-4'>
                <Text className='text-white font-bold text-4xl text-center'>Let's get started</Text>
                <View className='flex-row justify-center'>
                    <Image source={require('../assets/images/welcome.png')}
                    style={{width: 250, height: 250}}/>
                </View>
                <View className='space-y-4'>
                    <TouchableOpacity 
                    onPress={()=>router.push('signUp')}
                    className='py-3 bg-yellow-400 mx-7 rounded-xl'>
                        <Text className='text-xl font-bold text-center text-gray-700'>Sign Up</Text>
                    </TouchableOpacity>
                    <View className='flex-row justify-center'>
                        <Text className='text-white font-semibold'>Already have an account</Text>
                        <TouchableOpacity onPress={()=>router.push('login')}>
                            <Text className='font-semibold text-yellow-400'>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}