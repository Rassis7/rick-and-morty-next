import { Text } from "./styles";


export  function Status({value}: {value: string}) {
    if(value === 'Dead')  
        return <Text color="red">{value}</Text>

    if(value === 'Alive')  
        return <Text color="green">{value}</Text>

    return <Text color="gray">{value}</Text>
}