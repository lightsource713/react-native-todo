import { View, Text, TouchableOpacity } from '@react-native';
import { styles } from './styles';

type Props = {
    name : string;
    onRemove: ( ) => void;
}

export default function TodoItem({ name, onRemove } : Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                
            </TouchableOpacity>
        </View>
    )

}