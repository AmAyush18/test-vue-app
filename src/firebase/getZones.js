import { ref } from 'vue'
import { projectFirestore } from './config'

const getZones = () => {
    const zones = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('zones')
                .orderBy('createdAt', 'desc')
                .get()

            zones.value = res.docs.map(doc => {
                // console.log(doc.data)
                return { ...doc.data(), id:doc.id }
            })

            // console.log(zones.value)
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    load()

    return { zones, error, load }
}

export default getZones