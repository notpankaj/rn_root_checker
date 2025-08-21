import { Text, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const Header = () => {
    const inset = useSafeAreaInsets()

    return <View style={{
        paddingTop: inset.top + 15, paddingBottom: 15, backgroundColor: '#3700B3', width: '100%', justifyContent: 'center', paddingHorizontal: '5%'
    }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 24 }}>Root Checker</Text>
            <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: 'black' }}>
            </TouchableOpacity>
        </View>
    </View>
}

export default Header