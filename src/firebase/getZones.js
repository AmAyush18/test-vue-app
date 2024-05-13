import { ref } from 'vue'
import { projectFirestore } from './config'

const getZones = () => {
    const zones = ref({})
    const error = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('zones').get()

            zones.value = res.docs.map(doc => {
                return { ...doc.data(), id:doc.id }
            })
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { zones, error, load}
}

export default getZones