import { Formik } from 'formik';
import {  View, StyleSheet, TextInput, Button} from 'react-native';

export default function Form({ addArticle }) {

  return (
   <View>
       <Formik 
        initialValues={{name: '', anons: '', full: '', img: '' }} 
        onSubmit={(values, action) => {
            addArticle(values)
            action.resetForm()
        }}
       >
           {(props) => (
               <View>
                   <TextInput
                        style={styles.input}
                        value={props.values.name}
                        placeholder='Title'
                        onChangeText={props.handleChange('name')} />
                   <TextInput
                        style={styles.input}
                        multiline
                        value={props.values.anons}
                        placeholder='Brief description'
                        onChangeText={props.handleChange('anons')} />
                   <TextInput 
                        multiline
                        style={styles.input}
                        value={props.values.full}
                        placeholder='Your article'
                        onChangeText={props.handleChange('full')} />
                   <TextInput
                        multiline
                        style={styles.input} 
                        value={props.values.img}
                        placeholder='Add image'
                        onChangeText={props.handleChange('img')} />
                   <Button title='Submit' onPress={props.handleSubmit} />
               </View>
           )}
       </Formik>
   </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 15,
        padding: 20,
        borderWidth: 1,
        borderColor: 'silver',
        borderRadius: 5,
        paddingTop: 20
    }
})