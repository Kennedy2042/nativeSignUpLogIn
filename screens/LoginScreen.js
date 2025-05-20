import { themeColors } from '@/theme'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen() {

    const router = useRouter();


    return (
        <View className='flex-1 bg-white' style={{ backgroundColor: themeColors.bgColor(1) }}>
            <SafeAreaView className='flex'>
                <View className='flex-row justify-start'>
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className='bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4'
                    >
                        <ArrowLeftIcon size={20} color='black' />
                    </TouchableOpacity>
                </View>
                <View className='flex-row justify-center'>
                    <Image source={require('../assets/images/welcome.png')}
                        style={{ width: 200, height: 200 }} />
                </View>
            </SafeAreaView>
            <View className='flex-1 bg-white px-8 pt-8'
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View className=' space-y-2'>
                    <Text className='text-gray-700 ml-4'>Email Address</Text>
                    <TextInput
                        className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'
                        value='john@gmail.com'
                        placeholder='Enter Email'
                    />
                    <Text className='text-gray-700 ml-4'>Password</Text>
                    <TextInput
                        className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'
                        secureTextEntry
                        value='test12345'
                        placeholder='Enter Password'
                    />
                    <TouchableOpacity className='flex items-end mb-3'>
                        <Text className='text-gray-700'>Forgot Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='py-3 bg-yellow-400 rounded-xl'>
                        <Text className='text-xl text-gray-700 font-bold text-center'>Login</Text>
                    </TouchableOpacity>
                </View>
                <Text className='text-xl text-gray-700 font-bold text-center py-5'>Or</Text>
                <View className='flex-row justify-center'>
                    <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl mr-6'>
                        <Image source={require("../assets/images/google.jpeg")} className='w-10 h-10' />
                    </TouchableOpacity>
                    <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl mr-6'>
                        <Image source={require("../assets/images/apple.png")} className='w-10 h-10' />
                    </TouchableOpacity>
                    <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
                        <Image source={require("../assets/images/facebook.jpeg")} className='w-10 h-10' />
                    </TouchableOpacity>
                </View>
                <View className='flex-row justify-center mt-3'>
                    <Text className='text-gray-500 font-semibold'>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('signUp')}>
                        <Text className='font-semibold text-yellow-500'>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}