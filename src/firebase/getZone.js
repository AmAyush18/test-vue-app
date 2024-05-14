import { ref } from 'vue'
import { projectFirestore } from './config'

const getZone = (id) => {
    const zone = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let res = await projectFirestore.collection('zones')
                .doc(id)
                .get()
                
            zone.value = { ...res.data(), id:res.id }
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    load()

    return { zone, error, load }
}

export default getZone